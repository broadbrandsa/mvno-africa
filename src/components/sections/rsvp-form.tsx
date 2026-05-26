"use client";

import { useState } from "react";
import {
  CalendarCheck,
  CheckCircle2,
  Send,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  recordInvite,
  useInviteStatus,
} from "@/lib/invite-access";
import { Reveal } from "@/components/animated/reveal";
import { event } from "@/content/deck";
import { cn } from "@/lib/utils";

export function RsvpForm() {
  const status = useInviteStatus();
  const alreadyOnList = status === "granted";

  return (
    <section
      id="rsvp"
      className="relative isolate scroll-mt-24 overflow-hidden border-t border-white/5"
    >
      {/* Mint aurora behind the form to draw the eye. */}
      <div
        className="aurora float right-[-12rem] top-1/4 h-[34rem] w-[34rem]"
        style={{ ["--aurora" as string]: "rgba(16, 185, 129, 0.18)" }}
        aria-hidden
      />
      <div
        className="absolute inset-0 -z-10 grid-bg opacity-[0.07]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-28">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <Reveal>
            <div className="max-w-xl space-y-5">
              <Badge tone="mint">
                <CalendarCheck className="size-3" /> Request your invite
              </Badge>
              <h2 className="text-balance text-3xl font-semibold leading-[1.05] tracking-tight sm:text-4xl lg:text-5xl">
                See you in{" "}
                <span className="bg-gradient-to-br from-mint-300 to-mint-500 bg-clip-text text-transparent">
                  Cape Town, 9–10 June.
                </span>
              </h2>
              <p className="text-pretty text-base leading-relaxed text-fg-muted sm:text-lg">
                MVNO Nation Africa 2026 is invitation only. Drop your
                details below and the team will be in touch within{" "}
                <strong className="font-semibold text-fg">
                  two working days
                </strong>{" "}
                with the full agenda, venue logistics, and your
                personalised invitation.
              </p>

              <ul className="space-y-2.5 pt-2 text-sm text-fg-muted">
                <Bullet>Two days with the operators, investors and platform leaders building Africa&apos;s MVNO ecosystem</Bullet>
                <Bullet>The 4-thread agenda: connectivity · digital services · case studies · partnerships</Bullet>
                <Bullet>The full 5-pillar operating model, walked through live</Bullet>
                <Bullet>Networking with attendees from across Africa and emerging markets</Bullet>
              </ul>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-3 text-[11px] uppercase tracking-[0.18em] text-fg-faint">
                <span className="inline-flex items-center gap-1">
                  <Sparkles className="size-3 text-mint-400" /> Invitation only
                </span>
                <span aria-hidden>·</span>
                <span>Cape Town · {event.dates}</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            {alreadyOnList ? <SuccessCard /> : <FormCard />}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2.5">
      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-mint-400" />
      <span>{children}</span>
    </li>
  );
}

