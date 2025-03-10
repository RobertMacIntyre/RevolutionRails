import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // Ensures Vercel deploys the correct directory
    rollupOptions: {
      external: [], // No need to externalize anything here
    },
  },
  resolve: {
    alias: {
      "react-router-dom": "react-router-dom",
    },
  },
  server: {
    port: 5180, // Ensures a consistent dev server port
    open: true, // Automatically opens the browser on `npm run dev`
  },
});