# Gerard Cabot — Portfolio

Single-page developer portfolio built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com). Static output only — suitable for **free** hosting.

## Prerequisites

- [Node.js](https://nodejs.org/) **20.x or newer**

## Scripts

```bash
npm install
npm run dev     # http://localhost:4321
npm run build   # writes to ./dist
npm run preview # serve ./dist locally
```

## Customize

| What | Where |
|------|--------|
| Projects (titles, URLs, tags) | `src/data/projects.ts` |
| Skills groups | `src/data/skills.ts` |
| GitHub / LinkedIn / email | `src/data/contact.ts` |
| About bio copy | `src/components/About.astro` |

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

2. **Import the repo in Vercel**

   Go to [vercel.com/new](https://vercel.com/new). Vercel will detect Astro; leave defaults (**Output**: static `dist`**).

3. **Choose your URL**

   When creating (or renaming) the Vercel project, set **Project Name** to `gerardcabot` → the site serves at **`https://gerardcabot.vercel.app`**.

Later you can attach a purchased domain under **Project → Settings → Domains** — hosting stays on the Hobby (free) plan.
