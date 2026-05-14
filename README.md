# Digital Crest Consulting

The marketing site for digitalcrest.co.uk, built with Next.js 14, TypeScript and Tailwind CSS. Designed for deployment to Vercel.

## Stack

- Next.js 14 (App Router, RSC)
- TypeScript
- Tailwind CSS 3
- next/font (Inter, Space Grotesk, JetBrains Mono)
- Lucide icons
- Vercel hosting

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Scripts

- `npm run dev`: start the dev server
- `npm run build`: production build
- `npm run start`: run the production build
- `npm run typecheck`: TypeScript only
- `npm run lint`: Next.js + ESLint

## Project layout

```
app/                Routes (App Router)
  page.tsx          Home
  services/         Services index and detail pages
  approach/         Approach page
  about/            About page
  insights/         Insights index
  contact/          Contact page
  privacy/, terms/  Legal pages
  sitemap.ts        Auto generated sitemap
  robots.ts         robots.txt
components/         Reusable UI
lib/                Shared data (services catalogue)
public/             Static assets
```

## Brand

- Cream background `#F2ECDC`
- Navy `#0E1F40`
- Gold `#C3A463`
- Display: Space Grotesk
- Body: Inter
- Mono: JetBrains Mono

## Deploying to Vercel

1. Push this branch to GitHub.
2. Import the repo in Vercel.
3. Framework preset: Next.js. No build overrides needed.
4. Add the `digitalcrest.co.uk` domain in the project settings, then point the apex and www records at Vercel per their domain instructions.
5. Migrate the DNS at GoDaddy to Vercel name servers, or keep GoDaddy and add the Vercel A and CNAME records, whichever you prefer.

## Notes on copy

The site copy intentionally avoids em-dashes and long hyphenations, using full stops, commas and colons for rhythm.
