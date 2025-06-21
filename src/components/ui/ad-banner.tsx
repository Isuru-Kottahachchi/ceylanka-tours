"use client"

interface AdBannerProps {
  slot: string
  className?: string
}

export function AdBanner({ slot, className = "" }: AdBannerProps) {
  return (
    <div className={`w-full flex justify-center py-4 ${className}`}>
      <div className="bg-gray-100 dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center max-w-4xl w-full">
        <div className="text-gray-500 dark:text-gray-400">
          <div className="text-lg font-semibold mb-2">Advertisement Space</div>
          <div className="text-sm">Google AdSense - Slot: {slot}</div>
          <div className="text-xs mt-2 text-gray-400">728x90 Banner | Responsive Ad Unit</div>
        </div>
      </div>
    </div>
  )
}
