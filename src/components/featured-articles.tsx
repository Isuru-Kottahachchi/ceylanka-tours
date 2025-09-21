import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const featuredArticles = [
  {
    id: 1,
    title: "Top 10 Must-Visit Beaches in Sri Lanka",
    path: "top10-beaches-in-sri-lanka",
    excerpt:
      "From the golden sands of Unawatuna to the pristine shores of Mirissa, discover the most beautiful beaches...",
    image: "/Bentotabeach.jpeg",
    category: "Beaches",
    // author: "Isuru Kottahachchi",
    // date: "2024-01-15",
    // views: "2.5K",
    readTime: "8 min read",
  },
  {
    id: 2,
    title: "Lunuganga Geoffrey Bawa's Garden Paradise",
    path: "lunuganga-geoffrey-bawas-garden",
    excerpt: "Explore the rich Buddhist heritage of Sri Lanka through its magnificent temples and sacred sites...",
    image: "/Lunugangabawa2.jpeg",
    category: "Culture",
    author: "Michael Chen",
    date: "2024-01-12",
    views: "1.8K",
    readTime: "12 min read",
  },
  {
    id: 3,
    title: "Wild Safari Parks in Sri Lanka",
    path: "wild-safari-parks-in-srilanka",
    excerpt: "Your complete guide to experiencing the incredible wildlife of Sri Lanka's most famous national park...",
    image: "/Yala-national-park.jpg",
    category: "Wildlife",
    author: "Emma Wilson",
    date: "2024-01-10",
    views: "3.2K",
    readTime: "10 min read",
  },
  {
    id: 4,
    title: "Ramayana Sites in Sri Lanka",
    path: "ramayanaya-sites",
    excerpt: "Journey through the ancient legends and discover the sacred sites connected to the Ramayana epic...",
    image: "/Ramayanaya-Sites.png",
    category: "History",
    author: "David Kumar",
    date: "2024-01-08",
    views: "2.1K",
    readTime: "15 min read",
  },
]

export function FeaturedArticles() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Stories</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover the best of Sri Lanka through our carefully curated travel guides, history, and insider tips
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredArticles.map((article) => (
            <Card key={article.id} className="group hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <div className="relative overflow-hidden">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-3 left-3 bg-cyan-500 hover:bg-cyan-600">{article.category}</Badge>
              </div>

              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-semibold line-clamp-2 group-hover:text-cyan-600 transition-colors">
                  {/* <Link href={`/blog/${article.id}`}>{article.title}</Link> */}
                  <Link href={`/blog/${article.path}`}>{article.title}</Link>
                </CardTitle>
              </CardHeader>

              <CardContent className="pt-0">
                <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3 mb-4">{article.excerpt}</p>

                {/*
                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1">
                      <User className="h-3 w-3" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{formatDateSafe(article.date)}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Eye className="h-3 w-3" />
                    <span>{article.views}</span>
                  </div>
                </div>
                */}

                <div className="mt-2 text-xs text-cyan-600 font-medium">{article.readTime}</div>
                
                {/* View Article Button */}
                <div className="mt-4">
                  <Link
                    href={`/blog/${article.path}`}
                    className="inline-flex items-center justify-center w-full px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white text-sm font-medium rounded-md transition-colors duration-200"
                  >
                    Read Article
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Articles Button */}
        <div className="text-center mt-12">
          <Link
            href="/articles"
            className="inline-flex items-center px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  )
}
