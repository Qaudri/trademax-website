// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', ],
  pages: true,
  css: ['~/assets/css/main.css',],
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
            'https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swapp'
        }
      ]
    }
  }
  ,
  // Make the project name available to the client by exposing it as a public runtime config value.
  runtimeConfig: {
    public: {
      projectName: process.env.PROJECT_NAME
    }
  }
})