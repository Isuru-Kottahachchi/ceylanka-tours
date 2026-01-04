import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Authentic Sri Lankan Cuisine | Traditional Food Guide for Foreigners | Ceylanka Tours',
  description: 'Discover authentic Sri Lankan cuisine that foreigners love! Complete guide to traditional dishes like rice and curry, kottu roti, hoppers, and regional specialties. Learn about spices, dining etiquette, and where to find the best local food experiences.',
  keywords: 'Sri Lankan food, authentic cuisine, traditional dishes, rice and curry, kottu roti, hoppers, Ceylon food, spicy food, coconut curry, street food Sri Lanka, food tour, cooking classes, regional specialties, food guide tourists',
  authors: [{ name: 'Ceylanka Tours' }],
  openGraph: {
    title: 'Authentic Sri Lankan Cuisine Guide | Traditional Food for Foreigners',
    description: 'Experience the incredible flavors of Sri Lankan cuisine! From spicy curries to sweet desserts, discover authentic dishes that will delight your taste buds.',
    type: 'article',
    locale: 'en_US',
    siteName: 'Ceylanka Tours',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Authentic Sri Lankan Cuisine Guide | Traditional Food for Foreigners',
    description: 'Experience the incredible flavors of Sri Lankan cuisine! From spicy curries to sweet desserts, discover authentic dishes that will delight your taste buds.',
  },
  alternates: {
    canonical: '/famous-crusine'
  }
}

export default function FamousCuisineLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
