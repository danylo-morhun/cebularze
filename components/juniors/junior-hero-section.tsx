"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, Trophy, Target, Star } from "lucide-react"
import { JUNIOR_TEAM_INFO } from "@/lib/constants"

export function JuniorHeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-500/10 via-yellow-500/5 to-green-500/10">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-orange-400/20 rounded-full"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 8 + i * 0.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-center lg:justify-start gap-2 mb-4"
            >
              <Badge variant="secondary" className="bg-orange-500/20 text-orange-600 border-orange-500/30">
                Drużyna Juniorska
              </Badge>
              <Badge variant="outline" className="border-yellow-500/30 text-yellow-600">
                {JUNIOR_TEAM_INFO.ageGroup}
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance"
            >
              <span className="bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-600 bg-clip-text text-transparent">
                SZCZYPIORKI
              </span>
              <br />
              <span className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground">KALISZ</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl text-pretty"
            >
              {JUNIOR_TEAM_INFO.motto} - rozwijamy młode talenty i budujemy przyszłość polskiego hokeja
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                <Users className="w-5 h-5 mr-2" />
                Zobacz skład
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-yellow-500/30 hover:bg-yellow-500/10 bg-transparent"
              >
                <Trophy className="w-5 h-5 mr-2" />
                Program rozwoju
              </Button>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-orange-500">25</div>
                <div className="text-sm text-muted-foreground">Zawodników</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-yellow-500">8</div>
                <div className="text-sm text-muted-foreground">Lat działania</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-green-500">15</div>
                <div className="text-sm text-muted-foreground">Medali</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-orange-500">3</div>
                <div className="text-sm text-muted-foreground">Trenerów</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Logo and visual elements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            <motion.div
              animate={{
                rotate: [0, 5, -5, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-full blur-3xl scale-150" />
              <Image
                src={JUNIOR_TEAM_INFO.logo || "/placeholder.svg"}
                alt="Szczypiorki Kalisz Logo"
                width={400}
                height={400}
                className="relative z-10 drop-shadow-2xl"
                priority
              />
            </motion.div>

            {/* Floating elements */}
            <motion.div
              animate={{
                y: [-10, 10, -10],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="absolute top-10 right-10 w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center"
            >
              <Star className="w-6 h-6 text-orange-500" />
            </motion.div>

            <motion.div
              animate={{
                y: [10, -10, 10],
                rotate: [360, 180, 0],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="absolute bottom-10 left-10 w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center"
            >
              <Target className="w-6 h-6 text-yellow-500" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
