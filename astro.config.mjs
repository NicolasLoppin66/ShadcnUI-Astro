import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false
    }),
    mdx(),
  ],
  output: "server",
  adapter: node({
    mode: "standalone"
  }),
  i18n: {
    defaultLocale: 'fr',
    locales: ['en', 'fr', 'es']
  }
});