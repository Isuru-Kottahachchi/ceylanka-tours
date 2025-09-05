"use client"

import type { Metadata } from "next"
import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Plane, 
  Car, 
  Clock, 
  MapPin, 
  Users, 
  Shield, 
  Star, 
  Phone, 
  Mail, 
  CheckCircle,
  Wifi,
  Snowflake,
  Music,
  Navigation,
  CreditCard,
  Calendar,
  Route,
  Filter,
  ChevronDown,
  Luggage,
  ChevronLeft,
  ChevronRight
} from "lucide-react"


export default function AirportTransferPage() {
  const [selectedPassengers, setSelectedPassengers] = useState<string>("")
  const [selectedVehicle, setSelectedVehicle] = useState<string>("")
  const [selectedDestination, setSelectedDestination] = useState<string>("")
  
  // Carousel states for each vehicle
  const [beltaImageIndex, setBeltaImageIndex] = useState(0)
  const [carinaImageIndex, setCarinaImageIndex] = useState(0)
  const [kdhImageIndex, setKdhImageIndex] = useState(0)
  const [everyImageIndex, setEveryImageIndex] = useState(0)

  // Vehicle images
  const vehicleImages = {
    belta: ["/placeholder.jpg", "/placeholder.jpg", "/placeholder.jpg"],
    carina: ["/placeholder.jpg", "/placeholder.jpg", "/placeholder.jpg"],
    kdh: ["/placeholder.jpg", "/placeholder.jpg", "/placeholder.jpg"],
    every: ["/placeholder.jpg", "/placeholder.jpg", "/placeholder.jpg"]
  }

  // Get recommended vehicles based on passenger count
  const getRecommendedVehicles = (passengers: number) => {
    if (passengers <= 3) return ["Toyota Belta", "Toyota Carina", "Suzuki Every", "Toyota KDH"]
    if (passengers <= 4) return ["Toyota Carina", "Toyota KDH"]
    if (passengers <= 7) return ["Toyota KDH"]
    return ["Toyota KDH"]
  }

  // Get filtered vehicles based on current selection
  const getFilteredVehicles = () => {
    if (!selectedPassengers) return ["Toyota Belta", "Toyota Carina", "Suzuki Every", "Toyota KDH"]
    const passengerCount = parseInt(selectedPassengers)
    return getRecommendedVehicles(passengerCount)
  }

  // Calculate estimated price based on selections
  const calculateEstimatedPrice = () => {
    if (!selectedDestination || !selectedVehicle) return null
    
    const pricingData: Record<string, Record<string, number>> = {
      belta: { bentota: 12000, hikkaduwa: 14000, galle: 16000, weligama: 17000, mirissa: 18000, tangalle: 20000 },
      carina: { bentota: 15000, hikkaduwa: 17000, galle: 19000, weligama: 20000, mirissa: 21000, tangalle: 23000 },
      every: { bentota: 10000, hikkaduwa: 12000, galle: 14000, weligama: 15000, mirissa: 16000, tangalle: 18000 },
      kdh: { bentota: 18000, hikkaduwa: 20000, galle: 22000, weligama: 23000, mirissa: 24000, tangalle: 26000 }
    }

    return pricingData[selectedVehicle]?.[selectedDestination] || null
  }

  // Carousel component for vehicle images
  const VehicleImageCarousel = ({ 
    images, 
    currentIndex, 
    onPrevious, 
    onNext,
    vehicleName 
  }: {
    images: string[]
    currentIndex: number
    onPrevious: () => void
    onNext: () => void
    vehicleName: string
  }) => (
    <div className="relative h-48 bg-gray-200 dark:bg-gray-700 rounded-t-lg overflow-hidden">
      <Image
        src={images[currentIndex]}
        alt={`${vehicleName} - Image ${currentIndex + 1}`}
        fill
        className="object-cover"
      />
      <button
        onClick={onPrevious}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1 rounded-full transition-colors"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      <button
        onClick={onNext}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1 rounded-full transition-colors"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <Plane className="h-12 w-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Airport Transfer Service
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Comfortable & Reliable Transport from Colombo Airport to Bentota & Down South
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="secondary" className="bg-white/20 text-white text-lg px-4 py-2">
                <Car className="h-5 w-5 mr-2" />
                Toyota Fleet
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white text-lg px-4 py-2">
                <Shield className="h-5 w-5 mr-2" />
                Licensed Drivers
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white text-lg px-4 py-2">
                <Clock className="h-5 w-5 mr-2" />
                24/7 Service
              </Badge>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                <Phone className="h-5 w-5 mr-2" />
                Book Now: +94 77 123 4567
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                <Mail className="h-5 w-5 mr-2" />
                Get Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="text-center border-2 border-blue-100 dark:border-blue-800">
              <CardContent className="p-6">
                <Route className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">120 km</h3>
                <p className="text-gray-600 dark:text-gray-300">Colombo to Islandwide</p>
              </CardContent>
            </Card>
            <Card className="text-center border-2 border-green-100 dark:border-green-800">
              <CardContent className="p-6">
                <Clock className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">2.5 Hours</h3>
                <p className="text-gray-600 dark:text-gray-300">Average Journey Time</p>
              </CardContent>
            </Card>
            <Card className="text-center border-2 border-orange-100 dark:border-orange-800">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">1-4 Passengers</h3>
                <p className="text-gray-600 dark:text-gray-300">Per Vehicle</p>
              </CardContent>
            </Card>
            <Card className="text-center border-2 border-purple-100 dark:border-purple-800">
              <CardContent className="p-6">
                <Star className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">4.8/5</h3>
                <p className="text-gray-600 dark:text-gray-300">Customer Rating</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center justify-center">
                <Filter className="h-6 w-6 mr-2 text-blue-600" />
                Filter Your Perfect Transfer
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Customize your search to find the ideal vehicle and pricing for your journey
              </p>
            </div>

            <Card className="bg-gray-50 dark:bg-gray-900 border-2 border-dashed border-gray-300 dark:border-gray-600">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  
                  {/* Number of Passengers */}
                  <div className="space-y-2">
                    <label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
                      <Users className="h-4 w-4 mr-2 text-blue-600" />
                      Number of Passengers
                    </label>
                    <div className="relative">
                      <select 
                        className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none cursor-pointer"
                        value={selectedPassengers}
                        onChange={(e) => {
                          setSelectedPassengers(e.target.value)
                          setSelectedVehicle("") // Reset vehicle selection when passengers change
                        }}
                      >
                        <option value="">Select passengers</option>
                        <option value="1">1 Passenger (Belta/Corolla)</option>
                        <option value="2">2 Passengers (Belta/Corolla)</option>
                        <option value="3">3 Passengers (Belta/Corolla/KDH)</option>
                        <option value="4">4 Passengers (Corolla/KDH)</option>
                        <option value="5">5 Passengers (KDH only)</option>
                        <option value="6">6 Passengers (KDH only)</option>
                        <option value="7">7 Passengers (KDH only)</option>
                        <option value="8+">8+ Passengers (Contact us for larger vehicles)</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  {/* Destination */}
                  <div className="space-y-2">
                    <label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
                      <MapPin className="h-4 w-4 mr-2 text-green-600" />
                      Destination
                    </label>
                    <div className="relative">
                      <select 
                        className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-green-500 focus:border-green-500 appearance-none cursor-pointer"
                        value={selectedDestination}
                        onChange={(e) => setSelectedDestination(e.target.value)}
                      >
                        <option value="">Select destination</option>
                        <option value="bentota">Bentota (120km)</option>
                        <option value="hikkaduwa">Hikkaduwa (130km)</option>
                        <option value="galle">Galle (150km)</option>
                        <option value="weligama">Weligama (155km)</option>
                        <option value="mirissa">Mirissa (160km)</option>
                        <option value="tangalle">Tangalle (190km)</option>
                        <option value="other">Other (Custom quote)</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  {/* Vehicle Type */}
                  <div className="space-y-2">
                    <label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
                      <Car className="h-4 w-4 mr-2 text-orange-600" />
                      Vehicle Preference
                    </label>
                    <div className="relative">
                      <select 
                        className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 appearance-none cursor-pointer"
                        value={selectedVehicle}
                        onChange={(e) => setSelectedVehicle(e.target.value)}
                      >
                        <option value="">Any available vehicle</option>
                        {getFilteredVehicles().map((vehicle) => {
                          const vehicleInfo: Record<string, { value: string; label: string; disabled: boolean }> = {
                            "Toyota Belta": { value: "belta", label: "Toyota Belta (Economy - Up to 3 passengers)", disabled: false },
                            "Toyota Carina": { value: "carina", label: "Toyota Carina (Premium - Up to 4 passengers)", disabled: false },
                            "Suzuki Every": { value: "every", label: "Suzuki Every (Compact - Up to 3 passengers)", disabled: false },
                            "Toyota KDH": { value: "kdh", label: "Toyota KDH (Van - Up to 7 passengers)", disabled: false }
                          };
                          
                          const info = vehicleInfo[vehicle];
                          if (!info) return null;
                          
                          return (
                            <option key={info.value} value={info.value}>
                              {info.label}
                            </option>
                          );
                        })}
                        {selectedPassengers && parseInt(selectedPassengers) > 7 && (
                          <option value="custom">Contact us for larger vehicles</option>
                        )}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  {/* Luggage */}
                  <div className="space-y-2">
                    <label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
                      <Luggage className="h-4 w-4 mr-2 text-purple-600" />
                      Luggage
                    </label>
                    <div className="relative">
                      <select className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 appearance-none cursor-pointer">
                        <option value="">Select luggage</option>
                        <option value="light">Light (1-2 bags)</option>
                        <option value="medium">Medium (3-4 bags)</option>
                        <option value="heavy">Heavy (5+ bags)</option>
                        <option value="special">Special items (Surfboards, etc.)</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Dynamic Price Display */}
                {calculateEstimatedPrice() && (
                  <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                    <div className="text-center">
                      <p className="text-sm text-green-700 dark:text-green-300 mb-1">Estimated Price</p>
                      <p className="text-2xl font-bold text-green-800 dark:text-green-200">
                        LKR {calculateEstimatedPrice()?.toLocaleString()}
                      </p>
                      <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                        Based on your selection: {selectedPassengers} {parseInt(selectedPassengers) === 1 ? 'passenger' : 'passengers'} to {selectedDestination}
                      </p>
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                    <Star className="h-5 w-5 mr-2" />
                    Find Best Match
                  </Button>
                  <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20">
                    <Phone className="h-5 w-5 mr-2" />
                    Get Custom Quote
                  </Button>
                  <Button 
                    size="lg" 
                    variant="ghost" 
                    className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                    onClick={() => {
                      setSelectedPassengers("")
                      setSelectedVehicle("")
                      setSelectedDestination("")
                    }}
                  >
                    Reset Filters
                  </Button>
                </div>

                {/* Quick Filter Tags */}
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-600">
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Popular Combinations:</p>
                  <div className="flex flex-wrap gap-3">
                    <Badge 
                      variant="outline" 
                      className="cursor-pointer hover:bg-blue-50 hover:border-blue-300 dark:hover:bg-blue-900/20 transition-colors"
                      onClick={() => {
                        setSelectedPassengers("2")
                        setSelectedDestination("bentota")
                        setSelectedVehicle("")
                      }}
                    >
                      <Users className="h-3 w-3 mr-1" />
                      2 Passengers + Bentota
                    </Badge>
                    <Badge 
                      variant="outline" 
                      className="cursor-pointer hover:bg-green-50 hover:border-green-300 dark:hover:bg-green-900/20 transition-colors"
                      onClick={() => {
                        setSelectedPassengers("3")
                        setSelectedDestination("galle")
                        setSelectedVehicle("corolla")
                      }}
                    >
                      <Car className="h-3 w-3 mr-1" />
                      Premium + Galle
                    </Badge>
                    <Badge 
                      variant="outline" 
                      className="cursor-pointer hover:bg-orange-50 hover:border-orange-300 dark:hover:bg-orange-900/20 transition-colors"
                      onClick={() => {
                        setSelectedPassengers("6")
                        setSelectedDestination("mirissa")
                        setSelectedVehicle("kdh")
                      }}
                    >
                      <Luggage className="h-3 w-3 mr-1" />
                      Family + Heavy Luggage
                    </Badge>
                    <Badge 
                      variant="outline" 
                      className="cursor-pointer hover:bg-purple-50 hover:border-purple-300 dark:hover:bg-purple-900/20 transition-colors"
                      onClick={() => {
                        setSelectedPassengers("4")
                        setSelectedDestination("tangalle")
                        setSelectedVehicle("corolla")
                      }}
                    >
                      <Wifi className="h-3 w-3 mr-1" />
                      Business + WiFi
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Real-time Price Estimate */}
            <div className="mt-8">
              <Card className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-blue-200 dark:border-blue-800">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-blue-800 dark:text-blue-200 mb-1">
                        Estimated Price Range
                      </h3>
                      <p className="text-sm text-blue-600 dark:text-blue-300">
                        Select filters above to see personalized pricing
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-700 dark:text-blue-300">
                        LKR 12,000 - 26,000
                      </div>
                      <p className="text-xs text-blue-600 dark:text-blue-400">One way transfer</p>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      No hidden fees
                    </Badge>
                    <Badge className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
                      <Shield className="h-3 w-3 mr-1" />
                      Fixed pricing
                    </Badge>
                    <Badge className="bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300">
                      <Clock className="h-3 w-3 mr-1" />
                      Instant booking
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Fleet */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Vehicle Fleet</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Modern, comfortable, and well-maintained vehicles for your safe journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {/* Toyota Belta */}
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <VehicleImageCarousel
                images={vehicleImages.belta}
                currentIndex={beltaImageIndex}
                onPrevious={() => setBeltaImageIndex((prev) => (prev === 0 ? vehicleImages.belta.length - 1 : prev - 1))}
                onNext={() => setBeltaImageIndex((prev) => (prev === vehicleImages.belta.length - 1 ? 0 : prev + 1))}
                vehicleName="Toyota Belta"
              />
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 text-white">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold">Toyota Belta</h3>
                  <Car className="h-6 w-6" />
                </div>
                <p className="mt-1 opacity-90 text-sm">Compact sedan for efficient travel</p>
                <p className="mt-1 opacity-90 text-sm">1300CC Engine with CVT transmission</p>
              </div>
              <CardContent className="p-4">
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="flex items-center">
                    <Users className="h-4 w-4 text-blue-600 mr-2" />
                    <span className="text-sm">Up to 3 passengers</span>
                  </div>
                  <div className="flex items-center">
                    <Snowflake className="h-4 w-4 text-blue-600 mr-2" />
                    <span className="text-sm">Air Conditioning</span>
                  </div>
                  <div className="flex items-center">
                    <Music className="h-4 w-4 text-blue-600 mr-2" />
                    <span className="text-sm">Music System</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="h-4 w-4 text-blue-600 mr-2" />
                    <span className="text-sm">Fully Insured</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <span className="font-medium text-sm">To Bentota</span>
                    <span className="font-bold text-blue-600 text-sm">LKR 12,000</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <span className="font-medium text-sm">To Galle</span>
                    <span className="font-bold text-blue-600 text-sm">LKR 15,000</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <span className="font-medium text-sm">To Mirissa</span>
                    <span className="font-bold text-blue-600 text-sm">LKR 16,500</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Toyota Carina */}
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <VehicleImageCarousel
                images={vehicleImages.carina}
                currentIndex={carinaImageIndex}
                onPrevious={() => setCarinaImageIndex((prev) => (prev === 0 ? vehicleImages.carina.length - 1 : prev - 1))}
                onNext={() => setCarinaImageIndex((prev) => (prev === vehicleImages.carina.length - 1 ? 0 : prev + 1))}
                vehicleName="Toyota Carina"
              />
              <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 text-white">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold">Toyota Carina</h3>
                  <Car className="h-6 w-6" />
                </div>
                <p className="mt-1 opacity-90 text-sm">Premium comfort for longer journeys</p>
              </div>
              <CardContent className="p-4">
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="flex items-center">
                    <Users className="h-4 w-4 text-green-600 mr-2" />
                    <span className="text-sm">Up to 4 passengers</span>
                  </div>
                  <div className="flex items-center">
                    <Snowflake className="h-4 w-4 text-green-600 mr-2" />
                    <span className="text-sm">Climate Control</span>
                  </div>
                  <div className="flex items-center">
                    <Wifi className="h-4 w-4 text-green-600 mr-2" />
                    <span className="text-sm">Free WiFi</span>
                  </div>
                  <div className="flex items-center">
                    <Navigation className="h-4 w-4 text-green-600 mr-2" />
                    <span className="text-sm">GPS Navigation</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-2 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <span className="font-medium text-sm">To Bentota</span>
                    <span className="font-bold text-green-600 text-sm">LKR 14,000</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <span className="font-medium text-sm">To Galle</span>
                    <span className="font-bold text-green-600 text-sm">LKR 17,000</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <span className="font-medium text-sm">To Mirissa</span>
                    <span className="font-bold text-green-600 text-sm">LKR 18,500</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Suzuki Every */}
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <VehicleImageCarousel
                images={vehicleImages.every}
                currentIndex={everyImageIndex}
                onPrevious={() => setEveryImageIndex((prev) => (prev === 0 ? vehicleImages.every.length - 1 : prev - 1))}
                onNext={() => setEveryImageIndex((prev) => (prev === vehicleImages.every.length - 1 ? 0 : prev + 1))}
                vehicleName="Suzuki Every"
              />
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-4 text-white">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold">Suzuki Every</h3>
                  <Car className="h-6 w-6" />
                </div>
                <p className="mt-1 opacity-90 text-sm">Compact van for budget travel</p>
              </div>
              <CardContent className="p-4">
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="flex items-center">
                    <Users className="h-4 w-4 text-orange-600 mr-2" />
                    <span className="text-sm">Up to 3 passengers</span>
                  </div>
                  <div className="flex items-center">
                    <Snowflake className="h-4 w-4 text-orange-600 mr-2" />
                    <span className="text-sm">Air Conditioning</span>
                  </div>
                  <div className="flex items-center">
                    <Music className="h-4 w-4 text-orange-600 mr-2" />
                    <span className="text-sm">Music System</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="h-4 w-4 text-orange-600 mr-2" />
                    <span className="text-sm">Fully Insured</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-2 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                    <span className="font-medium text-sm">To Bentota</span>
                    <span className="font-bold text-orange-600 text-sm">LKR 10,000</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                    <span className="font-medium text-sm">To Galle</span>
                    <span className="font-bold text-orange-600 text-sm">LKR 14,000</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                    <span className="font-medium text-sm">To Mirissa</span>
                    <span className="font-bold text-orange-600 text-sm">LKR 16,000</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Toyota KDH */}
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <VehicleImageCarousel
                images={vehicleImages.kdh}
                currentIndex={kdhImageIndex}
                onPrevious={() => setKdhImageIndex((prev) => (prev === 0 ? vehicleImages.kdh.length - 1 : prev - 1))}
                onNext={() => setKdhImageIndex((prev) => (prev === vehicleImages.kdh.length - 1 ? 0 : prev + 1))}
                vehicleName="Toyota KDH"
              />
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-4 text-white">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold">Toyota KDH</h3>
                  <Car className="h-6 w-6" />
                </div>
                <p className="mt-1 opacity-90 text-sm">Spacious van for group travel</p>
              </div>
              <CardContent className="p-4">
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="flex items-center">
                    <Users className="h-4 w-4 text-purple-600 mr-2" />
                    <span className="text-sm">Up to 7 passengers</span>
                  </div>
                  <div className="flex items-center">
                    <Snowflake className="h-4 w-4 text-purple-600 mr-2" />
                    <span className="text-sm">Air Conditioning</span>
                  </div>
                  <div className="flex items-center">
                    <Luggage className="h-4 w-4 text-purple-600 mr-2" />
                    <span className="text-sm">Extra Luggage Space</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="h-4 w-4 text-purple-600 mr-2" />
                    <span className="text-sm">Fully Insured</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-2 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                    <span className="font-medium text-sm">To Bentota</span>
                    <span className="font-bold text-purple-600 text-sm">LKR 18,000</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                    <span className="font-medium text-sm">To Galle</span>
                    <span className="font-bold text-purple-600 text-sm">LKR 22,000</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                    <span className="font-medium text-sm">To Mirissa</span>
                    <span className="font-bold text-purple-600 text-sm">LKR 24,000</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Down South Destinations</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              We provide reliable transfers to all major tourist destinations in southern Sri Lanka
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Bentota",
                distance: "120 km",
                time: "2.5 hours",
                description: "Famous beach destination with water sports and luxury resorts",
                highlights: ["Golden beaches", "Water sports", "Luxury hotels", "River safari"]
              },
              {
                name: "Galle",
                distance: "150 km", 
                time: "3 hours",
                description: "Historic fort city with colonial architecture and beaches",
                highlights: ["Galle Fort", "Lighthouse", "Museums", "Shopping"]
              },
              {
                name: "Mirissa",
                distance: "160 km",
                time: "3.5 hours", 
                description: "Whale watching capital and stunning beach destination",
                highlights: ["Whale watching", "Coconut Tree Hill", "Beach clubs", "Surfing"]
              },
              {
                name: "Hikkaduwa",
                distance: "130 km",
                time: "2.5 hours",
                description: "Vibrant beach town known for surfing and nightlife",
                highlights: ["Surfing", "Coral reefs", "Beach bars", "Sea turtles"]
              },
              {
                name: "Weligama",
                distance: "155 km",
                time: "3 hours",
                description: "Home to stilt fishermen and excellent surf breaks",
                highlights: ["Stilt fishing", "Snake Island", "Surfing", "Coconut Tree Hill"]
              },
              {
                name: "Tangalle",
                distance: "190 km",
                time: "4 hours",
                description: "Pristine beaches and peaceful coastal town",
                highlights: ["Pristine beaches", "Sea turtle nesting", "Quiet atmosphere", "Natural pools"]
              }
            ].map((destination, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{destination.name}</CardTitle>
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex gap-4 text-sm text-gray-600 dark:text-gray-300">
                    <span>📍 {destination.distance}</span>
                    <span>⏱️ {destination.time}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{destination.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Highlights:</h4>
                    <div className="flex flex-wrap gap-2">
                      {destination.highlights.map((highlight, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Service?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Professional, reliable, and comfortable airport transfers you can trust
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="h-12 w-12 text-blue-600" />,
                title: "Licensed & Insured",
                description: "All our drivers are licensed professionals with comprehensive insurance coverage for your safety."
              },
              {
                icon: <Clock className="h-12 w-12 text-green-600" />,
                title: "Punctual Service", 
                description: "We monitor flight schedules and ensure timely pickups, even for delayed or early arrivals."
              },
              {
                icon: <Star className="h-12 w-12 text-orange-600" />,
                title: "Meet & Greet",
                description: "Our drivers will meet you at the arrivals hall with a name board for easy identification."
              },
              {
                icon: <CreditCard className="h-12 w-12 text-purple-600" />,
                title: "Fixed Rates",
                description: "No hidden charges or meter surprises. Pay the agreed price regardless of traffic conditions."
              },
              {
                icon: <Wifi className="h-12 w-12 text-cyan-600" />,
                title: "Free WiFi",
                description: "Stay connected during your journey with complimentary WiFi in all our premium vehicles."
              },
              {
                icon: <Phone className="h-12 w-12 text-red-600" />,
                title: "24/7 Support",
                description: "Round-the-clock customer support for bookings, changes, and assistance during your journey."
              }
            ].map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Process */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Easy Booking Process</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Book your airport transfer in just 3 simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "1",
                title: "Contact Us",
                description: "Call, WhatsApp, or email us with your flight details and destination",
                icon: <Phone className="h-8 w-8" />
              },
              {
                step: "2", 
                title: "Confirm Details",
                description: "We'll confirm your booking with vehicle type, driver details, and total cost",
                icon: <CheckCircle className="h-8 w-8" />
              },
              {
                step: "3",
                title: "Meet & Travel",
                description: "Your driver will meet you at arrivals and provide a comfortable journey",
                icon: <Car className="h-8 w-8" />
              }
            ].map((step, index) => (
              <Card key={index} className="text-center border-2 border-dashed border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-600 transition-colors">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">{step.step}</span>
                  </div>
                  <div className="flex justify-center mb-4 text-blue-600">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Transfer Rates</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Transparent pricing with no hidden charges
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <Card className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
                <CardTitle className="text-2xl text-center">Airport Transfer Rates (One Way)</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                      <tr>
                        <th className="px-6 py-4 text-left font-semibold">Destination</th>
                        <th className="px-6 py-4 text-center font-semibold">Distance</th>
                        <th className="px-6 py-4 text-center font-semibold">Duration</th>
                        <th className="px-6 py-4 text-center font-semibold">Toyota Belta</th>
                        <th className="px-6 py-4 text-center font-semibold">Toyota Carina</th>
                        <th className="px-6 py-4 text-center font-semibold">Suzuki Every</th>
                        <th className="px-6 py-4 text-center font-semibold">Toyota KDH</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                      {[
                        ["Bentota", "120 km", "2.5 hrs", "LKR 12,000", "LKR 14,000", "LKR 10,000", "LKR 18,000"],
                        ["Hikkaduwa", "130 km", "2.5 hrs", "LKR 12,500", "LKR 14,500", "LKR 10,500", "LKR 18,500"],
                        ["Galle", "150 km", "3 hrs", "LKR 15,000", "LKR 17,000", "LKR 14,000", "LKR 22,000"],
                        ["Weligama", "155 km", "3 hrs", "LKR 15,500", "LKR 17,500", "LKR 14,500", "LKR 22,500"],
                        ["Mirissa", "160 km", "3.5 hrs", "LKR 16,500", "LKR 18,500", "LKR 16,000", "LKR 24,000"],
                        ["Tangalle", "190 km", "4 hrs", "LKR 19,000", "LKR 21,000", "LKR 18,000", "LKR 26,000"]
                      ].map((row, index) => (
                        <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                          <td className="px-6 py-4 font-medium">{row[0]}</td>
                          <td className="px-6 py-4 text-center text-gray-600 dark:text-gray-300">{row[1]}</td>
                          <td className="px-6 py-4 text-center text-gray-600 dark:text-gray-300">{row[2]}</td>
                          <td className="px-6 py-4 text-center font-semibold text-blue-600">{row[3]}</td>
                          <td className="px-6 py-4 text-center font-semibold text-green-600">{row[4]}</td>
                          <td className="px-6 py-4 text-center font-semibold text-orange-600">{row[5]}</td>
                          <td className="px-6 py-4 text-center font-semibold text-purple-600">{row[6]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-l-4 border-l-blue-500">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3 flex items-center">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
                    What's Included
                  </h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>✓ Professional English-speaking driver</li>
                    <li>✓ Fuel and all road tolls</li>
                    <li>✓ Meet & greet service at airport</li>
                    <li>✓ Bottled water for the journey</li>
                    <li>✓ Air conditioning and music system</li>
                    <li>✓ Assistance with luggage</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-orange-500">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3 flex items-center">
                    <Calendar className="h-6 w-6 text-orange-600 mr-2" />
                    Booking Information
                  </h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• Advance booking recommended</li>
                    <li>• 24-hour cancellation policy</li>
                    <li>• Payment on arrival or advance transfer</li>
                    <li>• Child seats available on request</li>
                    <li>• Waiting time: 90 minutes free at airport</li>
                    <li>• Extra stops can be arranged</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Booking */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Book Your Transfer?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Contact us now to reserve your comfortable airport transfer. Available 24/7 for your convenience.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-8">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <Phone className="h-8 w-8 mx-auto mb-3" />
                <h3 className="font-bold mb-2">Call / WhatsApp</h3>
                <p className="text-blue-100">+94 77 123 4567</p>
                <p className="text-blue-100">+94 11 234 5678</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <Mail className="h-8 w-8 mx-auto mb-3" />
                <h3 className="font-bold mb-2">Email</h3>
                <p className="text-blue-100">transfers@ceylanka-tours.com</p>
                <p className="text-blue-100">info@ceylanka-tours.com</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <Clock className="h-8 w-8 mx-auto mb-3" />
                <h3 className="font-bold mb-2">Operating Hours</h3>
                <p className="text-blue-100">24/7 Service</p>
                <p className="text-blue-100">365 Days a Year</p>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
              <Phone className="h-5 w-5 mr-2" />
              Call Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Mail className="h-5 w-5 mr-2" />
              Send Email
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
