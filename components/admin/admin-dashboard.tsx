"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Users,
  Calendar,
  FileText,
  Settings,
  BarChart3,
  UserPlus,
  AlertCircle,
  CheckCircle,
  Clock,
  Eye,
} from "lucide-react"
import { mockPlayers, mockMatches, mockNews } from "@/data/mock-data"
import { PlayerManagement } from "./player-management"
import { MatchManagement } from "./match-management"
import { NewsManagement } from "./news-management"
import { ApplicationManagement } from "./application-management"

export function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  // Mock application data
  const mockApplications = [
    {
      id: "1",
      name: "Jan Kowalski",
      email: "jan.kowalski@email.com",
      phone: "+48 123 456 789",
      position: "F",
      experience: "5 lat",
      team: "senior",
      status: "pending",
      submittedAt: "2024-01-15",
    },
    {
      id: "2",
      name: "Anna Nowak",
      email: "anna.nowak@email.com",
      phone: "+48 987 654 321",
      position: "D",
      experience: "3 lata",
      team: "senior",
      status: "approved",
      submittedAt: "2024-01-14",
    },
    {
      id: "3",
      name: "Piotr Wiśniewski",
      email: "piotr.wisniewski@email.com",
      phone: "+48 555 666 777",
      position: "GK",
      experience: "Początkujący",
      team: "junior",
      status: "rejected",
      submittedAt: "2024-01-13",
    },
  ]

  const pendingApplications = mockApplications.filter((app) => app.status === "pending")
  const upcomingMatches = mockMatches.filter((match) => match.status === "upcoming").slice(0, 3)
  const recentNews = mockNews.slice(0, 3)

  const stats = [
    {
      title: "Zawodnicy",
      value: mockPlayers.length,
      icon: Users,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      title: "Nadchodzące Mecze",
      value: upcomingMatches.length,
      icon: Calendar,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      title: "Oczekujące Aplikacje",
      value: pendingApplications.length,
      icon: UserPlus,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
    },
    {
      title: "Aktualności",
      value: mockNews.length,
      icon: FileText,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return (
          <Badge variant="outline" className="text-orange-500 border-orange-500">
            Oczekuje
          </Badge>
        )
      case "approved":
        return <Badge className="bg-green-500 text-white">Zaakceptowana</Badge>
      case "rejected":
        return <Badge variant="destructive">Odrzucona</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pending":
        return <Clock className="w-4 h-4 text-orange-500" />
      case "approved":
        return <CheckCircle className="w-4 h-4 text-green-500" />
      case "rejected":
        return <AlertCircle className="w-4 h-4 text-red-500" />
      default:
        return <Clock className="w-4 h-4" />
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Panel Administracyjny</h1>
              <p className="text-muted-foreground mt-2">Zarządzanie klubem Cebularze Kalisz</p>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                Ustawienia
              </Button>
              <Button size="sm">
                <BarChart3 className="w-4 h-4 mr-2" />
                Raporty
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview" className="flex items-center space-x-2">
              <BarChart3 className="w-4 h-4" />
              <span className="hidden sm:inline">Przegląd</span>
            </TabsTrigger>
            <TabsTrigger value="players" className="flex items-center space-x-2">
              <Users className="w-4 h-4" />
              <span className="hidden sm:inline">Zawodnicy</span>
            </TabsTrigger>
            <TabsTrigger value="matches" className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span className="hidden sm:inline">Mecze</span>
            </TabsTrigger>
            <TabsTrigger value="news" className="flex items-center space-x-2">
              <FileText className="w-4 h-4" />
              <span className="hidden sm:inline">Aktualności</span>
            </TabsTrigger>
            <TabsTrigger value="applications" className="flex items-center space-x-2">
              <UserPlus className="w-4 h-4" />
              <span className="hidden sm:inline">Aplikacje</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Stats Overview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat) => {
                const Icon = stat.icon
                return (
                  <Card key={stat.title}>
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center`}>
                          <Icon className={`w-6 h-6 ${stat.color}`} />
                        </div>
                        <div>
                          <div className="text-2xl font-bold">{stat.value}</div>
                          <div className="text-sm text-muted-foreground">{stat.title}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Pending Applications */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <UserPlus className="w-5 h-5 text-primary" />
                    <span>Oczekujące Aplikacje</span>
                  </CardTitle>
                  <CardDescription>Nowe zgłoszenia do drużyny</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {pendingApplications.length === 0 ? (
                    <p className="text-muted-foreground text-center py-4">Brak oczekujących aplikacji</p>
                  ) : (
                    pendingApplications.map((application) => (
                      <div
                        key={application.id}
                        className="flex items-center justify-between p-3 bg-muted/50 rounded-lg"
                      >
                        <div className="flex items-center space-x-3">
                          <Avatar className="w-8 h-8">
                            <AvatarFallback className="text-xs">
                              {application.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium text-sm">{application.name}</div>
                            <div className="text-xs text-muted-foreground">
                              {application.position} • {application.team}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          {getStatusIcon(application.status)}
                          <Button size="sm" variant="outline">
                            <Eye className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))
                  )}
                  {pendingApplications.length > 0 && (
                    <Button
                      variant="outline"
                      className="w-full bg-transparent"
                      onClick={() => setActiveTab("applications")}
                    >
                      Zobacz wszystkie aplikacje
                    </Button>
                  )}
                </CardContent>
              </Card>

              {/* Upcoming Matches */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span>Nadchodzące Mecze</span>
                  </CardTitle>
                  <CardDescription>Najbliższe spotkania</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {upcomingMatches.map((match) => (
                    <div key={match.id} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <div>
                        <div className="font-medium text-sm">
                          {match.homeTeam} vs {match.awayTeam}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {new Date(match.date).toLocaleDateString("pl-PL")} • {match.time}
                        </div>
                      </div>
                      <Badge variant="outline">{match.competition}</Badge>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full bg-transparent" onClick={() => setActiveTab("matches")}>
                    Zarządzaj meczami
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Recent News */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="w-5 h-5 text-primary" />
                  <span>Ostatnie Aktualności</span>
                </CardTitle>
                <CardDescription>Najnowsze publikacje</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentNews.map((article) => (
                    <div key={article.id} className="flex items-start space-x-4 p-3 bg-muted/50 rounded-lg">
                      <div className="flex-1">
                        <div className="font-medium text-sm line-clamp-1">{article.title}</div>
                        <div className="text-xs text-muted-foreground mt-1">{new Date(article.date).toLocaleDateString("pl-PL")}</div>
                      </div>
                      <Badge variant="outline">{article.category}</Badge>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4 bg-transparent" onClick={() => setActiveTab("news")}>
                  Zarządzaj aktualnościami
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="players">
            <PlayerManagement />
          </TabsContent>

          <TabsContent value="matches">
            <MatchManagement />
          </TabsContent>

          <TabsContent value="news">
            <NewsManagement />
          </TabsContent>

          <TabsContent value="applications">
            <ApplicationManagement applications={mockApplications} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
