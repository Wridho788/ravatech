# Ravatech website

The public site for Ravatech, built with Next.js, React, TypeScript, and Tailwind CSS.

## Run locally

```bash
pnpm install
pnpm dev
```

Open the local URL shown by Next.js. To verify a change, run `pnpm lint`, `pnpm exec tsc --noEmit`, and `pnpm build`.

## Content

- Case study content is in `src/data/caseStudies.ts`. Each entry is available at `/work/[slug]`.
- Service content is in `src/data/services.ts`.
- Project visuals are either explicitly labeled concept illustrations or captures from the live project sites. Assets in `public/projects/` came from the deployed Mercedes-Benz W202 Club Indonesia, Payung Negeri, Wawa Kopi, and LapakBenz Merchant sites.
- The contact form opens a draft in the visitor's email app. It does not send from the website. Replace the recipient address in `src/components/contact/ContactComposer.tsx`, `src/app/contact/page.tsx`, and `src/components/layout/Footer.tsx` if the business email changes.

The site does not include a contact backend or a WhatsApp number. Add those only after the real endpoint or number is confirmed.

Set `NEXT_PUBLIC_SITE_URL` to the public origin when deploying so social preview image URLs resolve to the correct domain.
