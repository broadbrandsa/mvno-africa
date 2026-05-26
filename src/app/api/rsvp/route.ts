import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Captures invitation requests for MVNO Nation Africa 2026 in Cape Town.
 * Writes to `public.event_invites` with event_slug = "mvno-nation-africa-2026"
 * so a single Supabase project can hold invites for multiple events.
 *
 * Falls back to console.log when Supabase env vars are unset — useful
 * during early dev before the Supabase project is provisioned.
 */
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  const { name, email, company, acceptedTerms } = body as {
    name?: unknown;
    email?: unknown;
    company?: unknown;
    acceptedTerms?: unknown;
  };

  if (typeof name !== "string" || name.trim().length < 2) {
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
  }
  if (typeof email !== "string" || !emailPattern.test(email)) {
    return NextResponse.json(
      { error: "A valid work email is required" },
      { status: 400 },
    );
  }
  if (typeof company !== "string" || company.trim().length < 2) {
    return NextResponse.json(
      { error: "Company / organisation is required" },
      { status: 400 },
    );
  }
  if (acceptedTerms !== true) {
    return NextResponse.json(
      { error: "Please accept the event terms to continue" },
      { status: 400 },
    );
  }

  const cleanName = name.trim();
  const cleanEmail = email.trim().toLowerCase();
  const cleanCompany = company.trim();
  const userAgent = request.headers.get("user-agent") ?? null;
  const referrer = request.headers.get("referer") ?? null;

  const supabase = getSupabaseAdmin();

  if (supabase) {
    const { error } = await supabase.from("event_invites").insert({
      event_slug: "mvno-nation-africa-2026",
      name: cleanName,
      email: cleanEmail,
      company: cleanCompany,
      accepted_terms: true,
      user_agent: userAgent,
      referrer,
    });

    if (error) {
      console.error("[rsvp] supabase insert failed", {
        message: error.message,
        code: error.code,
      });
      return NextResponse.json(
        { error: "Could not record your request. Please try again." },
        { status: 500 },
      );
    }
  } else {
    // Env vars not configured — log to server console so dev still works.
    // Wire SUPABASE_* env vars to persist (see /docs/DEPLOYMENT.md).
    console.log("[rsvp] (no supabase configured) recorded:", {
      event: "mvno-nation-africa-2026",
      name: cleanName,
      email: cleanEmail,
      company: cleanCompany,
      at: new Date().toISOString(),
    });
  }

  return NextResponse.json({ ok: true });
}
