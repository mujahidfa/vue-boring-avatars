import { defineConfig } from "vite";

import vue from "@vitejs/plugin-vue";
import viteTestPlugin from "vite-plugin-test";

export default defineConfig({
  plugins: [
    vue(),
    viteTestPlugin({
      loaders: {
        ".spec.js": "jsx",
      },
    }),
  ],
});
