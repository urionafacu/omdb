import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import { readdirSync } from "fs";

const absolutePathAliases: { [key: string]: string } = {};

const srcPath = path.resolve("./src/");

const srcRootContent = readdirSync(srcPath, { withFileTypes: true }).map(
  (dirent) => dirent.name.replace(/(\.ts){1}(x?)/, "")
);

srcRootContent.forEach((directory) => {
  absolutePathAliases[directory] = path.join(srcPath, directory);
});

// https://vitejs.dev/config/
export default defineConfig({
  root: "./src/",
  plugins: [react()],
  resolve: {
    alias: {
      ...absolutePathAliases,
    },
  },
  publicDir: "./src/",
  build: {
    rollupOptions: {
      input: {
        main: "./src/main.tsx",
        index: "./src/index.html",
      },
    },
    outDir: "../dist",
  },
});
