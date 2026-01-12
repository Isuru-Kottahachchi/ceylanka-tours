import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Shapes of Stupas in Sri Lanka - Buddhist Architecture Guide | CeyLanka Tours',
    description: 'Discover the fascinating shapes of Buddhist stupas in Sri Lanka. Learn about Bubulakara, Padmakara, Bellakara, and other architectural forms with examples from ancient temples.',
    keywords: 'Sri Lanka stupas, Buddhist architecture, Bubulakara stupa, Padmakara stupa, Bellakara stupa, Dagoba shapes, Sri Lankan temples',
};

export default function ShapesOfStupaPage() {
    return (
        <main className="bg-white text-gray-800">
            {/* Hero Header */}
            <section className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-16 lg:py-24">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        Shapes of Stupas in Sri Lanka
                    </h1>
                    <p className="text-xl md:text-2xl mb-6 max-w-3xl mx-auto font-light text-cyan-100">
                        Exploring the sacred architecture and symbolic designs of Buddhist stupas across the island
                    </p>
                    <div className="flex flex-wrap justify-center gap-3 mt-8">
                        <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm border border-white/30">⛩️ Sacred Architecture</span>
                        <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm border border-white/30">📿 Buddhist Heritage</span>
                        <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm border border-white/30">🏛️ Ancient Designs</span>
                    </div>
                </div>
            </section>

            {/* Fact Check Banner */}
            <div className="max-w-6xl mx-auto px-4 py-8">
                {/* <div className="mb-8 border-l-4 border-l-cyan-500 bg-cyan-50 p-4 rounded-r-lg">
                    <div className="flex items-center gap-3">
                        <div className="text-cyan-600 text-xl font-bold">✓</div>
                        <div>
                            <p className="font-semibold text-sm text-gray-800">Researched & Verified by Buddhist Architecture Experts</p>
                            <p className="text-xs text-gray-600">Last updated: January 2025 • Information verified with archaeological records and temple authorities</p>
                        </div>
                    </div>
                </div> */}

                {/* Introduction */}
                <section className="mb-12">
                    <div className="prose prose-lg max-w-none">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Understanding Stupas in Sri Lanka</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Stupas, also called dagobas or cetiya in Sri Lanka, are the most important structures in Buddhist architecture. These dome-shaped buildings hold sacred relics and serve as places of worship and meditation. Sri Lanka has some of the oldest and most beautiful stupas in the world, built over 2,000 years ago.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            The shape of a stupa is not just about beauty. Each design has deep religious meaning and follows ancient architectural rules written in Buddhist texts. Different shapes represent different spiritual ideas and were built during various periods of Sri Lankan history.
                        </p>
                    </div>
                </section>

                {/* Did You Know Card 1 */}
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-l-purple-500 p-6 rounded-r-lg mb-8 shadow-sm">
                    <div className="flex items-start gap-3">
                        <div className="text-2xl">💡</div>
                        <div>
                            <h3 className="font-bold text-purple-900 mb-2">Did You Know?</h3>
                            <p className="text-gray-700 text-sm">
                                The Jetavanaramaya stupa in Anuradhapura was once the third tallest structure in the ancient world, standing at 122 meters (400 feet). It required over 93 million baked bricks to build!
                            </p>
                        </div>
                    </div>
                </div>
                <section className="mb-12 bg-gradient-to-br from-gray-50 to-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                        {/* Image Section */}
                        <div className="relative w-full md:w-2/5 h-64 md:h-auto">
                            <Image
                                src="/images/stupa-parts.jpg"
                                alt="Parts of a Stupa Diagram"
                                fill
                                className="object-cover"
                            />
                        </div>
                        {/* Content Section */}
                        <div className="p-6 flex-1">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Parts of a Stupa</h2>
                            <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                                Every stupa, regardless of its shape, has the same basic parts. Understanding these elements helps you appreciate the complete design:
                            </p>

                            <div className="grid md:grid-cols-2 gap-3">
                                <div className="bg-white p-4 rounded-lg border border-gray-200">
                                    <h3 className="font-bold text-base text-gray-900 mb-1">🔵 Pesa Valalu (Base Platforms)</h3>
                                    <p className="text-gray-700 text-xs">
                                        Three circular platforms that get smaller as they go up. These represent the stages of spiritual development from earth to enlightenment.
                                    </p>
                                </div>

                                <div className="bg-white p-4 rounded-lg border border-gray-200">
                                    <h3 className="font-bold text-base text-gray-900 mb-1">🔵 Garbhaya (Relic Chamber)</h3>
                                    <p className="text-gray-700 text-xs">
                                        The secret room deep inside the dome where sacred relics are kept. Once sealed, it is never opened again.
                                    </p>
                                </div>

                                <div className="bg-white p-4 rounded-lg border border-gray-200">
                                    <h3 className="font-bold text-base text-gray-900 mb-1">🔵 Anda or Garbha (The Dome)</h3>
                                    <p className="text-gray-700 text-xs">
                                        The main round structure. Its shape determines what type of stupa it is (Bubulakara, Padmakara, etc.).
                                    </p>
                                </div>

                                <div className="bg-white p-4 rounded-lg border border-gray-200">
                                    <h3 className="font-bold text-base text-gray-900 mb-1">🔵 Hatharas Kotuwa (Square Terrace)</h3>
                                    <p className="text-gray-700 text-xs">
                                        The square platform on top of the dome. It represents the transition from the round (worldly) to the square (divine).
                                    </p>
                                </div>

                                <div className="bg-white p-4 rounded-lg border border-gray-200">
                                    <h3 className="font-bold text-base text-gray-900 mb-1">🔵 Devata Kotuwa (Crown)</h3>
                                    <p className="text-gray-700 text-xs">
                                        The spire or crown at the very top, often with umbrella-like rings. These rings (usually 7 or 9) represent the levels of heaven.
                                    </p>
                                </div>

                                <div className="bg-white p-4 rounded-lg border border-gray-200">
                                    <h3 className="font-bold text-base text-gray-900 mb-1">🔵 Kotha (Pinnacle)</h3>
                                    <p className="text-gray-700 text-xs">
                                        The very tip of the stupa, often holding a crystal or gem. This represents the final point of enlightenment.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Main Stupa Shapes */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">The Five Main Shapes of Stupas</h2>

                    {/* 1. Bubulakara (Heap of Paddy) */}
                    <div className="mb-10 bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                        <div className="flex flex-col md:flex-row">
                            {/* Image Section */}
                            <div className="relative w-full md:w-2/5 h-64 md:h-auto">
                                <Image
                                    src="/Ruwanwalisaya.jpeg"
                                    alt="Bubulakara Stupa - Ruwanwelisaya"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            {/* Content Section */}
                            <div className="p-6 flex-1">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold">Shape 1</span>
                                    <h3 className="text-2xl font-bold text-gray-900">Bubulakara (බුබුලාකාර)</h3>
                                </div>
                                <p className="text-gray-700 mb-4">
                                    <strong>Meaning:</strong> "Like a heap of paddy rice"
                                </p>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    This is the most common stupa shape in Sri Lanka. It looks like a pile of rice grains that farmers create after harvest. The dome is round and full, rising smoothly from the base. This shape represents abundance, prosperity, and the gathering of good merit.
                                </p>
                                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                                    <p className="font-semibold text-gray-900 mb-2">Famous Examples:</p>
                                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                                        <li><strong>Ruwanwelisaya</strong> in Anuradhapura - Built by King Dutugemunu in 140 BC</li>
                                        <li><strong>Mirisawetiya</strong> in Anuradhapura - One of the eight sacred places</li>
                                        <li><strong>Kiri Vehera</strong> in Polonnaruwa - Known for its pure white color</li>
                                    </ul>
                                </div>
                                <p className="text-gray-700 leading-relaxed">
                                    The Ruwanwelisaya is the perfect example of this shape. When you look at it, you can see how the dome curves gently like a perfect mound of rice. The ancient builders were so skilled that the shape is still perfect after more than 2,000 years.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 2. Padmakara (Lotus Shape) */}
                    <div className="mb-10 bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                        <div className="flex flex-col md:flex-row">
                            {/* Image Section */}
                            <div className="relative w-full md:w-2/5 h-64 md:h-auto">
                                <Image
                                    src="/Abhayagiriya.jpeg"
                                    alt="Padmakara Stupa - Abhayagiri Dagoba"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            {/* Content Section */}
                            <div className="p-6 flex-1">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">Shape 2</span>
                                    <h3 className="text-2xl font-bold text-gray-900">Padmakara (පද්මාකාර)</h3>
                                </div>
                                <p className="text-gray-700 mb-4">
                                    <strong>Meaning:</strong> "Like a lotus flower"
                                </p>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    This shape looks like a lotus bud that is about to bloom. The dome is taller and more pointed than the Bubulakara. The lotus flower is very important in Buddhism because it grows from mud but produces beautiful, clean flowers. This represents how people can rise above worldly problems to reach enlightenment.
                                </p>
                                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                                    <p className="font-semibold text-gray-900 mb-2">Famous Examples:</p>
                                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                                        <li><strong>Abhayagiri Dagoba</strong> in Anuradhapura - Second largest stupa in Sri Lanka</li>
                                        <li><strong>Rankot Vehera</strong> in Polonnaruwa - The largest stupa in Polonnaruwa</li>
                                    </ul>
                                </div>
                                <p className="text-gray-700 leading-relaxed">
                                    The Abhayagiri stupa shows this design beautifully. Its dome rises higher and comes to a more elegant point, just like a lotus bud reaching towards the sky.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Did You Know Card 2 */}
                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-l-blue-500 p-6 rounded-r-lg mb-8 shadow-sm">
                        <div className="flex items-start gap-3">
                            <div className="text-2xl">💡</div>
                            <div>
                                <h3 className="font-bold text-blue-900 mb-2">Did You Know?</h3>
                                <p className="text-gray-700 text-sm">
                                    Ancient Sri Lankan builders used a special technique where they placed a crystal or gem at the very top of the stupa. This was believed to spread positive energy in all directions. Some stupas still have these crystals today!
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 3. Ghandakara (Bell Shape) */}
                    <div className="mb-10 bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                        <div className="flex flex-col md:flex-row">
                            {/* Image Section */}
                            <div className="relative w-full md:w-2/5 h-64 md:h-auto">
                                <Image
                                    src="/Thooparamaya.jpeg"
                                    alt="Ghandakara Stupa - Thuparamaya"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            {/* Content Section */}
                            <div className="p-6 flex-1">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">Shape 3</span>
                                    <h3 className="text-2xl font-bold text-gray-900">Ghandakara (ඝණ්ඩාකාර)</h3>
                                </div>
                                <p className="text-gray-700 mb-4">
                                    <strong>Meaning:</strong> "Like a bell" (also called Bellakara)
                                </p>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    This stupa shape looks like an upside-down bell. The dome has a distinct shoulder or curve, then narrows towards the top. This shape became popular during the later periods of Sri Lankan history, especially in the Polonnaruwa era (11th-13th centuries).
                                </p>
                                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                                    <p className="font-semibold text-gray-900 mb-2">Famous Examples:</p>
                                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                                        <li><strong>Thuparamaya</strong> in Anuradhapura - The oldest stupa in Sri Lanka (rebuilt in bell shape)</li>
                                        <li><strong>Kiribath Vehera</strong> in Polonnaruwa</li>
                                        <li><strong>Somawathiya Chaitiya</strong> - Located in a national park</li>
                                    </ul>
                                </div>
                                <p className="text-gray-700 leading-relaxed">
                                    The bell shape is easy to recognize because of its strong shoulder curve. When you see a stupa with this distinct curve, you know it was likely built or restored during the medieval period of Sri Lankan history.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 4. Amalakara (Nelli Fruit Shape) */}
                    <div className="mb-10 bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                        <div className="flex flex-col md:flex-row">
                            {/* Image Section */}
                            <div className="relative w-full md:w-2/5 h-64 md:h-auto">
                                <Image
                                    src="/images/stupa-amalakara.jpg"
                                    alt="Amalakara Stupa Shape"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            {/* Content Section */}
                            <div className="p-6 flex-1">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">Shape 4</span>
                                    <h3 className="text-2xl font-bold text-gray-900">Amalakara (ආමලකාර)</h3>
                                </div>
                                <p className="text-gray-700 mb-4">
                                    <strong>Meaning:</strong> "Like an Amalaka fruit" (Indian gooseberry or Nelli fruit)
                                </p>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    This is a rare shape that looks like the Indian gooseberry fruit. The dome is rounded but has a slightly flattened appearance, similar to the fruit when viewed from the side. This shape is less common in Sri Lanka compared to other shapes.
                                </p>
                                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                                    <p className="font-semibold text-gray-900 mb-2">Characteristics:</p>
                                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                                        <li>Slightly flattened dome compared to the Bubulakara shape</li>
                                        <li>Gentle curves without sharp angles</li>
                                        <li>Often found in smaller stupas and relic chambers</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Did You Know Card 3 */}
                    <div className="bg-gradient-to-r from-green-50 to-teal-50 border-l-4 border-l-green-500 p-6 rounded-r-lg mb-8 shadow-sm">
                        <div className="flex items-start gap-3">
                            <div className="text-2xl">💡</div>
                            <div>
                                <h3 className="font-bold text-green-900 mb-2">Did You Know?</h3>
                                <p className="text-gray-700 text-sm">
                                    Buddhist monks walk around stupas in a clockwise direction as a form of meditation and respect. This practice is called "pradakshina" and helps calm the mind while showing devotion to the Buddha's teachings.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 5. Dhatukara (Casket Shape) */}
                    <div className="mb-10 bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                        <div className="flex flex-col md:flex-row">
                            {/* Image Section */}
                            <div className="relative w-full md:w-2/5 h-64 md:h-auto">
                                <Image
                                    src="/images/stupa-dhatukara.jpg"
                                    alt="Dhatukara Stupa Shape"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            {/* Content Section */}
                            <div className="p-6 flex-1">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">Shape 5</span>
                                    <h3 className="text-2xl font-bold text-gray-900">Dhatukara (ධාතුකාර)</h3>
                                </div>
                                <p className="text-gray-700 mb-4">
                                    <strong>Meaning:</strong> "Like a relic casket" (also called Garbhakara)
                                </p>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    This shape resembles the small boxes or caskets used to store sacred relics. It has a squared or cylindrical base with a dome on top. This design is based on the actual containers that hold Buddha's relics inside the stupa.
                                </p>
                                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                                    <p className="font-semibold text-gray-900 mb-2">Characteristics:</p>
                                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                                        <li>Combination of rectangular and curved elements</li>
                                        <li>Often used for smaller stupas or relic chambers</li>
                                        <li>Represents the sacred container holding Buddha's relics</li>
                                    </ul>
                                </div>
                                <p className="text-gray-700 leading-relaxed">
                                    While this is the least common of the five shapes for large stupas, you can often see this design in smaller structures within temple complexes.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Architectural Elements */}


                {/* Did You Know Card 4 */}
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-l-yellow-500 p-6 rounded-r-lg mb-8 shadow-sm">
                    <div className="flex items-start gap-3">
                        <div className="text-2xl">💡</div>
                        <div>
                            <h3 className="font-bold text-yellow-900 mb-2">Did You Know?</h3>
                            <p className="text-gray-700 text-sm">
                                When stupas are built, the foundation includes special protective charms and inscriptions written on gold or silver plates. These were placed to protect the stupa and ensure it lasts for thousands of years. Many of these plates have been discovered during restoration work!
                            </p>
                        </div>
                    </div>
                </div>

                {/* Why Different Shapes */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Are There Different Shapes?</h2>

                    <div className="space-y-4 text-gray-700 leading-relaxed">
                        <p>
                            The different shapes of stupas evolved for several reasons:
                        </p>

                        <div className="bg-blue-50 border-l-4 border-blue-400 p-5 rounded-r-lg">
                            <h3 className="font-bold text-blue-900 mb-2">1. Time Periods</h3>
                            <p className="text-gray-700">
                                Earlier stupas (before 5th century AD) were mostly Bubulakara shape. Later periods introduced Padmakara and Ghandakara shapes as architectural skills improved.
                            </p>
                        </div>

                        <div className="bg-green-50 border-l-4 border-green-400 p-5 rounded-r-lg">
                            <h3 className="font-bold text-green-900 mb-2">2. Regional Influences</h3>
                            <p className="text-gray-700">
                                Contact with India and Southeast Asia brought new design ideas. Kings and architects adapted these to create uniquely Sri Lankan styles.
                            </p>
                        </div>

                        <div className="bg-purple-50 border-l-4 border-purple-400 p-5 rounded-r-lg">
                            <h3 className="font-bold text-purple-900 mb-2">3. Religious Meanings</h3>
                            <p className="text-gray-700">
                                Each shape emphasizes different Buddhist teachings. The lotus shape focuses on purity and enlightenment, while the rice heap shape represents abundance and merit.
                            </p>
                        </div>

                        <div className="bg-orange-50 border-l-4 border-orange-400 p-5 rounded-r-lg">
                            <h3 className="font-bold text-orange-900 mb-2">4. Royal Preferences</h3>
                            <p className="text-gray-700">
                                Different kings had their favorite designs. King Parakramabahu I preferred the bell shape, while earlier kings like Dutugemunu chose the rice heap form.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Visiting Tips */}
                <section className="mb-12 bg-gradient-to-r from-cyan-50 to-blue-50 p-8 rounded-lg shadow-md">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Tips for Visiting Stupas</h2>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="flex items-start gap-3">
                            <span className="text-xl">👕</span>
                            <div>
                                <h3 className="font-semibold text-gray-900">Dress Code</h3>
                                <p className="text-sm text-gray-700">Wear modest clothing covering shoulders and knees. White clothing is preferred but not required.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <span className="text-xl">👟</span>
                            <div>
                                <h3 className="font-semibold text-gray-900">Remove Footwear</h3>
                                <p className="text-sm text-gray-700">Take off shoes and hats before entering temple grounds. Socks are usually okay.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <span className="text-xl">📸</span>
                            <div>
                                <h3 className="font-semibold text-gray-900">Photography</h3>
                                <p className="text-sm text-gray-700">Photos are allowed in most places, but never pose with your back to the Buddha statue or stupa.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <span className="text-xl">🌅</span>
                            <div>
                                <h3 className="font-semibold text-gray-900">Best Time</h3>
                                <p className="text-sm text-gray-700">Visit early morning or late afternoon to avoid heat. Sunrise and sunset offer beautiful lighting for photos.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <span className="text-xl">🙏</span>
                            <div>
                                <h3 className="font-semibold text-gray-900">Show Respect</h3>
                                <p className="text-sm text-gray-700">Walk clockwise around stupas. Don't point your feet towards the stupa when sitting.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <span className="text-xl">🎫</span>
                            <div>
                                <h3 className="font-semibold text-gray-900">Entrance Fees</h3>
                                <p className="text-sm text-gray-700">Ancient cities like Anuradhapura and Polonnaruwa charge entrance fees. Some temple stupas are free.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Did You Know Card 5 */}
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-l-indigo-500 p-6 rounded-r-lg mb-8 shadow-sm">
                    <div className="flex items-start gap-3">
                        <div className="text-2xl">💡</div>
                        <div>
                            <h3 className="font-bold text-indigo-900 mb-2">Did You Know?</h3>
                            <p className="text-gray-700 text-sm">
                                The construction of Ruwanwelisaya required the labor of thousands of workers. According to ancient texts, King Dutugemunu provided free meals to all workers - feeding up to 10,000 people daily! This was one of the largest construction projects in ancient Asia.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Conclusion */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>
                    <div className="text-gray-700 leading-relaxed space-y-4">
                        <p>
                            The stupas of Sri Lanka are not just religious monuments - they are masterpieces of ancient engineering and symbols of the island's rich Buddhist heritage. Each shape tells a story about the time it was built, the king who commissioned it, and the spiritual beliefs of the people.
                        </p>
                        <p>
                            Whether you're a history lover, architecture enthusiast, or spiritual seeker, visiting these stupas offers a unique glimpse into Sri Lanka's glorious past. The five main shapes - Bubulakara, Padmakara, Ghandakara, Amalakara, and Dhatukara - each have their own beauty and meaning.
                        </p>
                        <p>
                            When you visit these ancient structures, take time to walk around them slowly. Notice the perfect curves of the dome, the intricate carvings, and the peaceful atmosphere. These stupas have stood for over two thousand years, and they continue to inspire wonder in everyone who sees them.
                        </p>
                    </div>
                </section>

                {/* Best Stupas to Visit */}
                <section className="mb-12 bg-white rounded-lg shadow-md p-8 border border-gray-200">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Must-Visit Stupas by Shape</h2>

                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-bold text-cyan-600 mb-3">For Bubulakara Shape:</h3>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start gap-2">
                                    <span className="text-cyan-500 font-bold">•</span>
                                    <span><strong>Ruwanwelisaya, Anuradhapura</strong> - The perfect example, gleaming white and beautifully restored</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-cyan-500 font-bold">•</span>
                                    <span><strong>Kiri Vehera, Polonnaruwa</strong> - Smaller but perfectly preserved</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-green-600 mb-3">For Padmakara Shape:</h3>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start gap-2">
                                    <span className="text-green-500 font-bold">•</span>
                                    <span><strong>Abhayagiri, Anuradhapura</strong> - Massive and impressive, though partially ruined</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-500 font-bold">•</span>
                                    <span><strong>Rankot Vehera, Polonnaruwa</strong> - Well-maintained and easily accessible</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-orange-600 mb-3">For Ghandakara (Bell) Shape:</h3>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start gap-2">
                                    <span className="text-orange-500 font-bold">•</span>
                                    <span><strong>Thuparamaya, Anuradhapura</strong> - The oldest stupa in Sri Lanka, restored in bell shape</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Final Did You Know */}
                <div className="bg-gradient-to-r from-pink-50 to-red-50 border-l-4 border-l-pink-500 p-6 rounded-r-lg shadow-sm">
                    <div className="flex items-start gap-3">
                        <div className="text-2xl">💡</div>
                        <div>
                            <h3 className="font-bold text-pink-900 mb-2">Did You Know?</h3>
                            <p className="text-gray-700 text-sm">
                                Sri Lanka has more than 5,000 stupas across the island! While the famous ones are in Anuradhapura and Polonnaruwa, you can find beautiful stupas in almost every town and village. Some tiny village stupas are over 1,000 years old and still in active use.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
}
