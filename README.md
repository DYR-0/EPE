# Website Builder - Deployment Ready

This React website is configured for deployment to GitHub Pages.

## 🚀 Quick Start

### Deploy to GitHub Pages (Recommended)

See **[DEPLOYMENT.md](./DEPLOYMENT.md)** for complete step-by-step instructions.

**Quick version:**
1. Create a new repository on GitHub
2. Update `base` in `vite.config.ts` to match your repo name: `base: '/your-repo-name/'`
3. Push this code to GitHub
4. Enable GitHub Pages in repository settings (Source: GitHub Actions)
5. Your site will be live at `https://YOUR_USERNAME.github.io/YOUR_REPO/`

### Run Locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## 📁 Project Structure

- `src/` - React components and application code
- `public/` - Static assets
- `.github/workflows/` - GitHub Actions deployment configuration
- `vite.config.ts` - Vite configuration (update `base` path here!)

## 🔧 Build

```bash
npm run build
```

Output will be in the `build/` folder.

## 📖 Full Documentation

- [Complete Deployment Guide](./DEPLOYMENT.md)
- [Original README](./README_ORIGINAL.md) - Original project documentation

## 🎯 Important Notes

**Before deploying:**
- ✅ Update `base` in `vite.config.ts` with your repository name
- ✅ Create a GitHub repository
- ✅ Enable GitHub Pages with "GitHub Actions" as source

**After first deployment:**
- Every push to `main` branch auto-deploys
- Check Actions tab for deployment status

## 🆘 Troubleshooting

**Blank page?**
→ Check `base` path in `vite.config.ts` matches your repo name exactly

**Build fails?**
→ Check Actions tab for error logs

**Assets not loading?**
→ Verify `base: '/repo-name/'` has correct format with slashes

---

Need help? See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.
