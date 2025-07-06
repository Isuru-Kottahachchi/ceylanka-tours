import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Calendar, User, Eye, Search } from "lucide-react"
import { AdBanner } from "@/components/ad-banner"

const blogPosts = [
  {
    id: 1,
    title: "Top 10 Must-Visit Beaches in Sri Lanka",
    excerpt:
      "From the golden sands of Unawatuna to the pristine shores of Mirissa, discover the most beautiful beaches that make Sri Lanka a tropical paradise.",
    image: "/Bentotabeach.jpeg",
    category: "Beaches",
    author: "Isuru Kottahachchi",
    date: "2024-01-15",
    views: "2.5K",
    readTime: "8 min read",
    featured: true,
  },
  {
    id: 2,
    title: "Ancient Temples and Sacred Sites: A Spiritual Journey",
    excerpt:
      "Explore the rich Buddhist heritage of Sri Lanka through its magnificent temples and sacred sites that have stood for centuries.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Culture",
    author: "Michael Chen",
    date: "2024-01-12",
    views: "1.8K",
    readTime: "12 min read",
    featured: true,
  },
  {
    id: 3,
    title: "Wildlife Safari: Spotting Elephants in Yala National Park",
    path: "top10-beaches-in-sri-lanka",
    excerpt:
      "Your complete guide to experiencing the incredible wildlife of Sri Lanka's most famous national park and tips for the best safari experience.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Wildlife",
    author: "Emma Wilson",
    date: "2024-01-10",
    views: "3.2K",
    readTime: "10 min read",
    featured: false,
  },
  {
    id: 4,
    title: "Tea Country Adventures: Hill Country Exploration",
    excerpt:
      "Journey through the misty mountains and emerald tea plantations of Nuwara Eliya and Ella for an unforgettable highland experience.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Adventure",
    author: "David Kumar",
    date: "2024-01-08",
    views: "2.1K",
    readTime: "15 min read",
    featured: false,
  },
  {
    id: 5,
    title: "Street Food Guide: Authentic Sri Lankan Cuisine",
    excerpt:
      "Discover the flavors of Sri Lanka through its vibrant street food scene, from hoppers to kottu roti and everything in between.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Food",
    author: "Priya Patel",
    date: "2024-01-05",
    views: "1.9K",
    readTime: "7 min read",
    featured: false,
  },
  {
    id: 6,
    title: "Surfing Paradise: Best Surf Spots in Sri Lanka",
    excerpt:
      "From beginner-friendly breaks to world-class waves, discover the best surfing destinations around the island.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Adventure",
    author: "Jake Morrison",
    date: "2024-01-03",
    views: "2.8K",
    readTime: "9 min read",
    featured: false,
  },
]

const categories = ["All", "Beaches", "Culture", "Wildlife", "Adventure", "Food", "Hotels"]

export default function BlogPage() {
  const featuredPosts = blogPosts.filter((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sri Lanka Travel Blog</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover insider tips, hidden gems, and comprehensive guides to make your Sri Lankan adventure unforgettable
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto flex items-center space-x-2">
            <Input type="search" placeholder="Search blog posts..." className="bg-white text-black" />
            <Button className="bg-white text-cyan-600 hover:bg-gray-100">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              className={category === "All" ? "bg-cyan-500 hover:bg-cyan-600" : ""}
            >
              {category}
            </Button>
          ))}
        </div>

        <AdBanner slot="blog-top" />

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Featured Stories</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Card key={post.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="relative overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 left-4 bg-cyan-500 hover:bg-cyan-600">Featured</Badge>
                    <Badge className="absolute top-4 right-4 bg-black/70 text-white">{post.category}</Badge>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl font-bold line-clamp-2 group-hover:text-cyan-600 transition-colors">
                      <Link href={`/blog/${post.id}`}>{post.title}</Link>
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>

                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <User className="h-4 w-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="h-4 w-4" />
                        <span>{post.views}</span>
                      </div>
                    </div>

                    <div className="mt-2 text-sm text-cyan-600 font-medium">{post.readTime}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        <AdBanner slot="blog-middle" />

        {/* Regular Posts */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <div className="relative overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-3 left-3 bg-cyan-500 hover:bg-cyan-600">{post.category}</Badge>
                </div>

                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-semibold line-clamp-2 group-hover:text-cyan-600 transition-colors">
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                  </CardTitle>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3 mb-4">{post.excerpt}</p>

                  <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="h-3 w-3" />
                      <span>{post.views}</span>
                    </div>
                  </div>

                  <div className="mt-2 text-xs text-cyan-600 font-medium">{post.readTime}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <AdBanner slot="blog-bottom" />

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold">
            Load More Articles
          </Button>
        </div>
      </div>
    </div>
  )
}
