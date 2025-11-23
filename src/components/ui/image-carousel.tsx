import React from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface ImageCarouselProps {
  images: { src: string; alt: string; caption?: string; title?: string }[];
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [current, setCurrent] = React.useState(0)
  const total = images.length

  const goTo = (idx: number) => setCurrent((idx + total) % total)

  return (
    <div className="relative w-full max-w-full">
      <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
        <Image
          src={images[current].src}
          alt={images[current].alt}
          fill
          className="object-cover transition-all duration-500 ease-in-out"
          style={{ objectPosition: 'center' }}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />

        {/* Navigation Buttons */}
        {total > 1 && (
          <>
            <button
              onClick={() => goTo(current - 1)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-200 cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => goTo(current + 1)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-200 cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}

        {/* Caption/Title Overlay */}
        {(images[current].caption || images[current].title) && (
          <div className="absolute bottom-4 left-4 right-4">
            <div className="text-white text-base md:text-lg font-semibold mb-1 drop-shadow">
              {images[current].title}
            </div>
            <div className="text-white text-xs md:text-sm font-light drop-shadow">
              {images[current].caption}
            </div>
          </div>
        )}
      </div>
      {/* Dot Indicators */}
      {total > 1 && (
        <div className="flex justify-center space-x-2 mt-3">
          {images.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${idx === current ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'}`}
              onClick={() => goTo(idx)}
              aria-label={`Go to image ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
