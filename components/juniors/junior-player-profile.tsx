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
  TrendingUp,
  Users,
  Phone,
  Mail,
  GraduationCap,
} from "lucide-react"
import { POSITIONS } from "@/lib/constants"
import type { JuniorPlayer } from "@/types"
import Link from "next/link"

interface JuniorPlayerProfileProps {
  player: JuniorPlayer
}

export function JuniorPlayerProfile({ player }: JuniorPlayerProfileProps) {
  const maxStats = {
    goals: 30,
    assists: 40,
    points: 60,
  }

  const developmentSkills = [
    { name: "Jazda na łyżwach", value: player.development.skating, max: 10 },
    { name: "Strzały", value: player.development.shooting, max: 10 },
    { name: "Podania", value: player.development.passing, max: 10 },
    { name: "Obrona", value: player.development.defense, max: 10 },
    { name: "Inteligencja gry", value: player.development.gameIQ, max: 10 },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-orange-500/5">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back button */}
        <Button asChild variant="ghost" className="mb-6">
          <Link href="/juniors/roster">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Powrót do składu juniorów
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
                    <Avatar className="w-32 h-32 mx-auto ring-4 ring-orange-500/20">
                      <AvatarImage src={player.photo || "/placeholder.svg"} alt={`${player.name} ${player.surname}`} />
                      <AvatarFallback className="text-2xl font-bold bg-orange-500/10">
                        {player.name[0]}
                        {player.surname[0]}
                      </AvatarFallback>
                    </Avatar>
                    <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                      {player.number}
                    </div>
                  </div>

                  {/* Name and position */}
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <h1 className="text-3xl font-bold text-gradient-primary">
                        {player.name.toUpperCase()} {player.surname.toUpperCase()}
                      </h1>
                      {player.isCaptain && (
                        <div className="flex justify-center">
                          <Badge className="bg-orange-500 text-white">
                            <Crown className="w-3 h-3 mr-1" />
                            Kapitan
                          </Badge>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-center space-x-2">
                      <Badge variant="outline" className="text-sm border-orange-500/30">
                        {POSITIONS[player.position]}
                      </Badge>
                      <Badge variant="secondary" className="text-sm bg-orange-500/10">
                        {player.age} lat
                      </Badge>
                    </div>
                  </div>

                  <Separator />

                  {/* Physical stats */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">Dane fizyczne</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-2 text-muted-foreground mb-1">
                          <Ruler className="w-4 h-4" />
                          <span className="text-sm">Wzrost</span>
                        </div>
                        <div className="font-semibold">{player.height} cm</div>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-2 text-muted-foreground mb-1">
                          <Weight className="w-4 h-4" />
                          <span className="text-sm">Waga</span>
                        </div>
                        <div className="font-semibold">{player.weight} kg</div>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* School info */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-foreground">Szkoła</h3>
                    <div className="flex items-center justify-center gap-2 text-muted-foreground">
                      <GraduationCap className="w-4 h-4" />
                      <span className="text-sm text-center">{player.school}</span>
                    </div>
                  </div>

                  <Separator />

                  {/* Contact info */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-foreground">Kontakt z rodzicem</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Users className="w-4 h-4" />
                        <span>{player.parentName}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Phone className="w-4 h-4" />
                        <span>{player.parentPhone}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Mail className="w-4 h-4" />
                        <span className="truncate">{player.parentEmail}</span>
                      </div>
                    </div>
                  </div>

                  {/* Social media */}
                  {player.socialMedia && (
                    <>
                      <Separator />
                      <div className="space-y-3">
                        <h3 className="text-lg font-semibold text-foreground">Media społecznościowe</h3>
                        <div className="flex justify-center space-x-3">
                          {player.socialMedia.instagram && (
                            <Button variant="outline" size="sm" asChild>
                              <a href={player.socialMedia.instagram} target="_blank" rel="noopener noreferrer">
                                <Instagram className="w-4 h-4" />
                              </a>
                            </Button>
                          )}
                          {player.socialMedia.facebook && (
                            <Button variant="outline" size="sm" asChild>
                              <a href={player.socialMedia.facebook} target="_blank" rel="noopener noreferrer">
                                <Facebook className="w-4 h-4" />
                              </a>
                            </Button>
                          )}
                          {player.socialMedia.twitter && (
                            <Button variant="outline" size="sm" asChild>
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

          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Bio */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-orange-500" />
                  O zawodniku
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{player.bio}</p>
              </CardContent>
            </Card>

            {/* Season stats */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-orange-500" />
                  Statystyki sezonu
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500">{player.stats.goals}</div>
                    <div className="text-sm text-muted-foreground">Bramki</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500">{player.stats.assists}</div>
                    <div className="text-sm text-muted-foreground">Asysty</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500">{player.stats.points}</div>
                    <div className="text-sm text-muted-foreground">Punkty</div>
                  </div>
                </div>
                <Separator className="my-6" />
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-500">{player.stats.penaltyMinutes}</div>
                    <div className="text-sm text-muted-foreground">Minuty kar</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-500">{player.stats.plusMinus}</div>
                    <div className="text-sm text-muted-foreground">+/-</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-500">{player.stats.averageIceTime}</div>
                    <div className="text-sm text-muted-foreground">Śr. czas na lodzie</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Development progress */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-orange-500" />
                  Rozwój umiejętności
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {developmentSkills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.value}/{skill.max}</span>
                      </div>
                      <Progress value={(skill.value / skill.max) * 100} className="h-2" />
                    </div>
                  ))}
                </div>
                <Separator className="my-6" />
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Notatki trenera</h4>
                  <p className="text-muted-foreground leading-relaxed">{player.development.coachNotes}</p>
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            {player.achievements && player.achievements.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-orange-500" />
                    Osiągnięcia
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {player.achievements.map((achievement) => (
                      <div key={achievement.id} className="flex items-start gap-3 p-4 rounded-lg bg-orange-500/5 border border-orange-500/20">
                        <Trophy className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                        <div className="space-y-1">
                          <h4 className="font-semibold text-foreground">{achievement.title}</h4>
                          <p className="text-sm text-muted-foreground">{achievement.description}</p>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Calendar className="w-3 h-3" />
                            {achievement.date.toLocaleDateString("pl-PL")}
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
