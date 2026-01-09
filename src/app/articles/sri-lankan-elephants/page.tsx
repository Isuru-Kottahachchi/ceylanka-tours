"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Ruler,
  Weight,
  Heart,
  TreePine,
  Droplets,
  Users,
} from "lucide-react"
import { useState } from "react"


const elephantImages = [
  {
    src: "/Elephant-fam.jpg",
    alt: "Sri Lankan elephants in Yala National Park",
    caption: "A family of Sri Lankan elephants in Yala National Park"
  },
  {
    src: "/Wilpattu.jpeg",
    alt: "Elephant in Wilpattu National Park",
    caption: "Majestic elephant in Wilpattu National Park"
  },
  {
    src: "/placeholder.jpg",
    alt: "Baby elephant with mother",
    caption: "Baby elephant staying close to its mother"
  },
  {
    src: "/placeholder.jpg",
    alt: "Elephant feeding",
    caption: "Sri Lankan elephant feeding on grass and leaves"
  },
  {
    src: "/placeholder.jpg",
    alt: "Elephant herd bathing",
    caption: "Elephant herd cooling off in a water hole"
  }
]

function ImageCarousel() {
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % elephantImages.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + elephantImages.length) % elephantImages.length)
  }

  return (
    <div className="relative w-full h-96 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
      <Image
        src={elephantImages[currentImage].src}
        alt={elephantImages[currentImage].alt}
        fill
        className="object-cover"
        priority
      />

      {/* Navigation buttons */}
      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
        aria-label="Previous image"
      >
        <ArrowLeft className="h-5 w-5" />
      </button>

      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
        aria-label="Next image"
      >
        <ArrowRight className="h-5 w-5" />
      </button>

      {/* Image indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {elephantImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-3 h-3 rounded-full transition-all ${index === currentImage
              ? "bg-white"
              : "bg-white/50 hover:bg-white/75"
              }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>

      {/* Caption */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
        <p className="text-sm text-center">{elephantImages[currentImage].caption}</p>
      </div>
    </div>
  )
}

