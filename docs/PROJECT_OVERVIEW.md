# Project Overview

## What this is

**MVNO Nation Africa 2026** is a standalone invitation site for the
Cape Town stop of the DSG world tour. The event runs **8 June 2026**
and is **invitation only** — visitors land here from a Mailchimp email
sent to DSG's MVNO and telco contact database, read the event hook +
agenda + sample sessions, then fill the form to request an invite.

It is a sibling of, but operationally independent from, the
`mvno-nation-2026` (Miami) project. They share design conventions and
content (the same 5 deck nuggets) but ship as separate Vercel projects
with separate domains.

## Target audience

- African MVNO operators considering launch or scale
- Telco executives at MNOs, MVNEs and platform providers across Africa
- Investors evaluating African MVNO opportunities
- Pan-African brands considering an MVNO or affinity play
- The existing DSG contact list (CXG, MVNE, Xanite, Digital Mobile
  clients and prospects)

## Conversion goal

A row in the Supabase `event_invites` table with `event_slug =
'mvno-nation-africa-2026'`. Each row is a person who wants to attend
and is ready to be vetted + invited. The site does **not** sell tickets
or guarantee attendance — invitations are confirmed by the DSG team
case-by-case.

## Deployment environment

- **Hosting**: Vercel (Next.js framework preset) — separate project
  from Miami
- **Domain**: TBD — placeholder `mvno-nation-africa.vercel.app`
- **Branch strategy**: `main` deploys to production; preview branches
  auto-deploy on PRs once GitHub is wired up

## Owner

- Business owner: DSG (Yaron Assabi, Group CEO)
- Commercial lead: Edward Wicks (CCO, MVNE)
- Event production: DSG events team

## Tech stack

Identical to the Miami project — only the content layer differs.

| Layer        | Choice                                         |
| ------------ | ---------------------------------------------- |
| Framework    | Next.js 16 (App Router)                        |
| Language     | TypeScript 5                                   |
| Styling      | Tailwind CSS v4 (CSS-first config in globals) |
| UI primitives | shadcn-aligned conventions, lucide-react icons |
| Package mgr  | pnpm                                            |
| Hosting      | Vercel                                          |
| Database     | Supabase (Postgres) — table `public.event_invites` |
