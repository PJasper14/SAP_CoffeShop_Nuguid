# 🚀 Vercel Deployment Guide - Coffeeling Ka

Complete step-by-step guide to deploy your Coffee Shop SPA to Vercel.

---

## 📋 Prerequisites

Before deploying, make sure you have:
- ✅ A GitHub account (free)
- ✅ Git installed on your computer
- ✅ Your project files ready (already done!)

---

## 🎯 Method 1: Deploy via Vercel Website (EASIEST - RECOMMENDED)

### Step 1: Create a GitHub Repository

1. **Go to GitHub:**
   - Open https://github.com in your browser
   - Login to your account (or create one if you don't have it)

2. **Create a New Repository:**
   - Click the "+" button in top right corner
   - Select "New repository"
   - Repository name: `coffee-shop-spa` (or any name you like)
   - Description: "Coffee Shop Single Page Application - ITP110 Midterm Lab 2"
   - Choose "Public" or "Private"
   - ❌ **DO NOT** check "Initialize with README" (your project already has files)
   - Click "Create repository"

### Step 2: Push Your Project to GitHub

Open Command Prompt or PowerShell in your project folder:

```bash
# Navigate to your project
cd D:\xampp\htdocs\ITP110_MLAB2

# Initialize Git (if not already done)
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit - Coffee Shop SPA"

# Add your GitHub repository as remote
# Replace YOUR_USERNAME with your actual GitHub username
git remote add origin https://github.com/YOUR_USERNAME/coffee-shop-spa.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Note:** If this is your first time using Git, you might need to configure it:
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### Step 3: Deploy to Vercel

1. **Go to Vercel:**
   - Open https://vercel.com in your browser
   - Click "Sign Up" (top right)
   - Choose "Continue with GitHub"
   - Authorize Vercel to access your GitHub

2. **Import Your Project:**
   - After logging in, click "Add New..."
   - Select "Project"
   - You'll see "Import Git Repository"
   - Find your `coffee-shop-spa` repository
   - Click "Import"

3. **Configure Project:**
   - **Framework Preset:** Vite (should auto-detect)
   - **Root Directory:** Leave as `./`
   - **Build Command:** `npm run build` (auto-filled)
   - **Output Directory:** `dist` (auto-filled)
   - **Install Command:** `npm install` (auto-filled)

4. **Deploy:**
   - Click "Deploy" button
   - Wait 1-2 minutes while Vercel builds and deploys
   - You'll see a success screen with confetti! 🎉

5. **Get Your Live URL:**
   - Your site will be live at: `https://coffee-shop-spa-xxxxx.vercel.app`
   - Click "Visit" to see your deployed site

---

## 🎯 Method 2: Deploy via Vercel CLI (Alternative)

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Login to Vercel

```bash
vercel login
```
- Choose your login method (GitHub, Email, etc.)
- Follow the prompts in your browser

### Step 3: Deploy

```bash
# Navigate to your project
cd D:\xampp\htdocs\ITP110_MLAB2

# Deploy to Vercel
vercel
```

Follow the prompts:
- **Set up and deploy?** → Yes (Y)
- **Which scope?** → Select your account
- **Link to existing project?** → No (N)
- **What's your project's name?** → coffee-shop-spa (or press Enter)
- **In which directory is your code located?** → ./ (press Enter)
- **Want to override the settings?** → No (N)

Wait for deployment to complete, then you'll get your live URL!

### Step 4: Deploy to Production

```bash
vercel --prod
```

---

## ✅ Post-Deployment Checklist

After deployment, test these features on your live site:

### 1. **Basic Navigation**
- [ ] Home page loads correctly
- [ ] All sections visible (Home, About, Menu, Contact, Gallery)
- [ ] Smooth scrolling works
- [ ] Header navigation works

### 2. **Dynamic Routes**
- [ ] Click on menu items
- [ ] URL changes to `/menu/coffee/espresso` (or similar)
- [ ] Item detail page loads with all information
- [ ] Related items are clickable

### 3. **Admin Features**
- [ ] Click "Admin Login" button
- [ ] Login page loads at `/login`
- [ ] Can login with admin/admin123
- [ ] Redirects to `/admin` dashboard
- [ ] Can navigate between nested routes (Products, Customers, Settings)
- [ ] Logout works and returns to home

### 4. **404 Page**
- [ ] Click "Privacy Policy" in footer → Shows 404 page
- [ ] Click "Terms of Service" → Shows 404 page
- [ ] Click "Cookies" → Shows 404 page
- [ ] 404 page looks good with purple gradient
- [ ] "Back to Home" button works

### 5. **React Router**
- [ ] Browser back/forward buttons work
- [ ] No page reloads when navigating
- [ ] URLs are shareable (copy a detail page URL and open in new tab)
- [ ] Refresh page maintains the route

---

## 🔧 Troubleshooting

### Problem: Routes show 404 on refresh
**Solution:** The `vercel.json` file should fix this. If it doesn't work:
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### Problem: Build fails
**Solution:** Check the build logs in Vercel dashboard:
1. Go to your project on vercel.com
2. Click on the failed deployment
3. Check the "Building" section for errors
4. Common fixes:
   - Make sure all dependencies are in `package.json`
   - Check for typos in imports
   - Ensure all files are committed to Git

### Problem: Images not loading
**Solution:** Make sure image URLs are absolute (starting with https://)
- Your project already uses external image URLs, so this should work fine

### Problem: Can't push to GitHub
**Solution:**
```bash
# If you get authentication error, use personal access token
# Go to GitHub → Settings → Developer settings → Personal access tokens
# Generate new token, then use it as password when pushing
```

---

## 🎨 Custom Domain (Optional)

Want a custom domain like `coffeelingka.com`?

1. **Buy a domain** from providers like:
   - Namecheap
   - GoDaddy
   - Google Domains

2. **Add to Vercel:**
   - Go to your project on Vercel
   - Click "Settings" → "Domains"
   - Add your custom domain
   - Follow DNS configuration instructions
   - Wait for DNS propagation (5-48 hours)

---

## 📊 Vercel Dashboard Features

After deployment, you can:

- **View Analytics:** See visitor stats
- **Check Logs:** Debug any issues
- **Environment Variables:** Add API keys (if needed in future)
- **Automatic Deployments:** Every git push auto-deploys
- **Preview Deployments:** Each PR gets a preview URL
- **Rollback:** Instantly rollback to previous versions

---

## 🔄 Update Your Live Site

After making changes to your code:

```bash
# Make your changes, then:
git add .
git commit -m "Description of changes"
git push

# Vercel automatically deploys your changes!
# Wait 1-2 minutes and refresh your live site
```

---

## 📱 Share Your Project

After deployment, share your live URL:

### For Your Lab Submission:
```
Project Name: Coffeeling Ka - Coffee Shop SPA
Live URL: https://your-project-name.vercel.app
GitHub Repo: https://github.com/YOUR_USERNAME/coffee-shop-spa

Features:
✅ Single Page Application with React Router
✅ Dynamic Routes (/menu/coffee/espresso)
✅ Nested Routes (/admin/products)
✅ Protected Routes (admin area with login)
✅ Programmatic Navigation
✅ 404 Error Handling
✅ Fully responsive design
```

---

## 🎓 Quick Commands Reference

```bash
# Initial setup
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_GITHUB_URL
git push -u origin main

# Future updates
git add .
git commit -m "Your changes"
git push

# Vercel CLI (alternative)
vercel                    # Deploy preview
vercel --prod            # Deploy to production
vercel ls                # List deployments
vercel logs              # View logs
```

---

## 💡 Pro Tips

1. **Automatic Deployments:** Once connected, every push to GitHub main branch auto-deploys
2. **Preview URLs:** Create a branch, push it, get a preview URL without affecting production
3. **Zero Config:** Vercel auto-detects Vite, no configuration needed
4. **Free Tier:** Perfect for student projects, includes:
   - Unlimited deployments
   - 100GB bandwidth/month
   - Automatic HTTPS
   - Global CDN

---

## ✨ Your Project is Now Live!

Congratulations! Your Coffee Shop SPA is now:
- 🌐 Accessible worldwide
- 🚀 Running on Vercel's global CDN
- 🔒 Secured with HTTPS
- 📱 Mobile-friendly
- ⚡ Lightning fast

**Live URL Format:** `https://coffee-shop-spa-xxxxx.vercel.app`

Share it with your professor, friends, and add it to your portfolio! 🎉

---

## 📞 Need Help?

- Vercel Docs: https://vercel.com/docs
- Vercel Support: https://vercel.com/support
- Community: https://github.com/vercel/vercel/discussions

**Good luck with your lab submission! 🎓**

