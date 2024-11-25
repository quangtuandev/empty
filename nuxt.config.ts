// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  app: {
    head: {
      title: 'Papa Việt',
      meta: [
        { charset: 'utf-8' },
        { name: 'description', content: 'Papa Việt - Authentic Vietnamese Restaurant' },
        { name: 'keywords', content: 'Papa Viet, Vietnamese food, Vietnamese restaurant, Vietnamese cuisine' },
        { property: 'og:title', content: 'Papa Việt' },
        { property: 'og:description', content: 'Papa Việt - Authentic Vietnamese Restaurant' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: '/logo.svg' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Papa Việt' },
        { name: 'twitter:description', content: 'Papa Việt - Authentic Vietnamese Restaurant' },
        { name: 'twitter:image', content: '/logo.svg' },
        { name: 'robots', content: 'index, follow' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css' },
        { rel: 'stylesheet', href: '/assets/fonts/style.css' },
        { rel: 'stylesheet', href: '/assets/icomoon/style.css' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Averia+Serif+Libre:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap' }
      ],
      script: [
        { crossorigin: 'anonymous', src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js' }
      ]
    },
  },
  routeRules: {
    '/': { redirect: '/contact' },
  },
  css: [
    '@/assets/scss/style.scss'
  ],
  devtools: { enabled: true },
  modules: ['@nuxtjs/i18n']
})
