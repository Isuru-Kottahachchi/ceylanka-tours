import type { Metadata } from "next"
import Image from "next/image"
import { Clock, MapPin, CheckCircle, Star, Calendar, Users, TreePine, Landmark } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
	title: "Mirisavetiya Stupa Sri Lanka: Complete Guide 2025 | Monument of Mindfulness & Royal Regret",
	description:
		"Explore Mirisavetiya Stupa, a symbol of mindfulness and royal atonement in Anuradhapura. Discover its history, unique features, and travel tips for visiting this ancient Sri Lankan site.",
	keywords:
		"Mirisavetiya, Mirisawatiya, Anuradhapura, ancient Sri Lanka, Buddhist stupa, King Dutugemunu, sacred city, royal regret",
	openGraph: {
		title: "Mirisavetiya Stupa: Complete Guide 2025",
		description: "Your essential guide to the monument of mindfulness in Anuradhapura, Sri Lanka",
		type: "article",
		images: ["/Mirisawatiya.jpeg"],
	},
}

export default function MirisavetiyaGuide() {
	return (
		<main className="min-h-screen bg-background">
			{/* Hero Section */}
			<section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
				<Image
					src="/Mirisawatiya.jpeg"
					alt="Mirisavetiya Stupa in Anuradhapura, Sri Lanka, with ancient ruins and blue sky"
					fill
					className="object-cover"
					priority
				/>
				<div className="absolute inset-0 bg-black/40" />
				<div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
					<h1 className="text-4xl md:text-6xl font-bold mb-4">Mirisavetiya Stupa</h1>
					<p className="text-xl md:text-2xl mb-6 font-light">A Monument of Mindfulness & Royal Regret</p>
					<div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
						<Badge variant="secondary" className="bg-white/20 text-white border-white/30">
							<MapPin className="w-4 h-4 mr-1" />
							Anuradhapura, North Central Province
						</Badge>
						<Badge variant="secondary" className="bg-white/20 text-white border-white/30">
							<Landmark className="w-4 h-4 mr-1" />
							Ancient Stupa
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
					<h2 className="text-3xl font-bold mb-6 text-foreground">Welcome to Mirisavetiya: The Stupa of Reflection</h2>
					<div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
						<p className="text-lg mb-4">
							Discover Mirisavetiya Stupa, a monument born from a king’s moment of forgetfulness and transformed into a symbol of mindfulness. Built by King Dutugemunu, this stupa stands as a reminder that even great rulers sought atonement and spiritual growth. Its graceful form and tranquil setting make it a unique destination in Anuradhapura’s sacred landscape.
						</p>
						<p className="text-lg">
							Today, Mirisavetiya invites visitors to reflect on the power of intention and the beauty of second chances. Its story, architecture, and peaceful grounds offer a meaningful stop for travelers seeking both history and inspiration.
						</p>
					</div>
				</section>

				{/* Ad Space */}
				<div className="my-8 p-4 bg-gray-50 rounded-lg text-center text-gray-500 border-2 border-dashed border-gray-300">
					[Advertisement Space - 728x90 Leaderboard]
				</div>

				{/* Quick Facts & How to Get There */}
				<div className="flex flex-col lg:flex-row gap-8 mb-12" id="quick-facts">
					{/* Essential Mirisavetiya Facts */}
					<section className="flex-1">
						<Card>
							<CardHeader>
								<CardTitle className="flex items-center gap-2">
									<Star className="w-5 h-5 text-yellow-500" />
									Essential Mirisavetiya Facts
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
											<span><strong>Founder:</strong> King Dutugemunu</span>
										</div>
										<div className="flex items-center gap-2">
											<TreePine className="w-4 h-4 text-purple-500" />
											<span><strong>Setting:</strong> Ancient city, near Tissa Wewa</span>
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
									<div className="flex gap-4 items-center bg-orange-50 border-l-4 border-orange-400 rounded p-4">
										<Image
											src="/Mirisawatiya.jpeg"
											alt="Mirisavetiya Stupa and ruins in Anuradhapura, Sri Lanka"
											width={120}
											height={80}
											className="rounded shadow-md object-cover"
										/>
										<div>
											<p className="text-base text-orange-900 font-semibold mb-1">Atonement in Stone</p>
											<p className="text-sm text-orange-800">
												Mirisavetiya was built as an act of atonement after King Dutugemunu forgot to offer food to the monks. Its name means “chili stupa,” recalling the king’s meal and his resolve to make amends.
											</p>
										</div>
									</div>
									<div className="flex gap-8">
										<div className="bg-yellow-50 border-l-4 border-yellow-400 rounded p-4 flex-1">
											<p className="text-sm text-yellow-900 font-semibold mb-1">Best Time to Visit</p>
											<p className="text-sm text-yellow-800">Early morning or late afternoon for soft light and quiet surroundings.</p>
										</div>
										<div className="bg-green-50 border-l-4 border-green-400 rounded p-4 flex-1">
											<p className="text-sm text-green-900 font-semibold mb-1">Ideal Season</p>
											<p className="text-sm text-green-800">May to September (dry season) for comfortable exploration.</p>
										</div>
									</div>
								</div>
							</CardContent>
						</Card>
					</section>
					{/* How to Get to Mirisavetiya */}
					<section className="flex-1">
						<Card className="border-l-4 border-blue-500">
							<CardHeader>
								<CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
									<MapPin className="w-5 h-5" />
									How to Get to Mirisavetiya
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
								<div className="mt-6 p-4 bg-orange-50 dark:bg-slate-800 rounded-lg">
									<h4 className="font-semibold mb-2 text-orange-700 dark:text-orange-300">💡 Travel Tips</h4>
									<ul className="text-sm text-muted-foreground space-y-1">
										<li>• Combine your visit with Lankarama and Tissa Wewa for a peaceful morning route.</li>
										<li>• Bring water and sun protection—shade is limited at the site.</li>
										<li>• Look for ancient carvings and ruins around the stupa base.</li>
									</ul>
								</div>
							</CardContent>
						</Card>
					</section>
				</div>

				{/* History & Highlights */}
				<section id="history" className="mb-12">
					<h2 className="text-3xl font-bold mb-6">History & Highlights of Mirisavetiya</h2>
					<div className="space-y-8">
						<Card>
							<CardHeader>
								<CardTitle>Mirisavetiya: The Stupa of Mindfulness</CardTitle>
								<CardDescription>Royal regret, sacred relics, and ancient artistry</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="grid md:grid-cols-2 gap-6 items-center">
									<Image
										src="/Mirisawatiya.jpeg"
										alt="Mirisavetiya Stupa and ancient ruins in Anuradhapura"
										width={400}
										height={300}
										className="rounded-lg"
									/>
									<div>
										<p className="text-muted-foreground mb-4">
											According to legend, King Dutugemunu built Mirisavetiya as an act of atonement after forgetting to offer food to the Buddhist monks. The stupa’s name, meaning “chili stupa,” recalls the king’s meal and his resolve to make amends. The monument stands as a testament to the Buddhist principle of mindfulness in daily life.
										</p>
										<p className="text-muted-foreground mb-4">
											Mirisavetiya is renowned for its harmonious proportions, beautiful stone carvings, and the sacred relics enshrined within. The surrounding ruins include ancient buildings and intricate sculptures, offering a glimpse into the artistry and devotion of early Sri Lankan civilization.
										</p>
										<div className="bg-orange-50 dark:bg-orange-900/30 p-4 rounded-lg border-l-4 border-orange-400 dark:border-orange-600 mt-4">
											<h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">Did You Know?</h4>
											<p className="text-sm text-orange-700 dark:text-orange-100">Mirisavetiya’s construction was inspired by a moment of forgetfulness, but its legacy is one of mindfulness and compassion—a lesson for all who visit.</p>
										</div>
										<ul className="space-y-2 text-muted-foreground mt-4">
											<li className="flex items-start gap-2">
												<CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
												Built by King Dutugemunu, 2nd century BCE
											</li>
											<li className="flex items-start gap-2">
												<CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
												Stupa stands 60 meters tall
											</li>
											<li className="flex items-start gap-2">
												<CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
												Contains sacred Buddhist relics
											</li>
											<li className="flex items-start gap-2">
												<CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
												Surrounded by ancient ruins and stone carvings
											</li>
											<li className="flex items-start gap-2">
												<CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
												Symbol of mindfulness in Buddhist practice
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
					<h2 className="text-3xl font-bold mb-6 text-blue-700 dark:text-blue-300">Visiting Mirisavetiya: Practical Guide</h2>
					<div className="prose prose-lg max-w-none text-muted-foreground mb-8">
						<p>
							Plan your visit to Mirisavetiya with these practical tips and essential information. The site is open year-round and is best enjoyed in the cool hours of the day.
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
									<td className="px-4 py-2">Arrive at Mirisavetiya</td>
									<td className="px-4 py-2">Morning light, peaceful setting</td>
								</tr>
								<tr className="border-b">
									<td className="px-4 py-2">8:00 AM</td>
									<td className="px-4 py-2">Walk around the stupa</td>
									<td className="px-4 py-2">Photography, ancient ruins</td>
								</tr>
								<tr className="border-b">
									<td className="px-4 py-2">8:30 AM</td>
									<td className="px-4 py-2">Meditate or reflect</td>
									<td className="px-4 py-2">Quiet, spiritual atmosphere</td>
								</tr>
								<tr>
									<td className="px-4 py-2">9:00 AM</td>
									<td className="px-4 py-2">Visit nearby Lankarama</td>
									<td className="px-4 py-2">Forest stupa, unique pillars</td>
								</tr>
							</tbody>
						</table>
					</div>
				</section>

				{/* Tips & Essentials */}
				<section id="tips" className="mb-12">
					<h2 className="text-3xl font-bold mb-6">Tips for Visiting Mirisavetiya</h2>
					<div className="grid md:grid-cols-2 gap-8">
						<Card>
							<CardHeader>
								<CardTitle className="text-orange-600">What to Bring</CardTitle>
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
									<li>• Do not climb on the stupa or ruins</li>
									<li>• Photography is allowed, but avoid flash</li>
									<li>• Respect local customs and dress codes</li>
								</ul>
							</CardContent>
						</Card>
					</div>
				</section>

				{/* Final Inspiration */}
				<section className="mb-12">
					<Card className="bg-gradient-to-r from-orange-50 to-yellow-50 border-orange-200">
						<CardHeader>
							<CardTitle className="text-orange-800">Reflect at Mirisavetiya</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="text-muted-foreground mb-4">
								As you walk the grounds of Mirisavetiya, let the story of royal regret and mindful atonement inspire your own journey. This ancient stupa is more than a monument—it’s a living lesson in compassion, humility, and the enduring power of intention.
							</p>
							<p className="text-muted-foreground font-medium">
								May your visit to Mirisavetiya bring you peace, insight, and a deeper connection to Sri Lanka’s sacred heritage.
							</p>
						</CardContent>
					</Card>
				</section>
			</div>
		</main>
	)
}
