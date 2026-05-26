# Deployment

This is a **separate Vercel project** from the Miami site. Same DSG
account, separate `vercel link`, separate env vars, separate domain.

## GitHub repo setup

1. Create a new private GitHub repo — e.g.
   `dsg/mvno-nation-africa`.
2. From this project folder:
   ```bash
   git remote add origin git@github.com:<org>/mvno-nation-africa.git
   git branch -M main
   git push -u origin main
   ```
3. Protect `main`: require PR review for direct pushes, enable required
   status checks once Vercel preview deployments are wired in.

## Supabase setup

The site captures invitation requests from the RSVP form and writes
them to a Supabase `public.event_invites` table. Until env vars are
set, the API route falls back to `console.log` so dev still works.

### Option A — Reuse the existing Supabase project (recommended)

If the Miami project already has a Supabase project (`mvno-nation-2026`
or similar), reuse it — one dashboard, one set of credentials, one
place to look for leads + invites.

1. In the Supabase SQL Editor, paste and run
   `supabase/migrations/20260515000000_create_event_invites.sql` from
   this repo. This creates `public.event_invites` alongside the
   existing `public.leads` table.
2. Get the existing **Project URL** + **service_role key** from
   Project Settings → API.
3. Add them as Vercel env vars (see below).

### Option B — Fresh Supabase project

If you want clean separation:

1. Create a new project at [supabase.com](https://supabase.com) —
   e.g. `mvno-nation-africa`.
2. Run the migration in step A.1.
3. Use the new project's URL + service_role key as Vercel env vars.

### Option C — No Supabase (for early dev only)

Leave the env vars unset. `/api/rsvp` validates the payload and logs
each submission to the server console. Form submissions still succeed
from the visitor's perspective — they just aren't persisted.

## Vercel project setup

1. **Import the GitHub repo**: Vercel dashboard → "Add New… → Project".
2. **Framework preset**: `Next.js` (auto-detected).
3. **Root directory**: project root (do not nest).
4. **Build & install commands**: leave defaults
   - Install: `pnpm install`
   - Build: `pnpm build`
   - Output: leave blank (Next.js default).
5. **Node version**: 22.x. Configure under
   Project Settings → General → Node.js Version.
6. **Region**: `cpt1` (Cape Town) if available, otherwise `fra1`
   (Frankfurt) — closest to the African audience.

## Environment variables

| Variable                          | Used in                       | Required                          |
| --------------------------------- | ----------------------------- | --------------------------------- |
| `NEXT_PUBLIC_SUPABASE_URL`        | `src/lib/supabase.ts`         | Yes for prod (invite persistence) |
| `SUPABASE_SERVICE_ROLE_KEY`       | `src/lib/supabase.ts`         | Yes for prod (invite persistence) |

Never commit `.env.local`. Reference env vars via `process.env.<NAME>`
inside server-side code only (route handlers, server components).

## How to redeploy

- **Auto**: every push to `main` triggers a production deployment;
  every PR creates a preview deployment.
- **From CLI**:
  ```bash
  pnpm dlx vercel --prod
  ```

## Custom domain

When the domain is finalised (e.g. `africa.mvno-nation.com` or
`miami2026.dsg.co.za`-style), add it in Vercel → Settings → Domains
and update:

- `metadataBase` in `src/app/layout.tsx`
- `PROJECT_OVERVIEW.md` and any other docs that reference the URL

## Pre-launch checklist

- [ ] Supabase project provisioned (or existing one reused)
- [ ] `event_invites` migration applied
- [ ] `NEXT_PUBLIC_SUPABASE_URL` + `SUPABASE_SERVICE_ROLE_KEY` set in Vercel
- [ ] Smoke-test a form submission and confirm the row appears in
      `public.event_invites` with the correct `event_slug`
- [ ] **Swap the hero photo** at `public/images/hero-bg.jpg` to a
      Cape Town image (Table Mountain, V&A Waterfront, CTICC) — current
      placeholder is the Miami beach photo from the sibling project
- [ ] Confirm host / commercial contact details in
      `src/content/deck.ts` are correct
- [ ] Set the production domain
- [ ] Wire an analytics provider (see `TRACKING_PLAN.md`)
- [ ] Build the Africa-specific Mailchimp invitation email
