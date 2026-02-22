# 🧪 Local Testing Guide

## ✅ Server Status

Your development server is **RUNNING** on port 3000!

## 🌐 Access Points

1. **Main Website**: http://localhost:3000
2. **Test Page**: http://localhost:3000/test-content.html
3. **CMS Admin**: http://localhost:3000/admin (see below for full CMS with content editing)

## 📝 CMS with Local Content Editing

To see and edit your website content in the CMS (without GitHub login):

**Run TWO terminals:**

1. **Terminal 1** – website server:
   ```bash
   npm run dev
   ```

2. **Terminal 2** – CMS backend (loads your content files):
   ```bash
   npm run dev:cms
   ```

**Or run both together:**
```bash
npm run dev:all
```

Then open: **http://localhost:3000/admin**

You should see: Homepage Banner, About Page, Academics Page, Activities Page, Contact Page. Click any to edit. Changes are saved to your local files.

## 📋 Testing Checklist

### Step 1: Test Content Files
Open: http://localhost:3000/test-content.html

This test page will:
- ✅ Check if server is running
- ✅ Test all content files (banner, about, academics, activities, contact)
- ✅ Test YAML parser
- ✅ Test frontend integration

### Step 2: Test Main Website
Open: http://localhost:3000

Check:
- [ ] Homepage loads
- [ ] Browser console (F12) shows no errors
- [ ] Content loads from `/content/*.md` files
- [ ] Images display correctly
- [ ] Navigation works

### Step 3: Test Individual Pages
Navigate to:
- [ ] http://localhost:3000/aboutcirclesprings.html
- [ ] http://localhost:3000/academics.html
- [ ] http://localhost:3000/activities.html
- [ ] http://localhost:3000/contactus.html

For each page:
- [ ] Check browser console for errors
- [ ] Verify content displays
- [ ] Check Network tab (F12) - should see requests to `/content/*/index.md`

## 🔍 Debugging Tips

### Check Browser Console
1. Open browser DevTools (F12)
2. Go to **Console** tab
3. Look for:
   - ✅ Success messages
   - ❌ Error messages (red)
   - ⚠️ Warning messages (yellow)

### Check Network Requests
1. Open browser DevTools (F12)
2. Go to **Network** tab
3. Reload page
4. Look for requests to `/content/*/index.md`
5. Check status codes:
   - ✅ 200 = Success
   - ❌ 404 = File not found
   - ❌ 500 = Server error

### Test Content Files Directly
Try these URLs in your browser:
- http://localhost:3000/content/banner/index.md
- http://localhost:3000/content/about/index.md
- http://localhost:3000/content/academics/index.md

You should see the raw Markdown files.

## 🐛 Common Issues

### Content Not Loading?
1. **Check file paths**: Files should be in `content/[type]/index.md`
2. **Check server**: Make sure server is running on port 3000
3. **Check browser console**: Look for fetch errors
4. **Check Network tab**: See if requests are failing

### YAML Parser Issues?
The current parser is basic. For complex nested structures, you may see:
- Nested objects not parsed correctly
- Arrays not fully parsed

**Solution**: The test page will show what's being parsed. If needed, we can improve the parser.

### Images Not Showing?
1. Check image paths in content files (should be `src/imgs/filename.webp`)
2. Verify images exist in `src/imgs/` directory
3. Check browser console for 404 errors

## 📊 Expected Results

### Test Page Results
When you open `/test-content.html`, you should see:

1. **Server Status**: ✅ Green success message
2. **Content Files**: All 5 files should show ✅ success
3. **YAML Parser**: Should show parsed data structure
4. **Frontend Integration**: Should show banner data loaded

### Browser Console
Should show:
- No red errors
- Content loading messages (if you added console.log)
- Fetch requests completing successfully

## 🚀 Next Steps After Testing

Once local testing passes:

1. **Commit changes**:
   ```bash
   git add .
   git commit -m "Migrated to Decap CMS - tested locally"
   git push origin main
   ```

2. **Deploy to Vercel**:
   - Connect GitHub repo to Vercel
   - Deploy automatically

3. **Set up GitHub OAuth**:
   - Create OAuth app on GitHub
   - Add credentials to Vercel
   - Test CMS on production

## 💡 Quick Commands

```bash
# Check if server is running
curl http://localhost:3000/content/banner/index.md

# Restart server (if needed)
# Stop current server (Ctrl+C in terminal)
npm run dev

# View content files
ls -la content/*/index.md

# Check server logs
# Look at terminal where server is running
```

---

**Ready to test?** Open http://localhost:3000/test-content.html to start!
