import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import eslint from 'vite-plugin-eslint'
import tailwindcss from 'tailwindcss'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [eslint(), react(), svgr(), tailwindcss()],
  resolve: {
    alias: [{
      find: '@',
      replacement: path.resolve(__dirname, './src')
    }]
  },
  server: {
    port: 3000
  }
})