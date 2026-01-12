"use client"
import Image from "next/image"
import {

  MapPin,
  Camera,
  AlertTriangle,
  CheckCircle,
  Star,
  Calendar,
  Users,
  Crown,
  History,
  Sun,
  Bird,
  Eye,
  Lightbulb,
  Car,
  ArrowRight,
  Clock
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ImageCarousel } from "@/components/ui/image-carousel"
import Link from "next/link"
import InsuranceBanner from "@/components/insurance-banner"
import { Button } from "@/components/ui/button"



export default function MinneriyaNationalParkGuide() {
  const elephantImages = [
    { src: "/Minneriya-Park.jpg", caption: "Elephant families bathing together", alt: "Elephant families enjoying water activities at Minneriya" },
    { src: "/Minneriyanationalpark.jpeg", caption: "Massive elephant gathering at Minneriya reservoir", alt: "Hundreds of elephants assembled at Minneriya Tank during The Gathering" },
    { src: "/Minneriya-Asian-Elephants.jpg", caption: "Baby elephants learning social skills", alt: "Young elephants playing and interacting at Minneriya" },
  ];
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/Minneriyanationalpark.jpeg"
          alt="Spectacular panorama of The Gathering - hundreds of elephants assembled at Minneriya reservoir during peak dry season"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Minneriya National Park</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">Witness The Gathering - Nature's Most Epic Elephant Congregation</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-yellow-600/80 text-white border-yellow-500">
              <MapPin className="w-4 h-4 mr-1" />
              Cultural Triangle - North Central Province
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-green-600/80 text-white border-green-500">
              <Users className="w-4 h-4 mr-1" />
              150-200 Elephant Gathering (up to 700)
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-blue-600/80 text-white border-blue-500">
              <History className="w-4 h-4 mr-1" />
              Ancient 3rd Century Reservoir
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Experience Minneriya: Earth's Greatest Wildlife Gathering</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Welcome to Minneriya National Park, the legendary stage for "The Gathering" - one of the most extraordinary wildlife spectacles on our planet! Each year from May to October, this 8,889-hectare sanctuary becomes the epicenter of the world's largest documented gathering of Asian elephants, with 150-200 individuals (and occasionally up to 700) congregating around the ancient Minneriya Tank in a breathtaking display of nature's rhythms.
            </p>
            <p className="text-lg mb-4">
              What makes Minneriya's elephant gathering truly unique is its sheer scale and predictability. Unlike random wildlife sightings elsewhere, this phenomenon occurs reliably every dry season when elephants from across the region migrate along ancient pathways to access the life-sustaining waters and fresh grasslands of the Minneriya reservoir. You'll witness complete elephant societies - protective matriarchs, massive tuskers, playful teenagers, and tiny calves - engaging in complex social behaviors that researchers study to understand elephant intelligence and culture.
            </p>
            <p className="text-lg mb-4">
              The heart of this spectacle is the magnificent 2,500-year-old Minneriya Tank, an engineering marvel constructed by King Mahasen around 276 AD during the Anuradhapura Kingdom. This massive ancient reservoir, covering nearly 3,000 hectares when full, was designed to irrigate thousands of hectares of paddy fields. Today, it serves a dual purpose - continuing its agricultural role while providing critical dry-season habitat that sustains Sri Lanka's wild elephant populations.
            </p>
            <p className="text-lg">
              Minneriya forms the centerpiece of a vital elephant corridor connecting Kaudulla and Wasgamuwa National Parks across 150+ kilometers. This connectivity allows elephants to move safely between protected areas following seasonal food and water availability, maintaining genetic diversity and healthy population dynamics. Your visit to Minneriya directly supports conservation efforts protecting these ancient migration routes that elephants have used for millennia!
            </p>
          </div>
        </section>
        {/* Quick Facts & How to Get There */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          {/* Quick Facts */}
          <section className="flex-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  Quick Minneriya National Park Facts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-500" />
                    <span>
                      <strong>Established:</strong> 1997 (National Park status)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-green-500" />
                    <span>
                      <strong>Area:</strong> 8,889 hectares (34.3 sq miles)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-purple-500" />
                    <span>
                      <strong>Peak Gathering:</strong> 150-200 elephants (up to 700 reported)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bird className="w-4 h-4 text-orange-500" />
                    <span>
                      <strong>Bird Species:</strong> 160 species recorded
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <History className="w-4 h-4 text-red-500" />
                    <span>
                      <strong>Ancient Tank:</strong> Built 276 AD by King Mahasen
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sun className="w-4 h-4 text-yellow-500" />
                    <span>
                      <strong>Best Season:</strong> May-October (Dry months)
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <InsuranceBanner />
          </section>
          {/* How to Reach Minneriya */}
          <section className="flex-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Car className="w-5 h-5 text-blue-500" />
                  How to Reach Minneriya
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-green-500" />
                      From Colombo
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground ml-6">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        182 km via Kurunegala-Dambulla Road (A6)
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        4-5 hours by private vehicle
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-blue-500" />
                      From Cultural Triangle Sites
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground ml-6">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        20 km from Habarana (25 minutes)
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        30 km from Sigiriya (40 minutes)
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        70 km from Polonnaruwa (1.5 hours)
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>

        {/* What Makes Minneriya Unique */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Why Minneriya is Unmissable</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-l-4 border-l-yellow-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Crown className="w-5 h-5 text-yellow-500" />
                  One of the World's Largest Elephant Gathering
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  150-200 elephants typically gather during peak season (up to 700 reported) - one of the largest assemblies of Asian elephants on Earth!
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <History className="w-5 h-5 text-blue-500" />
                  Ancient 1,750-Year-Old Tank
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  King Mahasen's 276 AD reservoir still sustains wildlife - ancient engineering excellence!
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <ArrowRight className="w-5 h-5 text-green-500" />
                  150km Elephant Corridor
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Links Kaudulla and Wasgamuwa parks - vital migration route for elephant population health.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-purple-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Eye className="w-5 h-5 text-purple-500" />
                  Exceptional Wildlife Viewing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Open terrain offers unmatched visibility of elephant families, behaviors, and social dynamics.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-orange-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <MapPin className="w-5 h-5 text-orange-500" />
                  Cultural Triangle Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Near Sigiriya (30km), Polonnaruwa (70km) - combine wildlife safaris with UNESCO heritage sites!
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Bird className="w-5 h-5 text-red-500" />
                  160 Bird Species
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Rare Painted Storks, Pelicans, and Black-necked Storks - birdwatcher's paradise!
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Did You Know Card 1 */}
        <Card className="mb-12 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 border-2 border-blue-200 dark:border-blue-800">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-500 rounded-full">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-3 text-blue-900 dark:text-blue-100">Did You Know? Why "The Gathering" Happens at Minneriya</h3>
                <p className="text-muted-foreground mb-3 leading-relaxed">
                  "The Gathering" isn't random - it's driven by elephants' extraordinary memory and intelligence! Elephants possess exceptional spatial memory passed down through generations. Matriarchs remember the exact location of Minneriya Tank and teach their young the migration routes elephants have used for thousands of years.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  During Sri Lanka's dry season (May-October), water sources across the region diminish drastically. However, the ancient Minneriya Tank's massive capacity and sophisticated design ensure water remains available even during severe droughts. Additionally, as water levels drop, nutrient-rich grasslands emerge on the exposed tank bed, providing fresh, protein-rich grazing that nursing mothers especially need. This combination of reliable water and high-quality food creates an irresistible magnet, drawing elephants from forests up to 50 km away to converge at Minneriya in spectacular numbers!
                </p>
              </div>
            </div>
          </CardContent>
        </Card>



        {/* Wildlife to See */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Wildlife You&apos;ll Encounter</h2>
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>1. Asian Elephants</CardTitle>
                <CardDescription>The stars of the show</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/Minneriya-Asian-Elephants.jpg"
                    alt="Asian elephant family with mother and baby at Minneriya reservoir"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Minneriya is home to one of the largest concentrations of Asian elephants in the world:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Observe complex family structures and social behavior
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Watch mothers teaching babies to swim and feed
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        See impressive tuskers and matriarchs leading herds
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Experience the famous mud baths and water play
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mb-6 p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border-l-4 border-amber-500">
                  <h4 className="font-semibold text-amber-800 dark:text-amber-200 mb-2 text-sm">About Sri Lankan Elephants</h4>
                  <p className="text-xs text-amber-700 dark:text-amber-300 mb-2">
                    Sri Lankan elephants (<em>Elephas maximus maximus</em>) are the largest of the Asian elephant subspecies, with males reaching up to 3.5 meters in height and weighing 5,500 kg. Unlike African elephants, only some males develop tusks, making them particularly distinctive.
                  </p>
                  <div className="space-y-1 text-xs text-amber-700 dark:text-amber-300">
                    <p>• <strong>Population:</strong> ~7,500 wild elephants (10% of world's Asian elephants)</p>
                    <p>• <strong>Lifespan:</strong> 60-70 years in the wild</p>
                    <p>• <strong>Gestation:</strong> 22 months - longest of any land animal!</p>
                    <p>• <strong>Memory:</strong> Exceptional spatial memory passed through generations</p>
                    <p>• <strong>Diet:</strong> Consume 150-200 kg of vegetation daily</p>
                    <p>• <strong>Conservation:</strong> Endangered species protected by Sri Lankan law</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* The Gathering Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-foreground">The Gathering: Earth's Greatest Elephant Spectacle</h2>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-6 h-6 text-yellow-600" />
                    The Magnificent Gathering Experience
                  </CardTitle>
                  <CardDescription>Witness 150-200 Elephants in Nature's Greatest Assembly (up to 700 reported)</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6 items-center">
                    <ImageCarousel images={elephantImages} />
                    <div>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        "The Gathering" at Minneriya represents one of Earth's most spectacular and accessible wildlife phenomena. Each year from May through October, as Sri Lanka's dry season intensifies and scattered water sources evaporate, elephants begin their ancient migration toward Minneriya Tank. By peak season (July-September), 150-200 Asian elephants (with reports of up to 700 during exceptional years) congregate simultaneously around this historic reservoir - one of the largest documented gatherings of Asian elephants anywhere on our planet!
                      </p>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        What elevates this experience beyond mere numbers is the unprecedented behavioral observation opportunities. The open reservoir terrain provides 360-degree visibility, allowing you to witness complete elephant societies functioning naturally. You'll observe matriarchal family units making collective decisions, adolescent males testing their strength through playful sparring, baby elephants taking their first swimming lessons under watchful mothers, and massive tuskers maintaining order through subtle displays of dominance.
                      </p>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-3 text-foreground">Extraordinary Behaviors Observed Daily:</h4>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                              <span><strong>Family reunions:</strong> Emotional greetings with trumpeting, touching, and intertwining trunks between separated family groups</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                              <span><strong>Bathing rituals:</strong> Elephants spending hours in water, spraying, wallowing, and cooling their massive bodies</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                              <span><strong>Feeding coordination:</strong> Herds systematically grazing fresh grasslands, consuming 150-200 kg of vegetation daily</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                              <span><strong>Baby elephant training:</strong> Calves learning essential survival skills - swimming, dust bathing, using trunks effectively</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                              <span><strong>Complex communication:</strong> Rumbling infrasound (below human hearing), trunk gestures, ear positions conveying information</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                              <span><strong>Social hierarchies:</strong> Matriarchs leading decisions, allomothering (aunts helping raise calves), respect for elders</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            <Card>
              <CardHeader>
                <CardTitle>2. Incredible Birdlife</CardTitle>
                <CardDescription>Over 160 species including rare migrants</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Minneriya is a birdwatcher&apos;s paradise with resident and migratory species:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Painted storks and spot-billed pelicans
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Rare black-necked storks and lesser adjutants
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Colorful bee-eaters and kingfishers
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Majestic fish eagles and serpent eagles
                      </li>
                    </ul>
                  </div>
                  <Image
                    src="/placeholder.svg?height=300&width=400&text=Birds+at+Minneriya"
                    alt="Colorful birds including painted storks and kingfishers at Minneriya reservoir"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. Other Wildlife</CardTitle>
                <CardDescription>Diverse ecosystem supporting many species</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/placeholder.svg?height=300&width=400&text=Wildlife+Diversity"
                    alt="Various wildlife including sambar deer and water buffalo at Minneriya"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Beyond elephants, Minneriya hosts a rich variety of wildlife:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Sambar deer and spotted deer
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Wild boar and water buffalo
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Sloth bears (rare sightings)
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Leopards and fishing cats
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Safari Tips */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Essential Safari Tips</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-green-200 bg-green-50/50">
              <CardHeader>
                <CardTitle className="text-green-700 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  DOs - For the Best Safari Experience
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Visit during dry season:</strong> June-September for best elephant sightings
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Go in late afternoon:</strong> 3-6 PM is prime time for elephant activity
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Bring binoculars:</strong> Essential for birdwatching and distant wildlife
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Hire experienced guide:</strong> Local knowledge enhances the experience
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Stay hydrated:</strong> Bring plenty of water for the safari
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-red-50/50">
              <CardHeader>
                <CardTitle className="text-red-700 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  DON&apos;Ts - Safety and Conservation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Don&apos;t get too close:</strong> Maintain safe distance from elephants
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Don&apos;t make loud noises:</strong> Respect wildlife and other visitors
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Don&apos;t feed animals:</strong> It&apos;s dangerous and illegal
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Don&apos;t litter:</strong> Keep the park pristine for wildlife
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Don&apos;t visit during monsoon:</strong> October-January has fewer animals
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Best Time to Visit */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">When to Visit Minneriya</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-green-200 bg-green-50/50">
              <CardHeader>
                <CardTitle className="text-green-700">Peak Season</CardTitle>
                <CardDescription>June to September</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-green-700">
                  <li>• The famous elephant gathering</li>
                  <li>• Dry weather, clear skies</li>
                  <li>• Best wildlife photography</li>
                  <li>• Higher park fees and crowds</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-yellow-200 bg-yellow-50/50">
              <CardHeader>
                <CardTitle className="text-yellow-700">Shoulder Season</CardTitle>
                <CardDescription>April-May, October</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-yellow-700">
                  <li>• Moderate elephant numbers</li>
                  <li>• Good birdwatching opportunities</li>
                  <li>• Lower accommodation prices</li>
                  <li>• Occasional rain showers</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-blue-200 bg-blue-50/50">
              <CardHeader>
                <CardTitle className="text-blue-700">Off Season</CardTitle>
                <CardDescription>November to March</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-blue-700">
                  <li>• Fewer elephants (dispersed)</li>
                  <li>• Lush green landscapes</li>
                  <li>• Migratory bird arrivals</li>
                  <li>• Lowest visitor numbers</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Practical Information */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Practical Information</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Park Entry & Timing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <strong>Entry Fees:</strong>
                  <ul className="mt-1 text-sm text-muted-foreground">
                    <li>• Adults: $25 USD</li>
                    <li>• Children (6-12): $12.50 USD</li>
                    <li>• Vehicle charges apply</li>
                  </ul>
                </div>
                <div>
                  <strong>Opening Hours:</strong>
                  <p className="text-sm text-muted-foreground">6:00 AM - 6:00 PM daily</p>
                </div>
                <div>
                  <strong>Safari Duration:</strong>
                  <p className="text-sm text-muted-foreground">3-4 hours (half day safari)</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Getting There</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <strong>From Colombo:</strong>
                  <p className="text-sm text-muted-foreground">4-5 hours by car via Habarana</p>
                </div>
                <div>
                  <strong>From Sigiriya:</strong>
                  <p className="text-sm text-muted-foreground">45 minutes drive</p>
                </div>
                <div>
                  <strong>Nearest Town:</strong>
                  <p className="text-sm text-muted-foreground">Habarana (20 minutes)</p>
                </div>
                <div>
                  <strong>Accommodation:</strong>
                  <p className="text-sm text-muted-foreground">Stay in Habarana or Sigiriya area</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Photography Tips */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Camera className="w-5 h-5" />
                Wildlife Photography Tips
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Best Shots to Capture:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Elephant families at the water&apos;s edge</li>
                    <li>• Baby elephants playing and learning</li>
                    <li>• Dramatic sunset silhouettes</li>
                    <li>• Bird action shots at the reservoir</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Equipment & Settings:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Telephoto lens (300mm+) essential</li>
                    <li>• Fast shutter speed for action shots</li>
                    <li>• Bring extra batteries and memory cards</li>
                    <li>• Dust protection for equipment</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
        {/* Nearby Places to Visit */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Nearby Places to Visit</h2>
          <p className="text-lg text-muted-foreground mb-8 text-center max-w-3xl mx-auto">
            Extend your Minneriya adventure with these incredible destinations within easy reach
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Pattipola */}
            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/Sigiriya.jpeg"
                  alt="Sigiriya Rock Fortress towering over lush greenery"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                  2 hours
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Sigiriya </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Known for its ancient rock fortress and stunning views, Sigiriya is a must-visit destination near Minneriya National Park.
                </p>
                <div className="flex items-center text-xs text-blue-600 mb-2">
                  <MapPin className="w-3 h-3 mr-1" />
                  18 km from Minneriya National Park
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/sigiriya-rock-fortress" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/Pidurangala.jpeg"
                  alt="Pidurangala Rock near Minneriya National Park"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                  2 hours
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Pidurangala</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Pidurangala Rock offers panoramic views and a serene atmosphere, making it a great spot for nature lovers near Minneriya National Park.
                </p>
                <div className="flex items-center text-xs text-blue-600 mb-2">
                  <MapPin className="w-3 h-3 mr-1" />
                  18 km from Minneriya National Park
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/pidurangala-rock" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/Nine-arch-ella.jpg"
                  alt="Nine Arch Bridge in Ella with train passing through lush green tea plantations"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                  1 hours 50 mins
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Dambulla Cave Temple</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Famous for its ancient cave temples adorned with Buddhist mural paintings and statues.
                </p>
                <div className="flex items-center text-xs text-blue-600 mb-2">
                  <MapPin className="w-3 h-3 mr-1" />
                  56 km from Minneriya National Park
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/dambulla-cave-temple" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>




          </div>

          {/* Day Trip Suggestions */}
          <div className="mt-8 bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-center">Suggested Day Trip Combinations</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Tea Country Adventure</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Nuwara Eliya → Ambewela Farm → Haputhale (Lipton&apos;s Seat) → Return
                </p>
                <div className="flex items-center text-xs text-green-600">
                  <Clock className="w-3 h-3 mr-1" />
                  Full day trip (8-10 hours)
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Hill Country Explorer</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Nuwara Eliya → Ella (Nine Arch Bridge) → Bandarawela → Return
                </p>
                <div className="flex items-center text-xs text-blue-600">
                  <Clock className="w-3 h-3 mr-1" />
                  Full day trip (10-12 hours)
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final Tips */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800">Your Minneriya Safari Adventure</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Minneriya National Park offers one of the world&apos;s most spectacular wildlife experiences. The sight
                of hundreds of elephants gathering together is something you&apos;ll never forget - a true testament to
                the incredible biodiversity of Sri Lanka.
              </p>
              <p className="text-muted-foreground mb-4">
                Remember, you&apos;re witnessing a natural phenomenon that has been occurring for thousands of years.
                Respect the wildlife, follow park rules, and prepare to be amazed by nature&apos;s greatest gathering.
              </p>
              <p className="text-muted-foreground font-medium">
                Get ready for the wildlife experience of a lifetime! 🐘🌿
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
