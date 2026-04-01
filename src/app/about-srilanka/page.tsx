import { MapPin, Users, Waves, Sun, Leaf, Calendar, Globe, Utensils, Landmark, Thermometer, ChefHat, PawPrint, Sparkles } from "lucide-react"

function SriLankaAboutCompact() {
    return (
        <section className="py-12 theme-bg transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-8">
                    <h2
                        className="text-3xl md:text-4xl font-bold theme-text mb-2"
                        data-aos="fade-up"
                        data-aos-duration="500"
                    >
                        Welcome to Sri Lanka
                    </h2>
                    <p
                        className="text-lg theme-text-muted"
                        data-aos="fade-up"
                        data-aos-duration="500"
                        data-aos-delay="100"
                    >
                        The Pearl of the Indian Ocean - A tropical paradise with ancient heritage
                    </p>
                </div>

                {/* Quick Facts - Horizontal Icons */}
                <div className="grid grid-cols-3 gap-4 mb-8" data-aos="fade-up" data-aos-duration="500" data-aos-delay="100">
                    <div className="flex flex-col items-center theme-card-blue p-4 rounded-lg">
                        <MapPin className="h-6 w-6 text-blue-600 mb-2" />
                        <h3 className="font-medium theme-text text-sm text-center">65,610 km² Island</h3>
                    </div>

                    <div className="flex flex-col items-center theme-card-green p-4 rounded-lg">
                        <Users className="h-6 w-6 text-green-600 mb-2" />
                        <h3 className="font-medium theme-text text-sm text-center">22 Million+ People</h3>
                    </div>

                    <div className="flex flex-col items-center theme-card-orange p-4 rounded-lg">
                        <Globe className="h-6 w-6 text-orange-600 mb-2" />
                        <h3 className="font-medium theme-text text-sm text-center">8 UNESCO Sites</h3>
                    </div>
                </div>

                {/* Description - Compact */}
                <div className="mb-8" data-aos="fade-right" data-aos-duration="500" data-aos-delay="150">
                    <p className="theme-text-muted leading-relaxed text-sm mb-3">
                        Sri Lanka, formerly known as Ceylon, is a stunning island nation in the Indian Ocean, just southeast of
                        India. Despite its compact size, this tropical paradise offers incredible diversity - from pristine beaches
                        and ancient temples to misty mountains and wildlife-rich national parks. You can witness the hot, cold and tropical climate within a few hours of travel, making it a unique destination for all types of travelers.
                    </p>
                    <p className="theme-text-muted leading-relaxed text-sm">
                        With over 2,500 years of recorded history, Sri Lanka boasts eight UNESCO World Heritage Sites,
                        world-renowned Ceylon tea, and some of the friendliest people on Earth.
                    </p>
                </div>

                {/* What Makes Sri Lanka Special - 2x2 Grid */}
                <div className="mb-8">
                    <h3
                        className="text-xl font-bold theme-text mb-4 flex items-center"
                        data-aos="fade-left"
                        data-aos-duration="500"
                        data-aos-delay="200"
                    >
                        <Leaf className="h-5 w-5 mr-2 text-green-600 dark:text-green-400" />
                        What Makes Sri Lanka Special
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" data-aos="fade-up" data-aos-duration="500" data-aos-delay="250">
                        <div className="theme-surface p-5 rounded-xl border border-blue-100 dark:border-blue-900/40 hover:shadow-md transition-shadow">
                            <div className="flex flex-col items-center text-center">
                                <div className="bg-blue-100 dark:bg-blue-900/50 p-4 rounded-2xl mb-3">
                                    <Landmark className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                                </div>
                                <h4 className="font-semibold theme-text text-sm mb-2">Ancient Heritage</h4>
                            </div>
                            <p className="theme-text-muted text-xs leading-relaxed text-center">
                                Sigiriya, Anuradhapura, and Polonnaruwa showcase 2,500+ years of civilization.
                            </p>
                        </div>
                        
                        <div className="theme-surface p-5 rounded-xl border border-orange-100 dark:border-orange-900/40 hover:shadow-md transition-shadow">
                            <div className="flex flex-col items-center text-center">
                                <div className="bg-orange-100 dark:bg-orange-900/50 p-4 rounded-2xl mb-3">
                                    <Thermometer className="h-8 w-8 text-orange-500 dark:text-orange-400" />
                                </div>
                                <h4 className="font-semibold theme-text text-sm mb-2">Sun to Mist in Hours</h4>
                            </div>
                            <p className="theme-text-muted text-xs leading-relaxed text-center">
                                Experience diverse climates from sunny beaches to cool hill country within a short drive.
                            </p>
                        </div>
                        <div className="theme-surface p-5 rounded-xl border border-yellow-100 dark:border-yellow-900/40 hover:shadow-md transition-shadow">
                            <div className="flex flex-col items-center text-center">
                                <div className="bg-yellow-100 dark:bg-yellow-900/50 p-4 rounded-2xl mb-3">
                                    <ChefHat className="h-8 w-8 text-yellow-600 dark:text-yellow-400" />
                                </div>
                                <h4 className="font-semibold theme-text text-sm mb-2">Food &amp; Cuisine</h4>
                            </div>
                            <p className="theme-text-muted text-xs leading-relaxed text-center">
                                Rice &amp; curry, fresh seafood, tropical fruits, and aromatic spices — a feast for every palate.
                            </p>
                        </div>


                        <div className="theme-surface p-5 rounded-xl border border-cyan-100 dark:border-cyan-900/40 hover:shadow-md transition-shadow">
                            <div className="flex flex-col items-center text-center">
                                <div className="bg-cyan-100 dark:bg-cyan-900/50 p-4 rounded-2xl mb-3">
                                    <Waves className="h-8 w-8 text-cyan-600 dark:text-cyan-400" />
                                </div>
                                <h4 className="font-semibold theme-text text-sm mb-2">Pristine Beaches</h4>
                            </div>
                            <p className="theme-text-muted text-xs leading-relaxed text-center">
                                1,340 km of coastline with golden beaches, surfing spots, and whale watching.
                            </p>
                        </div>
                        <div className="theme-surface p-5 rounded-xl border border-green-100 dark:border-green-900/40 hover:shadow-md transition-shadow">
                            <div className="flex flex-col items-center text-center">
                                <div className="bg-green-100 dark:bg-green-900/50 p-4 rounded-2xl mb-3">
                                    <PawPrint className="h-8 w-8 text-green-600 dark:text-green-400" />
                                </div>
                                <h4 className="font-semibold theme-text text-sm mb-2">Wildlife Paradise</h4>
                            </div>
                            <p className="theme-text-muted text-xs leading-relaxed text-center">
                                Leopards, elephants, blue whales, and 26 national parks waiting to be explored.
                            </p>
                        </div>

                        <div className="theme-surface p-5 rounded-xl border border-purple-100 dark:border-purple-900/40 hover:shadow-md transition-shadow">
                            <div className="flex flex-col items-center text-center">
                                <div className="bg-purple-100 dark:bg-purple-900/50 p-4 rounded-2xl mb-3">
                                    <Sparkles className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                                </div>
                                <h4 className="font-semibold theme-text text-sm mb-2">Spiritual Richness</h4>
                            </div>
                            <p className="theme-text-muted text-xs leading-relaxed text-center">
                                Buddhist stupas, Hindu kovils, and Adam&apos;s Peak — spirituality blending deeply with nature.
                            </p>
                        </div>


                    </div>
                </div>

                {/* Best Time & Languages - Horizontal */}
                <div
                    className="theme-surface rounded-lg p-4"
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                >
                    <h3 className="text-lg font-bold theme-text mb-3 flex items-center">
                        <Calendar className="h-5 w-5 mr-2 text-blue-600 dark:text-blue-400" />
                        Essential Travel Info
                    </h3>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-start space-x-3">
                            <Sun className="h-5 w-5 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-1" />
                            <div>
                                <h4 className="font-medium theme-text text-sm">Best Time to Visit</h4>
                                <p className="theme-text-muted text-xs">
                                    Dec-Mar (West/South), Apr-Sep (East/North). Year-round destination.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-3">
                            <Globe className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                            <div>
                                <h4 className="font-medium theme-text text-sm">Languages</h4>
                                <p className="theme-text-muted text-xs">
                                    Sinhala, Tamil, English widely spoken in tourism.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4 pt-4 border-t theme-border">
                        <div className="flex items-start space-x-3">
                            <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                            <div>
                                <h4 className="font-medium theme-text text-sm">Currency & Visa</h4>
                                <p className="theme-text-muted text-xs">
                                    Sri Lankan Rupee (LKR). ETA visa required for most countries. Easy online application.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* More About Sri Lanka Button */}
                <div className="text-center mt-8" data-aos="fade-up" data-aos-duration="400" data-aos-delay="100">
                    <a 
                        href="/more-about-sri-lanka"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center justify-center mx-auto cursor-pointer"
                    >
                        <Globe className="h-5 w-5 mr-2" />
                        More About Sri Lanka
                    </a>
                </div>
            </div>
        </section>
    )
}

export default SriLankaAboutCompact;
export { SriLankaAboutCompact };