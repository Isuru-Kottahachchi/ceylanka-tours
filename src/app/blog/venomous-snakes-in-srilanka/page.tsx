import Image from "next/image"
import { AlertTriangle, Shield, Phone, MapPin, Heart, ChevronRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"


export default function VenomousSnakesGuide() {
    return (
        <main className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <Image
                    src="/placeholder.svg?height=600&width=1200&text=Venomous+Snake+Warning"
                    alt="Warning about venomous snakes in Sri Lanka with safety information for travelers"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Venomous Snakes in Sri Lanka</h1>
                    <p className="text-xl md:text-2xl mb-6 font-light">Essential Safety Guide for Travelers</p>
                    <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
                        <Badge variant="secondary" className="bg-red-600/80 text-white border-red-500">
                            <AlertTriangle className="w-4 h-4 mr-1" />
                            Safety First
                        </Badge>
                        <Badge variant="secondary" className="bg-orange-600/80 text-white border-orange-500">
                            <Shield className="w-4 h-4 mr-1" />
                            Prevention Tips
                        </Badge>
                        <Badge variant="secondary" className="bg-blue-600/80 text-white border-blue-500">
                            <Phone className="w-4 h-4 mr-1" />
                            Emergency Guide
                        </Badge>
                    </div>
                </div>
            </section>

            <div className="max-w-4xl mx-auto px-4 py-8">
                {/* Emergency Alert */}
                <Alert className="mb-8 border-red-300 bg-red-50">
                    <AlertTriangle className="h-4 w-4 text-red-600" />
                    <AlertTitle className="text-red-800">Emergency Numbers</AlertTitle>
                    <AlertDescription className="text-red-700">
                        <strong>Emergency: 119 or 110</strong> | <strong>Ambulance: 1990</strong> | <strong>Police: 118</strong>
                        <br />
                        If bitten by a snake, call immediately and get to the nearest hospital!
                    </AlertDescription>
                </Alert>

                {/* Introduction */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-foreground">
                        Why You Need to Know About Sri Lankan Snakes
                    </h2>
                    <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
                        <p className="text-lg mb-4">
                            Sri Lanka is home to over 100 snake species. While most snakes are harmless, some are very dangerous. 
                            This guide will help you stay safe during your travels in Sri Lanka.
                        </p>
                        <p className="text-lg mb-4">
                            About 20 snake species in Sri Lanka are venomous. Snake bites cause around 400 deaths each year in 
                            Sri Lanka. But don&apos;t worry - with the right knowledge, you can stay safe and enjoy your trip.
                        </p>
                        <p className="text-lg">
                            Remember: Most snakes are afraid of humans and will run away if they see you. Snake bites usually 
                            happen when people accidentally step on snakes or try to catch them.
                        </p>
                    </div>
                </section>

                {/* Highly Venomous Snakes */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-red-800">Highly Venomous Snakes - Very Dangerous</h2>
                    <div className="space-y-6">
                        <Card className="border-red-300 bg-red-50/30">
                            <CardHeader>
                                <CardTitle className="text-red-800 flex items-center gap-2">
                                    <AlertTriangle className="w-5 h-5" />
                                    1. Russell&apos;s Viper (Polanga)
                                </CardTitle>
                                <CardDescription className="text-red-600">Most dangerous snake in Sri Lanka</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <Image
                                            src="/placeholder.svg?height=300&width=400&text=Russell's+Viper"
                                            alt="Russell's Viper - most dangerous venomous snake in Sri Lanka"
                                            width={400}
                                            height={300}
                                            className="rounded-lg"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-3 text-red-800">What it looks like:</h4>
                                        <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                                            <li>• Brown color with dark spots</li>
                                            <li>• Short and thick body (1-1.5 meters)</li>
                                            <li>• Big head, thin neck</li>
                                            <li>• Very slow moving</li>
                                        </ul>
                                        <h4 className="font-semibold mb-3 text-red-800">Where you find them:</h4>
                                        <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                                            <li>• Rice fields and farms</li>
                                            <li>• Gardens and yards</li>
                                            <li>• Near water sources</li>
                                            <li>• Most active at night</li>
                                        </ul>
                                        <Alert className="border-red-400 bg-red-100">
                                            <AlertDescription className="text-red-800 text-sm">
                                                <strong>Danger:</strong> This snake doesn&apos;t move away when humans come near. 
                                                Most snake bites in Sri Lanka are from Russell&apos;s Viper.
                                            </AlertDescription>
                                        </Alert>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-red-300 bg-red-50/30">
                            <CardHeader>
                                <CardTitle className="text-red-800 flex items-center gap-2">
                                    <AlertTriangle className="w-5 h-5" />
                                    2. Common Cobra (Naga)
                                </CardTitle>
                                <CardDescription className="text-red-600">Famous hooded snake</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <Image
                                            src="/placeholder.svg?height=300&width=400&text=Common+Cobra"
                                            alt="Common Cobra with hood spread - venomous snake in Sri Lanka"
                                            width={400}
                                            height={300}
                                            className="rounded-lg"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-3 text-red-800">What it looks like:</h4>
                                        <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                                            <li>• Black, brown, or light colored</li>
                                            <li>• Can spread hood when angry</li>
                                            <li>• 1-2 meters long</li>
                                            <li>• Raises head high when threatened</li>
                                        </ul>
                                        <h4 className="font-semibold mb-3 text-red-800">Where you find them:</h4>
                                        <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                                            <li>• Old buildings and houses</li>
                                            <li>• Rock piles and walls</li>
                                            <li>• Forest areas</li>
                                            <li>• Active day and night</li>
                                        </ul>
                                        <Alert className="border-red-400 bg-red-100">
                                            <AlertDescription className="text-red-800 text-sm">
                                                <strong>Warning:</strong> Cobras can spit venom up to 2 meters! 
                                                If venom gets in your eyes, wash immediately with water.
                                            </AlertDescription>
                                        </Alert>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-red-300 bg-red-50/30">
                            <CardHeader>
                                <CardTitle className="text-red-800 flex items-center gap-2">
                                    <AlertTriangle className="w-5 h-5" />
                                    3. Common Krait (Karawala)
                                </CardTitle>
                                <CardDescription className="text-red-600">Night hunter with deadly venom</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <Image
                                            src="/placeholder.svg?height=300&width=400&text=Common+Krait"
                                            alt="Common Krait - deadly nocturnal venomous snake in Sri Lanka"
                                            width={400}
                                            height={300}
                                            className="rounded-lg"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-3 text-red-800">What it looks like:</h4>
                                        <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                                            <li>• Black with white bands</li>
                                            <li>• Shiny, smooth skin</li>
                                            <li>• 1-1.5 meters long</li>
                                            <li>• Triangular body shape</li>
                                        </ul>
                                        <h4 className="font-semibold mb-3 text-red-800">Where you find them:</h4>
                                        <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                                            <li>• Only active at night</li>
                                            <li>• Houses and buildings</li>
                                            <li>• Under beds and furniture</li>
                                            <li>• Quiet during day</li>
                                        </ul>
                                        <Alert className="border-red-400 bg-red-100">
                                            <AlertDescription className="text-red-800 text-sm">
                                                <strong>Very Dangerous:</strong> Kraits hunt at night and can enter houses. 
                                                Their bite has no pain, so people don&apos;t know they were bitten!
                                            </AlertDescription>
                                        </Alert>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-red-300 bg-red-50/30">
                            <CardHeader>
                                <CardTitle className="text-red-800 flex items-center gap-2">
                                    <AlertTriangle className="w-5 h-5" />
                                    4. Ceylon Karwala (Bungarus ceylonicus ceylonicus)
                                </CardTitle>
                                <CardDescription className="text-red-600">Endemic nocturnal serpent with potent neurotoxin</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <Image
                                            src="/placeholder.svg?height=300&width=400&text=Ceylon+Karwala"
                                            alt="Ceylon Karwala - endemic venomous snake of Sri Lanka"
                                            width={400}
                                            height={300}
                                            className="rounded-lg"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-3 text-red-800">What it looks like:</h4>
                                        <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                                            <li>• Black with narrow white crossbands</li>
                                            <li>• Glossy, smooth scales</li>
                                            <li>• 0.9-1.2 meters long</li>
                                            <li>• Triangular cross-section body</li>
                                        </ul>
                                        <h4 className="font-semibold mb-3 text-red-800">Where you find them:</h4>
                                        <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                                            <li>• Wet zone forests and plantations</li>
                                            <li>• Traditional houses and buildings</li>
                                            <li>• Active only at night</li>
                                            <li>• Hides during day under objects</li>
                                        </ul>
                                        <Alert className="border-red-400 bg-red-100">
                                            <AlertDescription className="text-red-800 text-sm">
                                                <strong>Endemic Danger:</strong> Found only in Sri Lanka. Bite causes no immediate pain, 
                                                but venom attacks nervous system causing paralysis.
                                            </AlertDescription>
                                        </Alert>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-red-300 bg-red-50/30">
                            <CardHeader>
                                <CardTitle className="text-red-800 flex items-center gap-2">
                                    <AlertTriangle className="w-5 h-5" />
                                    5. Mudu Karwala (Bungarus ceylonicus karavala)
                                </CardTitle>
                                <CardDescription className="text-red-600">Highland subspecies with distinctive banding</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <Image
                                            src="/placeholder.svg?height=300&width=400&text=Mudu+Karwala"
                                            alt="Mudu Karwala - highland subspecies venomous snake in Sri Lanka"
                                            width={400}
                                            height={300}
                                            className="rounded-lg"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-3 text-red-800">What it looks like:</h4>
                                        <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                                            <li>• Black with broader white bands</li>
                                            <li>• More distinct banding pattern</li>
                                            <li>• 0.8-1.1 meters long</li>
                                            <li>• Slightly more robust build</li>
                                        </ul>
                                        <h4 className="font-semibold mb-3 text-red-800">Where you find them:</h4>
                                        <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                                            <li>• Hill country and mountains</li>
                                            <li>• Tea estates and forest edges</li>
                                            <li>• Strictly nocturnal hunter</li>
                                            <li>• Cool, humid environments</li>
                                        </ul>
                                        <Alert className="border-red-400 bg-red-100">
                                            <AlertDescription className="text-red-800 text-sm">
                                                <strong>Mountain Threat:</strong> Highland variant with powerful neurotoxic venom. 
                                                Silent bite with delayed symptoms makes it extremely dangerous.
                                            </AlertDescription>
                                        </Alert>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-red-300 bg-red-50/30">
                            <CardHeader>
                                <CardTitle className="text-red-800 flex items-center gap-2">
                                    <AlertTriangle className="w-5 h-5" />
                                    6. Saw-scaled Viper (Weli Polanga)
                                </CardTitle>
                                <CardDescription className="text-red-600">Small but very aggressive</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <Image
                                            src="/placeholder.svg?height=300&width=400&text=Saw-scaled+Viper"
                                            alt="Saw-scaled Viper - small aggressive venomous snake in Sri Lanka"
                                            width={400}
                                            height={300}
                                            className="rounded-lg"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-3 text-red-800">What it looks like:</h4>
                                        <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                                            <li>• Gray-brown with darker patterns</li>
                                            <li>• Very small (30-50 cm)</li>
                                            <li>• Rough, saw-like scales</li>
                                            <li>• Makes hissing sound when angry</li>
                                        </ul>
                                        <h4 className="font-semibold mb-3 text-red-800">Where you find them:</h4>
                                        <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                                            <li>• Dry areas and scrublands</li>
                                            <li>• Rocky places</li>
                                            <li>• Under stones and logs</li>
                                            <li>• Northern and eastern areas</li>
                                        </ul>
                                        <Alert className="border-red-400 bg-red-100">
                                            <AlertDescription className="text-red-800 text-sm">
                                                <strong>Warning:</strong> Very aggressive and will attack quickly. 
                                                Small size makes it hard to see in grass and rocks.
                                            </AlertDescription>
                                        </Alert>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Moderately Venomous Snakes */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-orange-700">Moderately Venomous Snakes - Still Dangerous</h2>
                    <div className="space-y-6">
                        <Card className="border-orange-300 bg-orange-50/30">
                            <CardHeader>
                                <CardTitle className="text-orange-800">Green Pit Viper (Pala Polanga)</CardTitle>
                                <CardDescription className="text-orange-600">Tree-dwelling viper</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <Image
                                            src="/placeholder.svg?height=250&width=350&text=Green+Pit+Viper"
                                            alt="Green Pit Viper in tree - moderately venomous snake in Sri Lanka"
                                            width={350}
                                            height={250}
                                            className="rounded-lg"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-3 text-orange-800">What it looks like:</h4>
                                        <ul className="space-y-1 text-sm text-muted-foreground mb-4">
                                            <li>• Bright green color</li>
                                            <li>• 60-80 cm long</li>
                                            <li>• Lives in trees</li>
                                            <li>• Very good at hiding</li>
                                        </ul>
                                        <h4 className="font-semibold mb-3 text-orange-800">Where you find them:</h4>
                                        <ul className="space-y-1 text-sm text-muted-foreground">
                                            <li>• Fruit trees and bushes</li>
                                            <li>• Gardens and forests</li>
                                            <li>• Active at night</li>
                                            <li>• All over Sri Lanka</li>
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-orange-300 bg-orange-50/30">
                            <CardHeader>
                                <CardTitle className="text-orange-800">Hump-nosed Viper (Kunakatuwa)</CardTitle>
                                <CardDescription className="text-orange-600">Mountain forest snake</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <Image
                                            src="/placeholder.svg?height=250&width=350&text=Hump-nosed+Viper"
                                            alt="Hump-nosed Viper - moderately venomous mountain snake in Sri Lanka"
                                            width={350}
                                            height={250}
                                            className="rounded-lg"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-3 text-orange-800">What it looks like:</h4>
                                        <ul className="space-y-1 text-sm text-muted-foreground mb-4">
                                            <li>• Gray or brown with spots</li>
                                            <li>• Pointed nose tip</li>
                                            <li>• 30-50 cm long</li>
                                            <li>• Rough skin</li>
                                        </ul>
                                        <h4 className="font-semibold mb-3 text-orange-800">Where you find them:</h4>
                                        <ul className="space-y-1 text-sm text-muted-foreground">
                                            <li>• Hill country forests</li>
                                            <li>• Tea estates</li>
                                            <li>• Wet zone areas</li>
                                            <li>• Under leaves on ground</li>
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-orange-300 bg-orange-50/30">
                            <CardHeader>
                                <CardTitle className="text-orange-800">Sea Snake (Mudu Sarpa)</CardTitle>
                                <CardDescription className="text-orange-600">Ocean and coastal snake</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <Image
                                            src="/placeholder.svg?height=250&width=350&text=Sea+Snake"
                                            alt="Sea Snake - venomous marine snake found in Sri Lankan waters"
                                            width={350}
                                            height={250}
                                            className="rounded-lg"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-3 text-orange-800">What it looks like:</h4>
                                        <ul className="space-y-1 text-sm text-muted-foreground mb-4">
                                            <li>• Black and white bands</li>
                                            <li>• Flat tail for swimming</li>
                                            <li>• 1-1.5 meters long</li>
                                            <li>• Lives in water</li>
                                        </ul>
                                        <h4 className="font-semibold mb-3 text-orange-800">Where you find them:</h4>
                                        <ul className="space-y-1 text-sm text-muted-foreground">
                                            <li>• Ocean and sea water</li>
                                            <li>• Sometimes on beaches</li>
                                            <li>• Fishing nets</li>
                                            <li>• Usually gentle unless handled</li>
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Safety Tips for Travelers */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-green-800 dark:text-green-400">Safety Tips for Travelers</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <Card className="border-green-300 bg-green-50/30">
                            <CardHeader>
                                <CardTitle className="text-green-800 dark:text-green-400 flex items-center gap-2">
                                    <Shield className="w-5 h-5" />
                                    How to Avoid Snake Bites
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3 text-sm text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <ChevronRight className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                        <span><strong>Wear closed shoes:</strong> Never walk barefoot, especially at night</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ChevronRight className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                        <span><strong>Use flashlight:</strong> Always carry a torch when walking at night</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ChevronRight className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                        <span><strong>Make noise:</strong> Stomp your feet when walking in grass or bushes</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ChevronRight className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                        <span><strong>Check your bed:</strong> Look under beds and in bathrooms before use</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ChevronRight className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                        <span><strong>Don&apos;t touch:</strong> Never try to catch or kill a snake</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ChevronRight className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                        <span><strong>Stay on paths:</strong> Don&apos;t walk through tall grass or bushes</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="border-blue-300 bg-blue-50/30">
                            <CardHeader>
                                <CardTitle className="text-blue-800 dark:text-blue-400 flex items-center gap-2">
                                    <MapPin className="w-5 h-5" />
                                    High-Risk Areas to Be Careful
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3 text-sm text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <ChevronRight className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                                        <span><strong>Rice fields:</strong> Russell&apos;s vipers love these areas</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ChevronRight className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                                        <span><strong>Old buildings:</strong> Cobras often hide in ruins</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ChevronRight className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                                        <span><strong>Fruit trees:</strong> Green vipers live in mango and other trees</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ChevronRight className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                                        <span><strong>Water areas:</strong> Near rivers, ponds, and wells</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ChevronRight className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                                        <span><strong>Rock piles:</strong> Snakes hide under stones</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ChevronRight className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                                        <span><strong>Thick grass:</strong> Hard to see snakes hiding</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Emergency Response */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-red-800">What to Do If Someone Gets Bitten</h2>
                    <div className="space-y-6">
                        <Alert className="border-red-400 bg-red-100">
                            <AlertTriangle className="h-4 w-4 text-red-600" />
                            <AlertTitle className="text-red-800">IMMEDIATE ACTION - Do This First!</AlertTitle>
                            <AlertDescription className="text-red-700">
                                <strong>1. Call emergency: 119, 110, or 1990</strong><br />
                                <strong>2. Get to nearest hospital immediately</strong><br />
                                <strong>3. Keep the person calm and still</strong>
                            </AlertDescription>
                        </Alert>

                        <div className="grid md:grid-cols-2 gap-6">
                            <Card className="border-green-300 bg-green-50/30">
                                <CardHeader>
                                    <CardTitle className="text-green-800 dark:text-green-400 flex items-center gap-2">
                                        <Heart className="w-5 h-5" />
                                        DO These Things
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-3 text-sm text-muted-foreground">
                                        <li className="flex items-start gap-2">
                                            <ChevronRight className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                            <span><strong>Keep calm:</strong> Panic makes venom spread faster</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <ChevronRight className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                            <span><strong>Remove jewelry:</strong> Hands and feet may swell</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <ChevronRight className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                            <span><strong>Clean wound:</strong> Wash gently with water</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <ChevronRight className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                            <span><strong>Take photo:</strong> Picture of snake helps doctors</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <ChevronRight className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                            <span><strong>Mark swelling:</strong> Draw line around swelling with pen</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <ChevronRight className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                            <span><strong>Note time:</strong> Remember when bite happened</span>
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card className="border-red-300 bg-red-50/30">
                                <CardHeader>
                                    <CardTitle className="text-red-800 flex items-center gap-2">
                                        <AlertTriangle className="w-5 h-5" />
                                        DON&apos;T Do These Things
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-3 text-sm text-muted-foreground">
                                        <li className="flex items-start gap-2">
                                            <ChevronRight className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                                            <span><strong>Don&apos;t cut:</strong> Never cut the bite wound</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <ChevronRight className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                                            <span><strong>Don&apos;t suck:</strong> Don&apos;t try to suck out venom</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <ChevronRight className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                                            <span><strong>Don&apos;t ice:</strong> No ice or cold water on bite</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <ChevronRight className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                                            <span><strong>Don&apos;t tie tight:</strong> No tight bandages above bite</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <ChevronRight className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                                            <span><strong>Don&apos;t drink:</strong> No alcohol or coffee</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <ChevronRight className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                                            <span><strong>Don&apos;t run:</strong> Don&apos;t make person walk or run</span>
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Hospital Information */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-blue-800">Hospitals with Snake Bite Treatment</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-blue-800">Major Cities</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div>
                                    <h4 className="font-semibold mb-2">Colombo</h4>
                                    <ul className="text-sm text-muted-foreground space-y-1">
                                        <li>• National Hospital - 011 269 1111</li>
                                        <li>• Lady Ridgeway Hospital - 011 269 3711</li>
                                        <li>• Durdans Hospital - 011 257 4444</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2">Kandy</h4>
                                    <ul className="text-sm text-muted-foreground space-y-1">
                                        <li>• Teaching Hospital Kandy - 081 223 3337</li>
                                        <li>• Sirimavo Bandaranaike Hospital - 081 247 6261</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2">Galle</h4>
                                    <ul className="text-sm text-muted-foreground space-y-1">
                                        <li>• Teaching Hospital Galle - 091 223 2261</li>
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-blue-800">Tourist Areas</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div>
                                    <h4 className="font-semibold mb-2">Negombo</h4>
                                    <ul className="text-sm text-muted-foreground space-y-1">
                                        <li>• District General Hospital - 031 223 5261</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2">Anuradhapura</h4>
                                    <ul className="text-sm text-muted-foreground space-y-1">
                                        <li>• Teaching Hospital - 025 223 5261</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2">Trincomalee</h4>
                                    <ul className="text-sm text-muted-foreground space-y-1">
                                        <li>• District General Hospital - 026 222 2261</li>
                                    </ul>
                                </div>
                                <Alert className="border-blue-400 bg-blue-100">
                                    <AlertDescription className="text-blue-800 text-sm">
                                        <strong>Important:</strong> All government hospitals in Sri Lanka have anti-venom. 
                                        Private hospitals may be faster but more expensive.
                                    </AlertDescription>
                                </Alert>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Travel Insurance */}
                <section className="mb-12">
                    <Card className="bg-yellow-50 border-yellow-300">
                        <CardHeader>
                            <CardTitle className="text-yellow-800 flex items-center gap-2">
                                <Shield className="w-5 h-5" />
                                Travel Insurance and Medical Coverage
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <p className="text-yellow-800">
                                    <strong>Very Important:</strong> Make sure your travel insurance covers snake bites and emergency medical treatment.
                                </p>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <h4 className="font-semibold mb-2 text-yellow-800">What to Check:</h4>
                                        <ul className="text-sm text-yellow-700 space-y-1">
                                            <li>• Emergency hospital treatment</li>
                                            <li>• Anti-venom medication costs</li>
                                            <li>• Emergency helicopter transport</li>
                                            <li>• Medical evacuation coverage</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-2 text-yellow-800">Cost Information:</h4>
                                        <ul className="text-sm text-yellow-700 space-y-1">
                                            <li>• Government hospital: Usually free</li>
                                            <li>• Private hospital: $500-2000 USD</li>
                                            <li>• Anti-venom: $100-500 USD per vial</li>
                                            <li>• May need multiple vials</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* Final Safety Message */}
                <section className="mb-12">
                    <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-300">
                        <CardHeader>
                            <CardTitle className="text-green-800 dark:text-green-400">Stay Safe and Enjoy Sri Lanka</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <p className="text-muted-foreground">
                                    Remember, snake bites are rare for tourists who follow safety rules. Millions of people visit 
                                    Sri Lanka safely every year. By being careful and knowing what to do, you can have a wonderful 
                                    and safe trip.
                                </p>
                                <p className="text-muted-foreground">
                                    Most snakes are actually helpful - they eat rats and other pests. Snakes are more afraid of you 
                                    than you are of them. With simple precautions, you can explore Sri Lanka&apos;s beautiful nature safely.
                                </p>
                                <div className="bg-green-100 p-4 rounded-lg">
                                    <p className="text-green-800 font-medium text-center">
                                        Save emergency numbers in your phone: <strong>119 • 110 • 1990</strong>
                                        <br />
                                        Share this guide with your travel companions!
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>
            </div>
        </main>
    )
}
