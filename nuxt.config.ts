// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/sitemap',
  ],

  app: {
    head: {
      htmlAttrs: { lang: 'pl' },
      title: 'Hello Wrocław - Blog o historii i ciekawostkach Wrocławia',
      meta: [
        { name: 'description', content: 'Odkryj fascynującą historię Wrocławia, ciekawostki, zabytki i miejsca warte odwiedzenia. Blog o Wrocławiu - historia, kultura i atrakcje.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'pl_PL' },
        { property: 'og:site_name', content: 'Hello Wrocław' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap' },
      ],
    },
  },

  routeRules: {
    '/**': { prerender: true },
  },

  nitro: {
    prerender: {
      crawlLinks: true,
    },
  },

  site: {
    url: 'https://hello-wroclaw.netlify.app',
  },
})
