# Wedding site

A page about my wedding, built with React + Vite + TypeScript + Tailwind CSS.

## Getting started

```bash
pnpm install
pnpm dev      # dev server
pnpm build    # production build (dist/)
```

## Configuration

Names, date, venues, contact info and photos are supplied via environment variables so they don't live in the repo - see `.env.example`. Deployment to GitHub Pages happens automatically via `.github/workflows/deploy.yml` on push to `main` (values come from repo secrets).

The site is also gated behind a 4-digit PIN (`VITE_ACCESS_PIN`). This is a soft deterrent, not real security - the PIN ships in the client bundle like everything else on a static site, so it only stops casual link-sharing/crawlers, not anyone who inspects the page.
