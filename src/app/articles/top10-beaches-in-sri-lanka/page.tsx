"use client";
import { Fragment, useEffect, useState } from 'react';
import Link from 'next/link';
import { ImageCarousel } from "@/components/ui/image-carousel";
import { BeachSafetyModal } from "@/components/beach-safety-modal"

const beaches = [
  {
    name: 'Unawatuna Beach',
    slug: 'unawatuna',
    images: [
      { src: '/Unawatuna.jpg', alt: 'Unawatuna Beach', caption: 'Crystal clear waters', title: 'Unawatuna Beach' },
      { src: '/images/unawatuna-2.jpg', alt: 'Unawatuna Bay', caption: 'Crescent-shaped bay', title: 'Bay View' },
      { src: '/images/unawatuna-3.jpg', alt: 'Beach Life', caption: 'Vibrant atmosphere', title: 'Beach Life' }
    ],
    location: 'Southern Province, near Galle',
    bestTime: 'December to April',
    description:
      'Unawatuna is one of the most popular and accessible beaches in Sri Lanka, offering a crescent-shaped bay with calm, swimmable waters and golden sands. The vibrant town atmosphere is filled with beach cafés and laid-back nightlife.',
    thingsToDo: [
      'Snorkeling at Jungle Beach',
      'Enjoy the time with sea turtles ',
      'Hiking to the Japanese Peace Pagoda',
      'Sampling seafood at beach restaurants',
    ],
    tips: 'Ideal for beginner swimmers. Avoid weekends for fewer crowds.',
    placesToStay: [
      'Thaproban Beach House',
      'Calamander Unawatuna Beach Resort',
      'Villa Thawthisa'
    ],
  },
  {
    name: 'Mirissa Beach',
    slug: 'mirissa',
    images: [
      { src: '/Mirissa.jpg', alt: 'Mirissa Beach', caption: 'Paradise for whale watching', title: 'Mirissa Beach' },
      { src: '/images/mirissa-2.jpg', alt: 'Mirissa Bay', caption: 'Palm-fringed shores', title: 'Bay View' },
      { src: '/images/mirissa-3.jpg', alt: 'Mirissa Sunset', caption: 'Stunning sunset', title: 'Sunset View' }
    ],
    location: 'Matara District, Southern Province',
    bestTime: 'November to March',
    description:
      "Mirissa is a crescent-shaped bay famous for whale watching and palm tree photography. It's quieter than Unawatuna and known for its natural beauty and cozy vibe.",
    thingsToDo: [
      'Whale watching tours (Blue & Sperm whales)',
      'Climb Parrot Rock for sunset views',
      'Surfing lessons for beginners',
    ],
    tips: 'Book whale tours early morning. Great for romantic getaways.',
    placesToStay: [
      'Thaproban Beach House',
      'Calamander Unawatuna Beach Resort',
      'Villa Thawthisa'
    ],
  },
  {
    name: 'Arugam Bay',
    slug: 'arugambay',
    images: [
      { src: '/Arugam-bay.jpeg', alt: 'Arugam Bay', caption: 'World-class surfing destination', title: 'Arugam Bay' },
      { src: '/images/arugambay-2.jpg', alt: 'Surfing', caption: 'Perfect waves', title: 'Surfing Paradise' },
      { src: '/images/arugambay-3.jpg', alt: 'Beach', caption: 'Beautiful coastline', title: 'Coastal View' }
    ],
    location: 'Ampara District, Eastern Province',
    bestTime: 'May to September',
    description:
      "Arugam Bay is a world-class surfing destination with consistent right-hand breaks. It's a hotspot for backpackers and surfers alike, with a chilled atmosphere and low-budget hostels.",
    thingsToDo: [
      'Surf at Main Point and Whiskey Point',
      'Yoga sessions and beachfront cafes',
      'Visit Kumana National Park',
    ],
    tips: 'Best for surfing in the dry season. Not ideal for swimming due to currents.',
    placesToStay: [
      'Thaproban Beach House',
      'Calamander Unawatuna Beach Resort',
      'Villa Thawthisa'
    ],
  },
  {
    name: 'Nilaveli Beach',
    slug: 'nilaveli',
    images: [
      { src: '/Nilaveli-beach.jpg', alt: 'Nilaveli Beach', caption: 'Pristine white sand beach', title: 'Nilaveli Beach' },
      { src: '/images/nilaveli-2.jpg', alt: 'Turquoise Waters', caption: 'Crystal clear waters', title: 'Crystal Waters' },
      { src: '/images/nilaveli-3.jpg', alt: 'Pigeon Island', caption: 'Nearby Pigeon Island', title: 'Pigeon Island' }
    ],
    location: 'Near Trincomalee, Eastern Province',
    bestTime: 'May to October',
    description:
      "Nilaveli is a tranquil, uncrowded beach with powdery white sand and calm turquoise water. It's ideal for snorkeling and boat rides to Pigeon Island.",
    thingsToDo: [
      'Snorkeling and diving at Pigeon Island',
      'Boat rides and kayaking',
      'Relaxing beach picnics',
    ],
    tips: 'Ideal for families and nature lovers. Bring cash — few ATMs around.',
    placesToStay: [
      'Thaproban Beach House',
      'Calamander Unawatuna Beach Resort',
      'Villa Thawthisa'
    ],
  },
  {
    name: 'Hikkaduwa Beach',
    slug: 'hikkaduwa',
    images: [
      { src: '/Hikkaduwabeach.jpg', alt: 'Hikkaduwa Beach', caption: 'Vibrant beach town', title: 'Hikkaduwa Beach' },
      { src: '/images/hikkaduwa-2.jpg', alt: 'Coral Sanctuary', caption: 'Coral reefs and turtles', title: 'Coral Sanctuary' },
      { src: '/images/hikkaduwa-3.jpg', alt: 'Beach Nightlife', caption: 'Beachside bars', title: 'Beach Nightlife' }
    ],
    location: 'Galle District, Southern Province',
    bestTime: 'November to March',
    description:
      "Hikkaduwa is a vibrant beach town known for coral reefs, turtles, and nightlife. It's one of the best places for snorkeling and offers plenty of dining and lodging options.",
    thingsToDo: [
      'Snorkeling with sea turtles',
      'Visit the Coral Sanctuary',
      'Enjoy beachside bars and shops',
    ],
    tips: 'Wear water shoes — some areas have sharp coral. Great for groups.',
    placesToStay: [
      'Thaproban Beach House',
      'Calamander Unawatuna Beach Resort',
      'Villa Thawthisa'
    ],
  },
  {
    name: 'Bentota Beach',
    slug: 'bentota',
    images: [
      { src: '/Bentotabeach.jpeg', alt: 'Bentota Beach', caption: 'Luxury beach resort area', title: 'Bentota Beach' },
      { src: '/images/bentota-2.jpg', alt: 'Water Sports', caption: 'Exciting water sports', title: 'Water Activities' },
      { src: '/images/bentota-3.jpg', alt: 'Bentota River', caption: 'River safari adventures', title: 'River Safari' }
    ],
    location: 'Galle District, Western Province',
    bestTime: 'October to April',
    description:
      "If you are in Sri Lanka, dont visit this paradise beach, Bentota is known for its wide sandy beaches, water sports, and luxury resorts. It's perfect for honeymooners and travelers seeking comfort and adventure.",
    thingsToDo: [
      'Jet skiing and banana boat rides',
      'River safaris along the Bentota River',
      'Visit Brief Garden and Geoffrey Bawa gardens',
    ],
    tips: 'Great for couples and families. Beachfront hotels fill up fast — book early.',
    placesToStay: [
      'Thaproban Beach House',
      'Calamander Unawatuna Beach Resort',
      'Villa Thawthisa'
    ],
  },
  {
    name: 'Hirikatiya Beach',
    slug: 'hirikatiya',
    images: [
      { src: '/Hirikatiya.jpg', alt: 'Hirikatiya Beach', caption: 'Hidden gem beach', title: 'Hirikatiya Beach' },
      { src: '/hirikatiya-2.jpg', alt: 'Tangalle Area', caption: 'Peaceful surroundings', title: 'Peaceful Paradise' },
      { src: '/images/hirikatiya-3.jpg', alt: 'Palm Trees', caption: 'Tropical setting', title: 'Tropical Beach' }
    ],
    location: 'Hambantota District, Southern Province',
    bestTime: 'November to April',
    description:
      "Tangalle offers a peaceful, less commercial experience with long stretches of golden sand. It's perfect for those who want to escape the crowds.",
    thingsToDo: [
      'Relax under palm trees with minimal crowds',
      'Explore rock temples like Mulkirigala Raja Maha Vihara',
      'Turtle watching at Rekawa Beach',
    ],
    tips: 'Not all areas are safe for swimming — check signs or ask locals.',
    placesToStay: [
      'Thaproban Beach House',
      'Calamander Unawatuna Beach Resort',
      'Villa Thawthisa'
    ],
  },
  {
    name: 'Pasikuda Beach',
    slug: 'pasikuda',
    images: [
      { src: '/Pasikuda.jpeg', alt: 'Pasikuda Beach', caption: 'Tranquil beach escape', title: 'Pasikuda Beach' },
      { src: '/images/pasikuda-2.jpg', alt: 'Calm Waters', caption: 'Calm blue waters', title: 'Calm Waters' },
      { src: '/images/pasikuda-3.jpg', alt: 'Beach Sunrise', caption: 'Beautiful sunrise', title: 'Sunrise View' }
    ],
    location: 'Near Trincomalee, Eastern Province',
    bestTime: 'May to October',
    description:
      "Pasikuda is known for its shallow, calm waters and long sandy beaches. It's ideal for families and those looking for a relaxing beach holiday away from the crowds.",
    thingsToDo: [
      'Snorkeling and diving tours',
      'Visit Fort Frederick and Koneswaram Temple',
      'Watch the sunrise from the beach',
    ],
    tips: 'Great for a digital detox. Fewer crowds than Nilaveli.',
    placesToStay: [
      'Thaproban Beach House',
      'Calamander Unawatuna Beach Resort',
      'Villa Thawthisa'
    ],
  },
  {
    name: 'Weligama Beach',
    slug: 'waligama',
    images: [
      { src: '/Waligama-Bay-Beach.jpg', alt: 'Weligama Beach', caption: 'Perfect for surf lessons', title: 'Weligama Beach' },
      { src: '/images/weligama-2.jpg', alt: 'Surfing School', caption: 'Learn to surf', title: 'Surf School' },
      { src: '/images/weligama-3.jpg', alt: 'Taprobane Island', caption: 'Iconic island view', title: 'Taprobane Island' }
    ],
    location: 'Matara District, Southern Province',
    bestTime: 'November to April',
    description:
      "Weligama is a long sandy bay famous for its surfing schools and fish markets. It's a budget-friendly beach with a mix of local and tourist culture.",
    thingsToDo: [
      'Learn to surf with local instructors',
      'Walk to Taprobane Island during low tide',
      'Explore seafood markets and try local crab curry',
    ],
    tips: 'Great for first-time surfers. Watch out for jellyfish after rain.',
    placesToStay: [
      'Thaproban Beach House',
      'Calamander Unawatuna Beach Resort',
      'Villa Thawthisa'
    ],
  },
  {
    name: 'Kalpitiya Beach',
    slug: 'kalpitiya',
    images: [
      { src: '/Kalpitiya-beach.jpg', alt: 'Kalpitiya Beach', caption: '', title: '' },
      { src: '/Kalpitiya1.jpg', alt: 'Kalpitiya beach', caption: '', title: '' },
      { src: '/Kalpitiya.jpeg', alt: 'Kalpitiya Beach', caption: '', title: '' }
    ],
    location: 'Puttalam District, North-Western Province',
    bestTime: 'May to September',
    description:
      "Kalpitiya is ideal for kite surfing, dolphin watching, and off-the-beaten-path adventures. It's still developing as a tourist destination, making it peaceful and eco-friendly.",
    thingsToDo: [
      'Kite surfing in the Kalpitiya lagoon',
      'Boat tours to see dolphins and whales',
      'Explore mangroves and Wilpattu National Park nearby',
    ],
    tips: 'Windy and wild — perfect for adventure seekers. Limited nightlife.',
    placesToStay: [
      'Thaproban Beach House',
      'Calamander Unawatuna Beach Resort',
      'Villa Thawthisa'
    ],
  },
  {
    name: 'Jungle beach, Unawatuna,Sri Lanka',
    slug: 'jungle-beach',
    images: [
      { src: '/jungle-beach.jpeg', alt: 'Jungle Beach', caption: 'Hidden jungle paradise', title: 'Jungle Beach' },
      { src: '/images/jungle-beach-2.jpg', alt: 'Secluded Cove', caption: 'Secluded natural cove', title: 'Secluded Paradise' },
      { src: '/images/jungle-beach-3.jpg', alt: 'Jungle Surroundings', caption: 'Surrounded by nature', title: 'Nature Escape' }
    ],
    location: 'Galle District, Southern Province',
    bestTime: 'May to September',
    description:
      "Jungle Beach is a hidden gem near Unawatuna, surrounded by lush greenery and offering a tranquil escape. It's perfect for nature lovers and those seeking solitude.",
    thingsToDo: [
      'Snorkeling in calm waters',
      'Hiking through jungle trails',
      'Relaxing away from crowds',
    ],
    tips: 'Windy and wild — perfect for adventure seekers. Limited nightlife.',
    placesToStay: [
      'Thaproban Beach House',
      'Calamander Unawatuna Beach Resort',
      'Villa Thawthisa'
    ],
  },
];

