const simpleOauthModule = require('simple-oauth2');

const oauth2 = simpleOauthModule.create({
  client: {
    id: process.env.OAUTH_GITHUB_CLIENT_ID,
    secret: process.env.OAUTH_GITHUB_CLIENT_SECRET,
  },
  auth: {
    tokenHost: 'https://github.com',
    tokenPath: '/login/oauth/access_token',
    authorizePath: '/login/oauth/authorize',
  },
});

module.exports = async (req, res) => {
  const { code, state } = req.query;

  if (!code) {
    return res.status(400).json({ error: 'Missing authorization code' });
  }

  try {
    const tokenParams = {
      code,
      redirect_uri: `${process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://circlespringschool-red.vercel.app'}/api/auth/complete`,
      scope: 'repo,user',
    };

    const result = await oauth2.authorizationCode.getToken(tokenParams);
    const token = oauth2.accessToken.create(result);

    const script = `
      <script>
        (function() {
          function receiveMessage(e) {
            console.log("receiveMessage %o", e);
            if (e.origin !== "${process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://circlespringschool-red.vercel.app'}") {
              console.log("Invalid origin: %s", e.origin);
              return;
            }
            // send message to main window with the token
            window.opener.postMessage(
              'authorization:github:success:${JSON.stringify({
                token: token.token.access_token,
                provider: 'github'
              })}',
              e.origin
            );
            window.removeEventListener("message", receiveMessage, false);
            window.close();
          }
          window.addEventListener("message", receiveMessage, false);
          console.log("Posting message to opener");
          window.opener.postMessage("authorizing:github", "*");
        })()
      </script>
    `;

    return res.send(script);
  } catch (error) {
    console.error('Access Token Error', error.message);
    return res.status(500).json({ error: 'Failed to retrieve access token' });
  }
};
