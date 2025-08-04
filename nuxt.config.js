import {getPrerenderRoutes} from "./scripts/generate-routes.js";

console.log('ppppppppp',process.env.NUXT_PUBLIC_SITE_URL)
export default defineNuxtConfig({
  // 开启SSG模式配置
  ssr: true,
  // target: 'static',
  css: [
    '/css/style.css',
    '/css/contact-form-7-css.css',
    '/css/math-captcha-frontend-css.css',
    '/css/zwebs-theme-css.css',
    '/css/custom-style-css.css',
    '/css/font-awesome.css',
    '/css/jquery.fancybox.css',
    '/css/swiper.css'
  ],

  app: {
    head: {
      link: [
        // 本地样式
        // { rel: 'stylesheet', href: '/css/style.min.css' },
        // { rel: 'stylesheet', href: '/css/contact-form-7-css.css' },
        // { rel: 'stylesheet', href: '/css/math-captcha-frontend-css.css' },
        // { rel: 'stylesheet', href: '/css/zwebs-theme-css.css' },
        // { rel: 'stylesheet', href: '/css/custom-style-css.css' },
        // { rel: 'stylesheet', href: '/css/font-awesome.min.css' },
        // { rel: 'stylesheet', href: '/css/jquery.fancybox.min.css' },
        // { rel: 'stylesheet', href: '/css/swiper.min.css' },
        // // CDN资源
        // {
        //   rel: 'stylesheet',
        //   href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
        //   integrity: 'sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==',
        //   crossorigin: 'anonymous'
        // }
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
    terser: {
      terserOptions: {
        compress: {
          drop_console: process.env.NODE_ENV === 'production'
        }
      }
    },

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
    baseUrl: process.env.NUXT_PUBLIC_SITE_URL || 'http://web.prowebbuilding.com/',
    // 5. 路由行为修正（关键）
    customRoutes: 'config',


  },


  // 机器人协议配置
  robots: {
    UserAgent: '*',
    Allow: '/',
    Sitemap: `${process.env.NUXT_PUBLIC_SITE_URL || 'http://web.prowebbuilding.com/'}/sitemap.xml`
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
    preset: 'vercel-static',
    prerender: {
      routes: getPrerenderRoutes()
    }
  },

  vite: {
    build: {
      rollupOptions: {
        output: {
          // 明确资产文件名格式，避免解析异常
          assetFileNames: 'assets/[name]-[hash].[ext]',
          chunkFileNames: 'js/[name]-[hash].js',
          entryFileNames: 'js/[name]-[hash].js'
        }
      }
    },
    // 禁用 CSS 代码分割（临时排查是否为此问题）
    cssCodeSplit: false,
    define: {
      // 将 publicAssetsURL 替换为 Nuxt 资源路径
      'publicAssetsURL': '/'
    }
  }



})


