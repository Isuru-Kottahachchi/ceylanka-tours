import type { Metadata } from "next"
import Image from "next/image"
import { Clock, MapPin, CheckCircle, Star, Calendar, Users, TreePine, Landmark } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
	title: "Lovamahapaya (Brazen Palace) Sri Lanka: Complete Guide 2025 | Ancient Marvel of Anuradhapura",
	description:
		"Discover Lovamahapaya, the legendary Brazen Palace of Anuradhapura. Explore its history, unique architecture, and travel tips for visiting this ancient Sri Lankan wonder.",
	keywords:
		"Lovamahapaya, Brazen Palace, Anuradhapura, ancient Sri Lanka, Buddhist monastery, stone pillars, ancient engineering, sacred city",
	openGraph: {
		title: "Lovamahapaya: Complete Guide 2025",
		description: "Your essential guide to the Brazen Palace of Anuradhapura, Sri Lanka",
		type: "article",
		images: ["/Lovamahapaya.jpeg"],
	},
}

export default function LovamahapayaGuide() {
	return (
		<main className="min-h-screen bg-background">
			{/* Hero Section */}
			<section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
				<Image
					src="/Lovamahapaya.jpeg"
					alt="Lovamahapaya stone pillars at Anuradhapura, Sri Lanka, under blue sky"
					fill
					className="object-cover"
					priority
				/>
				<div className="absolute inset-0 bg-black/40" />
				<div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
					<h1 className="text-4xl md:text-6xl font-bold mb-4">Lovamahapaya (Brazen Palace)</h1>
					<p className="text-xl md:text-2xl mb-6 font-light">The Lost Marvel of Ancient Anuradhapura</p>
					<div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
						<Badge variant="secondary" className="bg-white/20 text-white border-white/30">
							<MapPin className="w-4 h-4 mr-1" />
							Anuradhapura, North Central Province
						</Badge>
						<Badge variant="secondary" className="bg-white/20 text-white border-white/30">
							<Landmark className="w-4 h-4 mr-1" />
							Ancient Monastery
						</Badge>
						<Badge variant="secondary" className="bg-white/20 text-white border-white/30">
							<Calendar className="w-4 h-4 mr-1" />
							Built 2nd Century BCE
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
					<h2 className="text-3xl font-bold mb-6 text-foreground">Welcome to Lovamahapaya: The Brazen Palace</h2>
					<div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
						<p className="text-lg mb-4">
							Step into the heart of Anuradhapura and discover Lovamahapaya, the legendary Brazen Palace. Once a nine-story monastery glittering with copper roof tiles, Lovamahapaya was a marvel of ancient engineering and Buddhist devotion. Today, its forest of stone pillars stands as a silent testament to the grandeur and ingenuity of Sri Lanka’s ancient builders.
						</p>
						<p className="text-lg">
							More than just ruins, Lovamahapaya invites you to imagine a time when monks studied, meditated, and lived in a palace that soared above the sacred city. Its story is one of resilience, innovation, and spiritual ambition—an essential stop for any traveler seeking the wonders of Sri Lanka’s past.
						</p>
					</div>
				</section>

				{/* Ad Space */}
				<div className="my-8 p-4 bg-gray-50 rounded-lg text-center text-gray-500 border-2 border-dashed border-gray-300">
					[Advertisement Space - 728x90 Leaderboard]
				</div>

				{/* Quick Facts & How to Get There */}
				<div className="flex flex-col lg:flex-row gap-8 mb-12" id="quick-facts">
					{/* Essential Lovamahapaya Facts */}
					<section className="flex-1">
						<Card>
							<CardHeader>
								<CardTitle className="flex items-center gap-2">
									<Star className="w-5 h-5 text-yellow-500" />
									Essential Lovamahapaya Facts
								</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="grid md:grid-cols-2 gap-4">
									<div className="space-y-3">
										<div className="flex items-center gap-2">
											<Calendar className="w-4 h-4 text-blue-500" />
											<span><strong>Built:</strong> 2nd Century BCE</span>
										</div>
										<div className="flex items-center gap-2">
											<Users className="w-4 h-4 text-green-500" />
											<span><strong>Capacity:</strong> 1,000 monks</span>
										</div>
										<div className="flex items-center gap-2">
											<TreePine className="w-4 h-4 text-purple-500" />
											<span><strong>Material:</strong> 1,600 stone pillars, copper roof</span>
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
											<span><strong>Visit Duration:</strong> 30–60 minutes</span>
										</div>
									</div>
								</div>
								{/* Valuable Fact for Desktop */}
								<div className="hidden lg:block mt-6 space-y-4">
									<div className="flex gap-4 items-center bg-blue-50 border-l-4 border-blue-400 rounded p-4">
										<Image
											src="/Lovamahapaya.jpeg"
											alt="Lovamahapaya stone pillars in Anuradhapura, Sri Lanka"
											width={120}
											height={80}
											className="rounded shadow-md object-cover"
										/>
										<div>
											<p className="text-base text-blue-900 font-semibold mb-1">A Palace of Copper and Stone</p>
											<p className="text-sm text-blue-800">
												Lovamahapaya’s roof once gleamed with copper tiles, earning it the name “Brazen Palace.” Its nine stories soared above the city, making it one of the tallest and most advanced buildings of the ancient world.
											</p>
										</div>
									</div>
									<div className="flex gap-8">
										<div className="bg-amber-50 border-l-4 border-yellow-400 rounded p-4 flex-1">
											<p className="text-sm text-yellow-900 font-semibold mb-1">Ideal Visit Time</p>
											<p className="text-sm text-yellow-800">Morning or late afternoon for best light and fewer crowds.</p>
										</div>
										<div className="bg-green-50 border-l-4 border-green-400 rounded p-4 flex-1">
											<p className="text-sm text-green-900 font-semibold mb-1">Best Season</p>
											<p className="text-sm text-green-800">May to September (dry season) for comfortable exploration.</p>
										</div>
									</div>
								</div>
							</CardContent>
						</Card>
					</section>
					{/* How to Get to Lovamahapaya */}
					<section className="flex-1">
						<Card className="border-l-4 border-blue-500">
							<CardHeader>
								<CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
									<MapPin className="w-5 h-5" />
									How to Get to Lovamahapaya
								</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="grid md:grid-cols-2 gap-6">
									<div>
										<h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">By Private Car/Taxi</h4>
										<ul className="space-y-2 text-sm text-muted-foreground">
											<li>• <strong>From Colombo:</strong> 205km (4–4.5 hours)</li>
											<li>• <strong>From Anuradhapura town:</strong> 2km (5 min by tuk-tuk)</li>
											<li>• <strong>Best option:</strong> Flexible and direct</li>
										</ul>
									</div>
									<div>
										<h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">By Bicycle or Tuk-Tuk</h4>
										<ul className="space-y-2 text-sm text-muted-foreground">
											<li>• <strong>Bicycle rental:</strong> Popular for exploring the ancient city</li>
											<li>• <strong>Tuk-tuk:</strong> Quick and easy from any hotel</li>
											<li>• <strong>Walking:</strong> 10–15 minutes from Ruwanwelisaya</li>
										</ul>
									</div>
								</div>
								<div className="mt-6 p-4 bg-blue-50 dark:bg-slate-800 rounded-lg">
									<h4 className="font-semibold mb-2 text-blue-700 dark:text-blue-300">💡 Travel Tips</h4>
									<ul className="text-sm text-muted-foreground space-y-1">
										<li>• Combine your visit with Ruwanwelisaya and Thuparamaya for a full morning of ancient wonders.</li>
										<li>• Early morning visits offer cooler temperatures and beautiful light for photos.</li>
										<li>• Bring water and sun protection—there is little shade among the pillars.</li>
									</ul>
								</div>
							</CardContent>
						</Card>
					</section>
				</div>

				{/* History & Highlights */}
				<section id="history" className="mb-12">
					<h2 className="text-3xl font-bold mb-6">History & Highlights of Lovamahapaya</h2>
					<div className="space-y-8">
						<Card>
							<CardHeader>
								<CardTitle>Lovamahapaya: The Brazen Palace</CardTitle>
								<CardDescription>Nine stories of ancient innovation and faith</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="grid md:grid-cols-2 gap-6 items-center">
									<Image
										src="/Lovamahapaya.jpeg"
										alt="Lovamahapaya stone pillars and ruins in Anuradhapura"
										width={400}
										height={300}
										className="rounded-lg"
									/>
									<div>
										<p className="text-muted-foreground mb-4">
											Built by King Dutugemunu in the 2nd century BCE, Lovamahapaya was once the tallest and most advanced building in ancient Sri Lanka. Its nine stories, supported by 1,600 stone pillars, housed meditation halls, libraries, dining rooms, and living quarters for 1,000 monks. The palace’s copper-tiled roof shimmered in the sun, visible for miles across the sacred city.
										</p>
										<p className="text-muted-foreground mb-4">
											The Brazen Palace was not just a feat of architecture—it was a center of Buddhist learning and daily life. Each floor served a unique purpose, from meditation and study to communal dining and worship. Though destroyed and rebuilt many times, the stone pillars you see today are a powerful reminder of the palace’s enduring legacy.
										</p>
										<div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border-l-4 border-blue-400 dark:border-blue-600 mt-4">
											<h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Did You Know?</h4>
											<p className="text-sm text-blue-700 dark:text-blue-100">Lovamahapaya’s copper roof tiles inspired its name: “Lo” (copper) + “maha” (great) + “paya” (mansion). The palace was once the tallest structure in Anuradhapura, rivaling the great stupas in scale.</p>
										</div>
										<ul className="space-y-2 text-muted-foreground mt-4">
											<li className="flex items-start gap-2">
												<CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
												Nine stories tall, 1,600 stone pillars
											</li>
											<li className="flex items-start gap-2">
												<CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
												Copper-tiled roof gleamed in sunlight
											</li>
											<li className="flex items-start gap-2">
												<CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
												Center for Buddhist learning and monastic life
											</li>
											<li className="flex items-start gap-2">
												<CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
												Destroyed and rebuilt several times in history
											</li>
											<li className="flex items-start gap-2">
												<CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
												Only the stone pillars remain today
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
					<h2 className="text-3xl font-bold mb-6 text-blue-700 dark:text-blue-300">Visiting Lovamahapaya: Practical Guide</h2>
					<div className="prose prose-lg max-w-none text-muted-foreground mb-8">
						<p>
							Make the most of your visit to Lovamahapaya with these practical tips and essential information. The site is open year-round and is easily combined with other major attractions in Anuradhapura.
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
									<td className="px-4 py-2">8:00 AM</td>
									<td className="px-4 py-2">Arrive at Lovamahapaya</td>
									<td className="px-4 py-2">Morning light, quiet atmosphere</td>
								</tr>
								<tr className="border-b">
									<td className="px-4 py-2">8:30 AM</td>
									<td className="px-4 py-2">Explore the stone pillars</td>
									<td className="px-4 py-2">Photography, architectural details</td>
								</tr>
								<tr className="border-b">
									<td className="px-4 py-2">9:00 AM</td>
									<td className="px-4 py-2">Visit nearby Ruwanwelisaya</td>
									<td className="px-4 py-2">Iconic stupa, spiritual site</td>
								</tr>
								<tr className="border-b">
									<td className="px-4 py-2">10:00 AM</td>
									<td className="px-4 py-2">Thuparamaya Dagoba</td>
									<td className="px-4 py-2">Oldest stupa, unique pillars</td>
								</tr>
								<tr>
									<td className="px-4 py-2">11:00 AM</td>
									<td className="px-4 py-2">Break & refreshments</td>
									<td className="px-4 py-2">Shaded rest areas nearby</td>
								</tr>
							</tbody>
						</table>
					</div>
				</section>

				{/* Tips & Essentials */}
				<section id="tips" className="mb-12">
					<h2 className="text-3xl font-bold mb-6">Tips for Visiting Lovamahapaya</h2>
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
								<CardTitle className="text-orange-600">Cultural Etiquette</CardTitle>
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
					<Card className="bg-gradient-to-r from-blue-50 to-green-50 border-blue-200">
						<CardHeader>
							<CardTitle className="text-blue-800">Experience the Spirit of Lovamahapaya</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="text-muted-foreground mb-4">
								As you wander among the ancient pillars of Lovamahapaya, imagine the vibrant life that once filled this palace—monks in meditation, the shimmer of copper tiles, and the hum of daily rituals. Though only ruins remain, the spirit of innovation and devotion endures, inviting every visitor to connect with Sri Lanka’s remarkable past.
							</p>
							<p className="text-muted-foreground font-medium">
								May your journey through Lovamahapaya inspire awe, curiosity, and a deeper appreciation for the wonders of Anuradhapura!
							</p>
						</CardContent>
					</Card>
				</section>
			</div>
		</main>
	)
}
