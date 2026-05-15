# DevonShae Creative Studio — CLAUDE.md

Project context for Claude Code. Read this before touching any files.

---

## What this is

Personal portfolio + services site for **DevonShae Creative Studio** — a brand and web design studio. Stack: **Next.js 15 (App Router) + TypeScript + CSS Modules**. No external UI libraries or component frameworks; everything is custom.

---

## Repo structure

```
app/                    Next.js app router pages + layouts
  layout.tsx            Root layout — Nav + Footer wrap all pages
  globals.css           Reset, type scale, utility classes (@imports tokens)
  page.tsx              Home page (composes section components)
  about/                About page
  contact/              Contact page + ContactForm (client component)
  portfolio/            Portfolio page
  services/             Services page

components/             Shared + section UI components
  Button.tsx/.module.css    Single button component, 5 variants
  Nav.tsx/.module.css       Fixed nav, scroll shadow, mobile hamburger
  Footer.tsx/.module.css    Footer with logo + nav links
  Hero.tsx/.module.css      Full-bleed photo hero, used on home page
  About.tsx/.module.css     Two-col about section
  Services.tsx/.module.css  Three-card services grid
  Portfolio.tsx/.module.css Sticky-title + grid layout, dark bg
  Testimonials.tsx          Three testimonial cards
  CTA.tsx/.module.css       Photo-backed CTA section, reusable

styles/
  tokens.css            ALL design tokens (colors, fonts, spacing, etc.)
                        @font-face declarations live here too

public/
  images/               All brand SVGs + photography
  fonts/                All four Perfectly Nineties weights + Clubhouse + Luminaire
```

---

## Design system

### Colors — always use tokens, never raw hex values

| Token | Value | Use |
|---|---|---|
| `--clr-cream` | `#FFFCF3` | Page background, text on dark |
| `--clr-brown` | `#3D1900` | Primary text, nav links, logo fill |
| `--clr-blue` | `#CFDEFF` | Nav bg, accent surfaces, card bg |
| `--clr-olive` | `#A08D17` | Accent green (brand cards) |
| `--clr-orange` | `#FF6C39` | Buttons, CTAs, highlights |
| `--clr-surface` | `#F4DEC9` | Warm peach — muted surfaces |
| `--clr-ink-muted` | `#7A5C3F` | Secondary body text |

### Typography

| Role | Font | Token |
|---|---|---|
| Headers / hero | Perfectly Nineties | `--ff-header` |
| Section subheaders | Clubhouse | `--ff-sub` |
| Decorative / pull quotes | Luminaire | `--ff-accent` |
| Body / UI / buttons | Montserrat | `--ff-body` |

Fonts are self-hosted in `public/fonts/`. Montserrat loads from Google Fonts via `globals.css`.

### Spacing — use the scale, don't invent values

`--space-xs` (8px) → `--space-sm` (16px) → `--space-md` (32px) → `--space-lg` (64px) → `--space-xl` (128px) → `--space-2xl` (192px)

### Brand icons (SVGs in `public/images/`)

`wave.svg`, `sun.svg`, `palm_tree.svg`, `starfish.svg`, `surf_board.svg` — decorative coastal elements, use as `<Image>` with `aria-hidden`. Always low opacity when used as backgrounds.

---

## Component conventions

- **CSS Modules** for all component styling (`ComponentName.module.css` co-located).
- **No inline styles** except for one-off `aria-hidden` decorative tweaks.
- **Tokens only** in CSS — `var(--clr-*)`, `var(--space-*)`, etc.
- `Button` component handles all button/link CTA variants — don't create new `<button>` or `<a>` elements with custom styling.
- Section components accept props for copy/images so pages can customize them without editing the component itself.

---

## Adding a new page

1. Create `app/<route>/page.tsx` with a `metadata` export.
2. Add a matching `<route>.module.css` alongside it if it needs unique styles.
3. Reuse section components where possible (`Hero`, `CTA`, etc.).
4. Add the route to the `links` array in `components/Nav.tsx` and `components/Footer.tsx`.

---

## Adding portfolio items

Pass an `items` array to `<Portfolio>`. Each item:
```ts
{ id: string, title: string, category: string, src?: string, href?: string }
```
If `src` is omitted, a placeholder renders. Images go in `public/images/`.

---

## Form handling (Contact page)

`app/contact/ContactForm.tsx` is a client component with a placeholder submit handler. Wire it to **Resend**, **Formspree**, or a Next.js Route Handler at `app/api/contact/route.ts`. The UI is complete; only the API call needs implementing.

---

## Deploying

This is a standard Next.js app — deploy to **Vercel** by connecting the GitHub repo. No extra config needed; `next.config.ts` is already set.

---

## What NOT to do

- Don't add a CSS framework (Tailwind, Bootstrap, etc.) — the token system is the framework.
- Don't create new color values outside `tokens.css`.
- Don't use `<img>` — always use Next.js `<Image>` for anything in `public/`.
- Don't put page-level CSS in `globals.css` — it goes in a `.module.css` file.
