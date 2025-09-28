"use client"

import { News } from "@/types"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight, Newspaper } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface NewsHeroProps {
  news: News[]
}

export function NewsHero({ news }: NewsHeroProps) {
  const featuredNews = news.find((article) => article.featured)
  
  if (!featuredNews) return null

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("pl-PL", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(new Date(date))
  }

  return (
    <section className="mb-12">
      {/* Featured Article */}
      <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 group">
        <div className="grid lg:grid-cols-2 gap-0">
          {/* Image */}
          <div className="aspect-video lg:aspect-square bg-muted relative overflow-hidden">
            <Image
              src={featuredNews.image || "/placeholder.svg"}
              alt={featuredNews.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
              {featuredNews.category}
            </Badge>
            <Badge className="absolute top-4 right-4 bg-yellow-500 text-yellow-900">
              Polecane
            </Badge>
          </div>

          {/* Content */}
          <CardContent className="p-8 flex flex-col justify-center">
            <div className="space-y-4">
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(featuredNews.date)}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{featuredNews.readTime} min czytania</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Newspaper className="w-4 h-4" />
                  <span>{featuredNews.author}</span>
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
                {featuredNews.title}
              </h2>

              <p className="text-muted-foreground text-lg leading-relaxed">
                {featuredNews.excerpt}
              </p>

              <div className="flex flex-wrap gap-2">
                {featuredNews.tags.slice(0, 3).map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    #{tag}
                  </Badge>
                ))}
              </div>

              <Link href={`/news/${featuredNews.slug}`}>
                <Button className="group/btn">
                  Czytaj więcej
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </CardContent>
        </div>
      </Card>
    </section>
  )
}
