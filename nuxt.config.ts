// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'vue3-carousel-nuxt'],
  pages: true,
  css: ['~/assets/css/main.css'],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      link: [
        {
          rel: 'stylesheet',
          href:
            'https://fonts.googleapis.com/css2?family=Marcellus&display=swap'
        },
        {
          rel: 'stylesheet',
          href:
            'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap'
        }
      ]
    }
  }
  ,
  // Make the project name available to the client by exposing it as a public runtime config value.
  runtimeConfig: {
    public: {
      projectName: process.env.PROJECT_NAME || 'Trademax'
    }
  }
})