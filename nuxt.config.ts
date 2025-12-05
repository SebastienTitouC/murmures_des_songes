// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: [
    '@/assets/css/normalize.css',
    '@/assets/css/main.css',
  ],
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/ui'
  ],

  fonts: {
    families: [
      {
        name: 'Playfair Display', provider: 'google',
        weights: ['400 700'], styles: ['normal', 'italic']
      },
      {
        name: 'Tenor Sans', provider: 'google',
        weights: ['400 700'], styles: ['normal', 'italic']
      }
      ,
      {
        name: 'Abril Fatface', provider: 'google',
        weights: ['400', '800'], styles: ['normal', 'italic']
      }
    ]
  }

})