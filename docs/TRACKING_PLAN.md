# Tracking Plan

## What's wired

Form submissions from the RSVP form (`/#rsvp`) are POSTed to
`/api/rsvp` and written to **Supabase** when env vars are present
(`NEXT_PUBLIC_SUPABASE_URL` + `SUPABASE_SERVICE_ROLE_KEY`). Without
those, the route falls back to a server `console.log`. Each row in
`public.event_invites` captures:

| Column            | Source                                |
| ----------------- | ------------------------------------- |
| `event_slug`      | hard-coded "mvno-nation-africa-2026"  |
| `name`            | form input (validated, trimmed)       |
| `email`           | form input (lowercased, regex check)  |
| `email_domain`    | generated column from `email`         |
| `company`         | form input (trimmed)                  |
| `accepted_terms`  | always `true` (form-validated)        |
| `user_agent`      | request `User-Agent` header           |
| `referrer`        | request `Referer` header              |
| `created_at`      | server timestamp                      |

The submission also sets the visitor's `localStorage` flag so future
CTA clicks render as a "You're on the list" pill instead of scrolling
back to the form.

## What's not wired (yet)

- **Web analytics**. No provider integrated. Recommendations below.
- **Confirmation email** to the visitor (Supabase webhook → Resend or
  Postmark is the cleanest path).
- **Internal notification** to the DSG events team when a new RSVP
  lands (Supabase webhook → Slack channel).
- **CRM push** (HubSpot, Salesforce, Pipedrive). Easy via a Supabase
  database webhook or trigger.

## Recommended analytics providers

- **Vercel Web Analytics** - drop-in via `@vercel/analytics`, zero
  config, privacy-respecting. Best baseline for traffic + page metrics.
- **Google Analytics 4** - useful if existing DSG marketing reporting
  already runs through GA4. Add via the official `GoogleAnalytics`
  component (App Router-compatible) and a measurement ID env var.

## Suggested events to track once analytics is live

| Event                 | Trigger                                              | Properties                       |
| --------------------- | ---------------------------------------------------- | -------------------------------- |
| `form_view`           | First in-viewport intersection of `#rsvp`            | `referrer`, `utm_campaign`       |
| `form_submit`         | User clicks the submit button                        | `email_domain`                   |
| `form_success`        | `POST /api/rsvp` returns 200                         | `email_domain`, `company`        |
| `form_error`          | Validation or server error                           | `error_message`                  |
| `cta_scroll_to_form`  | Pre-submit click on a "Request your invite" CTA      | `cta_location`                   |
| `agenda_topic_click`  | Click on any of the four agenda cards                | `topic`                          |
| `contact_click`       | Click on a `mailto:` CTA in the final section        | `which` (host/commercial)        |

## RSVP triage workflow

Once Supabase is live, the simplest path to "tell the team when a new
RSVP arrives" is a **Supabase Database Webhook** (Project Settings →
Database → Webhooks):

- **Slack**: webhook → Slack Incoming Webhook URL → channel
  `#mvno-nation-rsvps`
- **Email**: webhook → Resend / Postmark transactional sender → events
  team distribution list
- **HubSpot / Salesforce**: webhook → CRM API (use a Vercel Edge
  function as a middleman if you need to map fields)

The Supabase row already contains everything needed to triage:
name, work email, email domain, company, plus timestamp + referrer.

## Conversion goals

- **Primary**: RSVP form submissions (`form_success` count)
- **Secondary**: `contact_click` - direct outreach to Yaron or Edward,
  often a higher-value signal than the form
- **Quality signal**: scroll depth past the agenda + at least one
  nugget section (visitor consumed the value before submitting)

## Privacy

- The `event_invites` table has `enable row level security` on. Only
  the service-role key (server-side) can insert. The anon and
  authenticated keys cannot read or write.
- No raw IP storage. The `ip_hash` column is reserved for an optional
  SHA-256 of `(client_ip + daily_salt)` if abuse prevention requires it.
- If GA4 is enabled, anonymise IP and disable advertising signals to
  stay aligned with POPIA / GDPR.
