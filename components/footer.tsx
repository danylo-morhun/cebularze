import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { TEAM_INFO, CONTACT_INFO, NAVIGATION_ITEMS } from "@/lib/constants"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Image
                src={TEAM_INFO.logo || "/placeholder.svg"}
                alt={`${TEAM_INFO.name} Logo`}
                width={40}
                height={40}
                className="animate-glow"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-gradient">CEBULARZE</span>
                <span className="text-sm text-muted-foreground">KALISZ</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{TEAM_INFO.motto}</p>
            <p className="text-xs text-muted-foreground">Założony w {TEAM_INFO.founded} roku</p>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4">Szybkie linki</h4>
            <ul className="space-y-2">
              {NAVIGATION_ITEMS.slice(0, 5).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4">Kontakt</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <div>{CONTACT_INFO.arena.name}</div>
                  <div>{CONTACT_INFO.arena.address}</div>
                </div>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4">Śledź nas</h4>
            <div className="flex flex-wrap gap-2">
              <Button
                variant="outline"
                size="sm"
                asChild
                className="hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                <a href={CONTACT_INFO.socialMedia.facebook} target="_blank" rel="noopener noreferrer">
                  <Facebook className="w-4 h-4" />
                  <span className="sr-only">Facebook</span>
                </a>
              </Button>
              <Button
                variant="outline"
                size="sm"
                asChild
                className="hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                <a href={CONTACT_INFO.socialMedia.instagram} target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-4 h-4" />
                  <span className="sr-only">Instagram</span>
                </a>
              </Button>
              <Button
                variant="outline"
                size="sm"
                asChild
                className="hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                <a href={CONTACT_INFO.socialMedia.twitter} target="_blank" rel="noopener noreferrer">
                  <Twitter className="w-4 h-4" />
                  <span className="sr-only">Twitter</span>
                </a>
              </Button>
              <Button
                variant="outline"
                size="sm"
                asChild
                className="hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                <a href={CONTACT_INFO.socialMedia.tiktok} target="_blank" rel="noopener noreferrer">
                  <Youtube className="w-4 h-4" />
                  <span className="sr-only">TikTok</span>
                </a>
              </Button>
            </div>

            {/* Newsletter signup */}
            <div className="mt-4">
              <p className="text-sm text-muted-foreground mb-2">Newsletter</p>
              <Button size="sm" className="w-full">
                Zapisz się
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © {currentYear} {TEAM_INFO.name}. Wszystkie prawa zastrzeżone.
          </p>
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Polityka prywatności
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors">
              Regulamin
            </Link>
            <Link href="/cookies" className="hover:text-primary transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
