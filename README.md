# STAY HEAVEN — Guesthouse Website Template

Next.js 16 (App Router) · TypeScript · Tailwind CSS · next-intl · Framer Motion.

A single-page, scroll-based boutique guesthouse/hotel brand site with sticky nav,
scroll spy, and 4-locale routing (EN / JA / ZH / KO).

> **Demo template.** All copy, images, contact details, prices, and links are
> fictional placeholder data ("STAY HEAVEN"). Replace them with real content
> before launch.

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000  (EN by default)
npm run build
npm run typecheck
```

Locales: `/` `/ja` `/zh` `/ko`.

## Project structure

```
app/
  [locale]/
    layout.tsx          # locale layout, SEO metadata + JSON-LD
    page.tsx            # single-page composition
    sections/           # About / Rooms / LongStay / Facilities / Location / GuestNotes / Booking
  layout.tsx            # root passthrough (globals.css + favicon)
  globals.css
components/             # Nav, FloatingCTA, LegalModal, FadeIn, etc.
content/                # {en,ja,zh,ko}.json  (all editable copy)
i18n/                   # next-intl routing + request config
lib/
  constants.ts          # brand info, URLs, section ids, locale labels
  content.ts            # loads content JSON per locale
  legal.ts              # privacy policy + terms (4 locales)
public/images/          # hero.jpg, about.jpg, double-*.jpg, twin-*.jpg (placeholders)
proxy.ts                # next-intl locale middleware
scripts/
  gen-placeholders.mjs  # regenerate the placeholder images
```

## Editing content

- **Text:** edit `content/{locale}.json` (keep the keys and image paths).
- **Images:** replace files in `public/images/` (keep the filenames), or run
  `node scripts/gen-placeholders.mjs /tmp/ph` and convert to JPG.
- **Brand + business info:** `lib/constants.ts` (`BUSINESS`, OTA/map/form URLs,
  `EMAIL`, `SITE_URL`). SEO structured data is generated from `BUSINESS`.
- **Legal docs:** `lib/legal.ts`.

## Notes

- The placeholder images are generated diagonal gradients — swap in real photos
  before launch.
- All external links (Google Form, Booking.com, Agoda, Trip.com, Instagram,
  maps) point to generic/sample destinations.
- Translations are first-pass; a native proofreading pass is recommended.
