# Easyio Technologies Website - Setup Guide

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Setup
Copy `.env.example` to `.env.local` and fill in:
```bash
cp .env.example .env.local
```

**Required:**
- `RESEND_API_KEY` — Get from [Resend.com](https://resend.com)
- `NEXT_PUBLIC_SITE_URL` — Your domain (default: https://easyiotech.com)

**Optional:**
- `UPSTASH_REDIS_REST_URL` — For rate limiting (uses in-memory fallback)
- `UPSTASH_REDIS_REST_TOKEN` — For rate limiting

### 3. Run Locally
```bash
npm run dev
# http://localhost:3000
```

### 4. Build & Deploy
```bash
npm run build
npm start
```

## File Structure

```
app/                    # Next.js App Router
├── (marketing)/        # Public pages (nav + footer)
├── api/               # API routes (contact, waitlist)
├── sitemap.ts         # SEO sitemap
└── robots.ts          # SEO robots.txt

components/
├── layout/            # Navigation, Footer, SectionWrapper
├── sections/          # Page sections (Hero, BentoFeatures, Stats, FAQ, Testimonials, etc)
├── ui/                # Reusable UI primitives
└── shared/            # Shared utilities

lib/
├── utils.ts           # Helper functions
├── validations.ts     # Zod schemas
├── seo.ts            # SEO metadata factory
├── email.ts          # Email templates (Resend)
├── rate-limit.ts     # Rate limiting (Upstash + fallback)
└── blog.ts           # Blog post utilities

config/
├── site.ts           # Site-wide config
├── team.ts           # Team members
└── jobs.ts           # Job postings

content/blog/         # MDX blog posts
```

## Customization

### Site Config
Edit `config/site.ts`:
```typescript
export const siteConfig = {
  name: 'Your Company',
  email: { contact: 'hello@domain.com' },
  links: { twitter: 'https://twitter.com/...' },
  // ...
};
```

### Team Members
Edit `config/team.ts` with real team data.

### Job Postings
Edit `config/jobs.ts` to manage open positions.

### Blog Posts
Add `.mdx` files to `content/blog/` with frontmatter:
```yaml
---
title: My Article
description: Short summary
date: 2024-04-14
author: Your Name
---
```

### Pages
- Homepage: `app/(marketing)/page.tsx`
- About: `app/(marketing)/about/page.tsx`
- Contact: `app/(marketing)/contact/page.tsx`
- Careers: `app/(marketing)/careers/page.tsx`
- Blog: `app/(marketing)/blog/page.tsx`

## API Routes

### Contact Form
**POST** `/api/contact`
```json
{
  "name": "John",
  "email": "john@example.com",
  "company": "Company",
  "message": "Message text"
}
```

### Waitlist
**POST** `/api/waitlist`
```json
{
  "email": "john@example.com",
  "firstName": "John",
  "company": "Company"
}
```

Both use Resend for emails (or fallback to logs if API key missing).

## Styling

### Design System
- **Color Palette**: Zinc grayscale (light + dark mode)
- **Cards**: `rounded-[2.5rem]`, backdrop-blur, hover border transitions
- **Typography**: font-black, uppercase, italic accents
- **Animations**: Framer Motion (fade-in, slide-from-bottom)

### CSS Classes
```css
.heading-1   /* Large titles */
.heading-2   /* Section titles */
.heading-3   /* Card titles */
.card-base   /* Base card styling */
.btn-primary /* Primary button */
.icon-md     /* Icon sizing */
```

## SEO

- Per-page metadata via `generateMetadata()`
- Auto sitemap: `app/sitemap.ts`
- Auto robots.txt: `app/robots.ts`
- JSON-LD schemas: Organization, WebSite, BlogPosting
- Dynamic OG images: `app/opengraph-image.tsx`

## Security

- Zod validation on all forms
- Rate limiting (5 req/min per IP)
- Security headers (CSP, HSTS, X-Frame-Options)
- No secrets in client bundle

## Performance

- Server Components by default (RSC)
- Static pre-rendering (SSG)
- Image optimization (`next/image`)
- Font optimization (`next/font`)
- Lazy loading sections

## Deployment

### Vercel (Recommended)
```bash
vercel deploy
```

Security headers auto-enabled via `next.config.ts`.

### Other Platforms
```bash
npm run build
npm start
# or: node .next/standalone/server.js
```

## Monitoring

- **Core Web Vitals**: Vercel Analytics (auto-enabled)
- **Errors**: Check logs in deployment dashboard
- **Email**: Verify in Resend dashboard

## Troubleshooting

**Email not sending?**
- Check `RESEND_API_KEY` is set
- Check spam folder
- Logs show "Resend not configured" if key missing

**Rate limiting not working?**
- Falls back to in-memory (dev only)
- Set `UPSTASH_REDIS_REST_URL` for production

**Build fails?**
- Clear `.next/` and rebuild
- Check Node version ≥ 18
- Verify TypeScript: `npx tsc --noEmit`

## Next Steps

1. Replace placeholder images in `public/images/`
2. Update team photos: `public/images/team/`
3. Write first blog post in `content/blog/`
4. Set up Resend account and add API key
5. Configure Upstash Redis for production rate limiting
6. Deploy to Vercel
