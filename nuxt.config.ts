// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ["@/assets/style/style.css"],

  modules: [
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxtjs/color-mode',
    'nuxt-twemoji',
  ],
  colorMode: {
    preference: "system",
    fallback: "latte",
    classSuffix: "-theme",
  },
  fonts: {
    priority: ['bunny', 'google'],
    experimental: { disableLocalFallbacks: true, },
  },
  nitro: { static: true, },
})