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

## Deploy to Google Cloud Run (preview link)

You can deploy this app to Google Cloud Run and get a public preview URL. I added a `Dockerfile` and a GitHub Actions workflow at `.github/workflows/deploy-cloud-run.yml` that will build a container image and deploy it to Cloud Run when you push to `main` (or run the workflow manually).

What I added:
- `Dockerfile` — builds the Next.js production app and runs `next start` on port `8080`.
- `.github/workflows/deploy-cloud-run.yml` — GitHub Actions workflow that authenticates with GCP and deploys to Cloud Run.

What you need to set up in Google Cloud and GitHub (one-time):

1. Create a GCP project (or choose an existing one).
2. Enable the Cloud Run API and Container Registry (or Artifact Registry) in that project.
3. Create a Cloud Run service name (e.g. `bagentai-preview`).
4. Create a GCP service account with the `Cloud Run Admin`, `Storage Admin` (or `Artifact Registry Writer`), and `Service Account User` roles.
5. Create and download a JSON key for that service account.

GitHub repository secrets to add (Repository -> Settings -> Secrets -> Actions):
- `GCP_PROJECT` — your GCP project id
- `GCP_SA_KEY` — the **contents** of the service account JSON key (add as a secret)
- `CLOUD_RUN_SERVICE` — name of the Cloud Run service (e.g. `bagentai-preview`)
- `CLOUD_RUN_REGION` — region (e.g. `us-central1`)

How it works after you add secrets:
- Push to `main` (or run the workflow manually) and the workflow will:
	- authenticate using `GCP_SA_KEY` and `GCP_PROJECT`
	- build a Docker image, push it to `gcr.io/$GCP_PROJECT` and deploy to Cloud Run
	- print the service URL in the workflow logs

Quick local check (optional):

```bash
# Build and run locally with Docker
docker build -t bagentai-local .
docker run -p 8080:8080 bagentai-local
# Open http://localhost:8080
```

Notes & tips:
- The workflow allows unauthenticated access by default (`--allow-unauthenticated`) so you get a public preview URL. If you want auth, change the workflow flags.
- If you prefer Artifact Registry instead of `gcr.io`, update the workflow image name and push commands accordingly.
- If you'd like, I can add a second workflow to deploy preview branches to per-PR Cloud Run services (create-on-demand) — say the word and I will scaffold it.

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
