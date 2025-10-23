// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ["@/assets/style/style.css"],

  modules: ['@nuxt/fonts', '@nuxt/icon', '@nuxtjs/color-mode'],
  colorMode: {
    preference: "system",
    fallback: "latte",
    classSuffix: "-theme",
  },
  fonts: {
    providers: {
      google: false, googleicons: false
    },
  },
  nitro: { static: true, },
})
