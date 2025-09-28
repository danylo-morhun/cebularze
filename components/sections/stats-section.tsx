"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { TrendingUp, TrendingDown, Target, Shield, Zap, Trophy, Crown } from "lucide-react"
import { mockTeamStats, mockPlayers } from "@/data/mock-data"

export function StatsSection() {
  const stats = mockTeamStats

  const statCards = [
    {
      title: "Mecze Rozegrane",
      value: stats.gamesPlayed,
      icon: Trophy,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      title: "Zwycięstwa",
      value: stats.wins,
      icon: TrendingUp,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      percentage: stats.winPercentage,
    },
    {
      title: "Bramki Strzelone",
      value: stats.goalsFor,
      icon: Target,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      title: "Bramki Stracone",
      value: stats.goalsAgainst,
      icon: Shield,
      color: "text-red-500",
      bgColor: "bg-red-500/10",
    },
    {
      title: "Punkty",
      value: stats.points,
      icon: Zap,
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
    },
    {
      title: "Pozycja w Lidze",
      value: stats.position,
      icon: Trophy,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      suffix: ".",
    },
  ]

  const topScorers = mockPlayers
    .filter((player) => player.position !== "GK")
    .map((player) => ({
      ...player,
      totalPoints: player.stats.goals + player.stats.assists,
    }))
    .sort((a, b) => b.totalPoints - a.totalPoints)
    .slice(0, 5)

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Statystyki Sezonu</h2>
          <p className="text-muted-foreground text-lg">Sezon 2025/26 - Aktualne wyniki</p>
        </div>

        {/* Main stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {statCards.map((stat) => {
            const Icon = stat.icon
            return (
              <Card key={stat.title} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-4 text-center">
                  <div className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                    <Icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <div className="space-y-1">
                    <div className="text-2xl font-bold text-foreground">
                      {stat.value}
                      {stat.suffix}
                    </div>
                    <div className="text-xs text-muted-foreground">{stat.title}</div>
                    {stat.percentage && <div className="text-xs text-primary font-medium">{stat.percentage}%</div>}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Detailed stats */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Crown className="w-5 h-5 text-primary" />
                <span>Najlepsi Strzelcy</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {topScorers.map((player, index) => (
                <div
                  key={player.id}
                  className={`flex items-center space-x-4 p-3 rounded-lg transition-colors ${
                    index === 0
                      ? "bg-primary/10 border border-primary/20"
                      : index === 1
                        ? "bg-yellow-500/10 border border-yellow-500/20"
                        : index === 2
                          ? "bg-orange-500/10 border border-orange-500/20"
                          : "bg-muted/50"
                  }`}
                >
                  <div className="flex items-center space-x-3 flex-1">
                    <div className="relative">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={player.photo || "/placeholder.svg"} alt={player.name} />
                        <AvatarFallback className="text-xs">
                          {player.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      {index < 3 && (
                        <div
                          className={`absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${
                            index === 0
                              ? "bg-primary text-primary-foreground"
                              : index === 1
                                ? "bg-yellow-500 text-yellow-900"
                                : "bg-orange-500 text-white"
                          }`}
                        >
                          {index + 1}
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-sm truncate">{player.name}</div>
                      <div className="text-xs text-muted-foreground">#{player.number}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-primary">{player.totalPoints}</div>
                    <div className="text-xs text-muted-foreground">
                      {player.stats.goals}G + {player.stats.assists}A
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Season comparison */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Trophy className="w-5 h-5 text-primary" />
                <span>Bilans Sezonu</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-green-500/10 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-green-500" />
                    <span className="font-medium">Zwycięstwa</span>
                  </div>
                  <Badge className="bg-green-500 text-white">{stats.wins}</Badge>
                </div>

                <div className="flex items-center justify-between p-3 bg-red-500/10 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <TrendingDown className="w-4 h-4 text-red-500" />
                    <span className="font-medium">Porażki</span>
                  </div>
                  <Badge variant="destructive">{stats.losses}</Badge>
                </div>

                <div className="flex items-center justify-between p-3 bg-yellow-500/10 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Target className="w-4 h-4 text-yellow-500" />
                    <span className="font-medium">Remisy</span>
                  </div>
                  <Badge className="bg-yellow-500 text-yellow-900">{stats.draws}</Badge>
                </div>

                <div className="flex items-center justify-between p-3 bg-orange-500/10 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Shield className="w-4 h-4 text-orange-500" />
                    <span className="font-medium">Porażki po dogrywce</span>
                  </div>
                  <Badge className="bg-orange-500 text-white">{stats.overtimeLosses}</Badge>
                </div>
              </div>

              <div className="mt-6 p-4 bg-primary/5 rounded-lg text-center">
                <div className="text-2xl font-bold text-primary">{stats.points}</div>
                <div className="text-sm text-muted-foreground">Punkty w sezonie</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
