import { MainLayout } from "@/components/layout/main-layout"
import { PageHeader } from "@/components/ui/page-header"
import { ScheduleView } from "@/components/schedule/schedule-view"

export default function SchedulePage() {
  return (
    <MainLayout>
      <PageHeader
        title="Terminarz Meczów"
        description="Sprawdź nadchodzące mecze, wyniki i szczegóły rozgrywek Cebularzy Kalisz"
      />
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <ScheduleView />
      </div>
    </MainLayout>
  )
}
