# AI Interview Question Generator

An AI-powered web application that generates 3 thoughtful, role-specific interview questions for any job title.

Built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Google Gemini 2.5 Flash** for an HRTech founding engineer technical screen.

---

# Live Demo

Deployed on:

:contentReference[oaicite:0]{index=0}

---

# Stack

| Layer       | Choice                  | Why                                                              |
| ----------- | ----------------------- | ---------------------------------------------------------------- |
| Framework   | Next.js 15 (App Router) | Fullstack React framework with API routes and simple deployment  |
| Language    | TypeScript              | Type safety, maintainability, and better developer experience    |
| AI Provider | Gemini 2.5 Flash        | Fast responses, strong instruction following, generous free tier |
| Styling     | Tailwind CSS            | Fast UI development with clean utility-first styling             |
| Hosting     | Vercel                  | Zero-config deployment optimized for Next.js                     |

---

# Features

- Generate AI-powered interview questions for any role
- Clean and responsive UI
- Loading states during AI generation
- Structured AI responses using JSON parsing
- Centralized backend error handling
- Rate limit and provider error handling
- Secure server-side API integration
- TypeScript throughout the application

---

# Getting Started

## 1. Clone the Repository

```bash
git clone https://github.com/james-eo/ai-interview-generator.git
cd ai-interview-generator
```

---

## 2. Install Dependencies

Using pnpm:

```bash
pnpm install
```

Or npm:

```bash
npm install
```

---

## 3. Configure Environment Variables

Create:

```bash
.env.local
```

Add your Gemini API key:

```env
GEMINI_API_KEY=your_api_key_here
```

Get a free API key from:

:contentReference[oaicite:1]{index=1}

---

## 4. Run Locally

```bash
pnpm dev
```

Or:

```bash
npm run dev
```

Visit:

```text
http://localhost:3000
```

---

# Project Structure

```text
app/
  api/
    questions/
      route.ts
  globals.css
  layout.tsx
  page.tsx

components/
  InputForm.tsx
  LoadingState.tsx
  QuestionCard.tsx

lib/
  ai.ts
  prompts.ts
  errors.ts

types/
  index.ts
```

---

# Key Design Decisions

## Fullstack Next.js Architecture

The application uses Next.js App Router with API routes to keep both frontend and backend logic in a single project.

Benefits:

- Faster iteration speed
- Simplified deployment
- Reduced operational complexity
- Server-side API security

---

## Secure API Isolation

Gemini API calls are isolated inside server-side API routes.

The API key:

- never reaches the browser
- remains server-side only
- is stored securely in environment variables

---

## Structured Prompt Engineering

The prompt instructs Gemini to return a raw JSON array rather than markdown or formatted text.

Benefits:

- more reliable parsing
- predictable responses
- cleaner frontend rendering
- production-oriented AI integration

Example response:

```json
["Question 1", "Question 2", "Question 3"]
```

---

## Defensive AI Response Parsing

The application:

- strips markdown code fences
- validates JSON structure
- verifies array responses before rendering

This prevents malformed AI responses from breaking the UI.

---

## Centralized Error Handling

AI and API errors are handled through a dedicated error utility layer.

Examples handled:

- rate limiting (429)
- quota exhaustion
- invalid API keys
- network failures
- malformed AI responses

This provides:

- cleaner route handlers
- maintainable error logic
- user-friendly frontend messages

Example frontend message:

```text
AI service is currently busy. Please try again in a few moments.
```

---

## Loading State UX

The UI includes:

- disabled submit state
- loading indicator during AI generation

This communicates async activity clearly without blocking the interface.

---

## Minimal MVP Philosophy

The architecture intentionally avoids unnecessary complexity such as:

- databases
- authentication
- Redux/global state management
- microservices
- vector databases
- LangChain

The goal was to optimize for:

- speed
- simplicity
- maintainability
- rapid product iteration

---

# API Endpoint

## POST `/api/questions`

Request:

```json
{
  "jobTitle": "Customer Success Manager"
}
```

Response:

```json
{
  "questions": ["Question 1", "Question 2", "Question 3"]
}
```

---

# Example Prompt

```text
You are an experienced hiring manager.

Generate 3 thoughtful and role-specific interview questions
for the following position:

Role: Customer Success Manager

Requirements:
- Questions should assess real-world capability
- Avoid generic questions
- Make questions concise but insightful
- Return ONLY a valid JSON array of strings
```

---

# Future Improvements

If more time were available, potential improvements include:

- streaming AI responses
- response caching
- analytics and observability
- rate limiting middleware
- retry/backoff handling
- multi-model fallback support
- authentication and saved sessions
- AI evaluation/scoring layer
- interview simulation workflows

---

# Deployment

The application is deployed using:

:contentReference[oaicite:2]{index=2}

Deployment flow:

1. Push repository to GitHub
2. Import into Vercel
3. Add environment variables
4. Deploy

---

# Philosophy

This project was intentionally built with a founder-stage mindset:

- optimize for iteration speed
- avoid premature complexity
- build maintainable systems
- communicate tradeoffs clearly
- keep architecture simple and scalable

The focus was not just shipping code, but demonstrating pragmatic product engineering decisions.
