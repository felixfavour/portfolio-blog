export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  target: 'static',
  ssr: true,
  router: {
    middleware: 'transfer'
  },
  head: {
    title: "Favour Felix's Stories - Stories about everything",
    htmlAttrs: {
      lang: 'en'
    },
    ssr: true,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'With the advent of a lot of visual content, I believe the writing culture is slowly fading away; Favour Felix\'s stories is my contribution to it\'s sustainability. I am a young man currently based in Lagos, Nigeria.' },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: 'stories.favourfelix.com'
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: 'Favour Felix\'s Stories - Stories about everything'
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: 'With the advent of a lot of visual content, I believe the writing culture is slowly fading away; Favour Felix\'s stories is my contribution to it\'s sustainability. I am a young man currently based in Lagos, Nigeria.'
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: 'https://firebasestorage.googleapis.com/v0/b/favour-portfolio.appspot.com/o/favour-felix.jpg?alt=media&token=903343a2-0823-4383-9b9f-3ad1cad45180'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@assets/global.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/firebase', ssr: false },
    { src: '~/plugins/vuex-persist', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
