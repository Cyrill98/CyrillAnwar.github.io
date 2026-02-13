# Copilot Instructions — Developer Portfolio

## Project Overview
This is a personal developer portfolio website for **Cyrill Anwar**, a Software Engineer based in Kuala Lumpur, Malaysia. Built with **Next.js 14+ (App Router)** and deployed at `cyrill98.github.io`.

- **Repository:** `Cyrill98/CyrillAnwar.github.io`
- **Branch:** `main`
- **Live URL:** https://cyrill98.github.io
- **Base URL (for SEO/meta):** https://cyrill98.github.io

---

## Tech Stack
- **Framework:** Next.js 14+ (App Router, `app/` directory)
- **Language:** JavaScript (JSX) — **no TypeScript**
- **Styling:** Tailwind CSS + SCSS (for card animations)
- **Animations:** Lottie (`lottie-react`), Framer Motion (`framer-motion`), CSS transitions
- **Icons:** `react-icons`
- **Images:** `next/image` (local) + Cloudinary via `next-cloudinary` (remote)
- **Forms:** EmailJS (`@emailjs/browser`), Google reCAPTCHA (`react-google-recaptcha`)
- **Notifications:** `react-toastify`
- **HTTP Client:** `axios`
- **Music:** Custom music player with HTML5 Audio API
- **Interactive UI:** `@react-spring/web`, `@use-gesture/react` (card deck), `react-fast-marquee` (skills), `react-responsive-carousel`
- **Analytics:** Google Tag Manager (`@next/third-parties/google`)
- **Dev Tools:** `sass`, `eslint`, `autoprefixer`, `postcss`
- **Path Aliases:** `@/*` maps to project root (configured in `jsconfig.json`)

---

## Project Structure
```
developer-portfolio/
├── app/
│   ├── layout.js               # Root layout (Inter font, Navbar, Footer, ToastContainer, GTM, CopyProtection, ScrollToTop)
│   ├── page.js                 # Homepage — async SSR (fetches blog from dev.to, renders all sections with ScrollReveal)
│   ├── robots.js               # SEO robots.txt config
│   ├── sitemap.js              # Dynamic sitemap (static routes + dev.to blog slugs)
│   ├── api/
│   │   ├── contact/route.js    # POST — sends contact form to Telegram Bot API
│   │   ├── google/route.js     # POST — Google reCAPTCHA verification
│   │   └── spotify/
│   │       ├── callback/route.js   # GET — Spotify OAuth callback (get refresh token)
│   │       └── top-tracks/route.js # GET — Fetch user's top Spotify tracks
│   ├── blog/
│   │   ├── page.js             # Blog listing — fetches all articles from dev.to
│   │   └── [slug]/page.js      # Blog detail — fetches single article by slug from dev.to
│   ├── components/
│   │   ├── navbar.jsx          # Top navigation (links: About, Experience, Skills, Education, Blogs, Projects)
│   │   ├── footer.jsx          # Footer with GitHub star/fork links
│   │   ├── helper/
│   │   │   ├── animation-lottie.jsx  # Lottie animation wrapper (always dynamically imported with ssr: false)
│   │   │   ├── code-typewriter.jsx   # Line-by-line code reveal animation
│   │   │   ├── copy-protection.jsx   # Prevents copy/cut/right-click on content
│   │   │   ├── glow-card.jsx         # Mouse-tracking glow border card (used in Experience, Education)
│   │   │   ├── scroll-reveal.jsx     # Framer Motion scroll-triggered animation wrapper (fadeUp, fadeLeft, fadeRight, scaleUp)
│   │   │   ├── scroll-to-top.jsx     # Scroll-to-top button
│   │   │   └── typewriter.jsx        # Character-by-character text reveal animation
│   │   └── homepage/
│   │       ├── about/
│   │       │   ├── index.jsx         # About section (description typewriter + card deck + music player)
│   │       │   ├── card-deck.jsx     # Spring-animated image card stack (profile photos)
│   │       │   ├── card-deck.scss    # Card deck styles
│   │       │   └── music-player.jsx  # Custom audio player (play/pause, seek, volume, track switching)
│   │       ├── blog/
│   │       │   ├── index.jsx         # Blog preview section (homepage)
│   │       │   └── blog-card.jsx     # Individual blog card (links to dev.to)
│   │       ├── contact/
│   │       │   ├── index.jsx         # Contact section (conditionally renders captcha/non-captcha form)
│   │       │   ├── contact-with-captcha.jsx     # Form with reCAPTCHA
│   │       │   └── contact-without-captcha.jsx  # Form without reCAPTCHA
│   │       ├── education/
│   │       │   └── index.jsx         # Education timeline with GlowCards + Lottie animation
│   │       ├── experience/
│   │       │   └── index.jsx         # Experience timeline with GlowCards + Lottie animation
│   │       ├── hero-section/
│   │       │   ├── index.jsx         # Hero section (name, social links, code typewriter, contact/resume buttons)
│   │       │   └── resume-button.jsx # Animated resume download button
│   │       ├── projects/
│   │       │   ├── index.jsx         # Projects section with marquee
│   │       │   ├── project-card.jsx  # Project card component
│   │       │   └── single-project.jsx # Single project detail view
│   │       └── skills/
│   │           └── index.jsx         # Skills marquee with skill icons
│   └── css/
│       ├── globals.scss              # Global styles
│       └── card.scss                 # Glow card CSS animations
├── lib/
│   └── cloudinary.js                 # Cloudinary SDK server-side configuration
├── public/
│   ├── lottie/                       # Lottie JSON animation files
│   ├── image/                        # Project images
│   ├── png/                          # PNG assets
│   ├── svg/                          # SVG icons for education, experience, projects, skills
│   └── *.jpeg, *.mp3                 # Profile images, music files
├── utils/
│   ├── check-email.js                # Email validation utility
│   ├── skill-image.js                # Maps skill names → SVG icon paths
│   ├── time-converter.js             # Time formatting utility
│   └── data/
│       ├── personal-data.js          # personalData: name, email, phone, social URLs, devUsername, resume link
│       ├── projects-data.js          # projectsData[]: id, name, description, tools, role, image
│       ├── skills.js                 # skillsData[]: flat array of skill name strings
│       ├── educations.js             # educations[]: id, title, duration, logo, institution
│       ├── experience.js             # experiences[]: id, title, company, logo, url, location, duration
│       ├── contactsData.js           # contactsData: email, phone, address, social links (LEGACY — prefer personal-data.js)
│       ├── music.js                  # Music player config (LEGACY — tracks now inline in About component)
│       └── profileImg.js             # profileImg[]: id, img path for card deck
├── .env.local                        # Environment variables (never commit)
├── jsconfig.json                     # Path alias: @/* → ./*
├── next.config.js                    # SASS options, Cloudinary + dev.to image domains
├── tailwind.config.js                # Tailwind config with custom container padding, 4k breakpoint
├── postcss.config.js                 # PostCSS (Tailwind + Autoprefixer)
└── package.json
```

