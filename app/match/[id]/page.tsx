import { MainLayout } from "@/components/layout/main-layout"
import { MatchDetail } from "@/components/match/match-detail"
import { notFound } from "next/navigation"
import { mockMatches } from "@/data/mock-data"

interface MatchPageProps {
  params: {
    id: string
  }
}

export default function MatchPage({ params }: MatchPageProps) {
  const match = mockMatches.find(m => m.id === params.id)

  if (!match) {
    notFound()
  }

  return (
    <MainLayout>
      <MatchDetail match={match} />
    </MainLayout>
  )
}

export async function generateStaticParams() {
  return mockMatches.map((match) => ({
    id: match.id,
  }))
}
