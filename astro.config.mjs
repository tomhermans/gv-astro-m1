// import { imagetools } from "vite-imagetools";

// export default {
//   // projectRoot: '.',     // Where to resolve all URLs relative to. Useful if you have a monorepo project.
//   // pages: './src/pages', // Path to Astro components, pages, and data
//   // dist: './dist',       // When running `astro build`, path to final static output
//   // public: './public',   // A folder of static files Astro will copy to the root. Useful for favicons, images, and other files that don’t need processing.
//   buildOptions: {
//     site: "http://example.com", // Your public domain, e.g.: https://my-site.dev/. Used to generate sitemaps and canonical URLs.
//     sitemap: true, // Generate sitemap (set to "false" to disable)
//   },
//   vite: {
//     define: {
//       // "process.env.​VITE_BUILD_TIME": JSON.stringify(newDate().toISOString()),
//     },
//     plugins: [imagetools({ force: true })],
//   },
//   devOptions: {
//     tailwindConfig: "./tailwind.config.js", // Path to Tailwind config file.
//     // hostname: 'localhost',  // The hostname to run the dev server on.
//     // port: 3000,             // The port to run the dev server on.
//   },
//   renderers: ["@astrojs/renderer-svelte"],
// };

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
    svelte(),
  ],
});
