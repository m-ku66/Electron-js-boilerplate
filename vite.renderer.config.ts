import { defineConfig } from "vite";

// https://vitejs.dev/config
export default defineConfig({
  css: {
    postcss: "./postcss.config.js",
  },
  esbuild: {
    jsx: "automatic",
  },
  define: {
    global: "globalThis",
  },
});
