import { Button } from "@/components/ui/button"
import { X, Waves, AlertTriangle, Shield } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

interface BeachSafetyModalProps {
    isOpen: boolean
    onClose: () => void
    beachName: string
    description?: string
}

export function BeachSafetyModal({ 
    isOpen, 
    onClose, 
    beachName,
    description 
}: BeachSafetyModalProps) {
    const [isAnimating, setIsAnimating] = useState(false)
    const [shouldRender, setShouldRender] = useState(false)

    useEffect(() => {
        if (isOpen) {
            setShouldRender(true)
            // Trigger animation after render
            setTimeout(() => setIsAnimating(true), 10)
        } else {
            // Start exit animation
            setIsAnimating(false)
            // Remove from DOM after animation
            const timeout = setTimeout(() => setShouldRender(false), 500)
            return () => clearTimeout(timeout)
        }
    }, [isOpen])

    if (!shouldRender) return null

    const defaultDescription = `Before you enjoy ${beachName}'s beautiful waters, learn about important beach safety, including rip currents, dangerous sea creatures, and monsoon conditions.`

    return (
        <div 
            className={`fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 transition-opacity duration-300 ${
                isAnimating ? 'opacity-100' : 'opacity-0'
            }`}
        >
            <div 
                className={`bg-white dark:bg-gray-800 rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto transition-all duration-500 ${
                    isAnimating ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-12'
                }`}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="relative p-6">
                    {/* Close button */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-2 top-2 h-8 w-8 cursor-pointer"
                        onClick={onClose}
                    >
                        <X className="h-4 w-4" />
                    </Button>

                    {/* Modal content */}
                    <div className="text-center space-y-4">
                        <div className="flex justify-center">
                            <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                                <Waves className="h-8 w-8 text-blue-600" />
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-foreground">
                            Stay Safe at {beachName}!
                        </h2>

                        <p className="text-muted-foreground text-sm leading-relaxed">
                            {description || defaultDescription}
                        </p>

                        <div className="bg-orange-100 dark:bg-slate-700 border border-orange-300 dark:border-gray-600 rounded-lg p-4">
                            <div className="flex items-center gap-2 mb-2">
                                <AlertTriangle className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                                <h3 className="font-semibold text-orange-800 dark:text-orange-200">Important Safety Topics:</h3>
                            </div>
                            <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1 text-left">
                                <li>• How to escape rip currents</li>
                                <li>• Identifying dangerous sea creatures</li>
                                <li>• Monsoon season safety</li>
                                <li>• Emergency procedures</li>
                            </ul>
                        </div>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                            Your safety is our priority. Take 2 minutes to learn these life-saving tips!
                        </p>

                        <div className="space-y-3">
                            <Link href="/articles/things-to-beware-of-at-the-beach">
                                <Button className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white cursor-pointer">
                                    <Shield className="w-4 h-4 mr-2" />
                                    Read Complete Beach Safety Guide
                                </Button>
                            </Link>

                            <Button
                                variant="outline"
                                className="w-full cursor-pointer border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                                onClick={onClose}
                            >
                                Continue to {beachName} Page
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
