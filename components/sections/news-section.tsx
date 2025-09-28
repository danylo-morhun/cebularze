"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Calendar, Clock, ArrowRight, Newspaper } from "lucide-react"
import { mockNews } from "@/data/mock-data"
import Link from "next/link"
import Image from "next/image"

export function NewsSection() {
  const featuredNews = mockNews.find((news) => news.featured)
  const regularNews = mockNews.filter((news) => !news.featured).slice(0, 2)

  return (
    <section className="py-16 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Najnowsze Wiadomości</h2>
          <p className="text-muted-foreground text-lg">Bądź na bieżąco z życiem drużyny</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Featured article */}
          {featuredNews && (
            <div className="lg:col-span-2">
              <Card className="group hover:shadow-xl transition-all duration-500 overflow-hidden">
                <div className="relative h-64 md:h-80">
                  <Image
                    src={featuredNews.image || "/placeholder.svg"}
                    alt={featuredNews.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <Badge className="absolute top-4 left-4 bg-primary">Wyróżnione</Badge>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <Badge variant="outline" className="mb-2 text-white border-white/50">
                      {featuredNews.category}
                    </Badge>
                    <h3 className="text-2xl font-bold mb-2 text-balance">{featuredNews.title}</h3>
                    <p className="text-white/90 text-sm line-clamp-2 text-pretty">{featuredNews.excerpt}</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>
                          {new Date(featuredNews.date).toLocaleDateString("pl-PL", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{featuredNews.readTime} min czytania</span>
                      </div>
                    </div>
                    <span className="text-primary font-medium">{featuredNews.author}</span>
                  </div>
                  <Button asChild className="w-full group">
                    <Link href={`/news/${featuredNews.slug}`}>
                      Czytaj więcej
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Regular news */}
          <div className="space-y-6">
            {regularNews.map((news) => (
              <Card key={news.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="pb-3">
                  <div className="flex items-start space-x-3">
                    <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={news.image || "/placeholder.svg"}
                        alt={news.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <Badge variant="outline" className="mb-2 text-xs">
                        {news.category}
                      </Badge>
                      <h4 className="font-semibold text-sm leading-tight line-clamp-2 group-hover:text-primary transition-colors">
                        {news.title}
                      </h4>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-3 text-pretty">{news.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <Avatar className="w-5 h-5">
                        <AvatarFallback className="text-xs">{news.author[0]}</AvatarFallback>
                      </Avatar>
                      <span>{news.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>
                        {new Date(news.date).toLocaleDateString("pl-PL", {
                          day: "numeric",
                          month: "short",
                        })}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Button asChild variant="outline" className="w-full group bg-transparent">
              <Link href="/news">
                <Newspaper className="mr-2 h-4 w-4" />
                Zobacz Wszystkie Wiadomości
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