---

## Homepage Section Order
The homepage (`app/page.js`) renders sections in this order, each wrapped in `<ScrollReveal>`:
1. **HeroSection** — fadeUp
2. **AboutSection** — fadeUp
3. **Experience** — fadeLeft
4. **Skills** — scaleUp
5. **Projects** — fadeUp
6. **Education** — fadeRight
7. **Blog** — fadeUp (receives `blogs` prop from dev.to fetch)
8. **ContactSection** — fadeUp

---

## Data Flow & External APIs

### Blog (dev.to)
- Blog posts are **fetched from dev.to API** at build/request time, not stored locally.
- Listing: `GET https://dev.to/api/articles?username=${personalData.devUsername}`
- Detail: `GET https://dev.to/api/articles/${devUsername}/${slug}`
- The `blog/[slug]/page.js` detail page currently returns an empty `<div>` (not yet implemented).
- Blog cards link externally to dev.to articles.
- **Future plan:** Implement own blog posts using MDX files in `content/blogs/` directory.

### Contact Form (Telegram Bot)
- Contact form sends a `POST` to `/api/contact` which forwards the message via **Telegram Bot API**.
- Requires: `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID` env vars.
- Optional reCAPTCHA: if `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` + `NEXT_PUBLIC_RECAPTCHA_SECRET_KEY` are set, uses `ContactWithCaptcha`; otherwise uses `ContactWithoutCaptcha`.

### Spotify Integration
- `/api/spotify/callback` — OAuth flow to obtain refresh token.
- `/api/spotify/top-tracks` — Fetches user's top tracks using refresh token.
- Requires: `SPOTIFY_CLIENT_ID`, `SPOTIFY_CLIENT_SECRET`, `SPOTIFY_REFRESH_TOKEN`.

