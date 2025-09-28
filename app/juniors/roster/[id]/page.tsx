import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { MainLayout } from "@/components/layout/main-layout"
import { JuniorPlayerProfile } from "@/components/juniors/junior-player-profile"
import { mockJuniorPlayers } from "@/data/mock-data"

interface JuniorPlayerPageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: JuniorPlayerPageProps): Promise<Metadata> {
  const player = mockJuniorPlayers.find((p) => p.id === params.id)
  
  if (!player) {
    return {
      title: "Zawodnik nie znaleziony | Cebularze Kalisz",
    }
  }

  return {
    title: `${player.name} ${player.surname} - Szczypiorki Kalisz | Cebularze Kalisz`,
    description: `Profil młodego zawodnika ${player.name} ${player.surname} z drużyny juniorskiej Szczypiorki Kalisz.`,
  }
}

export default function JuniorPlayerPage({ params }: JuniorPlayerPageProps) {
  const player = mockJuniorPlayers.find((p) => p.id === params.id)

  if (!player) {
    notFound()
  }

  return (
    <MainLayout>
      <JuniorPlayerProfile player={player} />
    </MainLayout>
  )
}
