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
  phone: string

  // Hockey Information
  experience: string
  teamPreference: string

  // Agreement
  termsAccepted: boolean
  dataProcessingAccepted: boolean
}

export function TeamApplicationForm() {
  const [formData, setFormData] = useState<ApplicationData>({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    phone: "",
    experience: "",
    teamPreference: "",
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
      phone: "",
      experience: "",
      teamPreference: "",
      termsAccepted: false,
      dataProcessingAccepted: false,
    })
  }

  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold text-primary">Formularz Aplikacyjny</CardTitle>
        <CardDescription>Wypełnij podstawowe informacje, aby dołączyć do naszej drużyny hokejowej</CardDescription>
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
                <Label htmlFor="firstName" className="mb-2 block">Imię *</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange("firstName", e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="lastName" className="mb-2 block">Nazwisko *</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange("lastName", e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="dateOfBirth" className="mb-2 block">Data urodzenia *</Label>
                <Input
                  id="dateOfBirth"
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="phone" className="mb-2 block">Telefon *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
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
                <Label htmlFor="experience" className="mb-2 block">Doświadczenie *</Label>
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

              <div>
                <Label htmlFor="teamPreference" className="mb-2 block">Preferowana drużyna *</Label>
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
