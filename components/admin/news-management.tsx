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
import { Textarea } from "@/components/ui/textarea"
import { Plus, Search, Edit, Trash2, FileText, Eye } from "lucide-react"
import { mockNews } from "@/data/mock-data"

export function NewsManagement() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)

  const filteredNews = mockNews.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || article.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const getCategoryBadge = (category: string) => {
    const colors = {
      Mecze: "bg-blue-500 text-white",
      Transfery: "bg-green-500 text-white",
      Treningi: "bg-yellow-500 text-yellow-900",
      Wydarzenia: "bg-purple-500 text-white",
      Wywiady: "bg-orange-500 text-white",
      Ogłoszenia: "bg-red-500 text-white",
    }
    return <Badge className={colors[category as keyof typeof colors] || "bg-gray-500 text-white"}>{category}</Badge>
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Zarządzanie Aktualnościami</CardTitle>
              <CardDescription>Dodawaj, edytuj i publikuj aktualności klubowe</CardDescription>
            </div>
            <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="w-4 h-4 mr-2" />
                  Dodaj Artykuł
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Dodaj Nowy Artykuł</DialogTitle>
                  <DialogDescription>Utwórz nową aktualność dla strony klubu</DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Tytuł</Label>
                    <Input id="title" placeholder="Tytuł artykułu..." />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="category">Kategoria</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Wybierz kategorię" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Mecze">Mecze</SelectItem>
                        <SelectItem value="Transfery">Transfery</SelectItem>
                        <SelectItem value="Treningi">Treningi</SelectItem>
                        <SelectItem value="Wydarzenia">Wydarzenia</SelectItem>
                        <SelectItem value="Wywiady">Wywiady</SelectItem>
                        <SelectItem value="Ogłoszenia">Ogłoszenia</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="excerpt">Krótki opis</Label>
                    <Textarea id="excerpt" placeholder="Krótki opis artykułu..." rows={2} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="content">Treść</Label>
                    <Textarea id="content" placeholder="Pełna treść artykułu..." rows={8} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="image">URL zdjęcia</Label>
                    <Input id="image" placeholder="https://example.com/image.jpg" />
                  </div>
                  <div className="flex justify-end space-x-2">
                    <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                      Anuluj
                    </Button>
                    <Button onClick={() => setIsAddDialogOpen(false)}>
                      <FileText className="w-4 h-4 mr-2" />
                      Opublikuj Artykuł
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
                placeholder="Szukaj artykułów..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Filtruj kategorię" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Wszystkie kategorie</SelectItem>
                <SelectItem value="Mecze">Mecze</SelectItem>
                <SelectItem value="Transfery">Transfery</SelectItem>
                <SelectItem value="Treningi">Treningi</SelectItem>
                <SelectItem value="Wydarzenia">Wydarzenia</SelectItem>
                <SelectItem value="Wywiady">Wywiady</SelectItem>
                <SelectItem value="Ogłoszenia">Ogłoszenia</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* News Table */}
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Artykuł</TableHead>
                  <TableHead>Kategoria</TableHead>
                  <TableHead>Data publikacji</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Akcje</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredNews.map((article) => (
                  <TableRow key={article.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium line-clamp-1">{article.title}</div>
                        <div className="text-sm text-muted-foreground line-clamp-2 mt-1">{article.excerpt}</div>
                      </div>
                    </TableCell>
                    <TableCell>{getCategoryBadge(article.category)}</TableCell>
                    <TableCell>
                      <div className="text-sm">{new Date(article.date).toLocaleDateString("pl-PL")}</div>
                    </TableCell>
                    <TableCell>
                      <Badge className="bg-green-500 text-white">Opublikowany</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end space-x-2">
                        <Button size="sm" variant="outline">
                          <Eye className="w-4 h-4" />
                        </Button>
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

          {filteredNews.length === 0 && (
            <div className="text-center py-8">
              <p className="text-muted-foreground">Nie znaleziono artykułów spełniających kryteria wyszukiwania.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
