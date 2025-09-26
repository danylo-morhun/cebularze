import type { Metadata } from "next"
import { AdminDashboard } from "@/components/admin/admin-dashboard"

export const metadata: Metadata = {
  title: "Panel Administracyjny - Cebularze Kalisz",
  description: "Panel zarządzania klubem hokejowym Cebularze Kalisz",
}

export default function AdminPage() {
  return <AdminDashboard />
}
