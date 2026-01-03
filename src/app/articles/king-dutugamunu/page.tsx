import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { MapPin, Star, Calendar, Users } from "lucide-react";
import React from "react";

export default function KingDutugemunuArticle() {
	return (
		<main className="min-h-screen bg-background">
			{/* Hero Section */}
			<section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
				<Image
					src="/Anuradhapura.jpg"
					alt="Ancient city of Anuradhapura"
					fill
					className="object-cover"
					priority
				/>
				<div className="absolute inset-0 bg-black/40" />
				<div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
					<h1 className="text-4xl md:text-5xl font-bold mb-4">King Dutugemunu</h1>
					<p className="text-xl md:text-2xl mb-6 font-light">The Legendary Unifier of Sri Lanka</p>
					<div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
						<Badge variant="secondary" className="bg-white/20 text-white border-white/30">
							<MapPin className="w-4 h-4 mr-1" />
							Ruhuna & Anuradhapura
						</Badge>
						<Badge variant="secondary" className="bg-white/20 text-white border-white/30">
							<Star className="w-4 h-4 mr-1" />
							National Hero
						</Badge>
						<Badge variant="secondary" className="bg-white/20 text-white border-white/30">
							<Calendar className="w-4 h-4 mr-1" />
							2nd Century BC
						</Badge>
					</div>
				</div>
			</section>

			<div className="max-w-5xl mx-auto px-4 py-12">
				{/* Introduction */}
				<section className="mb-12">
					<h2 className="text-3xl font-bold mb-6 text-foreground">Legacy of a King</h2>
					<div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
						<p className="text-lg mb-4">
							King Dutugemunu is one of the most celebrated monarchs in Sri Lankan history, remembered for uniting the island and reviving Buddhism during a time of foreign rule. His story is woven into the nation’s identity, inspiring generations with his courage, vision, and devotion.
						</p>
					</div>
				</section>

				{/* Quick Facts */}
				<div className="flex flex-col md:flex-row gap-8 mb-12">
					<section className="flex-1">
						<Card>
							<CardHeader>
								<CardTitle className="flex items-center gap-2">
									<Star className="w-5 h-5 text-yellow-500" />
									Essential Dutugemunu Facts
								</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="grid md:grid-cols-2 gap-4">
									<div className="space-y-3">
										<div className="flex items-center gap-2">
											<Calendar className="w-4 h-4 text-blue-500" />
											<span>
												<strong>Born:</strong> 2nd Century BC
											</span>
										</div>
										<div className="flex items-center gap-2">
											<Users className="w-4 h-4 text-green-500" />
											<span>
												<strong>Parents:</strong> King Kavantissa & Queen Viharamahadevi
											</span>
										</div>
										<div className="flex items-center gap-2">
											<Star className="w-4 h-4 text-purple-500" />
											<span>
												<strong>Known for:</strong> Unifying Sri Lanka, defeating King Elara
											</span>
										</div>
									</div>
									<div className="space-y-3">
										<div className="flex items-center gap-2">
											<MapPin className="w-4 h-4 text-red-500" />
											<span>
												<strong>Region:</strong> Ruhuna & Anuradhapura
											</span>
										</div>
										<div className="flex items-center gap-2">
											<Star className="w-4 h-4 text-yellow-500" />
											<span>
												<strong>Religious Revival:</strong> Patron of Buddhism
											</span>
										</div>
									</div>
								</div>
							</CardContent>
						</Card>
					</section>
				</div>

				{/* Life Story Cards */}
				<div className="space-y-10">
					{/* Childhood */}
					<Card>
						<CardHeader>
							<CardTitle>Early Life and Childhood</CardTitle>
							<CardDescription>Formative years in Ruhuna</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="grid md:grid-cols-2 gap-6 items-center">
								<Image
									src="/Abhayagiriya.jpeg"
									alt="Abhayagiriya Stupa, Anuradhapura"
									width={400}
									height={300}
									className="rounded-lg"
								/>
								<div>
									<p className="text-muted-foreground mb-4">
										Dutugemunu was born in the ancient kingdom of Ruhuna, in southern Sri Lanka, as the eldest son of King Kavantissa and Queen Viharamahadevi. From a young age, he was recognized for his intelligence, courage, and deep sense of duty. His mother, a revered figure in Sri Lankan history, inspired him with stories of the island’s heritage and the importance of unity and faith.
									</p>
								</div>
							</div>
						</CardContent>
					</Card>

					{/* Ambition */}
					<Card>
						<CardHeader>
							<CardTitle>Ambition and Preparation</CardTitle>
							<CardDescription>Training for a united nation</CardDescription>
						</CardHeader>
						<CardContent>
							<p className="text-muted-foreground mb-4">
								As a prince, Dutugemunu was restless and ambitious. He was deeply troubled by the fact that the sacred city of Anuradhapura was under the control of King Elara, a South Indian ruler. Dutugemunu’s early years were spent training in martial arts, learning statecraft, and studying Buddhist teachings, all in preparation for the great task of uniting the island under one rule.
							</p>
						</CardContent>
					</Card>

					{/* Path to Throne */}
					<Card>
						<CardHeader>
							<CardTitle>Path to the Throne</CardTitle>
							<CardDescription>From prince to king</CardDescription>
						</CardHeader>
						<CardContent>
							<p className="text-muted-foreground mb-4">
								After a disagreement with his father about launching a campaign against Elara, Dutugemunu left the palace, taking only a clay water pot as a symbol of his resolve. When King Kavantissa passed away, Dutugemunu became the ruler of Ruhuna and began gathering support from southern chieftains, determined to restore the island’s sovereignty.
							</p>
						</CardContent>
					</Card>

					{/* Campaign Against Elara */}
					<Card>
						<CardHeader>
							<CardTitle>The Campaign Against Elara</CardTitle>
							<CardDescription>Legendary battles for unity</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="grid md:grid-cols-2 gap-6 items-center">
								<div>
									<p className="text-muted-foreground mb-4">
										Dutugemunu’s march north is legendary. With the help of his ten giant warriors, he led a series of battles against Elara’s forces. The final confrontation was a dramatic duel on elephant-back between Dutugemunu and Elara. Dutugemunu emerged victorious, but he honored Elara’s bravery by building a monument at his tomb, showing respect for his adversary.
									</p>
								</div>
								<Image
									src="/Anuradhapura.jpg"
									alt="Ruins of Anuradhapura, ancient capital"
									width={400}
									height={300}
									className="rounded-lg"
								/>
							</div>
						</CardContent>
					</Card>

					{/* Reign and Achievements */}
					<Card>
						<CardHeader>
							<CardTitle>Reign and Achievements</CardTitle>
							<CardDescription>Golden age of unity and faith</CardDescription>
						</CardHeader>
						<CardContent>
							<p className="text-muted-foreground mb-4">
								As king, Dutugemunu united Sri Lanka and ushered in a period of peace and prosperity. He was a great patron of Buddhism, building temples, monasteries, and the famous Ruwanwelisaya stupa. His reign is remembered for its focus on religious revival, infrastructure, and the well-being of his people.
							</p>
						</CardContent>
					</Card>

					{/* Final Days and Legacy */}
					<Card>
						<CardHeader>
							<CardTitle>Final Days and Legacy</CardTitle>
							<CardDescription>The king’s last wish and enduring memory</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="grid md:grid-cols-2 gap-6 items-center">
								<div>
									<p className="text-muted-foreground mb-4">
										In his later years, Dutugemunu fell seriously ill. The Ruwanwelisaya, his greatest architectural project, was still unfinished. To comfort him, his ministers covered the stupa with white cloth and decorations, so the king could see it as if it were complete. Dutugemunu passed away soon after, content that his vision for the stupa and the country was fulfilled. The Ruwanwelisaya was later completed by his brother, King Saddhatissa.
									</p>
									<p className="text-muted-foreground mb-4">
										King Dutugemunu is remembered as a national hero, a unifier, and a devout Buddhist. His life and deeds continue to inspire Sri Lankans, and his legacy lives on in the monuments and stories that define the island’s history.
									</p>
								</div>
								<Image
									src="/Abhayagiriya.jpeg"
									alt="Stupa in Anuradhapura, symbolizing Buddhist revival"
									width={400}
									height={300}
									className="rounded-lg"
								/>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</main>
	);
}
