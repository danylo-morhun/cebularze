import type React from "react"
import { cn } from "@/lib/utils"

interface PageHeaderProps {
  title: string
  description?: string
  className?: string
  children?: React.ReactNode
}

export function PageHeader({ title, description, className, children }: PageHeaderProps) {
  return (
    <div className={cn("space-y-4 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-16", className)}>
      <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center mx-auto">
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl text-balance">
          {title}
        </h1>
        {description && (
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8 text-pretty">
            {description}
          </p>
        )}
        {children}
      </div>
    </div>
  )
}
