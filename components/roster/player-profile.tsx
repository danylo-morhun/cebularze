"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"
import {
  ArrowLeft,
  Crown,
  Star,
  Calendar,
  MapPin,
  Ruler,
  Weight,
  Trophy,
  Target,
  Shield,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react"
import { POSITIONS } from "@/lib/constants"
import type { Player } from "@/types"
import Link from "next/link"

interface PlayerProfileProps {
  player: Player
}

export function PlayerProfile({ player }: PlayerProfileProps) {
  const maxStats = {
    goals: 50,
    assists: 60,
    points: 100,
    gamesPlayed: 50,
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back button */}
        <Button asChild variant="ghost" className="mb-6">
          <Link href="/roster">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Powrót do składu
          </Link>
        </Button>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Player info card */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardContent className="p-6">
                <div className="text-center space-y-6">
                  {/* Avatar and number */}
                  <div className="relative">
                    <Avatar className="w-32 h-32 mx-auto ring-4 ring-primary/20">
                      <AvatarImage src={player.photo || "/placeholder.svg"} alt={`${player.name} ${player.surname}`} />
                      <AvatarFallback className="text-2xl font-bold bg-primary/10">
                        {player.name[0]}
                        {player.surname[0]}
                      </AvatarFallback>
                    </Avatar>
                    <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                      {player.number}
                    </div>
                  </div>

                  {/* Name and position */}
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <h1 className="text-3xl font-bold text-foreground">
                        {player.name} {player.surname}
                      </h1>
                      {(player.isCaptain || player.isAssistantCaptain) && (
                        <div className="flex justify-center">
                          {player.isCaptain && (
                            <Badge className="bg-yellow-500 text-yellow-900">
                              <Crown className="w-3 h-3 mr-1" />
                              Kapitan
                            </Badge>
                          )}
                          {player.isAssistantCaptain && (
                            <Badge className="bg-orange-500 text-white">
                              <Star className="w-3 h-3 mr-1" />
                              Asystent kapitana
                            </Badge>
                          )}
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-center space-x-2">
                      <Badge variant="outline" className="text-sm">
                        {POSITIONS[player.position]}
                      </Badge>
                      <Badge variant="secondary" className="text-sm">
                        {player.age} lat
                      </Badge>
                    </div>
                  </div>

                  {/* Basic info */}
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>W drużynie od</span>
                      </div>
                      <span className="font-medium">{new Date(player.joinDate).getFullYear()}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>Narodowość</span>
                      </div>
                      <span className="font-medium">{player.nationality}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Ruler className="w-4 h-4" />
                        <span>Wzrost</span>
                      </div>
                      <span className="font-medium">{player.height} cm</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Weight className="w-4 h-4" />
                        <span>Waga</span>
                      </div>
                      <span className="font-medium">{player.weight} kg</span>
                    </div>
                  </div>

                  {/* Social media */}
                  {(player.socialMedia.instagram || player.socialMedia.facebook || player.socialMedia.twitter) && (
                    <>
                      <Separator />
                      <div className="space-y-3">
                        <h3 className="font-semibold text-foreground">Social Media</h3>
                        <div className="flex justify-center space-x-2">
                          {player.socialMedia.facebook && (
                            <Button size="sm" variant="outline" asChild>
                              <a href={player.socialMedia.facebook} target="_blank" rel="noopener noreferrer">
                                <Facebook className="w-4 h-4" />
                              </a>
                            </Button>
                          )}
                          {player.socialMedia.instagram && (
                            <Button size="sm" variant="outline" asChild>
                              <a href={player.socialMedia.instagram} target="_blank" rel="noopener noreferrer">
                                <Instagram className="w-4 h-4" />
                              </a>
                            </Button>
                          )}
                          {player.socialMedia.twitter && (
                            <Button size="sm" variant="outline" asChild>
                              <a href={player.socialMedia.twitter} target="_blank" rel="noopener noreferrer">
                                <Twitter className="w-4 h-4" />
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Stats and details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Biography */}
            <Card>
              <CardHeader>
                <CardTitle>Biografia</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-pretty">{player.bio}</p>
              </CardContent>
            </Card>

            {/* Season stats */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="w-5 h-5 text-primary" />
                  <span>Statystyki Sezonu 2024/25</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <div className="text-2xl font-bold text-primary">{player.stats.gamesPlayed}</div>
                    <div className="text-sm text-muted-foreground">Mecze</div>
                  </div>
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <div className="text-2xl font-bold text-primary">{player.stats.goals}</div>
                    <div className="text-sm text-muted-foreground">Bramki</div>
                  </div>
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <div className="text-2xl font-bold text-primary">{player.stats.assists}</div>
                    <div className="text-sm text-muted-foreground">Asysty</div>
                  </div>
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <div className="text-2xl font-bold text-primary">{player.stats.points}</div>
                    <div className="text-sm text-muted-foreground">Punkty</div>
                  </div>
                </div>

                {/* Progress bars */}
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Bramki</span>
                      <span className="text-sm text-muted-foreground">
                        {player.stats.goals}/{maxStats.goals}
                      </span>
                    </div>
                    <Progress value={(player.stats.goals / maxStats.goals) * 100} className="h-2" />
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Asysty</span>
                      <span className="text-sm text-muted-foreground">
                        {player.stats.assists}/{maxStats.assists}
                      </span>
                    </div>
                    <Progress value={(player.stats.assists / maxStats.assists) * 100} className="h-2" />
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Punkty</span>
                      <span className="text-sm text-muted-foreground">
                        {player.stats.points}/{maxStats.points}
                      </span>
                    </div>
                    <Progress value={(player.stats.points / maxStats.points) * 100} className="h-2" />
                  </div>
                </div>

                {/* Additional stats for goalkeepers */}
                {player.position === "GK" && player.stats.saves && (
                  <div className="mt-6 pt-6 border-t border-border">
                    <h4 className="font-semibold mb-4 flex items-center space-x-2">
                      <Shield className="w-4 h-4 text-primary" />
                      <span>Statystyki bramkarskie</span>
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center p-3 bg-muted/30 rounded-lg">
                        <div className="text-xl font-bold text-primary">{player.stats.saves}</div>
                        <div className="text-xs text-muted-foreground">Obrony</div>
                      </div>
                      <div className="text-center p-3 bg-muted/30 rounded-lg">
                        <div className="text-xl font-bold text-primary">{player.stats.goalsAgainst}</div>
                        <div className="text-xs text-muted-foreground">Stracone</div>
                      </div>
                      <div className="text-center p-3 bg-muted/30 rounded-lg">
                        <div className="text-xl font-bold text-primary">{player.stats.savePercentage}%</div>
                        <div className="text-xs text-muted-foreground">Skuteczność</div>
                      </div>
                      <div className="text-center p-3 bg-muted/30 rounded-lg">
                        <div className="text-xl font-bold text-primary">{player.stats.shutouts}</div>
                        <div className="text-xs text-muted-foreground">Czyste konta</div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Achievements */}
            {player.achievements.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Trophy className="w-5 h-5 text-primary" />
                    <span>Osiągnięcia</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {player.achievements.map((achievement) => (
                      <div key={achievement.id} className="flex items-start space-x-3 p-4 bg-muted/30 rounded-lg">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Trophy className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground">{achievement.title}</h4>
                          <p className="text-sm text-muted-foreground mt-1">{achievement.description}</p>
                          <div className="flex items-center space-x-2 mt-2">
                            <Badge variant="outline" className="text-xs">
                              {achievement.type === "individual" ? "Indywidualne" : "Drużynowe"}
                            </Badge>
                            <span className="text-xs text-muted-foreground">
                              {new Date(achievement.date).toLocaleDateString("pl-PL")}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
