-- Captured invitation requests for MVNO Nation events.
-- One table, multi-event: every row is tagged with event_slug so a single
-- Supabase project can hold invites for Cape Town, Alicante, and any
-- future stops.

create table if not exists public.event_invites (
  id uuid primary key default gen_random_uuid(),
  event_slug text not null,
  name text not null check (char_length(name) between 2 and 200),
  email text not null check (email ~ '^[^@\s]+@[^@\s]+\.[^@\s]+$'),
  email_domain text generated always as (split_part(email, '@', 2)) stored,
  company text not null check (char_length(company) between 2 and 200),
  accepted_terms boolean not null default false,
  user_agent text,
  referrer text,
  ip_hash text,
  created_at timestamptz not null default now()
);

create index if not exists event_invites_event_idx
  on public.event_invites (event_slug, created_at desc);
create index if not exists event_invites_email_idx
  on public.event_invites (lower(email));
create index if not exists event_invites_email_domain_idx
  on public.event_invites (email_domain);
create index if not exists event_invites_company_idx
  on public.event_invites (lower(company));

-- Lock the table down. Only the service-role key (used from the Next.js
-- /api/rsvp route on the server) may insert; nothing reads or writes
-- via the anon / authenticated keys.
alter table public.event_invites enable row level security;

comment on table public.event_invites is
  'Invitation requests for MVNO Nation events (Cape Town, Alicante, etc).';
comment on column public.event_invites.event_slug is
  'Event identifier — e.g. mvno-nation-africa-2026, mvno-nation-europe-2026.';
comment on column public.event_invites.ip_hash is
  'Optional SHA-256 of (client_ip + daily_salt). Never store raw IP.';
