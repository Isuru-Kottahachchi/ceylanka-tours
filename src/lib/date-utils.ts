// Utility function to format dates consistently across server and client
export function formatDate(dateString: string): string {
  try {
    const date = new Date(dateString);
    // Use a consistent format that doesn't depend on locale
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  } catch {
    // Fallback for invalid dates
    return dateString;
  }
}

// Alternative function for hydration-safe date formatting
export function formatDateSafe(dateString: string): string {
  try {
    const date = new Date(dateString);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
                   'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
  } catch {
    return dateString;
  }
}
