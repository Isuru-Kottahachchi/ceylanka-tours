"use client"

import Image from "next/image"
import { MapPin, CheckCircle, Camera, Mountain, Waves, TreePine, Car, Bus, Info, AlertTriangle, Thermometer, Calendar, Users, Binoculars} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function VictoriaDamGuide() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <Image
          src="/Victoria-dam.jpg"
          alt="Victoria Dam surrounded by lush green mountains and misty clouds"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Victoria Dam</h1>
            <p className="text-xl md:text-2xl mb-8">
              Sri Lanka&apos;s Tallest Dam in the Heart of the Central Highlands
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Badge variant="secondary" className="bg-white/20 text-white">
                <Mountain className="w-4 h-4 mr-2" />
                Highest Dam in Sri Lanka
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white">
                <Camera className="w-4 h-4 mr-2" />
                Photography Paradise
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white">
                <TreePine className="w-4 h-4 mr-2" />
                Surrounded by Tea Gardens
              </Badge>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Quick Info */}
        <section className="mb-12">
          <div className="grid md:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <Mountain className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                <p className="font-semibold">Height</p>
                <p className="text-sm text-muted-foreground">122 meters</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Waves className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                <p className="font-semibold">Reservoir</p>
                <p className="text-sm text-muted-foreground">722 million cubic meters</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <MapPin className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                <p className="font-semibold">Location</p>
                <p className="text-sm text-muted-foreground">Teldeniya, Kandy</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Calendar className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                <p className="font-semibold">Completed</p>
                <p className="text-sm text-muted-foreground">1985</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Introduction */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="h-6 w-6 text-blue-600" />
                Welcome to Victoria Dam - Sri Lanka&apos;s Engineering Marvel
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose max-w-none">
                <p className="text-lg leading-relaxed mb-4">
                  Hey there, fellow traveler! Let me tell you about one of Sri Lanka&apos;s most impressive sights - the Victoria Dam. 
                  If you&apos;re looking for a place that combines stunning natural beauty with incredible human engineering, you&apos;ve hit the jackpot.
                </p>
                <p className="mb-4">
                  Standing tall at 122 meters, Victoria Dam isn&apos;t just Sri Lanka&apos;s tallest dam - it&apos;s a gateway to some of the most 
                  breathtaking scenery you&apos;ll ever see. Picture this: a massive concrete wall holding back crystal-clear waters, 
                  surrounded by rolling green hills covered in tea plantations, all wrapped in a blanket of misty clouds. 
                  Sounds like a dream, right? Well, it&apos;s real, and it&apos;s waiting for you!
                </p>
                <p>
                  Located in Teldeniya, about 40 kilometers from Kandy, this isn&apos;t your typical tourist trap. It&apos;s a hidden gem 
                  that locals love and visitors discover by happy accident. Whether you&apos;re a photography enthusiast, nature lover, 
                  or just someone who appreciates impressive engineering, Victoria Dam has something special for you.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* History and Background */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>The Story Behind the Dam</CardTitle>
              <CardDescription>How Victoria Dam came to be</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="prose max-w-none">
                <p className="mb-4">
                  Back in the 1970s, Sri Lanka had a problem. The country needed more electricity, and they needed a reliable 
                  water supply for the growing population. The solution? Build a massive dam on the Mahaweli River, the longest 
                  river in Sri Lanka.
                </p>
                <p className="mb-4">
                  Construction began in 1978 as part of the ambitious Mahaweli Development Program - basically Sri Lanka&apos;s biggest 
                  infrastructure project ever. It wasn&apos;t easy work. Engineers had to deal with challenging terrain, monsoon rains, 
                  and the sheer scale of moving millions of tons of earth and concrete.
                </p>
                <p className="mb-4">
                  Seven years later, in 1985, Victoria Dam was finally complete. Named after the nearby Victoria Golf Club (which 
                  itself was named after Queen Victoria), this engineering marvel immediately became the tallest dam in Sri Lanka. 
                  But here&apos;s the cool part - it wasn&apos;t just about generating electricity. The dam created a huge reservoir that 
                  transformed the entire landscape.
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-6">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                    Fun Facts About Victoria Dam
                  </h4>
                  <ul className="space-y-1 text-sm">
                    <li>• It can generate up to 210 megawatts of electricity</li>
                    <li>• The reservoir holds 722 million cubic meters of water</li>
                    <li>• It&apos;s a concrete arch dam - one of the strongest dam designs</li>
                    <li>• The project displaced several small villages, whose residents were relocated</li>
                    <li>• It plays a crucial role in Sri Lanka&apos;s national power grid</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* What Makes It Special */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Why Victoria Dam Will Blow Your Mind</CardTitle>
              <CardDescription>The unique features that make this place extraordinary</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <Mountain className="h-5 w-5 text-blue-600" />
                    The Engineering Marvel
                  </h3>
                  <p className="mb-4">
                    Let&apos;s talk numbers for a second. This concrete giant is 122 meters high and 520 meters long. 
                    To put that in perspective, it&apos;s taller than a 40-story building! The dam wall curves gracefully 
                    across the valley, and when you stand at the top looking down, you&apos;ll get a real sense of just 
                    how massive this structure is.
                  </p>
                  <p className="mb-4">
                    What makes it even more impressive is that it&apos;s an arch dam. This design uses the natural strength 
                    of the arch shape to hold back millions of tons of water. It&apos;s like nature and human ingenuity 
                    working together in perfect harmony.
                  </p>
                </div>
                <div>
                  <Image
                    src="/victoria-dam-structure.jpg"
                    alt="Close-up view of Victoria Dam's concrete structure and spillway"
                    width={400}
                    height={300}
                    className="rounded-lg object-cover w-full h-64"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div>
                  <Image
                    src="/victoria-reservoir.jpg"
                    alt="Panoramic view of Victoria Dam reservoir with surrounding mountains"
                    width={400}
                    height={300}
                    className="rounded-lg object-cover w-full h-64"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <Camera className="h-5 w-5 text-blue-600" />
                    A Photographer&apos;s Paradise
                  </h3>
                  <p className="mb-4">
                    Here&apos;s where things get really exciting for photo lovers. The reservoir creates this amazing mirror
                    effect, especially in the early morning when the water is perfectly still. The surrounding mountains
                    reflect in the water, creating these incredible double images that look almost surreal.
                  </p>
                  <p className="mb-4">
                    And the sunrises? Absolutely spectacular. As the sun comes up over the mountains, it paints the water 
                    in shades of gold and pink. The mist rising from the water adds this mystical quality that makes 
                    every photo look like something from a fairy tale.
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <TreePine className="h-5 w-5 text-blue-600" />
                  Tea Country Surroundings
                </h3>
                <p className="mb-4">
                  One of the coolest things about Victoria Dam is where it&apos;s located. You&apos;re right in the heart of
                  Sri Lanka&apos;s tea country. The hills around the reservoir are covered in tea plantations that create
                  these beautiful green terraces stretching as far as the eye can see.
                </p>
                <p className="mb-4">
                  You&apos;ll often see tea pickers working the slopes, their colorful saris adding splashes of bright color
                  to the green landscape. It&apos;s like watching a living postcard unfold before your eyes. The contrast
                  between the blue water, green tea bushes, and the red earth of the plantation roads creates this
                  incredible natural color palette.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Things to Do */}
        <section className="mb-12" id="activities">
          <Card>
            <CardHeader>
              <CardTitle>Things to Do at Victoria Dam</CardTitle>
              <CardDescription>Make the most of your visit with these activities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full">
                      <Camera className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Photography Adventures</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        This is probably why most people come here, and for good reason. The dam offers incredible 
                        photo opportunities from multiple angles.
                      </p>
                      <ul className="text-sm space-y-1 text-muted-foreground">
                        <li>• Walk along the dam crest for panoramic shots</li>
                        <li>• Capture reflections in the calm reservoir waters</li>
                        <li>• Photograph the spillway during water releases</li>
                        <li>• Get scenic shots of surrounding tea plantations</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full">
                      <Binoculars className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Nature Watching</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        The reservoir has created a unique ecosystem that attracts various wildlife.
                      </p>
                      <ul className="text-sm space-y-1 text-muted-foreground">
                        <li>• Bird watching - especially water birds and hill country species</li>
                        <li>• Spot monitor lizards sunning themselves on rocks</li>
                        <li>• Look out for butterflies in the surrounding vegetation</li>
                        <li>• Enjoy the peaceful sounds of nature</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-full">
                      <TreePine className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Tea Plantation Walks</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Combine your dam visit with exploring the surrounding tea estates.
                      </p>
                      <ul className="text-sm space-y-1 text-muted-foreground">
                        <li>• Walk through terraced tea gardens</li>
                        <li>• Meet local tea pickers and learn about their work</li>
                        <li>• Visit nearby tea factories</li>
                        <li>• Buy fresh tea directly from estates</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* <div className="flex gap-4">
                    <div className="bg-orange-100 dark:bg-orange-900/30 p-2 rounded-full">
                      <Fish className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Fishing (Where Permitted)</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Some areas around the reservoir allow fishing, though you'll need to check local regulations.
                      </p>
                      <ul className="text-sm space-y-1 text-muted-foreground">
                        <li>• Freshwater fishing in designated areas</li>
                        <li>• Peaceful spots for quiet contemplation</li>
                        <li>• Best early morning or late afternoon</li>
                        <li>• Bring your own equipment</li>
                      </ul>
                    </div>
                  </div> */}

                  <div className="flex gap-4">
                    <div className="bg-red-100 dark:bg-red-900/30 p-2 rounded-full">
                      <Mountain className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Scenic Drives</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        The roads around Victoria Dam offer some of the most scenic drives in Sri Lanka.
                      </p>
                      <ul className="text-sm space-y-1 text-muted-foreground">
                        <li>• Drive along the reservoir&apos;s edge</li>
                        <li>• Take the winding roads through tea estates</li>
                        <li>• Stop at viewpoints for panoramic photos</li>
                        <li>• Connect to other hill country destinations</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Info className="h-5 w-5 text-blue-600" />
                      Local Tip
                    </h4>
                    <p className="text-sm">
                      The best time to visit is early morning (6-8 AM) when the water is calm, creating perfect
                      reflections. Plus, you&apos;ll avoid the crowds and get the best light for photography!
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Best Time to Visit */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-6 w-6 text-blue-600" />
                When to Visit Victoria Dam
              </CardTitle>
              <CardDescription>Plan your trip for the best experience</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Best Seasons</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-medium text-green-700 dark:text-green-300">December to March (Dry Season)</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Perfect weather with clear skies and minimal rain. Great visibility for photography and the 
                        water levels are usually stable. This is peak tourist season, so expect more visitors.
                      </p>
                    </div>
                    <div className="border-l-4 border-yellow-500 pl-4">
                      <h4 className="font-medium text-yellow-700 dark:text-yellow-300">April to September (Shoulder Season)</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Fewer crowds and still good weather most days. You might catch some spectacular cloud formations 
                        and dramatic lighting. Occasional showers can actually enhance the scenery.
                      </p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-medium text-blue-700 dark:text-blue-300">October to November (Monsoon Season)</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Rainy season brings lush green landscapes but can limit outdoor activities. The spillway is 
                        most active during this time, creating impressive water displays.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">Best Times of Day</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-orange-100 dark:bg-orange-900/30 p-2 rounded-full">
                        <Thermometer className="h-5 w-5 text-orange-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Sunrise (5:30-7:00 AM)</h4>
                        <p className="text-sm text-muted-foreground">
                          Golden hour magic with mirror-like water reflections. Cool temperatures and usually no wind. 
                          Perfect for photography and peaceful contemplation.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full">
                        <Waves className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Morning (7:00-10:00 AM)</h4>
                        <p className="text-sm text-muted-foreground">
                          Still cool and comfortable. Great lighting for photos and you can see the tea pickers starting 
                          their work in the surrounding plantations.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-full">
                        <Mountain className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Late Afternoon (4:00-6:00 PM)</h4>
                        <p className="text-sm text-muted-foreground">
                          Beautiful sunset colors reflecting in the water. The surrounding hills create dramatic shadows 
                          and the temperature starts to cool down.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-amber-600" />
                      Weather Tips
                    </h4>
                    <ul className="text-sm space-y-1">
                      <li>• Bring layers - it can be cool in the morning and warm by midday</li>
                      <li>• Pack a light rain jacket, especially during monsoon season</li>
                      <li>• The altitude (around 500m) makes it cooler than coastal areas</li>
                      <li>• Fog can roll in quickly, creating mystical but challenging photo conditions</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* How to Get There */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Car className="h-6 w-6 text-blue-600" />
                How to Get to Victoria Dam
              </CardTitle>
              <CardDescription>Your complete travel guide</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Car className="h-5 w-5 text-blue-600" />
                    By Private Vehicle
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">From Kandy (40 km, 1.5 hours)</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        This is the most popular route. Take the A26 road towards Mahiyangana, then turn off at 
                        Teldeniya. The road is paved but can be winding through the hills.
                      </p>
                      <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded text-sm">
                        <strong>Route:</strong> Kandy → Peradeniya → Gampola → Nawalapitiya → Teldeniya → Victoria Dam
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">From Nuwara Eliya (70 km, 2.5 hours)</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        A scenic mountain drive through tea country. Take the A5 towards Kandy, then connect to the 
                        A26 at Gampola.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">From Colombo (140 km, 4 hours)</h4>
                      <p className="text-sm text-muted-foreground">
                        Take the A1 highway to Kandy, then follow the Kandy route above. Consider breaking the 
                        journey with an overnight stop in Kandy.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Bus className="h-5 w-5 text-green-600" />
                    By Public Transport
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Bus from Kandy</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Take a bus from Kandy to Teldeniya (about 1.5 hours). From Teldeniya, you can hire a 
                        three-wheeler or taxi for the final 10 km to the dam.
                      </p>
                      <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded text-sm">
                        <strong>Cost:</strong> Bus ~100 LKR, Three-wheeler ~800-1000 LKR
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Organized Tours</h4>
                      <p className="text-sm text-muted-foreground">
                        Many tour operators in Kandy offer day trips to Victoria Dam, often combined with 
                        visits to nearby tea factories or other attractions.
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Users className="h-5 w-5 text-purple-600" />
                      Travel Tips
                    </h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>GPS coordinates: 7.2167° N, 80.7833° E</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Fuel up before leaving Kandy - limited stations on the route</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Road can be foggy early morning - drive carefully</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Parking available near the dam - usually free</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Practical Information */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Practical Information</CardTitle>
              <CardDescription>Everything you need to know before you go</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">What to Bring</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Camera className="h-4 w-4 text-blue-600" />
                      <span>Camera with extra batteries (cold weather drains them faster)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <TreePine className="h-4 w-4 text-green-600" />
                      <span>Comfortable walking shoes with good grip</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Thermometer className="h-4 w-4 text-orange-600" />
                      <span>Layers of clothing (can be cool, especially early morning)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Waves className="h-4 w-4 text-blue-600" />
                      <span>Light rain jacket or umbrella</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mountain className="h-4 w-4 text-gray-600" />
                      <span>Snacks and water (limited facilities nearby)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Info className="h-4 w-4 text-purple-600" />
                      <span>Sunscreen and hat (UV is stronger at altitude)</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-4">Safety & Guidelines</h3>
                  <div className="space-y-3">
                    <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold text-red-700 dark:text-red-300 mb-2 flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4" />
                        Important Safety Notes
                      </h4>
                      <ul className="text-sm space-y-1">
                        <li>• Don&apos;t climb on dam structures - it&apos;s dangerous and prohibited</li>
                        <li>• Stay away from the spillway area, especially during water releases</li>
                        <li>• Water levels can change rapidly - don&apos;t get too close to the edge</li>
                        <li>• Weather can change quickly in the mountains</li>
                      </ul>
                    </div>
                    
                    <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Good to Know</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Entry is usually free</li>
                        <li>• Best cell phone coverage is on higher ground</li>
                        <li>• Nearest restaurants are in Teldeniya town</li>
                        <li>• Public restrooms are limited - plan accordingly</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Nearby Attractions */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Make It a Full Day Trip</CardTitle>
              <CardDescription>Other attractions near Victoria Dam</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <TreePine className="h-5 w-5 text-green-600" />
                      Tea Factories
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Several tea estates near Victoria Dam offer factory tours where you can see how Ceylon tea 
                      is processed, from fresh leaf to finished product.
                    </p>
                    <p className="text-xs text-blue-600">Distance: 5-15 km from dam</p>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Mountain className="h-5 w-5 text-blue-600" />
                      Hunnasgiriya Mountain
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      A popular hiking destination with panoramic views of the surrounding countryside. 
                      The trail is moderately challenging and takes about 2-3 hours.
                    </p>
                    <p className="text-xs text-blue-600">Distance: 25 km from dam</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Waves className="h-5 w-5 text-blue-600" />
                      Mahaweli River
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Follow the Mahaweli River downstream from the dam for scenic spots, small villages, 
                      and great bird watching opportunities.
                    </p>
                    <p className="text-xs text-blue-600">Distance: Along the dam area</p>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Users className="h-5 w-5 text-purple-600" />
                      Local Villages
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Visit authentic Sri Lankan hill country villages to experience local life, 
                      traditional farming, and warm hospitality.
                    </p>
                    <p className="text-xs text-blue-600">Distance: 10-20 km from dam</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Final Tips */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Final Thoughts on Visiting Victoria Dam</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose max-w-none">
                <p className="text-lg leading-relaxed mb-4">
                  Victoria Dam isn&apos;t just another tourist destination - it&apos;s a place where human achievement meets natural beauty 
                  in the most spectacular way. Whether you&apos;re interested in engineering marvels, photography, or just want to 
                  experience some of Sri Lanka&apos;s most stunning scenery, this place delivers.
                </p>
                <p className="mb-4">
                  The best part? It&apos;s not overrun with tourists yet. You can still have those magical moments of standing alone 
                  on the dam wall, listening to the water and wind, surrounded by nothing but green hills and blue sky. It&apos;s 
                  the kind of place that makes you slow down and appreciate the simple beauty of the world.
                </p>
                <p className="mb-4">
                  Remember, Victoria Dam is more than just a photo opportunity (though you&apos;ll definitely get some amazing shots). 
                  It&apos;s a chance to see how human ingenuity can work with nature rather than against it. It&apos;s a reminder of Sri Lanka&apos;s 
                  incredible natural beauty and the warm hospitality of its people.
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <p className="font-semibold mb-2">Ready to Visit?</p>
                  <p className="text-sm">
                    Pack your camera, bring comfortable shoes, and prepare to be amazed. Victoria Dam is waiting to show you 
                    one of Sri Lanka&apos;s best-kept secrets. Trust me, you&apos;ll be planning your return visit before you even leave!
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
