"use client"
import { useState, useEffect } from "react"
import { ChevronUp } from "lucide-react"

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)

    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <button
      className={`fixed bottom-8 right-8 z-50 p-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full shadow-lg transition-all duration-300 transform cursor-pointer ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
      }`}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      <ChevronUp className="w-6 h-6" />
    </button>
  )
}
