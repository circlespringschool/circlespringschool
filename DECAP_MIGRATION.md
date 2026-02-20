# Decap CMS Migration Guide

## Overview

This project has been migrated from Sanity CMS to Decap CMS (formerly Netlify CMS). Decap CMS is a Git-based content management system that stores content as files in your repository.

## ✅ What's Been Done

1. **Decap CMS Admin Interface**
   - Created `admin/index.html` - The CMS admin interface
   - Created `admin/config.yml` - CMS configuration with all content types

2. **Content Structure**
   - Created `content/` directory with subdirectories for each content type:
     - `content/banner/` - Homepage banner content
     - `content/about/` - About page content
     - `content/academics/` - Academics page content
     - `content/activities/` - Activities page content
     - `content/contact/` - Contact page content

3. **Frontend Updates**
   - Updated `src/js/app.js` to read from static Markdown files instead of Sanity API
   - Removed Sanity client dependencies
   - Added simple frontmatter parser for YAML/Markdown files

4. **Vercel Configuration**
   - `vercel.json` already configured for admin routes
   - OAuth authentication handler at `api/auth.js` is ready

## 🔧 Setup Instructions

### 1. Update GitHub Repository Settings

In `admin/config.yml`, update these values:
```yaml
backend:
  repo: your-username/your-repo-name  # Update this
  base_url: https://your-domain.vercel.app  # Update this
```

### 2. Configure GitHub OAuth

1. Go to GitHub Settings → Developer settings → OAuth Apps
2. Create a new OAuth App:
   - **Application name**: Circle Spring CMS
   - **Homepage URL**: `https://your-domain.vercel.app`
   - **Authorization callback URL**: `https://your-domain.vercel.app/api/auth`
3. Copy the Client ID and Client Secret
4. Add them to Vercel environment variables:
   - `OAUTH_GITHUB_CLIENT_ID`
   - `OAUTH_GITHUB_CLIENT_SECRET`

### 3. Access the CMS

1. Deploy to Vercel
2. Visit `https://your-domain.vercel.app/admin`
3. Click "Login with GitHub"
4. Authorize the application
5. Start editing content!

## 📝 How It Works

### Content Storage

- Content is stored as Markdown files with YAML frontmatter
- Files are located in `content/[type]/index.md`
- Images are stored in `src/imgs/` directory
- All changes are committed directly to your Git repository

### Content Editing

1. Login to `/admin`
2. Select a content type (Banner, About, Academics, etc.)
3. Edit the content in the CMS interface
4. Click "Save" - changes are committed to Git
5. Vercel automatically rebuilds and deploys your site

### Frontend Integration

The frontend JavaScript (`src/js/app.js`) fetches content from Markdown files:
- Uses `fetch()` to load `/content/[type]/index.md`
- Parses YAML frontmatter to extract content
- Updates page elements dynamically

## 🚀 Benefits of Decap CMS

1. **Git-Based**: All content is version-controlled in Git
2. **No Database**: No external database or API needed
3. **Free**: No hosting costs for CMS
4. **Fast**: Content is served as static files
5. **Simple**: Easy to understand and maintain

## ⚠️ Important Notes

### YAML Frontmatter Parser

The current implementation uses a basic YAML parser. For complex nested structures, you may want to:
- Use a proper YAML parser library (e.g., `js-yaml` via CDN)
- Or use JSON files instead of Markdown

### Image Handling

- Images uploaded through Decap CMS are stored in `src/imgs/`
- Image paths in content files are relative to the site root
- Example: `src/imgs/hero.webp`

### Content Structure

Each content file follows this structure:
```markdown
---
# YAML frontmatter with content data
title: "Page Title"
heroSection:
  title: "Hero Title"
  subtitle: "Hero Subtitle"
---

# Optional markdown content below
```

## 🔄 Migration from Sanity

If you have existing content in Sanity:

1. Export your Sanity content (use Sanity Studio export feature)
2. Manually convert to Markdown format
3. Create corresponding files in `content/` directories
4. Update image paths if needed

## 📚 Resources

- [Decap CMS Documentation](https://decapcms.org/docs/)
- [Vercel Deployment Guide](https://vercel.com/docs)
- [GitHub OAuth Setup](https://docs.github.com/en/developers/apps/building-oauth-apps)

## 🐛 Troubleshooting

### CMS Not Loading
- Check that `admin/index.html` and `admin/config.yml` exist
- Verify Vercel routes are configured correctly
- Check browser console for errors

### Authentication Issues
- Verify GitHub OAuth credentials are set in Vercel
- Check that callback URL matches exactly
- Ensure GitHub OAuth app has correct permissions

### Content Not Updating
- Check that content files are in correct locations
- Verify file paths in `fetchContent()` function
- Check browser console for fetch errors

### Images Not Loading
- Verify image paths are correct (relative to site root)
- Check that images exist in `src/imgs/` directory
- Ensure image paths in frontmatter match actual file locations
