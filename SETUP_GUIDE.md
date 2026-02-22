# Quick Setup Guide - Running Decap CMS

## ✅ Step 1: Test Locally

Run the development server:
```bash
npm run dev
```

Or:
```bash
npx serve . -p 3000
```

Then open:
- **Website**: http://localhost:3000
- **CMS Admin**: http://localhost:3000/admin

> **Note**: The CMS won't work fully locally (needs GitHub OAuth), but you can test the website and see the admin interface.

## ✅ Step 2: Deploy to Vercel

### Option A: Using Vercel CLI
```bash
npm i -g vercel
vercel
```

### Option B: Using GitHub Integration
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy automatically

## ✅ Step 3: Configure GitHub OAuth

### Create GitHub OAuth App

1. Go to: https://github.com/settings/developers
2. Click **"New OAuth App"**
3. Fill in:
   - **Application name**: `Circle Spring CMS`
   - **Homepage URL**: `https://circlespringschool.vercel.app`
   - **Authorization callback URL**: `https://circlespringschool.vercel.app/api/auth`
4. Click **"Register application"**
5. Copy the **Client ID** and generate a **Client Secret**

### Add to Vercel

1. Go to your Vercel project dashboard
2. Go to **Settings** → **Environment Variables**
3. Add these variables:
   - `OAUTH_GITHUB_CLIENT_ID` = (your Client ID)
   - `OAUTH_GITHUB_CLIENT_SECRET` = (your Client Secret)
4. Redeploy your site

## ✅ Step 4: Access CMS

1. Visit: `https://circlespringschool.vercel.app/admin`
2. Click **"Login with GitHub"**
3. Authorize the application
4. Start editing content!

## 🧪 Testing Content Loading

The website now loads content from `/content/[type]/index.md` files. Test by:

1. Opening browser console (F12)
2. Navigate to different pages
3. Check for any fetch errors
4. Verify content displays correctly

## 📝 Current Content Files

All content is in the `content/` directory:
- `content/banner/index.md` - Homepage banner
- `content/about/index.md` - About page
- `content/academics/index.md` - Academics page
- `content/activities/index.md` - Activities page
- `content/contact/index.md` - Contact page

## 🔧 Troubleshooting

### CMS shows "Failed to load config"
- Check that `admin/config.yml` exists
- Verify the repo name matches your GitHub repo
- Check Vercel routes configuration

### Authentication fails
- Verify GitHub OAuth credentials in Vercel
- Check callback URL matches exactly
- Ensure OAuth app has `repo` scope

### Content not loading
- Check browser console for errors
- Verify content files exist in `content/` directories
- Check file paths in `src/js/app.js`

### Images not showing
- Verify image paths are correct
- Check images exist in `src/imgs/` directory
- Ensure paths are relative to site root

## 🚀 Next Steps

1. **Test locally**: `npm run dev`
2. **Deploy to Vercel**: Push to GitHub or use `vercel` CLI
3. **Set up OAuth**: Follow Step 3 above
4. **Start editing**: Access `/admin` on your live site
