# Interview Question Generator

An AI-powered web app that generates 3 thoughtful, role-specific interview questions for any job title.

Built with **Next.js 15** (App Router) + **Gemini 2.0 Flash** for the HRTech technical screen.

---

## Stack

| Layer     | Choice                  | Why                                                   |
| --------- | ----------------------- | ----------------------------------------------------- |
| Framework | Next.js 15 (App Router) | API routes + React in one project, easy Vercel deploy |
| AI        | Gemini 2.0 Flash        | Fast, capable, generous free tier                     |
| Styling   | Custom CSS              | Full control, no framework overhead                   |
| Hosting   | Vercel                  | Zero-config Next.js deploys                           |

---

## Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/james-eo/ai-interview-generator.git
cd ai-interview-generator
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Set up your API key

```bash
cp .env.local.example .env.local
```

Then edit `.env.local` and add your Gemini API key.
Get a free key at [ai.google.dev](https://ai.google.dev) — no credit card required.

### 4. Run locally

```bash
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000)

---

## Key Design Decisions

- **API route isolation** — the Gemini call lives in `app/api/generate-questions/route.ts`, keeping the API key server-side only. It never touches the browser.
- **Structured prompt** — the prompt instructs Gemini to return a raw JSON array, which is then parsed and validated before returning to the client. Markdown fences are stripped defensively.
- **Loading state** — a shimmer progress bar + spinner communicates async work without blocking the UI.
- **Error handling** — both network failures and malformed AI responses surface a user-friendly message with a retry option.
- **TypeScript throughout** — explicit types for state and API responses catch bugs at compile time.
