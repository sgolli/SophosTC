# SophosTC Next.js Deployment Guide

## GitHub Repository Setup

Since GitHub CLI is not configured on this environment, please follow these steps to create and push the repository:

### Step 1: Create Repository on GitHub

1. Go to https://github.com/new
2. Repository name: `SophosTC` (or `sophostc`)
3. Description: "Modern Next.js website for Sophos Technology Consultancy"
4. Visibility: Public
5. **Do NOT initialize** with README, .gitignore, or license (we already have these)
6. Click "Create repository"

### Step 2: Push Local Code to GitHub

After creating the repository, run these commands from the project directory:

```bash
cd /data/workspace/sophostc

# Add the remote repository (replace 'sgolli' with your GitHub username if different)
git remote add origin https://github.com/sgolli/SophosTC.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

### Alternative: Using SSH

If you have SSH keys set up:

```bash
git remote add origin git@github.com:sgolli/SophosTC.git
git branch -M main
git push -u origin main
```

## Project Structure

```
sophostc/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout
│   │   ├── page.tsx        # Homepage
│   │   ├── globals.css     # Global styles
│   │   └── favicon.ico
│   └── ... (components, lib, etc. to be added)
├── public/                 # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.ts
└── README.md
```

## Development Setup

### Prerequisites
- Node.js 18.17 or later
- npm, yarn, or pnpm

### Install Dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```

### Run Development Server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Next Steps

1. **Review the site analysis**: Check `/data/workspace/sophostc-site-analysis.md`
2. **Design components**: Create React components for:
   - Header/Navigation
   - Hero section
   - Services cards
   - Projects showcase
   - Footer
3. **Add content**: Port content from the current WordPress site
4. **Set up deployment**: 
   - Vercel (recommended for Next.js)
   - Netlify
   - Self-hosted

## Deployment Options

### Vercel (Recommended)
1. Push code to GitHub
2. Go to https://vercel.com/new
3. Import the GitHub repository
4. Vercel will auto-detect Next.js and configure build settings
5. Deploy!

### Netlify
1. Push code to GitHub
2. Go to https://app.netlify.com/start
3. Connect GitHub repository
4. Build command: `npm run build`
5. Publish directory: `.next`
6. Deploy!

### Custom Domain Setup

After deployment:
1. Go to your hosting provider's dashboard
2. Add custom domain: `sophostc.com`
3. Update DNS records at GoDaddy:
   - A record pointing to hosting IP
   - Or CNAME pointing to hosting URL
4. Enable SSL certificate (usually automatic)

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

