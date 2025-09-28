"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Tv, Trophy, ArrowRight } from "lucide-react"
import { MATCH_STATUSES } from "@/lib/constants"
import type { Match } from "@/types"
import Link from "next/link"

interface MatchCardProps {
  match: Match
}

export function MatchCard({ match }: MatchCardProps) {
  const isUpcoming = match.status === "upcoming"
  const isFinished = match.status === "finished"
  const isHomeGame = match.homeTeam === "Cebularze Kalisz"

  const getMatchResult = () => {
    if (!isFinished || !match.homeScore || !match.awayScore) return null

    const ourScore = isHomeGame ? match.homeScore : match.awayScore
    const opponentScore = isHomeGame ? match.awayScore : match.homeScore

    if (ourScore > opponentScore) return "win"
    if (ourScore < opponentScore) return "loss"
    return "draw"
  }

  const result = getMatchResult()

  return (
    <Card
      className={`group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
        result === "win"
          ? "ring-1 ring-green-500/20 bg-green-500/5"
          : result === "loss"
            ? "ring-1 ring-red-500/20 bg-red-500/5"
            : isUpcoming
              ? "ring-1 ring-blue-500/20 bg-blue-500/5"
              : ""
      }`}
    >
      <CardContent className="p-6">
        <div className="flex items-start justify-between gap-4">
          {/* Match info */}
          <div className="flex-1 space-y-3">
            {/* Header with badges */}
            <div className="flex items-center space-x-2">
              <Badge variant="outline" className="text-xs font-medium">
                {match.competition}
              </Badge>
              <Badge variant={isHomeGame ? "default" : "secondary"} className="text-xs font-medium">
                {isHomeGame ? "Dom" : "Wyjazd"}
              </Badge>
              <Badge
                variant={
                  match.status === "upcoming"
                    ? "outline"
                    : result === "win"
                      ? "default"
                      : result === "loss"
                        ? "destructive"
                        : "secondary"
                }
                className={result === "win" ? "bg-green-500 hover:bg-green-600 text-white" : ""}
              >
                {MATCH_STATUSES[match.status]}
              </Badge>
            </div>

            {/* Teams */}
            <div className="space-y-1">
              <div className="text-xl font-bold text-foreground">
                {match.homeTeam} vs {match.awayTeam}
              </div>
              {isUpcoming && (
                <div className="text-sm text-muted-foreground">
                  Mecz zaplanowany na {new Date(match.date).toLocaleDateString("pl-PL", {
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                  })}
                </div>
              )}
            </div>

            {/* Match details - enhanced visual design */}
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <div className="flex items-center space-x-2 px-3 py-1.5 bg-muted/50 rounded-full">
                <Calendar className="w-4 h-4 text-primary" />
                <span className="font-medium text-foreground">
                  {new Date(match.date).toLocaleDateString("pl-PL", {
                    weekday: "short",
                    day: "numeric",
                    month: "short",
                  })}
                </span>
              </div>
              <div className="flex items-center space-x-2 px-3 py-1.5 bg-muted/50 rounded-full">
                <Clock className="w-4 h-4 text-primary" />
                <span className="font-medium text-foreground">
                  {new Date(match.date).toLocaleTimeString("pl-PL", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>
              <div className="flex items-center space-x-2 px-3 py-1.5 bg-muted/50 rounded-full">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="font-medium text-foreground truncate max-w-[200px]">{match.venue}</span>
              </div>
            </div>
          </div>

          {/* Score and Actions - positioned at right */}
          <div className="flex flex-col items-end gap-3">
            {/* Score */}
            {isFinished && match.homeScore !== undefined && match.awayScore !== undefined && (
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">
                  {match.homeScore} : {match.awayScore}
                </div>
                <div className="text-xs text-muted-foreground mt-1">Wynik</div>
              </div>
            )}
            
            {/* Actions */}
            <div className="flex flex-col items-end gap-2">
              <Button size="sm" variant="ghost" asChild className="h-8 w-8 p-0">
                <Link href={`/match/${match.id}`} className="flex items-center justify-center">
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              {(match.stream || (isFinished && match.highlights)) && (
                <div className="flex flex-col gap-1">
                  {match.stream && (
                    <Button size="sm" variant="outline" asChild className="text-xs h-7">
                      <a href={match.stream} target="_blank" rel="noopener noreferrer">
                        <Tv className="w-3 h-3 mr-1" />
                        {isUpcoming ? "Transmisja" : "Powtórka"}
                      </a>
                    </Button>
                  )}
                  {isFinished && match.highlights && (
                    <Button size="sm" variant="outline" asChild className="text-xs h-7">
                      <a href={match.highlights} target="_blank" rel="noopener noreferrer">
                        <Trophy className="w-3 h-3 mr-1" />
                        Skróty
                      </a>
                    </Button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
