import { Metadata } from "next"

export const metadata: Metadata & { importance?: string; nessaru?: string } = {
	title: "Mannar Island Travel Guide 2025: Baobabs, Adam's Bridge & Pristine Beaches | Sri Lanka",
	description:
		"Discover Mannar Island — an off-the-beaten-path Sri Lankan destination famous for ancient baobab trees, Adam's Bridge (Rama Setu), rich birdlife and secluded beaches. Complete travel guide for Mannar.",
	keywords: "Mannar Sri Lanka, Adam's Bridge, baobab trees, Gulf of Mannar, Mannar Island travel guide, Mannar beaches",
	openGraph: {
		title: "Mannar Island: Complete Travel Guide 2025",
		description: "Your guide to Mannar's natural wonders, cultural heritage, and how to plan a visit.",
		type: "article",
		images: ["/Mannar.jpg"],
	},
	twitter: {
		card: "summary_large_image",
		title: "Mannar Island Travel Guide 2025",
		description: "Explore Mannar's baobabs, Adam's Bridge, birdlife and pristine beaches.",
	},
	// Custom properties used by the site for regional tagging and editorial notes
	importance: "regional",
	nessaru: "local-cultural-significance",
}

