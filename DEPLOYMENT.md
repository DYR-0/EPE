# GitHub Pages Deployment Guide

This guide will help you deploy your React website to GitHub Pages.

## Prerequisites

- A GitHub account
- Git installed on your computer
- Node.js installed (v18 or higher recommended)

## Step 1: Prepare Your Repository

### Option A: Create a New Repository on GitHub

1. Go to https://github.com and log in
2. Click the "+" icon in the top right corner and select "New repository"
3. Name your repository (e.g., "my-website")
4. Choose "Public" visibility
5. Do NOT initialize with README, .gitignore, or license (we already have these files)
6. Click "Create repository"

### Option B: Use an Existing Repository

If you already have a repository, you can use that instead.

## Step 2: Configure Base Path

**IMPORTANT:** Update the `vite.config.ts` file:

If your repository is named `my-website`, change this line:
```typescript
base: './',
```

To:
```typescript
base: '/my-website/',
```

**Note:** If you're using a custom domain (like `yourdomain.com`), keep it as `base: './'`

## Step 3: Initialize Git and Push to GitHub

Open your terminal in the project folder and run these commands:

```bash
# Initialize git (if not already initialized)
git init

# Add all files
git add .

# Commit the files
git commit -m "Initial commit"

# Add your GitHub repository as remote
# Replace YOUR_USERNAME and YOUR_REPO with your actual values
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Click on "Pages" in the left sidebar
4. Under "Build and deployment":
   - Source: Select "GitHub Actions"
5. The deployment should start automatically!

## Step 5: Wait for Deployment

1. Go to the "Actions" tab in your repository
2. You should see a workflow running called "Deploy to GitHub Pages"
3. Wait for it to complete (usually takes 1-3 minutes)
4. Once complete, go back to Settings > Pages
5. You'll see your site URL: `https://YOUR_USERNAME.github.io/YOUR_REPO/`

## Step 6: Access Your Website

Your website should now be live at:
- `https://YOUR_USERNAME.github.io/YOUR_REPO/`

## Automatic Updates

Every time you push changes to the `main` branch, GitHub Actions will automatically rebuild and redeploy your site!

To update your site:
```bash
git add .
git commit -m "Description of changes"
git push
```

## Troubleshooting

### Blank page or 404 errors
- Make sure you updated the `base` path in `vite.config.ts` correctly
- Check that your repository name matches the base path

### Build fails
- Check the Actions tab for error messages
- Make sure all dependencies are listed in package.json
- Try building locally first: `npm install && npm run build`

### Assets not loading
- Verify the `base` path in `vite.config.ts` matches your repository name exactly
- Include the trailing slash: `/repo-name/`

## Custom Domain (Optional)

To use a custom domain:

1. Update `base: './'` in `vite.config.ts`
2. Create a file named `CNAME` in the `public` folder with your domain
3. Configure DNS settings with your domain provider
4. See: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

## Local Development

To run the site locally:

```bash
npm install
npm run dev
```

Then open http://localhost:3000 in your browser.

---

**Questions?** Check GitHub Pages documentation: https://docs.github.com/en/pages
