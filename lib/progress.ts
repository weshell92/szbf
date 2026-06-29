export const STORAGE_KEYS = {
  readChapters: 'szbf:readChapters',
  favoriteQuotes: 'szbf:favoriteQuotes',
  favoriteChapters: 'szbf:favoriteChapters',
  completedTraining: 'szbf:completedTraining',
  notes: 'szbf:notes'
};

function readSet(key: string) {
  if (typeof window === 'undefined') return new Set<string>();
  try {
    return new Set<string>(JSON.parse(window.localStorage.getItem(key) || '[]'));
  } catch {
    return new Set<string>();
  }
}

function writeSet(key: string, value: Set<string>) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(key, JSON.stringify(Array.from(value)));
}

export function toggleLocalSet(key: string, id: string) {
  const set = readSet(key);
  const existed = set.has(id);
  if (existed) set.delete(id);
  else set.add(id);
  writeSet(key, set);
  return !existed;
}

export function hasLocalValue(key: string, id: string) {
  return readSet(key).has(id);
}

export function addLocalValue(key: string, id: string) {
  const set = readSet(key);
  set.add(id);
  writeSet(key, set);
}
