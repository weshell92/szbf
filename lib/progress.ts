import type { UserReflection } from './types';

const PREFIX = 'sunzi-pro:';
export const keys = {
  read: `${PREFIX}read`,
  favorites: `${PREFIX}favorites`,
  training: `${PREFIX}training`,
  reflections: `${PREFIX}reflections`
};

function readArray<T>(key: string): T[] {
  if (typeof window === 'undefined') return [];
  try { return JSON.parse(localStorage.getItem(key) ?? '[]') as T[]; } catch { return []; }
}
function writeArray<T>(key: string, value: T[]) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(key, JSON.stringify(value));
}
export function toggleId(key: string, id: string): boolean {
  const list = readArray<string>(key);
  const has = list.includes(id);
  writeArray(key, has ? list.filter((item) => item !== id) : [...list, id]);
  return !has;
}
export function hasId(key: string, id: string): boolean { return readArray<string>(key).includes(id); }
export const STORAGE_KEYS = {
  readChapters: keys.read,
  favoriteChapters: keys.favorites,
  favoriteQuotes: keys.favorites,
  completedTraining: keys.training,
  training: keys.training,
  reflections: keys.reflections
};
export function hasLocalValue(key: string, id: string): boolean { return hasId(key, id); }
export function toggleLocalSet(key: string, id: string): boolean { return toggleId(key, id); }
export function addLocalValue(key: string, id: string): boolean {
  if (hasId(key, id)) return true;
  toggleId(key, id);
  return true;
}
export function getReflections(): UserReflection[] { return readArray<UserReflection>(keys.reflections); }
export function saveReflection(reflection: UserReflection) {
  const list = getReflections();
  const next = [reflection, ...list.filter((item) => item.id !== reflection.id)].slice(0, 100);
  writeArray(keys.reflections, next);
}
