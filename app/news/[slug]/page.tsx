import { Metadata } from "next"
import { notFound } from "next/navigation"
import { MainLayout } from "@/components/layout/main-layout"
import { PageHeader } from "@/components/ui/page-header"
import { NewsDetail } from "@/components/news/news-detail"
import { RelatedNews } from "@/components/news/related-news"
import { mockNews } from "@/data/mock-data"

interface NewsDetailPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: NewsDetailPageProps): Promise<Metadata> {
  const article = mockNews.find((news) => news.slug === params.slug)
  
  if (!article) {
    return {
      title: "Artykuł nie znaleziony - Cebularze Kalisz",
    }
  }

  return {
    title: `${article.title} - Cebularze Kalisz`,
    description: article.excerpt,
    keywords: article.tags,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.date.toISOString(),
      authors: [article.author],
      images: [
        {
          url: article.image,
          alt: article.title,
        },
      ],
    },
  }
}

export default function NewsDetailPage({ params }: NewsDetailPageProps) {
  const article = mockNews.find((news) => news.slug === params.slug)
  
  if (!article) {
    notFound()
  }

  const relatedArticles = mockNews
    .filter((news) => news.id !== article.id && news.category === article.category)
    .slice(0, 3)

  return (
    <MainLayout>
      <PageHeader
        title={article.title}
        subtitle={article.excerpt}
        description={`Opublikowano: ${new Intl.DateTimeFormat("pl-PL", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }).format(new Date(article.date))} • ${article.readTime} min czytania`}
      />
      <NewsDetail article={article} />
      {relatedArticles.length > 0 && <RelatedNews articles={relatedArticles} />}
    </MainLayout>
  )
}
