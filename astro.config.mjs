// astro.config.mjs
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import pwa from '@vite-pwa/astro';

export default defineConfig({
  integrations: [
    react(),
    pwa({
      registerType: 'autoUpdate',
      manifest: {
        name: "Doctor Bambu Web App",
        short_name: "DrBambu",
        description: "The home of the Bambu Grove OS",
        theme_color: "#F4F1E8",
        background_color: "#F4F1E8",
        display: "standalone",
        start_url: "/",
        icons: [
          {
            src: "/assets/images/logo.svg",
            sizes: "any",
            type: "image/svg+xml",
            purpose: "any maskable"
          }
        ]
      },
      workbox: {
        // LG: Giving the Guardian a bigger backpack (6MB limit)
        maximumFileSizeToCacheInBytes: 6000000, 
        globPatterns: ['**/*.{js,css,html,svg,png,jpg}'],
      }
    })
  ]
});