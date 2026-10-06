# Rajpal — Portfolio

A dark, single-page developer portfolio (hero → about + timeline → tech stack),
rebuilt after [abdullah-portfolio-dev.vercel.app](https://abdullah-portfolio-dev.vercel.app/)
with a violet accent. Built with **Next.js 16 + React 19 + Tailwind CSS 3** and
statically prerendered — it deploys anywhere Next.js runs (e.g. Vercel) with
zero config.

## Run it

```bash
npm install     # first time only
npm run dev     # dev server → http://localhost:3000
npm run build   # production build
npm start       # serve the production build
```

## Edit the content — one file

**Everything personal lives in [`src/data/profile.ts`](src/data/profile.ts):**

| What | Field |
| --- | --- |
| Big hero word | `firstName` |
| Tab title / SEO name | `fullName` |
| Hero subtitle | `role` |
| Bio card paragraphs | `intro[]` |
| Experience / Certification / Education | `timeline[]` (each entry: `heading`, `items[]` with `designation`, `place`, optional `points[]`) |
| Tech tiles (3 groups) | `techGroups[]` — each item: `name`, `icon` (key from `src/components/iconMap.tsx`), `color` (glow color) |
| Hero icon buttons | `socials.github / .linkedin / .email` |
| "⭐ Star this repo" ribbon (empty string hides it) | `repoUrl` |
| Search-engine description | `metaDescription` |

To use a tech icon that isn't mapped yet, import it from `react-icons/si` in
[`src/components/iconMap.tsx`](src/components/iconMap.tsx) and add a key
(browse available icons at https://react-icons.github.io — Simple Icons set).

## Change the accent color

Open [`src/app/globals.css`](src/app/globals.css) and edit the block marked
**CHANGE ACCENT** at the top: swap the `--primary` RGB triplet and the
`--accent-hex` (plus the `hsl(266, …)` values in the neighboring variables).
Comments there include the blue values used by the original site.

## Structure

```
src/
  app/
    layout.tsx        # fonts (Fugaz One + Open Sans), metadata, favicon
    page.tsx          # sections composition
    globals.css       # full theme (ported reference CSS, violet)
    icon.svg          # favicon
  components/
    Hero.tsx          # floating pills, name, socials, GitHub ribbon
    About.tsx         # bio card + timeline
    Tech.tsx          # glowing tech tiles
    GlowTile.tsx      # icon tile with brand-colored glow + tooltip
    HoverText.tsx     # per-character roll-up hover animation
    StarCanvas.tsx    # twinkling stars + sparkle canvas
    CustomCursor.tsx  # white dot cursor (desktop only)
    ScrollProgress.tsx# right-edge scroll progress dot
  data/profile.ts     # ← ALL personal content
```

## First push to GitHub

```bash
cd rajpal-portfolio
git add .
git commit -m "Rajpal portfolio"
git remote add origin https://github.com/<rajpals-user>/<repo>.git
git push -u origin main
```

Then import the repo on [vercel.com/new](https://vercel.com/new) — no settings
changes needed. To use a custom favicon, drop a PNG at
`src/app/icon.png` (or an `apple-icon.png`) and delete `icon.svg`.
