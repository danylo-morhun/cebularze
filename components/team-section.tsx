import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function TeamSection() {
  const players = [
    { name: "Jakub Kowalski", position: "Captain", number: "19", goals: 24 },
    { name: "Michał Nowak", position: "Goalkeeper", number: "1", saves: 156 },
    { name: "Tomasz Wiśniewski", position: "Defender", number: "7", assists: 18 },
    { name: "Paweł Wójcik", position: "Forward", number: "11", goals: 19 },
    { name: "Krzysztof Kowalczyk", position: "Forward", number: "22", goals: 16 },
    { name: "Marcin Kamiński", position: "Defender", number: "5", assists: 14 },
  ]

  return (
    <section id="team" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-4">
            <span className="text-gradient">MEET THE</span>
            <br />
            <span className="text-foreground">WARRIORS</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The fierce athletes who bring the Cebularze spirit to life on the ice
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {players.map((player, index) => (
            <Card
              key={index}
              className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center text-2xl font-black text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  {player.number}
                </div>
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  {player.position}
                </Badge>
              </div>

              <h3 className="text-xl font-bold mb-2 text-foreground">{player.name}</h3>

              <div className="flex justify-between items-center text-sm text-muted-foreground">
                <span>{player.position}</span>
                <span>
                  {player.goals ? `${player.goals} Goals` : `${player.saves} Saves` || `${player.assists} Assists`}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
