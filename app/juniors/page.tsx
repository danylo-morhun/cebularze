import type { Metadata } from "next"
import { MainLayout } from "@/components/layout/main-layout"
import { JuniorHeroSection } from "@/components/juniors/junior-hero-section"
import { JuniorRosterPreview } from "@/components/juniors/junior-roster-preview"
import { JuniorNewsSection } from "@/components/juniors/junior-news-section"
import { DevelopmentProgram } from "@/components/juniors/development-program"

export const metadata: Metadata = {
  title: "Szczypiorki Kalisz - Drużyna Juniorska | Cebularze Kalisz",
  description:
    "Poznaj naszą drużynę juniorską Szczypiorki Kalisz. Młodzi hokeiści rozwijający swoje umiejętności pod okiem doświadczonych trenerów.",
}

export default function JuniorsPage() {
  return (
    <MainLayout>
      <JuniorHeroSection />
      <DevelopmentProgram />
      <JuniorRosterPreview />
      <JuniorNewsSection />
    </MainLayout>
  )
}
