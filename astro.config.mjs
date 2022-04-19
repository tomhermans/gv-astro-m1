// import { imagetools } from "vite-imagetools";
import svelte from "@astrojs/svelte";
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
// import tailwindConfig from "./tailwind.config.js";

// https://astro.build/config
export default defineConfig({
  server: { port: 1234, host: true },
  // devOptions: {
  //   tailwindConfig: "./tailwind.config.js",
  // },
  integrations: [
    // tailwind(),
    tailwind({
      config: {
        applyBaseStyles: true,
      },
    }),
    svelte()
  ],
});
