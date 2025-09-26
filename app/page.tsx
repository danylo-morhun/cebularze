import { MainLayout } from "@/components/layout/main-layout"
import { HeroSection } from "@/components/sections/hero-section"
import { NextMatchSection } from "@/components/sections/next-match-section"
import { RecentResultsSection } from "@/components/sections/recent-results-section"
import { TopPlayersSection } from "@/components/sections/top-players-section"
import { NewsSection } from "@/components/sections/news-section"
import { StatsSection } from "@/components/sections/stats-section"

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <NextMatchSection />
      <RecentResultsSection />
      <TopPlayersSection />
      <StatsSection />
      <NewsSection />
    </MainLayout>
  )
}
