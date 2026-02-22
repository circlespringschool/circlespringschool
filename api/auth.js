export default async function handler(req, res) {
  const { code, state, error } = req.query;
  
  // Handle OAuth errors
  if (error) {
    console.error('OAuth error:', error);
    return res.status(400).json({ error: `OAuth error: ${error}` });
  }
  
  // Handle OAuth callback
  if (code) {
    try {
      console.log('Processing OAuth callback with code:', code);
      
      // Exchange code for access token
      const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'User-Agent': 'Circle-Spring-CMS'
        },
        body: JSON.stringify({
          client_id: process.env.OAUTH_GITHUB_CLIENT_ID,
          client_secret: process.env.OAUTH_GITHUB_CLIENT_SECRET,
          code: code,
        }),
      });

      if (!tokenResponse.ok) {
        throw new Error(`Token request failed: ${tokenResponse.status} ${tokenResponse.statusText}`);
      }

      const tokenData = await tokenResponse.json();
      console.log('Token response:', { ...tokenData, access_token: tokenData.access_token ? '[REDACTED]' : 'missing' });

      if (tokenData.error) {
        throw new Error(`GitHub OAuth error: ${tokenData.error_description || tokenData.error}`);
      }

      if (!tokenData.access_token) {
        throw new Error('No access token received from GitHub');
      }

      // Decap CMS uses a popup and expects this exact postMessage format
      const token = tokenData.access_token;
      const msg = 'authorization:github:success:' + JSON.stringify({ token: token, provider: 'github' });
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
                var msg = ${JSON.stringify(msg)};
                if (window.opener) {
                  window.opener.postMessage(msg, window.location.origin);
                  window.close();
                } else {
                  document.body.innerHTML = '<div class="container"><p>Pop-up was blocked. Please allow pop-ups for this site and try again.</p></div>';
                }
              })();
            </script>
          </body>
        </html>
      `;
      
      return res.status(200).send(html);
      
    } catch (error) {
      console.error('OAuth processing error:', error);
      return res.status(500).json({ 
        error: 'Authentication failed',
        details: error.message,
        timestamp: new Date().toISOString()
      });
    }
  }

  // Initial OAuth redirect
  const clientId = process.env.OAUTH_GITHUB_CLIENT_ID;
  
  if (!clientId) {
    return res.status(500).json({ error: 'OAuth client ID not configured' });
  }
  
  const host = req.headers['x-forwarded-host'] || req.headers.host || 'circlespringschool.vercel.app';
  const protocol = host.includes('localhost') ? 'http' : 'https';
  const baseUrl = `${protocol}://${host}`;
    
  const redirectUri = `${baseUrl}/api/auth`;
  const scope = 'repo,user,read:org';
  const randomState = Math.random().toString(36).substring(7);

  const authUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${scope}&state=${randomState}`;

  console.log('Redirecting to GitHub OAuth:', { clientId, redirectUri, scope });
  
  res.redirect(authUrl);
}