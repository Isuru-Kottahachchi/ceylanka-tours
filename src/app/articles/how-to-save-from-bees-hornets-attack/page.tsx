import type { Metadata } from "next"
import Image from "next/image"
import { AlertTriangle, CheckCircle, Phone, Shield, Zap } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
	title: "How to Survive a Hornet or Bee Attack in Sri Lanka | Tourist Safety Guide 2025",
	description:
		"Essential safety guide for tourists: how to avoid, survive, and recover from hornet or bee attacks in Sri Lanka. Step-by-step actions before, during, and after an attack.",
	keywords:
		"hornet attack, bee attack, Sri Lanka, tourist safety, first aid, emergency, insect stings, travel health",
	openGraph: {
		title: "How to Survive a Hornet or Bee Attack in Sri Lanka",
		description: "Tourist safety guide: what to do before, during, and after a hornet or bee attack.",
		type: "article",
		images: ["/jungle-beach.jpeg"],
	},
}

export default function HornetAttackGuide() {
	return (
		<main className="min-h-screen bg-background">
			{/* Hero Section */}
			<section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
				<Image
					src="/jungle-beach.jpeg"
					alt="Hornet flying near a tourist in Sri Lankan jungle"
					fill
					className="object-cover"
					priority
				/>
				<div className="absolute inset-0 bg-black/50" />
				<div className="relative z-10 text-center text-white px-4 max-w-2xl mx-auto">
					<h1 className="text-4xl md:text-5xl font-bold mb-4">Surviving a Hornet or Bee Attack</h1>
					<p className="text-xl mb-6 font-light">Essential Safety Guide for Tourists in Sri Lanka</p>
					<div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
						<Badge variant="secondary" className="bg-white/20 text-white border-white/30">
							<AlertTriangle className="w-4 h-4 mr-1" />
							Emergency Preparedness
						</Badge>
						<Badge variant="secondary" className="bg-white/20 text-white border-white/30">
							<Shield className="w-4 h-4 mr-1" />
							Nature Safety
						</Badge>
					</div>
				</div>
			</section>

			<div className="max-w-6xl mx-auto px-4 py-12">
				{/* Introduction */}
				<section className="mb-10">
					<h2 className="text-3xl font-bold mb-6 text-foreground">Why You Should Be Prepared</h2>
					<div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
						<p className="text-lg mb-4">
							Sri Lanka’s lush forests and ancient sites are home to hornets and wild bees. While attacks are rare, disturbing a nest can trigger aggressive swarming. Knowing what to do can save lives and prevent serious injury.
						</p>
						<p className="text-lg">
							This guide gives you clear, step-by-step actions to avoid, survive, and recover from a hornet or bee attack, so you can explore Sri Lanka with confidence.
						</p>
					</div>
				</section>

				{/* Quick Facts & Emergency Contacts */}
				<div className="flex flex-col md:flex-row gap-8 mb-12">
					{/* Quick Facts */}
					<section className="flex-1">
						<Card>
							<CardHeader>
								<CardTitle className="flex items-center gap-2">
									<Zap className="w-5 h-5 text-yellow-500" />
									Quick Facts: Hornet & Bee Attacks
								</CardTitle>
							</CardHeader>
							<CardContent>
								<ul className="list-disc pl-5 space-y-2 text-base text-muted-foreground">
									<li>Most attacks happen when a nest is disturbed—stay alert in forests and ruins.</li>
									<li>Hornets and wild bees can chase for 100+ meters if provoked.</li>
									<li>Stings are painful and can cause allergic reactions in some people.</li>
									<li>Fatalities are extremely rare with prompt action and medical care.</li>
								</ul>
							</CardContent>
						</Card>
					</section>
					{/* Emergency Contacts */}
					<section className="flex-1">
						<Card className="border-l-4 border-red-500">
							<CardHeader>
								<CardTitle className="flex items-center gap-2 text-red-700 dark:text-red-300">
									<Phone className="w-5 h-5" />
									Emergency Contacts
								</CardTitle>
							</CardHeader>
							<CardContent>
								<ul className="space-y-2 text-base text-muted-foreground">
									<li><strong>Ambulance (Sri Lanka):</strong> <span className="text-red-700 dark:text-red-300">1990</span></li>
									<li><strong>Tourist Police:</strong> <span className="text-red-700 dark:text-red-300">+94 11 242 1052</span></li>
									<li><strong>Nearest Hospital:</strong> Ask locals or use Google Maps for directions</li>
								</ul>
							</CardContent>
						</Card>
					</section>
				</div>

				{/* How to Avoid an Attack */}
				<section className="mb-10">
					<h2 className="text-2xl font-bold mb-4 text-foreground">How to Avoid a Hornet or Bee Attack</h2>
					<div className="prose max-w-none text-muted-foreground">
						<ul className="list-disc pl-5 space-y-2">
							<li>Stay on marked trails and avoid dense undergrowth or abandoned ruins.</li>
							<li>Look for warning signs or buzzing sounds—never approach a visible nest.</li>
							<li>Do not throw objects, shout, or make sudden movements near trees or eaves.</li>
							<li>Wear light-colored clothing; avoid strong perfumes and bright patterns.</li>
							<li>Follow your guide’s instructions and keep children close.</li>
						</ul>
					</div>
				</section>

				{/* What to Do During an Attack */}
				<section className="mb-10">
					<h2 className="text-2xl font-bold mb-4 text-foreground">What to Do During an Attack</h2>
					<div className="prose max-w-none text-muted-foreground">
						<ul className="list-decimal pl-5 space-y-2">
							<li><strong>Run away immediately</strong>—move quickly in a straight line away from the nest. Do not stop to help others until you are safe.</li>
							<li><strong>Cover your face and head</strong> with clothing, a bag, or your arms. Protect your eyes and mouth.</li>
							<li><strong>Do not swat at the insects</strong>—this makes them more aggressive.</li>
							<li><strong>Seek shelter</strong> in a car, building, or dense bush if possible. Close doors and windows behind you.</li>
							<li><strong>Keep moving</strong> until the hornets or bees stop chasing (usually after 100–200 meters).</li>
						</ul>
					</div>
				</section>

				{/* What to Do After an Attack */}
				<section className="mb-10">
					<h2 className="text-2xl font-bold mb-4 text-foreground">What to Do After an Attack</h2>
					<div className="prose max-w-none text-muted-foreground">
						<ul className="list-decimal pl-5 space-y-2">
							<li><strong>Check yourself and others</strong> for stings. Remove stingers by scraping (not squeezing) with a card or fingernail.</li>
							<li><strong>Wash stings</strong> with soap and water. Apply a cold pack to reduce pain and swelling.</li>
							<li><strong>Take antihistamines</strong> (if not allergic) for itching and swelling. Use pain relievers as needed.</li>
							<li><strong>Watch for allergic reactions:</strong> difficulty breathing, swelling of face/throat, dizziness, or hives. <span className="text-red-700 font-semibold">Call 1990 for an ambulance immediately if these occur.</span></li>
							<li><strong>Seek medical help</strong> if stung multiple times, if symptoms worsen, or if the victim is a child, elderly, or has known allergies.</li>
						</ul>
					</div>
				</section>

				{/* Helpful Resources */}
				<section className="mb-10">
					<Card className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400">
						<CardHeader>
							<CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-200">
								<CheckCircle className="w-5 h-5" />
								More Safety Tips & Resources
							</CardTitle>
						</CardHeader>
						<CardContent>
							<ul className="list-disc pl-5 space-y-2 text-base text-blue-900 dark:text-blue-100">
								<li>
									<Link href="https://www.cdc.gov/niosh/topics/insects/beeswasphornets.html" target="_blank" className="underline hover:text-blue-600">CDC: Bee, Wasp, and Hornet Safety</Link>
								</li>
								<li>
									<Link href="https://www.redcross.org.uk/first-aid/learn-first-aid/hornet-or-wasp-sting" target="_blank" className="underline hover:text-blue-600">Red Cross: First Aid for Stings</Link>
								</li>
								<li>
									<Link href="/blog/beware-of-this-waves" className="underline hover:text-blue-600">Read: Beach & Wildlife Safety in Sri Lanka</Link>
								</li>
							</ul>
						</CardContent>
					</Card>
				</section>

				{/* Ad Banner */}
				<div className="mt-16">
					{/* You can add an <AdBanner slot="hornet-attack-bottom" /> here if available */}
				</div>
			</div>
		</main>
	)
}
