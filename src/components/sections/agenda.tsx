import { Section } from "./section";
import { event } from "@/content/deck";
import { Reveal } from "@/components/animated/reveal";
import {
  Wifi,
  Sparkles,
  Building2,
  Network,
  ArrowDown,
} from "lucide-react";

// Map each agenda focus area to an icon + accent tone.
const agendaTopics = [
  {
    title: "Unlock connectivity",
    body: "How MVNOs can unlock connectivity for the underserved - closing Africa's digital divide and reaching the next billion subscribers.",
    Icon: Wifi,
    tone: "mint" as const,
  },
  {
    title: "Innovative digital services",
    body: "Beyond voice and data - opportunities to deliver financial services, content, security and identity through the SIM.",
    Icon: Sparkles,
    tone: "azure" as const,
  },
  {
    title: "Real-world case studies",
    body: "What's working - from across Africa and emerging markets. The operating models behind the MVNOs already at scale.",
    Icon: Building2,
    tone: "mint" as const,
  },
  {
    title: "Partnerships that scale",
    body: "How MNOs, MVNEs, regulators, content owners and platform partners come together to power the next phase of growth.",
    Icon: Network,
    tone: "azure" as const,
  },
] as const;

const accent = {
  mint: {
    border: "border-mint-500/25 hover:border-mint-500/55",
    bg: "bg-gradient-to-br from-mint-500/[0.06] via-white/[0.02] to-transparent",
    iconWrap: "bg-mint-500/12 text-mint-400 ring-mint-500/30",
  },
  azure: {
    border: "border-azure-500/25 hover:border-azure-500/55",
    bg: "bg-gradient-to-br from-azure-500/[0.06] via-white/[0.02] to-transparent",
    iconWrap: "bg-azure-500/12 text-azure-400 ring-azure-500/30",
  },
} as const;

export function Agenda() {
  return (
    <Section
      id="agenda"
      eyebrow={`The agenda · ${event.dates}`}
      eyebrowTone="azure"
      title="What we'll cover in"
      highlight="Cape Town"
      description="Four threads across the day - drawn directly from the MVNO Nation Africa 2026 agenda. Each one is the difference between an MVNO that runs the next decade and one that gets run over by it."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {agendaTopics.map((topic, i) => {
          const a = accent[topic.tone];
          const Icon = topic.Icon;
          return (
            <Reveal key={topic.title} delay={i * 100}>
              <article
                className={`lift group flex h-full gap-5 rounded-2xl border p-6 transition-colors sm:p-7 ${a.border} ${a.bg}`}
              >
                <div
                  className={`flex size-12 shrink-0 items-center justify-center rounded-2xl ring-1 ring-inset transition-transform duration-300 group-hover:scale-110 ${a.iconWrap}`}
                >
                  <Icon className="size-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-fg">
                    {topic.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                    {topic.body}
                  </p>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={500}>
        <div className="mt-10 flex flex-col items-center gap-3 text-center">
          <a
            href="#nuggets"
            className="press inline-flex items-center gap-2 text-sm font-semibold text-mint-400 hover:text-mint-300"
          >
            Below: 5 sample sessions from the agenda
            <ArrowDown className="size-4 animate-bounce" />
          </a>
        </div>
      </Reveal>
    </Section>
  );
}
