// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1 , maximum-scale=1',
    }
  }
  ,
  ssr: false,
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/image'],
  image: {
    formats: ['webp', 'avif'],
  },
  css: [
    '@/assets/scss/index.scss',

  ],

})

