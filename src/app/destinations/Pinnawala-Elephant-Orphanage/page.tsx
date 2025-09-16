"use client"

import Image from "next/image"
import Link from "next/link"
import { Clock, CheckCircle, Star, Heart, TreePine, Waves, Camera, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useState } from "react"



function ImageCarousel({ images, alt }: { images: string[]; alt: string }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const goToImage = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className="relative">
      <div className="relative overflow-hidden rounded-lg" style={{ height: '500px', width: '100%' }}>
        <Image
          src={images[currentIndex] || "/placeholder.svg"}
          alt={`${alt} - Image ${currentIndex + 1}`}
          fill
          className="rounded-lg transition-all duration-300 object-cover"
          sizes="(max-width: 768px) 100vw, 400px"
        />

        {/* Navigation buttons */}
        {images.length > 1 && (
          <>
            <Button
              variant="outline"
              size="icon"
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white hover:bg-white/90 dark:bg-gray-800 dark:hover:bg-gray-700 cursor-pointer border-gray-200 dark:border-gray-600"
              onClick={prevImage}
            >
              <ChevronLeft className="h-4 w-4 text-gray-800 dark:text-gray-200" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white hover:bg-white/90 dark:bg-gray-800 dark:hover:bg-gray-700 cursor-pointer border-gray-200 dark:border-gray-600"
              onClick={nextImage}
            >
              <ChevronRight className="h-4 w-4 text-gray-800 dark:text-gray-200" />
            </Button>
          </>
        )}

        {/* Dots indicator */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-200 cursor-pointer ${index === currentIndex
                    ? 'bg-white scale-110'
                    : 'bg-white/60 hover:bg-white/80'
                  }`}
                onClick={() => goToImage(index)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default function PinnawalaElephantOrphanage() {
  const elephantImages = [
    "/Pinnawala.jpeg",
    "/placeholder.svg?height=500&width=800",
    "/placeholder.svg?height=500&width=800",
    "/placeholder.svg?height=500&width=800"
  ]

  const feedingImages = [
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600"
  ]

  const bathingImages = [
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600"
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/Pinnawala.jpeg"
          alt="Pinnawala Elephant Orphanage showing elephants in their natural habitat"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60" />
        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-8xl font-bold mb-6 tracking-tight">Pinnawala Elephant Orphanage</h1>
          <p className="text-2xl md:text-4xl mb-8 font-light leading-relaxed">Home to 80+ Rescued Elephants</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2">
              <Heart className="w-4 h-4 mr-2" />
              Elephant Rescue Center
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2">
              <TreePine className="w-4 h-4 mr-2" />
              20 Hectare Sanctuary
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2">
              <Waves className="w-4 h-4 mr-2" />
              River Bathing Experience
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Welcome to Pinnawala Elephant Orphanage</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Pinnawala Elephant Orphanage is the world&apos;s largest elephant orphanage and breeding program.
              Located in Kegalle district, this 20-hectare sanctuary is home to more than 80 elephants, including
              many baby elephants born at the facility. Started in 1975, this amazing place rescues orphaned and
              injured elephants from across Sri Lanka.
            </p>
            <p className="text-lg">
              Watch these gentle giants as they eat, play, and bathe in the Maha Oya river. The orphanage offers
              visitors a unique chance to see elephants up close in a safe environment. From tiny baby elephants
              to massive adults, you can observe their natural behaviors and learn about elephant conservation efforts.
            </p>
            <Link href="/blog/sri-lankan-elephants">
              <Button className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 h-12 cursor-pointer">
                <span>Learn About Sri Lankan Elephants</span>
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Main Image Carousel */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Experience the Magic of Pinnawala</h2>
          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">



          </div>
          <ImageCarousel images={elephantImages} alt="Pinnawala Elephant Orphanage elephants" />
        </section>

        {/* Quick Info */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Essential Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3 text-foreground">Opening Hours</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>Daily: 8:30 AM - 6:00 PM</li>
                    <li>Feeding Times: 9:15 AM, 1:15 PM, 5:00 PM</li>
                    <li>River Bathing: 10:00 AM - 12:00 PM, 2:00 PM - 4:00 PM</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3 text-foreground">Entry Fees</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>Adults: LKR 3,000</li>
                    <li>Children (3-12 years): LKR 1,500</li>
                    <li>Camera Fee: LKR 250</li>
                    <li>Video Camera: LKR 1,000</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3 text-foreground">Location</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>Rambukkana Road, Pinnawala</li>
                    <li>Kegalle District, Sabaragamuwa Province</li>
                    <li>90 km from Colombo</li>
                    <li>30 km from Kandy</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3 text-foreground">Best Time to Visit</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>Feeding Time: 9:15 AM or 1:15 PM</li>
                    <li>River Bathing: 10:00 AM or 2:00 PM</li>
                    <li>Dry Season: December - March</li>
                    <li>Early Morning: Less crowded</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Main Attractions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Main Attractions & Activities</h2>
          <div className="space-y-8">

            {/* Elephant Feeding */}
            <Card>
              <CardHeader>
                <CardTitle>Elephant Feeding Time</CardTitle>
                <CardDescription>Watch 80+ elephants during their meal times</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      The feeding sessions are the most popular activity at Pinnawala. Three times daily, all elephants
                      gather in the main area for their meals. Baby elephants drink milk from large bottles while adult
                      elephants eat fruits, vegetables, and specially prepared elephant food.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      This is the best time for photography as elephants are calm and stay in one area. You can see the
                      different personalities of each elephant and watch the babies learning to use their trunks. The
                      feeding area gets crowded, so arrive 15 minutes early for the best viewing spots.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Three feeding sessions daily
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Baby elephants bottle feeding
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Perfect for photography
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Educational experience
                      </li>
                    </ul>
                  </div>
                  <ImageCarousel images={feedingImages} alt="Elephant feeding time at Pinnawala" />
                </div>
              </CardContent>
            </Card>

            {/* River Bathing */}
            <Card>
              <CardHeader>
                <CardTitle>River Bathing Experience</CardTitle>
                <CardDescription>Elephants enjoying the Maha Oya river</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <ImageCarousel images={bathingImages} alt="Elephants bathing in Maha Oya river" />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Twice daily, the elephants walk down to the Maha Oya river for their bath time. This natural
                      behavior is essential for elephant health and happiness. You can watch from the riverbank as
                      elephants spray water on themselves, play in the river, and cool down in the flowing water.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      The walk to the river takes about 10 minutes as elephants slowly move through the village. Local
                      people come out to watch this daily parade. Young elephants often play in the shallow water while
                      mothers keep a watchful eye. This is one of the most natural and beautiful experiences at Pinnawala.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Natural elephant behavior
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Beautiful river setting
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Baby elephants playing
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Village atmosphere
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Baby Elephant Nursery */}
            <Card>
              <CardHeader>
                <CardTitle>Baby Elephant Nursery</CardTitle>
                <CardDescription>Special care area for orphaned baby elephants</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      The nursery section houses the youngest elephants who need special care. These baby elephants are
                      fed milk every few hours and receive round-the-clock attention from trained keepers. Many of these
                      babies were found alone in the wild after losing their mothers.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      Watching baby elephants learn basic skills like using their trunks to eat and drink is incredibly
                      heartwarming. The smallest babies still use bottles for milk, while older ones learn to eat solid
                      food. This area shows the important rescue work that Pinnawala does for Sri Lankan elephants.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Rescued orphaned babies
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        24-hour care provided
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Learning natural behaviors
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Conservation education
                      </li>
                    </ul>
                  </div>
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Baby elephants in the nursery section receiving care and milk feeding"
                    width={600}
                    height={400}
                    className="rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Museum and Information Center */}
            <Card>
              <CardHeader>
                <CardTitle>Elephant Museum</CardTitle>
                <CardDescription>Learn about elephant behavior and conservation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Museum displays showing elephant information and conservation efforts"
                    width={600}
                    height={400}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      The small museum at Pinnawala provides valuable information about Asian elephants. You can learn
                      about elephant biology, behavior, and the threats they face in the wild. The displays explain why
                      orphanages like Pinnawala are important for elephant conservation.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      Educational materials show how elephants live in family groups, their intelligence, and their role
                      in Sri Lankan culture. The museum also explains the history of Pinnawala and profiles of famous
                      elephants who have lived at the orphanage. This helps visitors understand the mission behind the facility.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Educational displays
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Conservation information
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Cultural significance
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Historical information
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </section>

        {/* Practical Tips */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Visitor Tips & Guidelines</h2>
          <div className="grid md:grid-cols-2 gap-6">

            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">What to Bring</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>Camera with extra batteries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>Comfortable walking shoes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>Sun hat and sunscreen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>Water bottle to stay hydrated</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>Small bag for belongings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>Cash for entry and refreshments</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Safety Guidelines</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Star className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                    <span>Keep safe distance from elephants</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                    <span>Do not feed elephants</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                    <span>Follow keeper instructions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                    <span>Stay in designated viewing areas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                    <span>No loud noises or sudden movements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                    <span>Supervise children at all times</span>
                  </li>
                </ul>
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
                Photography Tips
              </CardTitle>
              <CardDescription>Capture amazing elephant photos at Pinnawala</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Best Photo Opportunities</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Feeding time - elephants stay calm and positioned well</li>
                    <li>• River bathing - natural behavior and beautiful setting</li>
                    <li>• Baby elephants learning to use their trunks</li>
                    <li>• Elephant parade walking to the river</li>
                    <li>• Mother and baby elephant interactions</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Camera Settings Tips</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Use fast shutter speed for moving elephants</li>
                    <li>• Bring telephoto lens for close-up shots</li>
                    <li>• Shoot in early morning for best lighting</li>
                    <li>• Take continuous shots during action sequences</li>
                    <li>• Focus on elephant eyes for emotional photos</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Getting There */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8">How to Get There</h2>
          <div className="grid md:grid-cols-2 gap-6">

            <Card>
              <CardHeader>
                <CardTitle>From Colombo</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-muted-foreground">
                  <p><strong>By Car:</strong> 90 km, 2-2.5 hours via A1 highway</p>
                  <p><strong>By Bus:</strong> Take Kegalle bus from Colombo Fort, then local bus to Pinnawala</p>
                  <p><strong>By Train:</strong> Colombo to Rambukkana station, then 15-minute taxi ride</p>
                  <p><strong>Organized Tour:</strong> Many tour companies offer day trips including transport</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>From Kandy</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-muted-foreground">
                  <p><strong>By Car:</strong> 30 km, 45 minutes via Kandy-Kegalle road</p>
                  <p><strong>By Bus:</strong> Take Kegalle bus from Kandy bus station</p>
                  <p><strong>By Taxi:</strong> 45-minute journey, easiest option</p>
                  <p><strong>Tuk-tuk:</strong> Longer journey but scenic route available</p>
                </div>
              </CardContent>
            </Card>

          </div>
        </section>

        {/* Conservation Message */}
        <section className="mb-12">
          <Card className="bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
            <CardHeader>
              <CardTitle className="text-green-800 dark:text-green-200">Supporting Elephant Conservation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-green-700 dark:text-green-300 mb-4">
                Pinnawala Elephant Orphanage plays a vital role in elephant conservation in Sri Lanka. Your visit helps
                fund the care of these magnificent animals and supports research into elephant behavior and breeding.
                The orphanage has successfully bred many elephants, helping to maintain the Asian elephant population.
              </p>
              <p className="text-green-700 dark:text-green-300">
                By visiting responsibly and following guidelines, you contribute to the protection of elephants while
                enjoying an unforgettable wildlife experience. Remember that these are rescued animals who depend on
                human care for survival, making Pinnawala an important sanctuary for Sri Lankan elephants.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Planning Your Visit */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Plan Your Perfect Visit</CardTitle>
              <CardDescription>Make the most of your time at Pinnawala</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Recommended Schedule</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-muted-foreground">
                    <div>
                      <p><strong>Morning Visit (3-4 hours):</strong></p>
                      <ul className="space-y-1 mt-2">
                        <li>• 8:30 AM - Arrive and buy tickets</li>
                        <li>• 9:00 AM - Explore grounds and nursery</li>
                        <li>• 9:15 AM - First feeding time</li>
                        <li>• 10:00 AM - River bathing experience</li>
                        <li>• 11:30 AM - Visit museum and shop</li>
                      </ul>
                    </div>
                    <div>
                      <p><strong>Afternoon Visit (2-3 hours):</strong></p>
                      <ul className="space-y-1 mt-2">
                        <li>• 1:00 PM - Arrive for feeding time</li>
                        <li>• 1:15 PM - Second feeding session</li>
                        <li>• 2:00 PM - Afternoon river bathing</li>
                        <li>• 3:30 PM - Explore other areas</li>
                        <li>• 4:30 PM - Departure</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <p className="text-blue-800 dark:text-blue-200 text-sm">
                    <strong>Pro Tip:</strong> Morning visits are less crowded and offer better photography conditions.
                    Combine your visit with nearby attractions like Millennium Elephant Foundation or a spice garden
                    tour for a full day experience.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>



      </div>
    </main>
  )
}
