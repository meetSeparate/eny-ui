import { fileURLToPath, URL } from 'node:url'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx({
      include:/\.[jt]xs$|\.js$/
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
