"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, CheckCircle, Calendar, DollarSign, AlertTriangle } from "lucide-react";
import { ImageCarousel } from "@/components/ui/image-carousel";

export default function SathmahalPrasadaya() {
    return (
        <main className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[600px] bg-black">
                <Image
                    src="/SathmahalPrasadaya.jpg"
                    alt="Sathmahal Prasadaya in Polonnaruwa"
                    fill
                    className="object-cover opacity-80"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-background/60" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-12">
                    <div className="max-w-6xl mx-auto w-full">
                        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                            Sathmahal Prasadaya
                        </h1>
                        <div className="flex flex-wrap gap-4 mb-6">
                            <Badge className="bg-blue-500 hover:bg-blue-600 text-white">
                                Historical Site
                            </Badge>
                            <Badge className="bg-green-500 hover:bg-green-600 text-white">
                                UNESCO Heritage
                            </Badge>
                            <Badge className="bg-purple-500 hover:bg-purple-600 text-white">
                                Buddhist Architecture
                            </Badge>
                        </div>
                        <div className="flex flex-wrap gap-6 text-white">
                            <div className="flex items-center gap-2">
                                <MapPin className="w-5 h-5" />
                                <span>Polonnaruwa, Sri Lanka</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-5 h-5" />
                                <span>2-3 hours visit</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section Navigation */}
            <section className="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-900/60 border-b border-gray-200 dark:border-gray-700 shadow-sm">
                <nav className="flex items-center gap-4 p-4 max-w-6xl mx-auto overflow-x-auto whitespace-nowrap">
                    <Link href="#quick-facts">
                        <Button variant="ghost" size="sm">Quick Facts</Button>
                    </Link>
                    <Link href="#architecture">
                        <Button variant="ghost" size="sm">Architecture</Button>
                    </Link>
                    <Link href="#historical-significance">
                        <Button variant="ghost" size="sm">Historical Significance</Button>
                    </Link>
                    <Link href="#visitor-info">
                        <Button variant="ghost" size="sm">Visitor Information</Button>
                    </Link>
                    <Link href="#tips">
                        <Button variant="ghost" size="sm">Tips & Guidelines</Button>
                    </Link>
                </nav>
            </section>

            <div className="max-w-6xl mx-auto px-4 py-12">
                {/* Introduction */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-foreground">
                        Discover the Mysterious Seven-Story Wonder of Ancient Sri Lanka
                    </h2>
                    <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
                        <p className="text-lg mb-4">
                            Rising majestically within the ancient city of Polonnaruwa, the Sathmahal Prasadaya stands as one of Sri Lanka&apos;s most enigmatic architectural marvels. This unique seven-story pyramidal structure represents a fascinating blend of local Buddhist architecture and foreign influences, making it a truly distinctive monument in Sri Lankan architectural history.
                        </p>
                        <p className="text-lg">
                            Unlike traditional Sri Lankan stupas, the Sathmahal Prasadaya showcases a remarkable departure in design, featuring a step-pyramid form that has sparked countless debates among historians and archaeologists about its origins and purpose. Its mysterious nature and architectural uniqueness make it an essential stop for anyone exploring the ancient city of Polonnaruwa.
                        </p>
                    </div>
                </section>

                {/* Quick Facts Section */}
                <section id="quick-facts" className="mb-12 scroll-mt-20">
                    <h2 className="text-2xl font-bold mb-6">Quick Facts</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Card>
                            <CardContent className="pt-6">
                                <div className="flex items-start gap-4">
                                    <Calendar className="w-8 h-8 text-blue-500" />
                                    <div>
                                        <h3 className="font-semibold mb-2">Time Period</h3>
                                        <p className="text-muted-foreground">Built during the Polonnaruwa period (12th century CE)</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="pt-6">
                                <div className="flex items-start gap-4">
                                    <MapPin className="w-8 h-8 text-blue-500" />
                                    <div>
                                        <h3 className="font-semibold mb-2">Location</h3>
                                        <p className="text-muted-foreground">Northern sector of the ancient city of Polonnaruwa</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="pt-6">
                                <div className="flex items-start gap-4">
                                    <DollarSign className="w-8 h-8 text-blue-500" />
                                    <div>
                                        <h3 className="font-semibold mb-2">Entrance Fee</h3>
                                        <p className="text-muted-foreground">Included in Polonnaruwa Archaeological Park ticket</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Architecture Section */}
                <section id="architecture" className="mb-12 scroll-mt-20">
                    <Card>
                        <CardHeader>
                            <CardTitle>Unique Architectural Features</CardTitle>
                            <CardDescription>A blend of local and foreign architectural elements</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="grid md:grid-cols-2 gap-6 items-center">
                                <div>
                                    <p className="text-muted-foreground mb-4">
                                        The Sathmahal Prasadaya exhibits a remarkable architectural design that sets it apart from traditional Sri Lankan religious structures. Rising in seven diminishing tiers, each level is adorned with distinctive architectural elements that showcase both local craftsmanship and possible foreign influences.
                                    </p>
                                    <ul className="space-y-2 text-muted-foreground">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                            Seven-tiered pyramidal structure with each level smaller than the one below
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                            Built entirely of brick with fine lime plaster finish
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                            Unique architectural style showing possible Cambodian influence
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                            Evidence of original decorative elements on each level
                                        </li>
                                    </ul>
                                </div>
                                <ImageCarousel
                                    images={[
                                        { src: "/SathmahalPrasadaya-Architecture.jpg", alt: "Architectural details of Sathmahal Prasadaya", caption: "Detailed view of the architectural features" },
                                        { src: "/SathmahalPrasadaya-Tiers.jpg", alt: "Seven tiers of Sathmahal Prasadaya", caption: "The seven diminishing tiers" },
                                        { src: "/SathmahalPrasadaya-Detail.jpg", alt: "Close-up of decorative elements", caption: "Ancient decorative elements" }
                                    ]}
                                />
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* Historical Significance Section */}
                <section id="historical-significance" className="mb-12 scroll-mt-20">
                    <Card>
                        <CardHeader>
                            <CardTitle>Historical Significance</CardTitle>
                            <CardDescription>A testament to ancient Sri Lanka&apos;s international connections</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="grid md:grid-cols-2 gap-6 items-center">
                                <ImageCarousel
                                    images={[
                                        { src: "/SathmahalPrasadaya-Historic.jpg", alt: "Historical view of Sathmahal Prasadaya", caption: "Historical perspective" },
                                        { src: "/SathmahalPrasadaya-Restoration.jpg", alt: "Restoration work", caption: "Conservation efforts" },
                                        { src: "/SathmahalPrasadaya-Context.jpg", alt: "Surrounding archaeological context", caption: "Archaeological context" }
                                    ]}
                                />
                                <div>
                                    <p className="text-muted-foreground mb-4">
                                        The Sathmahal Prasadaya stands as compelling evidence of ancient Sri Lanka&apos;s extensive cultural and diplomatic connections with Southeast Asia. Its unique design, reminiscent of Cambodian temples, suggests possible diplomatic relations between the Polonnaruwa Kingdom and the Khmer Empire during the 12th century.
                                    </p>
                                    <ul className="space-y-2 text-muted-foreground">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                            Reflects international architectural influences in medieval Sri Lanka
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                            Symbolizes cultural exchange along ancient maritime routes
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                            Unique example of foreign architectural influence in Sri Lankan Buddhist architecture
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                            Possible ceremonial or astronomical significance
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* Visitor Information Section */}
                <section id="visitor-info" className="mb-12 scroll-mt-20">
                    <Card>
                        <CardHeader>
                            <CardTitle>Visitor Information</CardTitle>
                            <CardDescription>Essential details for planning your visit</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="font-semibold mb-4">Opening Hours & Access</h3>
                                    <ul className="space-y-2 text-muted-foreground">
                                        <li className="flex items-start gap-2">
                                            <Clock className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                                            Open daily from 7:00 AM to 6:00 PM
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <DollarSign className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                                            Entry included with Polonnaruwa Archaeological Park ticket
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <MapPin className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                                            Located in the northern sector of the ancient city
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-4">Best Time to Visit</h3>
                                    <ul className="space-y-2 text-muted-foreground">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                            Early morning or late afternoon for best lighting
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                            December to March for ideal weather conditions
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                            Allow 30-45 minutes for a thorough visit
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* Tips and Guidelines Section */}
                <section id="tips" className="mb-12 scroll-mt-20">
                    <Card>
                        <CardHeader>
                            <CardTitle>Tips & Guidelines</CardTitle>
                            <CardDescription>Make the most of your visit</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="font-semibold mb-4">Essential Tips</h3>
                                    <ul className="space-y-2 text-muted-foreground">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                            Wear comfortable walking shoes
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                            Bring water and sun protection
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                            Consider hiring a knowledgeable guide
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-4">Important Reminders</h3>
                                    <ul className="space-y-2 text-muted-foreground">
                                        <li className="flex items-start gap-2">
                                            <AlertTriangle className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                                            Dress modestly as this is a religious site
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <AlertTriangle className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                                            Photography allowed but be respectful
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <AlertTriangle className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                                            Remove shoes when instructed
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>
            </div>
        </main>
    );
}