function FormCard() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (name.trim().length < 2) {
      setError("Please enter your full name.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid work email address.");
      return;
    }
    if (company.trim().length < 2) {
      setError("Please tell us which organisation you're with.");
      return;
    }
    if (!accepted) {
      setError("Please accept the event terms to continue.");
      return;
    }

    setSubmitting(true);
    try {
      const cleanEmail = email.trim().toLowerCase();
      const cleanName = name.trim();
      const cleanCompany = company.trim();

      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: cleanName,
          email: cleanEmail,
          company: cleanCompany,
          acceptedTerms: true,
        }),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as {
          error?: string;
        };
        throw new Error(data.error ?? "Could not record your request.");
      }

      recordInvite({
        name: cleanName,
        email: cleanEmail,
        company: cleanCompany,
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="gradient-border rounded-3xl bg-bg-card/85 p-6 shadow-2xl shadow-black/40 backdrop-blur-md sm:p-8"
      style={
        {
          ["--gb-color" as string]: "rgba(16, 185, 129, 0.55)",
        } as React.CSSProperties
      }
    >
      <div className="mb-6 flex items-center gap-3">
        <div className="flex size-10 items-center justify-center rounded-full bg-mint-500/15 text-mint-400">
          <ShieldCheck className="size-5" />
        </div>
        <div>
          <p className="text-sm font-semibold text-fg">
            Request your Cape Town invite
          </p>
          <p className="text-xs text-fg-faint">
            Invitation only · response within 2 working days
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <Field
          id="rsvp-name"
          label="Full name"
          type="text"
          autoComplete="name"
          value={name}
          onChange={setName}
          placeholder="Jane Doe"
          required
        />
        <Field
          id="rsvp-email"
          label="Work email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={setEmail}
          placeholder="jane@company.com"
          required
        />
        <Field
          id="rsvp-company"
          label="Company / organisation"
          type="text"
          autoComplete="organization"
          value={company}
          onChange={setCompany}
          placeholder="Your MVNO / operator / fund"
          required
        />

        <label className="group flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-colors hover:border-white/20">
          <input
            type="checkbox"
            checked={accepted}
            onChange={(e) => setAccepted(e.target.checked)}
            className="mt-0.5 size-4 shrink-0 cursor-pointer rounded border-white/20 bg-transparent accent-mint-500"
          />
          <span className="text-xs leading-relaxed text-fg-muted">
            I&apos;d like to receive event details and updates from DSG.
            I understand my submission doesn&apos;t guarantee a seat —
            invitations are confirmed on a case-by-case basis.
          </span>
        </label>

        {error && (
          <p
            role="alert"
            className="rounded-lg bg-rose-500/10 px-3 py-2 text-xs text-rose-400 ring-1 ring-inset ring-rose-500/30"
          >
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={submitting}
          className={cn(
            "shimmer press inline-flex h-12 w-full items-center justify-center gap-2 rounded-full font-semibold transition-colors",
            "bg-mint-500 text-bg shadow-[0_10px_30px_-8px_rgba(16,185,129,0.6)]",
            "hover:bg-mint-400 disabled:opacity-60 disabled:cursor-not-allowed",
          )}
        >
          {submitting ? (
            <span className="inline-flex items-center gap-2">
              <span className="size-4 animate-spin rounded-full border-2 border-bg/40 border-t-bg" />
              Sending…
            </span>
          ) : (
            <>
              <Send className="size-4" />
              Request my invite
            </>
          )}
        </button>

        <p className="text-center text-[11px] leading-relaxed text-fg-faint">
          We&apos;ll respond within 2 working days. One follow-up email
          max — we never share your details.
        </p>
      </div>
    </form>
  );
}

function SuccessCard() {
  return (
    <div className="flex h-full flex-col gap-5 rounded-3xl border border-mint-500/30 bg-gradient-to-br from-mint-500/[0.08] via-bg-card/60 to-bg-card/80 p-8 shadow-2xl shadow-black/40 backdrop-blur-md">
      <div className="flex size-12 items-center justify-center rounded-full bg-mint-500/15 text-mint-400">
        <CheckCircle2 className="size-6" />
      </div>
      <div>
        <h3 className="text-xl font-semibold text-fg">
          You&apos;re on the list.
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-fg-muted">
          Expect a confirmation email from the team within two working
          days with the full agenda, venue details and your personalised
          invitation. We&apos;ll be in touch.
        </p>
      </div>
      <div className="border-t border-white/10 pt-5">
        <p className="text-[11px] uppercase tracking-[0.18em] text-fg-faint">
          See you in Cape Town
        </p>
        <p className="mt-1.5 text-sm font-semibold text-fg">
          {event.dates}
        </p>
      </div>
    </div>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  ...rest
}: {
  id: string;
  label: string;
  value: string;
  onChange: (next: string) => void;
} & Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange" | "id"
>) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-xs font-medium uppercase tracking-[0.14em] text-fg-faint"
      >
        {label}
      </label>
      <input
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="block w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-fg placeholder:text-fg-faint transition-colors focus:border-mint-500/60 focus:outline-none focus:ring-2 focus:ring-mint-500/30"
        {...rest}
      />
    </div>
  );
}
