"use client"

import { MatchCard } from "@/components/schedule/match-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { mockMatches } from "@/data/mock-data"
import { Calendar, Trophy, Clock, TrendingUp } from "lucide-react"

export function MatchList() {
  // Group matches by status
  const upcomingMatches = mockMatches.filter((match) => match.status === "upcoming")
  const finishedMatches = mockMatches
    .filter((match) => match.status === "finished")
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  // Calculate some stats
  const wins = finishedMatches.filter(match => {
    const isHomeGame = match.homeTeam === "Cebularze Kalisz"
    const ourScore = isHomeGame ? match.homeScore : match.awayScore
    const opponentScore = isHomeGame ? match.awayScore : match.homeScore
    return ourScore && opponentScore && ourScore > opponentScore
  }).length

  const winRate = finishedMatches.length > 0 ? Math.round((wins / finishedMatches.length) * 100) : 0

  return (
    <div className="space-y-8">
      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-blue-50 dark:bg-blue-950/30">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-500/20 rounded-lg">
                <Calendar className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">{upcomingMatches.length}</div>
                <div className="text-sm text-muted-foreground">Nadchodzące mecze</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-green-50 dark:bg-green-950/30">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-green-500/20 rounded-lg">
                <Trophy className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">{wins}</div>
                <div className="text-sm text-muted-foreground">Zwycięstwa</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-orange-50 dark:bg-orange-950/30">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-orange-500/20 rounded-lg">
                <TrendingUp className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">{winRate}%</div>
                <div className="text-sm text-muted-foreground">Skuteczność</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Upcoming matches */}
      {upcomingMatches.length > 0 && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">Nadchodzące Mecze</h2>
                <p className="text-muted-foreground">Najbliższe spotkania Cebularzy Kalisz</p>
              </div>
            </div>
            <Badge variant="secondary" className="px-3 py-1 text-sm font-medium">
              {upcomingMatches.length} mecz{upcomingMatches.length !== 1 ? 'ów' : ''}
            </Badge>
          </div>
          
          <div className="space-y-4">
            {upcomingMatches.map((match) => (
              <MatchCard key={match.id} match={match} />
            ))}
          </div>
        </div>
      )}

      {/* Finished matches */}
      {finishedMatches.length > 0 && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-green-500/10 rounded-lg">
                <Trophy className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">Ostatnie Wyniki</h2>
                <p className="text-muted-foreground">Historia rozegranych meczów</p>
              </div>
            </div>
            <Badge variant="secondary" className="px-3 py-1 text-sm font-medium">
              {finishedMatches.length} mecz{finishedMatches.length !== 1 ? 'ów' : ''}
            </Badge>
          </div>
          
          <div className="space-y-4">
            {finishedMatches.map((match) => (
              <MatchCard key={match.id} match={match} />
            ))}
          </div>
        </div>
      )}

      {/* Empty state */}
      {upcomingMatches.length === 0 && finishedMatches.length === 0 && (
        <Card className="border-dashed">
          <CardContent className="p-12 text-center">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Brak meczów</h3>
            <p className="text-muted-foreground">Nie znaleziono meczów spełniających wybrane kryteria</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
