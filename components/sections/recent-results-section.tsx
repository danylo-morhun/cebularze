"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Trophy, Calendar } from "lucide-react"
import { mockMatches } from "@/data/mock-data"
import Link from "next/link"

export function RecentResultsSection() {
  const recentMatches = mockMatches
    .filter((match) => match.status === "finished")
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3)

  const getMatchResult = (match: (typeof recentMatches)[0]) => {
    if (!match.homeScore || !match.awayScore) return null

    const isHomeGame = match.homeTeam === "Cebularze Kalisz"
    const ourScore = isHomeGame ? match.homeScore : match.awayScore
    const opponentScore = isHomeGame ? match.awayScore : match.homeScore

    if (ourScore > opponentScore) return "win"
    if (ourScore < opponentScore) return "loss"
    return "draw"
  }

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Ostatnie Wyniki</h2>
          <p className="text-muted-foreground text-lg">Zobacz jak radziliśmy sobie w ostatnich meczach</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {recentMatches.map((match) => {
            const result = getMatchResult(match)
            const isHomeGame = match.homeTeam === "Cebularze Kalisz"

            return (
              <Card key={match.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {/* Match header */}
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-xs">
                        {match.competition}
                      </Badge>
                      <Badge
                        variant={result === "win" ? "default" : result === "loss" ? "destructive" : "secondary"}
                        className={result === "win" ? "bg-green-500 hover:bg-green-600" : ""}
                      >
                        {result === "win" ? "Zwycięstwo" : result === "loss" ? "Porażka" : "Remis"}
                      </Badge>
                    </div>

                    {/* Teams and score */}
                    <div className="text-center space-y-2">
                      <div className="text-sm text-muted-foreground">
                        {new Date(match.date).toLocaleDateString("pl-PL", {
                          day: "numeric",
                          month: "short",
                        })}
                      </div>
                      <div className="font-semibold text-lg">
                        {match.homeTeam} vs {match.awayTeam}
                      </div>
                      <div className="text-3xl font-bold text-primary">
                        {match.homeScore} : {match.awayScore}
                      </div>
                      <div className="text-sm text-muted-foreground flex items-center justify-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {match.venue}
                      </div>
                    </div>

                    {/* Additional info */}
                    {match.attendance && (
                      <div className="text-center text-sm text-muted-foreground">
                        Widzów: {match.attendance.toLocaleString()}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Stats summary */}
        <div className="bg-card rounded-lg p-6 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-green-500">18</div>
              <div className="text-sm text-muted-foreground">Zwycięstwa</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-red-500">8</div>
              <div className="text-sm text-muted-foreground">Porażki</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-yellow-500">4</div>
              <div className="text-sm text-muted-foreground">Remisy</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">62.5%</div>
              <div className="text-sm text-muted-foreground">Skuteczność</div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button asChild size="lg" variant="outline">
            <Link href="/schedule">
              <Trophy className="mr-2 h-4 w-4" />
              Zobacz Wszystkie Wyniki
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
