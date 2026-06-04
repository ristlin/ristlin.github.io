# yuselajiminmuhip.com

The repo behind [yuselajiminmuhip.com](https://yuselajiminmuhip.com), a single-page positioning site for Yuse Lajiminmuhip, B2B Marketing and Communications Executive.

Previously a hand-coded Bootstrap page with empty Projects and Skills sections. Rebuilt as a static Astro site over a single working session, paired with [Claude Code](https://www.anthropic.com/claude-code).

The site is deliberately small. It does not duplicate the CV. It says who I am, points at externally-verifiable work (publications, industry leadership, selected projects), and invites a conversation.

## How it got built

The earlier site sat untouched for years. The rebuild ran as a paired session with Claude Code, from clone to live deploy.

1. **Scaffold.** Cloned the existing `ristlin.github.io` repo, branched to `redesign`, scaffolded Astro 6 + Tailwind 4 in place. Kept the `CNAME` so the custom domain survived the cutover.
2. **Content from sources.** Web-searched for published bylines: confirmed two IAPD *Performance Plastics* articles, a *Geosynthetics Magazine* piece, a Medium essay, and a Georgetown-era *Cancer Research* paper.
3. **Voice match.** Studied one of my own articles, *[Embrace AI-powered Tools to Remain Relevant](https://medium.com/work-and-a-i/future-jobs-must-embrace-big-data-211d3ff06f62)*, and rewrote the site copy to match it: declarative present tense, concrete claims, no "I'm a..." identity statements, no em-dashes.
4. **Positioning pass.** Toned down a "full-stack builder" tagline that competed with the marketing-exec headline. Reordered sections so externally-verifiable credentials (Publications, Industry Leadership) lead, with capabilities and selected projects after.
5. **SEO with guardrails.** Optimized for name and role queries only. Intentionally kept employer-product keywords out of title, meta description, and structured data so the site does not compete with the employer in search results.
6. **Ship.** Merged `redesign` to `main`, flipped GitHub Pages source to "GitHub Actions," and shipped.
7. **Strip the CV duplicate.** Removed the Experience section, the accomplishment-heavy About paragraphs, and a few employer-role specifics that belong on a CV the recipient asks for, not on a public page indexed in perpetuity.

Final state: one custom domain, zero infrastructure cost, no CV duplication.

## Stack

- [Astro 6](https://astro.build) with [Tailwind 4](https://tailwindcss.com) and TypeScript (strict)
- Content in Markdown collections (`src/content/{education,projects,publications}`)
- Single config in `src/consts.ts` for site meta, socials, nav, skills, industry leadership
- Dark mode (no-flash, system preference plus a manual toggle)
- `Person` JSON-LD for Knowledge Graph attribution
- Deploy: GitHub Actions to GitHub Pages, custom domain via `public/CNAME`

## Key decisions

- **Invitation, not CV duplicate.** The CV lives in a Word doc and on LinkedIn. The site exists to position, point at proof points, and open a conversation. Role specifics deliberately do not live here.
- **Content in Markdown, not components.** Adding a publication, role, or project is a one-file change. A future PDF resume generator can read the same source. Removed content (Experience entries, the AGRU outreach project) is preserved on disk and hidden via `draft: true` or by simply not being rendered.
- **Voice match on copy.** Sentences run short, lead with verifiable claims, and avoid identity statements. Matches the author's published writing.
- **SEO without employer overlap.** Title, meta description, and `Person` JSON-LD target the personal name, role, and location. The schema deliberately omits `worksFor` so it does not bind the page to the employer brand. The employer name appears once in body content, for credibility.

## Running locally

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # production build into dist/
```

Astro requires Node 22.12 or newer.

The Vite cache is redirected outside the project tree on Windows. The repo lives inside Dropbox, which locks Vite's rapidly-renamed dependency cache files and breaks builds with `EBUSY`. See `astro.config.mjs` for the override; CI on Linux is unaffected.

## Project layout

```
src/
  content.config.ts          # Zod schemas for the content collections
  consts.ts                  # SITE, SOCIALS, NAV, SKILLS, LEADERSHIP
  layouts/Layout.astro       # <head>, nav, footer, theme init
  components/Section.astro   # Section wrapper
  pages/index.astro          # The whole page
  content/
    education/               # Credentials
    projects/                # Highlights, set draft:true to hide
    publications/            # Bylines and selected writing
  styles/global.css          # Tailwind v4 theme tokens
public/
  CNAME                      # yuselajiminmuhip.com
  robots.txt                 # Allow + sitemap reference
.github/workflows/deploy.yml # withastro/action -> GitHub Pages
```

## License

Code is MIT. Content (writing, projects, bylines) is © Yuse Lajiminmuhip; please don't redistribute.
