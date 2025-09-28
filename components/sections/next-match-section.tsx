"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Clock, Tv } from "lucide-react"
import { mockMatches } from "@/data/mock-data"

export function NextMatchSection() {
  const [timeLeft, setTimeLeft] = useState<{
    days: number
    hours: number
    minutes: number
    seconds: number
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  const nextMatch = mockMatches.find((match) => match.status === "upcoming")

  useEffect(() => {
    if (!nextMatch) return

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const matchTime = new Date(nextMatch.date).getTime()
      const difference = matchTime - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [nextMatch])

  if (!nextMatch) return null

  return (
    <section className="py-16 bg-gradient-to-r from-primary/5 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Następny Mecz</h2>
          <p className="text-muted-foreground text-lg">Nie przegap naszego kolejnego starcia!</p>
        </div>

        <Card className="max-w-4xl mx-auto bg-card/50 backdrop-blur-sm border-primary/20 shadow-2xl">
          <CardHeader className="text-center pb-4">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                {nextMatch.competition}
              </Badge>
              <Badge variant={nextMatch.isHomeGame ? "default" : "secondary"}>
                {nextMatch.isHomeGame ? "Mecz domowy" : "Mecz wyjazdowy"}
              </Badge>
            </div>
            <CardTitle className="text-2xl md:text-3xl font-bold">
              {nextMatch.homeTeam} vs {nextMatch.awayTeam}
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-8">
            {/* Match details */}
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="flex items-center justify-center space-x-2">
                <Calendar className="w-5 h-5 text-primary" />
                <span className="font-medium">
                  {new Date(nextMatch.date).toLocaleDateString("pl-PL", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Clock className="w-5 h-5 text-primary" />
                <span className="font-medium">
                  {new Date(nextMatch.date).toLocaleTimeString("pl-PL", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="font-medium">{nextMatch.venue}</span>
              </div>
            </div>

            {/* Countdown */}
            <div className="bg-primary/5 rounded-lg p-6">
              <h3 className="text-center text-lg font-semibold mb-4 text-foreground">Do meczu pozostało:</h3>
              <div className="grid grid-cols-4 gap-4 text-center">
                {[
                  { label: "Dni", value: timeLeft.days },
                  { label: "Godzin", value: timeLeft.hours },
                  { label: "Minut", value: timeLeft.minutes },
                  { label: "Sekund", value: timeLeft.seconds },
                ].map((item) => (
                  <div key={item.label} className="bg-card rounded-lg p-4 shadow-sm">
                    <div className="text-2xl md:text-3xl font-bold text-primary">
                      {item.value.toString().padStart(2, "0")}
                    </div>
                    <div className="text-sm text-muted-foreground">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {nextMatch.stream && (
                <Button asChild size="lg" variant="outline">
                  <a href={nextMatch.stream} target="_blank" rel="noopener noreferrer">
                    <Tv className="mr-2 h-4 w-4" />
                    Oglądaj Online
                  </a>
                </Button>
              )}
              <Button asChild size="lg" variant="ghost" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <a href="/schedule">
                  <Calendar className="mr-2 h-4 w-4" />
                  Pełny Terminarz
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
