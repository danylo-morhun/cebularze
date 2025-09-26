"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Upload, Send, User, Calendar, Trophy } from "lucide-react"
import { toast } from "@/hooks/use-toast"

interface ApplicationData {
  // Personal Information
  firstName: string
  lastName: string
  dateOfBirth: string
  nationality: string
  phone: string
  email: string
  address: string
  city: string
  postalCode: string

  // Hockey Information
  position: string
  experience: string
  currentTeam: string
  previousTeams: string
  achievements: string
  playingStyle: string

  // Physical Information
  height: string
  weight: string
  shoots: string

  // Application Details
  teamPreference: string
  availability: string
  motivation: string
  references: string

  // Documents
  hasVideo: boolean
  hasPhotos: boolean
  hasReferences: boolean

  // Agreement
  termsAccepted: boolean
  dataProcessingAccepted: boolean
}

export function TeamApplicationForm() {
  const [formData, setFormData] = useState<ApplicationData>({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    nationality: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    position: "",
    experience: "",
    currentTeam: "",
    previousTeams: "",
    achievements: "",
    playingStyle: "",
    height: "",
    weight: "",
    shoots: "",
    teamPreference: "",
    availability: "",
    motivation: "",
    references: "",
    hasVideo: false,
    hasPhotos: false,
    hasReferences: false,
    termsAccepted: false,
    dataProcessingAccepted: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (field: keyof ApplicationData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.termsAccepted || !formData.dataProcessingAccepted) {
      toast({
        title: "Błąd",
        description: "Musisz zaakceptować regulamin i zgodę na przetwarzanie danych.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    toast({
      title: "Aplikacja wysłana!",
      description: "Twoja aplikacja została pomyślnie wysłana. Skontaktujemy się z Tobą w ciągu 7 dni roboczych.",
    })

    setIsSubmitting(false)

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      nationality: "",
      phone: "",
      email: "",
      address: "",
      city: "",
      postalCode: "",
      position: "",
      experience: "",
      currentTeam: "",
      previousTeams: "",
      achievements: "",
      playingStyle: "",
      height: "",
      weight: "",
      shoots: "",
      teamPreference: "",
      availability: "",
      motivation: "",
      references: "",
      hasVideo: false,
      hasPhotos: false,
      hasReferences: false,
      termsAccepted: false,
      dataProcessingAccepted: false,
    })
  }

  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold text-primary">Formularz Aplikacyjny</CardTitle>
        <CardDescription>Wypełnij wszystkie pola, aby złożyć aplikację do drużyny Cebularze Kalisz</CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal Information */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <User className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">Dane Osobowe</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">Imię *</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange("firstName", e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="lastName">Nazwisko *</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange("lastName", e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="dateOfBirth">Data urodzenia *</Label>
                <Input
                  id="dateOfBirth"
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="nationality">Narodowość *</Label>
                <Input
                  id="nationality"
                  value={formData.nationality}
                  onChange={(e) => handleInputChange("nationality", e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="phone">Telefon *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-2">
                <Label htmlFor="address">Adres *</Label>
                <Input
                  id="address"
                  value={formData.address}
                  onChange={(e) => handleInputChange("address", e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="city">Miasto *</Label>
                <Input
                  id="city"
                  value={formData.city}
                  onChange={(e) => handleInputChange("city", e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

          {/* Hockey Information */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Trophy className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">Informacje Hokejowe</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="position">Pozycja *</Label>
                <Select value={formData.position} onValueChange={(value) => handleInputChange("position", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Wybierz pozycję" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="center">Środkowy napastnik</SelectItem>
                    <SelectItem value="left-wing">Lewy skrzydłowy</SelectItem>
                    <SelectItem value="right-wing">Prawy skrzydłowy</SelectItem>
                    <SelectItem value="left-defense">Lewy obrońca</SelectItem>
                    <SelectItem value="right-defense">Prawy obrońca</SelectItem>
                    <SelectItem value="goalie">Bramkarz</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="experience">Doświadczenie *</Label>
                <Select value={formData.experience} onValueChange={(value) => handleInputChange("experience", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Wybierz poziom" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Początkujący (0-2 lata)</SelectItem>
                    <SelectItem value="intermediate">Średniozaawansowany (3-5 lat)</SelectItem>
                    <SelectItem value="advanced">Zaawansowany (6-10 lat)</SelectItem>
                    <SelectItem value="professional">Profesjonalny (10+ lat)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="height">Wzrost (cm) *</Label>
                <Input
                  id="height"
                  type="number"
                  value={formData.height}
                  onChange={(e) => handleInputChange("height", e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="weight">Waga (kg) *</Label>
                <Input
                  id="weight"
                  type="number"
                  value={formData.weight}
                  onChange={(e) => handleInputChange("weight", e.target.value)}
                  required
                />
              </div>
              <div>
                <Label>Strzela *</Label>
                <RadioGroup
                  value={formData.shoots}
                  onValueChange={(value) => handleInputChange("shoots", value)}
                  className="flex gap-4 mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="left" id="left" />
                    <Label htmlFor="left">Lewą</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="right" id="right" />
                    <Label htmlFor="right">Prawą</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>

            <div>
              <Label htmlFor="currentTeam">Obecna drużyna</Label>
              <Input
                id="currentTeam"
                value={formData.currentTeam}
                onChange={(e) => handleInputChange("currentTeam", e.target.value)}
                placeholder="Nazwa obecnej drużyny (jeśli dotyczy)"
              />
            </div>

            <div>
              <Label htmlFor="previousTeams">Poprzednie drużyny</Label>
              <Textarea
                id="previousTeams"
                value={formData.previousTeams}
                onChange={(e) => handleInputChange("previousTeams", e.target.value)}
                placeholder="Wymień poprzednie drużyny i lata gry..."
                rows={3}
              />
            </div>

            <div>
              <Label htmlFor="achievements">Osiągnięcia</Label>
              <Textarea
                id="achievements"
                value={formData.achievements}
                onChange={(e) => handleInputChange("achievements", e.target.value)}
                placeholder="Opisz swoje najważniejsze osiągnięcia hokejowe..."
                rows={3}
              />
            </div>
          </div>

          {/* Application Details */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">Szczegóły Aplikacji</h3>
            </div>

            <div>
              <Label htmlFor="teamPreference">Preferowana drużyna *</Label>
              <Select
                value={formData.teamPreference}
                onValueChange={(value) => handleInputChange("teamPreference", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Wybierz drużynę" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="senior">Cebularze Kalisz (Drużyna Seniorska)</SelectItem>
                  <SelectItem value="junior">Szczypiorki Kalisz (Drużyna Juniorska)</SelectItem>
                  <SelectItem value="both">Obie drużyny</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="availability">Dostępność *</Label>
              <Textarea
                id="availability"
                value={formData.availability}
                onChange={(e) => handleInputChange("availability", e.target.value)}
                placeholder="Opisz swoją dostępność na treningi i mecze..."
                rows={3}
                required
              />
            </div>

            <div>
              <Label htmlFor="motivation">Motywacja *</Label>
              <Textarea
                id="motivation"
                value={formData.motivation}
                onChange={(e) => handleInputChange("motivation", e.target.value)}
                placeholder="Dlaczego chcesz dołączyć do naszej drużyny? Co możesz wnieść do zespołu?"
                rows={4}
                required
              />
            </div>

            <div>
              <Label htmlFor="references">Referencje</Label>
              <Textarea
                id="references"
                value={formData.references}
                onChange={(e) => handleInputChange("references", e.target.value)}
                placeholder="Podaj kontakt do trenerów lub osób, które mogą Cię polecić..."
                rows={3}
              />
            </div>
          </div>

          {/* Documents */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Upload className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">Dokumenty i Materiały</h3>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="hasVideo"
                  checked={formData.hasVideo}
                  onCheckedChange={(checked) => handleInputChange("hasVideo", checked as boolean)}
                />
                <Label htmlFor="hasVideo">Posiadam nagrania z meczów/treningów</Label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="hasPhotos"
                  checked={formData.hasPhotos}
                  onCheckedChange={(checked) => handleInputChange("hasPhotos", checked as boolean)}
                />
                <Label htmlFor="hasPhotos">Posiadam zdjęcia z gry</Label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="hasReferences"
                  checked={formData.hasReferences}
                  onCheckedChange={(checked) => handleInputChange("hasReferences", checked as boolean)}
                />
                <Label htmlFor="hasReferences">Posiadam pisemne referencje</Label>
              </div>
            </div>

            <div className="p-4 bg-muted/50 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong>Uwaga:</strong> Po wysłaniu aplikacji skontaktujemy się z Tobą w sprawie przesłania materiałów
                wideo, zdjęć i innych dokumentów.
              </p>
            </div>
          </div>

          {/* Terms and Conditions */}
          <div className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="termsAccepted"
                  checked={formData.termsAccepted}
                  onCheckedChange={(checked) => handleInputChange("termsAccepted", checked as boolean)}
                  required
                />
                <Label htmlFor="termsAccepted" className="text-sm leading-relaxed">
                  Akceptuję regulamin klubu i zobowiązuję się do przestrzegania zasad fair play oraz kodeksu etycznego
                  zawodnika *
                </Label>
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox
                  id="dataProcessingAccepted"
                  checked={formData.dataProcessingAccepted}
                  onCheckedChange={(checked) => handleInputChange("dataProcessingAccepted", checked as boolean)}
                  required
                />
                <Label htmlFor="dataProcessingAccepted" className="text-sm leading-relaxed">
                  Wyrażam zgodę na przetwarzanie moich danych osobowych w celu rozpatrzenia aplikacji zgodnie z RODO *
                </Label>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-6">
            <Button type="submit" size="lg" disabled={isSubmitting} className="min-w-[200px]">
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                  Wysyłanie...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Wyślij Aplikację
                </>
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
