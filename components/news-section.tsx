import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function NewsSection() {
  const news = [
    {
      title: "Cebularze Dominates Season Opener with Spectacular 6-1 Victory",
      excerpt:
        "Our team showcased incredible teamwork and skill in the season's first match, setting the tone for what promises to be an outstanding year.",
      date: "2025-01-10",
      category: "Match Report",
      image: "/hockey-victory-celebration.jpg",
    },
    {
      title: "New Training Facility Opens - State-of-the-Art Equipment Installed",
      excerpt:
        "Cebularze players now have access to cutting-edge training technology that will elevate their performance to new heights.",
      date: "2025-01-05",
      category: "Team News",
      image: "/modern-hockey-training-facility.jpg",
    },
    {
      title: "Captain Jakub Kowalski Named Player of the Month",
      excerpt:
        "Outstanding leadership and performance on the ice earns our captain recognition from the league officials.",
      date: "2025-01-02",
      category: "Awards",
      image: "/hockey-captain-with-trophy.jpg",
    },
  ]

  return (
    <section id="news" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-4">
            <span className="text-gradient">LATEST</span>
            <br />
            <span className="text-foreground">NEWS</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest from the Cebularze universe
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((article, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 group"
            >
              <div className="aspect-video bg-muted relative overflow-hidden">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">{article.category}</Badge>
              </div>

              <div className="p-6 space-y-4">
                <div className="text-sm text-muted-foreground">
                  {new Date(article.date).toLocaleDateString("en", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>

                <h3 className="text-xl font-bold text-foreground leading-tight">{article.title}</h3>

                <p className="text-muted-foreground text-sm leading-relaxed">{article.excerpt}</p>

                <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80 group/btn">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
