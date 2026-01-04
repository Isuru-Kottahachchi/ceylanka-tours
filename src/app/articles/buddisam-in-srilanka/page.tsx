'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { AdBanner } from '@/components/ad-banner'
import {
    MapPin,
    Calendar,
    Clock,
    Heart,
    Star,
    ArrowLeft,
    Flower,
    Crown,
    BookOpen,
    Building,
    ChevronLeft,
    ChevronRight
} from 'lucide-react'

// Mahindagamanaya Image Carousel Component
function MahindagamanaCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const images = [
        {
            src: "/Mahindagamaya.jpg",
            alt: "Historic depiction of Arahant Mahinda's arrival in Sri Lanka",
            title: "Mahindagamanaya - The Arrival"
        },
        {
            src: "/Mihintale.jpg",
            alt: "Mihintale - Where Arahant Mahinda met King Devanampiya Tissa",
            title: "Sacred Mihintale Hill"
        },
        {
            src: "/Anuradhapura.jpg",
            alt: "Ancient Anuradhapura where Buddhism was established",
            title: "Ancient Capital Anuradhapura"
        },
        {
            src: "/JayaSrimahaBodhi.jpeg",
            alt: "The sacred Bo tree brought by Princess Sanghamitta",
            title: "Jaya Sri Maha Bodhi Tree"
        }
    ]

    const nextImage = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length)
    }

    const prevImage = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
    }

    const goToImage = (index: number) => {
        setCurrentIndex(index)
    }

    return (
        <div className="relative group">
            <div className="relative overflow-hidden rounded-lg">
                <Image
                    src={images[currentIndex].src}
                    alt={images[currentIndex].alt}
                    width={400}
                    height={400}
                    className="w-full h-64 md:h-96 lg:h-80 xl:h-96 object-cover transition-all duration-500"
                />

                {/* Navigation Arrows */}
                <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    aria-label="Previous image"
                >
                    <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    aria-label="Next image"
                >
                    <ChevronRight className="w-5 h-5" />
                </button>

                {/* Image Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p className="text-white font-medium text-sm">{images[currentIndex].title}</p>
                </div>
            </div>

            {/* Dot Indicators */}
            <div className="flex justify-center mt-4 space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToImage(index)}
                        className={`w-3 h-3 rounded-full transition-colors duration-200 ${index === currentIndex
                            ? 'bg-orange-600'
                            : 'bg-gray-300 hover:bg-gray-400'
                            }`}
                        aria-label={`Go to image ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    )
}

export default function BuddhismInSriLanka() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-gray-900 dark:to-gray-800">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <Image
                    src="/JayaSrimahaBodhi.jpeg"
                    alt="Sacred Bodhi Tree - Jaya Sri Maha Bodhi in Anuradhapura"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-orange-900/80 to-yellow-900/60" />
                <div className="relative max-w-6xl mx-auto px-4 py-4 text-center">
                    <Badge className="mb-4 bg-orange-600 text-white">
                        <Flower className="w-4 h-4 mr-2" />
                        Buddhist History
                    </Badge>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Buddhism in Sri Lanka
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light text-orange-100">
                        Discover the sacred history of Buddhism in Sri Lanka, from Arahant Mahinda&apos;s arrival to the sacred tooth relic tradition
                    </p>
                    {/* <div className="flex flex-wrap gap-4 justify-center">
                        <Button 
                            size="lg" 
                            className="bg-orange-600 hover:bg-orange-700 text-white"
                            asChild
                        >
                            <Link href="#history">
                                <BookOpen className="w-5 h-5 mr-2" />
                                Read History
                            </Link>
                        </Button>
                        <Button 
                            size="lg" 
                            variant="outline" 
                            className="border-white text-white hover:bg-white hover:text-orange-600"
                            asChild
                        >
                            <Link href="#sacred-sites">
                                <Building className="w-5 h-5 mr-2" />
                                Sacred Sites
                            </Link>
                        </Button>
                    </div> */}
                </div>
            </section>

            <div className="max-w-6xl mx-auto px-4 py-4">
                {/* Back Navigation */}
                <div className="mb-8">
                    <Button variant="ghost" asChild className="text-orange-600 hover:text-orange-700">
                        <Link href="/blog">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Blog
                        </Link>
                    </Button>
                </div>

                {/* Introduction */}
                <section className="mb-12">
                    <Card>
                        <CardContent className="p-8">
                            <div className="prose max-w-none">
                                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                                    First get to know a bit about buddisim in the world , There are two main branches of Buddhism: Theravada and Mahayana.
                                    Sri Lanka, known as the &quot;Pearl of the Indian Ocean&quot;, holds a special place in Buddhist history.
                                    For over 2,300 years, Theravada Buddhism has been the heart and soul of Sri Lankan culture, shaping its
                                    art, architecture, and way of life. This ancient island nation is home to some of the world&apos;s
                                    most sacred Buddhist sites and preserves the oldest continuous Theravada Buddhist tradition.
                                </p>
                                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                                    Buddhism is not just a religion - it is a philosophy of Buddha&apos;s teachings about how to avoid
                                    suffering and find peace in life. These teachings show people the path to wisdom, compassion,
                                    and inner happiness through understanding the true nature of existence.
                                </p>
                                <div className="grid md:grid-cols-3 gap-6 mt-8">
                                    <div className="text-center p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                                        <Calendar className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                                        <h3 className="font-semibold text-gray-900 dark:text-white">Established</h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">3rd Century BCE</p>
                                    </div>
                                    <div className="text-center p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                                        <Star className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                                        <h3 className="font-semibold text-gray-900 dark:text-white">Tradition</h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">Theravada Buddhism</p>
                                    </div>
                                    <div className="text-center p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                                        <Heart className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                                        <h3 className="font-semibold text-gray-900 dark:text-white">Population</h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">70% Buddhist</p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* History Section */}
                <section id="history" className="mb-12">
                    <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
                        The Sacred History of Buddhism in Sri Lanka
                    </h2>

                    {/* Arrival of Arahant Mahinda */}
                    <div className="space-y-8 lg:space-y-12">
                        <Card className="overflow-hidden">
                            <div className="flex flex-col md:flex-row md:gap-6 p-6">
                                <div className="md:w-2/5 lg:w-1/3">
                                    <MahindagamanaCarousel />
                                </div>
                                <div className="flex-1 mt-4 md:mt-0">
                                    <CardHeader className="p-0 mb-4">
                                        <Badge className="w-fit mb-2 bg-orange-100 text-orange-800">
                                            <BookOpen className="w-4 h-4 mr-2" />
                                            Historical Event
                                        </Badge>
                                        <CardTitle className="text-2xl text-gray-900 dark:text-white">
                                            Arahant Mahinda Thero: The Buddhist Pioneer
                                            <span className="block text-sm font-normal text-orange-600 dark:text-orange-400 mt-1">
                                                Known as &quot;Mahindagamanaya&quot; (The Arrival of Mahinda)
                                            </span>
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="p-0">
                                        <div className="space-y-4">
                                            <p className="text-gray-700 dark:text-gray-300">
                                                In 247 BCE, Arahant Mahinda Thero, son of Emperor Ashoka of India, arrived in Sri Lanka
                                                with a mission that would change the island forever. On the sacred day of Poson Poya
                                                (June full moon), King Devanampiya Tissa of Anuradhapura was hunting deer on Mihintale
                                                hill when he encountered this remarkable Buddhist monk standing serenely among the trees.
                                            </p>
                                            <p className="text-gray-700 dark:text-gray-300">
                                                The king, surprised to see the monk, called out &quot;Samanera!&quot; (which means monk). Mahinda
                                                Thero spoke calmly with the king and asked him clever questions to test how smart he was.
                                                The famous &quot;mango dialogue&quot; was a simple test to see if the king was intelligent enough
                                                to understand Buddha&apos;s teachings. When Mahinda saw that the king was very smart, he gave
                                                his first sermon and brought Buddhism to Sri Lanka.
                                            </p>
                                            <p className="text-gray-700 dark:text-gray-300">
                                                This divine encounter on Poson Poya day transformed not only the king but the entire nation.
                                                This historic event is reverently called &quot;Mahindagamanaya&quot;, meaning
                                                &quot;The Arrival of Mahinda&quot;, and is considered the most significant moment in Sri Lankan Buddhist history.
                                                Today, Poson Poya is celebrated as one of Sri Lanka&apos;s most important Buddhist festivals,
                                                commemorating the arrival of the Dhamma (Buddhist teachings) to the island and marking
                                                the beginning of over 2,300 years of continuous Buddhist heritage.
                                            </p>
                                            <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg mb-4">
                                                <h4 className="font-semibold mb-2 text-gray-900 dark:text-white flex items-center gap-2">
                                                    <Star className="w-4 h-4 text-orange-600" />
                                                    Poson Poya Significance
                                                </h4>
                                                <p className="text-sm text-gray-700 dark:text-gray-300">
                                                    Poson Poya (June full moon) is the second most important Buddhist festival in Sri Lanka after Vesak.
                                                    Millions of pilgrims climb Mihintale during this time to honor the sacred spot where Buddhism
                                                    first took root in Sri Lankan soil. The festival includes all-night pirith chanting,
                                                    lantern decorations, and special dana offerings.
                                                </p>
                                            </div>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="flex items-center gap-2 text-sm">
                                                    <Calendar className="w-4 h-4 text-orange-600" />
                                                    <span className="text-gray-600 dark:text-gray-400">247 BCE - Poson Poya</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-sm">
                                                    <MapPin className="w-4 h-4 text-orange-600" />
                                                    <span className="text-gray-600 dark:text-gray-400">Mihintale, Anuradhapura</span>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </div>
                            </div>
                        </Card>

                        {/* Early Development */}
                        <Card>
                            <CardContent className="p-8">
                                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-2">
                                    <Flower className="w-6 h-6 text-orange-600" />
                                    Early Buddhist Development
                                </h3>
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div>
                                        <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">
                                            King Devanampiya Tissa&apos;s Conversion
                                        </h4>
                                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                                            After meeting Arahant Mahinda, King Devanampiya Tissa became the first royal patron
                                            of Buddhism in Sri Lanka. He established the Mahavihara monastery in Anuradhapura,
                                            which became the center of Buddhist learning.
                                        </p>
                                        <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">
                                            Sanghamitta Theri&apos;s Arrival
                                        </h4>
                                        <p className="text-gray-700 dark:text-gray-300">
                                            Later, Sanghamitta Theri, daughter of Emperor Ashoka and sister of Mahinda,
                                            brought a branch of the sacred Bodhi tree from Bodh Gaya. This branch was
                                            planted in Anuradhapura and grows there today as the Jaya Sri Maha Bodhi.
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">
                                            Establishment of Monasteries
                                        </h4>
                                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                                            The early period saw the establishment of numerous monasteries and stupas.
                                            The Thuparamaya, built to house Buddha&apos;s collarbone relic, was the first
                                            stupa constructed in Sri Lanka.
                                        </p>
                                        <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">
                                            Pali Canon Preservation
                                        </h4>
                                        <p className="text-gray-700 dark:text-gray-300">
                                            Sri Lankan monks played a crucial role in preserving Buddhist scriptures.
                                            The Pali Canon was first written down in Sri Lanka during the 1st century BCE,
                                            ensuring its survival for future generations.
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Sacred Tooth Relic */}
                <section id="tooth-relic" className="mb-12">
                    <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
                        The Sacred Tooth Relic: Sri Lanka&apos;s Most Precious Treasure
                    </h2>

                    <Card className="overflow-hidden">
                        <div className="flex flex-col md:flex-row md:gap-6 p-6">
                            <div className="md:w-2/5 lg:w-1/3">
                                <Image
                                    src="/Kandy.jpeg"
                                    alt="Temple of the Tooth (Sri Dalada Maligawa) in Kandy"
                                    width={400}
                                    height={300}
                                    className="w-full h-48 md:h-80 lg:h-72 xl:h-80 object-cover rounded-lg"
                                />
                            </div>
                            <div className="flex-1 mt-4 md:mt-0">
                                <CardHeader className="p-0 mb-4">
                                    <Badge className="w-fit mb-2 bg-yellow-100 text-yellow-800">
                                        <Crown className="w-4 h-4 mr-2" />
                                        Sacred Relic
                                    </Badge>
                                    <CardTitle className="text-2xl text-gray-900 dark:text-white">
                                        The Tooth Relic&apos;s Journey to Sri Lanka
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="p-0">
                                    <div className="space-y-4">
                                        <p className="text-gray-700 dark:text-gray-300">
                                            The Sacred Tooth Relic of Lord Buddha arrived in Sri Lanka in 371 CE, hidden in
                                            the hair of Princess Hemamala and Prince Dantha from the Kalinga kingdom in India.
                                            They brought this precious relic to escape persecution and preserve it for future generations.
                                        </p>
                                        <p className="text-gray-700 dark:text-gray-300">
                                            King Kirthi Sri Meghavarna received the sacred relic and built the first temple
                                            to house it. Since then, the tooth relic has been considered the symbol of sovereignty
                                            in Sri Lanka, and its possession legitimized royal authority.
                                        </p>
                                        <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                                            <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">
                                                Did You Know?
                                            </h4>
                                            <p className="text-sm text-gray-700 dark:text-gray-300">
                                                The tooth relic has been moved several times throughout history for protection
                                                during invasions. It finally found its permanent home in Kandy&apos;s Temple of the
                                                Tooth (Sri Dalada Maligawa) in the 16th century.
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </div>
                        </div>
                    </Card>
                </section>

                {/* Sacred Sites */}
                <section id="sacred-sites" className="mb-12">
                    <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
                        Sacred Buddhist Sites in Sri Lanka
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        <Card className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <div className="flex items-center gap-2 mb-2">
                                    <Flower className="w-5 h-5 text-orange-600" />
                                    <Badge variant="outline">World Heritage Site</Badge>
                                </div>
                                <CardTitle>Anuradhapura Sacred City</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Image
                                    src="/Anuradhapura.jpg"
                                    alt="Ancient stupas of Anuradhapura"
                                    width={300}
                                    height={200}
                                    className="w-full h-48 object-cover rounded-lg mb-4"
                                />
                                <p className="text-gray-600 dark:text-gray-400 mb-4">
                                    The ancient capital and birthplace of Buddhism in Sri Lanka. Home to the sacred
                                    Jaya Sri Maha Bodhi tree and magnificent stupas like Ruwanwelisaya and Jetavanaramaya.
                                </p>
                                <div className="flex items-center gap-2 text-sm text-orange-600">
                                    <MapPin className="w-4 h-4" />
                                    <span>North Central Province</span>
                                </div>
                                <div className="mt-4 flex justify-start">
                                    <Link href="/destinations/anuradhapura" passHref legacyBehavior>
                                        <Button
                                            variant="secondary"
                                            className="group bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all duration-300 font-semibold text-base cursor-pointer hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
                                        >
                                            Read more about Anuradhapura
                                            <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                                        </Button>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <div className="flex items-center gap-2 mb-2">
                                    <Crown className="w-5 h-5 text-yellow-600" />
                                    <Badge variant="outline">World Heritage Site</Badge>
                                </div>
                                <CardTitle>Temple of the Tooth, Kandy</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Image
                                    src="/Kandy.jpeg"
                                    alt="Temple of the Tooth in Kandy"
                                    width={300}
                                    height={200}
                                    className="w-full h-48 object-cover rounded-lg mb-4"
                                />
                                <p className="text-gray-600 dark:text-gray-400 mb-4">
                                    The most sacred Buddhist temple in Sri Lanka, housing the Sacred Tooth Relic.
                                    The annual Esala Perahera festival celebrates this precious relic.
                                </p>
                                <div className="flex items-center gap-2 text-sm text-yellow-600">
                                    <MapPin className="w-4 h-4" />
                                    <span>Central Province</span>
                                </div>
                                <div className="mt-4 flex justify-start">
                                    <Link href="/destinations/kandy" passHref legacyBehavior>
                                        <Button
                                            variant="secondary"
                                            className="group bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all duration-300 font-semibold text-base cursor-pointer hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
                                        >
                                            Read more about Kandy
                                            <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                                        </Button>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <div className="flex items-center gap-2 mb-2">
                                    <BookOpen className="w-5 h-5 text-green-600" />
                                    <Badge variant="outline">Historical Site</Badge>
                                </div>
                                <CardTitle>Mihintale</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Image
                                    src="/Mihinthale.jpg"
                                    alt="Mihintale - Cradle of Buddhism in Sri Lanka"
                                    width={300}
                                    height={200}
                                    className="w-full h-48 object-cover rounded-lg mb-4"
                                />
                                <p className="text-gray-600 dark:text-gray-400 mb-4">
                                    Known as the &quot;Cradle of Buddhism in Sri Lanka&quot;, this is where Arahant Mahinda
                                    first introduced Buddhism to King Devanampiya Tissa.
                                </p>
                                <div className="flex items-center gap-2 text-sm text-green-600">
                                    <MapPin className="w-4 h-4" />
                                    <span>Anuradhapura District</span>
                                </div>
                                 <div className="mt-4 flex justify-start">
                                    <Link href="/destinations/mihinthale" passHref legacyBehavior>
                                        <Button
                                            variant="secondary"
                                            className="group bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all duration-300 font-semibold text-base cursor-pointer hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
                                        >
                                            Read more about Mihinthale
                                            <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                                        </Button>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <div className="flex items-center gap-2 mb-2">
                                    <Building className="w-5 h-5 text-blue-600" />
                                    <Badge variant="outline">Cave Temple</Badge>
                                </div>
                                <CardTitle>Dambulla Cave Temple</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Image
                                    src="/dambulla-cave-temple.jpg"
                                    alt="Dambulla Cave Temple with ancient Buddhist paintings"
                                    width={300}
                                    height={200}
                                    className="w-full h-48 object-cover rounded-lg mb-4"
                                />
                                <p className="text-gray-600 dark:text-gray-400 mb-4">
                                    A magnificent cave temple complex with over 2,000 years of history, featuring
                                    ancient Buddhist paintings and 150 Buddha statues.
                                </p>
                                <div className="flex items-center gap-2 text-sm text-blue-600">
                                    <MapPin className="w-4 h-4" />
                                    <span>Central Province</span>
                                </div>
                                 <div className="mt-4 flex justify-start">
                                    <Link href="/destinations/dambullla-cave-temple" passHref legacyBehavior>
                                        <Button
                                            variant="secondary"
                                            className="group bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all duration-300 font-semibold text-base cursor-pointer hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
                                        >
                                            Read more about Dambulla Cave Temple
                                            <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                                        </Button>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Buddhist Traditions */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
                        Living Buddhist Traditions
                    </h2>

                    <Card>
                        <CardContent className="p-8">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                                        <Flower className="w-5 h-5 text-orange-600" />
                                        Daily Buddhist Practices
                                    </h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-2">
                                            <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                                            <div>
                                                <strong>Morning Puja:</strong> Daily offerings of flowers, incense, and oil lamps at home shrines and temples
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                                            <div>
                                                <strong>Poya Day Observances:</strong> Monthly full moon days when devotees visit temples and observe eight precepts
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                                            <div>
                                                <strong>Meditation Practice:</strong> Vipassana and Samatha meditation taught in temples and meditation centers
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                                            <div>
                                                <strong>Dana (Giving):</strong> Offering food and necessities to monks and sharing merit with others
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                                        <Star className="w-5 h-5 text-orange-600" />
                                        Major Buddhist Festivals
                                    </h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-2">
                                            <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                                            <div>
                                                <strong>Esala Perahera:</strong> Grand procession in Kandy honoring the Sacred Tooth Relic (July/August)
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                                            <div>
                                                <strong>Vesak Festival:</strong> Celebrating Buddha&apos;s birth, enlightenment, and passing away (May)
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                                            <div>
                                                <strong>Poson Poya:</strong> Commemorating the arrival of Buddhism in Sri Lanka (June)
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                                            <div>
                                                <strong>Kathina Ceremony:</strong> Annual offering of robes to monks after the rainy season
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* Modern Buddhism */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
                        Buddhism in Modern Sri Lanka
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <BookOpen className="w-5 h-5 text-orange-600" />
                                    Education and Learning
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">
                                    Sri Lanka has numerous Buddhist universities and institutes that preserve and teach
                                    Buddhist philosophy, meditation, and Pali language. Many international students
                                    come to study Theravada Buddhism in its original homeland.
                                </p>
                                <ul className="text-sm space-y-2">
                                    <li>• Sri Jayewardenepura University Buddhist Studies Department</li>
                                    <li>• Buddhist and Pali University of Sri Lanka</li>
                                    <li>• International Buddhist Academy</li>
                                    <li>• Meditation centers and forest monasteries</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Heart className="w-5 h-5 text-orange-600" />
                                    Global Influence
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">
                                    Sri Lankan Buddhist monks and teachers have spread Theravada Buddhism worldwide.
                                    The island continues to be a pilgrimage destination for Buddhists from around
                                    the globe seeking authentic Buddhist teachings.
                                </p>
                                <ul className="text-sm space-y-2">
                                    <li>• Buddhist missions to Western countries</li>
                                    <li>• International meditation retreats</li>
                                    <li>• Preservation of ancient manuscripts</li>
                                    <li>• Archaeological conservation projects</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Visiting Information */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
                        Visiting Buddhist Sites: A Pilgrim&apos;s Guide
                    </h2>

                    <Card>
                        <CardContent className="p-8">
                            <div className="grid md:grid-cols-3 gap-8">
                                <div>
                                    <h3 className="font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                                        <Clock className="w-5 h-5 text-orange-600" />
                                        Best Times to Visit
                                    </h3>
                                    <ul className="text-sm space-y-2 text-gray-600 dark:text-gray-400">
                                        <li>• Early morning (6:00-8:00 AM) for peaceful atmosphere</li>
                                        <li>• Evening (5:00-7:00 PM) for sunset prayers</li>
                                        <li>• Poya days for special ceremonies</li>
                                        <li>• Festival seasons for cultural experiences</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                                        <Building className="w-5 h-5 text-orange-600" />
                                        Temple Etiquette
                                    </h3>
                                    <ul className="text-sm space-y-2 text-gray-600 dark:text-gray-400">
                                        <li>• Remove shoes before entering temple buildings</li>
                                        <li>• Dress modestly covering shoulders and knees</li>
                                        <li>• Lower your voice and maintain respectful behavior</li>
                                        <li>• Don&apos;t point feet toward Buddha statues</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                                        <Heart className="w-5 h-5 text-orange-600" />
                                        Spiritual Practices
                                    </h3>
                                    <ul className="text-sm space-y-2 text-gray-600 dark:text-gray-400">
                                        <li>• Offer flowers, incense, and oil lamps</li>
                                        <li>• Practice meditation in designated areas</li>
                                        <li>• Participate in chanting sessions</li>
                                        <li>• Make merit through dana (giving)</li>
                                    </ul>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* Conclusion */}
                <section className="mb-12">
                    <Card className="bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20">
                        <CardContent className="p-8 text-center">
                            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                                Experience the Living Heritage of Buddhism
                            </h2>
                            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                                Sri Lanka offers a unique opportunity to experience Buddhism not just as a religion,
                                but as a living, breathing culture that has shaped an entire civilization for over
                                two millennia. From the sacred Bodhi tree to the golden Temple of the Tooth,
                                every corner of this island tells the story of faith, devotion, and spiritual wisdom.
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center">
                                <Button
                                    size="lg"
                                    className="bg-orange-600 hover:bg-orange-700 text-white"
                                    asChild
                                >
                                    <Link href="/destinations">
                                        <MapPin className="w-5 h-5 mr-2" />
                                        Explore Sacred Sites
                                    </Link>
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    asChild
                                >
                                    <Link href="/blog">
                                        <BookOpen className="w-5 h-5 mr-2" />
                                        Read More Articles
                                    </Link>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </section>
            </div>
        </div>
    )
}
