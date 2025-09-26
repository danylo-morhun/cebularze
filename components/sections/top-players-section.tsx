"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Trophy, Target, Users, ArrowRight } from "lucide-react"
import { mockPlayers } from "@/data/mock-data"
import { POSITIONS } from "@/lib/constants"
import Link from "next/link"

export function TopPlayersSection() {
  const [selectedCategory, setSelectedCategory] = useState<"goals" | "assists" | "points">("goals")

  const getTopPlayers = () => {
    const sortedPlayers = [...mockPlayers].sort((a, b) => {
      switch (selectedCategory) {
        case "goals":
          return b.stats.goals - a.stats.goals
        case "assists":
          return b.stats.assists - a.stats.assists
        case "points":
          return b.stats.points - a.stats.points
        default:
          return 0
      }
    })
    return sortedPlayers.slice(0, 3)
  }

  const topPlayers = getTopPlayers()

  const categories = [
    { key: "goals" as const, label: "Bramki", icon: Target },
    { key: "assists" as const, label: "Asysty", icon: Users },
    { key: "points" as const, label: "Punkty", icon: Trophy },
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Najlepsi Zawodnicy</h2>
          <p className="text-muted-foreground text-lg">Poznaj gwiazdy naszej drużyny</p>
        </div>

        {/* Category selector */}
        <div className="flex justify-center mb-8">
          <div className="flex bg-muted rounded-lg p-1">
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <Button
                  key={category.key}
                  variant={selectedCategory === category.key ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.key)}
                  className={`transition-all duration-300 ${
                    selectedCategory === category.key ? "bg-primary text-primary-foreground shadow-lg" : ""
                  }`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {category.label}
                </Button>
              )
            })}
          </div>
        </div>

        {/* Top players grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {topPlayers.map((player, index) => (
            <Card
              key={player.id}
              className={`group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                index === 0 ? "ring-2 ring-primary/50 bg-gradient-to-br from-primary/5 to-transparent" : ""
              }`}
            >
              <CardContent className="p-6 text-center space-y-4">
                {/* Ranking badge */}
                <div className="relative">
                  <Avatar className="w-24 h-24 mx-auto ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300">
                    <AvatarImage src={player.photo || "/placeholder.svg"} alt={`${player.name} ${player.surname}`} />
                    <AvatarFallback className="text-lg font-bold bg-primary/10">
                      {player.name[0]}
                      {player.surname[0]}
                    </AvatarFallback>
                  </Avatar>
                  <Badge
                    className={`absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                      index === 0
                        ? "bg-yellow-500 text-yellow-900"
                        : index === 1
                          ? "bg-gray-400 text-gray-900"
                          : "bg-amber-600 text-amber-100"
                    }`}
                  >
                    {index + 1}
                  </Badge>
                </div>

                {/* Player info */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-foreground">
                    {player.name} {player.surname}
                  </h3>
                  <div className="flex items-center justify-center space-x-2">
                    <Badge variant="outline" className="text-xs">
                      #{player.number}
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      {POSITIONS[player.position]}
                    </Badge>
                    {player.isCaptain && <Badge className="text-xs bg-primary">Kapitan</Badge>}
                  </div>
                </div>

                {/* Stats */}
                <div className="bg-muted/50 rounded-lg p-4">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">{player.stats.goals}</div>
                      <div className="text-xs text-muted-foreground">Bramki</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">{player.stats.assists}</div>
                      <div className="text-xs text-muted-foreground">Asysty</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">{player.stats.points}</div>
                      <div className="text-xs text-muted-foreground">Punkty</div>
                    </div>
                  </div>
                </div>

                {/* Highlight stat */}
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient">
                    {selectedCategory === "goals"
                      ? player.stats.goals
                      : selectedCategory === "assists"
                        ? player.stats.assists
                        : player.stats.points}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {categories.find((c) => c.key === selectedCategory)?.label} w sezonie
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" variant="outline" className="group bg-transparent">
            <Link href="/roster">
              <Users className="mr-2 h-4 w-4" />
              Zobacz Pełny Skład
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
