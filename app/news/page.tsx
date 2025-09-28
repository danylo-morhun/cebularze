import { Metadata } from "next"
import { MainLayout } from "@/components/layout/main-layout"
import { PageHeader } from "@/components/ui/page-header"
import { NewsPage } from "@/components/news/news-page"
import { mockNews } from "@/data/mock-data"

export const metadata: Metadata = {
  title: "Aktualności - Cebularze Kalisz",
  description: "Najnowsze wiadomości z życia klubu Cebularze Kalisz. Relacje z meczów, informacje o zawodnikach, wydarzenia klubowe i wiele więcej.",
  keywords: ["hokej", "Cebularze", "Kalisz", "aktualności", "wiadomości", "mecze", "zawodnicy"],
  openGraph: {
    title: "Aktualności - Cebularze Kalisz",
    description: "Najnowsze wiadomości z życia klubu Cebularze Kalisz",
    type: "website",
  },
}

export default function News() {
  return (
    <MainLayout>
      <PageHeader
        title="Aktualności"
        subtitle="Najnowsze wiadomości z życia klubu"
        description="Bądź na bieżąco z najnowszymi wydarzeniami, relacjami z meczów, informacjami o zawodnikach i wydarzeniami klubowymi"
      />
      <NewsPage news={mockNews} />
    </MainLayout>
  )
}
