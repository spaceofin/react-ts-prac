import { defineConfig, mergeConfig } from "vite";
import react from "@vitejs/plugin-react";
import { baseConfig } from "../../vite.config.base";

// https://vite.dev/config/
export default mergeConfig(
  baseConfig,
  defineConfig({
    plugins: [react()],
  })
);
