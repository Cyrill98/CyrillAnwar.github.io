# Plan

Future to-do items for the portfolio.

## Remotely hosted images via upload platform

Replace the locally bundled photos with images uploaded through a separate platform, fetched by this site through an API.

**Hosting options**
- Cloudinary (preferred): `res.cloudinary.com` is already allowed in `next.config.js`; free tier, upload widget/API, on-the-fly resizing and format conversion.
- Cloudflare R2 / AWS S3 / Supabase Storage: more control or cheaper, needs a CDN in front.
- Self-hosted server: avoid (resizing, caching and bandwidth are all manual).

**Site-side changes**
1. Upload platform stores each image and exposes `GET /api/photos` returning records like `{ id, url, order }`.
2. Replace the hard-coded list in `utils/data/profileImg.js` with a server-side fetch in `app/page.js` (same pattern as the dev.to blog fetch) and pass the URLs to `CardDeck`.
3. Add the image host to `images.remotePatterns` in `next.config.js` so `next/image` keeps optimizing them.
4. Cache the fetch with `revalidate` and keep the current local images as a fallback if the API is down.

**Open questions**
- The page is static, so new uploads appear only after the revalidate window or a rebuild. For instant updates, have the platform trigger a Netlify build hook or Next on-demand revalidation after each upload.
- Scope: profile photos only, or also project images and other photos?
- Does a backend for the upload platform exist yet, or does it need to be built?
