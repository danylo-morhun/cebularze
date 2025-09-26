import { PageHeader } from "@/components/ui/page-header"
import { TeamApplicationForm } from "@/components/application/team-application-form"
import { ApplicationInfo } from "@/components/application/application-info"
import { ApplicationFAQ } from "@/components/application/application-faq"

export default function ApplyPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Dołącz do Drużyny"
        description="Marzysz o grze w hokeja na najwyższym poziomie? Aplikuj do Cebularze Kalisz i rozpocznij swoją przygodę z profesjonalnym hokejem."
      />

      <div className="container mx-auto px-4 py-8 space-y-12">
        <ApplicationInfo />
        <TeamApplicationForm />
        <ApplicationFAQ />
      </div>
    </div>
  )
}