### Cloudinary (Image Hosting)
- Server-side config in `lib/cloudinary.js` using `cloudinary` v2 SDK.
- Client-side images via `next-cloudinary` (`<CldImage />`).
- Remote image domains allowed: `res.cloudinary.com`, `media.dev.to` (in `next.config.js`).
- **Future plan:** Upload API route at `app/api/upload/route.js` for uploading images from mobile apps.

### Google reCAPTCHA
- Verified server-side at `/api/google` using `NEXT_PUBLIC_RECAPTCHA_SECRET_KEY`.

---

## Environment Variables

### Required
| Variable | Scope | Purpose |
|----------|-------|---------|
| `TELEGRAM_BOT_TOKEN` | Server | Telegram Bot API token for contact form |
| `TELEGRAM_CHAT_ID` | Server | Telegram chat ID to receive messages |

### Optional
| Variable | Scope | Purpose |
|----------|-------|---------|
| `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` | Client | Google reCAPTCHA site key |
| `NEXT_PUBLIC_RECAPTCHA_SECRET_KEY` | Client/Server | Google reCAPTCHA secret key |
| `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` | Client | Cloudinary cloud name |
| `CLOUDINARY_API_KEY` | Server | Cloudinary API key |
| `CLOUDINARY_API_SECRET` | Server | Cloudinary API secret |
| `SPOTIFY_CLIENT_ID` | Server | Spotify OAuth client ID |
| `SPOTIFY_CLIENT_SECRET` | Server | Spotify OAuth client secret |
| `SPOTIFY_REFRESH_TOKEN` | Server | Spotify refresh token |
| `NEXT_PUBLIC_GTM` | Client | Google Tag Manager container ID |

- Never commit `.env.local` — it is in `.gitignore`.
- **Public (client-safe):** Prefix with `NEXT_PUBLIC_`.
- **Secret (server-only):** No prefix.

---

## Coding Conventions

### General
- Use **functional components** only — no class components.
- Use `"use client"` directive only when the component needs client-side interactivity (event handlers, hooks, animations).
- Many files include `// @flow strict` at the top — maintain this comment when editing existing files.
- Prefer **named exports** for utility functions and data; use **default exports** for page/component files.
- Keep components small and focused; extract reusable logic into `app/components/helper/`.
- Use `dynamic()` from `next/dynamic` with `{ ssr: false }` for client-only components (Lottie, CardDeck, MusicPlayer).

### Naming
- **Files/folders:** `kebab-case` (e.g., `hero-section/`, `glow-card.jsx`)
- **Components:** `PascalCase` (e.g., `HeroSection`, `GlowCard`)
- **Variables/functions:** `camelCase`
- **Constants/data arrays:** `camelCase` (e.g., `educations`, `personalData`)
- **CSS classes:** Tailwind utility classes inline; SCSS files only for complex animations (cards, glow effects).

### Styling
- Use **Tailwind CSS** utility classes as the primary styling approach.
- SCSS is used alongside Tailwind for complex animations (`card.scss`, `card-deck.scss`, `globals.scss`).
- Follow the existing color palette:
  - Background: dark theme (`#0d1224`, `#0a0d37`, `#1a1443`)
  - Accent green: `#16f2b3`
  - Accent pink: `pink-500`, `pink-600`
  - Accent violet: `violet-500`, `violet-600`, `#1a1443`
  - Border: `#25213b`, `#353951`, `#1b2c68a0`
  - Text: `white`, `text-gray-200`, `text-gray-300`
  - Contact icons: `#8b98a5` background, `#16f2b3` on hover
- Use responsive prefixes: `sm:`, `md:`, `lg:`, `xl:`, `2xl:` following mobile-first approach.
- Main content container: `mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem]`.

### Images
- Use `next/image` (`<Image />`) for local static images in `/public`.
- Use `next-cloudinary` (`<CldImage />`) for remotely hosted/uploaded images.
- Always provide `alt`, `width`, and `height` props.
- Remote image domains are configured in `next.config.js` under `images.remotePatterns`.

### Data Management
- Static portfolio data is stored in `utils/data/` as plain JS arrays/objects.
- Blog posts are fetched from **dev.to API** (not local files currently).
- Profile images are stored locally in `/public/` and referenced via `utils/data/profileImg.js`.
- Skill name → icon mapping is in `utils/skill-image.js`.
- `contactsData.js` is a legacy file — `personal-data.js` is the primary source for personal info.

