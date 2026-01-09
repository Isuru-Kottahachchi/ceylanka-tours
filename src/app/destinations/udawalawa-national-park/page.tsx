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
    { src: "/placeholder.svg?height=400&width=600", caption: "Baby elephants at feeding time", alt: "Orphaned elephants being bottle-fed at Transit Home" },
    { src: "/placeholder.svg?height=400&width=600", caption: "Caretakers with elephant calves", alt: "Staff caring for rescued baby elephants" },
    { src: "/placeholder.svg?height=400&width=600", caption: "Young elephants playing", alt: "Rehabilitating elephants learning social skills" },
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
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Udawalawe National Park</h1>
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
              Udawalawe National Park is the best place in Sri Lanka to see wild elephants. This park is home to 
              600-700 wild Asian elephants, and visitors have a 95% chance of seeing them during a safari. The park 
              covers 30,821 hectares of open grasslands, making it easy to spot and photograph these amazing animals.
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
                      <strong>Elephant Population:</strong> 600-700 individuals
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4 text-orange-500" />
                    <span>
                      <strong>Sighting Success:</strong> 95% elephant encounters
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
                      <strong>Best Season:</strong> Year-round (May-Sept optimal)
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
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-green-500" />
                      From Major Cities
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground ml-6">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        165 km from Colombo via Ratnapura (3.5 hours)
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        90 km from Ella (2 hours via scenic route)
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        100 km from Nuwara Eliya (2.5 hours)
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
                        Tissamaharama (45 km - 1 hour)
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
                  Guaranteed Elephant Encounters
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Udawalawe boasts an extraordinary 95% elephant sighting success rate - the highest in Sri Lanka! With 600-700 resident elephants and vast open grasslands providing unobstructed views, seeing multiple elephant families is virtually guaranteed on every safari.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Heart className="w-5 h-5 text-blue-500" />
                  World-Famous Elephant Transit Home
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The pioneering Elephant Transit Home (established 1995) represents a global conservation model. This facility has successfully rescued, rehabilitated, and released 100+ orphaned elephants back into Udawalawe&apos;s wild herds - a remarkable achievement in elephant conservation.
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
                  The 3,300-hectare Udawalawe Tank (completed 1969) creates a permanent water source attracting year-round wildlife concentrations. This reliability makes Udawalawe consistently productive regardless of season, unlike seasonal parks dependent on monsoons.
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
        <Card className="mb-12 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 border-2 border-blue-200 dark:border-blue-800">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-500 rounded-full">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-3 text-blue-900 dark:text-blue-100">Did You Know? Why Udawalawe Has So Many Elephants</h3>
                <p className="text-muted-foreground mb-3 leading-relaxed">
                  Udawalawe wasn&apos;t always elephant paradise - its incredible elephant population is actually a conservation success story! When the Udawalawe Reservoir was constructed in 1969 to provide irrigation and hydropower, the flooding displaced numerous elephants from their traditional habitats. Recognizing this conservation crisis, Sri Lankan authorities established Udawalawe National Park in 1972 specifically to provide sanctuary for these displaced elephants and other wildlife.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The park&apos;s design was brilliant - vast grasslands surrounding the reservoir created ideal elephant habitat with abundant grazing and permanent water access. Unlike many protected areas where elephants migrate seasonally, Udawalawe&apos;s year-round water and food availability encouraged elephants to establish permanent residence. Today, Udawalawe supports one of Sri Lanka&apos;s densest elephant populations (approximately 20 elephants per square kilometer), with multiple generations of elephants born and raised entirely within the park boundaries. This remarkable transformation from displacement crisis to thriving sanctuary demonstrates how thoughtful conservation planning can create win-win solutions for both wildlife and human development!
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
                      Udawalawe National Park shelters an extraordinary resident population of 600-700 Asian elephants - one of the highest concentrations on the planet! What makes Udawalawe truly exceptional is that these aren&apos;t seasonal visitors migrating between parks. These elephants have made Udawalawe their permanent home, establishing multi-generational family groups that roam the grasslands year-round. The park&apos;s 95% elephant sighting success rate means you&apos;re virtually guaranteed spectacular close encounters during your safari.
                    </p>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      The predominant open terrain provides unparalleled opportunities to observe complete elephant societies functioning naturally. Watch protective matriarchs making family decisions, observe adolescent males practicing sparring skills, witness mothers teaching tiny calves essential survival behaviors, and experience the tender moments when separated family groups reunite with emotional trumpet calls and trunk intertwining. Udawalawe&apos;s elephants are remarkably habituated to safari vehicles, allowing safe close-range observation and photography impossible in dense forest habitats.
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
                <CardDescription>World-Renowned Baby Elephant Rehabilitation Center</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <ImageCarousel images={transitHomeImages} />
                  <div>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Adjacent to Udawalawe National Park lies one of Asia&apos;s most successful elephant conservation facilities - the Elephant Transit Home (ETH), established in 1995 by the Department of Wildlife Conservation. This pioneering rehabilitation center rescues orphaned baby elephants found abandoned in the wild due to maternal death, human-elephant conflict situations, or separation during reservoir construction displacement. What distinguishes ETH from tourist-oriented orphanages is its strict "minimal human contact" protocol designed to keep elephants wild-capable rather than habituated to humans.
                    </p>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      The rehabilitation process typically spans 4-5 years, during which orphaned calves receive specialized veterinary care, nutrition matching wild elephant diets, and crucial social learning from fellow orphans that replaces maternal education. Caretakers deliberately avoid bonding behaviors that would create human dependency. When elephants reach 4-5 years of age and demonstrate self-sufficiency skills, they&apos;re released back into Udawalawe&apos;s wild population where monitoring shows exceptional integration success rates. Since inception, ETH has successfully rescued and rehabilitated over 100 elephants, with many now thriving as breeding adults contributing to wild populations!
                    </p>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-3 text-foreground">Visitor Experience at ETH:</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                            <span><strong>Public feeding viewings:</strong> 9:00 AM, 12:00 PM, 3:00 PM, 6:00 PM daily (from designated viewing platform only)</span>
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
                            <span><strong>Conservation impact:</strong> Entrance fees directly fund rescue operations and medical supplies</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                            <span><strong>Combined visit:</strong> Most safari operators include ETH visit either before or after Udawalawe park safari</span>
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
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Various wildlife including water buffalo, crocodiles, and birds around Udawalawe reservoir"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
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
        <Card className="mb-12 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950 border-l-4 border-l-purple-500">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-full flex-shrink-0">
                <Lightbulb className="w-6 h-6 text-purple-600 dark:text-purple-300" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-purple-900 dark:text-purple-100">Did You Know? The Elephant Transit Home&apos;s Rehabilitation Process</h3>
                <p className="text-muted-foreground mb-3 leading-relaxed">
                  The Elephant Transit Home follows a scientifically designed rehabilitation protocol that maximizes wild reintroduction success. When orphaned calves arrive (typically under 6 months old), they&apos;re immediately paired with similar-aged orphans to form surrogate family units. This peer bonding is critical - elephants are intensely social animals requiring constant companionship for psychological health. The facility deliberately limits human interaction to feeding times and medical care, preventing the dangerous human-dependency that plagues many elephant orphanages globally.
                </p>
                <p className="text-muted-foreground mb-3 leading-relaxed">
                  Diet replicates wild nutrition precisely: specialized milk formulas mimicking elephant mother&apos;s milk gradually transition to vegetation including bamboo, various grasses, tree bark, and fruits foraged from Udawalawe&apos;s own vegetation. Crucially, caretakers never bottle-feed elephants directly - bottles are attached to fences requiring elephants to feed themselves, maintaining natural independence. As elephants mature (typically 4-5 years), enclosure gates remain increasingly open allowing voluntary exploration of adjacent forests, essentially "soft-releasing" elephants who gradually integrate with wild herds visiting nearby water sources.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Monitoring studies tracking released elephants (identified by distinctive ear notch patterns) reveal remarkable success: approximately 80-90% successfully integrate into wild herds, reproduce normally, and demonstrate complete wild behaviors! Several ETH graduates have been photographed years later as breeding matriarchs leading their own family groups - the ultimate conservation success. This model has become a global reference, with conservationists from Africa and Asia studying ETH&apos;s methodologies for replication.
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
                      <span><strong>Park Opens:</strong> 6:00 AM daily</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Clock className="w-4 h-4 mt-0.5 flex-shrink-0 text-orange-500" />
                      <span><strong>Last Entry:</strong> 6:00 PM</span>
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
                      <span><strong>Full-day advantage:</strong> Access remote zones closed to half-day safaris, fewer vehicles</span>
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
                    The dry season represents Udawalawe&apos;s peak safari period, though unlike seasonal parks, Udawalawe remains excellent year-round thanks to its permanent reservoir. During these months, minimal rainfall maintains low vegetation, providing unobstructed sightlines across grasslands. Elephant herds concentrate predictably around reservoir margins throughout the day, making sightings virtually guaranteed.
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
                    Inter-monsoon months offer outstanding wildlife viewing with the added advantage of fewer safari vehicles and lower accommodation prices. Occasional afternoon showers refresh vegetation and cool temperatures, creating particularly active wildlife mornings. Elephants remain highly visible, waterbirdpopulations swell as migratory species arrive, and the landscape gains vibrant green tones absent during dry months.
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
                    Udawalawe&apos;s wet season receives moderate rainfall (significantly less than rainforest zones), typically afternoon showers rather than all-day rain. The landscape transforms into emerald grasslands creating stunning photographic backdrops. Importantly, Udawalawe&apos;s elephants don&apos;t migrate during wet months - they remain resident year-round, ensuring continued excellent sighting rates (still 80-90% success). This period offers remarkable value for budget travelers.
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
                        <span><strong>Budget advantages:</strong> Accommodation discounts (30-50% off), fewer vehicles, personalized service</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                        <span><strong>Note:</strong> Taller grass reduces visibility slightly; afternoon showers possible (safaris rarely cancelled)</span>
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
                    Udawalawe&apos;s elephants breed year-round (22-month gestation), meaning baby elephants are always present! However, birth peaks occur following rainy periods when nutrition improves. The highest calf concentrations typically appear March-May and September-November when 3-6 month old babies become adventurous, providing heartwarming photographic opportunities of wobbly calves learning to use their trunks and playing with siblings.
                  </p>
                  <div>
                    <h4 className="font-semibold mb-2 text-sm text-foreground">Best Baby Elephant Experiences:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span><strong>Peak calf months:</strong> March-May, September-November for highest baby concentrations</span>
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
        <Card className="mb-12 bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-950 dark:to-cyan-950 border-l-4 border-l-teal-500">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="bg-teal-100 dark:bg-teal-900 p-3 rounded-full flex-shrink-0">
                <Lightbulb className="w-6 h-6 text-teal-600 dark:text-teal-300" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-teal-900 dark:text-teal-100">Did You Know? Udawalawe Reservoir&apos;s Engineering Marvel & Elephant Adaptation</h3>
                <p className="text-muted-foreground mb-3 leading-relaxed">
                  The Udawalawe Reservoir represents one of Sri Lanka&apos;s most ambitious water management projects. Constructed between 1965-1969 on the Walawe River (one of Sri Lanka&apos;s longest rivers), this massive reservoir was engineered primarily for irrigation, providing water security to southern agricultural regions and generating hydroelectric power. The dam stands 122 meters tall, creating a reservoir covering 3,300 hectares (8,150 acres) with a storage capacity of 268 million cubic meters - enough water to supply Colombo&apos;s entire population for nearly two months!
                </p>
                <p className="text-muted-foreground mb-3 leading-relaxed">
                  What makes Udawalawe&apos;s story fascinating is how elephants adapted to this dramatic landscape transformation. Historical records indicate elephants initially avoided the flooded zones, creating human-elephant conflict in surrounding agricultural areas. The establishment of the national park in 1972 provided crucial buffer habitat. Over subsequent decades, Udawalawe&apos;s elephants learned remarkable adaptations: they discovered reservoir shallows provided cooling relief during extreme heat, aquatic vegetation (lotus, water lilies) became dietary supplements, and families developed generational knowledge of safe crossing points and seasonal water quality changes.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Today&apos;s elephants demonstrate extraordinary "landscape learning" - family groups teach calves specific reservoir access routes, optimal bathing zones, and flood pattern recognition. This inter-generational knowledge transmission showcases elephant intelligence and adaptability. The reservoir&apos;s permanent water source eliminated seasonal migration pressures, allowing Udawalawe&apos;s elephants to establish stable home ranges - a key factor enabling the park&apos;s exceptional 95% sighting success rate that delights safari visitors today!
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
                    Udawalawe National Park plays a critical role in Sri Lankan elephant conservation, serving as one of the country&apos;s most important protected elephant habitats. The park demonstrates how human development (reservoir construction) can be successfully integrated with wildlife conservation when managed thoughtfully. Udawalawe&apos;s management model - combining strict protection with regulated tourism and community engagement - has become a reference for human-wildlife coexistence strategies throughout Asia.
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
                          <span><strong>Maintain distance:</strong> 30-meter minimum distance from elephants (let them approach naturally if curious)</span>
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
        <Card className="mb-12 bg-gradient-to-br from-green-50 via-yellow-50 to-orange-50 dark:from-green-950 dark:via-yellow-950 dark:to-orange-950 border-l-4 border-l-green-600">
          <CardContent className="pt-6">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
                <Heart className="w-6 h-6 text-red-500" />
                Your Udawalawe Elephant Safari Awaits - Conservation Meets Adventure
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Udawalawe National Park stands as Sri Lanka&apos;s premier elephant-watching destination, offering what few places on Earth can guarantee - close encounters with wild Asian elephants in their natural habitat, virtually every single safari. With its extraordinary 95% elephant sighting success rate, 600-700 resident giants roaming open savanna-like grasslands, and the world-renowned Elephant Transit Home pioneering orphan rehabilitation, Udawalawe delivers an elephant experience unmatched anywhere in Asia. This is not simply wildlife viewing - it&apos;s intimate observation of complete elephant societies: wise matriarchs leading multi-generational families, protective mothers nursing tiny calves, playful teenagers practicing life skills, and emotional family reunions that remind us of elephants&apos; profound intelligence and social complexity.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                What distinguishes Udawalawe from other wildlife destinations is its rare combination of reliability, accessibility, and conservation authenticity. The park&apos;s year-round water source eliminates seasonal unpredictability - elephants remain resident throughout all months, ensuring consistent spectacular sightings whether you visit during peak dry season or budget-friendly wet months. The predominantly open terrain provides unobstructed sightlines allowing crystal-clear photography and behavioral observation impossible in dense forest habitats. You&apos;ll witness elephant family dynamics unfolding naturally: mothers teaching calves how to use their trunks, families bathing communally in reservoir shallows, playful sparring matches between adolescents, and the tender trunk-twining greetings when separated groups reunite.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Beyond wild elephant encounters, the Elephant Transit Home adds profound conservation dimension to your visit. Watching orphaned baby elephants receive specialized rehabilitation care - knowing they&apos;ll eventually return to Udawalawe&apos;s wild herds as self-sufficient adults - transforms your safari from simple tourism into meaningful participation in elephant conservation. The facility&apos;s 80-90% successful reintegration rate demonstrates that thoughtful conservation can achieve remarkable outcomes. Many elephants you photograph in the wild today are actually ETH graduates now thriving as breeding adults - living proof that conservation works when properly implemented. Your visit directly supports these efforts through entrance fees, employment for local communities, and global awareness that protects elephants&apos; future.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Whether you&apos;re a dedicated wildlife photographer seeking portfolio-quality elephant portraits, a family wanting children to experience genuine wildlife magic, a conservation enthusiast supporting ethical ecotourism, or simply someone who dreams of encountering Earth&apos;s largest land mammals in their natural world - Udawalawe delivers beyond expectations. The emotional impact of watching a elephant mother patiently teaching her wobbly calf to coordinate its trunk, or witnessing a 50-strong family group gathering at sunset with mountains silhouetted behind them, creates memories that last lifetimes. These are the moments that transform tourists into conservation advocates, instilling profound respect for wildlife and motivating protection of these irreplaceable creatures.
              </p>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border-2 border-green-500">
                <p className="text-foreground font-semibold mb-2 flex items-center gap-2">
                  <Target className="w-5 h-5 text-green-600" />
                  Ready for Your Elephant Adventure?
                </p>
                <p className="text-sm text-muted-foreground mb-3">
                  Udawalawe National Park awaits with its 600-700 resident elephants, world-class conservation programs, and virtually guaranteed wildlife encounters. Book your safari during optimal months (May-September for peak visibility, March-May for baby elephant peaks, or budget-friendly December-February for lush landscapes). Choose ethical safari operators respecting wildlife welfare, visit the Elephant Transit Home to witness conservation in action, and prepare for an experience that will forever change how you understand and appreciate Earth&apos;s most magnificent gentle giants.
                </p>
                <p className="text-sm text-foreground font-medium">
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
