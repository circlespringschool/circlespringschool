# 🚀 Quick Start - Running Your System

## ✅ What I Just Did

1. ✅ Fixed GitHub repo name in `admin/config.yml` → `RickMuchira/circlespringschool`
2. ✅ Updated `package.json` scripts (removed Sanity, added simple dev server)
3. ✅ Started local development server

## 🌐 Access Your Site

**Local Development Server is Running!**

Open in your browser:
- **Website**: http://localhost:3000
- **CMS Admin**: http://localhost:3000/admin

> ⚠️ **Note**: The CMS admin interface will show but GitHub OAuth won't work locally. You need to deploy to Vercel for full CMS functionality.

## 📋 Next Steps

### 1. Test the Website Locally
- Open http://localhost:3000
- Navigate through pages (Home, About, Academics, Activities, Contact)
- Check browser console (F12) for any errors
- Content should load from `/content/*.md` files

### 2. Deploy to Vercel

**Option A: Via GitHub (Recommended)**
```bash
git add .
git commit -m "Migrated to Decap CMS"
git push origin main
```
Then connect your GitHub repo to Vercel at https://vercel.com

**Option B: Via Vercel CLI**
```bash
npm i -g vercel
vercel
```

### 3. Set Up GitHub OAuth (Required for CMS)

1. **Create OAuth App**: https://github.com/settings/developers
   - Name: `Circle Spring CMS`
   - Homepage: `https://circlespringschool.vercel.app`
   - Callback: `https://circlespringschool.vercel.app/api/auth`

2. **Add to Vercel Environment Variables**:
   - `OAUTH_GITHUB_CLIENT_ID` = (from GitHub)
   - `OAUTH_GITHUB_CLIENT_SECRET` = (from GitHub)

3. **Redeploy** your Vercel site

### 4. Access CMS on Production

Visit: `https://circlespringschool.vercel.app/admin`
- Click "Login with GitHub"
- Start editing content!

## 🧪 Testing Checklist

- [ ] Local server runs without errors
- [ ] Website loads at http://localhost:3000
- [ ] Admin interface loads at http://localhost:3000/admin
- [ ] Content files exist in `content/` directories
- [ ] Browser console shows no errors
- [ ] Pages display content correctly

## 📁 File Structure

```
circlespringschool/
├── admin/
│   ├── index.html      ← CMS interface
│   └── config.yml      ← CMS configuration
├── content/            ← Your content files
│   ├── banner/
│   ├── about/
│   ├── academics/
│   ├── activities/
│   └── contact/
├── src/js/app.js       ← Updated to read from files
└── vercel.json         ← Already configured
```

## 🐛 Common Issues

**Server won't start?**
- Check if port 3000 is available
- Try: `npx serve . -p 8080` (use port 8080 instead)

**Content not loading?**
- Check browser console (F12) for errors
- Verify files exist in `content/` directories
- Check network tab for failed requests

**CMS shows errors?**
- This is normal locally - OAuth needs production
- Deploy to Vercel first, then set up OAuth

## 💡 Tips

- **Local testing**: Test website functionality locally
- **Production CMS**: Set up OAuth after deploying to Vercel
- **Content editing**: All changes commit to Git automatically
- **Images**: Upload via CMS → stored in `src/imgs/`

## 📞 Need Help?

Check these files:
- `SETUP_GUIDE.md` - Detailed setup instructions
- `DECAP_MIGRATION.md` - Migration documentation
- `MIGRATION_SUMMARY.md` - Quick reference

---

**Your local server is running!** Open http://localhost:3000 to see your site.
