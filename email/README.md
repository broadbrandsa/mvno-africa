# MVNO Nation Africa 2026 - Email campaign

A ready-to-send Mailchimp **invitation email** for the Cape Town stop
of the MVNO Nation world tour. Drives clicks to
<https://mvno-africa.vercel.app/#rsvp> where recipients fill the
RSVP form and request a seat.

This is a **pre-event** email (unlike the Miami sibling project which
ships post-event recap variants). One file, one audience: DSG's MVNO
and telco contact database.

## Files

| File | Purpose |
|---|---|
| `mvno-nation-africa-invite.html` | HTML email (paste into Mailchimp) |
| `mvno-nation-africa-invite.txt` | Plain-text version (paste into Mailchimp's plain-text editor) |
| `README.md` | This file |

## Subject lines

Ranked by likely open rate. Test 2 or 3 against each other if the
list is big enough.

1. **You're invited: MVNO Nation Africa, Cape Town, 8 June 2026**
   *(direct, names the event and the date, hard to ignore)*
2. **Cape Town, 8 June 2026 - by invitation**
   *(short, mysterious, prompts open)*
3. **Africa is going online. Cape Town, 8 June.**
   *(provocative + specific date)*
4. **DSG world tour lands in Cape Town - request your invite**
   *(positions it as part of a larger thing)*

Avoid: anything with "FREE", "URGENT", or all caps in the subject -
deliverability and corporate spam filters punish those for B2B sends.

## Preview text (shows after the subject in the inbox)

The HTML ships with this preview text already (hidden `<div>` just
after `<body>`):

> The Cape Town stop of the DSG MVNO Nation world tour. One day,
> 5 sessions, the operating model behind the MVNOs that are winning.
> Invitation only.

If you override it in Mailchimp, keep it under ~120 characters and
keep "invitation only" in there - it's the scarcity hook.

## How to import into Mailchimp

### Option A - Paste-in-code (recommended)

1. Mailchimp dashboard → **Campaigns** → **Create Campaign** →
   **Email** → **Regular**
2. Pick the audience (your MVNO/telco list - segment to South Africa +
   pan-Africa contacts if the list is bigger than that)
3. Subject line + preview text from above
4. **From name:** "Yaron Assabi at DSG" or "DSG" (sender name affects
   open rate ~5-10%; real-person-at-company tests better than
   company-only for B2B)
5. **From email:** something hosted on `dsg.co.za` (e.g. `yaron@dsg.co.za`
   or `events@dsg.co.za`). Never use `@gmail.com` for a business send
   or deliverability tanks.
6. **Design step** → pick "Code your own" template → "Paste in code"
7. Open `mvno-nation-africa-invite.html` → Cmd+A → Cmd+C → paste into
   the Mailchimp window
8. Mailchimp auto-detects the merge tags (`*|UNSUB|*`,
   `*|HTML:LIST_ADDRESS_HTML|*`, `*|CURRENT_YEAR|*`). They resolve on
   send.
9. **Plain-text version** → click "Edit Plain-Text" → paste contents
   of `mvno-nation-africa-invite.txt`
10. **Preview & Test** → send a test to yourself first. Check on
    **desktop Gmail, mobile Gmail, and Outlook web** at minimum.

### Option B - Drag-and-drop template

If your team prefers Mailchimp's visual editor, use the **"Code Your
Own"** template anyway for this send. The HTML is too custom to
import cleanly into the drag-and-drop editor.

## Merge tags used

| Tag | What it resolves to | Required? |
|---|---|---|
| `*|UNSUB|*` | One-click unsubscribe URL | **Yes** (CAN-SPAM / POPIA / GDPR) |
| `*|UPDATE_PROFILE|*` | Update preferences URL | Recommended |
| `*|FORWARD|*` | Forward-to-friend URL | Optional |
| `*|HTML:LIST_ADDRESS_HTML|*` | Your physical mailing address | **Yes** (CAN-SPAM legal requirement) |
| `*|CURRENT_YEAR|*` | Current year for footer | Recommended |

**You must set the physical mailing address** in Mailchimp under
*Account → Settings → Required email footer content* before the
campaign will send. Use DSG's registered business address.

## Personalization (optional, recommended)

The email currently doesn't use a `*|FNAME|*` greeting because B2B
recipients sometimes don't have first names on file and a fallback
"Hi friend," reads worse than diving straight into the hook. If you
have high-quality first-name data, add at the top of the first text
block:

```
Hi *|FNAME|*,
```

With fallback:

```
Hi *|IFNOT:FNAME|*there*|END:IFNOT|**|FNAME|*,
```

For this invitation email specifically, consider adding a one-line
personal note above the hero if Yaron is sending to a tier-1 segment:

```
Hi *|FNAME|*,

I'd love to see you in Cape Town for our Africa stop. Details below
- it's invitation only, so a quick RSVP if you can.

- Yaron
```

That cuts CTR on the main button slightly but typically lifts reply
rate, which is more valuable for an invitation list.

## Image hosting note

All images point to absolute URLs on
<https://mvno-africa.vercel.app>. As long as the Vercel deployment
stays up, the images render in every client. If you migrate the site
to a custom domain (e.g. `africa2026.dsg.co.za`), search-and-replace
the HTML before sending.

**Images used:**

- `/email/email-hero.jpg` (156 KB) - Camps Bay sunset hero, resized
  to 1200×~750 px @ q60 specifically for email
- `/images/dsg-logo.png` - top-left brand mark
- `/email/dsg-logo-white.png` + 4 sibling brand logos (cxg, mvne,
  xanite, dm) - bottom group brands strip

**Total payload ~1.0 MB.** Within the "ideal <1 MB" guideline for
modern mobile. No optimisation work needed before launch.

### About the hero image

The hero block uses the Camps Bay sunset photo with a dark navy
gradient overlay so the white headline stays readable. Three
fallbacks are layered:

1. **Modern clients** (Apple Mail, Gmail web, mobile clients): full
   CSS background-image with the gradient overlay.
2. **Outlook desktop**: VML `<v:rect>` with `<v:fill type="frame">`
   renders the photo. Color overlay is approximated via the `color`
   attribute on `<v:fill>`. Looks slightly less polished than modern
   clients but still on-brand.
3. **Images blocked** (very common in corporate Outlook by default):
   the dark navy `bgcolor="#0a1628"` shows through. The headline +
   CTA + 4 speaker names are LIVE TEXT, not baked into the image, so
   they always read.

This is the most defensive pattern for B2B audiences where ~30% of
recipients won't auto-load images.

## Send timing

For an African B2B telco/MVNO audience:

- **Best days:** Tuesday, Wednesday, Thursday
- **Best time:** 09:00-10:30 SAST (recipient-local if you have
  contacts outside South Africa). Mailchimp's *Time Travel* feature
  handles localisation automatically if you turn it on.
- **Avoid:** Mondays (inbox catch-up), Fridays after 14:00, all of
  August, the week of African public holidays (Workers' Day, Youth
  Day, Freedom Day)
- **Send window for this event:** 4-6 weeks before 8 June 2026 gives
  the best balance. So aim for the **week of 27 April** (right after
  Miami delivers, while the world tour is hot) or the **week of
  11 May** (gives 4 weeks runway). Avoid sending inside the last
  2 weeks - if they haven't decided by then, the send won't help.

## Tracking what works

Mailchimp will report opens, click-through (CTR), and unsubscribes by
default. The single conversion that matters is **clicks on the
"Request your invite" buttons** - both buttons in the HTML point to
`https://mvno-africa.vercel.app/#rsvp`, which scrolls directly to
the RSVP form section.

To attribute RSVP form submissions back to specific campaign sends,
add a UTM parameter when you paste the link in Mailchimp:

```
# Main invite send
https://mvno-africa.vercel.app/?utm_source=mailchimp&utm_medium=email&utm_campaign=africa2026_invite&utm_content=primary_cta#rsvp

# Reminder send (2 weeks before event)
https://mvno-africa.vercel.app/?utm_source=mailchimp&utm_medium=email&utm_campaign=africa2026_reminder&utm_content=primary_cta#rsvp

# Final call (1 week before event)
https://mvno-africa.vercel.app/?utm_source=mailchimp&utm_medium=email&utm_campaign=africa2026_final&utm_content=primary_cta#rsvp
```

This lets you compare CTR side-by-side and see which send actually
drove the RSVP. Combined with the `event_invites` Supabase table
(which records `event_slug = 'mvno-nation-africa-2026'`), you can
attribute every row in the table back to a specific Mailchimp send.

## A follow-up send (2-3 weeks later)

If you want a soft second touch for non-openers/non-clickers, send
the same template with a tweaked subject and a shorter intro:

```
Subject: Quick reminder - Cape Town, 8 June, invitation only
Preview: The room's filling up. Two minutes to request your seat.
```

Edit the hero sub-copy in the HTML to:

> The room's filling up. The MVNO Nation Cape Town stop is
> 8 June 2026 - one day, 5 sessions, invitation only.

Everything else stays the same. Segment to "did not click previous
campaign" in Mailchimp.

## Pre-send checklist

- [ ] Subject + preview text set
- [ ] From name + verified sender domain configured (`@dsg.co.za`)
- [ ] Physical mailing address set in Mailchimp account
- [ ] Test send to yourself - opened and rendered correctly on
      desktop and mobile (Gmail + Outlook web minimum)
- [ ] Spam-test using Mailchimp's built-in Inbox Preview
- [ ] Audience picked (and any exclusion lists applied - e.g. exclude
      Miami attendees if they already RSVPd via that channel)
- [ ] UTM parameters added to the RSVP link if you want campaign
      attribution in analytics
- [ ] Confirmed delivery time (Tuesday/Wednesday/Thursday 09:00-10:30
      SAST is the sweet spot)
- [ ] Heads-up sent to the DSG events team - "RSVPs will start
      landing in Supabase `event_invites` a few minutes after we
      send"
