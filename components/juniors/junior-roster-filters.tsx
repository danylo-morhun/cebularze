"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, Users, Shield, Target } from "lucide-react"
import { POSITIONS } from "@/lib/constants"

export function JuniorRosterFilters() {
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
            placeholder="Szukaj młodego zawodnika..."
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
            <SelectItem value="name">Imię i nazwisko</SelectItem>
            <SelectItem value="age">Wiek</SelectItem>
            <SelectItem value="points">Punkty</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Active filters */}
      <div className="flex flex-wrap gap-2">
        {searchTerm && (
          <Badge variant="secondary" className="gap-1">
            <Search className="w-3 h-3" />
            "{searchTerm}"
            <Button
              variant="ghost"
              size="sm"
              className="h-auto p-0 ml-1 hover:bg-transparent"
              onClick={() => setSearchTerm("")}
            >
              ×
            </Button>
          </Badge>
        )}

        {selectedPosition !== "all" && (
          <Badge variant="secondary" className="gap-1">
            <Filter className="w-3 h-3" />
            {POSITIONS[selectedPosition as keyof typeof POSITIONS]}
            <Button
              variant="ghost"
              size="sm"
              className="h-auto p-0 ml-1 hover:bg-transparent"
              onClick={() => setSelectedPosition("all")}
            >
              ×
            </Button>
          </Badge>
        )}
      </div>
    </div>
  )
}
