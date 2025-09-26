import type React from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

interface MainLayoutProps {
  children: React.ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 pt-16">{children}</main>
      <Footer />
    </div>
  )
}
