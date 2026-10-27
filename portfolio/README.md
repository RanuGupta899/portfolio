# Ranu Gupta – Portfolio (Next.js + Tailwind CSS)

## Run locally

```bash
npm install
npm run dev
# open http://localhost:3000
```

Edit `data/portfolio.js` to change your details, projects, skills and links
(don't forget to replace the GitHub URL).

## Push to GitHub

1. Create an empty repo on https://github.com/new (e.g. `portfolio`) — no README.
2. In this folder run:

```bash
git init
git add .
git commit -m "Initial commit: portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
git push -u origin main
```

## Deploy for free

### Option 1: Vercel (recommended for Next.js)
1. Sign in at https://vercel.com with GitHub.
2. Add New → Project → import your `portfolio` repo.
3. Keep defaults (Framework: Next.js) → Deploy.
4. You get `https://portfolio-xxxx.vercel.app`. Every `git push` redeploys automatically.

### Option 2: Netlify
Import the repo at https://app.netlify.com, build command `npm run build`
(Netlify's Next.js runtime is applied automatically).

### Option 3: GitHub Pages (static only)
Add `output: "export"` and `images: { unoptimized: true }` to `next.config.mjs`,
then publish the `out/` folder using a GitHub Actions workflow.

### Option 4: Cloudflare Pages
Connect the repo, framework preset Next.js, build command `npm run build`.

## Custom domain
Buy a domain, then add it in Vercel → Project → Settings → Domains and
follow the DNS instructions.
