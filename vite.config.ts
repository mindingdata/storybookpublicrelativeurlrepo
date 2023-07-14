import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build : {
    lib: {
      entry: ['./src/stories/index.ts'],
      name: 'ComponentLibrary',
      fileName: (format) => `index.js`,
      formats : ['umd'],
    }, 
  }, 
  plugins: [react()],
})
