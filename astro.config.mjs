// astro.config.mjs
// CANONICAL EDITION: PWA Manifest with FCanonical Asset Paths
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import pwa from '@vite-pwa/astro';

export default defineConfig({
  // TIER 2: THE ENGINES
  integrations: [
    react(), 
    pwa({
      registerType: 'autoUpdate',
      manifest: {
        name: "Doctor Bambu Web App",
        short_name: "DrBambu",
        description: "The home of the Bambu Grove OS and The Human-Centered AI Ecosystem",
        theme_color: "#F4F1E8",
        background_color: "#F4F1E8",
        display: "standalone",
        start_url: "/",
        icons: [
          {
            // FCanonical Asset Link
            src: "/assets/images/doctorbambu-com-logo.svg",
            sizes: "any",
            type: "image/svg+xml",
            purpose: "any maskable"
          }
        ]
      },
      workbox: {
        // Ensuring the heavy Imperial Assets are cached (6MB limit)
        maximumFileSizeToCacheInBytes: 6000000,
        globPatterns: ['**/*.{js,css,html,svg,png,jpg}'],
        navigateFallback: null,
      }
    })
  ]
});