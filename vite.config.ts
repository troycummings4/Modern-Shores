import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vercel/Netlify serve the site at the domain root, so the default base
// ("/") is correct for them out of the box. GitHub Pages (a project page,
// not a username.github.io root repo) serves from a subpath instead, so
// its deploy workflow sets VITE_BASE_PATH=/Modern-Shores/ at build time.
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || "/",
});
