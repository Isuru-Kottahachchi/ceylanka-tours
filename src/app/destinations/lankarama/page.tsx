import type { Metadata } from "next"
import Image from "next/image"
import { Clock, MapPin, CheckCircle, Star, Calendar, Users, TreePine, Landmark } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
	title: "Lankarama Dagaba Sri Lanka: Complete Guide 2025 | Forest Monastery of Anuradhapura",
	description:
		"Explore Lankarama Dagaba, the tranquil forest stupa of Anuradhapura. Discover its unique architecture, history, and travel tips for visiting this ancient Sri Lankan site.",
	keywords:
		"Lankarama, Lankarama Dagaba, Anuradhapura, forest monastery, ancient Sri Lanka, Buddhist stupa, stone pillars, sacred city",
	openGraph: {
		title: "Lankarama Dagaba: Complete Guide 2025",
		description: "Your essential guide to the peaceful forest stupa of Anuradhapura, Sri Lanka",
		type: "article",
		images: ["/Lankaramaya.jpeg"],
	},
}

export default function LankaramaGuide() {
	return (
		<main className="min-h-screen bg-background">
			{/* Hero Section */}
			<section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
				<Image
					src="/Lankaramaya.jpeg"
					alt="Lankarama Dagaba among trees in Anuradhapura, Sri Lanka"
					fill
					className="object-cover"
					priority
				/>
				<div className="absolute inset-0 bg-black/40" />
				<div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
					<h1 className="text-4xl md:text-6xl font-bold mb-4">Lankarama Dagaba</h1>
					<p className="text-xl md:text-2xl mb-6 font-light">The Tranquil Forest Stupa of Anuradhapura</p>
					<div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
						<Badge variant="secondary" className="bg-white/20 text-white border-white/30">
							<MapPin className="w-4 h-4 mr-1" />
							Anuradhapura, North Central Province
						</Badge>
						<Badge variant="secondary" className="bg-white/20 text-white border-white/30">
							<Landmark className="w-4 h-4 mr-1" />
							Forest Monastery
						</Badge>
						<Badge variant="secondary" className="bg-white/20 text-white border-white/30">
							<Calendar className="w-4 h-4 mr-1" />
							Built 1st Century CE
						</Badge>
					</div>
				</div>
			</section>

			{/* Section Navigation */}
			<nav className="sticky top-0 z-30 bg-background/95 backdrop-blur border-b border-muted mb-8 shadow-md">
				<div className="max-w-6xl mx-auto px-4 py-3 flex flex-wrap gap-3 justify-center text-sm font-medium">
					<a href="#introduction" className="flex items-center gap-1 px-4 py-2 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-colors shadow-sm">
						<Star className="w-4 h-4" /> Introduction
					</a>
					<a href="#quick-facts" className="flex items-center gap-1 px-4 py-2 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-colors shadow-sm">
						<Calendar className="w-4 h-4" /> Quick Facts
					</a>
					<a href="#history" className="flex items-center gap-1 px-4 py-2 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-colors shadow-sm">
						<Landmark className="w-4 h-4" /> History & Highlights
					</a>
					<a href="#visit" className="flex items-center gap-1 px-4 py-2 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-colors shadow-sm">
						<Clock className="w-4 h-4" /> Visiting Guide
					</a>
					<a href="#tips" className="flex items-center gap-1 px-4 py-2 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-colors shadow-sm">
						<Users className="w-4 h-4" /> Tips & Essentials
					</a>
				</div>
			</nav>

			<div className="max-w-6xl mx-auto px-4 py-12">
				{/* Introduction */}
				<section id="introduction" className="mb-12">
					<h2 className="text-3xl font-bold mb-6 text-foreground">Welcome to Lankarama: The Forest Sanctuary</h2>
					<div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
						<p className="text-lg mb-4">
							Discover Lankarama Dagaba, a hidden gem among Anuradhapura’s ancient wonders. Nestled in a peaceful grove, Lankarama stands apart for its intimate scale and unique ring of stone pillars. Built by King Valagamba, this stupa was designed as a tranquil retreat for forest-dwelling monks, offering a rare glimpse into the meditative heart of early Sri Lankan Buddhism.
						</p>
						<p className="text-lg">
							Today, Lankarama’s serene setting and distinctive architecture invite visitors to slow down, reflect, and experience the spiritual calm that has drawn pilgrims here for centuries. It’s a must-see for those seeking both history and harmony in Anuradhapura.
						</p>
					</div>
				</section>

				{/* Ad Space */}
				<div className="my-8 p-4 bg-gray-50 rounded-lg text-center text-gray-500 border-2 border-dashed border-gray-300">
					[Advertisement Space - 728x90 Leaderboard]
				</div>

				{/* Quick Facts & How to Get There */}
				<div className="flex flex-col lg:flex-row gap-8 mb-12" id="quick-facts">
					{/* Essential Lankarama Facts */}
					<section className="flex-1">
						<Card>
							<CardHeader>
								<CardTitle className="flex items-center gap-2">
									<Star className="w-5 h-5 text-yellow-500" />
									Essential Lankarama Facts
								</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="grid md:grid-cols-2 gap-4">
									<div className="space-y-3">
										<div className="flex items-center gap-2">
											<Calendar className="w-4 h-4 text-blue-500" />
											<span><strong>Built:</strong> 1st Century CE</span>
										</div>
										<div className="flex items-center gap-2">
											<Users className="w-4 h-4 text-green-500" />
											<span><strong>Purpose:</strong> Forest monastery for monks</span>
										</div>
										<div className="flex items-center gap-2">
											<TreePine className="w-4 h-4 text-purple-500" />
											<span><strong>Setting:</strong> Tranquil woodland</span>
										</div>
									</div>
									<div className="space-y-3">
										<div className="flex items-center gap-2">
											<MapPin className="w-4 h-4 text-red-500" />
											<span><strong>Location:</strong> Sacred City, Anuradhapura</span>
										</div>
										<div className="flex items-center gap-2">
											<Star className="w-4 h-4 text-yellow-500" />
											<span><strong>UNESCO:</strong> World Heritage Site</span>
										</div>
										<div className="flex items-center gap-2">
											<Clock className="w-4 h-4 text-orange-500" />
											<span><strong>Visit Duration:</strong> 30–45 minutes</span>
										</div>
									</div>
								</div>
								{/* Valuable Fact for Desktop */}
								<div className="hidden lg:block mt-6 space-y-4">
									<div className="flex gap-4 items-center bg-blue-50 border-l-4 border-blue-400 rounded p-4">
										<Image
											src="/Lankaramaya.jpeg"
											alt="Lankarama Dagaba stone pillars in Anuradhapura, Sri Lanka"
											width={120}
											height={80}
											className="rounded shadow-md object-cover"
										/>
										<div>
											<p className="text-base text-blue-900 font-semibold mb-1">Unique Pillar Arrangement</p>
											<p className="text-sm text-blue-800">
												Lankarama is famous for its concentric circles of stone pillars, which once supported meditation halls and wooden structures for monks. This design is rare among Sri Lankan stupas.
											</p>
										</div>
									</div>
									<div className="flex gap-8">
										<div className="bg-amber-50 border-l-4 border-yellow-400 rounded p-4 flex-1">
											<p className="text-sm text-yellow-900 font-semibold mb-1">Best Time to Visit</p>
											<p className="text-sm text-yellow-800">Early morning or late afternoon for cool, peaceful atmosphere.</p>
										</div>
										<div className="bg-green-50 border-l-4 border-green-400 rounded p-4 flex-1">
											<p className="text-sm text-green-900 font-semibold mb-1">Ideal Season</p>
											<p className="text-sm text-green-800">May to September (dry season) for easy walking and clear views.</p>
										</div>
									</div>
								</div>
							</CardContent>
						</Card>
					</section>
					{/* How to Get to Lankarama */}
					<section className="flex-1">
						<Card className="border-l-4 border-blue-500">
							<CardHeader>
								<CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
									<MapPin className="w-5 h-5" />
									How to Get to Lankarama
								</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="grid md:grid-cols-2 gap-6">
									<div>
										<h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">By Private Car/Taxi</h4>
										<ul className="space-y-2 text-sm text-muted-foreground">
											<li>• <strong>From Colombo:</strong> 205km (4–4.5 hours)</li>
											<li>• <strong>From Anuradhapura town:</strong> 3km (10 min by tuk-tuk)</li>
											<li>• <strong>Best option:</strong> Flexible and direct</li>
										</ul>
									</div>
									<div>
										<h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">By Bicycle or Tuk-Tuk</h4>
										<ul className="space-y-2 text-sm text-muted-foreground">
											<li>• <strong>Bicycle rental:</strong> Popular for exploring the ancient city</li>
											<li>• <strong>Tuk-tuk:</strong> Quick and easy from any hotel</li>
											<li>• <strong>Walking:</strong> 15–20 minutes from Ruwanwelisaya</li>
										</ul>
									</div>
								</div>
								<div className="mt-6 p-4 bg-blue-50 dark:bg-slate-800 rounded-lg">
									<h4 className="font-semibold mb-2 text-blue-700 dark:text-blue-300">💡 Travel Tips</h4>
									<ul className="text-sm text-muted-foreground space-y-1">
										<li>• Combine your visit with Mirisavetiya and Twin Ponds for a peaceful morning route.</li>
										<li>• Bring water and a hat—shade is limited among the ruins.</li>
										<li>• Watch for birds and butterflies in the surrounding woodland.</li>
									</ul>
								</div>
							</CardContent>
						</Card>
					</section>
				</div>

				{/* History & Highlights */}
				<section id="history" className="mb-12">
					<h2 className="text-3xl font-bold mb-6">History & Highlights of Lankarama</h2>
					<div className="space-y-8">
						<Card>
							<CardHeader>
								<CardTitle>Lankarama: The Forest Stupa</CardTitle>
								<CardDescription>Unique architecture and meditative spirit</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="grid md:grid-cols-2 gap-6 items-center">
									<Image
										src="/Lankaramaya.jpeg"
										alt="Lankarama Dagaba stone pillars and stupa in Anuradhapura"
										width={400}
										height={300}
										className="rounded-lg"
									/>
									<div>
										<p className="text-muted-foreground mb-4">
											Built by King Valagamba in the 1st century CE, Lankarama was designed as a retreat for monks seeking solitude and meditation. Unlike the grand stupas of Anuradhapura, Lankarama’s charm lies in its simplicity and harmony with nature. The stupa is surrounded by two concentric circles of stone pillars, which once supported wooden halls for meditation and rest.
										</p>
										<p className="text-muted-foreground mb-4">
											The peaceful setting and smaller scale make Lankarama a favorite for visitors looking to escape the crowds and connect with the spiritual roots of Sri Lankan Buddhism. The site is especially beautiful in the early morning, when sunlight filters through the trees and the air is filled with birdsong.
										</p>
										<div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg border-l-4 border-green-400 dark:border-green-600 mt-4">
											<h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Did You Know?</h4>
											<p className="text-sm text-green-700 dark:text-green-100">Lankarama’s pillar arrangement is unique in Sri Lanka. Archaeologists believe the wooden structures they supported were used for meditation and teaching, making this site a rare example of forest monastic life.</p>
										</div>
										<ul className="space-y-2 text-muted-foreground mt-4">
											<li className="flex items-start gap-2">
												<CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
												Built by King Valagamba, 1st century CE
											</li>
											<li className="flex items-start gap-2">
												<CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
												Two circles of stone pillars
											</li>
											<li className="flex items-start gap-2">
												<CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
												Designed for forest-dwelling monks
											</li>
											<li className="flex items-start gap-2">
												<CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
												Peaceful woodland setting
											</li>
											<li className="flex items-start gap-2">
												<CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
												Rare example of forest monastery architecture
											</li>
										</ul>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>
				</section>

				{/* Visiting Guide */}
				<section id="visit" className="mb-12">
					<h2 className="text-3xl font-bold mb-6 text-blue-700 dark:text-blue-300">Visiting Lankarama: Practical Guide</h2>
					<div className="prose prose-lg max-w-none text-muted-foreground mb-8">
						<p>
							Plan your visit to Lankarama with these practical tips and essential information. The site is open year-round and is best enjoyed in the cool hours of the day.
						</p>
					</div>
					<div className="overflow-x-auto">
						<table className="min-w-full border rounded-lg bg-white dark:bg-slate-900 text-sm shadow-md">
							<thead>
								<tr className="bg-blue-50 dark:bg-slate-800">
									<th className="px-4 py-2 text-left font-semibold text-blue-900 dark:text-blue-200">Time</th>
									<th className="px-4 py-2 text-left font-semibold text-blue-900 dark:text-blue-200">Activity</th>
									<th className="px-4 py-2 text-left font-semibold text-blue-900 dark:text-blue-200">Highlights</th>
								</tr>
							</thead>
							<tbody>
								<tr className="border-b">
									<td className="px-4 py-2">7:30 AM</td>
									<td className="px-4 py-2">Arrive at Lankarama</td>
									<td className="px-4 py-2">Morning light, peaceful setting</td>
								</tr>
								<tr className="border-b">
									<td className="px-4 py-2">8:00 AM</td>
									<td className="px-4 py-2">Walk among the pillars</td>
									<td className="px-4 py-2">Photography, unique architecture</td>
								</tr>
								<tr className="border-b">
									<td className="px-4 py-2">8:30 AM</td>
									<td className="px-4 py-2">Meditate or reflect</td>
									<td className="px-4 py-2">Quiet, spiritual atmosphere</td>
								</tr>
								<tr>
									<td className="px-4 py-2">9:00 AM</td>
									<td className="px-4 py-2">Visit nearby Twin Ponds</td>
									<td className="px-4 py-2">Ancient bathing pools, engineering marvel</td>
								</tr>
							</tbody>
						</table>
					</div>
				</section>

				{/* Tips & Essentials */}
				<section id="tips" className="mb-12">
					<h2 className="text-3xl font-bold mb-6">Tips for Visiting Lankarama</h2>
					<div className="grid md:grid-cols-2 gap-8">
						<Card>
							<CardHeader>
								<CardTitle className="text-purple-600">What to Bring</CardTitle>
							</CardHeader>
							<CardContent>
								<ul className="space-y-2 text-sm text-muted-foreground">
									<li>• Comfortable walking shoes</li>
									<li>• Sun protection (hat, sunscreen)</li>
									<li>• Water bottle (no shops on site)</li>
									<li>• Camera for photos</li>
									<li>• Modest clothing for sacred sites</li>
								</ul>
							</CardContent>
						</Card>
						<Card>
							<CardHeader>
								<CardTitle className="text-green-600">Cultural Etiquette</CardTitle>
							</CardHeader>
							<CardContent>
								<ul className="space-y-2 text-sm text-muted-foreground">
									<li>• Remove shoes before entering sacred areas</li>
									<li>• Speak quietly and respect ongoing worship</li>
									<li>• Do not climb on the pillars or ruins</li>
									<li>• Photography is allowed, but avoid flash</li>
									<li>• Respect local customs and dress codes</li>
								</ul>
							</CardContent>
						</Card>
					</div>
				</section>

				{/* Final Inspiration */}
				<section className="mb-12">
					<Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
						<CardHeader>
							<CardTitle className="text-green-800">Experience the Peace of Lankarama</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="text-muted-foreground mb-4">
								As you wander among the ancient pillars of Lankarama, let the quiet beauty and spiritual calm of this forest stupa inspire you. Here, history and nature blend in perfect harmony, offering a sanctuary for reflection and discovery.
							</p>
							<p className="text-muted-foreground font-medium">
								May your visit to Lankarama bring you peace, insight, and a deeper connection to Sri Lanka’s sacred heritage.
							</p>
						</CardContent>
					</Card>
				</section>
			</div>
		</main>
	)
}
