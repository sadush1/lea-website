# LEA — Little Explorer of Albania 🦩🇦🇱

> **Discover Albania. Love Nature. Explore the Story.**

The homepage and brand foundation for **LEA**, a children's educational and cultural
brand built around Lea, a curious little flamingo who takes children on adventures
through Albania's nature, history and culture.

This repo currently contains the **first version of the marketing website**: a single
responsive homepage that introduces the brand, the character, the first storybook,
and the future product line (passport, explorer box, school kits, hotel kits).

🔗 **Live site:** _add your GitHub Pages / custom domain URL here once deployed_

---

## Status of what's shown on the site

The site is intentionally honest about what exists today vs. what's planned:

| Label | Meaning |
|---|---|
| 🟢 **Available Now** | *Lea and the Flamingos of Albania* (Book 1) |
| 🟠 **Coming Soon** | Books 2–8, Explorer Passport, Explorer Box |
| 🔵 **Future Vision** | School kits, hotel/tourism kits, interactive map, AL translation, e-commerce |

Please keep this distinction intact when adding content — don't imply a product,
partnership or review exists until it genuinely does.

---

## Project structure

```
.
├── index.html              # The homepage (single page, anchor-linked sections)
├── assets/
│   ├── css/
│   │   └── styles.css      # Design tokens + all styling
│   ├── js/
│   │   └── script.js       # Mobile nav, newsletter stub, motion preference
│   └── images/              # Reserved for future illustration exports (currently
│                             # all art is hand-coded inline SVG — see below)
└── README.md
```

This flat structure is deliberate for v1: no build step, no dependencies, works by
opening `index.html` directly or hosting as static files. As the brand grows (book
detail pages, shop, blog, bilingual routing), see **Roadmap** below for how this
folder layout is meant to expand.

### Why the illustrations are inline SVG, not image files

Lea and the landscape scenes are currently hand-coded SVG directly inside
`index.html`, rather than exported PNG/SVG image files in `assets/images/`. This
keeps the prototype dependency-free and lets colors adapt via CSS variables. Once
real illustration work replaces these placeholders, swap them in as files in
`assets/images/` (or `assets/illustrations/`) and reference them with `<img>` or
`background-image` — the visual slots (hero scene, Lea portrait, book cover,
passport, explorer box) are already isolated in the markup, so this is a
find-and-replace job, not a redesign.

---

## Local development

No build tools required.

```bash
# from the repo root
python3 -m http.server 8000
# then open http://localhost:8000
```

Or just double-click `index.html` — everything except the Google Fonts import works
fully offline.

---

## Deploying to GitHub Pages

1. Push this repo to GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to `Deploy from a branch`, branch
   `main`, folder `/ (root)`.
4. Save. GitHub will publish to `https://<username>.github.io/<repo-name>/` within
   a minute or two.
5. **Custom domain (optional):** add a `CNAME` file at the repo root containing your
   domain (e.g. `lealbania.com`), then point your DNS at GitHub Pages per
   [GitHub's custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

---

## Brand quick reference

**Colors** (see `:root` in `assets/css/styles.css` for full tokens)
- Flamingo pink `#E08BA0` — used sparingly, as an accent, not a background
- Cream `#FBF4EA` — primary background
- Sky blue `#D8EAF0` / Deep Mediterranean blue `#1F4E5F`
- Forest green `#4B7A5B` · Terracotta `#C1622E`

**Type**
- Display / headings: **Fredoka** (rounded, warm, premium-children's-publishing feel)
- Body: **Public Sans** (highly readable, modern)

**Voice**
- Warm, curious, playful, intelligent — never a tourist-board tone, never
  generic-cartoon cute. Proud of Albania without being overtly patriotic.

---

## Roadmap (not yet built)

- [ ] Bilingual routing (🇦🇱 Albanian / 🇬🇧 English) — architecture should support
      `/en/` and `/al/` paths or a query-based switch; **do not machine-translate**,
      real translation only
- [ ] Individual book detail pages (`/books/lea-and-the-flamingos-of-albania/`)
- [ ] Interactive Albania map (click a destination → animals, landmarks, stories)
- [ ] E-commerce: product pages, cart, checkout (Books, Passport, Explorer Box, etc.)
- [ ] Real newsletter backend (currently `assets/js/script.js` only simulates success)
- [ ] Educators / Partners contact forms (currently link to the newsletter section)
- [ ] Conservation partnership section (only once real partnerships exist)

## Content principles (please read before adding copy)

- All Albanian history, geography, nature and conservation claims must be factually
  accurate — no invented facts, even in service of a nicer sentence.
- Lea's stories can be imaginative; factual claims cannot.
- Never present a "Coming Soon" or "Future Vision" item as available now.
- Keep the environmental messaging positive and child-friendly, not political.

---

© LEA — Little Explorer of Albania. Brand and website prototype in active development.
