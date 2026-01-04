import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Ramayana Story: Epic Journey Between India and Sri Lanka | Ceylanka Tours",
  description: "Discover the fascinating Ramayana story connecting India and Sri Lanka. Learn about Rama, Sita, Ravana, and Hanuman's epic journey across these ancient lands. Complete travel guide to Ramayana sites.",
  keywords: "Ramayana story, Rama Ravana, Sri Lanka India connection, Ramayana sites Sri Lanka, Lanka in Ramayana, Sita kidnapping, Hanuman bridge, epic story, ancient history, cultural heritage",
  openGraph: {
    title: "The Ramayana Epic: Ancient Story Connecting India and Sri Lanka",
    description: "Explore the legendary Ramayana story that connects India and Sri Lanka through the tale of Rama, Sita, and Ravana.",
    type: "article",
  },
}

export default function RamayanaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
