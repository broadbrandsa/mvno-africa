"use client";

import { useSyncExternalStore } from "react";

/**
 * Client-side helper for tracking whether the visitor has already
 * requested an invite. We use localStorage to remember so that repeat
 * visitors see a "You're on the list" success state instead of being
 * prompted to submit the form again.
 *
 * The server (Supabase `event_invites` table) is the source of truth
 * for who actually requested. localStorage is just a UX-smoothing
 * hint - it can be cleared without losing data.
 */

export const STORAGE_KEY = "mvnoNationAfricaInvite.v1";
export const INVITE_EVENT = "mvno-nation-africa-invite-changed";

export type StoredInvite = {
  name: string;
  email: string;
  company: string;
  acceptedTerms: true;
  acceptedAt: string;
};

function subscribe(onChange: () => void) {
  if (typeof window === "undefined") return () => {};
  window.addEventListener("storage", onChange);
  window.addEventListener(INVITE_EVENT, onChange);
  // Resolve "loading" on the next tick so the first client render still
  // matches SSR (no hydration mismatch).
  const handle = window.setTimeout(onChange, 0);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener(INVITE_EVENT, onChange);
    window.clearTimeout(handle);
  };
}

function readSnapshot(): "loading" | "granted" | "denied" {
  if (typeof window === "undefined") return "loading";
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return "denied";
    const parsed = JSON.parse(raw) as StoredInvite;
    return parsed?.acceptedTerms === true ? "granted" : "denied";
  } catch {
    return "denied";
  }
}

function getServerSnapshot(): "loading" {
  return "loading";
}

export function useInviteStatus() {
  return useSyncExternalStore(subscribe, readSnapshot, getServerSnapshot);
}

export function recordInvite(
  data: Omit<StoredInvite, "acceptedTerms" | "acceptedAt">,
) {
  if (typeof window === "undefined") return;
  const record: StoredInvite = {
    ...data,
    acceptedTerms: true,
    acceptedAt: new Date().toISOString(),
  };
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(record));
  window.dispatchEvent(new Event(INVITE_EVENT));
}

export function scrollToInviteForm() {
  if (typeof window === "undefined") return;
  const target = document.getElementById("rsvp");
  if (!target) return;
  target.scrollIntoView({ behavior: "smooth", block: "start" });
}