export default function TopBeachesPage() {

  const [showSafetyModal, setShowSafetyModal] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSafetyModal(true)
    }, 500) // Show after 0.5 seconds

    return () => clearTimeout(timer)
  }, [])

  const handleCloseModal = () => {
    setShowSafetyModal(false)
  }

  return (
    <main className="bg-white text-gray-800">
      <BeachSafetyModal
        isOpen={showSafetyModal}
        onClose={handleCloseModal}
        beachName="Sri Lankan Beach"
      />
      {/* Hero Header */}
      <section className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          {/* <div className="flex justify-center mb-6">
            <div className="h-16 w-16 text-cyan-100">🏖️</div>
          </div> */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Top 10 Beaches in Sri Lanka
          </h1>
          <p className="text-xl md:text-2xl mb-6 max-w-3xl mx-auto font-light text-cyan-100">
            Discover paradise on Sri Lanka&apos;s stunning coastline with pristine waters, golden sands, and unforgettable experiences
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm border border-white/30">🌊 Crystal Clear Waters</span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm border border-white/30">🏄 Water Sports</span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm border border-white/30">🌴 Tropical Paradise</span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm border border-white/30">📸 Picture Perfect</span>
          </div>
        </div>
      </section>

      {/* Beach Cards */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <section className="flex flex-col gap-6">
          {beaches.map((beach, index) => (
            <Fragment key={index}>
              {/* Beach Card */}
              <div className="flex flex-col sm:flex-row rounded-2xl overflow-hidden shadow-md bg-white transition-transform hover:scale-[1.01] duration-300 border border-gray-100">
                <div className="w-full sm:w-1/3 flex-shrink-0 h-80 md:h-96 sm:h-auto overflow-hidden">
                  <ImageCarousel images={beach.images} />
                </div>
                <div className="p-4 flex-1 space-y-2 flex flex-col">
                  <div className="flex-1">
                    <h2 className="text-2xl font-semibold">{beach.name}</h2>
                    <p className="text-sm text-gray-600"><strong>📍 Location:</strong> {beach.location}</p>
                    <p className="text-sm text-gray-600"><strong>📅 Best Time:</strong> {beach.bestTime}</p>
                    <p className="text-sm text-gray-700">{beach.description}</p>

                    <div>
                      <p className="font-semibold text-sm mt-2">✅ Things to Do:</p>
                      <ul className="list-disc list-inside text-sm text-gray-700">
                        {beach.thingsToDo.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <p className="font-semibold text-sm mt-2">🏨 Recommended Places to Stay:</p>
                      <ul className="list-disc list-inside text-sm text-gray-700">
                        {beach.placesToStay.map((hotel, i) => (
                          <li key={i}>{hotel}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <p className="font-semibold text-sm mt-2">💡 Tip:</p>
                      <p className="text-sm text-gray-700">{beach.tips}</p>
                    </div>
                  </div>

                  <Link href={`/destinations/${beach.slug}`}>
                    <button className="mt-4 w-full sm:w-auto bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer">
                      Explore {beach.name.split(' ')[0]}
                    </button>
                  </Link>
                </div>
              </div>
            </Fragment>
          ))}
        </section>
      </div>
    </main>
  );
}
