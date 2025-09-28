import type { Metadata } from "next"
import { MainLayout } from "@/components/layout/main-layout"
import { PageHeader } from "@/components/ui/page-header"
import { JuniorRosterGrid } from "@/components/juniors/junior-roster-grid"
import { JuniorRosterFilters } from "@/components/juniors/junior-roster-filters"

export const metadata: Metadata = {
  title: "Skład Szczypiorki Kalisz - Drużyna Juniorska | Cebularze Kalisz",
  description:
    "Poznaj młodych zawodników Szczypiorki Kalisz - ich historie, rozwój i osiągnięcia w drużynie juniorskiej.",
}

export default function JuniorRosterPage() {
  return (
    <MainLayout>
      <PageHeader
        title="Skład Szczypiorki Kalisz"
        subtitle="Drużyna Juniorska"
        description="Poznaj młodych zawodników naszej drużyny juniorskiej - ich historie, rozwój i osiągnięcia"
      />
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <JuniorRosterFilters />
        <JuniorRosterGrid />
      </div>
    </MainLayout>
  )
}
