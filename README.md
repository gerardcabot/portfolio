# Gerard Cabot — Portfolio

**Live site:** https://gerardcabot.vercel.app

Single-page developer portfolio built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com). Static output only — suitable for **free** hosting.

**Source repo:** https://github.com/gerardcabot/portfolio

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

2. **Import / link the repo in Vercel**

   Go to [vercel.com/new](https://vercel.com/new). This project deploys statically with **Build Command**: `astro build`, **Output**: `dist`. Name the project `gerardcabot` → the site resolves to **`https://gerardcabot.vercel.app`**.

### Git-connected deploys

If linking `gerardcabot/portfolio` fails with **Login Connection** errors, enable GitHub for your Vercel account under login connections ([docs](https://vercel.com/docs/accounts/create-an-account#login-methods-and-connections)), then reconnect the repository in Project → Settings → Git.

Later you can attach a purchased domain under **Project → Settings → Domains** — hosting stays on the Hobby (free) plan.
