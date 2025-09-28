import { MainLayout } from "@/components/layout/main-layout"
import { PageHeader } from "@/components/ui/page-header"
import { ScheduleView } from "@/components/schedule/schedule-view"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Trophy, TrendingUp, Users } from "lucide-react"
import { mockMatches } from "@/data/mock-data"

export default function SchedulePage() {
  // Calculate quick stats
  const upcomingMatches = mockMatches.filter(match => match.status === "upcoming")
  const finishedMatches = mockMatches.filter(match => match.status === "finished")
  const homeGames = mockMatches.filter(match => match.homeTeam === "Cebularze Kalisz")
  const wins = finishedMatches.filter(match => {
    const isHomeGame = match.homeTeam === "Cebularze Kalisz"
    const ourScore = isHomeGame ? match.homeScore : match.awayScore
    const opponentScore = isHomeGame ? match.awayScore : match.homeScore
    return ourScore && opponentScore && ourScore > opponentScore
  })

  return (
    <MainLayout>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
          <div className="text-center space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl font-bold text-gradient-primary">
                TERMINARZ MECZÓW
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Śledź wszystkie mecze Cebularzy Kalisz - nadchodzące spotkania, wyniki i statystyki
              </p>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <Card className="bg-background/50 backdrop-blur-sm">
                <CardContent className="p-4 text-center">
                  <Calendar className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">{upcomingMatches.length}</div>
                  <div className="text-sm text-muted-foreground">Nadchodzące</div>
                </CardContent>
              </Card>
              
              <Card className="bg-background/50 backdrop-blur-sm">
                <CardContent className="p-4 text-center">
                  <Trophy className="w-6 h-6 text-green-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">{wins.length}</div>
                  <div className="text-sm text-muted-foreground">Zwycięstwa</div>
                </CardContent>
              </Card>
              
              <Card className="bg-background/50 backdrop-blur-sm">
                <CardContent className="p-4 text-center">
                  <Users className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">{homeGames.length}</div>
                  <div className="text-sm text-muted-foreground">Mecze domowe</div>
                </CardContent>
              </Card>
              
              <Card className="bg-background/50 backdrop-blur-sm">
                <CardContent className="p-4 text-center">
                  <TrendingUp className="w-6 h-6 text-orange-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">{finishedMatches.length}</div>
                  <div className="text-sm text-muted-foreground">Rozegrane</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ScheduleView />
      </div>
    </MainLayout>
  )
}
