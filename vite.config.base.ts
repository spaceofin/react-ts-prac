import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export const baseConfig = defineConfig({
  plugins: [tailwindcss()],
});
