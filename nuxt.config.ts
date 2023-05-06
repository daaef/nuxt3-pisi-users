// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";
const lifecycle = process.env.npm_lifecycle_event;

export default defineNuxtConfig({
  extends: ["nuxt-seo-kit"],
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      titleTemplate: (titleChunk) => {
        return titleChunk
          ? `${titleChunk} - RedOnion`
          : "RedOnion - Buy, trade, exchange!";
      },
      title: "RedOnion - Buy, trade, exchange!",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
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
  runtimeConfig: {
    // The private keys which are only available within server-side
    // Keys within public, will be also exposed to the client-side
    public: {
      api_url: process.env.BASE_URL,
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "https://redonion.io",
      siteName: "RedOnion - Buy, trade, exchange!",
      siteDescription:
        "Sign up now to find your best P2P match for free! Seamless cross-border value exchange. Make an offer for what you want at your own exchange rate.",
      language: "en", // prefer more explicit language codes like `en-AU` over `en`
    },
  },
  modules: [
    "@nuxt/devtools",
    "@nuxtjs/tailwindcss",
    "@nuxt-alt/auth",
    "@nuxt-alt/http",
    "@nuxt-alt/proxy",
    "@pinia/nuxt",
    "@formkit/nuxt",
    "@sfxcode/nuxt-primevue",
    "@vueuse/nuxt",
    // "@nuxtjs/eslint-module",
  ],
  // @ts-ignore
  primevue: {
    config: {
      ripple: true,
      inputStyle: "filled",
    },
    components: {
      // include: [...defaultPrimeVueComponents(true, true)],
      force: [
        "DataTable",
        "Column",
        "Button",
        { name: "Message", global: true },
      ],
    },
  },
  proxy: {
    enableProxy: true,
    proxies: {
      "/red": {
        target: "https://redonion-server.herokuapp.com/api/v1/redonion",
        changeOrigin: true,
        rewrite: (path: string) => {
          console.log("path is", path);
          return path.replace(/^\/red/, "");
        },
      },
    },
  },
  http: {
    proxyHeaders: true,
    headers: {
      accept: "application/json, text/plain, */*",
    },
  },
  auth: {
    globalMiddleware: true,
    strategies: {
      local: {
        user: {
          property: "data.user",
          autoFetch: true,
        },
        endpoints: {
          login: { url: "/red/auth/sign-in", method: "post" },
          logout: false,
          user: { url: "/red/user", method: "get" },
        },
        token: {
          property: "data.accessToken",
          maxAge: 1800,
        },
      },
    },
    redirect: {
      login: "/auth/login",
      logout: "/auth/login",
      home: "/dashboard/",
      callback: "/auth/login",
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
    "@sfxcode/formkit-primevue/dist/sass/formkit-prime-inputs.scss",
    "@sfxcode/formkit-primevue/dist/sass/formkit-primevue.scss",
  ],
  build: {
    transpile: ["primevue", "vue3-otp-input"], // fix dev error: Cannot find module 'vueuc'
  },
});
