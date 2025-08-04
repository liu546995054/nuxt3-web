import {getPrerenderRoutes} from "./scripts/generate-routes.js";

export default defineNuxtConfig({
  // 开启SSG模式配置
  ssr: true,
  // target: 'static',
  css: [
    '~/assets/css/style.css',
    '~/assets/css/contact-form-7-css.css',
    '~/assets/css/math-captcha-frontend-css.css',
    '~/assets/css/zwebs-theme-css.css',
    '~/assets/css/custom-style-css.css',
    '~/assets/css/font-awesome.css',
    '~/assets/css/jquery.fancybox.css',
    '~/assets/css/swiper.css'
  ],

  app: {
    buildAssetsDir: '/_nuxt/',  // Vercel默认路径
    baseURL: '/',
    head: {
      meta: [
        { name: 'robots', content: 'index, follow' } // 明确允许收录和跟踪链接
      ],
      link: [
      ],
      script: [
        // jQuery必须同步加载（defer: false）
        { src: '/js/jquery.min.js', body: true, defer: false },

        // 其他脚本可以延迟加载
        { src: '/js/xzoom.min.js', body: true, defer: true },
        { src: '/js/zwebs.js', body: true, defer: true },
        { src: '/js/translate.js', body: true, defer: true, mode: 'client' }, // 仅客户端
        { src: '/js/pagination.js', body: true, defer: true }
      ]
    }
  },

  // 构建配置
  build: {
    // 生产环境移除console
    // terser: {
    //   terserOptions: {
    //     compress: {
    //       drop_console: process.env.NODE_ENV === 'production'
    //     }
    //   }
    // },
    transpile: [
      '@fortawesome/fontawesome-free' // 如果使用FontAwesome
    ],

    // 开发环境sourcemap
    devtools: { enabled: true }
  },

  // 模块配置
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/robots'
  ],

  // 多语言配置
  i18n: {
    bundle: {
      optimizeTranslationDirective: false // 明确设置为 false
    },
    locales: [
      {
        code: 'en',
        file: 'en.json',
        name: 'English'
      },
      {
        code: 'esp',
        file: 'esp.json',
        name: 'Esp'
      },
      {
        code: 'ru',
        file: 'ru.json',
        name: 'Ru'
      }
    ],
    langDir: 'locales',
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root', // 改为'all'确保所有页面都检测
      alwaysRedirect: false
    },
    seo: true, // 启用SEO优化
    baseUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://web.prowebbuilding.com/',
    // 5. 路由行为修正（关键）
    customRoutes: 'config',


  },


  // 机器人协议配置
  robots: {
    UserAgent: '*',
    // 允许所有路径抓取（核心修正）
    Allow: '/',
    // 确保Sitemap地址可访问（必须实际存在）
    Sitemap: 'https://web.prowebbuilding.com/sitemap.xml'
  },

  // 路由配置
  router: {
    options: {
      scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
          return {
            el: to.hash,
            behavior: 'smooth',
            top: 80 // 如果有固定头部，设置偏移量
          }
        }
        return savedPosition || { top: 0 }
      }
    }
  },

  // 服务器配置
  server: {
    port: process.env.PORT || 3000,
    host: process.env.HOST || '0.0.0.0'
  },


  // SSG预渲染路由
  nitro: {
    compatibilityDate: '2025-08-03', // 使用警告推荐的日期
    preset: 'vercel-static',
    prerender: {
      routes: getPrerenderRoutes()
    },
    // 对所有页面添加允许收录的响应头
    '/**': {
      headers: {
        'X-Robots-Tag': 'index, follow'
      }
    },
    routeRules: {
      // 匹配所有语言的新闻详情页（ISR 缓存 1 小时）
      '/**/news/[id]': {
        isr: 3600,
        cache: {
          swr: true,
          maxAge: 3600,
          staleMaxAge: 0 ,// 禁用旧缓存

        },
        headers: {
          'X-Robots-Tag': 'index, follow'
        }
      },
      // 默认语言路由（无前缀）
      '/news/[id]': {
        isr: 3600,
        cache: { swr: true, maxAge: 3600 }
      },
      // 缓存 API 接口（避免重复请求）
      'https://cloud-note-1256263900.cos.ap-nanjing.myqcloud.com/news.json': {
        cache: { swr: true, maxAge: 60 } // 短缓存，确保数据及时更新
      }
    }
  },

  vite: {
    build: {
      assetsInlineLimit: 4096, // 小于4KB的文件转为base64
      rollupOptions: {
        output: {
          assetFileNames: (assetInfo) => {
            if (/\.(woff2?|ttf|eot|svg)$/.test(assetInfo.name)) {
              return '_nuxt/fonts/[name]-[hash][extname]'  // 字体特殊路径
            }
            return '_nuxt/assets/[name]-[hash][extname]'
          }
        }
      }
    },
    // 禁用 CSS 代码分割（临时排查是否为此问题）
    cssCodeSplit: false,
  },





})


