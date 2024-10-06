// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  app: {
    head: {
      title: 'Papa Việt',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css' },
        { rel: 'stylesheet', href: '/assets/fonts/style.css' },
        { rel: 'stylesheet', href: '/assets/icomoon/style.css' }
      ],
      script: [
        { crossorigin: 'anonymous', src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js' }
      ]
    },
  },
  css: [
    '@/assets/scss/style.scss'
  ],
  devtools: { enabled: true },
  modules: ['@nuxtjs/i18n']
})