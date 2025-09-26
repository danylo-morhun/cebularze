"use client"

import { MatchCard } from "@/components/schedule/match-card"
import { mockMatches } from "@/data/mock-data"

export function MatchList() {
  // Group matches by status
  const upcomingMatches = mockMatches.filter((match) => match.status === "upcoming")
  const finishedMatches = mockMatches
    .filter((match) => match.status === "finished")
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <div className="space-y-8">
      {/* Upcoming matches */}
      {upcomingMatches.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center space-x-2">
            <span>Nadchodzące Mecze</span>
            <div className="h-px bg-border flex-1" />
            <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
              {upcomingMatches.length}
            </span>
          </h2>
          <div className="grid gap-4">
            {upcomingMatches.map((match) => (
              <MatchCard key={match.id} match={match} />
            ))}
          </div>
        </div>
      )}

      {/* Finished matches */}
      {finishedMatches.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center space-x-2">
            <span>Ostatnie Wyniki</span>
            <div className="h-px bg-border flex-1" />
            <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
              {finishedMatches.length}
            </span>
          </h2>
          <div className="grid gap-4">
            {finishedMatches.map((match) => (
              <MatchCard key={match.id} match={match} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
