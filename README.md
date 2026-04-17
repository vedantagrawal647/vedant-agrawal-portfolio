# Vedant Agrawal — Portfolio Website

A production-grade React portfolio. Dark, editorial aesthetic with DM Serif Display typography, animated hero, tabbed experience, count-up stats, and a full contact section.

## Tech Stack
- React 18
- CSS Modules (component-scoped)
- Google Fonts (DM Serif Display, Syne, DM Mono)
- No external UI libraries — pure React + CSS

---

## Getting Started (Local)

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm start
# Opens http://localhost:3000

# 3. Build for production
npm run build
```

---

## Deployment Options

### Option 1 — Vercel (Recommended, free)
1. Push this folder to a GitHub repository
2. Go to https://vercel.com → New Project → Import your repo
3. Framework preset: **Create React App**
4. Click **Deploy** — done in ~60 seconds

### Option 2 — Netlify (free)
1. Push to GitHub
2. Go to https://netlify.com → Add new site → Import from Git
3. Build command: `npm run build`
4. Publish directory: `build`
5. Click **Deploy site**

### Option 3 — GitHub Pages (free)
1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```
2. Add to `package.json`:
   ```json
   "homepage": "https://YOUR_GITHUB_USERNAME.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Run:
   ```bash
   npm run deploy
   ```

### Option 4 — AWS S3 + CloudFront
1. Build: `npm run build`
2. Create an S3 bucket, enable static website hosting
3. Upload contents of `build/` to the bucket
4. Set up CloudFront distribution pointing to S3

---

## Project Structure

```
portfolio/
├── public/
│   └── index.html          # HTML shell + Google Fonts
├── src/
│   ├── App.jsx             # Root component
│   ├── App.css             # Global layout + section styles
│   ├── index.js            # React entry point
│   ├── index.css           # CSS variables + reset
│   └── components/
│       ├── Nav.jsx / .css      # Sticky navbar with mobile menu
│       ├── Hero.jsx / .css     # Animated hero with role rotator
│       ├── Stats.jsx / .css    # Count-up stat cards
│       ├── Skills.jsx / .css   # Hover skill grid
│       ├── Experience.jsx / .css  # Tabbed work history
│       ├── Projects.jsx / .css    # Featured projects list
│       ├── Contact.jsx / .css     # Contact card + links
│       └── Footer.jsx / .css      # Footer
├── vercel.json             # Vercel SPA routing config
├── .gitignore
└── README.md
```

---

## Customization

All content is in the component files — no config files needed:

| What to change | Where |
|---|---|
| Name, bio, availability | `Hero.jsx` |
| Certifications | `Hero.jsx` → `hero__certs` array |
| Stats numbers | `Stats.jsx` → `stats` array |
| Skills | `Skills.jsx` → `skillGroups` array |
| Work experience | `Experience.jsx` → `experiences` array |
| Projects | `Projects.jsx` → `projects` array |
| Contact details | `Contact.jsx` |
| Colors / fonts | `src/index.css` → `:root` variables |
