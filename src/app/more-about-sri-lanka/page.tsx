import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { MapPin, Users, Globe, Coffee, Crown, Gem, Trophy, Heart, Sunrise, Palmtree, Fish, Mountain, Camera, Trees, Leaf, Award, BookOpen, Waves } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "More About Sri Lanka: Complete Guide to the Pearl of the Indian Ocean | Culture, History & Facts",
  description: "Discover fascinating facts about Sri Lanka - from ancient kingdoms and colonial heritage to world-famous Ceylon tea, cricket legacy, and biodiversity hotspots. Complete travel guide 2025.",
  keywords: "Sri Lanka facts, Ceylon tea, Sri Lanka culture, colonial history, biodiversity, cricket, gems, World Heritage sites, travel guide Sri Lanka",
}

const MoreAboutSriLanka = () => {
    return (
        <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                        <Badge className="bg-white/20 text-white border-none">Pearl of the Indian Ocean</Badge>
                        <Badge className="bg-white/20 text-white border-none">22 Million People</Badge>
                        <Badge className="bg-white/20 text-white border-none">8 UNESCO Sites</Badge>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        🇱🇰 Sri Lanka: More Than Paradise
                    </h1>
                    <p className="text-xl text-white/90">
                        Discover the Rich History, Vibrant Culture, and Fascinating Facts About This Island Nation
                    </p>
                </div>
            </section>

            {/* Introduction Disclaimer */}
            <div className="max-w-6xl mx-auto px-4 py-6">
                <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-l-blue-500 p-4 rounded">
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                        <strong>📌 About This Guide:</strong> This comprehensive guide presents verified facts, historical timelines, and cultural insights about Sri Lanka. Information is sourced from official records, UNESCO documentation, and reputable historical sources. We present multiple perspectives where relevant for educational purposes.
                    </p>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 py-8">
                
                {/* Quick Facts Overview */}
                <section className="mb-12">
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">🌏 Sri Lanka at a Glance</h2>
                        
                        <div className="flex flex-col md:flex-row gap-6 mb-6">
                            <div className="relative w-full md:w-2/5 h-80">
                                <Image
                                    src="/Nuwara-Eliya.jpg"
                                    alt="Beautiful landscape of Sri Lanka showing tea plantations in Nuwara Eliya"
                                    fill
                                    className="object-cover rounded-lg"
                                />
                            </div>
                            
                            <div className="flex-1">
                                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                                    Sri Lanka, officially the <strong>Democratic Socialist Republic of Sri Lanka</strong>, is a tropical island nation located in South Asia. Known historically as <strong>Ceylon</strong> until 1972, this teardrop-shaped island off India's southern coast has captured the imagination of travelers, traders, and explorers for thousands of years.
                                </p>
                                
                                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                                    With a recorded history spanning over <strong>3,000 years</strong>, Sri Lanka boasts one of the world's oldest continuously documented civilizations. The island's strategic location on ancient maritime trade routes made it a crossroads of cultures, religions, and ideas.
                                </p>
                                
                                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                                    Today, Sri Lanka is home to <strong>over 22 million people</strong> across <strong>65,610 square kilometers</strong> (25,330 square miles), making it roughly the size of Ireland or West Virginia. Despite its small size, the island contains remarkable geographic diversity - from pristine beaches and dense rainforests to misty mountains and arid plains.
                                </p>
                                
                                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                                    <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Quick Statistics:</h3>
                                    <ul className="space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                                        <li><strong>Capital:</strong> Sri Jayawardenepura Kotte (Legislative), Colombo (Commercial)</li>
                                        <li><strong>Largest City:</strong> Colombo (~750,000 people)</li>
                                        <li><strong>Official Languages:</strong> Sinhala, Tamil, English</li>
                                        <li><strong>Population Density:</strong> ~340 people per km²</li>
                                        <li><strong>Literacy Rate:</strong> 92.6% (one of the highest in South Asia)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Did You Know Card */}
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 rounded-lg shadow-lg mb-8">
                    <h3 className="text-xl font-bold mb-2">🤔 Did You Know?</h3>
                    <p className="text-white/90">
                        Sri Lanka was the first country in the world to have a female prime minister! Sirimavo Bandaranaike was elected in 1960, breaking barriers in global politics. The island also has the oldest living human-planted tree - the <strong>Jaya Sri Maha Bodhi</strong> in Anuradhapura, planted in 288 BC and still thriving today after 2,300+ years!
                    </p>
                </div>

                {/* Fascinating Facts Grid */}
                <section className="mb-12">
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white" id="facts">🌟 Fascinating Facts About Sri Lanka</h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-lg">
                                <div className="flex items-center gap-3 mb-3">
                                    <Coffee className="h-8 w-8 text-amber-600" />
                                    <h3 className="font-bold text-xl text-gray-900 dark:text-white">Ceylon Tea Capital</h3>
                                </div>
                                <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                                    <li className="flex items-start gap-2">
                                        <span className="text-amber-600 mt-1">•</span>
                                        <span><strong>4th largest tea producer</strong> globally</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-amber-600 mt-1">•</span>
                                        <span>Tea industry began in <strong>1867</strong> by British planter James Taylor</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-amber-600 mt-1">•</span>
                                        <span>Exports over <strong>300 million kg</strong> of tea annually</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-amber-600 mt-1">•</span>
                                        <span>Sri Lankan tea is shipped to <strong>over 150 countries</strong></span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-amber-600 mt-1">•</span>
                                        <span>"Ceylon Tea" brand is recognized worldwide for quality</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                                <div className="flex items-center gap-3 mb-3">
                                    <Gem className="h-8 w-8 text-blue-600" />
                                    <h3 className="font-bold text-xl text-gray-900 dark:text-white">Island of Gems</h3>
                                </div>
                                <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-600 mt-1">•</span>
                                        <span>Known as <strong>"Ratna-Dweepa"</strong> (Island of Gems)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-600 mt-1">•</span>
                                        <span>Produces <strong>25% of world's high-quality blue sapphires</strong></span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-600 mt-1">•</span>
                                        <span>Home to <strong>over 75 varieties</strong> of precious and semi-precious stones</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-600 mt-1">•</span>
                                        <span>Famous gems include star sapphires, rubies, cat's eyes, and garnets</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-600 mt-1">•</span>
                                        <span>Gem industry dates back <strong>over 2,500 years</strong></span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
                                <div className="flex items-center gap-3 mb-3">
                                    <Leaf className="h-8 w-8 text-green-600" />
                                    <h3 className="font-bold text-xl text-gray-900 dark:text-white">Biodiversity Hotspot</h3>
                                </div>
                                <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-600 mt-1">•</span>
                                        <span>One of <strong>36 global biodiversity hotspots</strong></span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-600 mt-1">•</span>
                                        <span><strong>Yala National Park</strong> has world's highest leopard density</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-600 mt-1">•</span>
                                        <span>Home to <strong>26 endemic bird species</strong></span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-600 mt-1">•</span>
                                        <span>Contains <strong>3,771 flowering plant species</strong>, 1,000+ endemic</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-600 mt-1">•</span>
                                        <span>Largest Asian elephant population density in the world</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
                                <div className="flex items-center gap-3 mb-3">
                                    <Crown className="h-8 w-8 text-purple-600" />
                                    <h3 className="font-bold text-xl text-gray-900 dark:text-white">Ancient Civilization</h3>
                                </div>
                                <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                                    <li className="flex items-start gap-2">
                                        <span className="text-purple-600 mt-1">•</span>
                                        <span><strong>Anuradhapura</strong> founded in 377 BC, one of world's oldest cities</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-purple-600 mt-1">•</span>
                                        <span>Recorded history spanning <strong>over 3,000 years</strong></span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-purple-600 mt-1">•</span>
                                        <span><strong>8 UNESCO World Heritage Sites</strong></span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-purple-600 mt-1">•</span>
                                        <span>Ancient hydraulic civilization with <strong>advanced irrigation systems</strong></span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-purple-600 mt-1">•</span>
                                        <span>Sigiriya Rock Fortress called "8th Wonder of the World"</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg">
                                <div className="flex items-center gap-3 mb-3">
                                    <Trophy className="h-8 w-8 text-yellow-600" />
                                    <h3 className="font-bold text-xl text-gray-900 dark:text-white">Cricket Legacy</h3>
                                </div>
                                <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                                    <li className="flex items-start gap-2">
                                        <span className="text-yellow-600 mt-1">•</span>
                                        <span><strong>1996 Cricket World Cup Champions</strong></span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-yellow-600 mt-1">•</span>
                                        <span>Produced legends like Muttiah Muralitharan (highest Test wickets ever)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-yellow-600 mt-1">•</span>
                                        <span>Cricket is considered the national sport</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-yellow-600 mt-1">•</span>
                                        <span>Multiple ICC tournament finals reached</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-yellow-600 mt-1">•</span>
                                        <span>Iconic Galle International Stadium by the ocean</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg">
                                <div className="flex items-center gap-3 mb-3">
                                    <Award className="h-8 w-8 text-red-600" />
                                    <h3 className="font-bold text-xl text-gray-900 dark:text-white">World Records</h3>
                                </div>
                                <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-600 mt-1">•</span>
                                        <span>First country with female Prime Minister (1960)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-600 mt-1">•</span>
                                        <span>World's oldest living human-planted tree (2,300+ years)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-600 mt-1">•</span>
                                        <span>Highest literacy rate in South Asia at <strong>92.6%</strong></span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-600 mt-1">•</span>
                                        <span>First country in Asia to introduce universal suffrage (1931)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-600 mt-1">•</span>
                                        <span>Spice exporter since ancient times (cinnamon, cardamom, pepper)</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Colonial History */}
                <section className="mb-12">
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">🏛️ Colonial Legacy: 450 Years of European Influence</h2>
                        
                        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                            Three European powers ruled Sri Lanka for 450 years, leaving behind beautiful forts, delicious food traditions, and unique architecture you can still enjoy today!
                        </p>
                        
                        <div className="space-y-6">
                            <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg border-l-4 border-l-orange-500">
                                <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-3">🇵🇹 Portuguese Era (1505-1658) - 153 Years</h3>
                                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                                    <li className="flex items-start gap-2">
                                        <span className="text-orange-600 mt-1">•</span>
                                        <span><strong>1505:</strong> Portuguese explorer Lourenço de Almeida accidentally arrived in Sri Lanka (then Ceylon)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-orange-600 mt-1">•</span>
                                        <span>Established control over coastal areas, particularly the southwest and northern Jaffna peninsula</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-orange-600 mt-1">•</span>
                                        <span>Introduced <strong>Christianity (Catholicism)</strong> and built numerous churches</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-orange-600 mt-1">•</span>
                                        <span>Brought <strong>Portuguese words</strong> into Sinhala language (e.g., "pão" → "paan" for bread)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-orange-600 mt-1">•</span>
                                        <span>Controlled the <strong>cinnamon trade</strong>, which was highly valuable in Europe</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-orange-600 mt-1">•</span>
                                        <span>Never conquered the <strong>Kandyan Kingdom</strong> in the central highlands</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border-l-4 border-l-blue-500">
                                <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-3">🇳🇱 Dutch Era (1658-1796) - 138 Years</h3>
                                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-600 mt-1">•</span>
                                        <span><strong>1658:</strong> Dutch East India Company (VOC) defeated Portuguese and took control</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-600 mt-1">•</span>
                                        <span>Built the iconic <strong>Galle Fort</strong> (1663-1729), now a UNESCO World Heritage Site</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-600 mt-1">•</span>
                                        <span>Introduced advanced <strong>canal systems</strong> still used today in Colombo</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-600 mt-1">•</span>
                                        <span>Established <strong>Roman-Dutch law</strong> system (parts still used in Sri Lankan law)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-600 mt-1">•</span>
                                        <span>Controlled trade in <strong>cinnamon, pepper, areca nuts,</strong> and <strong>elephants</strong></span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-600 mt-1">•</span>
                                        <span>Introduced <strong>Protestantism</strong> and built churches that still stand today</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-600 mt-1">•</span>
                                        <span>Famous Dutch surnames still common in Sri Lanka (e.g., De Silva, Fernando, Perera)</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border-l-4 border-l-red-500">
                                <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-3">🇬🇧 British Era (1796-1948) - 152 Years</h3>
                                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-600 mt-1">•</span>
                                        <span><strong>1796:</strong> British took coastal areas from Dutch during Napoleonic Wars</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-600 mt-1">•</span>
                                        <span><strong>1815:</strong> Finally conquered the <strong>Kandyan Kingdom</strong>, unifying the entire island under one rule for the first time since 1505</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-600 mt-1">•</span>
                                        <span><strong>1802:</strong> Ceylon became a British Crown Colony</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-600 mt-1">•</span>
                                        <span><strong>1867:</strong> James Taylor planted first <strong>commercial tea plantation</strong> in Loolecondera Estate</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-600 mt-1">•</span>
                                        <span>Built extensive <strong>railway network</strong> connecting Colombo to Kandy, Ella, and tea country</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-600 mt-1">•</span>
                                        <span>Established <strong>English education system</strong> and colonial administrative framework</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-600 mt-1">•</span>
                                        <span><strong>1931:</strong> Introduced universal suffrage - first in Asia</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-600 mt-1">•</span>
                                        <span><strong>February 4, 1948:</strong> Sri Lanka gained independence peacefully</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                                <h4 className="font-bold text-gray-900 dark:text-white mb-2">🎯 What You'll See Today:</h4>
                                <p className="text-sm text-gray-700 dark:text-gray-300">
                                    Beautiful Dutch forts, British-built train rides through tea country, Portuguese-influenced food, and cricket-crazy locals! You'll find English widely spoken, making your trip super easy and fun.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Another Did You Know */}
                <div className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white p-6 rounded-lg shadow-lg mb-8">
                    <h3 className="text-xl font-bold mb-2">🌍 Did You Know?</h3>
                    <p className="text-white/90">
                        Sri Lanka's <strong>Sinharaja Forest Reserve</strong> is one of the last remaining primary tropical rainforests in Asia! It contains 60% of Sri Lanka's endemic trees, and scientists discover new species there regularly. The forest is so biodiverse that a single tree can host more species of ants than found in all of the British Isles!
                    </p>
                </div>

                {/* Culture & Festivals */}
                <section className="mb-12">
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">🎭 Sri Lankan Culture: A Vibrant Mosaic</h2>
                        
                        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                            Sri Lankans are famous for their <strong>warm smiles and friendly hospitality!</strong> The island is a happy mix of different cultures - Sinhalese, Tamils, Muslims, and Christians all living together peacefully. You'll love how welcoming everyone is!
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg">
                                <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                                    <span className="text-2xl">🙏</span> Major Religions
                                </h3>
                                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                                    <li><strong>Buddhism:</strong> 70.2% (mainly Sinhalese)</li>
                                    <li><strong>Hinduism:</strong> 12.6% (mainly Tamils)</li>
                                    <li><strong>Islam:</strong> 9.7% (Moors and Malays)</li>
                                    <li><strong>Christianity:</strong> 7.4% (all ethnicities)</li>
                                </ul>
                                <p className="text-sm mt-3 text-gray-600 dark:text-gray-400">
                                    Best part? Everyone celebrates together! You'll experience colorful festivals year-round.
                                </p>
                            </div>

                            <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
                                <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                                    <span className="text-2xl">🗣️</span> Languages
                                </h3>
                                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                                    <li><strong>Sinhala:</strong> Official language, spoken by 74%</li>
                                    <li><strong>Tamil:</strong> Official language, spoken by 18%</li>
                                    <li><strong>English:</strong> Link language, widely spoken in cities</li>
                                </ul>
                                <p className="text-sm mt-3 text-gray-600 dark:text-gray-400">
                                    Don't worry about language barriers - most people speak English, especially in tourist areas!
                                </p>
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">🎊 Major Festivals & Celebrations</h3>
                        <div className="space-y-4">
                            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border-l-4 border-l-yellow-500">
                                <h4 className="font-bold text-gray-900 dark:text-white">🪔 Vesak (April/May)</h4>
                                <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                                    The whole country lights up with <strong>thousands of colorful lanterns!</strong> Free food everywhere you go. Pure magic!
                                </p>
                            </div>

                            <div className="bg-pink-50 dark:bg-pink-900/20 p-4 rounded-lg border-l-4 border-l-pink-500">
                                <h4 className="font-bold text-gray-900 dark:text-white">🐘 Kandy Esala Perahera (July/August)</h4>
                                <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                                    Asia's most spectacular parade! <strong>100+ beautifully decorated elephants</strong>, dancers, drummers, and fire shows for 10 magical nights!
                                </p>
                            </div>

                            <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border-l-4 border-l-orange-500">
                                <h4 className="font-bold text-gray-900 dark:text-white">☀️ Sinhala & Tamil New Year (April 13-14)</h4>
                                <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                                    Biggest celebration of the year! Families play traditional games, share delicious food, and welcome the new year together. The whole country takes a holiday!
                                </p>
                            </div>

                            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-l-blue-500">
                                <h4 className="font-bold text-gray-900 dark:text-white">🌾 Thai Pongal (January)</h4>
                                <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                                    Harvest celebration with sweet <strong>milk rice</strong> and beautifully decorated cows! So colorful and fun to watch.
                                </p>
                            </div>

                            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border-l-4 border-l-green-500">
                                <h4 className="font-bold text-gray-900 dark:text-white">🌙 Ramadan & Eid (Dates Vary)</h4>
                                <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                                    Month of prayer followed by joyful <strong>Eid celebration</strong> with amazing food, new clothes, and gift-giving!
                                </p>
                            </div>

                            <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border-l-4 border-l-red-500">
                                <h4 className="font-bold text-gray-900 dark:text-white">🎄 Christmas (December 25)</h4>
                                <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                                    Everyone celebrates together with carols, lights, and festive decorations. National holiday for all!
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Provinces & Districts */}
                <section className="mb-12">
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">🗺️ Provinces & Districts: Explore Every Corner</h2>
                        
                        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                            Sri Lanka has <strong>9 provinces</strong>, each with its own special charm! From bustling cities to peaceful tea country, misty mountains to sunny beaches - there's something for everyone!
                        </p>

                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">🏙️ Western Province</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Districts: Colombo, Gampaha, Kalutara</p>
                                <p className="text-sm text-gray-700 dark:text-gray-300">
                                    The busy heart of Sri Lanka! Shopping, beaches, restaurants, and exciting city vibes.
                                </p>
                            </div>

                            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
                                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">🏔️ Central Province</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Districts: Kandy, Matale, Nuwara Eliya</p>
                                <p className="text-sm text-gray-700 dark:text-gray-300">
                                    Beautiful tea country! Cool weather, stunning train rides, and the famous Temple of the Tooth.
                                </p>
                            </div>

                            <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg">
                                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">🏖️ Southern Province</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Districts: Galle, Matara, Hambantota</p>
                                <p className="text-sm text-gray-700 dark:text-gray-300">
                                    Paradise beaches, Galle Fort, whale watching, and amazing surf spots. Pure relaxation!
                                </p>
                            </div>

                            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg">
                                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">🐘 North Central Province</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Districts: Anuradhapura, Polonnaruwa</p>
                                <p className="text-sm text-gray-700 dark:text-gray-300">
                                    Ancient kingdoms with giant stupas and the world's oldest tree! History lovers' dream.
                                </p>
                            </div>

                            <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
                                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">🦁 North Western Province</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Districts: Kurunegala, Puttalam</p>
                                <p className="text-sm text-gray-700 dark:text-gray-300">
                                    Coconut plantations, saltpans, Wilpattu National Park (oldest in Sri Lanka), and historic sites.
                                </p>
                            </div>

                            <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg">
                                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">🏛️ North Province</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Districts: Jaffna, Kilinochchi, Mullaitivu, Mannar, Vavuniya</p>
                                <p className="text-sm text-gray-700 dark:text-gray-300">
                                    Rich Tamil culture, spicy delicious food, colorful Hindu temples, and untouched islands.
                                </p>
                            </div>

                            <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-lg">
                                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">🌊 Eastern Province</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Districts: Trincomalee, Batticaloa, Ampara</p>
                                <p className="text-sm text-gray-700 dark:text-gray-300">
                                    Quiet beaches, natural hot springs, great surfing, and amazing snorkeling spots!
                                </p>
                            </div>

                            <div className="bg-pink-50 dark:bg-pink-900/20 p-6 rounded-lg">
                                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">🦚 Uva Province</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Districts: Badulla, Monaragala</p>
                                <p className="text-sm text-gray-700 dark:text-gray-300">
                                    Instagram heaven! Ella town, Nine Arch Bridge, waterfalls, and easy hiking trails.
                                </p>
                            </div>

                            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-lg">
                                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">🐆 Sabaragamuwa Province</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Districts: Ratnapura, Kegalle</p>
                                <p className="text-sm text-gray-700 dark:text-gray-300">
                                    Gem capital! Visit real gem mines, climb Adam's Peak, explore rainforests.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Travel Tips Section */}
                <div className="mb-16 bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-4 sm:p-8">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Essential Travel Tips</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
                            <h3 className="text-xl font-bold mb-3 flex items-center">
                                <Sunrise className="h-5 w-5 mr-2 text-orange-500" />
                                Best Time to Visit
                            </h3>
                            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>Dec-Mar: Perfect for West & South coast</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>Apr-Sep: Ideal for East coast</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>Jan-Mar: Best for hill country</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>Wildlife viewing: Year-round</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
                            <h3 className="text-xl font-bold mb-3 flex items-center">
                                <Globe className="h-5 w-5 mr-2 text-blue-500" />
                                Travel Essentials
                            </h3>
                            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>ETA Visa required for most visitors</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>Light, breathable clothing</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>Mosquito repellent</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>Modest dress for temples</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
                            <h3 className="text-xl font-bold mb-3 flex items-center">
                                <Heart className="h-5 w-5 mr-2 text-red-500" />
                                Local Customs
                            </h3>
                            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>Remove shoes at temples</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>Don't pose with Buddha statues</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>Use right hand for eating</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>Greet with "Ayubowan"</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center py-12 sm:py-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl text-white mx-4 sm:mx-0">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Explore Paradise?</h2>
                    <p className="text-lg sm:text-xl mb-8">Join us for an unforgettable journey through this magical island</p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4">
                        <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors w-full sm:w-auto">
                            Start Planning Your Trip
                        </button>
                        <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors w-full sm:w-auto">
                            View Popular Destinations
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default MoreAboutSriLanka;