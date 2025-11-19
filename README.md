# BAgentAi

This workspace contains a Next.js + Tailwind CSS landing page scaffold for a restaurant-focused AI agency ("Cabernet & Gold" brand colors).

Files added:

- `app/layout.js` - global layout & Inter font
- `app/page.js` - main landing page assembling components
- `app/globals.css` - Tailwind directives + small helpers
- `components/` - `Hero.jsx`, `Pricing.jsx`, `Features.jsx`, `FAQ.jsx`, `Footer.jsx`
- `tailwind.config.js` - custom Cabernet & Gold colors
- `postcss.config.js` - PostCSS config
- `package.json` - scripts & dependencies (Next.js + Tailwind + lucide-react)

Quick start:

```bash
# install deps
npm install

# run dev
npm run dev
```

Notes:
- If you didn't create this project with `create-next-app`, run `npx tailwindcss init -p` to re-generate config if needed.
- Replace `/public/restaurant-bg.jpg` with your hero background image or update the Hero component.

Consulting Agency delivers a full-stack AI growth engine designed for Bay Area businesses.
