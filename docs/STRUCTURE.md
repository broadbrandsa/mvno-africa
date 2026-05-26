# Structure

## Folder map

```
mvno-nation-africa/
├── docs/                       # This folder. Project documentation.
├── public/
│   ├── images/                 # hero-bg.jpg + brand logos (red versions)
│   └── email/                  # White silhouette logos (for future email)
├── supabase/
│   ├── config.toml             # Supabase CLI / local-dev config
│   └── migrations/
│       └── 20260515000000_create_event_invites.sql
├── src/
│   ├── app/
│   │   ├── api/rsvp/route.ts   # POST handler — validates + writes to Supabase
│   │   ├── globals.css         # Tailwind v4 theme + utilities
│   │   ├── layout.tsx          # Root HTML, font, metadata
│   │   └── page.tsx            # Landing-page composition
│   ├── components/
│   │   ├── invite-cta.tsx      # Smart CTA (scroll-to-form vs "on the list" pill)
│   │   ├── parallax-background.tsx
│   │   ├── sections/           # One file per landing-page section
│   │   │   ├── site-header.tsx
│   │   │   ├── hero.tsx            # Pre-event invitation framing
│   │   │   ├── agenda.tsx          # NEW · 4 official agenda threads
│   │   │   ├── ltv-math.tsx        # Session 01 (was Nugget 01)
│   │   │   ├── failures.tsx        # Session 02
│   │   │   ├── winners.tsx         # Session 03
│   │   │   ├── pillars.tsx         # Session 04
│   │   │   ├── case-studies.tsx    # Session 05 (DStv + Boxer, both SA)
│   │   │   ├── rsvp-form.tsx       # NEW · replaces Miami's download-form
│   │   │   ├── cta.tsx             # Final CTA + world tour cards
│   │   │   ├── footer.tsx
│   │   │   └── section.tsx         # Shared section shell
│   │   ├── animated/           # Reveal, CountUp, CursorSpotlight, ReadingProgress
│   │   └── ui/                 # Small primitives (badge, button, card)
│   ├── content/
│   │   └── deck.ts             # All copy, stats, event constants
│   └── lib/
│       ├── invite-access.ts    # localStorage hook for RSVP status
│       ├── supabase.ts         # Server-only admin client (graceful fallback)
│       └── utils.ts            # cn() helper (clsx + tailwind-merge)
├── components.json             # shadcn config
├── .env.example                # Template for SUPABASE_* env vars
├── next.config.ts
├── postcss.config.mjs          # Tailwind v4 PostCSS plugin
├── tsconfig.json
└── package.json
```

## Section composition rules

- **One file per section** under `src/components/sections/`.
- **Section shell** — `Section` (in `section.tsx`) provides the eyebrow
  badge, headline, sub-copy and content container. New sections should
  use it for visual consistency.
- **Copy lives in components** for now. The `event` constant + the
  agenda topics are the only data-driven bits — the rest of the copy
  is inline in JSX (intentional: makes per-event customisation easy
  without a CMS).
- **Server components by default**. Only flip to `"use client"` when a
  section needs interactivity (`site-header` for scroll state,
  `rsvp-form` for form state + Supabase POST).

## Content management approach

- **Source of truth for event details**: the `event` constant in
  `src/content/deck.ts`. Change date, venue, host, agenda there and it
  propagates everywhere.
- **Source of truth for agenda topic UI**:
  `src/components/sections/agenda.tsx` (titles, body copy, icons, tone)
- **Source of truth for nuggets**: the 5 session components in
  `src/components/sections/` (ltv-math, failures, winners, pillars,
  case-studies). Their headings, descriptions and inline copy live
  per-file because each has distinct visual treatment.

## Relationship to the Miami project

This is a **fork** of `../mvno-nation-2026`. Files that differ:

- `src/content/deck.ts` — `event` constant, `worldTour` array
- `src/components/sections/hero.tsx` — new headline, new stats, new CTAs
- `src/components/sections/agenda.tsx` — **new file** (not in Miami)
- `src/components/sections/rsvp-form.tsx` — **renamed** from download-form, fields + logic differ
- `src/components/sections/cta.tsx` — "See you in Cape Town" framing
- `src/components/invite-cta.tsx` — **new file**, replaces `deck-cta.tsx`
- `src/lib/invite-access.ts` — **new file**, replaces `deck-access.ts`
- `src/app/api/rsvp/route.ts` — **renamed** from access/route, writes to event_invites
- `supabase/migrations/...event_invites.sql` — **new migration**

Files identical to Miami (or near-enough): all the animation primitives,
the design tokens in globals.css, the brand logos and parallax bg
component, the `Section` shell, and the 5 deck nuggets' visual layouts.
