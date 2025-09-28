"use client"

import { News } from "@/types"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, User, ArrowLeft, Share2, Bookmark } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface NewsDetailProps {
  article: News
}

export function NewsDetail({ article }: NewsDetailProps) {
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("pl-PL", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
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

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: article.title,
          text: article.excerpt,
          url: window.location.href,
        })
      } catch (error) {
        console.log("Error sharing:", error)
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href)
      // You could add a toast notification here
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {/* Back Button */}
          <Link href="/news">
            <Button variant="outline" className="mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Powrót do aktualności
            </Button>
          </Link>

          {/* Article Header */}
          <Card className="overflow-hidden">
            <div className="aspect-video bg-muted relative overflow-hidden">
              <Image
                src={article.image || "/placeholder.svg"}
                alt={article.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                <Badge className={getCategoryColor(article.category)}>
                  {article.category}
                </Badge>
                {article.featured && (
                  <Badge className="bg-yellow-500 text-yellow-900">
                    Polecane
                  </Badge>
                )}
              </div>
            </div>

            <CardContent className="p-8">
              <div className="space-y-6">
                {/* Meta Information */}
                <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(article.date)}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{article.readTime} min czytania</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>{article.author}</span>
                  </div>
                </div>

                {/* Article Content */}
                <div className="prose prose-lg max-w-none">
                  <div className="text-foreground leading-relaxed whitespace-pre-line">
                    {article.content}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-sm">
                      #{tag}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 pt-6 border-t">
                  <Button onClick={handleShare} variant="outline">
                    <Share2 className="w-4 h-4 mr-2" />
                    Udostępnij
                  </Button>
                  <Button variant="outline">
                    <Bookmark className="w-4 h-4 mr-2" />
                    Zapisz
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
    </div>
  )
}
