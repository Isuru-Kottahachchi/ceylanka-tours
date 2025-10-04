"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  ChefHat, 
  Utensils, 
  Coffee, 
  Fish, 
  Clock, 
  MapPin, 
  Star, 
  Heart,
  Leaf,
  Flame,
  Apple,
  Users,
  CheckCircle
} from "lucide-react"

export default function FamousCuisinePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <ChefHat className="h-16 w-16 text-orange-100" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Authentic Sri Lankan Cuisine: A Food Lover&apos;s Paradise
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-orange-100 font-light">
              Discover the exotic flavors, aromatic spices, and unique dishes that make Sri Lankan food unforgettable
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
                <Utensils className="h-4 w-4 mr-2" />
                Traditional Recipes
              </Badge>
              <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
                <Leaf className="h-4 w-4 mr-2" />
                Fresh Spices
              </Badge>
              <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
                <Heart className="h-4 w-4 mr-2" />
                Authentic Flavors
              </Badge>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        
        {/* Introduction */}
        <section className="mb-12">
          <Card className="border-l-4 border-l-orange-500">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                Sri Lankan cuisine is a magnificent blend of flavors that reflects the island&apos;s rich cultural heritage. 
                With influences from South Indian, Arab, Portuguese, Dutch, and British cuisines, Sri Lankan food 
                offers a unique culinary experience that will delight any food lover&apos;s palate.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                What makes Sri Lankan food special is the incredible use of fresh spices like cinnamon, cardamom, 
                cloves, and curry leaves, combined with coconut milk, rice, and fresh seafood. Every dish tells a 
                story of tradition, family recipes passed down through generations, and the warm hospitality of Sri Lankan people.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Must-Try Rice and Curry */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Rice and Curry: The Heart of Sri Lankan Cuisine
          </h2>
          
          <Card className="mb-8 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-amber-200 dark:border-amber-800">
            <CardContent className="p-8">
              <div className="flex items-start gap-6">
                <div className="bg-amber-100 dark:bg-amber-900/50 w-16 h-16 rounded-full flex items-center justify-center">
                  <Utensils className="h-8 w-8 text-amber-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-amber-800 dark:text-amber-200 mb-4">
                    Traditional Rice and Curry Experience
                  </h3>
                  <p className="text-amber-700 dark:text-amber-300 leading-relaxed mb-4">
                    A Sri Lankan rice and curry meal is not just food - it&apos;s a cultural experience! You&apos;ll get a plate
                    of fragrant basmati rice surrounded by 5-8 different curries, each with its own unique flavor profile.
                    This is the daily meal that every Sri Lankan family enjoys, and it&apos;s perfect for sharing and trying
                    multiple flavors at once.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">What You&apos;ll Get:</h4>
                      <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-1">
                        <li>• Steamed white or red rice (base)</li>
                        <li>• Fish or chicken curry (protein)</li>
                        <li>• Dhal curry (lentils)</li>
                        <li>• 3-4 vegetable curries</li>
                        <li>• Coconut sambol (spicy condiment)</li>
                        <li>• Papadums (crispy crackers)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">Perfect For:</h4>
                      <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-1">
                        <li>• First-time visitors to Sri Lanka</li>
                        <li>• People who want to try multiple flavors</li>
                        <li>• Vegetarians (many vegetable options)</li>
                        <li>• Those who love spicy food</li>
                        <li>• Lunch or dinner (served anytime)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Famous Main Dishes */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Iconic Sri Lankan Dishes Foreigners Love
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Kottu Roti */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-red-100 dark:bg-red-900/30 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Utensils className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle className="text-center">Kottu Roti</CardTitle>
                <div className="flex justify-center gap-2">
                  <Badge className="bg-red-100 text-red-800">Street Food</Badge>
                  <Badge className="bg-orange-100 text-orange-800">Spicy</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  The ultimate Sri Lankan street food experience! Chopped roti bread stir-fried with vegetables, 
                  egg, and your choice of chicken, beef, or seafood. The rhythmic chopping sound on the hot griddle 
                  is music to your ears. Each bite delivers a perfect mix of textures and bold flavors.
                </p>
                <div className="text-xs text-muted-foreground">
                  <strong>Best time to try:</strong> Evening street food tours<br/>
                  <strong>Spice level:</strong> Medium to Hot<br/>
                  <strong>Price range:</strong> $2-4 USD
                </div>
              </CardContent>
            </Card>

            {/* Hoppers */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-green-100 dark:bg-green-900/30 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Coffee className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-center">Hoppers (Appa)</CardTitle>
                <div className="flex justify-center gap-2">
                  <Badge className="bg-green-100 text-green-800">Breakfast</Badge>
                  <Badge className="bg-blue-100 text-blue-800">Unique</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Bowl-shaped pancakes made from fermented rice flour and coconut milk. The crispy edges and soft 
                  center create a perfect vessel for curries. Egg hoppers (with an egg cracked in the center) 
                  are incredibly popular with tourists. String hoppers look like noodle nests and are equally delicious.
                </p>
                <div className="text-xs text-muted-foreground">
                  <strong>Best time to try:</strong> Breakfast or dinner<br/>
                  <strong>Spice level:</strong> Mild (depends on curry)<br/>
                  <strong>Price range:</strong> $1-3 USD
                </div>
              </CardContent>
            </Card>

            {/* Fish Ambul Thiyal */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-blue-100 dark:bg-blue-900/30 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Fish className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-center">Fish Ambul Thiyal</CardTitle>
                <div className="flex justify-center gap-2">
                  <Badge className="bg-blue-100 text-blue-800">Seafood</Badge>
                  <Badge className="bg-purple-100 text-purple-800">Traditional</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  A signature sour fish curry from the southern coast. Fresh tuna or other firm fish is cooked with 
                  goraka (a sour fruit), curry leaves, and spices. The tangy, rich flavor is unlike anything you&apos;ll 
                  taste elsewhere. This dish represents the essence of Sri Lankan coastal cuisine.
                </p>
                <div className="text-xs text-muted-foreground">
                  <strong>Best time to try:</strong> Lunch with rice<br/>
                  <strong>Spice level:</strong> Medium<br/>
                  <strong>Price range:</strong> $3-6 USD
                </div>
              </CardContent>
            </Card>

            {/* Lamprais */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-purple-100 dark:bg-purple-900/30 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-center">Lamprais</CardTitle>
                <div className="flex justify-center gap-2">
                  <Badge className="bg-purple-100 text-purple-800">Dutch Colonial</Badge>
                  <Badge className="bg-green-100 text-green-800">Special</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  A complete meal wrapped in banana leaf and baked. Inside you&apos;ll find fragrant rice, multiple curries, 
                  boiled egg, and meat cutlet. This Dutch-influenced dish is perfect for special occasions or when you 
                  want to try multiple flavors in one convenient package.
                </p>
                <div className="text-xs text-muted-foreground">
                  <strong>Best time to try:</strong> Lunch (weekends)<br/>
                  <strong>Spice level:</strong> Medium<br/>
                  <strong>Price range:</strong> $4-7 USD
                </div>
              </CardContent>
            </Card>

            {/* Pol Sambol */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-orange-100 dark:bg-orange-900/30 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Flame className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle className="text-center">Pol Sambol</CardTitle>
                <div className="flex justify-center gap-2">
                  <Badge className="bg-orange-100 text-orange-800">Condiment</Badge>
                  <Badge className="bg-red-100 text-red-800">Very Spicy</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Fresh coconut scraped and mixed with red chilies, onions, lime juice, and salt. This fiery condiment 
                  adds incredible flavor to any meal. Start with a tiny amount - it&apos;s very spicy! Many tourists become 
                  addicted to this simple but amazing side dish.
                </p>
                <div className="text-xs text-muted-foreground">
                  <strong>Best time to try:</strong> With any meal<br/>
                  <strong>Spice level:</strong> Very Hot<br/>
                  <strong>Price range:</strong> $0.50-1 USD
                </div>
              </CardContent>
            </Card>

            {/* Watalappan */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-yellow-100 dark:bg-yellow-900/30 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-6 w-6 text-yellow-600" />
                </div>
                <CardTitle className="text-center">Watalappan</CardTitle>
                <div className="flex justify-center gap-2">
                  <Badge className="bg-yellow-100 text-yellow-800">Dessert</Badge>
                  <Badge className="bg-pink-100 text-pink-800">Sweet</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  A traditional coconut custard pudding flavored with jaggery (palm sugar), cardamom, and nutmeg. 
                  This creamy, aromatic dessert melts in your mouth and provides the perfect sweet ending to a spicy meal. 
                  The rich coconut flavor combined with warming spices creates an unforgettable taste.
                </p>
                <div className="text-xs text-muted-foreground">
                  <strong>Best time to try:</strong> After dinner<br/>
                  <strong>Spice level:</strong> Sweet (no heat)<br/>
                  <strong>Price range:</strong> $1-2 USD
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Breakfast Specialties */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Traditional Sri Lankan Breakfast
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-l-4 border-l-green-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Coffee className="h-6 w-6 text-green-600" />
                  Morning Delights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-green-700 dark:text-green-400 mb-2">Kiribath (Milk Rice)</h4>
                    <p className="text-sm text-muted-foreground">
                      Rice cooked in thick coconut milk, cut into diamond shapes and served with lunu miris (onion chili paste). 
                      This is a special breakfast eaten on important days and celebrations. The creamy texture and spicy 
                      accompaniment create a perfect balance.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-700 dark:text-green-400 mb-2">Roti with Curry</h4>
                    <p className="text-sm text-muted-foreground">
                      Flat bread made with flour and coconut, served with dhal curry or fish curry. The roti is soft 
                      and perfect for scooping up the flavorful curries. It&apos;s filling, nutritious, and gives you 
                      energy for a day of exploring.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-700 dark:text-green-400 mb-2">Pittu</h4>
                    <p className="text-sm text-muted-foreground">
                      Steamed cylinders made from rice flour and coconut. This unique breakfast item has a distinctive 
                      texture and is served with coconut milk and curry. The cylindrical shape and layered texture 
                      make it a fun and delicious morning meal.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Utensils className="h-6 w-6 text-blue-600" />
                  Bread and Beverages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-blue-700 dark:text-blue-400 mb-2">Pan Rolls and Pastries</h4>
                    <p className="text-sm text-muted-foreground">
                      Fresh bread rolls filled with fish, chicken, or vegetable curry. These are perfect for breakfast 
                      on the go. The crispy exterior and flavorful filling make them extremely popular with both 
                      locals and tourists.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-700 dark:text-blue-400 mb-2">Ceylon Tea</h4>
                    <p className="text-sm text-muted-foreground">
                      World-famous black tea grown in the central highlands. Served strong with milk and sugar, 
                      it&apos;s the perfect accompaniment to any Sri Lankan breakfast. The rich, full-bodied flavor 
                      will wake up your senses.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-700 dark:text-blue-400 mb-2">King Coconut Water</h4>
                    <p className="text-sm text-muted-foreground">
                      Fresh, sweet water from orange-colored king coconuts. This natural drink is incredibly refreshing 
                      and hydrating, especially in the tropical climate. It&apos;s the perfect healthy start to your day 
                      and helps with the spicy food.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Regional Specialties */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Regional Food Specialties
          </h2>
          
          <div className="space-y-8">
            <Card className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-blue-200 dark:border-blue-800">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-blue-100 dark:bg-blue-900/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Fish className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-3">Coastal Cuisine</h3>
                    <div className="space-y-2 text-sm text-blue-700 dark:text-blue-300">
                      <p><strong>Galle & Southern Coast:</strong> Fresh seafood curries, crab curry, prawns with coconut</p>
                      <p><strong>Negombo:</strong> Lagoon crab, fresh fish varieties, coconut-based curries</p>
                      <p><strong>Trincomalee:</strong> Unique Tamil-influenced seafood dishes, fish and rice combinations</p>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-green-100 dark:bg-green-900/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Leaf className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-3">Hill Country</h3>
                    <div className="space-y-2 text-sm text-green-700 dark:text-green-300">
                      <p><strong>Kandy:</strong> Traditional Kandyan cuisine, special rice varieties, temple food</p>
                      <p><strong>Nuwara Eliya:</strong> Tea estate cuisine, British-influenced dishes, highland vegetables</p>
                      <p><strong>Ella:</strong> Mountain herbs, unique vegetable curries, cool climate specialties</p>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-orange-100 dark:bg-orange-900/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-8 w-8 text-orange-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-orange-800 dark:text-orange-200 mb-3">Northern Cuisine</h3>
                    <div className="space-y-2 text-sm text-orange-700 dark:text-orange-300">
                      <p><strong>Jaffna:</strong> Tamil cuisine, crab curry, unique spice blends, palmyra-based dishes</p>
                      <p><strong>Mannar:</strong> Seafood specialties, traditional fishing community recipes</p>
                      <p><strong>Anuradhapura:</strong> Ancient royal cuisine traditions, special rice preparations</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Food Experience Tips */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Essential Food Experience Tips for Foreigners
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-l-4 border-l-red-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Flame className="h-6 w-6 text-red-600" />
                  Spice Level Guide
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-red-700 dark:text-red-400 mb-2">For Beginners:</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Start with mild dishes like plain rice, dhal curry, and coconut sambol (just a tiny bit). 
                      Ask for &quot;less spicy&quot; when ordering. Most restaurants are happy to adjust spice levels for tourists.
                    </p>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Safe options: Fried rice, noodles, grilled fish</li>
                      <li>• Always have yogurt or coconut water nearby</li>
                      <li>• Don&apos;t drink water immediately - it spreads the heat</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-700 dark:text-red-400 mb-2">Building Tolerance:</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Gradually try spicier dishes over several days. Your taste buds will adapt! Sri Lankan cuisine 
                      has different types of heat - some burn, others are aromatic and warm.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-6 w-6 text-green-600" />
                  Dining Etiquette
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-green-700 dark:text-green-400 mb-2">Eating Style:</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Many Sri Lankans eat with their right hand, mixing rice and curry together. Don&apos;t worry - 
                      utensils are always available for tourists. Sharing food is common and shows friendship.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-700 dark:text-green-400 mb-2">Best Practices:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Try a bit of everything on your plate</li>
                      <li>• It&apos;s okay to ask what ingredients are in a dish</li>
                      <li>• Finishing your food shows appreciation</li>
                      <li>• Tipping 10% is appreciated but not mandatory</li>
                      <li>• Take photos - locals love sharing their food culture!</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Where to Experience Authentic Food */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Where to Experience Authentic Sri Lankan Food
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-purple-100 dark:bg-purple-900/30 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-lg">Local Family Restaurants</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Small family-run establishments serve the most authentic home-style cooking. Look for places where 
                  locals eat - that&apos;s always a good sign! These restaurants often have recipes passed down through generations.
                </p>
                <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
                  Most Authentic
                </Badge>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-orange-100 dark:bg-orange-900/30 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle className="text-lg">Street Food Markets</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Evening food markets and street stalls offer fresh, affordable, and delicious options. Pettah Market 
                  in Colombo, Galle Face Green, and local town markets are perfect for food adventures.
                </p>
                <Badge className="bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300">
                  Budget Friendly
                </Badge>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-blue-100 dark:bg-blue-900/30 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Cooking Classes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Join cooking classes in Kandy, Galle, or Colombo to learn how to make your favorite dishes. 
                  You&apos;ll visit spice gardens, local markets, and cook with experienced chefs who share family secrets.
                </p>
                <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                  Interactive Experience
                </Badge>
              </CardContent>
            </Card>
          </div>

          {/* Food Tour Options */}
          <Card className="mt-8 border-l-4 border-l-cyan-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-6 w-6 text-cyan-600" />
                Recommended Food Tour Itinerary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-cyan-700 dark:text-cyan-400 mb-2">Morning (8 AM - 11 AM)</h4>
                    <p className="text-sm text-muted-foreground">
                      Start with traditional breakfast: hoppers and tea at a local café. Visit a spice market to
                      understand the ingredients. Try kiribath with lunu miris if it&apos;s available.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-700 dark:text-cyan-400 mb-2">Lunch (12 PM - 2 PM)</h4>
                    <p className="text-sm text-muted-foreground">
                      Experience a complete rice and curry meal at a family restaurant. Don&apos;t miss the fish curry, 
                      dhal, and coconut sambol. Try different vegetable curries to understand the flavor diversity.
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-cyan-700 dark:text-cyan-400 mb-2">Afternoon (3 PM - 5 PM)</h4>
                    <p className="text-sm text-muted-foreground">
                      Snack time with short eats: cutlets, rolls, and fresh fruit. Visit a tea estate or tea shop 
                      to learn about Ceylon tea and enjoy it with local biscuits.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-700 dark:text-cyan-400 mb-2">Evening (6 PM - 8 PM)</h4>
                    <p className="text-sm text-muted-foreground">
                      Street food adventure: fresh kottu roti, grilled seafood, and tropical fruits. End with 
                      watalappan or curd with treacle for a sweet finish.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Food Safety and Health */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Food Safety Tips for International Visitors
          </h2>
          
          <Card className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border-green-200 dark:border-green-800">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" />
                    Safe Eating Practices
                  </h3>
                  <ul className="space-y-3 text-sm text-green-700 dark:text-green-300">
                    <li className="flex items-start gap-2">
                      <Star className="h-4 w-4 mt-0.5 text-green-600" />
                      Choose restaurants that are busy with locals - high turnover means fresh food
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="h-4 w-4 mt-0.5 text-green-600" />
                      Drink bottled water or properly boiled water, especially in rural areas
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="h-4 w-4 mt-0.5 text-green-600" />
                      Avoid raw vegetables and salads at street stalls; cooked food is generally safer
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="h-4 w-4 mt-0.5 text-green-600" />
                      Fresh fruits that you can peel yourself (bananas, oranges) are always safe
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="h-4 w-4 mt-0.5 text-green-600" />
                      Hot, freshly cooked food is your safest bet for authentic flavors
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-4 flex items-center gap-2">
                    <Apple className="h-5 w-5" />
                    Health Benefits
                  </h3>
                  <ul className="space-y-3 text-sm text-blue-700 dark:text-blue-300">
                    <li className="flex items-start gap-2">
                      <Heart className="h-4 w-4 mt-0.5 text-blue-600" />
                      Sri Lankan spices have natural antibacterial and digestive properties
                    </li>
                    <li className="flex items-start gap-2">
                      <Heart className="h-4 w-4 mt-0.5 text-blue-600" />
                      Coconut-based dishes provide healthy fats and natural electrolytes
                    </li>
                    <li className="flex items-start gap-2">
                      <Heart className="h-4 w-4 mt-0.5 text-blue-600" />
                      Fresh seafood is rich in omega-3 fatty acids and high-quality protein
                    </li>
                    <li className="flex items-start gap-2">
                      <Heart className="h-4 w-4 mt-0.5 text-blue-600" />
                      Traditional cooking methods preserve nutrients and enhance flavor
                    </li>
                    <li className="flex items-start gap-2">
                      <Heart className="h-4 w-4 mt-0.5 text-blue-600" />
                      Many dishes are naturally gluten-free and use whole, unprocessed ingredients
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Conclusion */}
        <section className="mb-12">
          <Card className="border-l-4 border-l-orange-500 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-bold text-orange-800 dark:text-orange-200 mb-4">
                Your Culinary Adventure Awaits!
              </h3>
              <p className="text-lg leading-relaxed text-orange-700 dark:text-orange-300 mb-6">
                Sri Lankan cuisine is more than just food - it&apos;s a journey through culture, history, and tradition. 
                Every meal tells a story, every spice has meaning, and every shared dish creates connections with 
                the warm and welcoming Sri Lankan people.
              </p>
              <p className="text-orange-700 dark:text-orange-300">
                Come hungry, leave with unforgettable memories and perhaps a few new favorite dishes that will 
                make you want to return to this beautiful island again and again!
              </p>
            </CardContent>
          </Card>
        </section>

      </div>
    </main>
  )
}