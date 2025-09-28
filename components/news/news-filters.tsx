"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, X } from "lucide-react"
import { NEWS_CATEGORIES } from "@/lib/constants"

interface NewsFiltersProps {
  categories: string[]
  selectedCategory: string
  searchTerm: string
  onCategoryChange: (category: string) => void
  onSearchChange: (search: string) => void
  totalResults: number
}

export function NewsFilters({
  categories,
  selectedCategory,
  searchTerm,
  onCategoryChange,
  onSearchChange,
  totalResults,
}: NewsFiltersProps) {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false)

  const getCategoryLabel = (category: string) => {
    if (category === "all") return "Wszystkie"
    return category
  }

  const getCategoryColor = (category: string) => {
    const colors = {
      Mecze: "bg-blue-500 text-white",
      Transfery: "bg-green-500 text-white",
      Treningi: "bg-yellow-500 text-yellow-900",
      Wydarzenia: "bg-purple-500 text-white",
      Wywiady: "bg-orange-500 text-white",
      Ogłoszenia: "bg-red-500 text-white",
      Zespół: "bg-indigo-500 text-white",
      Zawodnicy: "bg-pink-500 text-white",
      Analiza: "bg-teal-500 text-white",
      Juniorzy: "bg-cyan-500 text-white",
      Społeczność: "bg-emerald-500 text-white",
      Statystyki: "bg-violet-500 text-white",
      Charytatywność: "bg-rose-500 text-white",
      Sprzęt: "bg-amber-500 text-amber-900",
      Turnieje: "bg-lime-500 text-lime-900",
    }
    return colors[category as keyof typeof colors] || "bg-gray-500 text-white"
  }

  const clearFilters = () => {
    onCategoryChange("all")
    onSearchChange("")
  }

  const hasActiveFilters = selectedCategory !== "all" || searchTerm !== ""

  return (
    <Card className="mb-8">
      <CardContent className="p-6">
        <div className="space-y-6">
          {/* Search and Filter Toggle */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Szukaj w aktualnościach..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsFiltersOpen(!isFiltersOpen)}
                className="lg:hidden"
              >
                <Filter className="w-4 h-4 mr-2" />
                Filtry
              </Button>

              {hasActiveFilters && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearFilters}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <X className="w-4 h-4 mr-2" />
                  Wyczyść
                </Button>
              )}
            </div>
          </div>

          {/* Results Count */}
          <div className="text-sm text-muted-foreground">
            Znaleziono {totalResults} {totalResults === 1 ? "artykuł" : totalResults < 5 ? "artykuły" : "artykułów"}
          </div>

          {/* Category Filters */}
          <div className={`space-y-4 ${isFiltersOpen ? "block" : "hidden lg:block"}`}>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => onCategoryChange(category)}
                  className={`transition-all duration-200 ${
                    selectedCategory === category
                      ? getCategoryColor(category)
                      : "hover:bg-primary/10"
                  }`}
                >
                  {getCategoryLabel(category)}
                </Button>
              ))}
            </div>
          </div>

          {/* Active Filters Display */}
          {hasActiveFilters && (
            <div className="flex flex-wrap gap-2">
              <span className="text-sm text-muted-foreground">Aktywne filtry:</span>
              {selectedCategory !== "all" && (
                <Badge variant="secondary" className="text-xs">
                  Kategoria: {getCategoryLabel(selectedCategory)}
                </Badge>
              )}
              {searchTerm && (
                <Badge variant="secondary" className="text-xs">
                  Szukaj: "{searchTerm}"
                </Badge>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
