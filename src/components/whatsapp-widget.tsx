"use client"
import { useState, useEffect } from "react"
import { MessageCircle, X } from "lucide-react"

export function WhatsAppWidget() {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [showCaption, setShowCaption] = useState(false)

  // Show widget after page loads
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
      // Show caption after widget appears
      setTimeout(() => {
        setShowCaption(true)
      }, 1000)
    }, 2000) // Show after 2 seconds

    // Hide caption after 8 seconds
    const captionTimer = setTimeout(() => {
      setShowCaption(false)
    }, 10000)

    return () => {
      clearTimeout(timer)
      clearTimeout(captionTimer)
    }
  }, [])

  const whatsappNumber = "+94707646765"
  const defaultMessage = "Hi! I'm interested in Sri Lanka travel information from CeyLanka Tours."

  // Handle WhatsApp click
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(defaultMessage)
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
  }

  // Toggle expanded view
  const toggleExpanded = () => {
    setIsExpanded(!isExpanded)
    setShowCaption(false) // Hide caption when expanding
  }

  return (
    <>
      {/* Main WhatsApp Button */}
      <div
        className={`fixed bottom-8 left-8 z-50 transition-all duration-300 transform ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
        }`}
      >
        {/* Expanded Chat Preview */}
        {isExpanded && (
          <div className="absolute bottom-16 left-0 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 w-80 mb-2 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-gray-900 dark:text-gray-100">CeyLanka Tours</h4>
                  <p className="text-xs text-green-500">Online</p>
                </div>
              </div>
              <button
                onClick={toggleExpanded}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                aria-label="Close chat preview"
              >
                <X className="w-4 h-4 cursor-pointer" />
              </button>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3 mb-3">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                👋 Hello! Need help planning your Sri Lanka trip?
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Typically replies instantly
              </p>
            </div>
            
            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              Start Chat
            </button>
          </div>
        )}

        {/* Help Caption - Speech Bubble */}
        {showCaption && !isExpanded && (
          <div className="absolute bottom-16 left-0 mb-2 animate-bounce hidden md:block">
            <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-4 py-2 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 max-w-xs relative">
              <p className="text-sm font-medium">Need help? 🤔</p>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                Chat with us for travel tips!
              </p>
              {/* Speech bubble arrow */}
              <div className="absolute bottom-0 left-6 transform translate-y-full">
                <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white dark:border-t-gray-800"></div>
              </div>
              
              {/* Close button for caption */}
              <button
                onClick={() => setShowCaption(false)}
                className="absolute top-1 right-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                aria-label="Close help caption"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          </div>
        )}

        {/* Main WhatsApp Button */}
        <div className="relative">
          <button
            onClick={toggleExpanded}
            className="p-3 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 cursor-pointer group"
            aria-label="Open WhatsApp chat"
          >
            <MessageCircle className="w-6 h-6" />
            
            {/* Pulse animation */}
            <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75 group-hover:animate-none"></div>
          </button>
          
          {/* New message indicator */}
          {!isExpanded && (
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-xs text-white font-bold">1</span>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
