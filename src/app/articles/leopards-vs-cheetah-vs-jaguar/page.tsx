import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, CheckCircle2, Eye, Globe2, PawPrint, ShieldCheck } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type BigCat = {
	name: string
	oneLine: string
	body: string
	spots: string
	face: string
	tail: string
	home: string
	tip: string
	tone: string
}

const bigCats: BigCat[] = [
	{
		name: "Leopard",
		oneLine: "Strong climber with rosettes and no black tear lines.",
		body: "Medium to large body, athletic, flexible, and built for climbing.",
		spots: "Rosettes. Most spots look like small open flowers. Usually there is no black dot inside the rosette.",
		face: "Face is plain compared with a cheetah. No black tear lines from the eyes.",
		tail: "Long tail that helps with balance when climbing and turning.",
		home: "Africa and parts of Asia, including Sri Lanka.",
		tip: "If you are in Sri Lanka and see a big spotted cat in the wild, it is a leopard.",
		tone: "amber",
	},
	{
		name: "Cheetah",
		oneLine: "Slim runner with solid black spots and black tear lines.",
		body: "Light, slim body with long legs and a deep chest. Built for speed.",
		spots: "Small solid black spots. Not rosettes.",
		face: "Easy to know by the black tear lines running from the eyes to the mouth.",
		tail: "Long tail used for balance while running fast.",
		home: "Mostly Africa, with a very small remaining population in Iran.",
		tip: "The tear lines are the fastest way to identify a cheetah.",
		tone: "sky",
	},
	{
		name: "Jaguar",
		oneLine: "Heavy, powerful cat with big rosettes that often have a dot inside.",
		body: "Shorter, heavier, and more muscular than a leopard.",
		spots: "Large rosettes with one or more dark dots inside many of them.",
		face: "Broad head and very strong jaw. No cheetah tear lines.",
		tail: "Tail is shorter than a leopard's tail.",
		home: "Central and South America.",
		tip: "Big rosettes with a dot inside usually mean jaguar.",
		tone: "emerald",
	},
]

function CatIllustration({ animal }: { animal: BigCat }) {
	if (animal.name === "Cheetah") {
		return (
			<svg viewBox="0 0 320 220" className="h-52 w-full rounded-xl bg-sky-50">
				<rect x="0" y="0" width="320" height="220" fill="#e0f2fe" />
				<ellipse cx="160" cy="112" rx="78" ry="52" fill="#f4c46b" />
				<circle cx="236" cy="84" r="30" fill="#f4c46b" />
				<rect x="214" y="112" width="12" height="52" rx="6" fill="#f4c46b" />
				<rect x="188" y="118" width="12" height="54" rx="6" fill="#f4c46b" />
				<rect x="118" y="118" width="12" height="54" rx="6" fill="#f4c46b" />
				<rect x="94" y="112" width="12" height="52" rx="6" fill="#f4c46b" />
				<path d="M84 105 C58 94, 42 84, 28 88" stroke="#f4c46b" strokeWidth="10" fill="none" strokeLinecap="round" />
				<path d="M244 88 L250 118" stroke="#111827" strokeWidth="4" strokeLinecap="round" />
				<path d="M228 88 L222 118" stroke="#111827" strokeWidth="4" strokeLinecap="round" />
				<circle cx="246" cy="80" r="4" fill="#111827" />
				<circle cx="226" cy="80" r="4" fill="#111827" />
				{[
					[122, 88], [144, 76], [166, 90], [188, 80], [208, 96], [132, 108], [156, 112], [182, 108], [208, 118],
					[144, 132], [168, 136], [192, 132], [116, 132], [98, 98], [104, 122], [220, 76], [214, 148]
				].map(([x, y], index) => (
					<circle key={index} cx={x} cy={y} r="4" fill="#111827" />
				))}
			</svg>
		)
	}

	if (animal.name === "Jaguar") {
		return (
			<svg viewBox="0 0 320 220" className="h-52 w-full rounded-xl bg-emerald-50">
				<rect x="0" y="0" width="320" height="220" fill="#d1fae5" />
				<ellipse cx="154" cy="112" rx="82" ry="56" fill="#d6a24b" />
				<circle cx="236" cy="86" r="32" fill="#d6a24b" />
				<rect x="210" y="116" width="14" height="54" rx="7" fill="#d6a24b" />
				<rect x="182" y="120" width="14" height="54" rx="7" fill="#d6a24b" />
				<rect x="118" y="120" width="14" height="54" rx="7" fill="#d6a24b" />
				<rect x="92" y="116" width="14" height="54" rx="7" fill="#d6a24b" />
				<path d="M80 106 C62 96, 48 92, 32 96" stroke="#d6a24b" strokeWidth="12" fill="none" strokeLinecap="round" />
				<circle cx="246" cy="82" r="4" fill="#111827" />
				<circle cx="226" cy="82" r="4" fill="#111827" />
				{[
					[120, 84], [154, 80], [188, 86], [136, 116], [172, 112], [206, 116], [122, 142], [158, 142], [194, 144], [214, 88], [106, 104]
				].map(([x, y], index) => (
					<g key={index}>
						<ellipse cx={x} cy={y} rx="11" ry="8" fill="none" stroke="#111827" strokeWidth="3" />
						<circle cx={x} cy={y} r="2.5" fill="#111827" />
					</g>
				))}
			</svg>
		)
	}

	return (
		<svg viewBox="0 0 320 220" className="h-52 w-full rounded-xl bg-amber-50">
			<rect x="0" y="0" width="320" height="220" fill="#fef3c7" />
			<ellipse cx="154" cy="112" rx="80" ry="54" fill="#c98e42" />
			<circle cx="236" cy="86" r="30" fill="#c98e42" />
			<rect x="210" y="116" width="13" height="54" rx="6.5" fill="#c98e42" />
			<rect x="184" y="120" width="13" height="54" rx="6.5" fill="#c98e42" />
			<rect x="120" y="120" width="13" height="54" rx="6.5" fill="#c98e42" />
			<rect x="96" y="116" width="13" height="54" rx="6.5" fill="#c98e42" />
			<path d="M78 104 C54 94, 40 84, 22 90" stroke="#c98e42" strokeWidth="10" fill="none" strokeLinecap="round" />
			<circle cx="246" cy="82" r="4" fill="#111827" />
			<circle cx="226" cy="82" r="4" fill="#111827" />
			{[
				[118, 84], [144, 76], [170, 84], [196, 78], [132, 108], [158, 112], [186, 110], [212, 102], [118, 138], [148, 142], [180, 140], [208, 136]
			].map(([x, y], index) => (
				<ellipse key={index} cx={x} cy={y} rx="9" ry="7" fill="none" stroke="#111827" strokeWidth="2.5" />
			))}
		</svg>
	)
}

