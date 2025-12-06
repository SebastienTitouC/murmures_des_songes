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
      },
      {
        name: 'Abril Fatface', provider: 'google',
        weights: ['400', '800'], styles: ['normal', 'italic']
      }
    ]
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Modelage énergétique, scratching à Goutevernisse | Aux murmures des songes',
      htmlAttrs: {
        lang: 'fr',
      },
      meta: [
        { name: 'description', content: 'Aux murmures des songes - modelage énergétique et scratching à Goutevernisse' },
        { name: 'keywords', content: 'modelage énergétique, scratching, Goutevernisse, bien-être, thérapie' },
        { name: 'author', content: 'Aux murmures des songes' },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:title', content: 'Aux murmures des songes | Modelage énergétique' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://TODO.fr/' },
        { property: 'og:description', content: 'Services de modelage énergétique et scratching à Goutevernisse' },
      ],
      link: [
        { rel: "canonical", href: 'https://TODO.fr/' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'manifest', href: '/site.webmanifest' }
      ]
    }
  }
})
