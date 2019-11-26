export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Developer Bootcamp Resource!',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~scss/main.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  vuetify: {
    optionsPath: './vuetify.options.js'
  },

  buildModules: ['@nuxt/typescript-build', '@nuxtjs/vuetify'],
  /*
   ** Build configuration
   */
  // extractCSS: { ignoreOrder: true },
  build: {
    /*
     ** You can extend webpack config here
     */
    extractCSS: {
      ignoreOrder: true
    },
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue|ts)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  generate: {
    dir: 'public'
  }
}
