"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Calendar, Edit, Trash2, MapPin } from "lucide-react"
import { mockMatches } from "@/data/mock-data"

export function MatchManagement() {
  const [selectedStatus, setSelectedStatus] = useState("all")
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)

  const filteredMatches = mockMatches.filter((match) => {
    return selectedStatus === "all" || match.status === selectedStatus
  })

  const getStatusBadge = (status: string) => {
    const colors = {
      upcoming: "bg-blue-500 text-white",
      live: "bg-green-500 text-white animate-pulse",
      finished: "bg-gray-500 text-white",
      cancelled: "bg-red-500 text-white",
      postponed: "bg-yellow-500 text-yellow-900",
    }
    const labels = {
      upcoming: "Nadchodzący",
      live: "Na żywo",
      finished: "Zakończony",
      cancelled: "Odwołany",
      postponed: "Przełożony",
    }
    return <Badge className={colors[status as keyof typeof colors]}>{labels[status as keyof typeof labels]}</Badge>
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Zarządzanie Meczami</CardTitle>
              <CardDescription>Dodawaj, edytuj i zarządzaj terminarzem meczów</CardDescription>
            </div>
            <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="w-4 h-4 mr-2" />
                  Dodaj Mecz
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle>Dodaj Nowy Mecz</DialogTitle>
                  <DialogDescription>Wprowadź szczegóły nowego meczu</DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="homeTeam">Drużyna gospodarzy</Label>
                      <Input id="homeTeam" placeholder="Cebularze Kalisz" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="awayTeam">Drużyna gości</Label>
                      <Input id="awayTeam" placeholder="Nazwa przeciwnika" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="date">Data</Label>
                      <Input id="date" type="date" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="time">Godzina</Label>
                      <Input id="time" type="time" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="venue">Miejsce</Label>
                    <Input id="venue" placeholder="Lodowisko Miejskie w Kaliszu" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="competition">Rozgrywki</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Wybierz rozgrywki" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="liga">Liga Regionalna</SelectItem>
                        <SelectItem value="puchar">Puchar Polski</SelectItem>
                        <SelectItem value="sparring">Mecz sparingowy</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex justify-end space-x-2">
                    <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                      Anuluj
                    </Button>
                    <Button onClick={() => setIsAddDialogOpen(false)}>
                      <Calendar className="w-4 h-4 mr-2" />
                      Dodaj Mecz
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent>
          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <Select value={selectedStatus} onValueChange={setSelectedStatus}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Filtruj status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Wszystkie mecze</SelectItem>
                <SelectItem value="upcoming">Nadchodzące</SelectItem>
                <SelectItem value="live">Na żywo</SelectItem>
                <SelectItem value="finished">Zakończone</SelectItem>
                <SelectItem value="cancelled">Odwołane</SelectItem>
                <SelectItem value="postponed">Przełożone</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Matches Table */}
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Mecz</TableHead>
                  <TableHead>Data i godzina</TableHead>
                  <TableHead>Miejsce</TableHead>
                  <TableHead>Rozgrywki</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Wynik</TableHead>
                  <TableHead className="text-right">Akcje</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredMatches.map((match) => (
                  <TableRow key={match.id}>
                    <TableCell>
                      <div className="font-medium">
                        {match.homeTeam} vs {match.awayTeam}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm">
                        <div>{new Date(match.date).toLocaleDateString("pl-PL")}</div>
                        <div className="text-muted-foreground">{match.time}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-1 text-sm">
                        <MapPin className="w-3 h-3 text-muted-foreground" />
                        <span>{match.venue}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{match.competition}</Badge>
                    </TableCell>
                    <TableCell>{getStatusBadge(match.status)}</TableCell>
                    <TableCell>
                      {match.homeScore !== undefined && match.awayScore !== undefined ? (
                        <div className="font-mono font-medium">
                          {match.homeScore} - {match.awayScore}
                        </div>
                      ) : (
                        <span className="text-muted-foreground">-</span>
                      )}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end space-x-2">
                        <Button size="sm" variant="outline">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline" className="text-red-500 hover:text-red-600 bg-transparent">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {filteredMatches.length === 0 && (
            <div className="text-center py-8">
              <p className="text-muted-foreground">Nie znaleziono meczów spełniających kryteria filtrowania.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
