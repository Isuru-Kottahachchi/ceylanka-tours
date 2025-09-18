"use client"

import Image from "next/image"
import { useState } from "react"
import { Clock, MapPin, CheckCircle, Star, Calendar, Waves, Anchor, TriangleAlert, ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface ImageData {
  src: string;
  alt: string;
  title?: string;
}




export default function TrincomaleeTravelGuide() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [koneswaramIndex, setKoneswaramIndex] = useState(0);
  const [harbourIndex, setHarbourIndex] = useState(0);
  const [nilaveliIndex, setNilaveliIndex] = useState(0);
  const [pigeonIslandIndex, setPigeonIslandIndex] = useState(0);
  const [kanniyaIndex, setKanniyaIndex] = useState(0);
  const [girihanduIndex, setGirihanduIndex] = useState(0);
  const [arisiMaleIndex, setArisiMaleIndex] = useState(0);
  // Sunrise carousel state
  const sunriseImages: ImageData[] = [
    {
      src: "/Sunrise-in-trinco.jpeg",
      alt: "Beautiful sunrise over Trincomalee beach with golden light reflecting on the ocean waves",
      title: "Trincomalee Beach Sunrise"
    },
    {
    src: "/Sunrise-in-trinco1.jpeg",
      alt: "Sunrise with palm trees and calm sea at Nilaveli Beach",
      title: "Trinco Beach Sunrise"
    },
  ];
  const [sunriseIndex, setSunriseIndex] = useState(0);

  const carouselImages = [
    {
      src: "/Trinco.jpeg",
      alt: "Aerial view of Trincomalee showing the beautiful coastline and harbor",
      title: "Trincomalee Harbor & Coastline"
    },
    {
      src: "/Koneshwaram.jpeg",
      alt: "Koneswaram Temple perched on Swami Rock overlooking the Indian Ocean",
      title: "Koneswaram Temple on Swami Rock"
    },
    {
      src: "/Pasikuda.jpeg",
      alt: "Crystal clear turquoise waters and white sand beaches of Pasikuda",
      title: "Pasikuda Beach Paradise"
    },
    {
      src: "/Pasikudabeach.jpeg",
      alt: "Pristine shoreline with palm trees and shallow clear waters perfect for swimming",
      title: "Pasikuda Beach Shoreline"
    },
    {
      src: "/PasikudaCover.jpeg",
      alt: "Stunning sunset view over Pasikuda with golden reflections on calm waters",
      title: "Pasikuda Sunset Views"
    },
    {
      src: "/Sea-turtle-bentota.jpeg",
      alt: "Sea turtle swimming in crystal clear waters near Trincomalee coast",
      title: "Marine Life & Sea Turtles"
    }
  ];

  // Individual attraction image collections
  const koneswaramImages = [
    {
      src: "/Koneshwaram.jpeg",
      alt: "Koneswaram Temple perched on Swami Rock with 7-tiered gopuram",
      title: "Temple on Swami Rock"
    },
    {
      src: "/Trinco.jpeg",
      alt: "Aerial view showing Koneswaram Temple's clifftop location",
      title: "Clifftop Temple Complex"
    },
    {
      src: "/Temple-of-the-tooth.jpeg",
      alt: "Traditional Sri Lankan temple architecture and religious ceremonies",
      title: "Sacred Temple Traditions"
    }
  ];

  const harbourImages = [
    {
      src: "/Trinco.jpeg",
      alt: "Trincomalee Natural Harbour - world's 5th largest natural harbor",
      title: "Natural Harbour Overview"
    },
    {
      src: "/Ramparts_in_galle.jpeg",
      alt: "Historic coastal fortifications and harbor views",
      title: "Historic Harbor Defenses"
    }
  ];

  const nilaveliImages = [
    {
      src: "/Nilaveli-beach.jpg",
      alt: "Nilaveli Beach with crystal clear turquoise waters",
      title: "Nilaveli Beach Paradise"
    },
    {
      src: "/Nilaveli-beach1.jpg",
      alt: "Pristine Nilaveli coastline with white sand",
      title: "White Sand Coastline"
    },
    {
      src: "/Nilaveli-beach2.jpg",
      alt: "Stunning sunset views over Nilaveli Beach",
      title: "Magical Beach Sunsets"
    },
    {
      src: "/Nilaveli-beach3.jpg",
      alt: "Beautiful tropical beach with palm trees and clear waters",
      title: "Tropical Beach Paradise"
    }
  ];

  const pigeonIslandImages = [
    {
      src: "/Pigeon-island.jpg",
      alt: "Marine life around Pigeon Island National Park",
      title: "Marine Biodiversity"
    },
    {
      src: "/Pigeon-island1.webp",
      alt: "Pristine beach environment and coastal nature",
      title: "Untouched Coastal Nature"
    },
    {
      src: "/Pigeon-island2.jpg",
      alt: "Crystal clear waters perfect for snorkeling and diving",
      title: "Snorkeling Paradise"
    },
    {
      src: "/Pigeon-island6.jpg",
      alt: "Crystal clear waters perfect for snorkeling and diving",
      title: "Snorkeling Paradise"
    },
    {
      src: "/Pigeon-island4.jpg",
      alt: "Crystal clear waters perfect for snorkeling and diving",
      title: "Snorkeling Paradise"
    }, 
    {
      src: "/Pigeon-island5.jpg",
      alt: "Crystal clear waters perfect for snorkeling and diving",
      title: "Snorkeling Paradise"
    }


  ];

  const kanniyaImages = [
    {
      src: "/Kanniya-Hot-Springs.jpg",
      alt: "Natural water springs and tropical vegetation",
      title: "Sacred Hot Springs"
    },
    {
      src: "/Kanniya-Hot-Springs1.jpg",
      alt: "Natural springs",
      title: "Sacred Hot Springs"
    }
  ];

  const girihanduImages = [
    {
      src: "/Girihadusaya.jpeg",
      alt: "Girihandu Seya ancient Buddhist stupa on hilltop",
      title: "Ancient Buddhist Stupa"
    },
    {
      src: "/Girihandu-Seya.jpeg",
      alt: "Traditional Sri Lankan Buddhist stupa architecture",
      title: "Buddhist Heritage"
    },
        {
      src: "/Girihandu-Seya1.jpeg",
      alt: "Traditional Sri Lankan Buddhist stupa architecture",
      title: "Buddhist Heritage"
    },
    {
      src: "/Girihandu-Seya2.jpeg",
      alt: "Sacred Buddhist sites and religious significance",
      title: "Sacred Buddhist Sites"
    },
      {
      src: "/Girihandu-Seya3.jpeg",
      alt: "Sacred Buddhist sites and religious significance",
      title: "Sacred Buddhist Sites"
    }
  ];

  const arisiMaleImages = [
    {
      src: "/Arisimale.jpeg",
      alt: "Arisi Male Beach unique coastal formations",
      title: "Unique Beach Formations"
    },
    {
      src: "/Waligama.jpg",
      alt: "Dramatic coastal landscapes and rocky shores",
      title: "Dramatic Coastline"
    },
    {
      src: "/Pasikuda.jpeg",
      alt: "Secluded beach paradise with pristine waters",
      title: "Secluded Beach Paradise"
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  // Helper function to create attraction-specific carousel
  const createAttractionCarousel = (images: ImageData[], currentIndex: number, setIndex: (index: number) => void) => {
    if (images.length <= 1) return null;

    return (
      <div className="relative mb-4">
        <div className="relative h-[300px] rounded-lg overflow-hidden">
          <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            fill
            className="object-cover transition-all duration-500 ease-in-out cursor-zoom-in"
            style={{ objectPosition: 'center' }}
            onClick={() => setShowModal(true)}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />

          {/* Modal for full-size image */}
          {showModal && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
              onClick={() => setShowModal(false)}
            >
              <div
                className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center"
                onClick={e => e.stopPropagation()}
              >
                <Image
                  src={images[currentImageIndex].src}
                  alt={images[currentImageIndex].alt}
                  width={900}
                  height={900}
                  className="block w-auto h-auto max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl bg-black"
                  style={{ objectFit: 'contain' }}
                  priority
                />
                <button
                  className="absolute top-2 right-2 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 cursor-pointer"
                  onClick={() => setShowModal(false)}
                  aria-label="Close preview"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          )}
          <button
            onClick={() => setIndex((currentIndex - 1 + images.length) % images.length)}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white/90 text-gray-900 dark:bg-gray-800/80 dark:hover:bg-gray-700 dark:text-white p-1 rounded-full backdrop-blur-sm transition-all duration-200 cursor-pointer shadow-lg border border-white/60 dark:border-gray-700"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            onClick={() => setIndex((currentIndex + 1) % images.length)}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white/90 text-gray-900 dark:bg-gray-800/80 dark:hover:bg-gray-700 dark:text-white p-1 rounded-full backdrop-blur-sm transition-all duration-200 cursor-pointer shadow-lg border border-white/60 dark:border-gray-700"
            aria-label="Next image"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Image Title */}
          <div className="absolute bottom-2 left-2 right-2">
            <h4 className="text-white text-sm font-medium">
              {images[currentIndex].title}
            </h4>
          </div>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center space-x-1 mt-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${index === currentIndex
                ? 'bg-blue-600'
                : 'bg-gray-300 hover:bg-gray-400'
                }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/Trinco.jpeg"
          alt="Stunning aerial view of Trincomalee showing pristine beaches, turquoise waters, and the ancient Koneswaram temple on rocky cliffs"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Trincomalee</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">Sri Lanka&apos;s Eastern Coastal Paradise</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <MapPin className="w-4 h-4 mr-1" />
              Eastern Province
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Anchor className="w-4 h-4 mr-1" />
              World&apos;s 5th Largest Natural Harbor
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Waves className="w-4 h-4 mr-1" />
              Pristine Beaches
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Welcome to Trincomalee: Where History Meets Paradise</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Discover Trincomalee, Sri Lankas best-kept secret on the stunning eastern coast. This ancient port city
              boasts one of the worlds finest natural harbors, pristine white sand beaches, crystal-clear turquoise
              waters, and a rich tapestry of Tamil, Sinhalese, and colonial history spanning over 2,000 years.
            </p>
            <p className="text-lg">
              From the sacred Koneswaram Temple perched dramatically on Swami Rock to the untouched beaches of Nilaveli
              and Uppuveli, from incredible whale watching opportunities to world-class diving and snorkeling,
              Trincomalee offers an authentic Sri Lankan coastal experience away from the crowds of the south and west
              coasts.
            </p>
          </div>
        </section>

        {/* Image Carousel */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Discover Trincomalee&apos;s Beauty</h2>
          <div className="relative w-full max-w-6xl mx-auto">
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
              <Image
                src={carouselImages[currentImageIndex].src}
                alt={carouselImages[currentImageIndex].alt}
                fill
                className="object-cover transition-all duration-500 ease-in-out"
                style={{ objectPosition: 'center' }}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-200"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-200"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image Title */}
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-white text-xl md:text-2xl font-semibold mb-2">
                  {carouselImages[currentImageIndex].title}
                </h3>
              </div>
            </div>

            {/* Dot Indicators */}
            <div className="flex justify-center space-x-2 mt-4">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${index === currentImageIndex
                    ? 'bg-blue-600'
                    : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>

            {/* Thumbnail Strip */}
            <div className="hidden md:flex justify-center space-x-2 mt-4 overflow-x-auto">
              {carouselImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative w-20 h-16 rounded-lg overflow-hidden flex-shrink-0 transition-all duration-200 ${index === currentImageIndex
                    ? 'ring-2 ring-blue-600 ring-offset-2'
                    : 'opacity-70 hover:opacity-100'
                    }`}
                >
                  <Image
                    src={image.src}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                    style={{ objectPosition: 'center' }}
                  />
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Ad Space */}
        <div className="my-8 p-4 bg-gray-50 rounded-lg text-center text-gray-500 border-2 border-dashed border-gray-300">
          [Advertisement Space - 728x90 Leaderboard]
        </div>

        {/* Quick Facts */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" />
                Essential Trincomalee Facts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-500" />
                    <span>
                      <strong>Ancient History:</strong> Over 2,000 years old
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Anchor className="w-4 h-4 text-green-500" />
                    <span>
                      <strong>Harbor Ranking:</strong> World&apos;s 5th largest natural harbor
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Waves className="w-4 h-4 text-purple-500" />
                    <span>
                      <strong>Best Beach Season:</strong> May to September
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-red-500" />
                    <span>
                      <strong>Distance from Colombo:</strong> 257km (5-6 hours)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span>
                      <strong>Famous for:</strong> Whale watching & pristine beaches
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-orange-500" />
                    <span>
                      <strong>Ideal Stay Duration:</strong> 3-5 days
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* How to Get to Trincomalee */}
        <section className="mb-12">
          <Card className="border-blue-200 bg-blue-50/30 dark:border-blue-800 dark:bg-blue-950/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-800 dark:text-blue-200">
                <MapPin className="w-5 h-5" />
                How to Get to Trincomalee
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">By Private Car/Taxi (Most Popular)</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>Distance:</strong> 257km from Colombo</li>
                    <li>• <strong>Duration:</strong> 5-6 hours via A6 highway</li>
                    <li>• <strong>Cost:</strong> $80-120 USD for round trip</li>
                    <li>• <strong>Route:</strong> Colombo → Kurunegala → Dambulla → Habarana → Trincomalee</li>
                    <li>• <strong>Best option:</strong> Comfortable and flexible timing</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">By Bus (Budget Option)</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>Route:</strong> Colombo Central Bus Stand → Trincomalee</li>
                    <li>• <strong>Duration:</strong> 6-7 hours (with stops)</li>
                    <li>• <strong>Cost:</strong> $4-8 USD (air-conditioned buses)</li>
                    <li>• <strong>Frequency:</strong> Multiple departures daily</li>
                    <li>• <strong>Note:</strong> Book intercity express buses for comfort</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">By Train (Scenic Route)</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>Route:</strong> Colombo Fort → Trincomalee (limited service)</li>
                    <li>• <strong>Duration:</strong> 7-8 hours</li>
                    <li>• <strong>Cost:</strong> $3-12 USD depending on class</li>
                    <li>• <strong>Note:</strong> Check schedule as service may be irregular</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">By Air (Fastest)</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>Airport:</strong> China Bay Airport (military, limited civilian use)</li>
                    <li>• <strong>Duration:</strong> 45 minutes flight</li>
                    <li>• <strong>Availability:</strong> Charter flights only</li>
                    <li>• <strong>Alternative:</strong> Fly to Batticaloa, then drive 2 hours</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-3 bg-blue-100 dark:bg-blue-950/50 rounded-lg border-l-4 border-blue-500">
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  <strong>💡 Travel Tips:</strong> Start your journey early morning to avoid traffic and arrive before dark.
                  The road can be challenging in some sections, especially during monsoon season (November-March).
                  Stock up on snacks and water for the journey.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Top Attractions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Must-Visit Attractions in Trincomalee</h2>

          {/* Ad Space */}
          <div className="my-6 p-4 bg-gray-50 rounded-lg text-center text-gray-500 border-2 border-dashed border-gray-300">
            [Advertisement Space - 300x250 Medium Rectangle]
          </div>

          <div className="space-y-8">
            {/* Koneswaram Temple */}
            <Card>
              <CardHeader>
                <CardTitle>1. Koneswaram Temple</CardTitle>
                <CardDescription>Ancient Hindu temple on dramatic clifftop - One of the Pancha Ishwarams</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    {createAttractionCarousel(koneswaramImages, koneswaramIndex, setKoneswaramIndex) || (
                      <div className="relative h-[300px] rounded-lg overflow-hidden">
                        <Image
                          src="/Koneshwaram.jpeg"
                          alt="Koneswaram Temple perched on Swami Rock cliff overlooking the Indian Ocean with colorful gopuram"
                          fill
                          className="object-cover rounded-lg"
                          style={{ objectPosition: 'center' }}
                        />
                      </div>
                    )}
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Rising majestically 130 feet above the churning Indian Ocean on the iconic Swami Rock,
                      Koneswaram Temple stands as one of Sri Lanka&apos;s most sacred and dramatically located temples.
                      This ancient Hindu temple, dedicated to Lord Shiva in his form as Koneshwara (&quot;Lord of the East&quot;),
                      is one of the revered Pancha Ishwarams (five abodes of Shiva) and has been a place of
                      continuous worship for over 2,000 years.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      The temple&apos;s stunning Dravidian architecture features a magnificent 7-tiered gopuram (tower)
                      adorned with intricate sculptures of Hindu deities, mythical creatures, and celestial beings.
                      Ancient chronicles describe this as the legendary &quot;Temple of a Thousand Pillars&quot; (Dakshina
                      Kailasam) before its destruction by Portuguese colonizers in 1624. The current structure,
                      lovingly rebuilt in 1963, maintains the spiritual essence and architectural grandeur.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Over 2,000 years of continuous worship and pilgrimage tradition
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Spectacular sunrise views over the endless Indian Ocean
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Magnificent 7-tiered gopuram with hundreds of intricate carvings
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Sacred to both Hindu and Buddhist communities across Sri Lanka
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Rich historical significance in ancient Tamil and Sanskrit literature
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Extended Historical & Cultural Details */}
                <div className="mt-8 space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/50 rounded-lg border-l-4 border-purple-400">
                      <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-3">Ancient History & Legends</h4>
                      <div className="text-sm text-purple-700 dark:text-purple-300 space-y-2">
                        <p>
                          <strong>Ramayana Connection:</strong> According to legend, King Ravana&apos;s mother Kaikasi
                          worshipped Lord Shiva at this very spot, making it one of the most ancient religious sites in Asia.
                        </p>
                        <p>
                          <strong>Mahabharata References:</strong> The temple is mentioned in ancient Sanskrit texts
                          as &quot;Gokanna&quot; or &quot;Gokarna,&quot; meaning &quot;cow&apos;s ear,&quot; referring to the unique shape of the bay.
                        </p>
                        <p>
                          <strong>Tamil Literature:</strong> Celebrated in classical Tamil works including Tevaram hymns
                          by Saint Sambandar (7th century AD), who called it the &quot;Rome of the Pagans.&quot;
                        </p>
                      </div>
                    </div>

                    <div className="p-4 bg-blue-50 dark:bg-blue-950/50 rounded-lg border-l-4 border-blue-400">
                      <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">Architectural Marvels</h4>
                      <div className="text-sm text-blue-700 dark:text-blue-300 space-y-2">
                        <p>
                          <strong>Gopuram Design:</strong> The 7-tiered tower follows traditional South Indian
                          Dravidian architecture with over 1,000 individual sculptural elements.
                        </p>
                        <p>
                          <strong>Sacred Geometry:</strong> The temple layout follows ancient Vastu Shastra principles,
                          with the main shrine perfectly aligned to face the rising sun.
                        </p>
                        <p>
                          <strong>Stone Carving:</strong> Features intricate depictions of the 108 dance poses
                          (Karanas) of Lord Shiva, mythological scenes, and celestial beings.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-green-50 dark:bg-green-950/50 rounded-lg border-l-4 border-green-400">
                    <h4 className="font-semibold text-green-800 dark:text-green-200 mb-3">Religious Significance & Festivals</h4>
                    <div className="grid md:grid-cols-2 gap-4 text-sm text-green-700 dark:text-green-300">
                      <div>
                        <p className="mb-2"><strong>Major Festivals:</strong></p>
                        <ul className="space-y-1">
                          <li>• <strong>Maha Shivaratri:</strong> Grand celebration with thousands of devotees</li>
                          <li>• <strong>Koneswaram Festival:</strong> Annual 22-day festival in March/April</li>
                          <li>• <strong>Thai Pusam:</strong> Colorful procession with decorated chariots</li>
                          <li>• <strong>Navaratri:</strong> Nine nights celebrating divine feminine energy</li>
                        </ul>
                      </div>
                      <div>
                        <p className="mb-2"><strong>Sacred Elements:</strong></p>
                        <ul className="space-y-1">
                          <li>• <strong>Shiva Lingam:</strong> Main deity representing cosmic consciousness</li>
                          <li>• <strong>Sacred Well:</strong> Ancient fresh water source called &quot;Papmochani&quot;</li>
                          <li>• <strong>Swami Rock:</strong> Natural formation considered Lord Shiva&apos;s meditation seat</li>
                          <li>• <strong>Prayer Halls:</strong> Multiple mandapams for different rituals</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-red-50 dark:bg-red-950/50 rounded-lg border-l-4 border-red-400">
                    <h4 className="font-semibold text-red-800 dark:text-red-200 mb-3">Colonial Period & Reconstruction</h4>
                    <div className="text-sm text-red-700 dark:text-red-300 space-y-2">
                      <p>
                        <strong>Portuguese Destruction (1624):</strong> The original temple complex was systematically
                        destroyed by Portuguese colonizers who built Fort Frederick using the temple stones. Many
                        precious artifacts and sculptures were thrown into the ocean.
                      </p>
                      <p>
                        <strong>Dutch Period:</strong> During Dutch rule, the site remained abandoned, though local
                        Hindus continued secret worship in small shrines around the area.
                      </p>
                      <p>
                        <strong>Modern Restoration (1963):</strong> The temple was magnificently rebuilt by the
                        Hindu community with support from devotees across South Asia. The new structure combines
                        traditional Dravidian architecture with modern engineering techniques.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-orange-50 dark:bg-orange-950/50 rounded-lg border-l-4 border-orange-400">
                  <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">Visitor Experience & Practical Information</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-orange-700 dark:text-orange-300">
                    <div>
                      <p className="mb-2"><strong>Best Times to Visit:</strong></p>
                      <ul className="space-y-1">
                        <li>• <strong>Sunrise:</strong> 5:30-7:00 AM for spectacular ocean views</li>
                        <li>• <strong>Evening:</strong> 5:00-6:30 PM for beautiful sunset lighting</li>
                        <li>• <strong>Full Moon:</strong> Night visits during full moon are magical</li>
                        <li>• <strong>Festivals:</strong> Experience authentic celebrations and rituals</li>
                      </ul>
                    </div>
                    <div>
                      <p className="mb-2"><strong>Temple Etiquette:</strong></p>
                      <ul className="space-y-1">
                        <li>• Remove shoes before entering temple premises</li>
                        <li>• Dress modestly (covered shoulders and legs)</li>
                        <li>• Photography allowed outside, restricted inside sanctum</li>
                        <li>• Respectful behavior during prayers and ceremonies</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Lover's Leap Information */}
                <div className="mt-6 p-4 bg-indigo-50 dark:bg-indigo-950/50 rounded-lg border-l-4 border-indigo-400">
                  <h4 className="font-semibold text-indigo-800 dark:text-indigo-200 mb-3">🌊 Lover&apos;s Leap - The Dramatic Cliff</h4>
                  <div className="text-sm text-indigo-700 dark:text-indigo-300 space-y-2">
                    <p>
                      <strong>Historic Tragedy:</strong> Just beside Koneswaram Temple lies the famous Lover&apos;s Leap,
                      a dramatic cliff where according to legend, a Dutch officer&apos;s daughter and her native lover
                      chose to leap to their deaths rather than be separated by colonial prejudices.
                    </p>
                    <p>
                      <strong>Spectacular Views:</strong> Today, this 130-foot cliff offers some of the most breathtaking
                      panoramic views of the Indian Ocean. The spot provides an incredible vantage point for photography
                      and witnessing the raw power of waves crashing against the rocks below.
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-amber-600 dark:text-amber-400">⚠️</span>
                      <strong>Safety Note:</strong> Exercise extreme caution near the cliff edge. Strong winds and
                      unstable footing make this area potentially dangerous.
                    </p>
                  </div>
                </div>

                {/* See More Details Button */}
                <div className="mt-6 text-center">
                  <Link href="/destinations/koneswaram-temple-trincomalee">
                    <Button
                      className="mt-2 bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 dark:text-white border-none cursor-pointer"
                      variant="default"
                    >
                      See More Details About Koneswaram Temple
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Trincomalee Natural Harbour */}
            <Card>
              <CardHeader>
                <CardTitle>2. Trincomalee Natural Harbour</CardTitle>
                <CardDescription>World&apos;s 5th largest natural deep-water harbour</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Trincomalee boasts one of the world&apos;s most magnificent natural harbours, ranked as the 5th largest
                      globally. This deep-water harbour stretches over 30 square kilometers and can accommodate the
                      largest naval vessels. Its strategic importance has made it a coveted prize for colonial powers
                      throughout history.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      The harbour&apos;s crystal-clear blue waters are protected by land on three sides, creating perfect
                      conditions for both commercial shipping and recreational activities. Admiral Horatio Nelson once
                      declared it the &quot;finest harbour in the world,&quot; and today it continues to serve as Sri Lanka&apos;s
                      premier eastern port.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        5th largest natural harbour in the world
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Over 30 square kilometers of protected waters
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Strategic naval importance for centuries
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Perfect for boat tours and fishing expeditions
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Praised by Admiral Nelson as &quot;finest harbour in the world&quot;
                      </li>
                    </ul>
                  </div>
                  <div>
                    {createAttractionCarousel(harbourImages, harbourIndex, setHarbourIndex) || (
                      <Image
                        src="/Trinco.jpeg"
                        alt="Aerial view of Trincomalee Natural Harbour showing vast blue waters surrounded by green coastline"
                        width={400}
                        height={300}
                        className="rounded-lg"
                      />
                    )}
                  </div>
                </div>
                <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/50 rounded-lg border-l-4 border-blue-400">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Harbour Activities:</h4>
                  <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                    <li>• Boat tours to explore the harbour&apos;s hidden coves and bays</li>
                    <li>• Sport fishing for marlin, tuna, and other deep-sea species</li>
                    <li>• Sunset cruises with spectacular views of the coastline</li>
                    <li>• Historical tours explaining colonial naval significance</li>
                    <li>• Photography opportunities from various viewpoints</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Nilaveli Beach */}
            <Card>
              <CardHeader>
                <CardTitle>3. Nilaveli Beach</CardTitle>
                <CardDescription>Pristine white sand paradise - Sri Lanka&apos;s most beautiful beach</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Stretching for over 5 kilometers along the northeastern coast, Nilaveli Beach is often hailed as
                      Sri Lanka&apos;s most spectacular beach. This untouched paradise features powder-soft white sand,
                      crystal-clear turquoise waters, and gentle waves that make it perfect for swimming and water sports.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      Unlike the busier southern beaches, Nilaveli maintains its pristine character with minimal
                      development and fewer crowds. The beach serves as the gateway to Pigeon Island National Park,
                      and its shallow, calm waters make it ideal for families with children. Palm trees provide natural
                      shade, and local fishermen add authentic charm to the scene.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Over 5km of pristine powder-white sand
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Crystal-clear, calm waters perfect for swimming
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Gateway to Pigeon Island National Park
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Less crowded than southern Sri Lankan beaches
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Perfect for families and water sports enthusiasts
                      </li>
                    </ul>
                  </div>
                  <div>
                    {createAttractionCarousel(nilaveliImages, nilaveliIndex, setNilaveliIndex) || (
                      <Image
                        src="/Pasikuda.jpeg"
                        alt="Pristine Nilaveli Beach showing white sand, turquoise waters, and palm trees with few tourists"
                        width={400}
                        height={300}
                        className="rounded-lg"
                      />
                    )}
                  </div>
                </div>
                <div className="mt-6 p-4 bg-teal-50 rounded-lg border-l-4 border-teal-400">
                  <h4 className="font-semibold text-teal-800 mb-2">Beach Activities & Tips:</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-teal-700">
                    <div>
                      <p className="mb-2"><strong>Water Activities:</strong></p>
                      <ul className="space-y-1">
                        <li>• Snorkeling and diving excursions</li>
                        <li>• Boat trips to Pigeon Island</li>
                        <li>• Kayaking and paddleboarding</li>
                        <li>• Deep-sea fishing trips</li>
                      </ul>
                    </div>
                    <div>
                      <p className="mb-2"><strong>Best Experience:</strong></p>
                      <ul className="space-y-1">
                        <li>• Visit early morning for serenity</li>
                        <li>• Bring reef-safe sunscreen</li>
                        <li>• Try fresh seafood from beach vendors</li>
                        <li>• Stay for spectacular sunset views</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pigeon Island */}
            <Card>
              <CardHeader>
                <CardTitle>4. Pigeon Island National Park</CardTitle>
                <CardDescription>Marine sanctuary with incredible coral reefs and diverse marine life</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    {createAttractionCarousel(pigeonIslandImages, pigeonIslandIndex, setPigeonIslandIndex) || (
                      <Image
                        src="/Sea-turtle-bentota.jpeg"
                        alt="Pigeon Island showing coral reefs, tropical fish, and snorkelers in crystal clear waters"
                        width={400}
                        height={300}
                        className="rounded-lg"
                      />
                    )}
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Just a 15-minute boat ride from Nilaveli Beach, Pigeon Island National Park consists of two small
                      coral islands surrounded by some of Sri Lanka&apos;s most pristine coral reefs. This marine sanctuary
                      is home to over 100 species of coral and 300 species of tropical fish, making it a snorkeling and
                      diving paradise.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      The park gets its name from the rock pigeons that nest on the larger island. Visitors can spot
                      blacktip reef sharks, sea turtles, and colorful parrotfish in the crystal-clear waters. The
                      shallow reefs are perfect for beginners, while deeper areas offer exciting experiences for
                      advanced divers.
                    </p>
                    <p>If you are good to swim you can snorkeling here and see closer sharks with the guidance of local experts.</p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Over 100 species of colorful coral formations
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        300+ species of tropical reef fish
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Blacktip reef sharks and sea turtles
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Excellent underwater visibility up to 30 meters
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Protected marine national park status since 2003
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-green-50 dark:bg-green-950/50 rounded-lg border-l-4 border-green-400">
                  <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Marine Life Highlights:</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-green-700 dark:text-green-300">
                    <div>
                      <p className="mb-2"><strong>Fish Species:</strong></p>
                      <ul className="space-y-1">
                        <li>• Angelfish and butterflyfish</li>
                        <li>• Parrotfish and surgeonfish</li>
                        <li>• Groupers and snappers</li>
                        <li>• Moorish idols and clownfish</li>
                      </ul>
                    </div>
                    <div>
                      <p className="mb-2"><strong>Other Marine Life:</strong></p>
                      <ul className="space-y-1">
                        <li>• Green and hawksbill sea turtles</li>
                        <li>• Blacktip reef sharks (harmless)</li>
                        <li>• Stingrays and eagle rays</li>
                        <li>• Octopus and moray eels</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Kanniya Hot Springs */}
            <Card>
              <CardHeader>
                <CardTitle>5. Kanniya Hot Springs</CardTitle>
                <CardDescription>Natural thermal springs with healing properties and ancient legends</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    {createAttractionCarousel(kanniyaImages, kanniyaIndex, setKanniyaIndex) || (
                      <Image
                        src="/placeholder.jpg"
                        alt="Kanniya Hot Springs showing natural thermal pools surrounded by tropical vegetation"
                        width={400}
                        height={300}
                        className="rounded-lg"
                      />
                    )}
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Located just 8km northwest of Trincomalee, the Kanniya Hot Springs consist of seven natural
                      thermal wells with water temperatures reaching 40°C (104°F). These springs hold deep cultural
                      significance and are mentioned in the ancient Ramayana epic, where they&apos;re associated with
                      Ravana&apos;s mother&apos;s tears.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      Each of the seven wells is said to have different mineral compositions and healing properties.
                      Local tradition believes bathing in these waters can cure various ailments, and the site remains
                      an important pilgrimage destination for both Hindus and Buddhists. The springs are surrounded by
                      lush tropical vegetation, creating a serene natural spa environment.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Seven distinct thermal wells with unique properties
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Water temperatures around 40°C (104°F)
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Rich in minerals with believed healing properties
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Historical significance in Ramayana epic
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Important pilgrimage site for multiple religions
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-purple-50 dark:bg-purple-950/50 rounded-lg border-l-4 border-purple-400">
                  <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Visitor Information:</h4>
                  <p className="text-sm text-purple-700 dark:text-purple-300 mb-2">
                    <strong>Entry Fee:</strong> Small nominal charge for maintenance.
                    <strong>Best Time:</strong> Early morning or late afternoon to avoid crowds.
                  </p>
                  <p className="text-sm text-purple-700 dark:text-purple-300">
                    <strong>Note:</strong> Bring a towel and change of clothes. Photography is allowed but be respectful
                    of pilgrims and religious activities. The water is safe for bathing.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Girihandu Seya */}
            <Card>
              <CardHeader>
                <CardTitle>6. Girihandu Seya</CardTitle>
                <CardDescription>Ancient Buddhist stupa with profound historical significance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Perched on a hill overlooking Trincomalee bay, Girihandu Seya is believed to be one of the earliest
                      Buddhist stupas built in Sri Lanka. According to Buddhist chronicles and ancient inscriptions found at
                      the site, this sacred stupa was built by two merchant brothers, Trapusa (Tapassu) and Bahalika (Bhalluka),
                      who received hair relics directly from the Buddha immediately after his enlightenment.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      The stupa&apos;s name translates to &quot;Hill Stupa&quot; and it offers panoramic views of the natural harbour
                      and surrounding coastline. Archaeological evidence shows the original structure was enlarged in the
                      8th century AD. The site represents an extraordinary archaeological treasure that connects visitors
                      to the very first disciples of the Buddha, making it potentially the earliest Buddhist monument in
                      Sri Lanka. The peaceful hilltop setting makes it an ideal place for meditation and reflection.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        One of Sri Lanka&apos;s earliest Buddhist stupas built by Buddha&apos;s first disciples
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Beautiful hilltop location with panoramic bay views
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Houses sacred relics of the Buddha
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Important archaeological and religious site
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Peaceful atmosphere perfect for meditation
                      </li>
                    </ul>
                  </div>
                  <div>
                    {createAttractionCarousel(girihanduImages, girihanduIndex, setGirihanduIndex) || (
                      <Image
                        src="/Girihadusaya.jpeg"
                        alt="Girihandu Seya ancient stupa on hilltop with ocean view in background"
                        width={400}
                        height={300}
                        className="rounded-lg"
                      />
                    )}
                  </div>
                </div>
                <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-950/50 rounded-lg border-l-4 border-amber-400">
                  <h4 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">Cultural Significance:</h4>
                  <p className="text-sm text-amber-700 dark:text-amber-300">
                    This stupa marks the beginning of Buddhism in Sri Lanka and represents over 2,300 years of continuous
                    religious tradition. Visitors often combine their visit with nearby Koneswaram Temple to experience
                    both Buddhist and Hindu heritage in one trip.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Arisi Male Beach */}
            <Card>
              <CardHeader>
                <CardTitle>7. Arisi Male Beach</CardTitle>
                <CardDescription>Unique coastal landscape with distinctive sand formations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    {createAttractionCarousel(arisiMaleImages, arisiMaleIndex, setArisiMaleIndex) || (
                      <Image
                        src="/Arisimale.jpeg"
                        alt="Arisi Male Beach showing unique sand formations and coastal landscape"
                        width={400}
                        height={300}
                        className="rounded-lg"
                      />
                    )}
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-4">
                      This lesser-known beach near Trincomalee offers a completely different coastal experience with its
                      unique sand formations and rugged natural beauty. Unlike the gentle shores of Nilaveli, Arugam Male
                      features dramatic coastal landscapes shaped by wind and waves over centuries, creating fascinating
                      geological formations.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      The beach is perfect for photography enthusiasts and nature lovers who appreciate untouched coastal
                      environments. While not suitable for swimming due to strong currents and rocky areas, it offers
                      excellent opportunities for coastal walks, bird watching, and experiencing Sri Lanka&apos;s raw natural beauty.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Unique natural sand formations and rock structures
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Secluded location with minimal human impact
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Excellent for photography and nature observation
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Great for coastal walks and exploration
                      </li>
                      <li className="flex items-start gap-2">
                        <TriangleAlert className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                        Strong currents and rocky seabed - swimming not recommended
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
                  <h4 className="font-semibold text-yellow-800 mb-2">Safety & Access Information:</h4>
                  <p className="text-sm text-yellow-700">
                    <strong>Access:</strong> Requires local transportation or guided tour as it&apos;s off the main tourist path.
                    <strong>Safety:</strong> Stay away from water&apos;s edge due to unpredictable waves and currents.
                    Best visited during dry season for easier access.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* More Unique Places to Visit */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Hidden Gems & Unique Experiences</h2>
          <div className="space-y-8">
            {/* China Bay Beach */}
            <Card>
              <CardHeader>
                <CardTitle>China Bay Beach</CardTitle>
                <CardDescription>Secluded military beach with pristine conditions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Located within the naval base area, China Bay Beach is one of Trincomalee&apos;s best-kept secrets.
                      This pristine stretch of coastline features incredibly clear waters, soft white sand, and minimal
                      crowds due to its controlled access. The beach is named after Chinese traders who once used this
                      bay as a safe harbor.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      While access requires permission from naval authorities, the effort is worthwhile for those seeking
                      an unspoiled beach experience. The protected status has preserved its natural beauty, making it
                      feel like a private paradise with excellent swimming conditions and stunning sunset views.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Pristine, uncrowded beach conditions
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Crystal-clear waters perfect for swimming
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Historical significance as ancient trading port
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Spectacular sunset viewing location
                      </li>
                      <li className="flex items-start gap-2">
                        <TriangleAlert className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                        Requires naval permission for access
                      </li>
                    </ul>
                  </div>
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="China Bay Beach showing pristine white sand and clear blue waters with minimal development"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Sunrise Viewing Experience */}
            <Card>
              <CardHeader>
                <CardTitle>Spectacular Sunrise Viewing</CardTitle>
                <CardDescription>Experience magical sunrises on the eastern coast beaches</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      One of Trincomalee&apos;s most magical experiences is watching the sunrise from its pristine eastern beaches.
                      Unlike the southern coast where you can only see sunsets over the ocean, Trincomalee&apos;s eastern position
                      offers breathtaking sunrise views directly over the Indian Ocean, painting the sky in brilliant oranges,
                      pinks, and golds.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      The best sunrise viewing spots include Nilaveli Beach, Uppuveli Beach, and Koneswaram Temple grounds.
                      Early morning beach walks during sunrise hours (around 6:00-6:30 AM) provide an unforgettable experience
                      with minimal crowds and perfect lighting for photography. The contrast is remarkable - while southern
                      beaches like Mirissa and Unawatuna offer stunning sunsets, only the eastern coast provides this magical
                      sunrise experience over the ocean.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Stunning ocean sunrise views unavailable on southern coast
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Perfect for early morning photography
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Peaceful beach walks with minimal crowds
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Best viewing: Nilaveli, Uppuveli, and Koneswaram area
                      </li>
                      <li className="flex items-start gap-2">
                        <Star className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                        Optimal time: 6:00-6:30 AM year-round
                      </li>
                    </ul>
                  </div>
                  {/* Sunrise Image Carousel */}
                  {createAttractionCarousel(sunriseImages, sunriseIndex, setSunriseIndex) || (
                    <Image
                      src={sunriseImages[0].src}
                      alt={sunriseImages[0].alt}
                      width={400}
                      height={300}
                      className="rounded-lg"
                    />
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Seruwila Ancient Temple */}
            <Card>
              <CardHeader>
                <CardTitle>Seruwila Mangala Raja Maha Vihara</CardTitle>
                <CardDescription>Ancient Buddhist temple with sacred forehead relic</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Seruwila temple showing white dagoba surrounded by lush greenery and smaller stupas"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Located about 45km from Trincomalee, this ancient Buddhist temple houses one of the most sacred
                      relics in Sri Lanka - a piece of the Buddha&apos;s forehead bone. The temple complex features a
                      magnificent white dagoba surrounded by smaller stupas and meditation halls in a serene forest setting.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      The site dates back over 2,000 years and has been continuously maintained as a place of worship.
                      The temple is particularly significant for Buddhist pilgrims and offers visitors a chance to
                      experience authentic religious practices in a peaceful, natural environment away from tourist crowds.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Houses sacred Buddha&apos;s forehead relic
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Over 2,000 years of continuous worship
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Beautiful white dagoba and forest setting
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Important pilgrimage destination
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Peaceful meditation and reflection environment
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Additional Places to Visit */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">More Amazing Places Near Trincomalee</h2>
          <div className="space-y-8">
            {/* Marble Beach */}
            <Card>
              <CardHeader>
                <CardTitle>Marble Beach</CardTitle>
                <CardDescription>Hidden gem with crystal-clear waters</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      A secluded beach located about 6km from Trincomalee town, Marble Beach gets its name from the
                      smooth, marble-like rocks that line the shore. The beach offers excellent snorkeling opportunities
                      and pristine waters perfect for swimming.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Beautiful marble-like rock formations
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Excellent for snorkeling and swimming
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Less developed and more natural
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Perfect for peaceful beach days
                      </li>
                    </ul>
                  </div>
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Marble Beach showing smooth rocks and clear turquoise waters"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Velgam Vehera */}
            <Card>
              <CardHeader>
                <CardTitle>Velgam Vehera</CardTitle>
                <CardDescription>Ancient Buddhist monastery ruins</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Velgam Vehera ancient monastery ruins with stone pillars and stupas"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      This ancient Buddhist monastery complex dates back to the 2nd century BC and features impressive
                      ruins including stupas, stone pillars, and meditation halls. It&apos;s an important archaeological
                      site that offers insights into early Buddhist civilization in Sri Lanka.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Ancient monastery dating to 2nd century BC
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Well-preserved stone structures
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Important archaeological significance
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Peaceful setting for reflection
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Whale Watching */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">World-Class Whale Watching</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 text-muted-foreground">
              <p>
                Trincomalee offers some of the worlds best whale watching opportunities, with blue whales, sperm
                whales, and dolphins frequently spotted in the deep waters off the coast. The continental shelf drops
                dramatically close to shore, bringing these magnificent creatures within easy reach.
              </p>
              <p>
                The best season runs from May to October when the seas are calm and whale activity is at its peak. Tours
                typically last 3-4 hours and have high success rates for sightings, especially of blue whales - the
                largest animals on Earth.
              </p>
              <div className="bg-blue-50 dark:bg-blue-950/50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">What You Might See:</h4>
                <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                  <li>• Blue whales (largest animals on Earth)</li>
                  <li>• Sperm whales and pilot whales</li>
                  <li>• Spinner and bottlenose dolphins</li>
                  <li>• Flying fish and sea turtles</li>
                  <li>• Various seabird species</li>
                </ul>
              </div>
            </div>
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Blue whale surfacing near Trincomalee with whale watching boat and excited tourists in background"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Ad Space */}
        <div className="my-8 p-4 bg-gray-50 rounded-lg text-center text-gray-500 border-2 border-dashed border-gray-300">
          [Advertisement Space - 728x90 Leaderboard]
        </div>

        {/* More Attractions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Additional Attractions</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Uppuveli Beach</CardTitle>
                <CardDescription>Quieter alternative to Nilaveli</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Peaceful Uppuveli Beach with golden sand, fishing boats, and local fishermen"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3"
                />
                <p className="text-sm text-muted-foreground">
                  A more local and authentic beach experience with fishing boats, fewer tourists, and beautiful sunrises.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Fort Frederick</CardTitle>
                <CardDescription>Colonial fort with harbor views</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Historic Fort Frederick showing colonial architecture and panoramic harbor views"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3"
                />
                <p className="text-sm text-muted-foreground">
                  Built by the Portuguese and later occupied by Dutch and British, offering great harbor views and
                  historical insights.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Lover&apos;s Leap</CardTitle>
                <CardDescription>Dramatic clifftop viewpoint</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Lovers Leap cliff showing dramatic drop to ocean with panoramic coastal views"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3"
                />
                <p className="text-sm text-muted-foreground">
                  A dramatic cliff near Koneswaram Temple with stunning ocean views and a tragic local legend.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Dutch Bay</CardTitle>
                <CardDescription>Peaceful bay with mangrove forests</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Dutch Bay showing calm waters surrounded by mangrove forests and small fishing boats"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3"
                />
                <p className="text-sm text-muted-foreground">
                  A serene bay perfect for kayaking through mangroves and observing local birdlife in their natural habitat.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Trincomalee War Cemetery</CardTitle>
                <CardDescription>Commonwealth war graves</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Well-maintained war cemetery with rows of white headstones and tropical vegetation"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3"
                />
                <p className="text-sm text-muted-foreground">
                  A beautifully maintained cemetery honoring Commonwealth soldiers who died during World War II in the region.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Somawathiya National Park</CardTitle>
                <CardDescription>Wildlife sanctuary near Trincomalee</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Somawathiya National Park showing elephants near water with lush forest background"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3"
                />
                <p className="text-sm text-muted-foreground">
                  Home to elephants, leopards, and diverse bird species. Perfect for wildlife enthusiasts seeking safari adventures.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Best Time to Visit */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Best Time to Visit Trincomalee</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">Peak Season</CardTitle>
                <CardDescription>May to September</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Dry, sunny weather</li>
                  <li>• Calm seas perfect for swimming</li>
                  <li>• Best whale watching season</li>
                  <li>• Ideal for water sports</li>
                  <li>• Higher accommodation prices</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-yellow-600">Shoulder Season</CardTitle>
                <CardDescription>April & October</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Occasional rain showers</li>
                  <li>• Fewer crowds</li>
                  <li>• Good value for money</li>
                  <li>• Still good for beach activities</li>
                  <li>• Mixed weather conditions</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-red-600">Monsoon Season</CardTitle>
                <CardDescription>November to March</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Heavy rainfall and rough seas</li>
                  <li>• Many beach activities suspended</li>
                  <li>• Lowest accommodation prices</li>
                  <li>• Good for temple visits</li>
                  <li>• Limited whale watching</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Activities */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Activities & Experiences</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Water Activities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Diving & Snorkeling</h4>
                  <p className="text-sm text-muted-foreground">
                    Explore coral reefs at Pigeon Island and various dive sites with excellent visibility.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Whale Watching</h4>
                  <p className="text-sm text-muted-foreground">
                    Half-day boat trips to spot blue whales, sperm whales, and dolphins.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Water Sports</h4>
                  <p className="text-sm text-muted-foreground">
                    Kayaking, windsurfing, and jet skiing available at major beaches.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">Cultural Experiences</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Temple Visits</h4>
                  <p className="text-sm text-muted-foreground">
                    Explore ancient Hindu and Buddhist temples with rich history and architecture.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Local Markets</h4>
                  <p className="text-sm text-muted-foreground">
                    Visit fish markets and local bazaars for authentic cultural experiences.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Historical Sites</h4>
                  <p className="text-sm text-muted-foreground">
                    Explore colonial forts and archaeological sites dating back centuries.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final Tips */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-blue-50 to-teal-50 dark:from-blue-950/50 dark:to-teal-950/50 border-blue-200 dark:border-blue-800">
            <CardHeader>
              <CardTitle className="text-blue-800 dark:text-blue-200">Your Trincomalee Adventure</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Trincomalee offers an authentic Sri Lankan coastal experience that combines pristine natural beauty with
                rich cultural heritage. From the spiritual atmosphere of ancient temples to the thrill of spotting blue
                whales in their natural habitat, this eastern gem provides experiences that are both profound and
                exhilarating.
              </p>
              <p className="text-muted-foreground mb-4">
                Take time to appreciate the slower pace of life here, respect the local customs and religious sites, and
                immerse yourself in the natural wonders that make Trincomalee special. Whether youre seeking adventure
                on the water or peace on pristine beaches, this coastal paradise will exceed your expectations.
              </p>
              <p className="text-muted-foreground font-medium">
                Enjoy your journey to Sri Lankas eastern coastal paradise! 🌊🐋🏛️
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}
