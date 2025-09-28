"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, ArrowRight, Star, Trophy } from "lucide-react"

// Mock junior players data
const juniorPlayers = [
  {
    id: "jp1",
    name: "Jakub",
    surname: "Kowalski",
    number: 7,
    position: "F" as const,
    age: 15,
    photo: "/young-hockey-player.jpg",
    goals: 12,
    assists: 8,
    isCaptain: true,
  },
  {
    id: "jp2",
    name: "Michał",
    surname: "Nowak",
    number: 23,
    position: "D" as const,
    age: 16,
    photo: "/young-hockey-defenseman.jpg",
    goals: 3,
    assists: 15,
    isAssistantCaptain: true,
  },
  {
    id: "jp3",
    name: "Paweł",
    surname: "Wiśniewski",
    number: 1,
    position: "GK" as const,
    age: 15,
    photo: "/young-hockey-goalie.jpg",
    saves: 245,
    savePercentage: 92.5,
  },
  {
    id: "jp4",
    name: "Kacper",
    surname: "Dąbrowski",
    number: 11,
    position: "F" as const,
    age: 14,
    photo: "/young-hockey-forward.jpg",
    goals: 8,
    assists: 12,
  },
]

const positionLabels = {
  GK: "Bramkarz",
  D: "Obrońca",
  F: "Napastnik",
}

export function JuniorRosterPreview() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-orange-500/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4 bg-orange-500/20 text-orange-600 border-orange-500/30">
            Nasz skład
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Poznaj naszych{" "}
            <span className="text-gradient bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
              młodych wojowników
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Talentowani hokeiści, którzy każdego dnia rozwijają swoje umiejętności pod okiem doświadczonych trenerów
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {juniorPlayers.map((player, index) => (
            <motion.div
              key={player.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden bg-gradient-to-b from-background to-orange-500/5">
                <CardContent className="p-0">
                  <div className="relative">
                    <Image
                      src={player.photo || "/placeholder.svg"}
                      alt={`${player.name} ${player.surname}`}
                      width={200}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-orange-500 text-white font-bold text-lg px-3 py-1">#{player.number}</Badge>
                    </div>
                    <div className="absolute top-3 right-3 flex gap-1">
                      {player.isCaptain && (
                        <Badge className="bg-yellow-500 text-black p-1">
                          <Trophy className="w-3 h-3" />
                        </Badge>
                      )}
                      {player.isAssistantCaptain && (
                        <Badge className="bg-yellow-600 text-white p-1">
                          <Star className="w-3 h-3" />
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="mb-3">
                      <h3 className="font-bold text-lg">
                        {player.name} {player.surname}
                      </h3>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>{positionLabels[player.position]}</span>
                        <span>{player.age} lat</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-sm">
                      {player.position === "GK" ? (
                        <>
                          <div className="text-center p-2 bg-muted/50 rounded">
                            <div className="font-bold text-orange-500">{player.saves}</div>
                            <div className="text-xs text-muted-foreground">Obrony</div>
                          </div>
                          <div className="text-center p-2 bg-muted/50 rounded">
                            <div className="font-bold text-yellow-500">{player.savePercentage}%</div>
                            <div className="text-xs text-muted-foreground">Skuteczność</div>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="text-center p-2 bg-muted/50 rounded">
                            <div className="font-bold text-orange-500">{player.goals}</div>
                            <div className="text-xs text-muted-foreground">Gole</div>
                          </div>
                          <div className="text-center p-2 bg-muted/50 rounded">
                            <div className="font-bold text-yellow-500">{player.assists}</div>
                            <div className="text-xs text-muted-foreground">Asysty</div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/juniors/roster">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
              <Users className="w-5 h-5 mr-2" />
              Zobacz pełny skład
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
