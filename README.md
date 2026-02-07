# SophosTC - Modern Next.js Website

A modern, performant website for Sophos Technology Consultancy built with Next.js 16, TypeScript, and Tailwind CSS.

## 🌐 About

Sophos Technology Consultancy is a UAE-based software development company specializing in finance, payments, and fintech solutions. This is a modern rebuild of their WordPress site using cutting-edge web technologies.

## 🚀 Quick Start

### Prerequisites
- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📁 Project Structure

```
sophostc/
├── src/
│   ├── app/              # App router pages
│   │   ├── layout.tsx    # Root layout
│   │   ├── page.tsx      # Homepage
│   │   └── globals.css   # Global styles
│   ├── components/       # Reusable components (to be added)
│   └── lib/             # Utility functions (to be added)
├── public/              # Static assets
├── DEPLOYMENT.md        # Deployment instructions
└── README.md           # This file
```

## 🎨 Design System

### Brand Colors
- **Primary:** `#272a49` (Navy Blue)
- **Accent:** `#25e89d` (Teal/Mint)
- **Secondary:** `#2ea3f2` (Bright Blue)
- **Text:** `#333` (Headings), `#666` (Body)

### Typography
- **Primary Font:** Open Sans
- **Secondary Font:** Roboto Flex
- **Base Size:** 14px
- **Line Height:** 1.7em

## 📄 Pages to Build

- [x] Project setup
- [ ] `/` - Homepage with hero, services, about
- [ ] `/services` - Detailed services page
- [ ] `/projects` - Portfolio showcase (6 case studies)
- [ ] `/about-us` - Company information
- [ ] `/blog` - Blog listing and posts
- [ ] `/contact-us` - Contact form

## 🔧 Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Linting:** ESLint
- **Package Manager:** npm

## 🚢 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository at [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects Next.js settings
4. Deploy!

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

## 📚 Resources

- [Original Site Analysis](/data/workspace/sophostc-site-analysis.md)
- [Current WordPress Site](https://sophostc.com)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

## 👨‍💻 Development Notes

### Components Needed
1. **Header** - Logo, navigation, mobile menu
2. **Hero** - Main headline, CTA, hero image
3. **ServiceCard** - Service features (reusable)
4. **ProjectCard** - Portfolio items
5. **Footer** - Links, social media, copyright

### Content to Port
- All page copy from WordPress
- Images and assets
- Project case studies
- Blog posts (if migrating)

## 📝 License

Proprietary - Sophos Technology Consultancy LLC

---

**Built with ❤️ for Sophos Technology Consultancy**
