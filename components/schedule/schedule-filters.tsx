"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Home, Plane, Trophy, Filter, X } from "lucide-react"

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

  const hasActiveFilters = selectedMonth !== "all" || selectedVenue !== "all" || selectedCompetition !== "all";

  return (
    <Card className="shadow-sm bg-muted/30">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center space-x-2 text-lg">
          <Filter className="w-5 h-5 text-primary" />
          <span>Filtry i Wyszukiwanie</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Advanced Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Okres</label>
            <Select value={selectedMonth} onValueChange={setSelectedMonth}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Wybierz miesiąc" />
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
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Miejsce</label>
            <Select value={selectedVenue} onValueChange={setSelectedVenue}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Wybierz miejsce" />
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
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Rozgrywki</label>
            <Select value={selectedCompetition} onValueChange={setSelectedCompetition}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Wybierz rozgrywki" />
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
        </div>

        {/* Quick Filter Buttons */}
        <div className="space-y-3">
          <label className="text-sm font-medium text-foreground">Szybkie filtry</label>
          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedVenue === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedVenue("all")}
              className="h-9"
            >
              Wszystkie mecze
            </Button>
            <Button
              variant={selectedVenue === "home" ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedVenue("home")}
              className="h-9"
            >
              <Home className="w-4 h-4 mr-2" />
              Mecze domowe
            </Button>
            <Button
              variant={selectedVenue === "away" ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedVenue("away")}
              className="h-9"
            >
              <Plane className="w-4 h-4 mr-2" />
              Mecze wyjazdowe
            </Button>
          </div>
        </div>

        {/* Active Filters */}
        {hasActiveFilters && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-foreground">Aktywne filtry</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setSelectedMonth("all")
                  setSelectedVenue("all")
                  setSelectedCompetition("all")
                }}
                className="h-8 text-xs"
              >
                <X className="w-3 h-3 mr-1" />
                Wyczyść wszystkie
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {selectedMonth !== "all" && (
                <Badge 
                  variant="secondary" 
                  className="cursor-pointer hover:bg-secondary/80 transition-colors px-3 py-1" 
                  onClick={() => setSelectedMonth("all")}
                >
                  <Calendar className="w-3 h-3 mr-1" />
                  {months.find((m) => m.value === selectedMonth)?.label}
                  <X className="w-3 h-3 ml-1" />
                </Badge>
              )}
              {selectedVenue !== "all" && (
                <Badge 
                  variant="secondary" 
                  className="cursor-pointer hover:bg-secondary/80 transition-colors px-3 py-1" 
                  onClick={() => setSelectedVenue("all")}
                >
                  {(() => {
                    const venue = venues.find((v) => v.value === selectedVenue);
                    const Icon = venue?.icon;
                    return Icon ? <Icon className="w-3 h-3 mr-1" /> : null;
                  })()}
                  {venues.find((v) => v.value === selectedVenue)?.label}
                  <X className="w-3 h-3 ml-1" />
                </Badge>
              )}
              {selectedCompetition !== "all" && (
                <Badge 
                  variant="secondary" 
                  className="cursor-pointer hover:bg-secondary/80 transition-colors px-3 py-1" 
                  onClick={() => setSelectedCompetition("all")}
                >
                  <Trophy className="w-3 h-3 mr-1" />
                  {competitions.find((c) => c.value === selectedCompetition)?.label}
                  <X className="w-3 h-3 ml-1" />
                </Badge>
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}