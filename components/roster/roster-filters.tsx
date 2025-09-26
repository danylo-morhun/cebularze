"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, Users, Shield, Target } from "lucide-react"
import { POSITIONS } from "@/lib/constants"

export function RosterFilters() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedPosition, setSelectedPosition] = useState<string>("all")
  const [sortBy, setSortBy] = useState<string>("number")

  const positionIcons = {
    GK: Shield,
    D: Users,
    F: Target,
  }

  return (
    <div className="mb-8 space-y-4">
      {/* Search and filters */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Szukaj zawodnika..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>

        <Select value={selectedPosition} onValueChange={setSelectedPosition}>
          <SelectTrigger className="w-full md:w-48">
            <SelectValue placeholder="Pozycja" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Wszystkie pozycje</SelectItem>
            {Object.entries(POSITIONS).map(([key, label]) => {
              const Icon = positionIcons[key as keyof typeof positionIcons]
              return (
                <SelectItem key={key} value={key}>
                  <div className="flex items-center space-x-2">
                    <Icon className="w-4 h-4" />
                    <span>{label}</span>
                  </div>
                </SelectItem>
              )
            })}
          </SelectContent>
        </Select>

        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-full md:w-48">
            <SelectValue placeholder="Sortuj według" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="number">Numer</SelectItem>
            <SelectItem value="name">Nazwisko</SelectItem>
            <SelectItem value="age">Wiek</SelectItem>
            <SelectItem value="goals">Bramki</SelectItem>
            <SelectItem value="points">Punkty</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Position filter buttons */}
      <div className="flex flex-wrap gap-2">
        <Button
          variant={selectedPosition === "all" ? "default" : "outline"}
          size="sm"
          onClick={() => setSelectedPosition("all")}
          className="transition-all duration-300"
        >
          <Filter className="w-4 h-4 mr-2" />
          Wszyscy ({25})
        </Button>
        {Object.entries(POSITIONS).map(([key, label]) => {
          const Icon = positionIcons[key as keyof typeof positionIcons]
          const count = key === "GK" ? 2 : key === "D" ? 8 : 15
          return (
            <Button
              key={key}
              variant={selectedPosition === key ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedPosition(key)}
              className="transition-all duration-300"
            >
              <Icon className="w-4 h-4 mr-2" />
              {label} ({count})
            </Button>
          )
        })}
      </div>

      {/* Active filters */}
      {(searchTerm || selectedPosition !== "all" || sortBy !== "number") && (
        <div className="flex items-center space-x-2">
          <span className="text-sm text-muted-foreground">Aktywne filtry:</span>
          {searchTerm && (
            <Badge variant="secondary" className="cursor-pointer" onClick={() => setSearchTerm("")}>
              Szukaj: "{searchTerm}" ×
            </Badge>
          )}
          {selectedPosition !== "all" && (
            <Badge variant="secondary" className="cursor-pointer" onClick={() => setSelectedPosition("all")}>
              {POSITIONS[selectedPosition as keyof typeof POSITIONS]} ×
            </Badge>
          )}
          {sortBy !== "number" && (
            <Badge variant="secondary" className="cursor-pointer" onClick={() => setSortBy("number")}>
              Sortowanie ×
            </Badge>
          )}
        </div>
      )}
    </div>
  )
}
