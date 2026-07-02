import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// GitHub Pages project sites (username.github.io/repo-name/) are served from
// a subpath - the deploy workflow sets VITE_BASE_PATH to "/repo-name/".
// Unset locally, and for a custom domain or a username.github.io *user* page
// (served from the root), it defaults to "/".
// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.VITE_BASE_PATH || '/',
  plugins: [react(), tailwindcss()],
})