export default function SriLankanElephantsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-green-600 to-green-800 dark:from-green-800 dark:to-green-900">
        <div className="absolute inset-0 bg-black/30" />
        <Image
          src="/Thunpath-rana.jpg"
          alt="Sri Lankan elephants in their natural habitat"
          fill
          className="object-cover"
          priority
        />
        <div className="relative max-w-6xl mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
              Sri Lankan Elephants
            </h1>
            <p className="text-xl md:text-2xl mb-6 drop-shadow">
              The Gentle Giants of Asia
            </p>
            <Badge className="bg-green-600 text-white text-lg px-4 py-2">
              Elephas maximus maximus
            </Badge>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-8">
          <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-blue-600 dark:hover:text-blue-400">Blog</Link>
          <span>/</span>
          <span className="text-gray-900 dark:text-gray-100">Sri Lankan Elephants</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Carousel */}
            <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardContent className="p-6">
                <ImageCarousel />
              </CardContent>
            </Card>

            {/* Quick Facts - Mobile View */}
            <div className="block lg:hidden">
              <Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-4">Quick Facts</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-blue-800 dark:text-blue-200">Scientific Name:</span>
                      <span className="text-blue-900 dark:text-blue-100 font-medium">Elephas maximus maximus</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-800 dark:text-blue-200">Population:</span>
                      <span className="text-blue-900 dark:text-blue-100 font-medium">~7,500</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-800 dark:text-blue-200">Status:</span>
                      <span className="text-red-600 dark:text-red-400 font-medium">Endangered</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-800 dark:text-blue-200">Lifespan:</span>
                      <span className="text-blue-900 dark:text-blue-100 font-medium">60-70 years</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-800 dark:text-blue-200">Height:</span>
                      <span className="text-blue-900 dark:text-blue-100 font-medium">8-10 feet</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-800 dark:text-blue-200">Weight:</span>
                      <span className="text-blue-900 dark:text-blue-100 font-medium">4,000-5,500 kg</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Species Introduction */}
            <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                  Species of Elephants in the World
                </h2>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  First of all, let’s take a brief look at the elephant species in the world. If you only know African and Asian elephants as the species of elephants, you are partially correct. Actually, there are three species of elephants: African savanna elephants, African forest elephants, and Asian elephants.</p>
                <ul>
                  <li className="mb-2"><Heart className="inline h-5 w-5 text-red-500 mr-2" /><b>African Savanna Elephant (Loxodonta africana):</b> The largest land animal on Earth, known for its large ears and tusks.</li>
                  <li className="mb-2"><Heart className="inline h-5 w-5 text-red-500 mr-2" /><b>African Forest Elephant (Loxodonta cyclotis):</b> Smaller than the savanna elephant, adapted to life in dense forests.</li>
                  <li className="mb-2"><Heart className="inline h-5 w-5 text-red-500 mr-2" /><b>Asian Elephant (Elephas maximus):</b> Found in various parts of Asia, including Sri Lanka, known for its smaller ears and domed head.</li>
                </ul>
                <p>Asian Elephants have a few subspecies like <b>Sri Lankan elephant (Elephas maximus maximus)</b>, <b>Indian Elephant (Elephas maximus indicus)</b>, and <b>Sumatran Elephant (Elephas maximus sumatranus)</b>.</p><br />
                <Button> Asian Elephants vs African Elephants</Button>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                  About Sri Lankan Elephants
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Sri Lankan elephants are a special type of Asian elephant that live only in Sri Lanka.
                  They are the largest animals on the island and are bigger than any other subspecies of Asian elephants.
                  They are also very important to Sri Lankan culture and nature.
                  These gentle giants have lived in Sri Lanka for thousands of years and are loved by people all over the world.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Scientists call them &quot;Elephas maximus maximus&quot; which means they are the biggest type of Asian elephant.
                  They are different from African elephants because they are smaller and have smaller ears.
                  Only some male Sri Lankan elephants have tusks, while most females do not have them at all.
                </p>
              </CardContent>
            </Card>

            {/* Physical Characteristics */}
            <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Size and Physical Features
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="flex items-center space-x-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <Ruler className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-gray-100">Height</h3>
                      <p className="text-gray-700 dark:text-gray-300">8-10 feet (2.5-3 meters)</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <Weight className="h-8 w-8 text-green-600 dark:text-green-400" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-gray-100">Weight</h3>
                      <p className="text-gray-700 dark:text-gray-300">4,000-5,500 kg (8,800-12,100 lbs)</p>
                    </div>
                  </div>
                </div>

                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                    <span><strong>Skin:</strong> Thick, gray skin with patches of pink on ears, trunk, and face</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                    <span><strong>Ears:</strong> Smaller than African elephants, shaped like the island of Sri Lanka</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                    <span><strong>Trunk:</strong> Very strong with 40,000 muscles, used for breathing, drinking, and picking things up</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                    <span><strong>Tusks:</strong> Only some males have tusks, most females do not</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                    <span><strong>Feet:</strong> Big, round feet with soft pads that help them walk quietly</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Lifespan and Life Cycle */}
            <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Lifespan and Life Cycle
                </h2>

                <div className="flex items-center space-x-3 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg mb-6">
                  <Clock className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100">Average Lifespan</h3>
                    <p className="text-gray-700 dark:text-gray-300">60-70 years in the wild</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Baby Elephant (0-2 years)</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Baby elephants are called calves. They weigh about 100 kg when born and stay very close to their mothers.
                      They drink milk for the first 2 years and learn everything from their family.
                    </p>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4">
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Young Elephant (2-15 years)</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Young elephants learn to find food and water. They play with other young elephants and
                      practice important skills they will need when they grow up.
                    </p>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-4">
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Adult Elephant (15-50 years)</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Adult elephants can have babies and are fully grown. Males often live alone or in small groups,
                      while females stay with their family groups.
                    </p>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-4">
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Old Elephant (50+ years)</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Older elephants are very wise and help lead their families. They know where to find water during dry times
                      and remember important paths through the forest.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Behavior and Social Structure */}
            <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Behavior and Family Life
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="flex items-center space-x-3 p-4 bg-pink-50 dark:bg-pink-900/20 rounded-lg">
                    <Heart className="h-8 w-8 text-pink-600 dark:text-pink-400" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-gray-100">Family Groups</h3>
                      <p className="text-gray-700 dark:text-gray-300">Led by the oldest female</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                    <Users className="h-8 w-8 text-yellow-600 dark:text-yellow-400" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-gray-100">Group Size</h3>
                      <p className="text-gray-700 dark:text-gray-300">5-20 elephants</p>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Amazing Elephant Facts:</h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start space-x-2">
                    <span className="text-green-600 dark:text-green-400 mt-1">•</span>
                    <span>Elephants are very smart and can remember things for many years</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-600 dark:text-green-400 mt-1">•</span>
                    <span>They can feel sad when a family member dies and may visit the bones</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-600 dark:text-green-400 mt-1">•</span>
                    <span>Baby elephants can walk within hours of being born</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-600 dark:text-green-400 mt-1">•</span>
                    <span>They make many different sounds to talk to each other, including sounds we cannot hear</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-600 dark:text-green-400 mt-1">•</span>
                    <span>Elephants can swim very well and love to play in water</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-600 dark:text-green-400 mt-1">•</span>
                    <span>They sleep only 3-4 hours per day, mostly while standing up</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Habitat and Diet */}
            <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Where They Live and What They Eat
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="flex items-center space-x-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <TreePine className="h-8 w-8 text-green-600 dark:text-green-400" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-gray-100">Habitat</h3>
                      <p className="text-gray-700 dark:text-gray-300">Forests and grasslands</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <Droplets className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-gray-100">Water Needs</h3>
                      <p className="text-gray-700 dark:text-gray-300">150-200 liters per day</p>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Diet and Feeding:</h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300 mb-6">
                  <li className="flex items-start space-x-2">
                    <span className="text-green-600 dark:text-green-400 mt-1">•</span>
                    <span>Elephants eat plants only (they are herbivores)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-600 dark:text-green-400 mt-1">•</span>
                    <span>They eat 150-300 kg of food every day</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-600 dark:text-green-400 mt-1">•</span>
                    <span>Favorite foods include grass, leaves, bark, fruits, and roots</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-600 dark:text-green-400 mt-1">•</span>
                    <span>They spend 16-18 hours a day looking for food and eating</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-600 dark:text-green-400 mt-1">•</span>
                    <span>They help plant new trees by spreading seeds in their droppings</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Important Places in Sri Lanka:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Yala National Park</h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">Best place to see wild elephants in Sri Lanka</p>
                  </div>
                  <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Udawalawe National Park</h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">Famous for large elephant herds</p>
                  </div>
                  <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Minneriya National Park</h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">Home to &quot;The Gathering&quot; - hundreds of elephants</p>
                  </div>
                  <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Wilpattu National Park</h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">Oldest national park with elephant families</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Conservation */}
            <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Protecting Sri Lankan Elephants
                </h2>

                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-6">
                  <h3 className="font-semibold text-red-800 dark:text-red-200 mb-2">Conservation Status: Endangered</h3>
                  <p className="text-red-700 dark:text-red-300 text-sm">
                    There are only about 7,500 Sri Lankan elephants left in the wild. They need our help to survive.
                  </p>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Why Elephants Are In Danger:</h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300 mb-6">
                  <li className="flex items-start space-x-2">
                    <span className="text-red-600 dark:text-red-400 mt-1">•</span>
                    <span>People cut down forests to build houses and farms</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-red-600 dark:text-red-400 mt-1">•</span>
                    <span>Elephants and people sometimes fight when elephants look for food in villages</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-red-600 dark:text-red-400 mt-1">•</span>
                    <span>Some people hunt elephants for their tusks</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-red-600 dark:text-red-400 mt-1">•</span>
                    <span>Climate change affects their food and water sources</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">How We Can Help:</h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start space-x-2">
                    <span className="text-green-600 dark:text-green-400 mt-1">•</span>
                    <span>Support national parks and wildlife protection</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-600 dark:text-green-400 mt-1">•</span>
                    <span>Visit elephants in their natural homes (eco-tourism)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-600 dark:text-green-400 mt-1">•</span>
                    <span>Learn about elephants and teach others</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-600 dark:text-green-400 mt-1">•</span>
                    <span>Support organizations that help elephants</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-600 dark:text-green-400 mt-1">•</span>
                    <span>Never buy things made from elephant tusks</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Cultural Significance */}
            <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Elephants in Sri Lankan Culture
                </h2>

                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  Elephants are very special in Sri Lankan culture. They appear in religious festivals,
                  on money, and in many stories. The most famous elephant festival is the Esala Perahera
                  in Kandy, where decorated elephants carry sacred items in a beautiful parade.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Cultural Importance:</h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start space-x-2">
                    <span className="text-yellow-600 dark:text-yellow-400 mt-1">•</span>
                    <span>Symbol of power, wisdom, and good luck</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-yellow-600 dark:text-yellow-400 mt-1">•</span>
                    <span>Important in Buddhist and Hindu religions</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-yellow-600 dark:text-yellow-400 mt-1">•</span>
                    <span>Featured in traditional art, stories, and dances</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-yellow-600 dark:text-yellow-400 mt-1">•</span>
                    <span>Represent the connection between humans and nature</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Facts - Desktop View */}
            <div className="hidden lg:block">
              <Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-4">Quick Facts</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-blue-800 dark:text-blue-200">Scientific Name:</span>
                      <span className="text-blue-900 dark:text-blue-100 font-medium">Elephas maximus maximus</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-800 dark:text-blue-200">Population:</span>
                      <span className="text-blue-900 dark:text-blue-100 font-medium">~7,500</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-800 dark:text-blue-200">Status:</span>
                      <span className="text-red-600 dark:text-red-400 font-medium">Endangered</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-800 dark:text-blue-200">Lifespan:</span>
                      <span className="text-blue-900 dark:text-blue-100 font-medium">60-70 years</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-800 dark:text-blue-200">Height:</span>
                      <span className="text-blue-900 dark:text-blue-100 font-medium">8-10 feet</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-800 dark:text-blue-200">Weight:</span>
                      <span className="text-blue-900 dark:text-blue-100 font-medium">4,000-5,500 kg</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Best Places to See Elephants */}
            <Card className="bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-green-900 dark:text-green-100 mb-4">
                  Best Places to See Elephants
                </h3>
                <div className="space-y-4">
                  <Link href="/destinations/yala-national-park" className="block">
                    <div className="p-3 bg-white dark:bg-gray-800 rounded-lg hover:shadow-md transition-shadow">
                      <h4 className="font-semibold text-green-800 dark:text-green-200">Yala National Park</h4>
                      <p className="text-green-700 dark:text-green-300 text-sm">Most popular safari destination</p>
                    </div>
                  </Link>

                  <Link href="/destinations/udawalawe-national-park" className="block">
                    <div className="p-3 bg-white dark:bg-gray-800 rounded-lg hover:shadow-md transition-shadow">
                      <h4 className="font-semibold text-green-800 dark:text-green-200">Udawalawe National Park</h4>
                      <p className="text-green-700 dark:text-green-300 text-sm">Best for elephant watching</p>
                    </div>
                  </Link>

                  <Link href="/destinations/minneriya-national-park" className="block">
                    <div className="p-3 bg-white dark:bg-gray-800 rounded-lg hover:shadow-md transition-shadow">
                      <h4 className="font-semibold text-green-800 dark:text-green-200">Minneriya National Park</h4>
                      <p className="text-green-700 dark:text-green-300 text-sm">Famous for &quot;The Gathering&quot;</p>
                    </div>
                  </Link>

                  <Link href="/destinations/wilpattu-national-park" className="block">
                    <div className="p-3 bg-white dark:bg-gray-800 rounded-lg hover:shadow-md transition-shadow">
                      <h4 className="font-semibold text-green-800 dark:text-green-200">Wilpattu National Park</h4>
                      <p className="text-green-700 dark:text-green-300 text-sm">Oldest national park</p>
                    </div>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Related Articles */}
            <Card className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">Related Articles</h3>
                <div className="space-y-3">
                  <Link href="/blog/wild-safari-parks-in-srilanka" className="block text-blue-600 dark:text-blue-400 hover:underline">
                    Wild Safari Parks in Sri Lanka
                  </Link>
                  <Link href="/blog/wildlife-conservation" className="block text-blue-600 dark:text-blue-400 hover:underline">
                    Wildlife Conservation in Sri Lanka
                  </Link>
                  <Link href="/blog/responsible-tourism" className="block text-blue-600 dark:text-blue-400 hover:underline">
                    Responsible Wildlife Tourism
                  </Link>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <Link href="/articles">
            <Button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 h-12 cursor-pointer">
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Articles</span>
            </Button>
          </Link>

          <Link href="/destinations/yala-national-park">
            <Button className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 h-12 cursor-pointer">
              <span>Visit Yala National Park</span>
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}