import React from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface ImageCarouselProps {
  images: { src: string; alt: string; caption?: string; title?: string }[];
  heightClassName?: string;
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, heightClassName }) => {
  const [current, setCurrent] = React.useState(0)
  const [isTransitioning, setIsTransitioning] = React.useState(false)
  const total = images.length

  const goTo = (idx: number) => {
    if (isTransitioning) return // Prevent rapid clicks
    setIsTransitioning(true)
    setCurrent((idx + total) % total)
    setTimeout(() => setIsTransitioning(false), 300) // Match transition duration
  }

  return (
    <div className="relative w-full max-w-full">
      <div className={`relative ${heightClassName ?? "h-[400px] md:h-[500px]"} rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800`}>
        {images.map((image, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${
              idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              style={{ objectPosition: 'center' }}
              sizes="(max-width: 768px) 100vw, 500px"
              priority={idx === 0} // Only prioritize first image
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none z-20" />

        {/* Navigation Buttons */}
        {total > 1 && (
          <>
            <button
              onClick={() => goTo(current - 1)}
              disabled={isTransitioning}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 md:p-3 rounded-full backdrop-blur-sm transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed z-30 shadow-lg"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            <button
              onClick={() => goTo(current + 1)}
              disabled={isTransitioning}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 md:p-3 rounded-full backdrop-blur-sm transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed z-30 shadow-lg"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </>
        )}

        {/* Caption/Title Overlay */}
        {(images[current].caption || images[current].title) && (
          <div className="absolute bottom-4 left-4 right-4 z-20">
            {/* <div className="text-white text-base md:text-lg font-semibold mb-1 drop-shadow-lg bg-black/20 backdrop-blur-sm rounded px-3 py-1 inline-block">
              {images[current].title}
            </div> */}
            {images[current].caption && (
              <div className="text-white text-xs md:text-sm font-light drop-shadow-lg bg-black/20 backdrop-blur-sm rounded px-3 py-1 inline-block mt-1">
                {images[current].caption}
              </div>
            )}
          </div>
        )}
      </div>
      {/* Dot Indicators */}
      {total > 1 && (
        <div className="flex justify-center space-x-2 mt-4">
          {images.map((_, idx) => (
            <button
              key={idx}
              disabled={isTransitioning}
              className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 disabled:cursor-not-allowed ${
                idx === current 
                  ? 'bg-blue-600 scale-110' 
                  : 'bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500'
              }`}
              onClick={() => goTo(idx)}
              aria-label={`Go to image ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
