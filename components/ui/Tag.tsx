import type { ReactNode } from 'react';

export function Tag({ children }: { children: ReactNode }) {
  return <span className="rounded-full border border-bronze/25 bg-bronze/10 px-3 py-1 text-xs text-bronze">{children}</span>;
}
