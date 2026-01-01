"use client"

import Image from "next/image"
import { Clock, MapPin, CheckCircle, Star, Sparkles, Calendar, Users, Gem, Mountain, ChevronRight, Flame, Shield } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ImageCarousel } from "@/components/ui/image-carousel"
import InsuranceBanner from "@/components/insurance-banner"

export default function SamanDevalayaGuide() {
	return (
		<main className="min-h-screen bg-background">
			{/* Hero Section */}
			<section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
				<Image
					src="/Saman-devalaya.jpeg"
					alt="Saman Devalaya temple in Ratnapura with colorful architecture, sacred shrine dedicated to God Saman, guardian deity of Adam's Peak"
					fill
					className="object-cover"
					priority
				/>
				<div className="absolute inset-0 bg-black/40" />
				<div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
					<h1 className="text-4xl md:text-6xl font-bold mb-4">Sri Sumana Saman Devalaya</h1>
					<p className="text-xl md:text-2xl mb-6 font-light">Sacred Shrine of the Mountain Guardian</p>
					<div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
						<Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-purple-600/80 text-white border-purple-500">
							<MapPin className="w-4 h-4 mr-1" />
							Ratnapura, Sabaragamuwa Province
						</Badge>
						<Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-blue-600/80 text-white border-blue-500">
							<Sparkles className="w-4 h-4 mr-1" />
							Ancient Hindu-Buddhist Shrine
						</Badge>
						<Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-orange-600/80 text-white border-orange-500">
							<Mountain className="w-4 h-4 mr-1" />
							Guardian of Sri Pada
						</Badge>
					</div>
				</div>
			</section>

			{/* Section Navigation Bar */}
			<nav className="sticky top-0 z-20 bg-background/80 backdrop-blur border-b border-gray-200 dark:border-gray-800">
				<div className="max-w-6xl mx-auto flex flex-wrap gap-2 px-4 py-2 justify-center">
					<a href="#introduction" className="px-3 py-1 rounded-full font-medium text-purple-700 dark:text-purple-200 hover:bg-purple-100 dark:hover:bg-purple-900 transition">Introduction</a>
					<a href="#quick-facts" className="px-3 py-1 rounded-full font-medium text-purple-700 dark:text-purple-200 hover:bg-purple-100 dark:hover:bg-purple-900 transition">Quick Facts</a>
					<a href="#how-to-get" className="px-3 py-1 rounded-full font-medium text-purple-700 dark:text-purple-200 hover:bg-purple-100 dark:hover:bg-purple-900 transition">How to Get There</a>
					<a href="#history" className="px-3 py-1 rounded-full font-medium text-purple-700 dark:text-purple-200 hover:bg-purple-100 dark:hover:bg-purple-900 transition">History</a>
					<a href="#main-shrine" className="px-3 py-1 rounded-full font-medium text-purple-700 dark:text-purple-200 hover:bg-purple-100 dark:hover:bg-purple-900 transition">Main Shrine</a>
					<a href="#festivals" className="px-3 py-1 rounded-full font-medium text-purple-700 dark:text-purple-200 hover:bg-purple-100 dark:hover:bg-purple-900 transition">Festivals</a>
					<a href="#nearby" className="px-3 py-1 rounded-full font-medium text-purple-700 dark:text-purple-200 hover:bg-purple-100 dark:hover:bg-purple-900 transition">Nearby Attractions</a>
				</div>
			</nav>

			<div className="max-w-6xl mx-auto px-4 py-12">
				{/* Introduction */}
				<section className="mb-12 scroll-mt-40" id="introduction">
					<h2 className="text-3xl font-bold mb-6 text-foreground">
						Welcome to Saman Devalaya: Where Devotion Meets Legend
					</h2>
					<div className="grid md:grid-cols-[1fr_140px] gap-6 items-start">
						<div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
							<p className="text-lg mb-4">
								Saman Devalaya stands as one of Sri Lanka's most revered Hindu-Buddhist shrines, dedicated to God Saman, the guardian deity of Adam's Peak (Sri Pada). Located in Ratnapura, the City of Gems, this ancient temple draws thousands of pilgrims annually who seek blessings before ascending the sacred mountain.
							</p>
							<p className="text-lg">
								The shrine represents a unique fusion of Hindu and Buddhist traditions, reflecting Sri Lanka's rich spiritual heritage. Pilgrims from across the island visit throughout the year, with peak crowds during the pilgrimage season from December to May when devotees journey to Adam's Peak. The temple complex features vibrant murals, intricate carvings, and a powerful spiritual atmosphere that captivates both believers and cultural enthusiasts.
							</p>
						</div>

						{/* Small Sri Lanka Map with Location */}
						<div className="flex flex-col items-center flex-shrink-0">
							<div className="relative w-[200px] md:w-[180px] lg:w-[200px] bg-purple-50 dark:bg-purple-950/30 rounded-lg p-2 border border-purple-200 dark:border-purple-800">
								<Image 
									src="/ratnapura_location.gif" 
									alt="Map of Sri Lanka showing Ratnapura location in Sabaragamuwa Province" 
									width={200} 
									height={200} 
									className="rounded-lg w-full h-auto" 
								/>
								<div className="text-center mt-1">
									<div className="flex items-center justify-center gap-1 text-red-600 dark:text-red-400 font-bold text-[10px]">
										<MapPin className="w-3 h-3" />
										<span>You are here</span>
									</div>
									<p className="text-[9px] text-muted-foreground">Sabaragamuwa Province</p>
								</div>
							</div>
						</div>
					</div>

					<div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
						<div className="my-8 p-4 rounded-lg bg-yellow-100 dark:bg-yellow-900/60 border-l-4 border-yellow-400 dark:border-yellow-500">
							<h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-1">Did you know?</h4>
							<p className="text-gray-800 dark:text-yellow-100">
								God Saman is believed to be the deity who protects Adam's Peak and guides pilgrims safely up and down the mountain. According to legend, Saman was a king who achieved divine status through his devotion and service. The deity is unique to Sri Lanka and represents the island's syncretic religious traditions—he is worshipped by both Buddhists and Hindus. Many pilgrims offer prayers at Saman Devalaya before beginning their climb to Sri Pada, seeking protection and blessings for a safe journey. The temple houses ancient artifacts including bronze statues, ceremonial drums, and historical inscriptions dating back several centuries.
							</p>
						</div>
					</div>
				</section>

				{/* Quick Facts & How to Get There side by side */}
				<div className="flex flex-col lg:flex-row gap-8 mb-12">
					{/* Quick Facts (left) */}
					<section className="flex-1 scroll-mt-40" id="quick-facts">
						<Card>
							<CardHeader>
								<CardTitle className="flex items-center gap-2">
									<Star className="w-5 h-5 text-yellow-500" />
									Saman Devalaya Quick Facts
								</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="grid md:grid-cols-2 gap-4">
									<div className="space-y-3">
										<div className="flex items-center gap-2">
											<MapPin className="w-4 h-4 text-purple-500" />
											<span>
												<strong>Location:</strong> Ratnapura town center
											</span>
										</div>
										<div className="flex items-center gap-2">
											<Mountain className="w-4 h-4 text-blue-500" />
											<span>
												<strong>Deity:</strong> God Saman (Sri Pada Guardian)
											</span>
										</div>
										<div className="flex items-center gap-2">
											<Calendar className="w-4 h-4 text-green-500" />
											<span>
												<strong>Main Festival:</strong> Esala Perahera (July/August)
											</span>
										</div>
									</div>
									<div className="space-y-3">
										<div className="flex items-center gap-2">
											<Clock className="w-4 h-4 text-orange-500" />
											<span>
												<strong>Opening Hours:</strong> 6:00 AM - 8:00 PM daily
											</span>
										</div>
										<div className="flex items-center gap-2">
											<Gem className="w-4 h-4 text-pink-500" />
											<span>
												<strong>Entry Fee:</strong> Free (donations welcome)
											</span>
										</div>
										<div className="flex items-center gap-2">
											<Users className="w-4 h-4 text-cyan-500" />
											<span>
												<strong>Best time:</strong> Early morning or evening
											</span>
										</div>
									</div>
								</div>
							</CardContent>
						</Card>
						<InsuranceBanner />
					</section>

					{/* How to Get There (right) */}
					<section className="flex-1 scroll-mt-40" id="how-to-get">
						<Card>
							<CardHeader>
								<CardTitle className="flex items-center gap-2 text-purple-700 dark:text-purple-300">
									<MapPin className="w-5 h-5 text-purple-500" />
									How to Get to Saman Devalaya
								</CardTitle>
							</CardHeader>
							<CardContent className="space-y-2">
								<div>
									<h4 className="font-semibold mb-1 text-foreground">Private Transfer (Recommended)</h4>
									<ul className="text-sm text-muted-foreground space-y-0.5">
										<li>• From Colombo: 3-4 hours (100km)</li>
										<li>• From Kandy: 2.5-3 hours (75km)</li>
										<li>• Cost: $50-80 USD from Colombo</li>
										<li>• Most comfortable option</li>
										<li className="mt-2">
											<span className="inline-block bg-purple-100 dark:bg-purple-900/40 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-xs font-semibold">
												Book with <span className="font-bold">Ceylanka Tours</span> for reliable private transfers with experienced drivers who know the mountain roads well!
											</span>
										</li>
									</ul>
								</div>
								<div>
									<h4 className="font-semibold mb-1 text-foreground">Bus</h4>
									<ul className="text-sm text-muted-foreground space-y-0.5">
										<li>• From Colombo: Regular buses from Bastian Mawatha</li>
										<li>• Duration: 3.5-4.5 hours</li>
										<li>• Cost: $2-4 USD</li>
										<li>• Frequent departures throughout the day</li>
									</ul>
								</div>
								<div>
									<h4 className="font-semibold mb-1 text-foreground">From Ratnapura Bus Station</h4>
									<ul className="text-sm text-muted-foreground space-y-0.5">
										<li>• 5-10 minute walk to temple</li>
										<li>• Tuk-tuk: LKR 200-300 (less than $1 USD)</li>
										<li>• Temple is centrally located in town</li>
									</ul>
								</div>
								<div className="mt-3 p-2 bg-orange-100 dark:bg-slate-700 rounded border-l-4 border-orange-500 dark:border-orange-400">
									<p className="text-xs text-orange-800 dark:text-orange-200">
										<strong>🌟 Tip:</strong> Visit during pilgrimage season (December-May) to experience the full devotional atmosphere, but expect larger crowds.
									</p>
								</div>
							</CardContent>
						</Card>
					</section>
				</div>

				{/* History & Significance */}
				<section className="mb-12 scroll-mt-40" id="history">
					<Card className="border-blue-200 dark:border-gray-700 bg-blue-50 dark:bg-slate-800">
						<CardHeader>
							<CardTitle className="text-blue-800 dark:text-blue-300 flex items-center gap-2">
								<Shield className="w-5 h-5" />
								History & Religious Significance
							</CardTitle>
							<CardDescription className="text-blue-700 dark:text-blue-300">
								Ancient legends and spiritual importance of God Saman
							</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="space-y-4">
								<div>
									<h4 className="font-semibold mb-2 text-blue-800 dark:text-blue-200">The Legend of God Saman</h4>
									<p className="text-gray-700 dark:text-gray-300">
										According to ancient chronicles, God Saman was originally a righteous king named Saman who ruled a kingdom in the Sabaragamuwa region. Through his exceptional devotion to Buddhism and service to his people, he attained divine status after his death. The Buddha himself is said to have appointed Saman as the guardian deity of Sri Pada (Adam's Peak), one of Buddhism's most sacred sites.
									</p>
								</div>

								<div>
									<h4 className="font-semibold mb-2 text-blue-800 dark:text-blue-200">Syncretic Worship Tradition</h4>
									<p className="text-gray-700 dark:text-gray-300">
										What makes Saman Devalaya unique is its dual religious identity. While God Saman is rooted in Buddhist tradition, the deity is also worshipped by Hindus who identify him with various Hindu gods. This religious harmony reflects Sri Lanka's centuries-old tradition of peaceful coexistence between different faiths. The temple architecture, rituals, and festivals incorporate elements from both Hindu and Buddhist practices.
									</p>
								</div>

								<div>
									<h4 className="font-semibold mb-2 text-blue-800 dark:text-blue-200">Historical Importance</h4>
									<p className="text-gray-700 dark:text-gray-300 mb-3">
										The current Saman Devalaya structure dates back several centuries, though the site has been a place of worship for much longer. Historical records indicate that ancient kings made royal visits to the shrine, offering valuable gifts and supporting temple maintenance. The temple has survived numerous challenges including colonial periods and natural disasters, standing as a testament to enduring faith.
									</p>
									<ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
										<li className="flex items-start gap-2">
											<CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
											Houses ancient bronze statues and ceremonial artifacts
										</li>
										<li className="flex items-start gap-2">
											<CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
											Contains historical inscriptions in ancient Sinhala script
										</li>
										<li className="flex items-start gap-2">
											<CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
											Preserves traditional Kandyan-era temple architecture
										</li>
										<li className="flex items-start gap-2">
											<CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
											Main pilgrimage stop before ascending Adam's Peak
										</li>
									</ul>
								</div>
							</div>
						</CardContent>
					</Card>
				</section>

				{/* Main Shrine & Temple Complex */}
				<section className="mb-12 scroll-mt-40" id="main-shrine">
					<h2 className="text-3xl font-bold mb-6">Exploring the Temple Complex</h2>
					<div className="space-y-8">
						<Card>
							<CardHeader>
								<CardTitle>1. Main Shrine Room (Garbhagriha)</CardTitle>
								<CardDescription>Sacred sanctum housing the statue of God Saman</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="grid md:grid-cols-2 gap-6 items-center">
									<ImageCarousel
										images={[
											{
												src: "/saman-shrine-interior.jpg",
												alt: "Interior of Saman Devalaya main shrine with deity statue, oil lamps and devotional offerings",
												caption: "Main Shrine Interior",
												title: "Sacred Sanctum"
											},
											{
												src: "/saman-deity-statue.jpg",
												alt: "Statue of God Saman adorned with traditional ornaments and flowers",
												caption: "God Saman Statue",
												title: "Guardian Deity"
											}
										]}
									/>
									<div>
										<p className="text-muted-foreground mb-4">
											The main shrine houses the principal statue of God Saman, depicted in royal attire with traditional ornaments. The deity is usually shown seated on a throne, holding symbolic objects representing protection and blessing. Devotees offer flowers, incense, and oil lamps while priests conduct daily puja ceremonies.
										</p>
										<ul className="space-y-2 text-muted-foreground">
											<li className="flex items-start gap-2">
												<CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
												Daily puja ceremonies at dawn and dusk
											</li>
											<li className="flex items-start gap-2">
												<CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
												Devotees can participate in offering rituals
											</li>
											<li className="flex items-start gap-2">
												<CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
												Photography inside the shrine is usually restricted
											</li>
											<li className="flex items-start gap-2">
												<CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
												Modest dress code required (covering shoulders and knees)
											</li>
										</ul>
									</div>
								</div>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle>2. Temple Architecture & Artwork</CardTitle>
								<CardDescription>Traditional Kandyan-style design with vibrant murals</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="grid md:grid-cols-2 gap-6 items-center">
									<div>
										<p className="text-muted-foreground mb-4">
											The temple showcases classic Kandyan architectural elements including wooden pillars with intricate carvings, colorful painted ceilings, and detailed murals depicting stories from Buddhist and Hindu mythology. The artwork illustrates episodes from God Saman's life and various legends associated with Adam's Peak.
										</p>
										<ul className="space-y-2 text-muted-foreground">
											<li className="flex items-start gap-2">
												<CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
												Traditional wood carvings on pillars and doorways
											</li>
											<li className="flex items-start gap-2">
												<CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
												Colorful murals depicting religious stories
											</li>
											<li className="flex items-start gap-2">
												<CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
												Kandyan-era architectural features
											</li>
											<li className="flex items-start gap-2">
												<CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
												Ceremonial drums and ancient artifacts on display
											</li>
										</ul>
									</div>
									<ImageCarousel
										images={[
											{
												src: "/saman-temple-architecture.jpg",
												alt: "Traditional Kandyan architecture of Saman Devalaya with wooden pillars and carved details",
												caption: "Temple Architecture",
												title: "Kandyan Design"
											},
											{
												src: "/saman-temple-murals.jpg",
												alt: "Colorful religious murals on temple walls depicting God Saman legends",
												caption: "Temple Murals",
												title: "Sacred Art"
											}
										]}
									/>
								</div>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle>3. Ceremonial Hall & Offerings</CardTitle>
								<CardDescription>Where devotees make offerings and receive blessings</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="grid md:grid-cols-2 gap-6 items-center">
									<ImageCarousel
										images={[
											{
												src: "/saman-offerings-hall.jpg",
												alt: "Devotees making offerings at Saman Devalaya ceremonial hall with flowers and oil lamps",
												caption: "Offerings Hall",
												title: "Devotional Space"
											},
											{
												src: "/saman-devotees.jpg",
												alt: "Pilgrims praying at Saman Devalaya before Adam's Peak pilgrimage",
												caption: "Devotees at Prayer",
												title: "Spiritual Devotion"
											}
										]}
									/>
									<div>
										<p className="text-muted-foreground mb-4">
											The ceremonial hall is where devotees gather for special rituals, particularly before beginning their Adam's Peak pilgrimage. Visitors can purchase traditional offerings including coconuts, flowers, incense, and oil lamps from vendors near the temple entrance. Priests conduct blessing ceremonies upon request.
										</p>
										<ul className="space-y-2 text-muted-foreground">
											<li className="flex items-start gap-2">
												<CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
												Traditional offerings available for purchase nearby
											</li>
											<li className="flex items-start gap-2">
												<CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
												Special blessing ceremonies for pilgrims
											</li>
											<li className="flex items-start gap-2">
												<CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
												Prayer services conducted throughout the day
											</li>
											<li className="flex items-start gap-2">
												<CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
												Donation boxes for temple maintenance
											</li>
										</ul>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>
				</section>

				{/* Festivals & Special Events */}
				<section className="mb-12 scroll-mt-40" id="festivals">
					<Card className="border-orange-200 dark:border-gray-700 bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-slate-800 dark:to-slate-800">
						<CardHeader>
							<CardTitle className="text-orange-800 dark:text-orange-300 flex items-center gap-2">
								<Flame className="w-5 h-5" />
								Annual Festivals & Celebrations
							</CardTitle>
							<CardDescription className="text-orange-700 dark:text-orange-300">
								Experience vibrant religious festivals at Saman Devalaya
							</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="space-y-6">
								<div>
									<h4 className="font-semibold mb-2 text-orange-800 dark:text-orange-200 flex items-center gap-2">
										<Star className="w-4 h-4" />
										Saman Devalaya Esala Perahera (July/August)
									</h4>
									<p className="text-gray-700 dark:text-gray-300 mb-3">
										The temple's grandest festival occurs during the Esala full moon (July or August), mirroring the famous Kandy Esala Perahera. This multi-day celebration features traditional dancers, drummers, fire performers, and decorated elephants parading through Ratnapura's streets. The festival attracts thousands of devotees and showcases Sri Lanka's rich cultural heritage.
									</p>
									<ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
										<li className="flex items-start gap-2">
											<CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
											Nightly processions with traditional dancers and drummers
										</li>
										<li className="flex items-start gap-2">
											<CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
											Decorated elephants carrying sacred caskets
										</li>
										<li className="flex items-start gap-2">
											<CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
											Fire dancers and whip crackers performing traditional arts
										</li>
										<li className="flex items-start gap-2">
											<CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
											Best viewing spots require early arrival (processions start around 8 PM)
										</li>
									</ul>
								</div>

								<div>
									<h4 className="font-semibold mb-2 text-orange-800 dark:text-orange-200 flex items-center gap-2">
										<Mountain className="w-4 h-4" />
										Pilgrimage Season (December to May)
									</h4>
									<p className="text-gray-700 dark:text-gray-300 mb-3">
										During the Adam's Peak pilgrimage season, the temple experiences its highest visitor numbers as thousands of pilgrims stop here to seek blessings before climbing the sacred mountain. Special ceremonies are conducted daily, and the temple remains open extended hours to accommodate the influx of devotees.
									</p>
									<ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
										<li className="flex items-start gap-2">
											<CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
											Peak season: December full moon to May full moon
										</li>
										<li className="flex items-start gap-2">
											<CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
											Extended temple hours during pilgrimage months
										</li>
										<li className="flex items-start gap-2">
											<CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
											Special blessing ceremonies for climbers
										</li>
										<li className="flex items-start gap-2">
											<CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
											Expect larger crowds on weekends and full moon days
										</li>
									</ul>
								</div>

								<div>
									<h4 className="font-semibold mb-2 text-orange-800 dark:text-orange-200">Other Important Days</h4>
									<ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
										<li className="flex items-start gap-2">
											<CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
											<span><strong>Poya Days (Full Moon):</strong> Monthly religious observance with special ceremonies</span>
										</li>
										<li className="flex items-start gap-2">
											<CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
											<span><strong>Vesak (May):</strong> Buddha's birthday celebration with decorations and lanterns</span>
										</li>
										<li className="flex items-start gap-2">
											<CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
											<span><strong>New Year (April):</strong> Traditional Sinhala and Tamil New Year blessings</span>
										</li>
									</ul>
								</div>
							</div>
						</CardContent>
					</Card>
				</section>

				{/* Visitor Guidelines */}
				<section className="mb-12">
					<Card className="border-green-200 dark:border-gray-700 bg-green-50 dark:bg-slate-800">
						<CardHeader>
							<CardTitle className="text-green-800 dark:text-green-300">Visitor Guidelines & Temple Etiquette</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="grid md:grid-cols-2 gap-6">
								<div>
									<h4 className="font-semibold mb-3 text-green-800 dark:text-green-200">Dress Code & Behavior</h4>
									<ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
										<li className="flex items-start gap-2">
											<CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
											Cover shoulders and knees (no shorts, sleeveless tops)
										</li>
										<li className="flex items-start gap-2">
											<CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
											Remove shoes before entering temple buildings
										</li>
										<li className="flex items-start gap-2">
											<CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
											Remove hats and caps inside shrines
										</li>
										<li className="flex items-start gap-2">
											<CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
											Maintain respectful silence in prayer areas
										</li>
										<li className="flex items-start gap-2">
											<CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
											Ask permission before photographing priests or devotees
										</li>
									</ul>
								</div>
								<div>
									<h4 className="font-semibold mb-3 text-green-800 dark:text-green-200">Practical Tips</h4>
									<ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
										<li className="flex items-start gap-2">
											<CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
											Visit early morning (6-8 AM) or evening (6-8 PM) for ceremonies
										</li>
										<li className="flex items-start gap-2">
											<CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
											Bring small bills for offerings and donations
										</li>
										<li className="flex items-start gap-2">
											<CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
											Parking available near the temple (may charge small fee)
										</li>
										<li className="flex items-start gap-2">
											<CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
											Local guides available to explain temple history
										</li>
										<li className="flex items-start gap-2">
											<CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
											Combine with visit to Ratnapura gem museums
										</li>
									</ul>
								</div>
							</div>
						</CardContent>
					</Card>
				</section>

				{/* Nearby Attractions */}
				<section className="mb-12 scroll-mt-40" id="nearby">
					<h2 className="text-3xl font-bold mb-6">What Else to Explore in Ratnapura</h2>
					<div className="grid md:grid-cols-2 gap-6">
						<Card>
							<CardHeader>
								<CardTitle className="flex items-center gap-2">
									<Gem className="w-5 h-5 text-pink-500" />
									Gem Museums & Mines
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-muted-foreground mb-3">
									Ratnapura means "City of Gems" in Sinhala. Visit working gem mines and museums to see precious stones including sapphires, rubies, and cat's eye being extracted and polished. Many establishments offer tours explaining the gem mining process.
								</p>
								<ul className="space-y-2 text-sm text-muted-foreground">
									<li className="flex items-start gap-2">
										<CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
										Gemological Museum Ratnapura - educational exhibits
									</li>
									<li className="flex items-start gap-2">
										<CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
										Working gem mines with guided tours
									</li>
									<li className="flex items-start gap-2">
										<CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
										Gem shops with certified authentic stones
									</li>
								</ul>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle className="flex items-center gap-2">
									<Mountain className="w-5 h-5 text-blue-500" />
									Adam's Peak (Sri Pada)
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-muted-foreground mb-3">
									The sacred mountain rises 2,243 meters and features the Sri Pada (Sacred Footprint) at its summit. The pilgrimage route from Ratnapura (Palabaddala path) is one of the main climbing routes, taking 5-7 hours to reach the peak.
								</p>
								<ul className="space-y-2 text-sm text-muted-foreground">
									<li className="flex items-start gap-2">
										<CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
										Season: December to May
									</li>
									<li className="flex items-start gap-2">
										<CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
										Distance: 40km from Ratnapura to Palabaddala trailhead
									</li>
									<li className="flex items-start gap-2">
										<CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
										Most climbers start after midnight for sunrise
									</li>
								</ul>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle className="flex items-center gap-2">
									<Sparkles className="w-5 h-5 text-purple-500" />
									Maha Saman Devalaya (Main Temple)
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-muted-foreground mb-3">
									Not to be confused with the Ratnapura shrine, the ancient Maha Saman Devalaya is located in the village of Udasgiriya, about 12km from Ratnapura. This is considered the original and most important shrine to God Saman, with archaeological significance.
								</p>
								<ul className="space-y-2 text-sm text-muted-foreground">
									<li className="flex items-start gap-2">
										<CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
										Ancient temple with historical artifacts
									</li>
									<li className="flex items-start gap-2">
										<CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
										Peaceful rural setting
									</li>
									<li className="flex items-start gap-2">
										<CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
										Can be combined with Ratnapura temple visit
									</li>
								</ul>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle className="flex items-center gap-2">
									<Sparkles className="w-5 h-5 text-green-500" />
									Bopath Ella Waterfall
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-muted-foreground mb-3">
									A beautiful waterfall shaped like a Bo leaf (sacred fig tree), located about 5km from Ratnapura. The falls drop approximately 30 meters and are surrounded by lush greenery, making it a popular picnic spot for locals.
								</p>
								<ul className="space-y-2 text-sm text-muted-foreground">
									<li className="flex items-start gap-2">
										<CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
										Easy access from Ratnapura town
									</li>
									<li className="flex items-start gap-2">
										<CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
										Swimming possible in calm seasons
									</li>
									<li className="flex items-start gap-2">
										<CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
										Small entrance fee collected
									</li>
								</ul>
							</CardContent>
						</Card>
					</div>
				</section>

				{/* Where to Stay & Eat */}
				<section className="mb-12">
					<h2 className="text-3xl font-bold mb-6">Where to Stay & Eat in Ratnapura</h2>
					<div className="grid md:grid-cols-2 gap-6">
						<Card>
							<CardHeader>
								<CardTitle>Accommodation Options</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="space-y-4">
									<div>
										<h4 className="font-semibold mb-1 text-foreground">Budget (Under $30/night)</h4>
										<ul className="text-sm text-muted-foreground space-y-1">
											<li>• Guesthouses near town center</li>
											<li>• Basic hotels with clean rooms</li>
											<li>• Pilgrim rest houses (during season)</li>
										</ul>
									</div>
									<div>
										<h4 className="font-semibold mb-1 text-foreground">Mid-Range ($30-80/night)</h4>
										<ul className="text-sm text-muted-foreground space-y-1">
											<li>• Ratnaloka Tour Inns</li>
											<li>• Rest House Ratnapura</li>
											<li>• Hotels with modern amenities</li>
										</ul>
									</div>
									<div>
										<h4 className="font-semibold mb-1 text-foreground">Luxury ($80+/night)</h4>
										<ul className="text-sm text-muted-foreground space-y-1">
											<li>• Boutique hotels with gem-themed decor</li>
											<li>• Eco-lodges in surrounding hills</li>
											<li>• Heritage bungalows</li>
										</ul>
									</div>
								</div>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle>Local Dining</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="space-y-3">
									<p className="text-muted-foreground">
										Ratnapura offers authentic Sri Lankan cuisine with local specialties influenced by the region's multi-ethnic population.
									</p>
									<div>
										<h4 className="font-semibold mb-1 text-foreground">Must-Try Dishes</h4>
										<ul className="text-sm text-muted-foreground space-y-1">
											<li>• Rice and curry with local vegetables</li>
											<li>• Fresh river fish preparations</li>
											<li>• Kiribath (milk rice) for breakfast</li>
											<li>• Kottu roti at street vendors</li>
											<li>• Traditional kola kanda (herbal porridge)</li>
										</ul>
									</div>
									<div className="mt-3 p-2 bg-blue-100 dark:bg-blue-900/30 rounded">
										<p className="text-xs text-blue-800 dark:text-blue-200">
											<strong>💡 Tip:</strong> Small restaurants near the temple serve excellent vegetarian meals. Try the local "hotel" (small eatery) for authentic budget-friendly food.
										</p>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>
				</section>

				{/* Best Time to Visit */}
				<section className="mb-12">
					<Card className="border-cyan-200 dark:border-gray-700 bg-cyan-50 dark:bg-slate-800">
						<CardHeader>
							<CardTitle className="text-cyan-800 dark:text-cyan-300 flex items-center gap-2">
								<Calendar className="w-5 h-5" />
								Best Time to Visit Saman Devalaya
							</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="grid md:grid-cols-3 gap-6">
								<div>
									<h4 className="font-semibold mb-2 text-cyan-800 dark:text-cyan-200">Peak Season (December - May)</h4>
									<p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
										Coincides with Adam's Peak pilgrimage season. Temple is busiest but offers the most vibrant spiritual atmosphere.
									</p>
									<ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
										<li>✓ Full religious ceremonies</li>
										<li>✓ Best weather conditions</li>
										<li>✗ Larger crowds</li>
										<li>✗ Higher accommodation rates</li>
									</ul>
								</div>
								<div>
									<h4 className="font-semibold mb-2 text-cyan-800 dark:text-cyan-200">Monsoon (May - September)</h4>
									<p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
										Southwest monsoon brings heavy rains. Fewer tourists but temple remains open for daily worship.
									</p>
									<ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
										<li>✓ Fewer crowds</li>
										<li>✓ Lower prices</li>
										<li>✗ Heavy rainfall</li>
										<li>✗ Sri Pada climbing closed</li>
									</ul>
								</div>
								<div>
									<h4 className="font-semibold mb-2 text-cyan-800 dark:text-cyan-200">Festival Time (July/August)</h4>
									<p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
										Esala Perahera festival offers spectacular cultural experience despite being monsoon period.
									</p>
									<ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
										<li>✓ Grand perahera processions</li>
										<li>✓ Traditional performances</li>
										<li>✗ Accommodation fills quickly</li>
										<li>✗ Occasional rain</li>
									</ul>
								</div>
							</div>
						</CardContent>
					</Card>
				</section>

				{/* Plan Your Visit */}
				<section className="mb-12">
					<Card className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-slate-800 dark:to-slate-800 border-purple-200 dark:border-gray-700">
						<CardHeader>
							<CardTitle className="text-purple-800 dark:text-purple-300">Plan Your Perfect Ratnapura Journey</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="space-y-4">
								<p className="text-gray-700 dark:text-gray-300">
									Experience the spiritual heart of Sri Lanka's Sabaragamuwa Province with a visit to Saman Devalaya. Whether you're a pilgrim seeking blessings before climbing Adam's Peak, a cultural enthusiast exploring Sri Lanka's religious traditions, or a traveler interested in authentic local experiences, this sacred shrine offers a profound connection to the island's spiritual heritage.
								</p>
								<div className="grid md:grid-cols-2 gap-4 mt-6">
									<div className="p-4 bg-white dark:bg-slate-700 rounded-lg">
										<h4 className="font-semibold mb-2 text-purple-800 dark:text-purple-200">Recommended Itinerary</h4>
										<ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
											<li>• Morning: Visit Saman Devalaya (7-9 AM)</li>
											<li>• Mid-morning: Explore gem museums</li>
											<li>• Afternoon: Visit Bopath Ella waterfall</li>
											<li>• Evening: Return for evening puja ceremony</li>
										</ul>
									</div>
									<div className="p-4 bg-white dark:bg-slate-700 rounded-lg">
										<h4 className="font-semibold mb-2 text-purple-800 dark:text-purple-200">Combine With</h4>
										<ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
											<li>• Adam's Peak pilgrimage (seasonal)</li>
											<li>• Sinharaja Rainforest (30km)</li>
											<li>• Kitulgala adventure sports (40km)</li>
											<li>• Udawalawe National Park (70km)</li>
										</ul>
									</div>
								</div>

								<div className="mt-6 p-4 bg-purple-100 dark:bg-purple-900/30 rounded-lg border-l-4 border-purple-500">
									<p className="text-purple-900 dark:text-purple-200 font-semibold mb-2">
										Need Transportation & Guided Tours?
									</p>
									<p className="text-purple-800 dark:text-purple-300 text-sm mb-3">
										Ceylanka Tours offers customized packages to Ratnapura including temple visits, gem mine tours, and Adam's Peak pilgrimages with experienced local guides.
									</p>
									<Link href="/contact-us">
										<Button className="bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white cursor-pointer">
											<ChevronRight className="w-4 h-4 mr-2" />
											Plan Your Ratnapura Visit
										</Button>
									</Link>
								</div>
							</div>
						</CardContent>
					</Card>
				</section>

				{/* Related Destinations */}
				<section className="mb-12">
					<h2 className="text-3xl font-bold mb-6">Explore More Sacred Sites</h2>
					<div className="grid md:grid-cols-3 gap-6">
						<Link href="/destinations/adams-peak" className="group">
							<Card className="h-full hover:shadow-lg transition-shadow">
								<CardHeader>
									<CardTitle className="group-hover:text-purple-600 transition-colors">Adam's Peak (Sri Pada)</CardTitle>
								</CardHeader>
								<CardContent>
									<p className="text-sm text-muted-foreground">
										Sacred mountain pilgrimage site, 40km from Ratnapura with the holy footprint at 2,243m summit.
									</p>
								</CardContent>
							</Card>
						</Link>

						<Link href="/destinations/kandeviharaya" className="group">
							<Card className="h-full hover:shadow-lg transition-shadow">
								<CardHeader>
									<CardTitle className="group-hover:text-purple-600 transition-colors">Kande Viharaya Temple</CardTitle>
								</CardHeader>
								<CardContent>
									<p className="text-sm text-muted-foreground">
										Buddhist temple in Aluthgama featuring a massive 48.8m Buddha statue with Hindu devalas.
									</p>
								</CardContent>
							</Card>
						</Link>

						<Link href="/destinations/anuradhapura" className="group">
							<Card className="h-full hover:shadow-lg transition-shadow">
								<CardHeader>
									<CardTitle className="group-hover:text-purple-600 transition-colors">Anuradhapura</CardTitle>
								</CardHeader>
								<CardContent>
									<p className="text-sm text-muted-foreground">
										Ancient capital with sacred Buddhist sites including Sri Maha Bodhi tree and massive stupas.
									</p>
								</CardContent>
							</Card>
						</Link>
					</div>
				</section>
			</div>
		</main>
	)
}
