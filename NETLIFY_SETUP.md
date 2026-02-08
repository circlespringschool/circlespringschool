# Circle Spring Academy - Netlify Setup Guide

## Prerequisites
- Git repository (GitHub, GitLab, or Bitbucket)
- Netlify account (free at netlify.com)
- Node.js installed (for Netlify CLI)

## Quick Setup Steps

### 1. Install Netlify CLI
```bash
npm install -g netlify-cli
```

### 2. Login to Netlify
```bash
netlify login
```

### 3. Initialize your site
```bash
netlify init
```

### 4. Deploy your site
```bash
# For manual deployment
netlify deploy --prod --dir=.

# Or use the provided script
./deploy.sh
```

## Automatic Deployment Setup

### Option 1: Connect Git Repository (Recommended)
1. Go to [Netlify Dashboard](https://app.netlify.com)
2. Click "New site from Git"
3. Choose your Git provider (GitHub/GitLab/Bitbucket)
4. Select your repository
5. Configure build settings:
   - **Build command**: Leave empty (static site)
   - **Publish directory**: `.` (root directory)
6. Click "Deploy site"

### Option 2: Drag & Drop Deployment
1. Zip your entire project folder
2. Go to [Netlify Dashboard](https://app.netlify.com)
3. Drag and drop the zip file to deploy

## Enable Netlify Identity (For CMS Admin)

### 1. Enable Identity Service
1. Go to your site dashboard on Netlify
2. Navigate to "Identity" tab
3. Click "Enable Identity"

### 2. Configure Registration
1. In Identity settings, set registration to "Invite only"
2. Add yourself as an admin user
3. Configure external providers if needed (Google, GitHub, etc.)

### 3. Enable Git Gateway
1. In Identity settings, scroll to "Services"
2. Enable "Git Gateway"
3. This allows the CMS to commit changes to your repository

## Content Management

### Accessing the Admin Panel
- URL: `https://your-site-name.netlify.app/admin`
- Login with your Netlify Identity credentials

### Managing Content
- Hero images can be updated through the CMS
- Upload new images to the media folder
- Changes are automatically committed to your repository

## Custom Domain Setup

### 1. Add Custom Domain
1. In site settings, go to "Domain management"
2. Click "Add custom domain"
3. Enter your domain (e.g., circlespringschool.co.ke)

### 2. Configure DNS
Point your domain's DNS to Netlify:
- **A Record**: `75.2.60.5`
- **AAAA Record**: `2600:1f14:e22:d200::1`
- Or use **CNAME**: `your-site-name.netlify.app`

### 3. Enable HTTPS
Netlify automatically provides SSL certificates for custom domains.

## Environment Variables (If Needed)
1. Go to "Site settings" > "Environment variables"
2. Add any required environment variables
3. Redeploy if necessary

## Performance Optimizations

Your site includes:
- ✅ Image optimization (WebP format)
- ✅ Caching headers for static assets
- ✅ Security headers
- ✅ Clean URLs with redirects
- ✅ Lazy loading for images

## Troubleshooting

### Common Issues:
1. **Admin panel not loading**: Check if Netlify Identity is enabled
2. **Images not uploading**: Verify Git Gateway is configured
3. **Build failures**: Check build logs in Netlify dashboard
4. **404 errors**: Ensure redirect rules are properly configured

### Support Resources:
- [Netlify Documentation](https://docs.netlify.com)
- [Decap CMS Documentation](https://decapcms.org/docs/)
- [Netlify Community Forum](https://community.netlify.com)

## Site Features

Your Circle Spring Academy website includes:
- 📱 Responsive design
- 🌍 Bilingual support (English/Kiswahili)
- 🖼️ Dynamic hero carousel
- 📝 Content management system
- 🔒 Secure admin panel
- ⚡ Fast loading with optimizations
- 📧 Contact forms ready for Netlify Forms

## Next Steps

1. Deploy your site using one of the methods above
2. Set up your custom domain
3. Configure Netlify Identity for admin access
4. Test the CMS functionality
5. Add team members to manage content

Your site is ready for production! 🚀