// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["bootstrap/dist/css/bootstrap.min.css", "~/assets/css/main.css"],
  plugins: [{ src: "~/plugins/bootstrap.client.js", mode: "client" }],
  ssr: true,
  components: true,

  typescript: { strict: true },
  app: {
    baseURL: "/",
    head: {
      title: "Sat Japan",
      htmlAttrs: { lang: "ja" },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content: "これは日本語向けのNuxtフロントエンドサイトです。",
        },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.png" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
        },
      ],
    },
  },
  compatibilityDate: "2025-05-15",
  devtools: { enabled: false },
  modules: ["@nuxt/eslint", "@nuxt/fonts", "@nuxt/image", "@pinia/nuxt", "nuxt-auth-sanctum"],
  sanctum: {
    baseUrl: process.env.BASE_URL,
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_BASE_URL,
      baseUrl:process.env.BASE_URL,
      appOrigin: process.env.APP_ORIGIN || "http://localhost:3000",
    },
  },
  image: {
    domains: ["your-s3-bucket.amazonaws.com"],
  },
  experimental: {
    payloadExtraction: true,
  },
});