/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  // IMPORTANT: The 'base' must match your GitHub repository name.
  // If your repo is https://github.com/user/my-portfolio, set this to '/my-portfolio/'.
  // If you are deploying to https://user.github.io/ (root), set this to '/'.
  base: '/portofolio/', 
  plugins: [vue()],
  test: {
    globals: true,
    environment: 'happy-dom',
  },
})
