const simpleOauthModule = require('simple-oauth2');
const randomstring = require('randomstring');

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
  const { provider } = req.query;
  
  if (provider !== 'github') {
    return res.status(400).json({ error: 'Invalid provider' });
  }

  const state = randomstring.generate(32);
  const authorizationUri = oauth2.authorizationCode.authorizeURL({
    redirect_uri: `${process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://circlespringschool-red.vercel.app'}/api/auth/complete`,
    scope: 'repo,user',
    state: state,
  });

  res.redirect(authorizationUri);
};
