import { Card } from "@/components/ui/card"

export function StatsSection() {
  const stats = [
    { number: "15", label: "Years of Excellence", description: "Building hockey legends since 2009" },
    { number: "127", label: "Games Won", description: "Victories that define our legacy" },
    { number: "23", label: "Championships", description: "Trophies in our collection" },
    { number: "45", label: "Team Members", description: "Athletes ready for battle" },
  ]

  return (
    <section className="py-24 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-4">
            <span className="text-gradient">OUR LEGACY</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Numbers that tell the story of our relentless pursuit of hockey excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="p-8 text-center bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 group"
            >
              <div className="text-5xl md:text-6xl font-black text-primary mb-4 group-hover:scale-110 transition-transform">
                {stat.number}
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">{stat.label}</h3>
              <p className="text-muted-foreground text-sm">{stat.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
