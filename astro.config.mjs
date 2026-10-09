// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://melkord.github.io",
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      // Code blocks render on a dark surface in both site themes.
      theme: "houston",
    },
  },
});
