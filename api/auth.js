function parseCookies(cookieHeader) {
  return (cookieHeader || '').split(';').reduce((cookies, pair) => {
    const [key, ...rest] = pair.split('=');
    if (!key) return cookies;
    cookies[key.trim()] = decodeURIComponent(rest.join('=').trim() || '');
    return cookies;
  }, {});
}

function serializeCookie(name, value, options = {}) {
  let cookie = `${name}=${encodeURIComponent(value)}`;
  if (options.maxAge !== undefined) cookie += `; Max-Age=${options.maxAge}`;
  if (options.path) cookie += `; Path=${options.path}`;
  if (options.httpOnly) cookie += '; HttpOnly';
  if (options.secure) cookie += '; Secure';
  if (options.sameSite) cookie += `; SameSite=${options.sameSite}`;
  return cookie;
}

export default async function handler(req, res) {
  const { code, state, error } = req.query;
  const host = req.headers['x-forwarded-host'] || req.headers.host || 'localhost:3000';
  const protocol = req.headers['x-forwarded-proto'] || (host.includes('localhost') ? 'http' : 'https');
  const baseUrl = `${protocol}://${host}`;
  const redirectUri = `${baseUrl}/api/auth`;

  const clientId = process.env.OAUTH_GITHUB_CLIENT_ID;
  const clientSecret = process.env.OAUTH_GITHUB_CLIENT_SECRET;

  console.log('Auth handler called:', { host, protocol, baseUrl, redirectUri, hasCode: !!code, hasError: !!error });

  if (!clientId || !clientSecret) {
    console.error('OAuth credentials not configured', { clientId: !!clientId, clientSecret: !!clientSecret });
    return res.status(500).json({ error: 'OAuth credentials not configured' });
  }

  // Handle OAuth errors from GitHub
  if (error) {
    console.error('GitHub OAuth error:', error);
    return res.status(400).json({ error: `OAuth error: ${error}` });
  }

  // Handle OAuth callback (code exchange)
  if (code) {
    try {
      const codeValue = Array.isArray(code) ? code[0] : code;
      console.log('Exchanging code for token:', { redirectUri });

      const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
          'User-Agent': 'Circle-Spring-CMS',
        },
        body: new URLSearchParams({
          client_id: clientId,
          client_secret: clientSecret,
          code: codeValue,
          redirect_uri: redirectUri,
        }).toString(),
      });

      const tokenData = await tokenResponse.json();
      
      if (!tokenResponse.ok) {
        console.error('Token exchange failed:', {
          status: tokenResponse.status,
          error: tokenData.error,
          errorDescription: tokenData.error_description,
        });
        throw new Error(`Token request failed: ${tokenData.error_description || tokenData.error}`);
      }

      if (tokenData.error) {
        console.error('GitHub returned error in token response:', tokenData);
        throw new Error(`GitHub OAuth error: ${tokenData.error_description || tokenData.error}`);
      }

      if (!tokenData.access_token) {
        console.error('No access token in response:', tokenData);
        throw new Error('No access token received from GitHub');
      }

      console.log('Token exchange successful');
      const token = tokenData.access_token;
      const successMsg = 'authorization:github:success:' + JSON.stringify({ token, provider: 'github' });

      const html = `
        <!DOCTYPE html>
        <html>
          <head>
            <title>Authorization Success</title>
            <style>
              body { font-family: -apple-system, sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; background: #f5f5f5; }
              .container { text-align: center; background: white; padding: 2rem; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
              .success { color: #28a745; font-size: 1.2em; margin-bottom: 1rem; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="success">✅ Authorization successful!</div>
              <p>Closing window...</p>
            </div>
            <script>
              (function() {
                var successMsg = ${JSON.stringify(successMsg)};
                var provider = 'github';

                if (!window.opener) {
                  document.body.innerHTML = '<div class="container"><p>Pop-up was blocked. Please allow pop-ups for this site and try again.</p></div>';
                  return;
                }

                var sent = false;

                function sendSuccess(origin) {
                  if (sent) return;
                  sent = true;
                  window.opener.postMessage(successMsg, origin || '*');
                  setTimeout(function () { window.close(); }, 100);
                }

                function receiveMessage(e) {
                  if (e.data === 'authorizing:' + provider) {
                    sendSuccess(e.origin);
                  }
                }

                window.addEventListener('message', receiveMessage, false);
                window.opener.postMessage('authorizing:' + provider, '*');
                setTimeout(function () { sendSuccess(window.location.origin); }, 1200);
              })();
            </script>
          </body>
        </html>
      `;

      return res.status(200).send(html);
    } catch (error) {
      console.error('OAuth processing error:', error.message, error.stack);
      return res.status(500).json({
        error: 'Authentication failed',
        details: error.message,
        timestamp: new Date().toISOString(),
      });
    }
  }

  // Initial OAuth request - redirect to GitHub
  const scope = 'repo,user,read:org';
  const randomState = Math.random().toString(36).substring(7);
  const authUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${scope}&state=${randomState}`;

  console.log('Redirecting to GitHub OAuth:', { redirectUri, scope });
  res.redirect(authUrl);
}

