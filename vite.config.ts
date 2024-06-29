import { defineConfig } from "vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import viteReact from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    viteReact({
      jsxImportSource: "react",
      devTarget: "es2022",
    }),
    tsConfigPaths(),
    TanStackRouterVite({
      generatedRouteTree: "routes/.routeTree.gen.ts",
      experimental: {
        enableCodeSplitting: true,
      },
      routeFileIgnorePrefix: ".",
      routesDirectory: "./routes",
    }),
    tailwindcss(),
  ],
  mode: process.env.VITE_APP_MODE,
  server: {
    watch: {
      usePolling: true
    },
  },
  css: {
    lightningcss: {},
  },
  worker: {
    format: "es",
  },
});
