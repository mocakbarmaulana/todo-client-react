import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";

const root = resolve(__dirname, "./src");

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@pages": resolve(root, "pages"),
      "@layouts": resolve(root, "layouts"),
      "@typings": resolve(root, "typings"),
    },
  },
});
