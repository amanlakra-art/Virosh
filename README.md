# Virosh Daily Play

Interactive NPD concept page for a yeast protein and daily essentials blend with optional flavour shots.

## Product concept

- 25 g verified yeast protein
- 3 g creatine monohydrate in the base
- 4.5 g PHGG fibre
- 200 mg algal DHA
- Targeted vitamins and minerals
- Four flavour shots plus Original

All formulation values are prototype targets. They are not a final statutory nutrition panel or consumer label.

## Run locally

Requirements: Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

## Validate

```bash
npm test
npm run build:vercel
npm run lint
```

`npm run build` validates the private Sites and Cloudflare target. `npm run build:vercel` validates the Vercel Nitro target.

## Reuse the visual system

The layout, visual tokens and interaction rules are documented in [Kinetic Editorial Product UI](docs/Kinetic_Editorial_Product_UI.md). The guide separates reusable design decisions from Virosh-specific copy and product content.

## Main files

- `app/page.tsx`: page structure, content and flavour interaction
- `app/globals.css`: complete visual system and responsive behaviour
- `public/og.png`: product still life and social preview image
- `vercel.json`: Vercel build configuration

## Deployment

- Vercel builds through Nitro and emits the Vercel Build Output API format.
- The private Sites deployment retains its Cloudflare-compatible build path.
