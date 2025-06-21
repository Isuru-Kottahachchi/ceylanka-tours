export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse">
          {/* Hero skeleton */}
          <div className="h-96 bg-gray-300 rounded-lg mb-8"></div>

          {/* Content skeleton */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="h-64 bg-gray-300 rounded-lg"></div>
              <div className="h-48 bg-gray-300 rounded-lg"></div>
              <div className="h-32 bg-gray-300 rounded-lg"></div>
            </div>
            <div className="space-y-6">
              <div className="h-48 bg-gray-300 rounded-lg"></div>
              <div className="h-32 bg-gray-300 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
