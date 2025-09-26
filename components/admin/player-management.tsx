"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
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
import { Textarea } from "@/components/ui/textarea"
import { Plus, Search, Edit, Trash2, UserPlus } from "lucide-react"
import { mockPlayers } from "@/data/mock-data"

export function PlayerManagement() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedPosition, setSelectedPosition] = useState("all")
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)

  const filteredPlayers = mockPlayers.filter((player) => {
    const matchesSearch =
      player.name.toLowerCase().includes(searchTerm.toLowerCase()) || player.number.toString().includes(searchTerm)
    const matchesPosition = selectedPosition === "all" || player.position === selectedPosition
    return matchesSearch && matchesPosition
  })

  const getPositionBadge = (position: string) => {
    const colors = {
      GK: "bg-blue-500 text-white",
      D: "bg-green-500 text-white",
      F: "bg-red-500 text-white",
    }
    return <Badge className={colors[position as keyof typeof colors]}>{position}</Badge>
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Zarządzanie Zawodnikami</CardTitle>
              <CardDescription>Dodawaj, edytuj i zarządzaj składem drużyny</CardDescription>
            </div>
            <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="w-4 h-4 mr-2" />
                  Dodaj Zawodnika
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle>Dodaj Nowego Zawodnika</DialogTitle>
                  <DialogDescription>Wprowadź dane nowego zawodnika</DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Imię i nazwisko</Label>
                    <Input id="name" placeholder="Jan Kowalski" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="number">Numer</Label>
                      <Input id="number" type="number" placeholder="10" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="position">Pozycja</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Wybierz pozycję" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="GK">Bramkarz</SelectItem>
                          <SelectItem value="D">Obrońca</SelectItem>
                          <SelectItem value="F">Napastnik</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="age">Wiek</Label>
                      <Input id="age" type="number" placeholder="25" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="height">Wzrost (cm)</Label>
                      <Input id="height" type="number" placeholder="180" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bio">Biografia</Label>
                    <Textarea id="bio" placeholder="Krótka biografia zawodnika..." />
                  </div>
                  <div className="flex justify-end space-x-2">
                    <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                      Anuluj
                    </Button>
                    <Button onClick={() => setIsAddDialogOpen(false)}>
                      <UserPlus className="w-4 h-4 mr-2" />
                      Dodaj Zawodnika
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
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Szukaj zawodnika..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedPosition} onValueChange={setSelectedPosition}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Filtruj pozycję" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Wszystkie pozycje</SelectItem>
                <SelectItem value="GK">Bramkarze</SelectItem>
                <SelectItem value="D">Obrońcy</SelectItem>
                <SelectItem value="F">Napastnicy</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Players Table */}
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Zawodnik</TableHead>
                  <TableHead>Numer</TableHead>
                  <TableHead>Pozycja</TableHead>
                  <TableHead>Wiek</TableHead>
                  <TableHead>Statystyki</TableHead>
                  <TableHead className="text-right">Akcje</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredPlayers.map((player) => (
                  <TableRow key={player.id}>
                    <TableCell>
                      <div className="flex items-center space-x-3">
                        <Avatar className="w-10 h-10">
                          <AvatarImage src={player.photo || "/placeholder.svg"} alt={player.name} />
                          <AvatarFallback>
                            {player.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{player.name}</div>
                          <div className="text-sm text-muted-foreground">{player.height}cm</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="font-mono">
                        #{player.number}
                      </Badge>
                    </TableCell>
                    <TableCell>{getPositionBadge(player.position)}</TableCell>
                    <TableCell>{player.age} lat</TableCell>
                    <TableCell>
                      <div className="text-sm">
                        <div>
                          {player.goals}G • {player.assists}A
                        </div>
                        <div className="text-muted-foreground">{player.games} meczów</div>
                      </div>
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

          {filteredPlayers.length === 0 && (
            <div className="text-center py-8">
              <p className="text-muted-foreground">Nie znaleziono zawodników spełniających kryteria wyszukiwania.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
