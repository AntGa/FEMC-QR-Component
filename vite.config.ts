import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://antga.github.io/FEMC-QR-Component/",
  plugins: [react()],
})
