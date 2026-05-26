import { ReadingProgress } from "@/components/animated/reading-progress";
import { SiteHeader } from "@/components/sections/site-header";
import { Hero } from "@/components/sections/hero";
import { Agenda } from "@/components/sections/agenda";
import { LtvMath } from "@/components/sections/ltv-math";
import { Failures } from "@/components/sections/failures";
import { Winners } from "@/components/sections/winners";
import { Pillars } from "@/components/sections/pillars";
import { CaseStudies } from "@/components/sections/case-studies";
import { RsvpForm } from "@/components/sections/rsvp-form";
import { CTA } from "@/components/sections/cta";
import { SiteFooter } from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <ReadingProgress />
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Agenda />
        <div id="nuggets">
          <LtvMath />
          <Failures />
          <Winners />
          <Pillars />
          <CaseStudies />
        </div>
        <RsvpForm />
        <CTA />
      </main>
      <SiteFooter />
    </div>
  );
}
