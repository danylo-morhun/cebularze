"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, ArrowRight, Trophy, Users } from "lucide-react"
import { format } from "date-fns"
import { pl } from "date-fns/locale"

// Mock junior matches data
const upcomingMatches = [
  {
    id: "jm1",
    date: new Date("2024-12-15T18:00:00"),
    homeTeam: "Szczypiorki Kalisz",
    awayTeam: "Młode Orły Poznań",
    venue: "Lodowisko Miejskie w Kaliszu",
    competition: "Liga Juniorska U16",
    isHomeGame: true,
    status: "upcoming" as const,
  },
  {
    id: "jm2",
    date: new Date("2024-12-22T16:00:00"),
    homeTeam: "Lodowe Wilki Wrocław",
    awayTeam: "Szczypiorki Kalisz",
    venue: "Arena Lodowa Wrocław",
    competition: "Liga Juniorska U16",
    isHomeGame: false,
    status: "upcoming" as const,
  },
  {
    id: "jm3",
    date: new Date("2025-01-05T17:30:00"),
    homeTeam: "Szczypiorki Kalisz",
    awayTeam: "Młodzi Rycerze Kraków",
    venue: "Lodowisko Miejskie w Kaliszu",
    competition: "Puchar Polski U16",
    isHomeGame: true,
    status: "upcoming" as const,
  },
]

const recentResults = [
  {
    id: "jr1",
    date: new Date("2024-12-01T17:00:00"),
    homeTeam: "Szczypiorki Kalisz",
    awayTeam: "Lodowe Tygrysy Gdańsk",
    homeScore: 4,
    awayScore: 2,
    venue: "Lodowisko Miejskie w Kaliszu",
    competition: "Liga Juniorska U16",
    isHomeGame: true,
    status: "finished" as const,
  },
  {
    id: "jr2",
    date: new Date("2024-11-24T16:30:00"),
    homeTeam: "Młode Niedźwiedzie Katowice",
    awayTeam: "Szczypiorki Kalisz",
    homeScore: 1,
    awayScore: 3,
    venue: "Spodek Arena",
    competition: "Liga Juniorska U16",
    isHomeGame: false,
    status: "finished" as const,
  },
]

export function JuniorSchedulePreview() {
  return (
    <section className="py-20 bg-gradient-to-b from-orange-500/5 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4 bg-orange-500/20 text-orange-600 border-orange-500/30">
            Terminarz i wyniki
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nadchodzące{" "}
            <span className="text-gradient bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
              mecze
            </span>{" "}
            i ostatnie wyniki
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Śledź występy naszych młodych talentów w rozgrywkach ligowych i pucharowych
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Upcoming matches */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-orange-600">
                  <Calendar className="w-5 h-5" />
                  Nadchodzące mecze
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingMatches.map((match, index) => (
                  <motion.div
                    key={match.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 rounded-lg bg-gradient-to-r from-orange-500/5 to-yellow-500/5 border border-orange-500/20 hover:border-orange-500/40 transition-colors duration-300"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="border-orange-500/30 text-orange-600">
                        {match.competition}
                      </Badge>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        {format(match.date, "HH:mm", { locale: pl })}
                      </div>
                    </div>

                    <div className="text-center mb-3">
                      <div className="text-lg font-bold">
                        {match.homeTeam} vs {match.awayTeam}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {format(match.date, "dd MMMM yyyy", { locale: pl })}
                      </div>
                    </div>

                    <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      {match.venue}
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Recent results */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-yellow-600">
                  <Trophy className="w-5 h-5" />
                  Ostatnie wyniki
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentResults.map((match, index) => (
                  <motion.div
                    key={match.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 rounded-lg bg-gradient-to-r from-green-500/5 to-blue-500/5 border border-green-500/20 hover:border-green-500/40 transition-colors duration-300"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="border-green-500/30 text-green-600">
                        {match.competition}
                      </Badge>
                      <Badge
                        className={`${
                          (match.isHomeGame && match.homeScore! > match.awayScore!) ||
                          (!match.isHomeGame && match.awayScore! > match.homeScore!)
                            ? "bg-green-500 text-white"
                            : "bg-red-500 text-white"
                        }`}
                      >
                        {(match.isHomeGame && match.homeScore! > match.awayScore!) ||
                        (!match.isHomeGame && match.awayScore! > match.homeScore!)
                          ? "WYGRANA"
                          : "PRZEGRANA"}
                      </Badge>
                    </div>

                    <div className="text-center mb-3">
                      <div className="text-lg font-bold">
                        {match.homeTeam} {match.homeScore} - {match.awayScore} {match.awayTeam}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {format(match.date, "dd MMMM yyyy", { locale: pl })}
                      </div>
                    </div>

                    <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      {match.venue}
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/juniors/schedule">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
              <Users className="w-5 h-5 mr-2" />
              Zobacz pełny terminarz
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
