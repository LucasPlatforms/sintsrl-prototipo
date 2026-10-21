import path from "node:path";
import type { NextConfig } from "next";

const I18N_REQUEST_CONFIG = "./src/i18n/request.ts";

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
      "next-intl/config": I18N_REQUEST_CONFIG,
    },
  },
  webpack(config) {
    config.resolve ??= {};
    config.resolve.alias = {
      ...config.resolve.alias,
      "next-intl/config": path.resolve(process.cwd(), I18N_REQUEST_CONFIG),
    };
    return config;
  },
};

export default nextConfig;
