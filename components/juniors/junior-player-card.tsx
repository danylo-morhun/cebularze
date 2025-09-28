"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Crown, Star, ArrowRight, Calendar, MapPin, TrendingUp } from "lucide-react"
import { POSITIONS } from "@/lib/constants"
import type { JuniorPlayer } from "@/types"
import Link from "next/link"

interface JuniorPlayerCardProps {
  player: JuniorPlayer
}

export function JuniorPlayerCard({ player }: JuniorPlayerCardProps) {
  return (
    <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
      <div className="relative">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-yellow-500/5" />

        {/* Captain badge */}
        {player.isCaptain && (
          <Badge className="absolute top-3 left-3 bg-orange-500 text-white z-10">
            <Crown className="w-3 h-3 mr-1" />
            Kapitan
          </Badge>
        )}

        <CardContent className="p-6 relative">
          <div className="text-center space-y-4">
            {/* Player avatar and number */}
            <div className="relative">
              <Avatar className="w-20 h-20 mx-auto ring-4 ring-orange-500/20 group-hover:ring-orange-500/40 transition-all duration-300">
                <AvatarImage src={player.photo || "/placeholder.svg"} alt={`${player.name} ${player.surname}`} />
                <AvatarFallback className="text-lg font-bold bg-orange-500/10">
                  {player.name[0]}
                  {player.surname[0]}
                </AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                {player.number}
              </div>
            </div>

            {/* Player info */}
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-foreground group-hover:text-orange-600 transition-colors">
                {player.name} {player.surname}
              </h3>
              <div className="flex items-center justify-center space-x-2">
                <Badge variant="outline" className="text-xs border-orange-500/30">
                  {POSITIONS[player.position]}
                </Badge>
                <Badge variant="secondary" className="text-xs bg-orange-500/10">
                  {player.age} lat
                </Badge>
              </div>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-3 py-3 bg-muted/30 rounded-lg">
              <div className="text-center">
                <div className="text-lg font-bold text-orange-500">{player.stats.goals}</div>
                <div className="text-xs text-muted-foreground">Bramki</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-orange-500">{player.stats.assists}</div>
                <div className="text-xs text-muted-foreground">Asysty</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-orange-500">{player.stats.points}</div>
                <div className="text-xs text-muted-foreground">Punkty</div>
              </div>
            </div>

            {/* Development progress */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Poziom umiejętności</span>
                <span className="font-semibold text-orange-600">{player.development.skillLevel}/5</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-orange-500 to-yellow-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${(player.development.skillLevel / 5) * 100}%` }}
                />
              </div>
            </div>

            {/* School info */}
            <div className="text-sm text-muted-foreground">
              <div className="flex items-center justify-center gap-1">
                <MapPin className="w-3 h-3" />
                {player.school}
              </div>
            </div>

            {/* View profile button */}
            <Link href={`/juniors/roster/${player.id}`}>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full border-orange-500/30 hover:bg-orange-500/10 group-hover:border-orange-500/50 transition-all duration-300"
              >
                Zobacz profil
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </CardContent>
      </div>
    </Card>
  )
}
