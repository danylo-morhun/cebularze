"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight, Newspaper, Trophy, Users, Target } from "lucide-react"
import { format } from "date-fns"
import { pl } from "date-fns/locale"

// Mock junior team news data
const juniorNews = [
  {
    id: "jn1",
    title: "Szczypiorki wygrywają turniej w Poznaniu!",
    excerpt:
      "Nasza drużyna juniorska zdobyła pierwsze miejsce w prestiżowym turnieju młodzieżowym, pokonując w finale drużynę z Gdańska 3-1.",
    image: "/young-hockey-team-celebrating-victory.jpg",
    date: new Date("2024-12-05T10:00:00"),
    author: "Trener Marek Kowalski",
    category: "Mecze",
    featured: true,
    readTime: 3,
  },
  {
    id: "jn2",
    title: "Nowy talent w szeregach Szczypiorków",
    excerpt: "15-letni Jakub Nowak dołączył do naszej drużyny. Młody napastnik ma już na koncie 12 goli w tym sezonie.",
    image: "/young-hockey-player-with-stick.jpg",
    date: new Date("2024-11-28T14:30:00"),
    author: "Anna Wiśniewska",
    category: "Transfery",
    featured: false,
    readTime: 2,
  },
  {
    id: "jn3",
    title: "Obóz treningowy w Zakopanem",
    excerpt:
      "Szczypiorki spędziły tydzień na intensywnych treningach w górach. Program obejmował nie tylko hokej, ale także zajęcia z psychologii sportu.",
    image: "/hockey-training-camp-mountains.jpg",
    date: new Date("2024-11-20T09:00:00"),
    author: "Trener Piotr Dąbrowski",
    category: "Treningi",
    featured: false,
    readTime: 4,
  },
]

const categoryIcons = {
  Mecze: Trophy,
  Transfery: Users,
  Treningi: Target,
  Wydarzenia: Calendar,
}

export function JuniorNewsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-orange-500/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4 bg-orange-500/20 text-orange-600 border-orange-500/30">
            Aktualności
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Najnowsze{" "}
            <span className="text-gradient bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
              wiadomości
            </span>{" "}
            ze Szczypiorków
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Bądź na bieżąco z najważniejszymi wydarzeniami, sukcesami i planami naszej drużyny juniorskiej
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {juniorNews.map((article, index) => {
            const CategoryIcon = categoryIcons[article.category as keyof typeof categoryIcons] || Newspaper
            return (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={article.featured ? "lg:col-span-2" : ""}
              >
                <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-0 bg-gradient-to-b from-background to-orange-500/5 h-full">
                  <CardContent className="p-0">
                    <div className="relative">
                      <Image
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        width={article.featured ? 800 : 400}
                        height={300}
                        className={`w-full object-cover group-hover:scale-105 transition-transform duration-300 ${
                          article.featured ? "h-64" : "h-48"
                        }`}
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-orange-500 text-white">
                          <CategoryIcon className="w-3 h-3 mr-1" />
                          {article.category}
                        </Badge>
                      </div>
                      {article.featured && (
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-yellow-500 text-black font-bold">WYRÓŻNIONE</Badge>
                        </div>
                      )}
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {format(article.date, "dd MMM yyyy", { locale: pl })}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {article.readTime} min
                        </div>
                      </div>

                      <h3
                        className={`font-bold mb-3 group-hover:text-orange-600 transition-colors duration-300 ${
                          article.featured ? "text-xl md:text-2xl" : "text-lg"
                        }`}
                      >
                        {article.title}
                      </h3>

                      <p className="text-muted-foreground mb-4 text-pretty">{article.excerpt}</p>

                      <div className="flex items-center justify-between">
                        <div className="text-sm text-muted-foreground">Autor: {article.author}</div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-orange-600 hover:text-orange-700 hover:bg-orange-500/10 p-0"
                        >
                          Czytaj więcej
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/juniors/news">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
              <Newspaper className="w-5 h-5 mr-2" />
              Zobacz wszystkie aktualności
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
