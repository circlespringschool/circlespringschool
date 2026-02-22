# Accessing Your Site on Vercel

## URLs After Deployment

Once your project is deployed to Vercel, use these URLs:

| What | URL |
|------|-----|
| **Website (homepage)** | `https://circlespringschool.vercel.app` |
| **About page** | `https://circlespringschool.vercel.app/aboutcirclesprings.html` |
| **Academics** | `https://circlespringschool.vercel.app/academics.html` |
| **Activities** | `https://circlespringschool.vercel.app/activities.html` |
| **Contact** | `https://circlespringschool.vercel.app/contactus.html` |
| **CMS Admin (edit content)** | `https://circlespringschool.vercel.app/admin` |

> **Note:** If you use a custom domain (e.g. circlespringschool.co.ke), replace `circlespringschool.vercel.app` with your domain in the table above.

---

## Making the CMS Work on Vercel

To edit content via the CMS when hosted on Vercel, complete these steps:

### Step 1: GitHub OAuth App

1. Go to **https://github.com/settings/developers**
2. Click **OAuth Apps** → **New OAuth App**
3. Fill in:
   - **Application name:** Circle Spring School CMS
   - **Homepage URL:** `https://circlespringschool.vercel.app`
   - **Authorization callback URL:** `https://circlespringschool.vercel.app/api/auth`
4. Click **Register application**
5. Copy the **Client ID**
6. Click **Generate a new client secret** and copy it (you won't see it again)

### Step 2: Vercel Environment Variables

1. Go to your Vercel project → **Settings** → **Environment Variables**
2. Add:
   - `OAUTH_GITHUB_CLIENT_ID` = (paste Client ID)
   - `OAUTH_GITHUB_CLIENT_SECRET` = (paste Client secret)
3. Apply to: **Production**, **Preview**, **Development**
4. Save

### Step 3: Redeploy

1. Go to **Deployments**
2. Click **⋯** on the latest deployment → **Redeploy**

---

## Using the CMS

1. Visit `https://circlespringschool.vercel.app/admin`
2. Click **Login with GitHub**
3. Authorize the app on GitHub
4. You’ll be redirected to the CMS and can edit content
5. Click **Publish** to save; changes are committed to your GitHub repo
6. Vercel will rebuild and redeploy automatically

---

## Custom Domain

If you add a custom domain (e.g. `www.circlespringschool.co.ke`):

1. Update `admin/config.yml` and `config.yml`: change `base_url` to your domain
2. Update the GitHub OAuth App callback URL to `https://your-domain.com/api/auth`
3. Redeploy
