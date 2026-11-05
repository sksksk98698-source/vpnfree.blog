/**
 * Saved wishlist favorites powered by nanostores and localStorage persistence.
 */
import { persistentAtom } from '@nanostores/persistent';

export const favorites = persistentAtom<string[]>('store-favorites-v1', [], {
  encode: JSON.stringify,
  decode: JSON.parse,
});

export function toggleFavorite(handle: string) {
  const list = favorites.get();
  favorites.set(list.includes(handle) ? list.filter((h) => h !== handle) : [...list, handle]);
}

export function isFavorite(handle: string): boolean {
  return favorites.get().includes(handle);
}
