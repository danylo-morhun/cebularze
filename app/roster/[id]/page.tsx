import { notFound } from "next/navigation"
import { MainLayout } from "@/components/layout/main-layout"
import { PlayerProfile } from "@/components/roster/player-profile"
import { mockPlayers } from "@/data/mock-data"

interface PlayerPageProps {
  params: {
    id: string
  }
}

export default function PlayerPage({ params }: PlayerPageProps) {
  const player = mockPlayers.find((p) => p.id === params.id)

  if (!player) {
    notFound()
  }

  return (
    <MainLayout>
      <PlayerProfile player={player} />
    </MainLayout>
  )
}

export async function generateStaticParams() {
  return mockPlayers.map((player) => ({
    id: player.id,
  }))
}
