"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Calendar, Home, Plane, Trophy, Filter } from "lucide-react"

export function ScheduleFilters() {
  const [selectedMonth, setSelectedMonth] = useState<string>("all")
  const [selectedVenue, setSelectedVenue] = useState<string>("all")
  const [selectedCompetition, setSelectedCompetition] = useState<string>("all")

  const months = [
    { value: "all", label: "Wszystkie miesiące" },
    { value: "12", label: "Grudzień 2024" },
    { value: "1", label: "Styczeń 2025" },
    { value: "2", label: "Luty 2025" },
    { value: "3", label: "Marzec 2025" },
    { value: "4", label: "Kwiecień 2025" },
  ]

  const venues = [
    { value: "all", label: "Wszystkie mecze" },
    { value: "home", label: "Mecze domowe", icon: Home },
    { value: "away", label: "Mecze wyjazdowe", icon: Plane },
  ]

  const competitions = [
    { value: "all", label: "Wszystkie rozgrywki" },
    { value: "liga", label: "Liga Regionalna" },
    { value: "puchar", label: "Puchar Polski" },
    { value: "sparring", label: "Mecze towarzyskie" },
  ]

  return (
    <div className="space-y-4">
      {/* Filter controls */}
      <div className="flex flex-col md:flex-row gap-4">
        <Select value={selectedMonth} onValueChange={setSelectedMonth}>
          <SelectTrigger className="w-full md:w-48">
            <SelectValue placeholder="Miesiąc" />
          </SelectTrigger>
          <SelectContent>
            {months.map((month) => (
              <SelectItem key={month.value} value={month.value}>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>{month.label}</span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={selectedVenue} onValueChange={setSelectedVenue}>
          <SelectTrigger className="w-full md:w-48">
            <SelectValue placeholder="Miejsce" />
          </SelectTrigger>
          <SelectContent>
            {venues.map((venue) => {
              const Icon = venue.icon || Filter
              return (
                <SelectItem key={venue.value} value={venue.value}>
                  <div className="flex items-center space-x-2">
                    <Icon className="w-4 h-4" />
                    <span>{venue.label}</span>
                  </div>
                </SelectItem>
              )
            })}
          </SelectContent>
        </Select>

        <Select value={selectedCompetition} onValueChange={setSelectedCompetition}>
          <SelectTrigger className="w-full md:w-48">
            <SelectValue placeholder="Rozgrywki" />
          </SelectTrigger>
          <SelectContent>
            {competitions.map((competition) => (
              <SelectItem key={competition.value} value={competition.value}>
                <div className="flex items-center space-x-2">
                  <Trophy className="w-4 h-4" />
                  <span>{competition.label}</span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Quick filter buttons */}
      <div className="flex flex-wrap gap-2">
        <Button
          variant={selectedVenue === "all" ? "default" : "outline"}
          size="sm"
          onClick={() => setSelectedVenue("all")}
        >
          Wszystkie (30)
        </Button>
        <Button
          variant={selectedVenue === "home" ? "default" : "outline"}
          size="sm"
          onClick={() => setSelectedVenue("home")}
        >
          <Home className="w-4 h-4 mr-2" />
          Domowe (15)
        </Button>
        <Button
          variant={selectedVenue === "away" ? "default" : "outline"}
          size="sm"
          onClick={() => setSelectedVenue("away")}
        >
          <Plane className="w-4 h-4 mr-2" />
          Wyjazdowe (15)
        </Button>
      </div>

      {/* Active filters */}
      {(selectedMonth !== "all" || selectedVenue !== "all" || selectedCompetition !== "all") && (
        <div className="flex items-center space-x-2">
          <span className="text-sm text-muted-foreground">Aktywne filtry:</span>
          {selectedMonth !== "all" && (
            <Badge variant="secondary" className="cursor-pointer" onClick={() => setSelectedMonth("all")}>
              {months.find((m) => m.value === selectedMonth)?.label} ×
            </Badge>
          )}
          {selectedVenue !== "all" && (
            <Badge variant="secondary" className="cursor-pointer" onClick={() => setSelectedVenue("all")}>
              {venues.find((v) => v.value === selectedVenue)?.label} ×
            </Badge>
          )}
          {selectedCompetition !== "all" && (
            <Badge variant="secondary" className="cursor-pointer" onClick={() => setSelectedCompetition("all")}>
              {competitions.find((c) => c.value === selectedCompetition)?.label} ×
            </Badge>
          )}
        </div>
      )}
    </div>
  )
}
