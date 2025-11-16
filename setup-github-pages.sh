#!/bin/bash

echo "🚀 GitHub Pages Deployment Setup Helper"
echo "========================================"
echo ""

# Get repository name
echo "📝 Enter your GitHub repository name (e.g., 'my-website'):"
read REPO_NAME

if [ -z "$REPO_NAME" ]; then
    echo "❌ Repository name cannot be empty!"
    exit 1
fi

echo ""
echo "📝 Enter your GitHub username:"
read USERNAME

if [ -z "$USERNAME" ]; then
    echo "❌ Username cannot be empty!"
    exit 1
fi

# Update vite.config.ts
echo ""
echo "🔧 Updating vite.config.ts with base path..."
sed -i "s|base: '\./|base: '/$REPO_NAME/|g" vite.config.ts

if [ $? -eq 0 ]; then
    echo "✅ Configuration updated!"
else
    echo "⚠️  Could not auto-update. Please manually set base: '/$REPO_NAME/' in vite.config.ts"
fi

# Initialize git
echo ""
echo "📦 Initializing git repository..."
git init

if [ $? -ne 0 ]; then
    echo "⚠️  Git initialization failed. Is git installed?"
fi

# Add files
echo "➕ Adding files..."
git add .

# Commit
echo "💾 Creating initial commit..."
git commit -m "Initial commit - ready for GitHub Pages"

# Add remote
echo "🔗 Adding GitHub remote..."
git remote add origin "https://github.com/$USERNAME/$REPO_NAME.git"

if [ $? -eq 0 ]; then
    echo "✅ Remote added!"
else
    echo "⚠️  Could not add remote. It might already exist."
fi

# Set main branch
git branch -M main

echo ""
echo "✅ Setup complete!"
echo ""
echo "📋 Next steps:"
echo "1. Create repository on GitHub: https://github.com/new"
echo "   - Name: $REPO_NAME"
echo "   - Public visibility"
echo "   - Do NOT initialize with README"
echo ""
echo "2. Push your code:"
echo "   git push -u origin main"
echo ""
echo "3. Enable GitHub Pages:"
echo "   - Go to: https://github.com/$USERNAME/$REPO_NAME/settings/pages"
echo "   - Source: Select 'GitHub Actions'"
echo ""
echo "4. Your site will be live at:"
echo "   https://$USERNAME.github.io/$REPO_NAME/"
echo ""
echo "📖 See DEPLOYMENT.md for detailed instructions"
