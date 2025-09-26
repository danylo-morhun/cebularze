import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-4">
            <span className="text-gradient">GET IN</span>
            <br />
            <span className="text-foreground">TOUCH</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to join the Cebularze family or have questions? Let's connect.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Send us a message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">First Name</label>
                  <Input placeholder="Your first name" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Last Name</label>
                  <Input placeholder="Your last name" />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                <Input type="email" placeholder="your.email@example.com" />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Subject</label>
                <Input placeholder="What's this about?" />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
                <Textarea placeholder="Tell us more about your inquiry..." className="min-h-[120px]" />
              </div>

              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Send Message</Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Visit Us</h4>
                  <p className="text-muted-foreground">
                    Kalisz Ice Arena
                    <br />
                    ul. Sportowa 15
                    <br />
                    62-800 Kalisz, Poland
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Call Us</h4>
                  <p className="text-muted-foreground">
                    +48 62 123 4567
                    <br />
                    +48 600 123 456
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Email Us</h4>
                  <p className="text-muted-foreground">
                    info@cebularze.pl
                    <br />
                    team@cebularze.pl
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Training Hours</h4>
                  <p className="text-muted-foreground">
                    Mon-Fri: 17:00 - 21:00
                    <br />
                    Sat-Sun: 09:00 - 18:00
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
