"use client"

import { useState, useMemo } from "react"
import { News } from "@/types"
import { NewsHero } from "./news-hero"
import { NewsFilters } from "./news-filters"
import { NewsGrid } from "./news-grid"
import { NewsPagination } from "./news-pagination"

interface NewsPageProps {
  news: News[]
}

export function NewsPage({ news }: NewsPageProps) {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(9)

  // Filter and search news
  const filteredNews = useMemo(() => {
    return news.filter((article) => {
      const matchesCategory = selectedCategory === "all" || article.category === selectedCategory
      const matchesSearch = 
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      
      return matchesCategory && matchesSearch
    })
  }, [news, selectedCategory, searchTerm])

  // Paginate news
  const totalPages = Math.ceil(filteredNews.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedNews = filteredNews.slice(startIndex, startIndex + itemsPerPage)

  // Get unique categories
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(news.map(article => article.category)))
    return ["all", ...uniqueCategories]
  }, [news])

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    setCurrentPage(1) // Reset to first page when filtering
  }

  const handleSearchChange = (search: string) => {
    setSearchTerm(search)
    setCurrentPage(1) // Reset to first page when searching
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    // Scroll to top when changing pages
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section - Featured News */}
        <NewsHero news={news} />

        {/* Filters */}
        <NewsFilters
          categories={categories}
          selectedCategory={selectedCategory}
          searchTerm={searchTerm}
          onCategoryChange={handleCategoryChange}
          onSearchChange={handleSearchChange}
          totalResults={filteredNews.length}
        />

        {/* News Grid */}
        <NewsGrid news={paginatedNews} />

        {/* Pagination */}
        {totalPages > 1 && (
          <NewsPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}

        {/* No Results */}
        {filteredNews.length === 0 && (
          <div className="text-center py-16">
            <div className="text-muted-foreground text-lg mb-4">
              Nie znaleziono artykułów spełniających kryteria wyszukiwania
            </div>
            <button
              onClick={() => {
                setSelectedCategory("all")
                setSearchTerm("")
                setCurrentPage(1)
              }}
              className="text-primary hover:text-primary/80 font-medium"
            >
              Wyczyść filtry
            </button>
          </div>
        )}
    </div>
  )
}
