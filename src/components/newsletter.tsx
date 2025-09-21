"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, CheckCircle } from "lucide-react"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      // Here you would integrate with your newsletter service
      setIsSubscribed(true)
      setEmail("")
    }
  }

  return (
    <section className="py-16 bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-800 dark:to-blue-900">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg">
          <CardContent className="p-8 text-center">
            {!isSubscribed ? (
              <>
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-100 dark:bg-cyan-900 rounded-full mb-4">
                    <Mail className="h-8 w-8 text-cyan-600 dark:text-cyan-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Stay Updated with CeyLanka tours</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Get the latest travel guides, destination updates, and exclusive tips delivered to your inbox
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 h-12 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600"
                  />
                  <Button type="submit" className="h-12 px-8 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold dark:bg-cyan-700 dark:hover:bg-cyan-800">
                    Subscribe Now
                  </Button>
                </form>

                <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">We respect your privacy. Unsubscribe at any time.</p>
              </>
            ) : (
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full mb-4">
                  <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-300" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Thank You for Subscribing!</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  You&apos;ll receive our latest travel updates and exclusive Sri Lankan travel tips.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
