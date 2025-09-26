"use client"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, CalendarIcon } from "lucide-react"
import { mockMatches } from "@/data/mock-data"

export function MatchCalendar() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [currentMonth, setCurrentMonth] = useState(new Date())

  // Get matches for selected date
  const getMatchesForDate = (date: Date) => {
    return mockMatches.filter((match) => {
      const matchDate = new Date(match.date)
      return (
        matchDate.getDate() === date.getDate() &&
        matchDate.getMonth() === date.getMonth() &&
        matchDate.getFullYear() === date.getFullYear()
      )
    })
  }

  // Get all match dates for the current month
  const getMatchDates = () => {
    return mockMatches
      .filter((match) => {
        const matchDate = new Date(match.date)
        return (
          matchDate.getMonth() === currentMonth.getMonth() && matchDate.getFullYear() === currentMonth.getFullYear()
        )
      })
      .map((match) => new Date(match.date))
  }

  const matchDates = getMatchDates()
  const selectedMatches = selectedDate ? getMatchesForDate(selectedDate) : []

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {/* Calendar */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <CardTitle className="flex items-center space-x-2">
            <CalendarIcon className="w-5 h-5 text-primary" />
            <span>Kalendarz Meczów</span>
          </CardTitle>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <span className="text-sm font-medium min-w-[120px] text-center">
              {currentMonth.toLocaleDateString("pl-PL", { month: "long", year: "numeric" })}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            month={currentMonth}
            onMonthChange={setCurrentMonth}
            modifiers={{
              match: matchDates,
            }}
            modifiersStyles={{
              match: {
                backgroundColor: "hsl(var(--primary))",
                color: "hsl(var(--primary-foreground))",
                fontWeight: "bold",
              },
            }}
            className="rounded-md border-0"
          />
          <div className="mt-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-primary rounded-full" />
              <span>Dni z meczami</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Selected date matches */}
      <Card>
        <CardHeader>
          <CardTitle>
            {selectedDate
              ? `Mecze - ${selectedDate.toLocaleDateString("pl-PL", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}`
              : "Wybierz datę"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {selectedMatches.length > 0 ? (
            <div className="space-y-4">
              {selectedMatches.map((match) => (
                <div key={match.id} className="p-4 bg-muted/30 rounded-lg space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline" className="text-xs">
                        {match.competition}
                      </Badge>
                      <Badge variant={match.isHomeGame ? "default" : "secondary"} className="text-xs">
                        {match.isHomeGame ? "Dom" : "Wyjazd"}
                      </Badge>
                    </div>
                    <span className="text-sm font-medium">
                      {new Date(match.date).toLocaleTimeString("pl-PL", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>

                  <div className="text-center">
                    <div className="font-semibold text-lg">
                      {match.homeTeam} vs {match.awayTeam}
                    </div>
                    {match.status === "finished" && match.homeScore !== undefined && match.awayScore !== undefined && (
                      <div className="text-2xl font-bold text-primary mt-2">
                        {match.homeScore} : {match.awayScore}
                      </div>
                    )}
                  </div>

                  <div className="text-center text-sm text-muted-foreground">{match.venue}</div>

                  {match.status === "upcoming" && match.tickets && (
                    <div className="text-center">
                      <Button size="sm" asChild>
                        <a href={match.tickets} target="_blank" rel="noopener noreferrer">
                          Kup Bilety
                        </a>
                      </Button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <CalendarIcon className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">
                {selectedDate ? "Brak meczów w tym dniu" : "Wybierz datę, aby zobaczyć mecze"}
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
