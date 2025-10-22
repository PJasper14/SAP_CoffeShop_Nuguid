# ⚡ Quick Deploy to Vercel - 5 Minutes

## 🎯 Fastest Method (Recommended)

### 1. Create GitHub Repository
- Go to https://github.com → New Repository
- Name: `coffee-shop-spa`
- Create repository (don't add README)

### 2. Push to GitHub
```bash
cd D:\xampp\htdocs\ITP110_MLAB2

git init
git add .
git commit -m "Coffee Shop SPA - ITP110 Lab 2"
git remote add origin https://github.com/YOUR_USERNAME/coffee-shop-spa.git
git branch -M main
git push -u origin main
```

**First time using Git?** Run this first:
```bash
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
```

### 3. Deploy on Vercel
- Go to https://vercel.com
- Sign up with GitHub
- Click "Add New..." → "Project"
- Import your `coffee-shop-spa` repository
- Click "Deploy"
- Wait 1-2 minutes ⏱️
- Done! 🎉

### 4. Get Your URL
Your site is live at: `https://coffee-shop-spa-xxxxx.vercel.app`

---

## ✅ Test Your Deployment

Visit your live site and test:
- [ ] Click menu items → Detail pages work
- [ ] Admin Login → Dashboard works
- [ ] Click "Privacy Policy" → 404 page shows
- [ ] All navigation works without page reload

---

## 🔄 Update Your Site Later

```bash
# Make changes, then:
git add .
git commit -m "Updated features"
git push
```
Vercel auto-deploys in ~1 minute!

---

**For detailed instructions, see: VERCEL_DEPLOYMENT_GUIDE.md**

