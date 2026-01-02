import type { Metadata } from "next"
import Image from "next/image"
import { Star, Users, Shield, Swords, Crown, CheckCircle, MapPin, Calendar } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export const metadata: Metadata = {
	title: "The Ten Giants of King Dutugamunu | Sri Lankan Legends & History Guide 2025",
	description:
		"Discover the legendary Ten Giants of King Dutugamunu: their selection, heroic deeds, and the story of Kadol Tukser. A guide to Sri Lanka's epic warriors and ancient history.",
	keywords:
		"Dutugamunu, Ten Giants, Sri Lanka history, ancient warriors, Kadol Tukser, national heroes, Sinhala epic",
	openGraph: {
		title: "The Ten Giants of King Dutugamunu",
		description: "Meet the legendary warriors who helped unite ancient Sri Lanka. Their selection, service, and the tale of Kadol Tukser.",
		type: "article",
		images: ["/Polonnaruwa.jpeg"],
	},
}

export default function TenGiantsOfDutugamunu() {
	return (
		<main className="min-h-screen bg-background">
			{/* Hero Section */}
			<section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
				<Image
					src="/Ten-giants-of-dutugamunu.png"
					alt="Ancient Sri Lankan warriors and ruins at dawn"
					fill
					className="object-cover"
					priority
				/>
				<div className="absolute inset-0 bg-black/40" />
				<div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
					<h1 className="text-4xl md:text-5xl font-bold mb-4">The Ten Giants of Dutugamunu</h1>
					<p className="text-xl mb-6 font-light">Legendary Warriors Who United a Nation</p>
					<div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
						<Badge variant="secondary" className="bg-white/20 text-white border-white/30">
							<Crown className="w-4 h-4 mr-1" />
							King Dutugamunu
						</Badge>
						<Badge variant="secondary" className="bg-white/20 text-white border-white/30">
							<Swords className="w-4 h-4 mr-1" />
							Ancient Warriors
						</Badge>
					</div>
				</div>
			</section>

			<div className="max-w-6xl mx-auto px-4 py-12">
				{/* Introduction */}
				<section className="mb-10">
					<h2 className="text-3xl font-bold mb-6 text-foreground">Who Were the Ten Giants?</h2>
					<div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
						<p className="text-lg mb-4">
							The Ten Giants (Dasa Maha Yodayo in Sinhala) were the legendary champions of King Dutugamunu, the iconic ruler who united Sri Lanka in the 2nd century BCE. These mighty warriors were originally gathered and nurtured by King Kavantissa, Dutugamunu's wise and strategic father, who ruled the southern kingdom of Ruhuna. Kavantissa carefully selected and trained the giants to support his son's future campaign, laying the foundation for unity and inspiring the values of courage and loyalty in his people.
						</p>
						<p className="text-lg">
							Each giant was chosen for their unique strength, skill, and loyalty, forming an elite brotherhood that played a decisive role in the island&apos;s most famous war for unity and freedom. Their stories blending history and folklore continue to inspire Sri Lankans as symbols of courage, teamwork, and national pride.
						</p>
					</div>
				</section>

				{/* Quick Facts & Selection Process */}
				<div className="flex flex-col md:flex-row gap-8 mb-12">
					{/* Quick Facts */}
					<section className="flex-1">
						<Card>
							<CardHeader>
								<CardTitle className="flex items-center gap-2">
									<Star className="w-5 h-5 text-yellow-500" />
									Quick Facts: The Ten Giants
								</CardTitle>
							</CardHeader>
							<CardContent>
								<ul className="list-disc pl-5 space-y-2 text-base text-muted-foreground">
									<li>Served under King Dutugamunu (161–137 BCE), a national hero of Sri Lanka.</li>
									<li>Each giant had a distinct background some were farmers, others blacksmiths, hunters, or wrestlers.</li>
									<li>They are celebrated in the Mahavamsa, Sri Lanka's ancient chronicle.</li>
									<li>Their legendary deeds are honored in art, literature, and annual festivals.</li>
								</ul>
							</CardContent>
						</Card>
					</section>
					{/* Selection Process */}
					<section className="flex-1">
						<Card className="border-l-4 border-blue-500">
							<CardHeader>
								<CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
									<Users className="w-5 h-5" />
									How Were the Giants Chosen?
								</CardTitle>
							</CardHeader>
							<CardContent>
								<ul className="list-disc pl-5 space-y-2 text-base text-muted-foreground">
									<li>King Dutugamunu sought the strongest and most loyal men from across the island.</li>
									<li>Candidates were tested for physical power, bravery, and unwavering loyalty to the king and the nation.</li>
									<li>Many were discovered through feats of strength lifting massive stones, wrestling wild animals, or performing heroic deeds in their villages.</li>
									<li>Only ten were chosen, each given a special title and role in the royal army.</li>
								</ul>
							</CardContent>
						</Card>
					</section>
				</div>

				{/* The Giants and Their Legendary Service */}
				<section className="mb-10">
					<h2 className="text-2xl font-bold mb-4 text-foreground">The Ten Giants: Legends in Detail</h2>
					<div className="space-y-6">
						{/* Giant 1: Nandimithra */}
						<div className="grid md:grid-cols-3 gap-4 items-center p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
							<div className="md:col-span-1">
								<Image
									src="/placeholder.svg?height=200&width=200"
									alt="Nandimithra - The strongest giant uprooting palm trees"
									width={200}
									height={200}
									className="rounded-lg w-full"
								/>
							</div>
							<div className="md:col-span-2">
								<h3 className="text-xl font-bold mb-2">1. Nandimithra (Leader of the Ten Giants)</h3>
								<p className="text-muted-foreground">Possessed superhuman strength he could uproot palm trees, lift massive boulders, and break fortress gates with his bare hands. Nandimithra was also known for his ability to throw huge stones at enemy lines and was a master of intimidating war cries that demoralized opponents.</p>
							</div>
						</div>

						{/* Giant 2: Suranimala */}
						<div className="grid md:grid-cols-3 gap-4 items-center p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
							<div className="md:col-span-1">
								<Image
									src="/placeholder.svg?height=200&width=200"
									alt="Suranimala - The fastest runner leaping over walls"
									width={200}
									height={200}
									className="rounded-lg w-full"
								/>
							</div>
							<div className="md:col-span-2">
								<h3 className="text-xl font-bold mb-2">2. Suranimala</h3>
								<p className="text-muted-foreground">The fastest runner among the giants, Suranimala could cover great distances in moments and was famed for his ability to leap over moats and walls. He was also a skilled swordsman, able to defeat multiple foes with swift, precise strikes.</p>
							</div>
						</div>

						{/* Giant 3: Mahasona */}
						<div className="grid md:grid-cols-3 gap-4 items-center p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
							<div className="md:col-span-1">
								<Image
									src="/placeholder.svg?height=200&width=200"
									alt="Mahasona - The Great Demon wrestling wild animals"
									width={200}
									height={200}
									className="rounded-lg w-full"
								/>
							</div>
							<div className="md:col-span-2">
						<h3 className="text-xl font-bold mb-2">3. Mahasona (Maha Sona)</h3>
						<p className="text-muted-foreground">Named Sena at birth, he could break young palm trees at age 7 and uproot full palms at age 10. Later called Maha Sona after his legendary final battle at a cemetery (Sohona). He was a master of unarmed combat, able to wrestle wild animals and overpower groups of enemies with his terrifying battle roar.</p>
							</div>
						</div>

						{/* Giant 4: Gothaimbara */}
						<div className="grid md:grid-cols-3 gap-4 items-center p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
							<div className="md:col-span-1">
								<Image
									src="/placeholder.svg?height=200&width=200"
									alt="Gothaimbara - Master wrestler and grappler"
									width={200}
									height={200}
									className="rounded-lg w-full"
								/>
							</div>
							<div className="md:col-span-2">
								<h3 className="text-xl font-bold mb-2">4. Gothaimbara</h3>
								<p className="text-muted-foreground">Renowned for his wrestling and grappling skills, Gothaimbara could pin down the strongest warriors and was able to hurl enemies far from the battlefield. He was also adept at using improvised weapons, such as tree trunks and rocks.</p>
							</div>
						</div>

						{/* Giant 5: Therapuththabhaya */}
						<div className="grid md:grid-cols-3 gap-4 items-center p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
							<div className="md:col-span-1">
								<Image
									src="/placeholder.svg?height=200&width=200"
									alt="Therapuththabhaya - Monk warrior and strategist"
									width={200}
									height={200}
									className="rounded-lg w-full"
								/>
							</div>
							<div className="md:col-span-2">
								<h3 className="text-xl font-bold mb-2">5. Therapuththabhaya</h3>
								<p className="text-muted-foreground">A rare blend of monk and warrior, he was skilled in both martial arts and spiritual leadership. Therapuththabhaya could calm his comrades in the heat of battle and was known for his ability to strategize and inspire.</p>
							</div>
						</div>

						{/* Giant 6: Velusumana */}
						<div className="grid md:grid-cols-3 gap-4 items-center p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
							<div className="md:col-span-1">
								<Image
									src="/placeholder.svg?height=200&width=200"
									alt="Velusumana - Expert horseman in mounted combat"
									width={200}
									height={200}
									className="rounded-lg w-full"
								/>
							</div>
							<div className="md:col-span-2">
								<h3 className="text-xl font-bold mb-2">6. Velusumana</h3>
								<p className="text-muted-foreground">The most skilled horseman, Velusumana could ride at full speed through enemy lines and was an expert in mounted combat. He was also known for his ability to deliver messages and supplies across dangerous terrain.</p>
							</div>
						</div>

						{/* Giant 7: Phussadeva */}
						<div className="grid md:grid-cols-3 gap-4 items-center p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
							<div className="md:col-span-1">
								<Image
									src="/placeholder.svg?height=200&width=200"
									alt="Phussadeva - Legendary archer with bow and arrows"
									width={200}
									height={200}
									className="rounded-lg w-full"
								/>
							</div>
							<div className="md:col-span-2">
								<h3 className="text-xl font-bold mb-2">7. Phussadeva</h3>
								<p className="text-muted-foreground">The legendary archer, Phussadeva could shoot arrows with such force and accuracy that he could pierce armor, shields, and even elephants. He was also skilled in making and repairing bows and arrows for the army.</p>
							</div>
						</div>

						{/* Giant 8: Khanjadeva */}
						<div className="grid md:grid-cols-3 gap-4 items-center p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
							<div className="md:col-span-1">
								<Image
									src="/placeholder.svg?height=200&width=200"
									alt="Khanjadeva - Master spearman fighting with crutches"
									width={200}
									height={200}
									className="rounded-lg w-full"
								/>
							</div>
							<div className="md:col-span-2">
						<h3 className="text-xl font-bold mb-2">8. Khanjadeva</h3>
						<p className="text-muted-foreground">Born as Dewa, he limped slightly (hence the name Khanchade​va). Despite this, he possessed incredible strength - able to chase great buffaloes, grasp them by their legs, whirl them overhead and dash them to the ground. His determination made him a symbol of resilience.</p>
							</div>
						</div>

						{/* Giant 9: Labhiyavasabha */}
						<div className="grid md:grid-cols-3 gap-4 items-center p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
							<div className="md:col-span-1">
								<Image
									src="/placeholder.svg?height=200&width=200"
									alt="Labhiyavasabha - Logistical mastermind organizing troops"
									width={200}
									height={200}
									className="rounded-lg w-full"
								/>
							</div>
							<div className="md:col-span-2">
						<h3 className="text-xl font-bold mb-2">9. Labhiyavasabha</h3>
						<p className="text-muted-foreground">Called &quot;Vasabha the Gifted&quot; for his noble physique and incredible strength. At age 20, he single-handedly moved masses of earth that would require a dozen men, constructing the legendary Vasabha tank with ease. His engineering feats and earth-moving abilities were unmatched.</p>
							</div>
						</div>

					{/* Giant 10: Maha Bharana */}
					<div className="grid md:grid-cols-3 gap-4 items-center p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
						<div className="md:col-span-1">
							<Image
								src="/placeholder.svg?height=200&width=200"
								alt="Maha Bharana - The great hunter chasing wild animals"
								width={200}
								height={200}
								className="rounded-lg w-full"
							/>
						</div>
						<div className="md:col-span-2">
							<h3 className="text-xl font-bold mb-2">10. Maha Bharana (Great Bharana)</h3>
							<p className="text-muted-foreground">Born in the village of Kappakandara to a man named Kumara. As a young boy of 10-12, Bharana could chase after hares in the forest and crush them under his feet. By age 16, he could outrun and hunt antelope, elk and boar with his bare hands. His incredible speed and hunting prowess earned him recognition as a great warrior and the name Maha Bharana.</p>
						</div>
					</div>						<p className="mt-6 text-muted-foreground text-lg">Together, these ten giants formed the backbone of Dutugamunu&apos;s army, leading daring assaults, inspiring the troops, and helping to secure victory in Sri Lanka&apos;s most legendary war for unity.</p>
					</div>
				</section>

				{/* The Battle of Vijithapura */}
				<section className="mb-10">
					<Card className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-400">
						<CardHeader>
							<CardTitle className="flex items-center gap-2 text-red-900 dark:text-red-200">
								<Swords className="w-5 h-5" />
								The Battle of Vijithapura: Turning Point Against King Elara
							</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="text-base text-red-900 dark:text-red-100 mb-2">
								The siege of Vijithapura was the most decisive battle in King Dutugamunu's campaign to reclaim Anuradhapura from King Elara. The fortress was heavily defended, surrounded by moats and high walls, and considered nearly impregnable.
							</p>
							<ul className="list-disc pl-5 text-sm text-red-800 dark:text-red-200 mb-2">
								<li>The Ten Giants led the assault, using their unique skills to break through the defenses. Nandimithra uprooted the fortress gate, while Kadol Tissa and others built makeshift bridges and siege engines.</li>
								<li>Phussadeva's arrows rained down on defenders, and Suranimala was the first to scale the walls, opening the gates for the army.</li>
								<li>After fierce fighting, Dutugamunu's forces captured Vijithapura, paving the way for the final victory over King Elara and the unification of Sri Lanka.</li>
							</ul>
							<p className="text-sm text-red-800 dark:text-red-200">The bravery and teamwork of the Ten Giants at Vijithapura are still celebrated as a symbol of unity and heroism in Sri Lankan history.</p>
						</CardContent>
					</Card>
				</section>

				{/* Spotlight: Kadol Tissa (Kadol Tukser) */}
				<section className="mb-10">
					<Card className="bg-amber-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400">
						<CardHeader>
							<CardTitle className="flex items-center gap-2 text-yellow-900 dark:text-yellow-200">
								<Shield className="w-5 h-5" />
								Spotlight: Kadol Tissa (Kadol Tukser)
							</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="text-base text-yellow-900 dark:text-yellow-100 mb-2">
								Kadol Tissa, also known as Kadol Tukser, was famed for his incredible strength and engineering skills. He was instrumental in building siege engines and breaking through enemy fortifications. Legends say he could twist iron bars with his hands and carry massive stones for fortress construction.
							</p>
							<p className="text-sm text-yellow-800 dark:text-yellow-200">
								His legacy lives on as a symbol of ingenuity and raw power in Sri Lankan folklore.
							</p>
						</CardContent>
					</Card>
				</section>

				{/* Learn More */}
				<section className="mb-10">
					<Card className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400">
						<CardHeader>
							<CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-200">
								<CheckCircle className="w-5 h-5" />
								Explore More Sri Lankan Legends
							</CardTitle>
						</CardHeader>
						<CardContent>
							<ul className="list-disc pl-5 space-y-2 text-base text-blue-900 dark:text-blue-100">
								<li>
									<Link href="/destinations/anuradhapura" className="underline hover:text-blue-600">Anuradhapura: Ancient Capital Guide</Link>
								</li>
								<li>
									<Link href="/blog/beware-of-this-waves" className="underline hover:text-blue-600">Read: Surviving Nature's Challenges in Sri Lanka</Link>
								</li>
							</ul>
						</CardContent>
					</Card>
				</section>

				{/* Ad Banner */}
				<div className="mt-16">
					{/* You can add an <AdBanner slot="ten-giants-bottom" /> here if available */}
				</div>
			</div>
		</main>
	)
}
