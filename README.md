# PlayBlue — Cobalt Analytix deliverable site

Next.js (App Router) rebuild of the PlayBlue sector and client intelligence brief, split into
three pages:

- `/login` — password gate
- `/executive-summary` — the seven headline findings
- `/detailed-research` — the full brief (client resolution, market, value chain, competitive
  arena, trends, implications, proposal, roadmap, sources), with properly working, independent
  tab groups (rebuilt in React state — the original static-HTML prototype's tabs did not switch
  reliably)

`/` and any other route redirect to `/login` until authenticated, then to `/executive-summary`.

## Running locally

```bash
cp .env.local.example .env.local   # then edit the values
npm install
npm run dev
```

Open http://localhost:3000 — it redirects to `/login`. The default password (overridable, see
below) is `PlayBlue@2026`.

## How the password gate works

Enforcement is server-side, in `proxy.ts` (Next.js 16's replacement for `middleware.ts`):

- Every request is checked for a signed, httpOnly `playblue_session` cookie.
- Unauthenticated requests to any page except `/login` are redirected to `/login`.
- `/login` submits to a Server Action (`app/login/actions.ts`) that checks the password and, on
  success, sets an HMAC-signed cookie (`lib/auth.ts`) — no server-side session store needed.
- The "Log out" button in the top nav clears the cookie via a Server Action.

Set these in your deployment platform's environment variables (or `.env.local` for local dev):

| Variable | Purpose | Default if unset |
| --- | --- | --- |
| `PLAYBLUE_GATE_PASSWORD` | The gate password | `PlayBlue@2026` |
| `PLAYBLUE_SESSION_SECRET` | HMAC secret signing the session cookie | a dev-only fallback — **must** be set in production |

## Structure

- `app/globals.css` — the full design system (ported from the original static prototype:
  colors, type scale, accordions, chips, callouts, tables, etc.)
- `components/ui.tsx` — the shared presentational building blocks (Section, Accordion, Callout,
  Card, Chip, Bars, Table, Timeline, …)
- `components/Tabs.tsx` — the reusable, properly-isolated tab group (each `<Tabs>` instance owns
  its own state, so multiple tab groups on one page never interfere with each other)
- `components/FeedbackBoard.tsx` — the interactive "stated goals" feedback UI (mark
  relevant/low-priority, edit, comment, export as JSON)
- `components/detailed/Section0*.tsx` — one file per numbered section of the detailed research
  page

## Deploying

Any platform that runs a Next.js Node.js server works (Vercel, a Node host, Docker). Static
export is not supported because the password gate needs a real server (`proxy.ts` + Server
Actions + httpOnly cookies).
