/// <reference types="vite/client" />

interface KRNBuildMeta {
  commit: string;
  buildTime: string;
}

declare const __KRN_BUILD__: KRNBuildMeta;

interface ImportMetaEnv {
  readonly MODE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}