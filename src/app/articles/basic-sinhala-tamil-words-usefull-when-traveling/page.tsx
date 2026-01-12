"use client"

import type { Metadata } from "next"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Coffee, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function BasicSinhalaTamilWordsArticle() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-purple-600 text-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Simple Words to Connect with Locals
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-orange-100 font-light">
              Learn basic Sinhala and Tamil phrases to make your Sri Lanka trip amazing
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
                <Heart className="h-4 w-4 mr-2" />
                Sinhala Phrases
              </Badge>
              <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
                <Heart className="h-4 w-4 mr-2" />
                Tamil Words
              </Badge>
              <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
                <Coffee className="h-4 w-4 mr-2" />
                Easy to Learn
              </Badge>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Back Button */}
        <Link href="/articles">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Articles
          </Button>
        </Link>

        {/* Introduction */}
        <section className="mb-12">
          <Card className="border-l-4 border-l-orange-500">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                Learning just a few words in Sinhala and Tamil will make your Sri Lanka trip amazing! 
                Locals love when travelers try to speak their language. Don&apos;t worry about being perfect - 
                a smile and effort go a long way! 😊
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Below you&apos;ll find the most important words you need, with both Sinhala and Tamil translations 
                plus easy-to-follow pronunciations. Start with &quot;Thank you&quot; and you&apos;ll be making friends everywhere!
              </p>
            </CardContent>
          </Card>
        </section>

      {/* Essential Words - Compact */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="text-2xl">💬</span> Essential Words You Need
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Hello */}
            <div className="p-4 bg-gradient-to-r from-orange-50 to-purple-50 dark:from-orange-950 dark:to-purple-950 rounded-lg border">
              <p className="font-bold text-lg mb-3">Hello</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-orange-600 dark:text-orange-400 font-semibold mb-1">🇱🇰 Sinhala</p>
                  <p className="text-2xl text-orange-600 dark:text-orange-400 mb-1">ආයුබෝවන්</p>
                  <p className="text-lg mb-1">Ayubowan</p>
                  <p className="text-sm italic text-muted-foreground">"AH-yu-bo-wan"</p>
                </div>
                <div>
                  <p className="text-sm text-purple-600 dark:text-purple-400 font-semibold mb-1">🇱🇰 Tamil</p>
                  <p className="text-2xl text-purple-600 dark:text-purple-400 mb-1">வணக்கம்</p>
                  <p className="text-lg mb-1">Vanakkam</p>
                  <p className="text-sm italic text-muted-foreground">"va-NAK-kam"</p>
                </div>
              </div>
            </div>

            {/* Thank You */}
            <div className="p-4 bg-gradient-to-r from-orange-50 to-purple-50 dark:from-orange-950 dark:to-purple-950 rounded-lg border">
              <p className="font-bold text-lg mb-3 flex items-center gap-2">Thank You <span className="text-yellow-500">⭐</span></p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-orange-600 dark:text-orange-400 font-semibold mb-1">🇱🇰 Sinhala</p>
                  <p className="text-2xl text-orange-600 dark:text-orange-400 mb-1">ස්තූතියි</p>
                  <p className="text-lg mb-1">Stuti</p>
                  <p className="text-sm italic text-muted-foreground">"STOOO-thi"</p>
                </div>
                <div>
                  <p className="text-sm text-purple-600 dark:text-purple-400 font-semibold mb-1">🇱🇰 Tamil</p>
                  <p className="text-2xl text-purple-600 dark:text-purple-400 mb-1">நன்றி</p>
                  <p className="text-lg mb-1">Nandri</p>
                  <p className="text-sm italic text-muted-foreground">"NAN-dri"</p>
                </div>
              </div>
            </div>

            {/* Good Morning */}
            <div className="p-4 bg-gradient-to-r from-orange-50 to-purple-50 dark:from-orange-950 dark:to-purple-950 rounded-lg border">
              <p className="font-bold text-lg mb-3">Good Morning</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-orange-600 dark:text-orange-400 font-semibold mb-1">🇱🇰 Sinhala</p>
                  <p className="text-2xl text-orange-600 dark:text-orange-400 mb-1">සුභ උදෑසනක්</p>
                  <p className="text-lg mb-1">Suba udasanak</p>
                  <p className="text-sm italic text-muted-foreground">"SOO-ba oo-DA-sa-nak"</p>
                </div>
                <div>
                  <p className="text-sm text-purple-600 dark:text-purple-400 font-semibold mb-1">🇱🇰 Tamil</p>
                  <p className="text-2xl text-purple-600 dark:text-purple-400 mb-1">காலை வணக்கம்</p>
                  <p className="text-lg mb-1">Kaalai vanakkam</p>
                  <p className="text-sm italic text-muted-foreground">"KAA-lai va-NAK-kam"</p>
                </div>
              </div>
            </div>

            {/* Please */}
            <div className="p-4 bg-gradient-to-r from-orange-50 to-purple-50 dark:from-orange-950 dark:to-purple-950 rounded-lg border">
              <p className="font-bold text-lg mb-3">Please</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-orange-600 dark:text-orange-400 font-semibold mb-1">🇱🇰 Sinhala</p>
                  <p className="text-2xl text-orange-600 dark:text-orange-400 mb-1">කරුණාකර</p>
                  <p className="text-lg mb-1">Karunakara</p>
                  <p className="text-sm italic text-muted-foreground">"ka-ru-NAA-ka-ra"</p>
                </div>
                <div>
                  <p className="text-sm text-purple-600 dark:text-purple-400 font-semibold mb-1">🇱🇰 Tamil</p>
                  <p className="text-2xl text-purple-600 dark:text-purple-400 mb-1">தயவுசெய்து</p>
                  <p className="text-lg mb-1">Thayavu seithu</p>
                  <p className="text-sm italic text-muted-foreground">"ta-YA-vu SAY-tu"</p>
                </div>
              </div>
            </div>

            {/* Sorry */}
            <div className="p-4 bg-gradient-to-r from-orange-50 to-purple-50 dark:from-orange-950 dark:to-purple-950 rounded-lg border">
              <p className="font-bold text-lg mb-3">Sorry</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-orange-600 dark:text-orange-400 font-semibold mb-1">🇱🇰 Sinhala</p>
                  <p className="text-2xl text-orange-600 dark:text-orange-400 mb-1">සමාවෙන්න</p>
                  <p className="text-lg mb-1">Samawenna</p>
                  <p className="text-sm italic text-muted-foreground">"sa-ma-WEN-na"</p>
                </div>
                <div>
                  <p className="text-sm text-purple-600 dark:text-purple-400 font-semibold mb-1">🇱🇰 Tamil</p>
                  <p className="text-2xl text-purple-600 dark:text-purple-400 mb-1">மன்னிக்கவும்</p>
                  <p className="text-lg mb-1">Mannikavum</p>
                  <p className="text-sm italic text-muted-foreground">"man-ni-ka-vum"</p>
                </div>
              </div>
            </div>

            {/* Yes / No */}
            <div className="p-4 bg-gradient-to-r from-orange-50 to-purple-50 dark:from-orange-950 dark:to-purple-950 rounded-lg border">
              <p className="font-bold text-lg mb-3">Yes / No</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-orange-600 dark:text-orange-400 font-semibold mb-1">🇱🇰 Sinhala</p>
                  <p className="text-2xl text-orange-600 dark:text-orange-400 mb-1">ඔව් / නෑ</p>
                  <p className="text-lg mb-1">Ow / Nehe</p>
                  <p className="text-sm italic text-muted-foreground">"OH / NAY-hey"</p>
                </div>
                <div>
                  <p className="text-sm text-purple-600 dark:text-purple-400 font-semibold mb-1">🇱🇰 Tamil</p>
                  <p className="text-2xl text-purple-600 dark:text-purple-400 mb-1">ஆம் / இல்லை</p>
                  <p className="text-lg mb-1">Aam / Illai</p>
                  <p className="text-sm italic text-muted-foreground">"AAM / IL-lai"</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Tips */}
      <Card className="mb-8 bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-950 dark:to-green-950">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="w-6 h-6 text-red-500" />
            Quick Tips for Success
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <Coffee className="w-5 h-5 mt-1 text-orange-500 flex-shrink-0" />
              <span><strong>Start simple:</strong> Just use "Thank you" (Stuti/Nandri) everywhere - it works magic!</span>
            </li>
            <li className="flex items-start gap-2">
              <Coffee className="w-5 h-5 mt-1 text-orange-500 flex-shrink-0" />
              <span><strong>Smile always:</strong> Even if you get the words wrong, your effort will be appreciated</span>
            </li>
            <li className="flex items-start gap-2">
              <Coffee className="w-5 h-5 mt-1 text-orange-500 flex-shrink-0" />
              <span><strong>Practice daily:</strong> Use these words with your hotel staff, tuk-tuk drivers, and shop owners</span>
            </li>
            <li className="flex items-start gap-2">
              <Coffee className="w-5 h-5 mt-1 text-orange-500 flex-shrink-0" />
              <span><strong>Have fun:</strong> Don't stress about being perfect - locals will help you!</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Closing */}
      <div className="text-center p-8 bg-gradient-to-r from-orange-50 to-purple-50 dark:from-orange-950 dark:to-purple-950 rounded-lg border">
        <h3 className="text-2xl font-bold mb-4">You&apos;re Ready! 🎉</h3>
        <p className="text-lg mb-4">
          These simple words will open doors and hearts all over Sri Lanka. 
          The locals will be so happy to hear you speak their language!
        </p>
        <p className="text-sm text-muted-foreground">
          Pro tip: Take a screenshot of this page and keep it handy on your phone!
        </p>
      </div>

      </div>
    </main>
  )
}
