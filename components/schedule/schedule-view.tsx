"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { MatchList } from "@/components/schedule/match-list"
import { MatchCalendar } from "@/components/schedule/match-calendar"
import { ScheduleFilters } from "@/components/schedule/schedule-filters"
import { Calendar, List, BarChart3, TrendingUp } from "lucide-react"

export function ScheduleView() {
  const [activeTab, setActiveTab] = useState("list")

  return (
    <div className="space-y-8">
      {/* Filters Section */}
      <ScheduleFilters />

      {/* View Tabs */}
      <Card className="shadow-sm rounded-lg">
        <CardContent className="p-0">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="p-6 pb-0">
              <TabsList className="grid w-full grid-cols-3 h-auto bg-muted/30 dark:bg-gray-800/60 p-1 rounded-lg">
                <TabsTrigger 
                  value="list" 
                  className="flex items-center space-x-2 py-3 px-4 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground dark:data-[state=active]:bg-primary dark:data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm rounded-md transition-all duration-200 text-muted-foreground hover:text-foreground"
                >
                  <List className="w-4 h-4" />
                  <span className="font-medium">Lista Meczów</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="calendar" 
                  className="flex items-center space-x-2 py-3 px-4 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground dark:data-[state=active]:bg-primary dark:data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm rounded-md transition-all duration-200 text-muted-foreground hover:text-foreground"
                >
                  <Calendar className="w-4 h-4" />
                  <span className="font-medium">Kalendarz</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="stats" 
                  className="flex items-center space-x-2 py-3 px-4 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground dark:data-[state=active]:bg-primary dark:data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm rounded-md transition-all duration-200 text-muted-foreground hover:text-foreground"
                >
                  <BarChart3 className="w-4 h-4" />
                  <span className="font-medium">Statystyki</span>
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="list" className="m-0">
              <div className="p-6">
                <MatchList />
              </div>
            </TabsContent>

            <TabsContent value="calendar" className="m-0">
              <div className="p-6">
                <MatchCalendar />
              </div>
            </TabsContent>

            <TabsContent value="stats" className="m-0">
              <div className="p-12">
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <TrendingUp className="w-10 h-10 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-foreground">Statystyki Meczów</h3>
                    <p className="text-muted-foreground max-w-md mx-auto">
                      Szczegółowe analizy, wykresy i statystyki meczów będą dostępne wkrótce
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <div className="text-2xl font-bold text-primary mb-1">85%</div>
                      <div className="text-sm text-muted-foreground">Skuteczność</div>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <div className="text-2xl font-bold text-primary mb-1">2.3</div>
                      <div className="text-sm text-muted-foreground">Średnia bramek</div>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <div className="text-2xl font-bold text-primary mb-1">12</div>
                      <div className="text-sm text-muted-foreground">Mecze w sezonie</div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
