# Muhammad Mustafa — Portfolio

A modern, fully-featured portfolio showcasing expertise in DevOps engineering, full stack web development, and mobile app development. Built with Next.js, Tailwind CSS, and Framer Motion for smooth, interactive experiences.

## Highlights

- Dark-first theme with optional light mode
- Glassmorphism, neon accents, and animated gradient borders
- Particle hero background, cursor glow, and scroll-triggered motion
- DevOps showcase with infrastructure diagrams, deployment pipelines, and terminal animations
- Fully responsive, SEO friendly, and accessibility aware
- Interactive sections for projects, skills, experience, and services
- Real-time GitHub stats integration
- Smooth scroll animations and micro-interactions

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000 to view your portfolio.

## Contact Form Email Setup

The contact form submits without refreshing the page and sends an email through your SMTP provider. Set these environment variables before running the app in production:

- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASS`
- `CONTACT_TO_EMAIL`
- `CONTACT_FROM_EMAIL` optional, defaults to `SMTP_USER`

If these values are missing, the form will show an error instead of silently dropping the submission.

Gmail (quick local setup)
1. Make sure your Google account has 2-Step Verification enabled.
2. Open https://myaccount.google.com/security and create an App Password (choose Mail or Other and name it "Portfolio contact").
3. Copy the generated 16-character password and create a file named `.env.local` at the project root with this content:

```env
SMTP_PASS=your_generated_app_password_here
```

4. Restart the dev server: `npm run dev`.

Notes
- For production, set the same `SMTP_PASS` and (optionally) `CONTACT_TO_EMAIL` and `CONTACT_FROM_EMAIL` in your hosting provider's environment settings.
- If you prefer not to use Gmail, set `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, and `SMTP_PASS` in `.env.local`.

## Customize Your Content

All portfolio content is centralized in `src/data/site.ts` for easy updates:

- **Hero section**: name, title, tagline, and CTAs
- **Projects**: featured work samples with tech stacks
- **Skills**: organized by category (DevOps, Web, Mobile)
- **Services**: list of offerings
- **Timeline**: experience and milestones
- **Testimonials**: client feedback
- **Social links**: GitHub, LinkedIn, email, WhatsApp, and more

Update the file and changes reflect immediately.

## Next Steps

1. Replace placeholder data in `src/data/site.ts` with your real info
2. Add your resume to `public/resume.pdf`
3. Upload project previews and replace placeholder images
4. Update social media links and contact details
5. Customize taglines and descriptions to match your voice

## Build & Deploy

```bash
npm run build
npm run start
```

Deploy to Vercel, Netlify, or your preferred hosting platform.
