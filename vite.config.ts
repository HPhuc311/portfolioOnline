import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import dns from 'dns'
import path from 'path'

dns.setDefaultResultOrder('verbatim')

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'assets': path.resolve(__dirname, 'src/assets'),
      'components': path.resolve(__dirname, 'src/components'),
      'helpers': path.resolve(__dirname, 'src/helpers'),
      'pages': path.resolve(__dirname, 'src/pages'),
      'styles': path.resolve(__dirname, 'src/styles'),
    },
  },
  server: {
    port: 3000,
    watch: {
      usePolling: true,
      interval: 1000,
    },
  },
})