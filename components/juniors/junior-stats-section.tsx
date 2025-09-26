"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Users, Target, TrendingUp, Award, Calendar } from "lucide-react"

const stats = [
  {
    icon: Users,
    label: "Aktywni zawodnicy",
    value: "25",
    change: "+3",
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
  {
    icon: Trophy,
    label: "Zdobyte medale",
    value: "15",
    change: "+2",
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
  },
  {
    icon: Target,
    label: "Skuteczność gry",
    value: "78%",
    change: "+5%",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    icon: TrendingUp,
    label: "Awanse do seniorów",
    value: "12",
    change: "+4",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Award,
    label: "Indywidualne nagrody",
    value: "28",
    change: "+6",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    icon: Calendar,
    label: "Rozegranych meczów",
    value: "45",
    change: "+12",
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
  },
]

export function JuniorStatsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4 bg-orange-500/20 text-orange-600 border-orange-500/30">
            Statystyki sezonu 2024/25
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nasze{" "}
            <span className="text-gradient bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
              osiągnięcia
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Szczypiorki Kalisz to nie tylko drużyna - to miejsce gdzie młodzi hokeiści rozwijają swoje umiejętności i
            pasję do sportu
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-background to-muted/30">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`p-3 rounded-lg ${stat.bgColor} group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className={`w-6 h-6 ${stat.color}`} />
                      </div>
                      <Badge variant="secondary" className="text-xs bg-green-500/20 text-green-600">
                        {stat.change}
                      </Badge>
                    </div>
                    <div className="space-y-2">
                      <div className={`text-3xl font-bold ${stat.color}`}>{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
