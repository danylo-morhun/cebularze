"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Crown, Star, ArrowRight, Calendar, MapPin } from "lucide-react"
import { POSITIONS } from "@/lib/constants"
import type { Player } from "@/types"
import Link from "next/link"

interface PlayerCardProps {
  player: Player
}

export function PlayerCard({ player }: PlayerCardProps) {
  return (
    <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
      <div className="relative">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />

        {/* Captain/Assistant badges */}
        {player.isCaptain && (
          <Badge className="absolute top-3 left-3 bg-yellow-500 text-yellow-900 z-10">
            <Crown className="w-3 h-3 mr-1" />
            Kapitan
          </Badge>
        )}
        {player.isAssistantCaptain && (
          <Badge className="absolute top-3 left-3 bg-orange-500 text-white z-10">
            <Star className="w-3 h-3 mr-1" />
            Asystent
          </Badge>
        )}

        <CardContent className="p-6 relative">
          <div className="text-center space-y-4">
            {/* Player avatar and number */}
            <div className="relative">
              <Avatar className="w-20 h-20 mx-auto ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300">
                <AvatarImage src={player.photo || "/placeholder.svg"} alt={`${player.name} ${player.surname}`} />
                <AvatarFallback className="text-lg font-bold bg-primary/10">
                  {player.name[0]}
                  {player.surname[0]}
                </AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                {player.number}
              </div>
            </div>

            {/* Player info */}
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                {player.name} {player.surname}
              </h3>
              <div className="flex items-center justify-center space-x-2">
                <Badge variant="outline" className="text-xs">
                  {POSITIONS[player.position]}
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  {player.age} lat
                </Badge>
              </div>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-3 py-3 bg-muted/30 rounded-lg">
              <div className="text-center">
                <div className="text-lg font-bold text-primary">{player.stats.goals}</div>
                <div className="text-xs text-muted-foreground">Bramki</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-primary">{player.stats.assists}</div>
                <div className="text-xs text-muted-foreground">Asysty</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-primary">{player.stats.points}</div>
                <div className="text-xs text-muted-foreground">Punkty</div>
              </div>
            </div>

            {/* Additional info */}
            <div className="space-y-2 text-xs text-muted-foreground">
              <div className="flex items-center justify-center space-x-1">
                <Calendar className="w-3 h-3" />
                <span>W drużynie od {new Date(player.joinDate).getFullYear()}</span>
              </div>
              <div className="flex items-center justify-center space-x-1">
                <MapPin className="w-3 h-3" />
                <span>{player.nationality}</span>
              </div>
            </div>

            {/* View profile button */}
            <Button asChild size="sm" variant="outline" className="w-full group/btn bg-transparent">
              <Link href={`/roster/${player.id}`}>
                Zobacz profil
                <ArrowRight className="ml-2 h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </div>
    </Card>
  )
}
