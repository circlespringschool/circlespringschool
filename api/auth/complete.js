const { createVercelCompleteHandler } = require('netlify-cms-oauth-provider-node');

module.exports = createVercelCompleteHandler({
  origin: process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://circlespringschool-red.vercel.app',
  oauthProvider: 'github',
  oauthClientId: process.env.OAUTH_GITHUB_CLIENT_ID,
  oauthClientSecret: process.env.OAUTH_GITHUB_CLIENT_SECRET,
  oauthScopes: 'repo,user'
}, { useEnv: true });
