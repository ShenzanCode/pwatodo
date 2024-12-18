import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },
      manifest: {
        name: "To-Do App",
        short_name: "Todo",
        description: "A simple to-do app with offline support",
        theme_color: "#ffffff",
        icons: [
          {
            src: "/download.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/download.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
