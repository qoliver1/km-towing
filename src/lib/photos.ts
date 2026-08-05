/**
 * Local optimized image mapping.
 * Images are in public/images/ — served directly by Vite.
 * Original high-res AVIFs are in "pexels downloads/" folder.
 */

const photoMap: Record<string, string> = {
  'tow truck helping car on highway roadside': '/images/hero-light-towing.webp',
  'flatbed tow truck loading sedan': '/images/hero-light-towing.webp',
  'heavy duty tow truck semi truck recovery': '/images/heavy-towing.webp',
  'roadside assistance jump start car battery': '/images/roadside.webp',
  'motorcycle tow transport truck': '/images/specialty.webp',
  'mechanic diagnosing car engine': '/images/diagnostics.webp',
  'auto parts store shelves': '/images/auto-parts.webp',
  'tow truck at night with lights on highway': '/images/emergency-cta.webp',
};

export function getPhotoUrl(query: string): string | null {
  return photoMap[query] ?? null;
}
