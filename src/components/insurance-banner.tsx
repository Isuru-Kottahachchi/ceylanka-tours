import Image from 'next/image'

export default function InsuranceBanner() {
  return (
    <div className="my-6">
      <div className="insurance-banner border rounded-lg overflow-hidden shadow-lg transition-all transform hover:scale-[1.02]">
        <div className="p-3 sm:p-4 flex flex-row items-center justify-between gap-3 sm:gap-4">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="relative w-[120px] sm:w-[140px] h-[30px] insurance-logo">
              <Image
                src="/ptm-logo.svg"
                alt="PayingTooMuch.com"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="insurance-divider h-8 w-px" />
            <div>
              <h3 className="insurance-heading font-bold text-sm sm:text-base leading-tight">
                Travelling from the UK?
              </h3>
              <p className="insurance-sub text-xs sm:text-sm font-medium">
                Compare insurance prices →
              </p>
            </div>
          </div>
          <a 
            href="https://www.payingtoomuch.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 bg-blue-600 text-white px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold hover:bg-blue-700 active:bg-blue-800 transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Compare Now
          </a>
        </div>
      </div>
    </div>
  )
}