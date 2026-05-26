import { Section } from "./section";
import { pillars } from "@/content/deck";
import { Reveal } from "@/components/animated/reveal";
import {
  HeartHandshake,
  Bot,
  Cloud,
  LineChart,
  Network,
  Layers,
} from "lucide-react";

const pillarIcons = [HeartHandshake, Bot, Cloud, LineChart, Network] as const;

export function Pillars() {
  return (
    <Section
      id="blueprint"
      eyebrow="Session 04 · The framework"
      eyebrowTone="azure"
      title="Five pillars."
      highlight="One operating system."
      description="Each pillar is a discipline in its own right - together, they're the operating system of a modern MVNO. Every winner above has at least three; the leaders have all five."
    >
      {/* Operating-system layout: 5 pillars across, foundation strip below. */}
      <div className="relative">
        {/* Connecting line at the bottom of each pillar card, faked via a
            border on a positioned div behind the cards. */}
        <div
          className="pointer-events-none absolute inset-x-6 bottom-[58px] hidden h-px bg-gradient-to-r from-transparent via-azure-500/30 to-transparent lg:block"
          aria-hidden
        />

        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-5">
          {pillars.map((pillar, i) => {
            const Icon = pillarIcons[i];
            return (
              <Reveal key={pillar.n} delay={i * 80}>
                <div className="lift group relative flex h-full flex-col gap-3 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-5 transition-colors hover:border-azure-500/40">
                  <div className="flex items-center justify-between">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-azure-500/12 text-azure-400 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                      {Icon ? <Icon className="size-5" /> : null}
                    </div>
                    <span className="font-mono text-2xl font-bold text-azure-400/70 transition-colors group-hover:text-azure-400">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-fg">
                      {pillar.title}
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-fg-muted">
                      {pillar.body}
                    </p>
                  </div>

                  {/* Connector dot on the bottom edge - visual chain link. */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -bottom-[5px] left-1/2 hidden size-2 -translate-x-1/2 rounded-full bg-azure-500/60 ring-4 ring-bg lg:block"
                  />
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={500}>
          <div className="mt-8 flex items-center gap-3 rounded-2xl border border-azure-500/25 bg-gradient-to-r from-azure-500/[0.10] via-azure-500/[0.04] to-transparent px-5 py-4">
            <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-azure-500/20 text-azure-400">
              <Layers className="size-4" />
            </div>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-azure-400">
                Foundation
              </span>
              <span className="text-fg-muted">
                Customer-Centric Culture · Agile Operating Model · Data
                Governance
              </span>
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal delay={600}>
        <div className="mt-8">
          <a
            href="#rsvp"
            className="press inline-flex items-center gap-2 text-sm font-semibold text-mint-400 hover:text-mint-300"
          >
            Each pillar gets its own playbook in Cape Town - 7
            implementation steps, with KPIs →
          </a>
        </div>
      </Reveal>
    </Section>
  );
}
