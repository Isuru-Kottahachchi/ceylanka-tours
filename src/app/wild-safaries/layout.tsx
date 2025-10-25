import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Wild Safaris in Sri Lanka | National Parks & Wildlife Tours | Ceylon Tours',
  description: 'Discover amazing wildlife safaris in Sri Lanka\'s top national parks including Yala, Udawalawe, Wilpattu, Minneriya, Kumana & Wasgamuwa. Experience leopards, elephants, and exotic birds.',
  keywords: [
    'Sri Lanka safari',
    'Yala National Park',
    'Udawalawe elephants',
    'Wilpattu leopards',
    'Minneriya elephant gathering',
    'Kumana bird watching',
    'Wasgamuwa wildlife',
    'Sri Lanka wildlife tours',
    'Ceylon national parks',
    'wildlife photography Sri Lanka',
    'elephant safari',
    'leopard spotting',
    'bird watching tours',
    'Sri Lankan wildlife',
    'safari packages Sri Lanka'
  ],
  authors: [{ name: 'Ceylon Tours' }],
  creator: 'Ceylon Tours',
  publisher: 'Ceylon Tours',
  robots: 'index, follow',
  openGraph: {
    title: 'Wild Safaris in Sri Lanka | National Parks & Wildlife Tours',
    description: 'Experience incredible wildlife safaris in Sri Lanka\'s pristine national parks. From the world\'s highest leopard density in Yala to the great elephant gathering in Minneriya.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Ceylon Tours',
    images: [
      {
        url: '/Yala-national-park.jpg',
        width: 1200,
        height: 630,
        alt: 'Yala National Park Wildlife Safari - Sri Lanka',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wild Safaris in Sri Lanka | National Parks & Wildlife Tours',
    description: 'Discover amazing wildlife in Sri Lanka\'s top national parks. Leopards, elephants, birds and more await your adventure.',
    images: ['/Yala-national-park.jpg'],
  },
  alternates: {
    canonical: '/wild-safaries',
  },
}

export default function WildSafarisLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
