"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Zap, Target, Users, Brain, Heart, Trophy, ArrowRight, Star } from "lucide-react"

const developmentAreas = [
  {
    icon: Zap,
    title: "Technika jazdy",
    description: "Podstawy jazdy na łyżwach, zwroty, hamowanie",
    progress: 85,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
  {
    icon: Target,
    title: "Strzały i podania",
    description: "Precyzja, siła strzału, technika podań",
    progress: 78,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
  },
  {
    icon: Users,
    title: "Gra zespołowa",
    description: "Współpraca, komunikacja, taktyka",
    progress: 92,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    icon: Brain,
    title: "Inteligencja gry",
    description: "Czytanie gry, podejmowanie decyzji",
    progress: 73,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Heart,
    title: "Kondycja fizyczna",
    description: "Wytrzymałość, siła, szybkość",
    progress: 88,
    color: "text-red-500",
    bgColor: "bg-red-500/10",
  },
  {
    icon: Trophy,
    title: "Mentalność zwycięzcy",
    description: "Pewność siebie, determinacja, fair play",
    progress: 95,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
]

const trainingSchedule = [
  { day: "Poniedziałek", time: "17:00-18:30", type: "Trening techniczny" },
  { day: "Środa", time: "17:00-18:30", type: "Gra zespołowa" },
  { day: "Piątek", time: "17:00-18:30", type: "Kondycja i technika" },
  { day: "Sobota", time: "10:00-11:30", type: "Trening" },
]

export function DevelopmentProgram() {
  return (
    <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4 bg-orange-500/20 text-orange-600 border-orange-500/30">
            Zapisz się na treningi
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Zapisz się na{" "}
            <span className="text-gradient bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
              treningi
            </span>{" "}
            z naszymi trenerami
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Dołącz do naszych treningów i rozwijaj swoje umiejętności hokejowe pod okiem doświadczonych trenerów
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Development areas */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Star className="w-6 h-6 text-orange-500" />
              Obszary rozwoju
            </h3>
            <div className="space-y-4">
              {developmentAreas.map((area, index) => {
                const Icon = area.icon
                return (
                  <motion.div
                    key={area.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="group hover:shadow-md transition-all duration-300">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-4">
                          <div
                            className={`p-2 rounded-lg ${area.bgColor} group-hover:scale-110 transition-transform duration-300`}
                          >
                            <Icon className={`w-5 h-5 ${area.color}`} />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-semibold">{area.title}</h4>
                              <span className={`text-sm font-bold ${area.color}`}>{area.progress}%</span>
                            </div>
                            <p className="text-sm text-muted-foreground mb-2">{area.description}</p>
                            <Progress value={area.progress} className="h-2" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Training schedule */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Target className="w-6 h-6 text-yellow-500" />
              Plan treningów
            </h3>
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-lg">Tygodniowy harmonogram</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {trainingSchedule.map((session, index) => (
                  <motion.div
                    key={session.day}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors duration-300"
                  >
                    <div>
                      <div className="font-semibold">{session.day}</div>
                      <div className="text-sm text-muted-foreground">{session.type}</div>
                    </div>
                    <Badge variant="outline" className="border-orange-500/30 text-orange-600">
                      {session.time}
                    </Badge>
                  </motion.div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-500/10 to-yellow-500/10 border-orange-500/20">
              <CardContent className="p-6">
                <h4 className="font-bold text-lg mb-2">Dołącz do nas!</h4>
                <p className="text-muted-foreground mb-4">
                  Szukamy młodych talentów w wieku 12-16 lat. Zapewniamy profesjonalne szkolenie i sprzęt.
                </p>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                  Zapisz się na treningi
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
