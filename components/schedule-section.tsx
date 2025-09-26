import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock } from "lucide-react"

export function ScheduleSection() {
  const games = [
    {
      date: "2025-01-15",
      time: "19:00",
      opponent: "Lodowe Wilki",
      venue: "Kalisz Ice Arena",
      type: "Home",
      status: "upcoming",
    },
    {
      date: "2025-01-22",
      time: "18:30",
      opponent: "Poznań Panthers",
      venue: "Poznań Stadium",
      type: "Away",
      status: "upcoming",
    },
    {
      date: "2025-01-29",
      time: "20:00",
      opponent: "Warszawa Eagles",
      venue: "Kalisz Ice Arena",
      type: "Home",
      status: "upcoming",
    },
    {
      date: "2025-01-08",
      time: "19:30",
      opponent: "Kraków Kings",
      venue: "Kraków Arena",
      type: "Away",
      status: "won",
      score: "4-2",
    },
  ]

  return (
    <section id="schedule" className="py-24 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-4">
            <span className="text-gradient">GAME</span>
            <br />
            <span className="text-foreground">SCHEDULE</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't miss the action - catch us dominating the ice
          </p>
        </div>

        <div className="space-y-6">
          {games.map((game, index) => (
            <Card
              key={index}
              className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center space-x-6">
                  <div className="text-center">
                    <div className="text-2xl font-black text-primary">{new Date(game.date).getDate()}</div>
                    <div className="text-sm text-muted-foreground">
                      {new Date(game.date).toLocaleDateString("en", { month: "short" })}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center space-x-4">
                      <h3 className="text-xl font-bold text-foreground">Cebularze vs {game.opponent}</h3>
                      {game.status === "won" && game.score && (
                        <Badge className="bg-primary text-primary-foreground">Won {game.score}</Badge>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{game.time}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{game.venue}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <Badge
                  variant={game.type === "Home" ? "default" : "secondary"}
                  className={game.type === "Home" ? "bg-primary text-primary-foreground" : ""}
                >
                  {game.type}
                </Badge>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
