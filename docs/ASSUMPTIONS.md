# Assumptions

## Event details

- **Date**: 8 June 2026 — confirmed by DSG (updated from the original
  9–10 June listing on the public agenda site). Hard-coded in
  `src/content/deck.ts` under the `event` constant.
- **Venue**: "Cape Town" only — specific venue (CTICC etc.) not yet
  confirmed, so the site copy stays at city level until DSG provides
  the venue name.
- **Agenda**: the four threads listed in the Agenda section are taken
  verbatim from the official agenda page. If the agenda evolves, edit
  the array in `src/components/sections/agenda.tsx`.

## Data and content

- **No internal data access**. All numbers, case studies and quotes on
  the site are taken from the v8 MVNO-Nation-Workshop-2026 deck (the
  same deck DSG just presented in Miami). Africa-specific stats in the
  hero (1.4B population, 60% offline) are widely-cited reference
  figures — confirm sources before any external citation.
- **Directional strategy only**. The site previews what will be
  presented at the event. Specific investment, pricing or platform
  decisions need to be validated against the prospect's own data before
  commitment.

## Compliance and confidentiality

- The site content is **open** — no NDA gate, no PDF download. The form
  is a soft RSVP request (name, work email, company, opt-in checkbox).
- The form opt-in checkbox is GDPR/POPIA-friendly: it asks the visitor
  to confirm they'd like event details and acknowledges that the
  submission doesn't guarantee a seat. DSG decides on invitations
  case-by-case.
- Visitor "I've requested" state is stored only in `localStorage` on
  the visitor's device. The server (Supabase) is the system of record.

## Hero photo

- Currently using the Miami beach photo (`public/images/hero-bg.jpg`)
  as a placeholder, inherited from the sibling project. **Must be
  swapped before launch** to a Cape Town image (Table Mountain, V&A
  Waterfront, CTICC). The parallax + overlay system will adapt to any
  landscape photo at ~16:9 or 4:3 aspect.
