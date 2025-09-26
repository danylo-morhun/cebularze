import { MainLayout } from "@/components/layout/main-layout"
import { PageHeader } from "@/components/ui/page-header"
import { RosterGrid } from "@/components/roster/roster-grid"
import { RosterFilters } from "@/components/roster/roster-filters"

export default function RosterPage() {
  return (
    <MainLayout>
      <PageHeader
        title="Skład Drużyny"
        description="Poznaj zawodników Cebularzy Kalisz - ich historie, statystyki i osiągnięcia"
      />
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <RosterFilters />
        <RosterGrid />
      </div>
    </MainLayout>
  )
}
