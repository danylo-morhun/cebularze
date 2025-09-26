"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Users, Ticket, Tv, Trophy } from "lucide-react"
import { MATCH_STATUSES } from "@/lib/constants"
import type { Match } from "@/types"

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
            : ""
      }`}
    >
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
          {/* Match info */}
          <div className="flex-1 space-y-3">
            {/* Header with badges */}
            <div className="flex items-center space-x-2">
              <Badge variant="outline" className="text-xs">
                {match.competition}
              </Badge>
              <Badge variant={isHomeGame ? "default" : "secondary"} className="text-xs">
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

            {/* Teams and score */}
            <div className="flex items-center space-x-4">
              <div className="text-lg font-semibold text-foreground">
                {match.homeTeam} vs {match.awayTeam}
              </div>
              {isFinished && match.homeScore !== undefined && match.awayScore !== undefined && (
                <div className="text-2xl font-bold text-primary">
                  {match.homeScore} : {match.awayScore}
                </div>
              )}
            </div>

            {/* Match details */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>
                  {new Date(match.date).toLocaleDateString("pl-PL", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                  })}
                </span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>
                  {new Date(match.date).toLocaleTimeString("pl-PL", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>
              <div className="flex items-center space-x-1">
                <MapPin className="w-4 h-4" />
                <span>{match.venue}</span>
              </div>
              {match.attendance && (
                <div className="flex items-center space-x-1">
                  <Users className="w-4 h-4" />
                  <span>{match.attendance.toLocaleString()} widzów</span>
                </div>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-2">
            {isUpcoming && match.tickets && (
              <Button size="sm" asChild>
                <a href={match.tickets} target="_blank" rel="noopener noreferrer">
                  <Ticket className="w-4 h-4 mr-2" />
                  Bilety
                </a>
              </Button>
            )}
            {match.stream && (
              <Button size="sm" variant="outline" asChild>
                <a href={match.stream} target="_blank" rel="noopener noreferrer">
                  <Tv className="w-4 h-4 mr-2" />
                  {isUpcoming ? "Transmisja" : "Powtórka"}
                </a>
              </Button>
            )}
            {isFinished && match.highlights && (
              <Button size="sm" variant="outline" asChild>
                <a href={match.highlights} target="_blank" rel="noopener noreferrer">
                  <Trophy className="w-4 h-4 mr-2" />
                  Skróty
                </a>
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
