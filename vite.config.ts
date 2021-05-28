import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "vue-boring-avatars",
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["vue"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});

// import type { UserConfig } from "vite";

// const path = require("path");

// const config: UserConfig = {
//   build: {
//     lib: {
//       entry: path.resolve(__dirname, "lib/main.js"),
//       name: "MyLib",
//     },
//     rollupOptions: {
//       // make sure to externalize deps that shouldn't be bundled
//       // into your library
//       external: ["vue"],
//       output: {
//         // Provide global variables to use in the UMD build
//         // for externalized deps
//         globals: {
//           vue: "Vue",
//         },
//       },
//     },
//   },
// };

// export default config;
