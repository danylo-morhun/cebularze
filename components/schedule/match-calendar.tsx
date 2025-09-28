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
    <div className="space-y-8">
      {/* Calendar Section */}
      <Card className="shadow-sm">
        <CardHeader className="pb-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-4 sm:space-y-0">
            <CardTitle className="flex items-center space-x-3 text-xl">
              <div className="p-2 bg-primary/10 rounded-lg">
                <CalendarIcon className="w-6 h-6 text-primary" />
              </div>
              <span>Kalendarz Meczów</span>
            </CardTitle>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
                className="h-9"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <div className="px-4 py-2 bg-muted/50 rounded-lg min-w-[160px] text-center">
                <span className="text-sm font-semibold">
                  {currentMonth.toLocaleDateString("pl-PL", { month: "long", year: "numeric" })}
                </span>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
                className="h-9"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex justify-center">
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
              className="rounded-lg shadow-sm"
            />
          </div>
          
          <div className="flex items-center justify-center space-x-4 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-primary rounded-full" />
              <span className="text-muted-foreground">Dni z meczami</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-muted-foreground/30 rounded-full" />
              <span className="text-muted-foreground">Dni bez meczów</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Selected Date Matches */}
      <Card className="shadow-sm">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center space-x-3 text-xl">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <CalendarIcon className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              {selectedDate ? (
                <div>
                  <div className="text-lg font-semibold">
                    {selectedDate.toLocaleDateString("pl-PL", {
                      weekday: "long",
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </div>
                  <div className="text-sm text-muted-foreground font-normal">
                    {selectedMatches.length} mecz{selectedMatches.length !== 1 ? 'ów' : ''}
                  </div>
                </div>
              ) : (
                <div>
                  <div className="text-lg font-semibold">Wybierz datę</div>
                  <div className="text-sm text-muted-foreground font-normal">
                    Kliknij na datę w kalendarzu, aby zobaczyć mecze
                  </div>
                </div>
              )}
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {selectedMatches.length > 0 ? (
            <div className="space-y-4">
              {selectedMatches.map((match) => (
                <Card key={match.id} className="bg-gradient-to-r from-muted/30 to-muted/10">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {/* Match Header */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline" className="text-xs font-medium">
                            {match.competition}
                          </Badge>
                          <Badge 
                            variant={match.isHomeGame ? "default" : "secondary"} 
                            className="text-xs font-medium"
                          >
                            {match.isHomeGame ? "Dom" : "Wyjazd"}
                          </Badge>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-semibold text-foreground">
                            {new Date(match.date).toLocaleTimeString("pl-PL", {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </div>
                        </div>
                      </div>

                      {/* Teams and Score */}
                      <div className="text-center space-y-2">
                        <div className="font-semibold text-xl text-foreground">
                          {match.homeTeam} vs {match.awayTeam}
                        </div>
                        {match.status === "finished" && match.homeScore !== undefined && match.awayScore !== undefined && (
                          <div className="text-3xl font-bold text-primary">
                            {match.homeScore} : {match.awayScore}
                          </div>
                        )}
                      </div>

                      {/* Venue */}
                      <div className="text-center">
                        <div className="inline-flex items-center space-x-2 px-3 py-1 bg-muted/50 rounded-full">
                          <span className="text-sm text-muted-foreground">{match.venue}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <CalendarIcon className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {selectedDate ? "Brak meczów w tym dniu" : "Wybierz datę"}
              </h3>
              <p className="text-muted-foreground max-w-sm mx-auto">
                {selectedDate 
                  ? "W wybranym dniu nie ma zaplanowanych meczów Cebularzy Kalisz"
                  : "Kliknij na datę w kalendarzu powyżej, aby zobaczyć mecze w tym dniu"
                }
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
