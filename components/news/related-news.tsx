"use client"

import { News } from "@/types"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface RelatedNewsProps {
  articles: News[]
}

export function RelatedNews({ articles }: RelatedNewsProps) {
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("pl-PL", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(new Date(date))
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

  if (articles.length === 0) return null

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Podobne artykuły
          </h2>
          <p className="text-muted-foreground text-lg">
            Sprawdź inne artykuły z tej kategorii
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Card
              key={article.id}
              className="overflow-hidden bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 group h-full flex flex-col"
            >
              {/* Image */}
              <div className="aspect-video bg-muted relative overflow-hidden">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <Badge className={`absolute top-3 left-3 ${getCategoryColor(article.category)}`}>
                  {article.category}
                </Badge>
                {article.featured && (
                  <Badge className="absolute top-3 right-3 bg-yellow-500 text-yellow-900">
                    Polecane
                  </Badge>
                )}
              </div>

              {/* Content */}
              <CardContent className="p-6 flex flex-col flex-1">
                <div className="space-y-4 flex flex-col flex-1">
                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(article.date)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime} min</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground leading-tight line-clamp-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-muted-foreground leading-relaxed line-clamp-3 flex-1">
                    {article.excerpt}
                  </p>

                  {/* Read More Button */}
                  <Link href={`/news/${article.slug}`} className="mt-auto">
                    <Button variant="outline" className="w-full group/btn">
                      Czytaj więcej
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All News Button */}
        <div className="text-center mt-12">
          <Link href="/news">
            <Button size="lg">
              Zobacz wszystkie aktualności
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
