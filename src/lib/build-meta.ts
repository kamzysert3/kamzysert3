export interface BuildMeta {
  commit: string;
  buildTime: string;
}

/**
 * Injected at build time via Vite `define` in vite.config.ts.
 * Falls back to "dev-build" when no commit can be resolved.
 */
export const buildMeta: BuildMeta = {
  commit: __KRN_BUILD__.commit,
  buildTime: __KRN_BUILD__.buildTime,
};

export function formatBuildTime(iso: string): string {
  const date = new Date(iso);
  return Number.isNaN(date.getTime()) ? iso : date.toUTCString();
}