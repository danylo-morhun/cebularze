"use client"

import { PlayerCard } from "@/components/roster/player-card"
import { mockPlayers } from "@/data/mock-data"

export function RosterGrid() {
  // Group players by position
  const playersByPosition = {
    GK: mockPlayers.filter((p) => p.position === "GK"),
    D: mockPlayers.filter((p) => p.position === "D"),
    F: mockPlayers.filter((p) => p.position === "F"),
  }

  return (
    <div className="space-y-12">
      {Object.entries(playersByPosition).map(([position, players]) => (
        <div key={position}>
          <div className="flex items-center space-x-3 mb-6">
            <h2 className="text-2xl font-bold text-foreground">
              {position === "GK" ? "Bramkarze" : position === "D" ? "Obrońcy" : "Napastnicy"}
            </h2>
            <div className="h-px bg-border flex-1" />
            <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
              {players.length} zawodników
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {players.map((player) => (
              <PlayerCard key={player.id} player={player} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
