"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ArrowRight, Play } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-black leading-none">
                <span className="text-gradient">THAT'S</span>
                <br />
                <span className="text-foreground">HOCKEY</span>
                <br />
                <span className="text-primary">SPIRIT.</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                Kalisz hockey team with fierce determination. We turn passion into victory. Any challenge, any opponent
                - show us where it matters, and we'll deliver the perfect game.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 group">
                Join Our Team
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="group bg-transparent">
                <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Watch Highlights
              </Button>
            </div>
          </div>

          {/* Right Content - Logo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse" />
              <Image
                src="/logo.png"
                alt="Cebularze Logo"
                width={400}
                height={400}
                className="relative animate-float drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
