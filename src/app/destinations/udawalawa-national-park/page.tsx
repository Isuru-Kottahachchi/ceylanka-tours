"use client"

import Image from "next/image"
import { Clock, MapPin, CheckCircle, Star, Calendar, Users, TreePine, Binoculars, Camera, AlertTriangle, Crown, Globe, Leaf, Building, History, Sun, Wind, Droplets, Mountain, Bird, Eye, Target, Lightbulb, Car, ArrowRight, Heart, Shield } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ImageCarousel } from "@/components/ui/image-carousel"




export default function UdawalaweNationalParkGuide() {
  const elephantImages = [
    { src: "/Udawalawa-park.jpeg", caption: "Elephant herds grazing in Udawalawe grasslands", alt: "Large elephant families feeding across open plains of Udawalawe" },
    { src: "/placeholder.svg?height=400&width=600", caption: "Baby elephants staying close to mothers", alt: "Protective mothers with young calves in Udawalawe" },
    { src: "/placeholder.svg?height=400&width=600", caption: "Elephants bathing in reservoir", alt: "Elephants cooling off in Udawalawe reservoir waters" },
  ];


  const transitHomeImages = [
    { src: "/Elephant-Transit-Home.jpg", caption: "Baby elephants at feeding time", alt: "Orphaned elephants being bottle-fed at Transit Home" },
    { src: "/Elephant-Transit-Home1.jpg", caption: "Young elephants playing", alt: "Staff caring for rescued baby elephants" },
    { src: "/Elephant-Transit-Home2.jpg", caption: "", alt: "Rehabilitating elephants learning social skills" },
    { src: "/Elephant-Transit-Home3.jpg", caption: "", alt: "Elephants being released back into Udawalawe park" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/Udawalawa-park.jpeg"
          alt="Spectacular panoramic view of elephant herds roaming across vast grasslands of Udawalawe National Park with reservoir backdrop"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="hero-text-shadow text-4xl md:text-6xl font-extrabold mb-4 leading-[1.1] tracking-tight">Udawalawe National Park</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">Sri Lanka&apos;s Elephant Paradise - 600+ Giants Roam Free</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-yellow-600/80 text-white border-yellow-500">
              <MapPin className="w-4 h-4 mr-1" />
              Sabaragamuwa & Uva Provinces
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-green-600/80 text-white border-green-500">
              <Users className="w-4 h-4 mr-1" />
              600-700 Wild Elephants
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-blue-600/80 text-white border-blue-500">
              <Heart className="w-4 h-4 mr-1" />
              Famous Elephant Transit Home
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Discover Udawalawe</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Udawalawe National Park is one of the best places in Sri Lanka to see wild elephants. The park is often
              estimated to support around 500-700 wild Asian elephants, and many visitors report frequent sightings on
              safari drives. It covers 30,821 hectares (about 308 sq km) of mostly open habitat, which helps with
              wildlife viewing and photography.
            </p>
            <p className="text-lg mb-4">
              The park was created in 1972 after the Udawalawe Reservoir was built. The open landscape with grass 
              and scattered bushes is perfect for elephants. Unlike other parks with thick forests, Udawalawe has 
              wide open spaces, so you can easily watch elephant families, see how they interact, and enjoy 
              great photo opportunities.
            </p>
            <p className="text-lg mb-4">
              Udawalawe is also home to the famous Elephant Transit Home, which rescues and cares for orphaned baby 
              elephants before releasing them back into the wild. You can watch the feeding sessions and see these 
              adorable baby elephants up close, making your visit even more special.
            </p>
            <p className="text-lg">
              The park also has 184 bird species, 43 mammals, 33 reptiles including crocodiles, and many other 
              animals. The large Udawalawe Reservoir attracts wildlife all year round and creates beautiful views 
              with mountains in the background.
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
                  Quick Udawalawe National Park Facts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-500" />
                    <span>
                      <strong>Established:</strong> June 30, 1972
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-green-500" />
                    <span>
                      <strong>Area:</strong> 30,821 hectares (119 sq miles)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-purple-500" />
                    <span>
                      <strong>Elephant Population:</strong> Commonly cited as around 500-700
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4 text-orange-500" />
                    <span>
                      <strong>Sighting Success:</strong> Generally high on most safaris
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bird className="w-4 h-4 text-red-500" />
                    <span>
                      <strong>Bird Species:</strong> 184 recorded
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sun className="w-4 h-4 text-yellow-500" />
                    <span>
                      <strong>Best Season:</strong> Year-round; drier months often offer clearer visibility
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* How to Reach Udawalawe */}
          <section className="flex-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Car className="w-5 h-5 text-blue-500" />
                  How to Reach Udawalawe
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-xs text-muted-foreground">Distance and travel times below are approximate Google Maps driving estimates and can change with traffic.</p>
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-green-500" />
                      From Major Cities
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground ml-6">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        236 km from Colombo (Google Maps driving estimate: about 3 hr 35 min via E01)
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        101 km from Ella (Google Maps driving estimate: about 2 hr 13 min)
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        141 km from Nuwara Eliya (Google Maps driving estimate: about 4 hr 5 min)
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-blue-500" />
                      Nearby Locations
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground ml-6">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        Embilipitiya town (20 minutes - nearest services)
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        Tissamaharama (66 km - Google Maps driving estimate: about 1 hr 22 min)
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>

        {/* What Makes Udawalawe Unique */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">What Makes Udawalawe Nationally Exceptional</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-l-4 border-l-yellow-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Eye className="w-5 h-5 text-yellow-500" />
                  High-Probability Elephant Encounters
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Udawalawe is widely known for consistently strong elephant sightings. With a large resident population
                  and broad open terrain, visitors often observe multiple elephant family groups during a single safari.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Heart className="w-5 h-5 text-blue-500" />
                  Elephant Transit Home
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The Elephant Transit Home, established in 1995, is widely known for rehabilitating orphaned elephant calves and preparing suitable animals for release back into the wild.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Mountain className="w-5 h-5 text-green-500" />
                  Open Savanna-Like Terrain
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Unlike dense forest parks, Udawalawe features predominantly open grasslands and scrublands resembling African savannas. This unique landscape provides exceptional photographic opportunities and allows intimate observation of elephant family dynamics and natural behaviors.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-purple-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Droplets className="w-5 h-5 text-purple-500" />
                  Massive Udawalawe Reservoir
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The Udawalawe Reservoir, completed in 1969, provides a major permanent water source that attracts
                  wildlife year-round. This helps keep safari conditions productive in most months compared with more
                  seasonal parks.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-orange-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Target className="w-5 h-5 text-orange-500" />
                  Strategic South-Central Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Perfectly positioned between highland attractions (Ella, Nuwara Eliya) and southern beaches (Mirissa, Tangalle), Udawalawe fits seamlessly into diverse Sri Lankan itineraries. Easily combine wildlife safaris with cultural and coastal experiences.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Shield className="w-5 h-5 text-red-500" />
                  Active Conservation Zone
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Udawalawe serves as a critical buffer zone protecting elephants from human-wildlife conflict. The park&apos;s creation provided displaced wildlife sanctuary while supporting sustainable tourism that funds ongoing conservation and community development programs.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Did You Know Card 1 */}
        <Card className="mb-12 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/60 dark:to-cyan-900/60 border-2 border-blue-200 dark:border-blue-700">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-500 rounded-full">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-3 text-blue-900 dark:text-blue-100">Did You Know? Why Udawalawe Has So Many Elephants</h3>
                <p className="text-blue-900 dark:text-blue-100/90 mb-3 leading-relaxed">
                  Udawalawe wasn&apos;t always elephant paradise - its incredible elephant population is actually a conservation success story! When the Udawalawe Reservoir was constructed in 1969 to provide irrigation and hydropower, the flooding displaced numerous elephants from their traditional habitats. Recognizing this conservation crisis, Sri Lankan authorities established Udawalawe National Park in 1972 specifically to provide sanctuary for these displaced elephants and other wildlife.
                </p>
                <p className="text-blue-900 dark:text-blue-100/90 leading-relaxed">
                  The reservoir and surrounding protected habitat helped shape the modern landscape of Udawalawe. With permanent water, open habitat, and a well-known resident elephant population, Udawalawe is widely recognized as one of Sri Lanka&apos;s most reliable places to observe wild elephants. The park&apos;s history is often cited as an example of how development pressures and wildlife conservation can become closely linked in long-term land management.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Wildlife Highlights */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Wildlife Highlights at Udawalawe</h2>

          <div className="space-y-8">
            {/* Wild Elephants */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-6 h-6 text-yellow-600" />
                  Wild Elephant Paradise - 600+ Giants Roam Free
                </CardTitle>
                <CardDescription>Sri Lanka&apos;s Most Reliable Elephant Viewing Destination</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <ImageCarousel images={elephantImages} />
                  <div>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Udawalawe National Park shelters a large resident population of Asian elephants, often cited in
                      the 500-700 range. A key advantage is that many elephants are present year-round, not only during
                      a short seasonal window. Combined with open grassland and scrub habitat, this gives visitors a
                      strong chance of memorable close-range observations during safari drives.
                    </p>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      The predominant open terrain provides strong opportunities to observe elephant groups in a natural setting. Visitors may see matriarch-led family groups, adolescent sparring, mothers with calves, and a range of social behaviors. As always, sightings and viewing distance depend on conditions, animal movement, and responsible safari practice.
                    </p>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-3 text-foreground">Extraordinary Elephant Behaviors Observed:</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                            <span><strong>Family structures:</strong> Complete herds with matriarchs, sub-adults, teenagers, and nursing calves</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                            <span><strong>Bathing rituals:</strong> Elephants spending hours in reservoir shallows, spraying, rolling, mud-bathing for cooling and skin protection</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                            <span><strong>Feeding patterns:</strong> Systematic grassland grazing consuming 150-200 kg vegetation daily per individual</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                            <span><strong>Baby elephant development:</strong> Calves learning trunk control, social etiquette, swimming, and danger recognition</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                            <span><strong>Social interactions:</strong> Playful sparring, greeting ceremonies, allomothering (aunts helping raise calves)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                            <span><strong>Communication systems:</strong> Infrasound rumbling, trunk gestures, ear positioning, foot stamping warnings</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Elephant Transit Home */}
            <Card className="border-l-4 border-l-green-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="w-6 h-6 text-green-600" />
                  Elephant Transit Home - Conservation Success Story
                </CardTitle>
                <CardDescription>Baby Elephant Rehabilitation Center</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <ImageCarousel images={transitHomeImages} />
                  <div>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Near Udawalawe National Park lies the Elephant Transit Home (ETH), established in 1995 by the Department of Wildlife Conservation. This rehabilitation center cares for orphaned elephant calves found in the wild, often after maternal death, injury, or human-elephant conflict. It is widely noted for following a minimal-contact approach intended to prepare elephants for eventual life back in the wild.
                    </p>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Rehabilitation typically takes several years. During that period, calves receive veterinary care, milk feeding, and social contact with other young elephants while caretakers avoid unnecessary human bonding. Suitable elephants are later released back into the wild, and the facility is often cited as an important part of Sri Lanka&apos;s elephant conservation work.
                    </p>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-3 text-foreground">Visitor Experience at ETH:</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                            <span><strong>Public feeding viewings:</strong> Viewing times can change, so check locally or with current park information before visiting</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                            <span><strong>Observation protocols:</strong> Strict no-contact rules; visitors watch from safe distance to avoid habituating elephants</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                            <span><strong>Educational value:</strong> Informative displays explain rescue operations, veterinary care, and release procedures</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                            <span><strong>Conservation impact:</strong> Visitor fees help support park and conservation operations</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                            <span><strong>Combined visit:</strong> Many safari operators can combine an ETH stop with a Udawalawe safari</span>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg">
                        <p className="text-sm text-green-800 dark:text-green-200">
                          <strong>Important:</strong> ETH is NOT a tourist attraction where you can touch or feed elephants. It&apos;s a serious conservation facility. Respect the no-contact protocols - they&apos;re essential for successful wild reintroduction!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Other Wildlife */}
            <Card>
              <CardHeader>
                <CardTitle>Other Amazing Animals</CardTitle>
                <CardDescription>More wildlife to discover in the park</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="relative overflow-hidden rounded-lg border bg-muted">
                        <Image
                          src="/Wild-Water-Buffalo.jpg"
                          alt="Wild water buffalo in grassland habitat"
                          width={400}
                          height={260}
                          className="h-48 w-full object-cover"
                        />
                      </div>
                      <div className="relative overflow-hidden rounded-lg border bg-muted">
                        <Image
                          src="/Mugger-Crocodiles.jpg"
                          alt="Mugger crocodiles resting near the water"
                          width={400}
                          height={260}
                          className="h-48 w-full object-cover"
                        />
                      </div>
                      <div className="relative overflow-hidden rounded-lg border bg-muted">
                        <Image
                          src="/Painted-Stork.webp"
                          alt="Painted stork standing in wetland habitat"
                          width={400}
                          height={260}
                          className="h-48 w-full object-cover"
                        />
                      </div>
                      <div className="relative overflow-hidden rounded-lg border bg-muted">
                        <Image
                          src="/Sri-Lankan-Grey-hornbill.jpg"
                          alt="Sri Lanka grey hornbill perched on a branch"
                          width={400}
                          height={260}
                          className="h-48 w-full object-cover"
                        />
                      </div>
                      <div className="relative overflow-hidden rounded-lg border bg-muted">
                        <Image
                          src="/Leopard-in-Yala.jpg"
                          alt="Sri Lankan leopard representing elusive predators found in national parks"
                          width={400}
                          height={260}
                          className="h-48 w-full object-cover"
                        />
                      </div>
                      <div className="relative overflow-hidden rounded-lg border bg-muted">
                        <Image
                          src="/Sloth-Bear.jpg"
                          alt="Sloth bear representing rare predator sightings in the wild"
                          width={400}
                          height={260}
                          className="h-48 w-full object-cover"
                        />
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Representative wildlife collage: water buffalo, mugger crocodiles, waterbirds, endemic birds, leopards, and sloth bears.
                    </p>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      While elephants dominate the spotlight, Udawalawe shelters remarkable biodiversity across its varied ecosystems. The park&apos;s permanent water source attracts concentrations of water buffalo, sambar deer, spotted deer, and wild boar grazing the grasslands. The massive Udawalawe Reservoir hosts healthy populations of mugger crocodiles (freshwater crocodiles) often seen basking on banks or floating motionless in shallow waters, plus monitor lizards, freshwater turtles, and diverse fish species supporting the aquatic food web.
                    </p>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Udawalawe&apos;s birdlife is spectacular, with 184 recorded species making it a significant birding destination! The reservoir attracts vast flocks of waterbirds including painted storks, openbill storks, Asian spoonbills, herons, egrets, and cormorants that create impressive aerial displays during feeding frenzies. Raptors patrol the skies - watch for white-bellied sea eagles, crested serpent eagles, and changeable hawk-eagles hunting from thermals. The park also supports rare endemics like Sri Lanka junglefowl, yellow-fronted barbet, and Sri Lanka grey hornbill amid the scrubland vegetation.
                    </p>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-3 text-foreground">Notable Wildlife Encounters:</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                            <span><strong>Water buffalo:</strong> Large herds wallowing in reservoir mud, crucial ecosystem engineers</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                            <span><strong>Mugger crocodiles:</strong> Frequently sighted sunbathing on reservoir banks (up to 3 meters long)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                            <span><strong>Waterbird colonies:</strong> Thousands of painted storks, openbills, and spoonbills during migration peaks</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                            <span><strong>Raptors:</strong> White-bellied sea eagles, crested serpent eagles hunting along water margins</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                            <span><strong>Endemic birds:</strong> Sri Lanka junglefowl, yellow-fronted barbet, Sri Lanka grey hornbill in scrublands</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                            <span><strong>Elusive predators:</strong> Leopards and sloth bears occasionally spotted (more common in remote zones)</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Did You Know Card #2 */}
        <Card className="mb-12 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/60 dark:to-pink-900/60 border-l-4 border-l-purple-500 dark:border-l-purple-400">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-full flex-shrink-0">
                <Lightbulb className="w-6 h-6 text-purple-600 dark:text-purple-300" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-purple-900 dark:text-purple-100">Did You Know? The Elephant Transit Home&apos;s Rehabilitation Process</h3>
                <p className="text-purple-900 dark:text-purple-100/90 mb-3 leading-relaxed">
                  The Elephant Transit Home follows a scientifically designed rehabilitation protocol that maximizes wild reintroduction success. When orphaned calves arrive (typically under 6 months old), they&apos;re immediately paired with similar-aged orphans to form surrogate family units. This peer bonding is critical - elephants are intensely social animals requiring constant companionship for psychological health. The facility deliberately limits human interaction to feeding times and medical care, preventing the dangerous human-dependency that plagues many elephant orphanages globally.
                </p>
                <p className="text-purple-900 dark:text-purple-100/90 mb-3 leading-relaxed">
                  Diet replicates wild nutrition precisely: specialized milk formulas mimicking elephant mother&apos;s milk gradually transition to vegetation including bamboo, various grasses, tree bark, and fruits foraged from Udawalawe&apos;s own vegetation. Crucially, caretakers never bottle-feed elephants directly - bottles are attached to fences requiring elephants to feed themselves, maintaining natural independence. As elephants mature (typically 4-5 years), enclosure gates remain increasingly open allowing voluntary exploration of adjacent forests, essentially "soft-releasing" elephants who gradually integrate with wild herds visiting nearby water sources.
                </p>
                <p className="text-purple-900 dark:text-purple-100/90 leading-relaxed">
                  Monitoring and field reports indicate many released elephants successfully integrate into wild herds
                  and later breed in the wild. Several ETH graduates have been documented years later as established
                  adults, and the ETH model is frequently discussed in wider elephant rehabilitation and conservation
                  circles.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Planning Your Safari */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Planning Your Udawalawe Safari</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Timings Card */}
            <Card className="border-l-4 border-l-orange-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Clock className="w-5 h-5 text-orange-500" />
                  Park Timings & Best Slots
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-sm text-foreground">Operating Hours:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Sun className="w-4 h-4 mt-0.5 flex-shrink-0 text-yellow-500" />
                      <span><strong>Park Opens:</strong> Early morning; confirm the current opening time before travel</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Clock className="w-4 h-4 mt-0.5 flex-shrink-0 text-orange-500" />
                      <span><strong>Last Entry:</strong> Entry cut-off policies can change, so confirm locally</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Calendar className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-500" />
                      <span><strong>Open:</strong> 365 days/year</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-sm text-foreground">Optimal Safari Times:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span><strong>Early morning (6:00-9:00 AM):</strong> Elephants most active, cooler temperatures, golden hour photography</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span><strong>Late afternoon (3:00-6:00 PM):</strong> Second feeding period, stunning sunset light</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                      <span><strong>Midday (11:00 AM-2:00 PM):</strong> Less activity, extreme heat, animals seek shade</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-sm text-foreground">Safari Duration Options:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Half-day safari: 3-4 hours</li>
                    <li>• Full-day safari: 6-8 hours</li>
                    <li>• Combined ETH + safari: 5-6 hours</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* What to Bring Card */}
            <Card className="border-l-4 border-l-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Camera className="w-5 h-5 text-blue-500" />
                  Essential Safari Gear
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-sm text-foreground">Photography Equipment:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span><strong>Telephoto lens:</strong> 200-400mm recommended for elephant portraits</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span><strong>Binoculars:</strong> 8x42 or 10x42 for distant wildlife spotting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span><strong>Extra batteries:</strong> Heat drains power quickly</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-sm text-foreground">Clothing & Protection:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span><strong>Neutral colors:</strong> Khaki, olive, beige (avoid bright colors)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span><strong>Sun protection:</strong> Wide-brimmed hat, high SPF sunscreen, sunglasses</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span><strong>Light layers:</strong> Cool mornings, hot middays</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-sm text-foreground">Comfort Items:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Water bottle (2-3 liters)</li>
                    <li>• Light snacks</li>
                    <li>• Wet wipes/hand sanitizer</li>
                    <li>• Small backpack/camera bag</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Pro Tips Card */}
            <Card className="border-l-4 border-l-green-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Target className="w-5 h-5 text-green-500" />
                  Expert Safari Tips
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-sm text-foreground">Maximizing Wildlife Encounters:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Lightbulb className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                      <span><strong>Reserve track positioning:</strong> Morning safaris get first elephant sightings before crowds</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Lightbulb className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                      <span><strong>Full-day advantage:</strong> More time in the park can improve coverage and reduce the pressure of rushed sightings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Lightbulb className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                      <span><strong>Reservoir circuit:</strong> Most reliable elephant route - prioritize this track</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-sm text-foreground">Photography Guidance:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Camera className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                      <span><strong>Open terrain advantage:</strong> Unlike forest parks, Udawalawe allows clear wide-angle group shots</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Camera className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                      <span><strong>Dust consideration:</strong> Protect gear when vehicles pass - quick lens changes risky</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-sm text-foreground">Safety & Etiquette:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Shield className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                      <span><strong>Stay in vehicle:</strong> NEVER exit safari jeep within park boundaries</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Shield className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                      <span><strong>Respect distance:</strong> Let elephants approach naturally, never chase wildlife</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Shield className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                      <span><strong>Silence when close:</strong> Minimize noise/sudden movements near animals</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Seasonal Guide */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">When to Visit - Seasonal Safari Guide</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Dry Season */}
            <Card className="border-l-4 border-l-yellow-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sun className="w-6 h-6 text-yellow-600" />
                  Dry Season (May - September)
                </CardTitle>
                <CardDescription>Peak Safari Months - Highest Wildlife Concentrations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    The dry season represents Udawalawe&apos;s peak safari period, though unlike seasonal parks, Udawalawe remains excellent year-round thanks to its permanent reservoir. During these months, minimal rainfall maintains low vegetation, providing unobstructed sightlines across grasslands. Elephant herds often concentrate around reservoir margins, which can improve sighting consistency.
                  </p>
                  <div>
                    <h4 className="font-semibold mb-2 text-sm text-foreground">Dry Season Advantages:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span><strong>Maximum visibility:</strong> Low grass allows clear views of even small wildlife</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span><strong>Predictable patterns:</strong> Elephants follow established routes to water daily</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span><strong>Ideal photography:</strong> Clear skies, dramatic lighting, minimal dust</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                        <span><strong>Considerations:</strong> Higher visitor numbers (book accommodations early), midday heat intense (30-35°C)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Inter-Monsoon */}
            <Card className="border-l-4 border-l-green-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Droplets className="w-6 h-6 text-green-600" />
                  Inter-Monsoon (October - November & March - April)
                </CardTitle>
                <CardDescription>Transition Periods - Excellent Wildlife + Lower Crowds</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Inter-monsoon months offer strong wildlife viewing with the added advantage of fewer safari
                    vehicles and often lower accommodation prices. Occasional afternoon showers refresh vegetation and
                    cool temperatures, creating particularly active wildlife mornings. Elephants remain visible,
                    waterbird populations increase as migratory species arrive, and the landscape gains vibrant green
                    tones absent during dry months.
                  </p>
                  <div>
                    <h4 className="font-semibold mb-2 text-sm text-foreground">Inter-Monsoon Benefits:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span><strong>Optimal balance:</strong> Excellent visibility with lusher scenery</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span><strong>Migratory birds:</strong> October-November brings Eurasian migrants (184 species recorded)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span><strong>Fewer visitors:</strong> More exclusive wildlife encounters, peaceful safari atmosphere</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span><strong>Comfortable temperatures:</strong> Morning/evening safaris particularly pleasant (22-28°C)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Wet Season */}
            <Card className="border-l-4 border-l-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wind className="w-6 h-6 text-blue-600" />
                  Northeast Monsoon (December - February)
                </CardTitle>
                <CardDescription>Green Season - Dramatic Landscapes & Budget-Friendly</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Udawalawe&apos;s wet season usually brings moderate rainfall, often as afternoon showers rather than
                    continuous all-day rain. The landscape turns greener, which many photographers enjoy. Importantly,
                    elephants remain resident through the year, and sightings generally remain strong during this
                    period.
                  </p>
                  <div>
                    <h4 className="font-semibold mb-2 text-sm text-foreground">Wet Season Highlights:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span><strong>Resident elephants:</strong> Unlike other parks, elephants stay (don&apos;t migrate seasonally)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span><strong>Dramatic scenery:</strong> Lush green grasslands, thunderstorm backdrops, rainbow opportunities</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span><strong>Budget advantages:</strong> Accommodation rates are often lower and safari traffic may be lighter</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                        <span><strong>Note:</strong> Taller grass can reduce visibility slightly, and afternoon showers may affect conditions</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Baby Elephant Season */}
            <Card className="border-l-4 border-l-pink-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="w-6 h-6 text-pink-600" />
                  Baby Elephant Season (Year-Round with Peaks)
                </CardTitle>
                <CardDescription>Special Timing for Adorable Calf Sightings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Udawalawe&apos;s elephants breed year-round, so calves can be seen in many months of the year. The exact timing and concentration of young calves are not predictable for visitors, but families with calves are a regular highlight of safaris.
                  </p>
                  <div>
                    <h4 className="font-semibold mb-2 text-sm text-foreground">Best Baby Elephant Experiences:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span><strong>Calf sightings:</strong> Possible year-round, depending on herd movement and luck</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span><strong>Behavior highlights:</strong> Calves learning to swim, practicing trunk control, nursing, playful sparring</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span><strong>ETH combination:</strong> See wild babies in park, rehabilitated orphans at Transit Home for complete experience</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Did You Know Card #3 */}
        <Card className="mb-12 bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/60 dark:to-cyan-900/60 border-l-4 border-l-teal-500 dark:border-l-teal-400">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="bg-teal-100 dark:bg-teal-900 p-3 rounded-full flex-shrink-0">
                <Lightbulb className="w-6 h-6 text-teal-600 dark:text-teal-300" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-teal-900 dark:text-teal-100">Did You Know? Udawalawe Reservoir&apos;s Engineering Marvel & Elephant Adaptation</h3>
                <p className="text-teal-900 dark:text-teal-100/90 mb-3 leading-relaxed">
                  The Udawalawe Reservoir is one of Sri Lanka&apos;s major post-independence water management projects.
                  Constructed in the late 1960s on the Walawe River, it was developed primarily for irrigation and also
                  supports power generation. Its creation reshaped the surrounding landscape and became a defining part
                  of the region&apos;s ecology.
                </p>
                <p className="text-teal-900 dark:text-teal-100/90 mb-3 leading-relaxed">
                  The creation of the reservoir significantly changed the surrounding landscape. The establishment of the national park in 1972 helped provide protected habitat for displaced wildlife, and the reservoir remains one of the features that supports year-round wildlife viewing in the area.
                </p>
                <p className="text-teal-900 dark:text-teal-100/90 leading-relaxed">
                  Today&apos;s elephants demonstrate extraordinary landscape learning. Family groups pass on route knowledge,
                  safe water access points, and seasonal movement patterns across generations. The reservoir&apos;s
                  permanent water availability is one reason Udawalawe remains a reliable place for elephant viewing.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Conservation & Responsible Tourism */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Conservation & Responsible Safari Practices</h2>
          <Card className="border-l-4 border-l-green-600">
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2 text-foreground">
                    <Shield className="w-5 h-5 text-green-600" />
                    Udawalawe&apos;s Conservation Significance
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Udawalawe National Park plays a critical role in Sri Lankan elephant conservation, serving as one of the country&apos;s important protected elephant habitats. The park is often discussed as an example of how reservoir development, protected areas, tourism, and wildlife management intersect in practice.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    The Elephant Transit Home further amplifies conservation impact by addressing human-elephant conflict through orphan rehabilitation rather than lethal controls. Your safari visit directly supports these conservation efforts through park entrance fees, employment for local communities, and raising global awareness about Asian elephant conservation challenges.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2 text-foreground">
                    <Heart className="w-5 h-5 text-red-600" />
                    Ethical Safari Guidelines - Please Follow Strictly
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2 text-sm text-foreground">Wildlife Safety Protocols:</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <span><strong>Never exit vehicle:</strong> Remain inside safari jeep at all times within park boundaries (elephants can charge unexpectedly)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <span><strong>Maintain distance:</strong> Keep a safe distance from elephants and follow driver and park instructions</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <span><strong>Respect warning signs:</strong> Ear flapping, head shaking, mock charges = back away immediately</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <span><strong>Silence near wildlife:</strong> Loud noises/music stress animals and disrupt natural behaviors</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-sm text-foreground">Environmental Responsibility:</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <span><strong>Zero plastic policy:</strong> Carry out all waste (plastic bottles, wrappers, cigarette butts)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <span><strong>No feeding wildlife:</strong> Human food harms elephant health and creates dangerous habituation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <span><strong>Stay on designated tracks:</strong> Off-road driving damages vegetation and disturbs nesting birds</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <span><strong>Support ethical operators:</strong> Choose safari companies following Department of Wildlife Conservation guidelines</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
                  <p className="text-sm text-blue-800 dark:text-blue-200 flex items-start gap-2">
                    <Lightbulb className="w-4 h-4 mt-1 flex-shrink-0" />
                    <span>
                      <strong>Remember:</strong> You&apos;re privileged guests in the elephants&apos; home. Respectful wildlife observation ensures Udawalawe&apos;s conservation success continues for future generations while protecting both visitors and wildlife. Report any unethical driver behavior (harassing wildlife, off-roading) to park authorities immediately.
                    </span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Conclusion */}
        <Card className="mb-12 bg-gradient-to-br from-green-50 via-yellow-50 to-orange-50 dark:from-emerald-900/60 dark:via-amber-900/50 dark:to-orange-900/50 border-l-4 border-l-green-600 dark:border-l-green-400">
          <CardContent className="pt-6">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-green-950 dark:text-emerald-50 flex items-center gap-2">
                <Heart className="w-6 h-6 text-red-500" />
                Your Udawalawe Elephant Safari Awaits - Conservation Meets Adventure
              </h2>
              <p className="text-emerald-900 dark:text-emerald-100/90 leading-relaxed mb-4">
                Udawalawe National Park is one of Sri Lanka&apos;s top elephant-watching destinations, offering frequent
                close encounters with wild Asian elephants in natural habitat. With a resident population commonly
                estimated in the 500-700 range,
                open savanna-like terrain, and the nearby Elephant Transit Home, Udawalawe provides a standout
                wildlife experience in South Asia. This is not simply wildlife viewing - it is a chance to observe
                elephant societies: matriarch-led families, mothers with calves, playful adolescents, and rich social
                behavior that highlights elephant intelligence.
              </p>
              <p className="text-emerald-900 dark:text-emerald-100/90 leading-relaxed mb-4">
                What distinguishes Udawalawe from other wildlife destinations is its combination of accessibility, open terrain, and conservation relevance. The park&apos;s permanent water source helps support year-round wildlife viewing, and its relatively open habitat often allows clear photography and observation compared with denser forest parks. Visitors commonly hope to see elephant family groups, calves, reservoir activity, and a range of other wildlife during a safari.
              </p>
              <p className="text-emerald-900 dark:text-emerald-100/90 leading-relaxed mb-4">
                Beyond wild elephant encounters, the Elephant Transit Home adds a meaningful conservation dimension to
                your visit. Watching orphaned calves receive rehabilitation before eventual release into the wild
                connects safari travel with real conservation outcomes. Your visit can also support local employment,
                park revenue, and wider public awareness around elephant conservation.
              </p>
              <p className="text-emerald-900 dark:text-emerald-100/90 leading-relaxed mb-6">
                Whether you are a photographer, a family traveler, or a conservation-minded visitor, Udawalawe offers
                memorable wildlife experiences. Seeing an elephant mother guiding her calf, or a large family group
                gathering near sunset, often becomes a lasting highlight of a Sri Lanka journey.
              </p>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border-2 border-green-500">
                <p className="text-green-900 dark:text-emerald-100 font-semibold mb-2 flex items-center gap-2">
                  <Target className="w-5 h-5 text-green-600" />
                  Ready for Your Elephant Adventure?
                </p>
                <p className="text-sm text-emerald-900/80 dark:text-emerald-100/80 mb-3">
                  Udawalawe National Park awaits with a resident elephant population often cited in the 500-700 range, active conservation
                  programs, and high-probability wildlife encounters. Book according to your priorities: drier months
                  for visibility, greener months for scenery and lighter crowds. Choose ethical safari operators,
                  include the Elephant Transit Home, and travel in ways that support long-term wildlife protection.
                </p>
                <p className="text-sm text-green-900 dark:text-emerald-50 font-medium">
                  <strong>Your unforgettable elephant safari story begins at Udawalawe - where conservation success meets wildlife wonder!</strong> 🐘📷🌿
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
