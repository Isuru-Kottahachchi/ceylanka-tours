import { MapPin, Users, Mountain, Waves, Sun, Leaf, Calendar, Globe, Utensils, Eye, Binoculars } from "lucide-react"

function SriLankaAboutCompact() {
    return (
        <section className="py-12 bg-white dark:bg-gray-900 transition-colors">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                {/* Header */}
                <div className="text-center mb-8">
                    <h2
                        className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2"
                        data-aos="fade-up"
                        data-aos-duration="800"
                    >
                        Welcome to Sri Lanka
                    </h2>
                    <p
                        className="text-lg text-gray-600 dark:text-gray-300"
                        data-aos="fade-up"
                        data-aos-duration="800"
                        data-aos-delay="200"
                    >
                        The Pearl of the Indian Ocean - A tropical paradise with ancient heritage
                    </p>
                </div>

                {/* Quick Facts - Horizontal Icons */}
                <div className="grid grid-cols-3 gap-4 mb-8" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
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

                {/* Description - Compact */}
                <div className="mb-8" data-aos="fade-right" data-aos-duration="800" data-aos-delay="600">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm mb-3">
                        Sri Lanka, formerly known as Ceylon, is a stunning island nation in the Indian Ocean, just southeast of
                        India. Despite its compact size, this tropical paradise offers incredible diversity - from pristine beaches
                        and ancient temples to misty mountains and wildlife-rich national parks. You can witness the hot, cold and tropical climate within a few hours of travel, making it a unique destination for all types of travelers.
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                        With over 2,500 years of recorded history, Sri Lanka boasts eight UNESCO World Heritage Sites,
                        world-renowned Ceylon tea, and some of the friendliest people on Earth.
                    </p>
                </div>

                {/* What Makes Sri Lanka Special - 2x2 Grid */}
                <div className="mb-8">
                    <h3
                        className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center"
                        data-aos="fade-left"
                        data-aos-duration="800"
                        data-aos-delay="800"
                    >
                        <Leaf className="h-5 w-5 mr-2 text-green-600 dark:text-green-400" />
                        What Makes Sri Lanka Special
                    </h3>

                    <div className="grid grid-cols-2 gap-4" data-aos="fade-up" data-aos-duration="800" data-aos-delay="1000">
                        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                            <div className="flex items-center space-x-3 mb-2">
                                <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full">
                                    <Mountain className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                                </div>
                                <h4 className="font-medium text-gray-900 dark:text-white text-sm">Ancient Heritage</h4>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 text-xs">
                                Sigiriya, Anuradhapura, and Polonnaruwa showcase 2,500+ years of civilization.
                            </p>
                        </div>
                        
                        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                            <div className="flex items-center space-x-3 mb-2">
                                <div className="bg-orange-100 dark:bg-orange-900 p-2 rounded-full">
                                    <Sun className="h-4 w-4 text-orange-600 dark:text-orange-400" />
                                </div>
                                <h4 className="font-medium text-gray-900 dark:text-white text-sm">Tropical sun to mountain mist, all in a few hours</h4>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 text-xs">
                                Experience diverse climates from sunny beaches to cool hill country within a short drive.
                            </p>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                            <div className="flex items-center space-x-3 mb-2">
                                <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full">
                                    <Utensils className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                                </div>
                                <h4 className="font-medium text-gray-900 dark:text-white text-sm">Food & Cuisine</h4>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 text-xs">
                                Sri Lankan cuisine is a delightful blend of flavors, featuring rice and curry as staples, along with
                                fresh seafood, tropical fruits, and aromatic spices.
                            </p>
                        </div>


                        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                            <div className="flex items-center space-x-3 mb-2">
                                <div className="bg-green-100 dark:bg-green-900 p-2 rounded-full">
                                    <Waves className="h-4 w-4 text-green-600 dark:text-green-400" />
                                </div>
                                <h4 className="font-medium text-gray-900 dark:text-white text-sm">Pristine Beaches</h4>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 text-xs">
                                1,340km of coastline with golden beaches, surfing, and whale watching.
                            </p>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                            <div className="flex items-center space-x-3 mb-2">
                                <div className="bg-purple-100 dark:bg-purple-900 p-2 rounded-full">
                                    <Binoculars className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                                </div>
                                <h4 className="font-medium text-gray-900 dark:text-white text-sm">Wildlife Paradise</h4>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 text-xs">
                                Leopards, elephants, blue whales, and 26 national parks to explore.
                            </p>
                        </div>

                        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                            <div className="flex items-center space-x-3 mb-2">
                                <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full">
                                    <Eye className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                                </div>
                                <h4 className="font-medium text-gray-900 dark:text-white text-sm">Spiritual Richness</h4>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 text-xs">
                                Whether it’s Buddhist stupas, Hindu kovils, or sacred mountains like Adam’s Peak, the spiritual vibe runs deep often blending with Nature
                            </p>
                        </div>


                    </div>
                </div>

                {/* Best Time & Languages - Horizontal */}
                <div
                    className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4"
                    data-aos="fade-up"
                    data-aos-duration="300"
                    data-aos-delay="200"
                >
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                        <Calendar className="h-5 w-5 mr-2 text-blue-600 dark:text-blue-400" />
                        Essential Travel Info
                    </h3>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-start space-x-3">
                            <Sun className="h-5 w-5 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-1" />
                            <div>
                                <h4 className="font-medium text-gray-900 dark:text-white text-sm">Best Time to Visit</h4>
                                <p className="text-gray-600 dark:text-gray-300 text-xs">
                                    Dec-Mar (West/South), Apr-Sep (East/North). Year-round destination.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-3">
                            <Globe className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                            <div>
                                <h4 className="font-medium text-gray-900 dark:text-white text-sm">Languages</h4>
                                <p className="text-gray-600 dark:text-gray-300 text-xs">
                                    Sinhala, Tamil, English widely spoken in tourism.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                        <div className="flex items-start space-x-3">
                            <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                            <div>
                                <h4 className="font-medium text-gray-900 dark:text-white text-sm">Currency & Visa</h4>
                                <p className="text-gray-600 dark:text-gray-300 text-xs">
                                    Sri Lankan Rupee (LKR). ETA visa required for most countries. Easy online application.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                
            </div>
        </section>
    )
}

export default SriLankaAboutCompact;
export { SriLankaAboutCompact };
