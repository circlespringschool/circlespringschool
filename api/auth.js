export default async function handler(req, res) {
  const { code, state } = req.query;
  
  // Handle OAuth callback
  if (code) {
    try {
      // Exchange code for access token
      const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          client_id: process.env.OAUTH_GITHUB_CLIENT_ID,
          client_secret: process.env.OAUTH_GITHUB_CLIENT_SECRET,
          code: code,
        }),
      });

      const tokenData = await tokenResponse.json();

      if (tokenData.access_token) {
        // Return success page that communicates with parent window
        const html = `
          <!DOCTYPE html>
          <html>
            <head>
              <title>Authorization Success</title>
            </head>
            <body>
              <h1>Authorization successful!</h1>
              <p>You can close this window.</p>
              <script>
                // Send token to parent window
                if (window.opener) {
                  window.opener.postMessage({
                    type: 'authorization-success',
                    token: '${tokenData.access_token}',
                    provider: 'github'
                  }, '*');
                  window.close();
                }
              </script>
            </body>
          </html>
        `;
        return res.status(200).send(html);
      } else {
        throw new Error('No access token received');
      }
    } catch (error) {
      console.error('OAuth error:', error);
      return res.status(500).json({ error: 'Authentication failed' });
    }
  }

  // Initial OAuth redirect
  const clientId = process.env.OAUTH_GITHUB_CLIENT_ID;
  const redirectUri = `${req.headers.origin || 'https://circlespringschool-red.vercel.app'}/api/auth`;
  const scope = 'repo,user';
  const randomState = Math.random().toString(36).substring(7);

  const authUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${scope}&state=${randomState}`;

  res.redirect(authUrl);
}