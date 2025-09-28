"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Trophy, 
  Tv, 
  ArrowLeft,
  Home,
  Plane,
  Target,
  TrendingUp,
  Activity
} from "lucide-react"
import { MATCH_STATUSES } from "@/lib/constants"
import type { Match } from "@/types"
import Link from "next/link"

interface MatchDetailProps {
  match: Match
}

export function MatchDetail({ match }: MatchDetailProps) {
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
    <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back Button */}
      <div className="mb-6">
        <Button variant="ghost" asChild className="text-muted-foreground hover:text-foreground">
          <Link href="/schedule" className="flex items-center space-x-2">
            <ArrowLeft className="w-4 h-4" />
            <span>Powrót do terminarza</span>
          </Link>
        </Button>
      </div>

      {/* Match Header */}
      <Card className="mb-8 shadow-sm">
        <CardContent className="p-8">
          <div className="text-center space-y-6">
            {/* Competition and Status */}
            <div className="flex items-center justify-center space-x-3">
              <Badge variant="outline" className="text-sm font-medium">
                {match.competition}
              </Badge>
              <Badge 
                variant={isHomeGame ? "default" : "secondary"} 
                className="text-sm font-medium"
              >
                {isHomeGame ? (
                  <>
                    <Home className="w-4 h-4 mr-1" />
                    Mecz domowy
                  </>
                ) : (
                  <>
                    <Plane className="w-4 h-4 mr-1" />
                    Mecz wyjazdowy
                  </>
                )}
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

            {/* Teams and Score */}
            <div className="space-y-4">
              <div className="text-4xl md:text-5xl font-bold text-foreground">
                {match.homeTeam} vs {match.awayTeam}
              </div>
              {isFinished && match.homeScore !== undefined && match.awayScore !== undefined && (
                <div className="text-6xl md:text-7xl font-bold text-primary">
                  {match.homeScore} : {match.awayScore}
                </div>
              )}
            </div>

            {/* Match Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                <Calendar className="w-5 h-5" />
                <span className="text-sm">
                  {new Date(match.date).toLocaleDateString("pl-PL", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                <Clock className="w-5 h-5" />
                <span className="text-sm">
                  {new Date(match.date).toLocaleTimeString("pl-PL", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                <MapPin className="w-5 h-5" />
                <span className="text-sm">{match.venue}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              {match.stream && (
                <Button size="lg" asChild>
                  <a href={match.stream} target="_blank" rel="noopener noreferrer">
                    <Tv className="w-5 h-5 mr-2" />
                    {isUpcoming ? "Oglądaj transmisję" : "Zobacz powtórkę"}
                  </a>
                </Button>
              )}
              {isFinished && match.highlights && (
                <Button size="lg" variant="outline" asChild>
                  <a href={match.highlights} target="_blank" rel="noopener noreferrer">
                    <Trophy className="w-5 h-5 mr-2" />
                    Zobacz skróty
                  </a>
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Match Statistics */}
      {isFinished && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Team Statistics */}
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="w-5 h-5 text-primary" />
                <span>Statystyki Meczu</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <div className="text-2xl font-bold text-foreground">
                    {Math.floor(Math.random() * 30) + 20}
                  </div>
                  <div className="text-sm text-muted-foreground">Strzały na bramkę</div>
                </div>
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <div className="text-2xl font-bold text-foreground">
                    {Math.floor(Math.random() * 15) + 5}
                  </div>
                  <div className="text-sm text-muted-foreground">Minuty karne</div>
                </div>
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <div className="text-2xl font-bold text-foreground">
                    {Math.floor(Math.random() * 10) + 1}
                  </div>
                  <div className="text-sm text-muted-foreground">Wykorzystane przewagi</div>
                </div>
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <div className="text-2xl font-bold text-foreground">
                    {Math.floor(Math.random() * 20) + 10}
                  </div>
                  <div className="text-sm text-muted-foreground">Wygrane wznowienia</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Player Statistics */}
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                <span>Najlepsi Zawodnicy</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-primary">1</span>
                    </div>
                    <div>
                      <div className="font-semibold">Patryk Topcio</div>
                      <div className="text-sm text-muted-foreground">2 bramki, 1 asysta</div>
                    </div>
                  </div>
                  <Badge variant="secondary">3 pkt</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-primary">2</span>
                    </div>
                    <div>
                      <div className="font-semibold">Dominik Gizmo</div>
                      <div className="text-sm text-muted-foreground">Bramkarz</div>
                    </div>
                  </div>
                  <Badge variant="secondary">92% obron</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-primary">3</span>
                    </div>
                    <div>
                      <div className="font-semibold">Michał Kowalski</div>
                      <div className="text-sm text-muted-foreground">1 bramka, 2 asysty</div>
                    </div>
                  </div>
                  <Badge variant="secondary">3 pkt</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Match Information */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Match Details */}
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Activity className="w-5 h-5 text-primary" />
              <span>Informacje o Meczu</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Rozgrywki:</span>
                <span className="font-medium">{match.competition}</span>
              </div>
              <Separator />
              <div className="flex justify-between">
                <span className="text-muted-foreground">Miejsce:</span>
                <span className="font-medium">{match.venue}</span>
              </div>
              <Separator />
              <div className="flex justify-between">
                <span className="text-muted-foreground">Data i godzina:</span>
                <span className="font-medium">
                  {new Date(match.date).toLocaleDateString("pl-PL")} o{" "}
                  {new Date(match.date).toLocaleTimeString("pl-PL", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>
              {match.referee && (
                <>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sędzia główny:</span>
                    <span className="font-medium">{match.referee}</span>
                  </div>
                </>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Match Report */}
        {match.matchReport && (
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Trophy className="w-5 h-5 text-primary" />
                <span>Relacja z Meczu</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                {match.matchReport}
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
