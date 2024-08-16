import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
export default defineConfig({
  plugins: [
    vue(),
  ],
  base: '/posts-front/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },

})

// build: {
//   outDir: 'dist'
// npm run build
//  cd dist
//git init
//git add -A
//git commit -m 'deploy'
//git push -f 'deploy' git@github.com:Hrayrdev/posts-front.git master:gh-pages
//cd -
// }ssh-keygen -t rsa -b 4096 -C "your_email@example.com" -f ~/.ssh/id_rsa_personal
// import { defineConfig } from 'vite'
//
// export default defineConfig({
//   base: '/posts-front/',
//   остальные настройки
// })
// module.exports = {
//   publicPath: '/posts-front/'
// }