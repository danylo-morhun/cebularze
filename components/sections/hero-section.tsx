"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, Users, Trophy } from "lucide-react"
import { TEAM_INFO } from "@/lib/constants"

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      <div className="absolute inset-0">
        <div
          className="absolute w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          style={{
            left: `${mousePosition.x * 0.01}px`,
            top: `${mousePosition.y * 0.01}px`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 animate-slide-in-left text-center lg:text-left">
            <div className="space-y-4 lg:space-y-6">
              <div className="inline-flex items-center px-3 py-2 lg:px-4 lg:py-2 bg-primary/10 rounded-full text-xs lg:text-sm font-medium text-primary border border-primary/20">
                <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse" />
                Sezon 2024/25 - Aktualnie 3. miejsce w lidze
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-none">
                <span className="text-gradient block">CEBULARZE</span>
                <span className="text-foreground block">KALISZ</span>
                <span className="text-primary block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mt-2">
                  {TEAM_INFO.motto}
                </span>
              </h1>

              <p className="text-base lg:text-xl text-muted-foreground max-w-2xl leading-relaxed text-pretty mx-auto lg:mx-0">
                Hokejowy Klub Sportowy z {TEAM_INFO.city} - drużyna pełna determinacji i pasji. Każdy mecz to nowa
                szansa na zwycięstwo, każdy trening to krok bliżej do mistrzostwa.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:gap-4">
              <Button asChild size="lg" className="group bg-primary hover:bg-primary/90 shadow-lg w-full sm:w-auto">
                <Link href="/roster">
                  <Users className="mr-2 h-5 w-5" />
                  Poznaj Drużynę
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="group bg-transparent hover:bg-primary/10 w-full sm:w-auto"
                >
                  <Link href="/schedule">
                    <Calendar className="mr-2 h-5 w-5" />
                    Terminarz Meczów
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="group bg-primary/20 hover:bg-primary/30 text-primary w-full sm:w-auto"
                >
                  <Link href="/apply">
                    <Trophy className="mr-2 h-5 w-5" />
                    Dołącz do Drużyny
                  </Link>
                </Button>
              </div>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4 lg:gap-6 pt-6 lg:pt-8 border-t border-border/50">
              <div className="text-center">
                <div className="text-xl lg:text-2xl font-bold text-primary">18</div>
                <div className="text-xs lg:text-sm text-muted-foreground">Zwycięstwa</div>
              </div>
              <div className="text-center">
                <div className="text-xl lg:text-2xl font-bold text-primary">142</div>
                <div className="text-xs lg:text-sm text-muted-foreground">Bramki</div>
              </div>
              <div className="text-center">
                <div className="text-xl lg:text-2xl font-bold text-primary">3</div>
                <div className="text-xs lg:text-sm text-muted-foreground">Miejsce w lidze</div>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors duration-500" />

              {/* Main logo */}
              <div className="relative">
                <Image
                  src={TEAM_INFO.logo || "/placeholder.svg"}
                  alt={`${TEAM_INFO.name} Logo`}
                  width={500}
                  height={500}
                  className="relative drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
                  priority
                />

                <div
                  className="absolute inset-0 border border-primary/10 rounded-full animate-spin"
                  style={{ animationDuration: "20s" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
