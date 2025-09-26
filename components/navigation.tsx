"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Home, Users, Calendar, Newspaper, Camera, Info, Phone, Trophy, UserPlus } from "lucide-react"
import { NAVIGATION_ITEMS, TEAM_INFO } from "@/lib/constants"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navIcons = {
    "/": Home,
    "/roster": Users,
    "/schedule": Calendar,
    "/juniors": UserPlus,
    "/apply": Trophy,
    "/news": Newspaper,
    "/gallery": Camera,
    "/about": Info,
    "/contact": Phone,
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg"
          : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <Image
                src={TEAM_INFO.logo || "/placeholder.svg"}
                alt={`${TEAM_INFO.name} Logo`}
                width={40}
                height={40}
                className="transition-transform duration-300 group-hover:scale-110 animate-glow"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg lg:text-xl font-bold text-gradient leading-none">CEBULARZE</span>
              <span className="text-xs text-muted-foreground leading-none">KALISZ</span>
            </div>
          </Link>

          <div className="hidden lg:block">
            <div className="flex items-center space-x-1">
              {NAVIGATION_ITEMS.map((item) => {
                const Icon = navIcons[item.href as keyof typeof navIcons]
                const isActive = pathname === item.href
                return (
                  <Link key={item.href} href={item.href}>
                    <Button
                      variant={isActive ? "default" : "ghost"}
                      size="sm"
                      className={`relative group transition-all duration-300 ${
                        isActive
                          ? "bg-primary text-primary-foreground shadow-lg"
                          : "hover:bg-primary/10 hover:text-primary"
                      }`}
                    >
                      {Icon && <Icon className="w-4 h-4 mr-2" />}
                      {item.label}
                      {isActive && (
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full animate-pulse-green" />
                      )}
                    </Button>
                  </Link>
                )
              })}
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <ThemeToggle />

            {/* Mobile menu */}
            <div className="lg:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm" className="p-2">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Otwórz menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-full sm:w-80 p-0">
                  <div className="flex flex-col h-full">
                    {/* Mobile header */}
                    <div className="flex items-center justify-between p-4 sm:p-6 border-b border-border">
                      <div className="flex items-center space-x-3">
                        <Image
                          src={TEAM_INFO.logo || "/placeholder.svg"}
                          alt={`${TEAM_INFO.name} Logo`}
                          width={32}
                          height={32}
                          className="animate-glow"
                        />
                        <div className="flex flex-col">
                          <span className="font-bold text-gradient">CEBULARZE</span>
                          <span className="text-xs text-muted-foreground">KALISZ</span>
                        </div>
                      </div>
                    </div>

                    {/* Mobile navigation */}
                    <div className="flex-1 py-4 sm:py-6">
                      <nav className="space-y-1 sm:space-y-2 px-4 sm:px-6">
                        {NAVIGATION_ITEMS.map((item) => {
                          const Icon = navIcons[item.href as keyof typeof navIcons]
                          const isActive = pathname === item.href
                          return (
                            <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
                              <div
                                className={`flex items-center space-x-3 px-3 sm:px-4 py-3 rounded-lg transition-all duration-300 ${
                                  isActive
                                    ? "bg-primary text-primary-foreground shadow-lg"
                                    : "hover:bg-primary/10 hover:text-primary"
                                }`}
                              >
                                {Icon && <Icon className="w-5 h-5 flex-shrink-0" />}
                                <span className="font-medium">{item.label}</span>
                              </div>
                            </Link>
                          )
                        })}
                      </nav>
                    </div>

                    {/* Mobile footer */}
                    <div className="p-4 sm:p-6 border-t border-border">
                      <p className="text-sm text-muted-foreground text-center">{TEAM_INFO.motto}</p>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
