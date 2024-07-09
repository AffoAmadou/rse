// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/image', "nuxt-locomotive-scroll"],
  image: {
    formats: ['webp', 'avif'],
  },
  css: [
    '@/assets/scss/index.scss',

  ],
  
})

