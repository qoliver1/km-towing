import { getPhotoUrl } from '../lib/photos';

/**
 * Returns a static stock photo URL for a given query.
 * All URLs are resolved at build time from the photo map — no runtime API calls.
 */
export function usePhoto(query: string, _orientation: 'landscape' | 'portrait' | 'square' = 'landscape'): string | null {
  return getPhotoUrl(query);
}