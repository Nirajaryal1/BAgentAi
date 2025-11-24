# BAgentAi

BAgentAi — A focused landing site and small marketing app for a Bay Area AI automation agency serving restaurants.

This repository contains a Next.js (App Router) site with Tailwind CSS and a set of reusable React components (Hero, Features, Pricing, FAQ, Footer, Navbar, etc.).

---

## Summary

- Framework: Next.js 14 (App Router)
- Language: JavaScript (React 18)
- Styling: Tailwind CSS
- Animations: framer-motion
- Icons: lucide-react

This project is a marketing/landing site that includes an interactive Pricing section (with a Location Toggle for Hub & Spoke pricing), FAQ, features, and contact/footer.

---

## Quick Start (Development)

Prerequisites
- Node.js 18+ recommended
- npm (comes with Node.js)

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
# Open http://localhost:3000
```

Build (production):

```bash
npm run build
npm start
```

---

## Environment

This project may read environment variables for runtime configuration. Create a `.env.local` file at the project root for local development if needed. Example variables used previously (if you re-enable Stripe later):

```bash
# Example - not required for current state
# STRIPE_SECRET_KEY=sk_test_...
# NEXT_PUBLIC_URL=http://localhost:3000
# STRIPE_WEBHOOK_SECRET=whsec_...
```

Note: `.env*` files are ignored by `.gitignore`.

---

## Project Structure (overview)

- `app/` - Next.js App Router routes and pages
- `components/` - Reusable UI components (Hero, Pricing, FAQ, Footer, Navbar, etc.)
- `public/` - Static assets
- `package.json` - Scripts and dependencies
- `.gitignore` - Files excluded from git

---

## Pricing & Get Started

- The Pricing component (`components/Pricing.jsx`) includes a Location Toggle for Single vs Multi-Location (Hub & Spoke) pricing.
- "Get Started" buttons currently scroll/anchor to contact. (A prior Stripe Checkout integration was added then reverted; you can re-enable a payment provider later — see the `stripe-integration` notes below.)

---

## Rewriting History (Important)

Large artifacts (node_modules, `.next`, and swc binaries) were previously accidentally committed and blocked pushes to GitHub (files > 100MB). To fix this, the repository history was cleaned and rewritten and then force-pushed to `origin/main`.

Important consequences:
- Commit history was rewritten and a force-push performed. If other collaborators cloned the repo earlier, they must re-clone or reset their local copy. Recommended collaborator steps:

```bash
# simplest: re-clone the repo
git clone https://github.com/Nirajaryal1/BAgentAi.git
```

Or, if you must keep a local branch, follow advanced instructions (I can provide them).

---

## GitHub / CI / Deployment

This repo is a standard Next.js app and can be deployed to Vercel, Netlify, or similar. For Vercel, connect the GitHub repo and set any environment variables in the Vercel dashboard.

---

## Reintroducing Payments (Optional)

If you want to accept payments later, Stripe Checkout is a good approach:
- Use server API route to create Checkout Sessions.
- Use webhooks for `checkout.session.completed` to provision services.
- Use `STRIPE_SECRET_KEY` and `STRIPE_WEBHOOK_SECRET` env vars.

I can re-add a clean Stripe integration on a feature branch (without committing node_modules or large binaries).

---

## Linting & Formatting

No specific pre-commit hooks are included. You can run `npm run lint` if ESLint is configured in the future.

---

## Troubleshooting

- If `npm install` complains or you see unexpected large files, ensure `.gitignore` is present and that you didn't commit `node_modules` or `.next`.
- For local preview issues, run `npm run dev` and check the terminal for compile errors.

---

## Contact / Maintainers

Repository owner: `Nirajaryal1` (GitHub)

If you want me to implement payments again or add CI, tagging, or a more detailed CONTRIBUTING.md, tell me which feature you want next and I will create a feature branch and implement it.
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
