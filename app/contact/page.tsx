"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PageHeader } from "@/components/ui/page-header"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Users,
  MessageSquare,
  Send,
  CheckCircle,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
} from "lucide-react"

const contactInfo = {
  address: {
    street: "ul. Sportowa 15",
    city: "62-800 Kalisz",
    country: "Polska",
  },
  phone: "+48 62 757 12 34",
  email: "kontakt@cebularze-kalisz.pl",
  socialMedia: {
    facebook: "https://facebook.com/cebularze.kalisz",
    instagram: "https://instagram.com/cebularze_kalisz",
    youtube: "https://youtube.com/@cebularze-kalisz",
    twitter: "https://twitter.com/cebularze_kalisz",
  },
  hours: {
    weekdays: "16:00 - 22:00",
    weekends: "10:00 - 20:00",
  },
}

const managementTeam = [
  {
    name: "Marek Kowalski",
    position: "Prezes Klubu",
    email: "prezes@cebularze-kalisz.pl",
    phone: "+48 601 234 567",
  },
  {
    name: "Anna Nowak",
    position: "Trener Główny",
    email: "trener@cebularze-kalisz.pl",
    phone: "+48 602 345 678",
  },
  {
    name: "Piotr Wiśniewski",
    position: "Menedżer Drużyny",
    email: "menedzer@cebularze-kalisz.pl",
    phone: "+48 603 456 789",
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    type: "general",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        type: "general",
      })
    }, 3000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="min-h-screen bg-background">
      <PageHeader title="Kontakt" subtitle="Skontaktuj się z nami - jesteśmy tutaj, aby pomóc" />

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <MessageSquare className="h-6 w-6 text-primary" />
                  Napisz do nas
                </CardTitle>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Dziękujemy!</h3>
                    <p className="text-muted-foreground">
                      Twoja wiadomość została wysłana. Odpowiemy najszybciej jak to możliwe.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Imię i nazwisko *</label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Jan Kowalski"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email *</label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="jan@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Telefon</label>
                        <Input
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+48 123 456 789"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Typ zapytania</label>
                        <select
                          name="type"
                          value={formData.type}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-border rounded-md bg-background"
                        >
                          <option value="general">Ogólne</option>
                          <option value="training">Treningi</option>
                          <option value="sponsorship">Sponsoring</option>
                          <option value="media">Media</option>
                          <option value="other">Inne</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Temat *</label>
                      <Input
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        placeholder="Temat wiadomości"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Wiadomość *</label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        placeholder="Opisz swoje zapytanie..."
                      />
                    </div>

                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Wysyłanie...
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <Send className="h-4 w-4" />
                          Wyślij wiadomość
                        </div>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Address & Basic Info */}
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Informacje kontaktowe
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="font-medium">Adres</p>
                    <p className="text-muted-foreground">
                      {contactInfo.address.street}
                      <br />
                      {contactInfo.address.city}
                      <br />
                      {contactInfo.address.country}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Telefon</p>
                    <a href={`tel:${contactInfo.phone}`} className="text-primary hover:underline">
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href={`mailto:${contactInfo.email}`} className="text-primary hover:underline">
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="font-medium">Godziny otwarcia</p>
                    <p className="text-muted-foreground">
                      Pon-Pt: {contactInfo.hours.weekdays}
                      <br />
                      Sob-Nie: {contactInfo.hours.weekends}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Management Team */}
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Zarząd klubu
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {managementTeam.map((member, index) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="border-l-2 border-primary/20 pl-4"
                  >
                    <h4 className="font-semibold">{member.name}</h4>
                    <Badge variant="secondary" className="mb-2">
                      {member.position}
                    </Badge>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <a href={`mailto:${member.email}`} className="block hover:text-primary transition-colors">
                        {member.email}
                      </a>
                      <a href={`tel:${member.phone}`} className="block hover:text-primary transition-colors">
                        {member.phone}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Śledź nas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <a
                    href={contactInfo.socialMedia.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href={contactInfo.socialMedia.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 transition-all"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href={contactInfo.socialMedia.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-red-600 text-white hover:bg-red-700 transition-colors"
                  >
                    <Youtube className="h-5 w-5" />
                  </a>
                  <a
                    href={contactInfo.socialMedia.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-sky-500 text-white hover:bg-sky-600 transition-colors"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Interactive Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Lokalizacja</CardTitle>
              <p className="text-muted-foreground">Znajdź nas na mapie - łatwy dojazd z centrum Kalisza</p>
            </CardHeader>
            <CardContent>
              <div className="aspect-video rounded-lg overflow-hidden bg-muted">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2441.123456789!2d18.0897!3d51.7687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDQ2JzA3LjMiTiAxOMKwMDUnMjIuOSJF!5e0!3m2!1spl!2spl!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokalizacja Cebularze Kalisz"
                />
              </div>
              <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                <h4 className="font-semibold mb-2">Dojazd komunikacją publiczną:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Autobus linii 12, 15 - przystanek "Sportowa"</li>
                  <li>• Pociąg - Dworzec PKP Kalisz (15 min pieszo)</li>
                  <li>• Parking dostępny na miejscu</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
