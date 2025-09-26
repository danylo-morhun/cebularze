"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MatchList } from "@/components/schedule/match-list"
import { MatchCalendar } from "@/components/schedule/match-calendar"
import { ScheduleFilters } from "@/components/schedule/schedule-filters"
import { Calendar, List, BarChart3 } from "lucide-react"

export function ScheduleView() {
  const [activeTab, setActiveTab] = useState("list")

  return (
    <div className="space-y-6">
      <ScheduleFilters />

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 lg:w-96 mx-auto">
          <TabsTrigger value="list" className="flex items-center space-x-2">
            <List className="w-4 h-4" />
            <span>Lista</span>
          </TabsTrigger>
          <TabsTrigger value="calendar" className="flex items-center space-x-2">
            <Calendar className="w-4 h-4" />
            <span>Kalendarz</span>
          </TabsTrigger>
          <TabsTrigger value="stats" className="flex items-center space-x-2">
            <BarChart3 className="w-4 h-4" />
            <span>Statystyki</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="list" className="mt-6">
          <MatchList />
        </TabsContent>

        <TabsContent value="calendar" className="mt-6">
          <MatchCalendar />
        </TabsContent>

        <TabsContent value="stats" className="mt-6">
          <div className="text-center py-12">
            <BarChart3 className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">Statystyki meczów</h3>
            <p className="text-muted-foreground">Szczegółowe statystyki będą dostępne wkrótce</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
