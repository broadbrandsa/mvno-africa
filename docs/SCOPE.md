# Scope

## Pages included

- `/` - single-page invitation experience for the Cape Town event

## Sections included on `/`

1. **Hero** - event hook ("Africa is going online…"), pre-event meta
   strip ("Invitation only · Cape Town · 8 June 2026"), primary
   "Request your invite" CTA, hero stats (1.4B Africans · 60% still
   offline · 5.5× LTV uplift)
2. **Agenda** - the 4 official focus areas from the MVNO Nation Africa
   2026 site, each with an icon and a short explanation:
   - Unlock connectivity for underserved communities
   - Innovative digital services
   - Real-world case studies from Africa & emerging markets
   - Partnerships that scale
3. **5 sample sessions from the agenda** (nuggets), reframed from the
   Miami "5 nuggets" - same content, Africa-specific copy:
   - Session 01: The math (LTV bar chart visualisation)
   - Session 02: The graveyard ($2bn+ in price-led failures)
   - Session 03: The winners (Lebara/Lyca/giffgaff/Tesco/Consumer
     Cellular/FRiENDi - leans into diaspora & emerging-market examples)
   - Session 04: Five pillars · one operating system
   - Session 05: Two African MVNOs · one operating model (DStv +
     Boxer - both run in South Africa)
4. **RSVP form** - name + work email + company + opt-in. POSTs to
   `/api/rsvp` which writes to Supabase `event_invites`.
5. **Final CTA** - "See you in Cape Town" + world tour cards (Miami
   delivered ✓, Cape Town highlighted with star, Alicante upcoming) +
   speaker contact cards
6. **Footer** - group brand strip (white logos) and legal

## Routes / API

- `POST /api/rsvp` - receives the RSVP form submission, validates
  payload, writes to Supabase `public.event_invites` with
  `event_slug = 'mvno-nation-africa-2026'`. Falls back to `console.log`
  when env vars are not configured.

## What is excluded

- ❌ Multi-page navigation (no `/agenda`, `/speakers`, etc.)
- ❌ Hard ticket purchase (the form requests an invite - DSG team
  confirms case-by-case)
- ❌ CMS / live content editing - content is committed in
  `src/content/deck.ts` (event constant) and the agenda topics array
  inside `src/components/sections/agenda.tsx`
- ❌ Email automation (Mailchimp sends invitation emails - that's a
  separate workstream, not auto-triggered from the form submission)
- ❌ Internationalisation / multi-language

## Launch milestones

| Milestone                                       | Status |
| ----------------------------------------------- | ------ |
| Project scaffold + theme (forked from Miami)    | ✅     |
| Africa-specific copy + agenda section           | ✅     |
| RSVP form replacing the download form           | ✅     |
| `event_invites` Supabase migration written      | ✅     |
| Production build green                          | ✅     |
| Supabase project provisioned / reused           | ⏳     |
| Migration applied + env vars in Vercel          | ⏳     |
| Hero photo swapped to Cape Town image           | ⏳     |
| Vercel deployment                               | ⏳     |
| Mailchimp invitation email built                | ⏳     |
| Custom domain                                   | ⏳     |
