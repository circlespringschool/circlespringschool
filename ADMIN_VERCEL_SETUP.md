# Decap CMS Admin on Vercel – Setup Guide

## Is Netlify essential?

**No.** Decap CMS works with multiple backends. The previous setup used Netlify’s `git-gateway` backend. This project is now configured to use the **GitHub backend** with an OAuth provider, so it runs on Vercel without Netlify.

## One-time setup

### 1. Create a GitHub OAuth App

1. Open: https://github.com/settings/developers  
2. **OAuth Apps** → **New OAuth App**  
3. Set:
   - **Application name:** Circle Spring School Admin  
   - **Homepage URL:** `https://circlespringschool-red.vercel.app`  
   - **Authorization callback URL:** `https://circlespringschool-red.vercel.app/api/auth/complete`  
4. Click **Register application**  
5. Copy the **Client ID** and generate a **Client secret**

### 2. Add environment variables in Vercel

1. Project dashboard: https://vercel.com/rickcharlesm-gmailcoms-projects/circlespringschool  
2. **Settings** → **Environment Variables**  
3. Add:

| Name | Value |
|------|-------|
| `ORIGIN` | `https://circlespringschool-red.vercel.app` |
| `COMPLETE_URL` | `https://circlespringschool-red.vercel.app/api/auth/complete` |
| `OAUTH_CLIENT_ID` | *your GitHub OAuth Client ID* |
| `OAUTH_CLIENT_SECRET` | *your GitHub OAuth Client secret* |

4. Optionally add `ADMIN_PANEL_URL` = `https://circlespringschool-red.vercel.app/admin/` for error redirects.

### 3. Install dependencies and deploy

```bash
npm install
vercel --prod
```

## Accessing the admin

1. Visit: https://circlespringschool-red.vercel.app/admin/  
2. Click **Login with GitHub**  
3. Approve access in the GitHub OAuth flow  
4. You’ll be redirected back to the admin panel to edit content.

## Switching domains

If you change the Vercel URL (e.g. to `www.circlespringschool.co.ke`), update:

- `admin/config.yml` – `base_url`, `site_url`, `display_url`
- GitHub OAuth App – Homepage URL and Authorization callback URL
- Vercel env vars – `ORIGIN` and `COMPLETE_URL`
