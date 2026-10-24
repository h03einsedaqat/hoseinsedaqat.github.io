# Hosein Sedaqat — Conversational Developer Portfolio

An interactive, ChatGPT-inspired **Conversational Developer Portfolio & Resume Assistant** built for **Hosein Sedaqat** (`Full-Stack Developer | React, Next.js, Vue.js, TypeScript & Node.js`).

Instead of a static brochure, recruiters, hiring managers, and engineering leads can explore verified work experience, featured software architectures, technical skills, and direct contact links through a conversational interface—or browse structured resume views and export a clean A4 PDF.

---

## Key Capabilities

- **ChatGPT-Inspired Conversational UX** — Full-viewport responsive workspace featuring a collapsible sidebar (`268px` expanded / `60px` icon rail with tooltips, mobile drawer on small screens), conversation history search, single/all chat deletion with confirmation, auto-growing multiline composer (`Enter` to send, `Shift + Enter` for newline), and contextual follow-up prompts.
- **100% Verified Centralized Knowledge Base** — All profile facts, Paystar FinTech experience, project case studies (led by **Rahkar ERP**, **CargoCraft**, **NovaAdmin**, **Tishra Analyzer**, **Kalamesaz**, and **EchMail**), skills, education, and publications live in typed modules under `src/data/` with zero fabricated claims or arbitrary skill percentages.
- **Zero-Key Offline Resilience + Optional Server AI Route** — Works out-of-the-box using a deterministic local Resume Knowledge Base engine (`src/lib/chat-engine.ts`), while providing a server-only `/api/chat` route ready for an `OPENAI_API_KEY` without ever exposing secrets to the browser.
- **Dark & Light Design Token System** — Deep charcoal dark mode and crisp neutral light mode with system-preference detection and an inline head script that eliminates theme/direction flash on load.
- **Native Bilingual Support (English LTR & Persian RTL)** — Instant switching between English (`ltr`, Inter Variable) and Persian (`rtl`, bundled Vazirmatn font) with full layout mirroring and `localStorage` persistence.
- **Structured Resume Routes & Print-Ready A4 PDF** — Dedicated SEO-friendly pages (`/about`, `/experience`, `/projects`, `/projects/[slug]`, `/skills`, `/education`, `/contact`, `/resume`) plus one-click `Download Resume` (`window.print()` with `@media print` rules stripping all chat chrome).
- **Live GitHub Sync with Automatic Fallback** — Server route `/api/github` fetches non-fork public repositories from `github.com/hoseinsedaqat` and falls back seamlessly to a verified snapshot if offline or rate-limited.

---

## Tech Stack

- **Framework:** Next.js 15 (App Router) + React 19
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS + CSS Custom Property Design Tokens
- **Typography:** Self-hosted `@fontsource-variable/inter` & `@fontsource/vazirmatn`
- **Icons:** Lucide React + custom geometric `HS` monogram SVG
- **Persistence:** Browser `localStorage` (`src/lib/storage.ts`)
- **Testing:** Vitest + React Testing Library + JSDOM

---

## Project Structure

```text
src/
├── app/                    # Next.js App Router pages, metadata, sitemap, OG image & API routes
│   ├── api/chat/           # Optional server-side LLM route grounded in verified resume data
│   ├── api/github/         # Server-side GitHub public repo fetcher with fallback
│   ├── about/              # Profile & engineering principles
│   ├── experience/         # Career timeline & Problem → Action → Result outcomes
│   ├── projects/           # Searchable/filterable project directory & [slug] case studies
│   ├── skills/             # Evidence-linked technical skills matrix
│   ├── education/          # University degree, technical articles & LinkedIn credentials
│   ├── contact/            # Direct email copy, mailto & verified social profiles
│   └── resume/             # Interactive & print-optimized A4 PDF resume
├── components/
│   ├── brand/              # Custom HSLogo monogram
│   ├── chat/               # ChatWorkspace, WelcomeScreen, RecommendationCards, MessageList, Composer
│   ├── layout/             # AppLayout, Sidebar, ConversationHistory, ChatHeader, LanguageSwitcher
│   └── resume/             # ProjectCard, ProjectDetailView, ExperienceTimeline, SkillsSection, ResumeView
├── context/                # ThemeContext, LanguageContext, ChatContext
├── data/                   # Central source of truth: resume.ts, projects.ts, recommendations.ts, translations.ts
├── lib/                    # chat-engine.ts, storage.ts, utils.ts
├── test/                   # Automated unit, component & conversational flow tests
└── types/                  # TypeScript interfaces
```

---

## Getting Started

### Prerequisites

- **Node.js** `>= 20.x` (tested on Node 22)
- **npm** `>= 10.x`

### Installation & Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

### Environment Variables (Optional)

Copy `.env.example` to `.env.local` if you want to enable optional server-side LLM responses or increase GitHub API rate limits:

```bash
cp .env.example .env.local
```

| Variable | Required | Description |
| --- | --- | --- |
| `OPENAI_API_KEY` | No | Server-only API key for optional LLM prose generation grounded in the knowledge base. Leaves local engine active when empty. |
| `OPENAI_BASE_URL` | No | OpenAI-compatible base URL (defaults to `https://api.openai.com/v1`). |
| `OPENAI_MODEL` | No | Model identifier (defaults to `gpt-4o-mini`). |
| `GITHUB_TOKEN` | No | Optional GitHub token for higher server-side rate limits on `/api/github`. |
| `NEXT_PUBLIC_SITE_URL` | No | Canonical URL for OpenGraph & `sitemap.xml` (defaults to `https://hoseinsedaqat.github.io`). |

---

## Quality Checks & Testing

```bash
# TypeScript strict validation
npm run typecheck

# Run automated unit, component & chat-flow tests (Vitest)
npm test

# Build optimized production bundle
npm run build

# Start production server
npm start
```

---

## Customizing Resume Content

All personal data is managed centrally without editing UI components:

- **Profile, Experience, Skills, Education & Links:** `src/data/resume.ts`
- **Featured Project Order & Case Studies:** `src/data/projects.ts` (`featuredProjectSlugs` array)
- **Starter Prompts:** `src/data/recommendations.ts`
- **Bilingual UI Strings (`EN` / `FA`):** `src/data/translations.ts`

---

## Deployment

### GitHub Pages (Configured Automatically via GitHub Actions)

This repository is configured with Next.js static export (`output: 'export'`, `trailingSlash: true`, `public/.nojekyll`) and includes `.github/workflows/deploy.yml`:

1. In your GitHub repository, open **Settings → Pages → Build and deployment**.
2. Set **Source** to **GitHub Actions** (instead of *Deploy from a branch*, which otherwise renders `README.md`).
3. Every push or merged pull request to `master` automatically runs `npm ci && npm run build` and deploys `./out` to `https://hoseinsedaqat.github.io/`.

### Vercel / Netlify

1. Import `hoseinsedaqat/hoseinsedaqat.github.io`.
2. Build Command: `npm run build` · Output Directory: `out`.

---

## Links

- **GitHub:** [github.com/hoseinsedaqat](https://github.com/hoseinsedaqat)
- **LinkedIn:** [linkedin.com/in/hoseinsedaqat](https://www.linkedin.com/in/hoseinsedaqat/)
- **Email:** [hsedaqat1378@gmail.com](mailto:hsedaqat1378@gmail.com)
