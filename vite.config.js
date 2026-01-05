import { defineConfig } from 'vite'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

// ESMで __dirname を再現する
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  resolve: {
    alias: {
      // path.resolve を使って絶対パスを指定
      '@': path.resolve(__dirname, 'src')
    }
  },
})
