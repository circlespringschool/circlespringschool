#!/bin/bash

# Circle Spring Academy - Netlify Deployment Script
echo "🚀 Deploying Circle Spring Academy to Netlify..."

# Check if Netlify CLI is installed
if ! command -v netlify &> /dev/null; then
    echo "❌ Netlify CLI not found. Installing..."
    npm install -g netlify-cli
fi

# Check if we're in a git repository
if [ ! -d ".git" ]; then
    echo "❌ Not a git repository. Initializing..."
    git init
    git add .
    git commit -m "Initial commit for Circle Spring Academy"
fi

# Deploy to Netlify
echo "📦 Deploying to Netlify..."
netlify deploy --prod --dir=.

echo "✅ Deployment complete!"
echo "🌐 Your site should be live at your Netlify URL"
echo "🔧 Admin panel available at: https://your-site.netlify.app/admin"