import type { NextConfig } from "next";

// Niente `createNextIntlPlugin`: il plugin di next-intl carica @parcel/watcher,
// che non funziona nell'ambiente di Bolt (WebContainer) e blocca l'avvio.
// Il plugin serviva solo a collegare `next-intl/config` al file di
// configurazione delle richieste: qui lo facciamo direttamente con un alias.

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  experimental: {
    // 404 unica per gli URL che non corrispondono a nessuna rotta
    // (vedi src/app/global-not-found.tsx).
    globalNotFound: true,
  },
  turbopack: {
    resolveAlias: {
      "next-intl/config": "./src/i18n/request.ts",
    },
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;