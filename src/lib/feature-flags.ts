/**
 * Feature Flags
 *
 * Control which sections are visible via environment variables.
 *
 * In .env.local (local dev) — restart the dev server after changes:
 *   NEXT_PUBLIC_SHOW_TOURS=false
 *   NEXT_PUBLIC_SHOW_AIRPORT_TRANSFER=false
 *
 * On Vercel / Netlify:
 *   Add the variables in the deployment env vars dashboard and redeploy.
 *   No code changes needed.
 */

const isEnabled = (value: string | undefined, defaultValue = true): boolean => {
  if (value === undefined || value === "") return defaultValue
  return value.toLowerCase() !== "false" && value !== "0"
}

export const featureFlags = {
  /** Show the "Tours" nav item and tours-related pages */
  showTours: isEnabled(process.env.NEXT_PUBLIC_SHOW_TOURS),

  /** Show the "Airport Transfer" nav item and all airport pickup/drop sections */
  showAirportTransfer: isEnabled(process.env.NEXT_PUBLIC_SHOW_AIRPORT_TRANSFER),
}
