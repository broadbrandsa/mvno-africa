# MVNO Nation Africa 2026

Invitation site for the Cape Town stop of the DSG MVNO Nation world
tour. Visitors land from a Mailchimp email, read the event hook +
agenda + 5 sample sessions, and submit an RSVP request to be invited.

> **Cape Town · 9–10 June 2026 · Invitation only**

## Quick start

```bash
pnpm install
cp .env.example .env.local        # then fill in Supabase values (optional in dev)
pnpm dev --port 3001              # http://localhost:3001 (3000 is the Miami site)
pnpm build                        # production build
pnpm lint                         # eslint
```

Without Supabase env vars, form submissions still validate and succeed
— rows are `console.log`'d on the server only. See
[`docs/DEPLOYMENT.md`](./docs/DEPLOYMENT.md) for the three Supabase
setup options (recommended: reuse the Miami project, add the
`event_invites` table next to `leads`).

## Stack

Identical to the Miami sibling site (`../mvno-nation-2026`).

- **Next.js 16** (App Router)
- **TypeScript 5**
- **Tailwind CSS v4** (CSS-first theme in `src/app/globals.css`)
- **lucide-react** icons
- **Supabase** (`event_invites` table — see migration)
- **pnpm**

## Project documentation

See [`/docs`](./docs):

- [`PROJECT_OVERVIEW.md`](./docs/PROJECT_OVERVIEW.md) — what this is and why
- [`ASSUMPTIONS.md`](./docs/ASSUMPTIONS.md) — content & confidentiality caveats
- [`SCOPE.md`](./docs/SCOPE.md) — pages, sections, milestones
- [`STRUCTURE.md`](./docs/STRUCTURE.md) — folder map and content rules
- [`TRACKING_PLAN.md`](./docs/TRACKING_PLAN.md) — analytics + form events
- [`DEPLOYMENT.md`](./docs/DEPLOYMENT.md) — Vercel setup & Supabase migration

## Editing event details

Event date, venue, and host info live in
[`src/content/deck.ts`](./src/content/deck.ts) under the `event`
constant. The 4-thread agenda lives in the same file under `event.agenda`,
or in `src/components/sections/agenda.tsx` for the icons + UI copy.

## Hero photo (placeholder)

The hero currently uses the Miami beach photo from the sibling project
as a placeholder. **Swap it before launch** — drop a Cape Town photo
at [`public/images/hero-bg.jpg`](./public/images/hero-bg.jpg) (Table
Mountain, V&A Waterfront, CTICC, etc. all work). The parallax + overlay
adapt automatically.

## Deployment

Push to `main`, the Vercel project auto-deploys. Framework preset:
**Next.js**. Root directory: project root. Build command: `pnpm build`.
See [`DEPLOYMENT.md`](./docs/DEPLOYMENT.md) for the full setup.

## Relationship to the Miami project

This project is a **fork** of `../mvno-nation-2026`, kept in a separate
folder + git repo + Vercel project so they ship independently:

- The Miami project is post-event (deck-download lead magnet)
- This project is pre-event (RSVP capture for Cape Town)
- They share the same design system, animation primitives, and 5 core
  deck nuggets — only the framing copy and the form purpose differ
- Both use Supabase, but each writes to its own table (`leads` vs
  `event_invites`) so analytics stay clean

When the Miami site picks up a polish/refactor that would benefit the
Africa site, cherry-pick by hand. There's no shared package — this is
a deliberate fork, not a monorepo.