function ToneClasses({ tone }: { tone: string }) {
	const map = {
		amber: "border-amber-200 bg-amber-50 text-amber-900",
		sky: "border-sky-200 bg-sky-50 text-sky-900",
		emerald: "border-emerald-200 bg-emerald-50 text-emerald-900",
	}

	return map[tone as keyof typeof map] ?? map.amber
}

export default function LeopardsVsCheetahVsJaguarPage() {
	return (
		<main className="min-h-screen bg-background">
			<section className="relative overflow-hidden border-b bg-gradient-to-br from-amber-50 via-background to-emerald-50">
				<div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
					<Link href="/articles" className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
						<ArrowLeft className="h-4 w-4" />
						Back to Articles
					</Link>

					<div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
						<div>
							<Badge className="mb-4 bg-amber-600 text-white hover:bg-amber-600">Wildlife Guide</Badge>
							<h1 className="max-w-3xl text-4xl font-bold tracking-tight text-foreground md:text-6xl">
								Leopard vs Cheetah vs Jaguar
							</h1>
							<p className="mt-4 max-w-2xl text-lg leading-8 text-muted-foreground">
								A simple guide to tell these three big cats apart. This page uses clear, original comparison images and easy English.
							</p>
							<div className="mt-6 flex flex-wrap gap-3 text-sm">
								<span className="rounded-full bg-white px-4 py-2 text-muted-foreground shadow-sm ring-1 ring-black/5">Simple English</span>
								<span className="rounded-full bg-white px-4 py-2 text-muted-foreground shadow-sm ring-1 ring-black/5">Easy visual guide</span>
								<span className="rounded-full bg-white px-4 py-2 text-muted-foreground shadow-sm ring-1 ring-black/5">Useful for Sri Lanka travelers</span>
							</div>
						</div>

						<Card className="overflow-hidden border-amber-200 shadow-lg">
							<div className="relative h-80 w-full">
								<Image
									src="/Leopard-in-Yala.jpg"
									alt="Sri Lankan leopard resting on a rock in Yala National Park"
									fill
									className="object-cover"
									priority
								/>
							</div>
							<CardContent className="p-4 text-sm text-muted-foreground">
								Sri Lanka has leopards in the wild. It does not have wild cheetahs or wild jaguars.
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			<div className="mx-auto max-w-6xl px-4 py-12">
				<section className="mb-10 grid gap-4 md:grid-cols-3">
					<Card className="border-amber-200">
						<CardContent className="p-6">
							<h2 className="mb-3 text-lg font-semibold text-foreground">Quick Rule 1</h2>
							<p className="text-muted-foreground">If the cat has black tear lines on the face, it is a cheetah.</p>
						</CardContent>
					</Card>
					<Card className="border-emerald-200">
						<CardContent className="p-6">
							<h2 className="mb-3 text-lg font-semibold text-foreground">Quick Rule 2</h2>
							<p className="text-muted-foreground">If the rosette spot has a dark dot inside, it is usually a jaguar.</p>
						</CardContent>
					</Card>
					<Card className="border-sky-200">
						<CardContent className="p-6">
							<h2 className="mb-3 text-lg font-semibold text-foreground">Quick Rule 3</h2>
							<p className="text-muted-foreground">If you are in Sri Lanka, the big spotted cat you may see in the wild is a leopard.</p>
						</CardContent>
					</Card>
				</section>

				<section className="mb-12">
					<div className="mb-6 max-w-3xl">
						<h2 className="text-3xl font-bold text-foreground">See the Difference</h2>
						<p className="mt-3 text-muted-foreground">
							These simple images show the main visual clues. Look first at the spots, then the face, then the body shape.
						</p>
					</div>

					<div className="grid gap-6 lg:grid-cols-3">
						{bigCats.map((animal) => (
							<Card key={animal.name} className="overflow-hidden border shadow-sm">
								<CardHeader className={ToneClasses({ tone: animal.tone })}>
									<CardTitle className="text-2xl">{animal.name}</CardTitle>
									<p className="text-sm opacity-90">{animal.oneLine}</p>
								</CardHeader>
								<CardContent className="space-y-4 p-6">
									<CatIllustration animal={animal} />
									<div className="space-y-3 text-sm text-muted-foreground">
										<p><strong className="text-foreground">Body:</strong> {animal.body}</p>
										<p><strong className="text-foreground">Spots:</strong> {animal.spots}</p>
										<p><strong className="text-foreground">Face:</strong> {animal.face}</p>
										<p><strong className="text-foreground">Tail:</strong> {animal.tail}</p>
										<p><strong className="text-foreground">Home:</strong> {animal.home}</p>
									</div>
									<div className="rounded-lg bg-muted/60 p-3 text-sm text-foreground">
										<strong>Best clue:</strong> {animal.tip}
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				</section>

				<section className="mb-12">
					<Card>
						<CardHeader>
							<CardTitle className="text-3xl">Easy Comparison Table</CardTitle>
						</CardHeader>
						<CardContent className="overflow-x-auto">
							<table className="w-full min-w-[700px] border-collapse text-left text-sm">
								<thead>
									<tr className="border-b">
										<th className="py-3 pr-4 font-semibold text-foreground">Feature</th>
										<th className="py-3 pr-4 font-semibold text-foreground">Leopard</th>
										<th className="py-3 pr-4 font-semibold text-foreground">Cheetah</th>
										<th className="py-3 font-semibold text-foreground">Jaguar</th>
									</tr>
								</thead>
								<tbody className="text-muted-foreground">
									<tr className="border-b align-top">
										<td className="py-3 pr-4 font-medium text-foreground">Spot pattern</td>
										<td className="py-3 pr-4">Rosettes, usually without a dot inside</td>
										<td className="py-3 pr-4">Solid black spots</td>
										<td className="py-3">Big rosettes, often with a dot inside</td>
									</tr>
									<tr className="border-b align-top">
										<td className="py-3 pr-4 font-medium text-foreground">Face</td>
										<td className="py-3 pr-4">No tear lines</td>
										<td className="py-3 pr-4">Black tear lines</td>
										<td className="py-3">No tear lines, broad head</td>
									</tr>
									<tr className="border-b align-top">
										<td className="py-3 pr-4 font-medium text-foreground">Body build</td>
										<td className="py-3 pr-4">Strong and balanced</td>
										<td className="py-3 pr-4">Slim and built for speed</td>
										<td className="py-3">Heavy and muscular</td>
									</tr>
									<tr className="border-b align-top">
										<td className="py-3 pr-4 font-medium text-foreground">Tail</td>
										<td className="py-3 pr-4">Long</td>
										<td className="py-3 pr-4">Long</td>
										<td className="py-3">Shorter</td>
									</tr>
									<tr className="border-b align-top">
										<td className="py-3 pr-4 font-medium text-foreground">Best known for</td>
										<td className="py-3 pr-4">Climbing and stealth</td>
										<td className="py-3 pr-4">Fast running</td>
										<td className="py-3">Powerful bite and swimming</td>
									</tr>
									<tr className="align-top">
										<td className="py-3 pr-4 font-medium text-foreground">Wild range</td>
										<td className="py-3 pr-4">Africa and Asia</td>
										<td className="py-3 pr-4">Mostly Africa</td>
										<td className="py-3">Central and South America</td>
									</tr>
								</tbody>
							</table>
						</CardContent>
					</Card>
				</section>

				<section className="mb-12 grid gap-6 lg:grid-cols-2">
					<Card>
						<CardHeader>
							<CardTitle className="flex items-center gap-2 text-2xl"><Eye className="h-6 w-6 text-sky-600" /> Fast Identification Tips</CardTitle>
						</CardHeader>
						<CardContent>
							<ul className="space-y-3 text-muted-foreground">
								<li className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 text-green-600" /><span><strong className="text-foreground">Look at the face first:</strong> tear lines mean cheetah.</span></li>
								<li className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 text-green-600" /><span><strong className="text-foreground">Look at the spots second:</strong> solid spots mean cheetah, rosettes mean leopard or jaguar.</span></li>
								<li className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 text-green-600" /><span><strong className="text-foreground">Check inside the rosette:</strong> a dark dot inside many rosettes points to jaguar.</span></li>
								<li className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 text-green-600" /><span><strong className="text-foreground">Check the body shape:</strong> cheetah is slim, jaguar is heavy, leopard is in between.</span></li>
							</ul>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle className="flex items-center gap-2 text-2xl"><Globe2 className="h-6 w-6 text-emerald-600" /> Where You Find Them</CardTitle>
						</CardHeader>
						<CardContent>
							<ul className="space-y-3 text-muted-foreground">
								<li className="flex items-start gap-3"><PawPrint className="mt-0.5 h-5 w-5 text-amber-600" /><span><strong className="text-foreground">Leopard:</strong> Africa and Asia. Sri Lanka has its own leopard subspecies.</span></li>
								<li className="flex items-start gap-3"><PawPrint className="mt-0.5 h-5 w-5 text-sky-600" /><span><strong className="text-foreground">Cheetah:</strong> mostly Africa. Not a wild animal of Sri Lanka.</span></li>
								<li className="flex items-start gap-3"><PawPrint className="mt-0.5 h-5 w-5 text-emerald-600" /><span><strong className="text-foreground">Jaguar:</strong> Central and South America. Not found in Sri Lanka.</span></li>
								<li className="flex items-start gap-3"><ShieldCheck className="mt-0.5 h-5 w-5 text-green-600" /><span><strong className="text-foreground">Simple Sri Lanka rule:</strong> if you see a big spotted cat here, identify it as a leopard, not a cheetah or jaguar.</span></li>
							</ul>
						</CardContent>
					</Card>
				</section>

				<section className="mb-12">
					<Card className="overflow-hidden border-amber-200">
						<div className="grid gap-0 lg:grid-cols-[1fr_1.1fr]">
							<div className="relative min-h-[280px]">
								<Image
									src="/Srilankanleopard.jpg"
									alt="Sri Lankan leopard in the wild"
									fill
									className="object-cover"
								/>
							</div>
							<CardContent className="p-8">
								<h2 className="text-3xl font-bold text-foreground">What About Sri Lanka?</h2>
								<p className="mt-4 text-muted-foreground">
									Sri Lanka is famous for the Sri Lankan leopard. You can look for it in places like Yala and Wilpattu. Cheetahs and jaguars do not live wild in Sri Lanka.
								</p>
								<p className="mt-4 text-muted-foreground">
									So for travelers, the most useful lesson is simple: learn the difference, but remember that the wild spotted cat of Sri Lanka is the leopard.
								</p>
								<div className="mt-6">
									<Link href="/articles/wild-safaries" className="inline-flex items-center gap-2 rounded-full bg-amber-600 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-amber-700">
										Read More About Wildlife Safaris
									</Link>
								</div>
							</CardContent>
						</div>
					</Card>
				</section>
			</div>
		</main>
	)
}
