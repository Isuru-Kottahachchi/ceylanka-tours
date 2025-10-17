import Image from 'next/image'

export default function InsuranceBanner() {
  return (
    <div className="my-6">
      <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-lg bg-gradient-to-r from-white via-white to-blue-50 dark:from-gray-800 dark:via-gray-800 dark:to-blue-900/50 transition-all transform hover:scale-[1.02]">
        <div className="p-3 sm:p-4 flex flex-row items-center justify-between gap-3 sm:gap-4">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="relative w-[120px] sm:w-[140px] h-[30px] dark:invert">
              <Image
                src="/ptm-logo.svg"
                alt="PayingTooMuch.com"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="h-8 w-px bg-blue-200/80 dark:bg-blue-400/20" />
            <div>
              <h3 className="font-bold text-gray-800 dark:text-gray-50 text-sm sm:text-base leading-tight">
                Travelling from the UK?
              </h3>
              <p className="text-xs sm:text-sm text-blue-600 dark:text-blue-300 font-medium">
                Compare insurance prices →
              </p>
            </div>
          </div>
          <a 
            href="https://www.payingtoomuch.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 bg-blue-600 text-white px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold hover:bg-blue-700 active:bg-blue-800 transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
          >
            Compare Now
          </a>
        </div>
      </div>
    </div>
  )
}