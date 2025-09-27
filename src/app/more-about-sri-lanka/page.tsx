import React from "react";
import Image from "next/image";
import { MapPin, Users, Globe } from "lucide-react";

const MoreAboutSriLanka = () => {
    return (
        <section className="py-12 bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
                        Discover Sri Lanka
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300">
                        A land of rich culture, breathtaking landscapes, and fascinating history, Sri Lanka is also probably the world&apos;s most friendly and welcoming country.
                    </p>
                </div>

                {/* Population and Area */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Population & Area</h2>
                        <p className="text-lg text-gray-700 dark:text-gray-300">
                            Sri Lanka is home to over 22 million people, spread across an area of 65,610 square kilometers. Despite its small size, the island boasts a diverse population with a rich tapestry of ethnicities and cultures.
                        </p>
                    </div>
                    <div className="relative w-full h-64 md:h-80">
                        <Image
                            src="/public/Nuwara-Eliya.jpg"
                            alt="Sri Lanka Landscape"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                </div>
                {/* Highlight Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
                    <div className="flex flex-col items-center bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                        <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400 mb-2" />
                        <h3 className="font-medium text-gray-900 dark:text-white text-sm text-center">65,610 km² Island</h3>
                    </div>
                    <div className="flex flex-col items-center bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                        <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400 mb-2" />
                        <h3 className="font-medium text-gray-900 dark:text-white text-sm text-center">65,610 km² Island</h3>
                    </div>




                    <div className="flex flex-col items-center bg-green-50 dark:bg-green-900/30 p-4 rounded-lg">
                        <Users className="h-6 w-6 text-green-600 dark:text-green-400 mb-2" />
                        <h3 className="font-medium text-gray-900 dark:text-white text-sm text-center">22 Million+ People</h3>
                    </div>

                    <div className="flex flex-col items-center bg-orange-50 dark:bg-orange-900/30 p-4 rounded-lg">
                        <Globe className="h-6 w-6 text-orange-600 dark:text-orange-400 mb-2" />
                        <h3 className="font-medium text-gray-900 dark:text-white text-sm text-center">8 UNESCO Sites</h3>
                    </div>
                </div>

                {/* Culture */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Culture</h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300">
                        Sri Lanka&apos;s culture is a blend of traditional Sinhalese and Tamil influences, enriched by centuries of interaction with traders and colonizers from around the world. Festivals like Vesak, Thai Pongal, and Sinhala and Tamil New Year highlight the island&apos;s vibrant traditions.
                    </p>
                </div>

                {/* Provinces and Districts */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Provinces & Districts</h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300">
                        The island is divided into 9 provinces and 25 districts, each with its own unique charm. From the bustling Western Province to the serene Central Province, every region offers something special.
                    </p>
                </div>

                {/* Colonial Influence */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Colonial Influence</h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                        The Portuguese, Dutch, and British arrivals have significantly shaped Sri Lanka&apos;s history and culture. Here are the key timelines:
                    </p>
                    <ul className="list-disc list-inside text-lg text-gray-700 dark:text-gray-300">
                        <li><strong>1505:</strong> The Portuguese arrive, marking the beginning of European influence. They establish control over coastal areas and introduce Christianity.</li>
                        <li><strong>1658:</strong> The Dutch take over from the Portuguese, focusing on trade and fortifications, including the iconic Galle Fort.</li>
                        <li><strong>1796:</strong> The British replace the Dutch, eventually making Sri Lanka (then Ceylon) a crown colony in 1802. They introduce tea plantations and modern infrastructure.</li>
                        <li><strong>1948:</strong> Sri Lanka gains independence, ending nearly 450 years of colonial rule.</li>
                    </ul>
                </div>

                {/* Tea, Cricket, and More */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Famous For</h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300">
                        Sri Lanka is renowned for its world-class tea, passionate cricket culture, and stunning natural beauty. The island is also famous for its wildlife safaris, pristine beaches, and warm hospitality.
                    </p>
                </div>

                {/* Interesting Facts */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Interesting Facts</h2>
                    <ul className="list-disc list-inside text-lg text-gray-700 dark:text-gray-300">
                        <li>Sri Lanka is one of the world&apos;s top biodiversity hotspots.</li>
                        <li>The island is home to the world&apos;s oldest human-planted tree, the Jaya Sri Maha Bodhi.</li>
                        <li>It has a literacy rate of over 92%, one of the highest in South Asia.</li>
                    </ul>
                </div>


            </div>
        </section>
    );
};

export default MoreAboutSriLanka;