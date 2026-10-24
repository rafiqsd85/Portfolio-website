
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/',

  plugins: [tailwindcss()],

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        campaign: resolve(__dirname, 'campaign.html'),
        poster: resolve(__dirname, 'poster.html'),
      },
    },
  },
})
