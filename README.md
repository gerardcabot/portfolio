# Gerard Cabot: portfolio

**Live site:** https://gerardcabot.vercel.app

Multi-language portfolio (`/en/`, `/es/`, `/ca/`, `/fr/`) built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com). Static output only, suited to **free** hosting.

**Source repo:** https://github.com/gerardcabot/portfolio

## Prerequisites

- [Node.js](https://nodejs.org/) **20.x or newer**

## Scripts

```bash
npm install
npm run dev     # http://localhost:4321 (try /en/ after changes)
npm run build   # writes to ./dist
npm run preview # serve ./dist locally
```

After `npm run build`, you should see `dist/en/index.html`, `dist/es/index.html`, and so on.

## Customize

| What | Where |
|------|--------|
| All section copy per language | `src/i18n/locales/` (`en.json`, `es.json`, `ca.json`, `fr.json`) |
| Projects (URLs, tags, icons) | `src/data/projectSeeds.ts` + hydrated labels from locale JSON |
| GitHub / LinkedIn / email | `src/data/contact.ts` |
| Featured book / Amazon link | `src/data/featured.ts` |
| Section width / gutters | `src/config/layout.ts` (`contentShell`) |

Optional: drop a photo at `public/photo.jpg` and reference it from `Hero.astro` if you later add one.

---

## Deploy for free on Vercel (`gerardcabot.vercel.app`)

1. **Push this repo to GitHub**

   ```bash
   cd Portfolio
   git init
   git add .
   git commit -m "Add Astro portfolio site"
   gh repo create portfolio --public --source=. --remote=origin --push
   ```

   _(If you prefer not to use the GitHub CLI, create an empty repo in the GitHub UI, `git remote add origin …`, then `git push -u origin main`.)_

2. **Import / link the repo in Vercel**

   Go to [vercel.com/new](https://vercel.com/new). This project deploys statically with **Build Command**: `npm run build`, **Install Command**: `npm install`, **Output Directory**: **`dist`** (critical). Framework preset **Astro** is picked up automatically once `astro` is in the repo.

### If `/en/` returns 404 but `/` loads an old single page

Something in the Vercel project settings is wrong or an old deployment is cached.

1. **Settings → Build & Deployment**
   - **Output Directory**: must be **`dist`** (not `.`, not empty, not `public`).
   - **Root Directory**: **`./`** unless this app lives inside a monorepo subfolder (then point it at `Portfolio`).
   - **Build Command**: `npm run build` (or rely on Astro auto-detection).

2. Open the deployment **Build Logs** and confirm Astro prints **`/en/index.html`** among generated routes.

3. Trigger **Redeploy** (Deployments → ⋯ → Redeploy) after fixing settings.

Later you can attach a purchased domain under **Project → Settings → Domains**. Hosting stays on the Hobby (free) plan.
