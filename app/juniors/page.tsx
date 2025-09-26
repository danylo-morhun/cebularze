import type { Metadata } from "next"
import { PageHeader } from "@/components/ui/page-header"
import { JuniorHeroSection } from "@/components/juniors/junior-hero-section"
import { JuniorStatsSection } from "@/components/juniors/junior-stats-section"
import { JuniorRosterPreview } from "@/components/juniors/junior-roster-preview"
import { JuniorSchedulePreview } from "@/components/juniors/junior-schedule-preview"
import { JuniorNewsSection } from "@/components/juniors/junior-news-section"
import { DevelopmentProgram } from "@/components/juniors/development-program"

export const metadata: Metadata = {
  title: "Szczypiorki Kalisz - Drużyna Juniorska | Cebularze Kalisz",
  description:
    "Poznaj naszą drużynę juniorską Szczypiorki Kalisz. Młodzi hokeiści rozwijający swoje umiejętności pod okiem doświadczonych trenerów.",
}

export default function JuniorsPage() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Szczypiorki Kalisz"
        subtitle="Nasza drużyna juniorska"
        description="Młodzi wojownicy na lodzie - przyszłość polskiego hokeja"
      />

      <JuniorHeroSection />
      <JuniorStatsSection />
      <DevelopmentProgram />
      <JuniorRosterPreview />
      <JuniorSchedulePreview />
      <JuniorNewsSection />
    </div>
  )
}
