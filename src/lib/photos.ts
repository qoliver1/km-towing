/**
 * Local optimized image mapping.
 * Images are in public/images/ — served directly by Vite.
 * Original high-res AVIFs are in "pexels downloads/" folder.
 */

const basePath = '/km-towing';

const photoMap: Record<string, string> = {
  'tow truck helping car on highway roadside': `${basePath}/images/hero-light-towing.webp`,
  'flatbed tow truck loading sedan': `${basePath}/images/hero-light-towing.webp`,
  'heavy duty tow truck semi truck recovery': `${basePath}/images/heavy-towing.webp`,
  'roadside assistance jump start car battery': `${basePath}/images/roadside.webp`,
  'motorcycle tow transport truck': `${basePath}/images/specialty.webp`,
  'mechanic diagnosing car engine': `${basePath}/images/diagnostics.webp`,
  'auto parts store shelves': `${basePath}/images/auto-parts.webp`,
  'tow truck at night with lights on highway': `${basePath}/images/emergency-cta.webp`,
};

export function getPhotoUrl(query: string): string | null {
  return photoMap[query] ?? null;
}
