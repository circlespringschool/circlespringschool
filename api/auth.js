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

      // Return success page that communicates with Decap CMS
      const html = `
        <!DOCTYPE html>
        <html>
          <head>
            <title>Authorization Success</title>
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                margin: 0;
                background: #f5f5f5;
              }
              .container {
                text-align: center;
                background: white;
                padding: 2rem;
                border-radius: 8px;
                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
              }
              .success {
                color: #28a745;
                font-size: 1.2em;
                margin-bottom: 1rem;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="success">✅ Authorization successful!</div>
              <p>Redirecting back to CMS...</p>
            </div>
            <script>
              console.log('Auth success page loaded');
              
              // Send success message to parent window (Decap CMS)
              function sendAuthSuccess() {
                const message = {
                  type: 'authorization-success',
                  token: '${tokenData.access_token}',
                  provider: 'github'
                };
                
                console.log('Sending auth success message to parent');
                
                if (window.opener) {
                  // For popup window
                  window.opener.postMessage(
                    'authorization:github:success:' + JSON.stringify({
                      token: '${tokenData.access_token}',
                      provider: 'github'
                    }),
                    '*'
                  );
                  
                  setTimeout(() => {
                    window.close();
                  }, 1000);
                } else if (window.parent && window.parent !== window) {
                  // For iframe
                  window.parent.postMessage(message, '*');
                } else {
                  // Fallback - redirect to admin
                  console.log('No parent window, redirecting to admin');
                  window.location.href = '/admin#access_token=' + encodeURIComponent('${tokenData.access_token}');
                }
              }
              
              // Send message when page loads
              sendAuthSuccess();
              
              // Also try sending after a short delay
              setTimeout(sendAuthSuccess, 500);
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
  
  const baseUrl = req.headers.host?.includes('localhost') 
    ? `http://${req.headers.host}`
    : 'https://circlespringschool-red.vercel.app';
    
  const redirectUri = `${baseUrl}/api/auth`;
  const scope = 'repo,user';
  const randomState = Math.random().toString(36).substring(7);

  const authUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${scope}&state=${randomState}`;

  console.log('Redirecting to GitHub OAuth:', { clientId, redirectUri, scope });
  
  res.redirect(authUrl);
}