import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb, Calendar, MapPin, CreditCard, Plane, Shield } from "lucide-react"

const tips = [
  {
    icon: Calendar,
    title: "Best Time to Visit",
    content:
      "December to March for west/south coasts, April to September for east coast. Avoid monsoon seasons for your preferred regions.",
  },
  // {
  //   icon: CreditCard,
  //   title: "Budget Planning",
  //   content: "Budget travelers: $25-40/day, Mid-range: $50-80/day, Luxury: $100+/day. Local food is very affordable.",
  // },
  {
    icon: Plane,
    title: "Getting Around",
    content:
      "Trains for scenic routes, buses for budget travel, tuk-tuks (Use Uber or PickMe) for short distances, private drivers for comfort.",
  },
  {
    icon: Shield,
    title: "Health & Safety",
    content:
      "No special vaccinations required. Drink bottled water, use mosquito repellent, and respect local customs.",
  },
  // {
  //   icon: MapPin,
  //   title: "Must-Have Apps",
  //   content:
  //     "Uber ,PickMe apps will be helpful for rides, Google Translate with Sinhala/Tamil, Maps.me for offline navigation, XE Currency converter.",
  // },
  {
    icon: Lightbulb,
    title: "Cultural Etiquette",
    content:
      "Dress modestly at temples, remove shoes before entering, don't point feet toward Buddha statues, tip 10% at restaurants.",
  },
]

export function TravelTips() {
  return (
    <section className="py-16 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Essential Travel Tips</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Everything you need to know for a perfect Sri Lankan adventure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips.map((tip, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-cyan-500"
            >
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center space-x-3 text-lg">
                  <div className="p-2 bg-cyan-100 dark:bg-cyan-900 rounded-lg group-hover:bg-cyan-200 dark:group-hover:bg-cyan-800 transition-colors">
                    <tip.icon className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <span className="text-gray-900 dark:text-white">{tip.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{tip.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
