import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Ultimate Water Activities Guide Sri Lanka | Surfing, Diving, Rafting & More',
    description: 'Discover the best water activities in Sri Lanka. From world-class surfing spots to thrilling white water rafting, scuba diving, and snorkeling. Complete guide with locations, safety tips, and pricing.',
    keywords: 'Sri Lanka water activities, surfing Sri Lanka, white water rafting, scuba diving, snorkeling, water sports, Arugam Bay, Mirissa, Bentota, Kithulgala',
    openGraph: {
        title: 'Water Activities in Sri Lanka - Complete Adventure Guide',
        description: 'Experience thrilling water adventures in Sri Lanka. Surfing, diving, rafting, and more with safety tips and best locations.',
        images: ['/water-activities-sri-lanka.jpg'],
    },
}

export default function WaterActivitiesLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
