// import { imagetools } from "vite-imagetools";
import svelte from "@astrojs/svelte";
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  server: { port: 1234, host: true },
  integrations: [tailwind(), svelte()],
});
