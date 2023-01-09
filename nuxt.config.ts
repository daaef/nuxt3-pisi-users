const lifecycle = process.env.npm_lifecycle_event;
// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      titleTemplate: "Exchange - %s",
      title: "Welcome to our project",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "" },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/gh/lipis/flag-icons@6.6.6/css/flag-icons.min.css",
        },
      ],
    },
  },
  modules: ["@nuxtjs/tailwindcss", '@nuxt-alt/auth', '@nuxt-alt/http', "@nuxt-alt/proxy", "@pinia/nuxt"],
  proxy: {
    enableProxy: true,
    proxies: {
      '/api': {
        target: "https://redonion-server.herokuapp.com/api/v1/redonion",
        changeOrigin: true,
        rewrite: (path: string) => {
          console.log('path is', path)
          return path.replace(/^\/api/, '')
        },
      },
    },
  },
  css: [
    "~/assets/scss/style.scss",
    "~/assets/css/style.css",
    "~/assets/css/bulk-style.css",
    "~/assets/cryptofont.min.css",
    "primevue/resources/themes/lara-light-indigo/theme.css",
    "primevue/resources/primevue.css",
    "primeicons/primeicons.css",
  ],
  build: {
    transpile: ["primevue", "vue3-otp-input"], // fix dev error: Cannot find module 'vueuc'
  },
})
