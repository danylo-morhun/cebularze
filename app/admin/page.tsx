import type { Metadata } from "next"
import { MainLayout } from "@/components/layout/main-layout"
import { PageHeader } from "@/components/ui/page-header"
import { AdminDashboard } from "@/components/admin/admin-dashboard"

export const metadata: Metadata = {
  title: "Panel Administracyjny - Cebularze Kalisz",
  description: "Panel zarządzania klubem hokejowym Cebularze Kalisz",
}

export default function AdminPage() {
  return (
    <MainLayout>
      <PageHeader
        title="Panel Administracyjny"
        subtitle="Zarządzanie klubem Cebularze Kalisz"
        description="Kompleksowy panel do zarządzania zawodnikami, meczami, aktualnościami i aplikacjami do drużyny."
      />
      <AdminDashboard />
    </MainLayout>
  )
}