### Animations
- **Lottie:** Use `lottie-react`; load JSON from `/public/lottie/`. Always dynamically import `AnimationLottie` with `{ ssr: false }`.
- **Framer Motion:** `ScrollReveal` component wraps sections with viewport-triggered animations. Variants: `fadeUp`, `fadeDown`, `fadeLeft`, `fadeRight`, `scaleUp`.
- **React Spring + Use Gesture:** Used for the card deck drag/flip interaction in About section.
- **CSS transitions:** Hover effects use Tailwind classes like `hover:scale-125`, `hover:scale-110`, `transition-all duration-300`.
- **Custom typewriters:** `Typewriter` (character-by-character) and `CodeTypewriter` (line-by-line) for text reveal effects.

### API Routes
- Place API routes in `app/api/` using Next.js Route Handlers (`route.js`).
- Use `NextResponse` for responses.
- Use `axios` for outbound HTTP calls (Telegram, reCAPTCHA).
- Handle errors gracefully and return appropriate status codes.

---

## Section Header Pattern
Most homepage sections use this header pattern:
```jsx
<div className="flex justify-center my-5 lg:py-8">
  <div className="flex items-center">
    <span className="w-24 h-[2px] bg-[#1a1443]"></span>
    <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
      SECTION TITLE
    </span>
    <span className="w-24 h-[2px] bg-[#1a1443]"></span>
  </div>
</div>
```

Some sections (About, Contact) use a rotated side label instead:
```jsx
<div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
  <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
    SECTION TITLE
  </span>
  <span className="h-36 w-[2px] bg-[#1a1443]"></span>
</div>
```

---

## Component Pattern Example
```jsx
"use client";
import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import dynamic from "next/dynamic";

const AnimationLottie = dynamic(() => import("../../helper/animation-lottie"), { ssr: false });

function MySection() {
  return (
    <div id="section-id" className="my-12 lg:my-16 relative">
      {/* Section header */}
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            MY SECTION
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      {/* Section content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Content here */}
      </div>
    </div>
  );
}

export default MySection;
```

---

## SEO & Metadata
- Root metadata is defined in `app/layout.js` with OpenGraph, Twitter Card, and robots config.
- Blog pages generate dynamic metadata via `generateMetadata()` using fetched article data.
- JSON-LD structured data (`Person` schema) is rendered in `app/page.js`.
- `robots.js` allows all crawlers.
- `sitemap.js` dynamically generates entries from static routes + dev.to article slugs.

---

## Key Dependencies
| Package | Purpose |
|---------|---------|
| `next` (14+) | React framework (App Router) |
| `react`, `react-dom` | UI library |
| `tailwindcss`, `autoprefixer`, `postcss` | Styling |
| `sass` | SCSS compilation |
| `lottie-react` | Lottie animations |
| `framer-motion` | Scroll reveal animations |
| `@react-spring/web` | Spring physics animations (card deck) |
| `@use-gesture/react` | Gesture handling (card deck drag) |
| `react-icons` | Icon library (Bs, Fa, Fa6, Io, Io5, Ri, Md, Cg, Ci, Hi, Si, etc.) |
| `react-toastify` | Toast notifications |
| `react-fast-marquee` | Horizontal scrolling marquee (skills) |
| `react-responsive-carousel` | Carousel component |
| `react-google-recaptcha` | reCAPTCHA widget |
| `@emailjs/browser` | Email sending from client (available but Telegram Bot is primary) |
| `axios` | HTTP client |
| `@next/third-parties` | Google Tag Manager integration |

---

## Common Tasks

### Adding a new homepage section
1. Create folder in `app/components/homepage/new-section/`
2. Create `index.jsx` with section content
3. Import and add to `app/page.js` wrapped in `<ScrollReveal>`
4. Add navigation link in `app/components/navbar.jsx`

### Adding a new skill
1. Add skill name string to `utils/data/skills.js` → `skillsData` array
2. Add corresponding SVG icon to `/public/svg/skills/`
3. Add name→path mapping in `utils/skill-image.js`

### Adding a new project
1. Add project object to `utils/data/projects-data.js` → `projectsData` array
2. Include: `id`, `name`, `description`, `tools[]`, `role`, `logo`, `code`, `demo`, `image`

### Adding a new experience
1. Add experience object to `utils/data/experience.js` → `experiences` array
2. Include: `id`, `title`, `company`, `logo` (path in /public), `url`, `location`, `duration`
3. Add company logo to `/public/`

### Adding a new education
1. Add education object to `utils/data/educations.js` → `educations` array
2. Include: `id`, `title`, `duration`, `logo` (path in /public), `institution`

### Modifying personal info
- Edit `utils/data/personal-data.js` — this is the **single source of truth** for name, email, phone, social links, dev.to username, and resume URL.