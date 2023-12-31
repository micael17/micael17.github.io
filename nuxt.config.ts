// https://nuxt.com/docs/api/configuration/nuxt-config
import path from "path";

const analyticsSrc = 'https://www.googletagmanager.com/gtag/js?id=G-EX6TE4V1W3'

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      addrKey: 'U01TX0FVVEgyMDIzMTEwNjEwMTQxOTExNDI0MzM=',
      youtubeKey: 'AIzaSyBHHWPAgAWljy6pJ8Gv-_cH2RUq2IHuhm0'
    }
  },
  modules: [
      'nuxt-quasar-ui'
  ],
  plugins: [
    { src: '~/plugins/i18n.ts' }
  ],
  devtools: { enabled: true },
  alias: {
    '#d': path.resolve(__dirname, './assets/domain'),
    '#s': path.resolve(__dirname, './assets/style'),
    '#c': path.resolve(__dirname, './components')
  },
  css: ['#s/base.css', '#s/font.css', '#s/class.css', '#s/media.css'],
  quasar: {
    config: {
      brand: {
        primary: '#4e54c8',
      }
    }
  },
  app: {
    head: {
      script: [{ //구글 애널리틱스 설정
        async: true,
        src: analyticsSrc
      }, {
        defer: true,
        src: '/GoogleAnalytics.js'
      }, { // 구글 애드센스 실행 (public폴더)
        defer: true,
        src: '/GoogleAds.js'
      }],
      meta: [{ //구글 애드센스 인식시키기 (사이트소유권-메타태그 넣기)
        name: 'google-adsense-account',
        content: 'ca-pub-9353405093450953'
      }]
    }
  }
})

