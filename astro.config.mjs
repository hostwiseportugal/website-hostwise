// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://www.hostwise.pt",
  integrations: [sitemap()],
  image: {
    remotePatterns: [
      { protocol: "https", hostname: "hostwise.hostwisebooking.pt" },
    ],
  },
});
