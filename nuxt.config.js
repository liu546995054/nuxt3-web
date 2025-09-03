import {getPrerenderRoutes} from "./scripts/generate-routes.js";

export default defineNuxtConfig({
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
    // buildAssetsDir: '/_nuxt/',  // Vercel默认路径
    baseURL: '/',
    head: {
      meta: [
        { name: 'robots', content: 'index, follow' } // 明确允许收录和跟踪链接
      ],
      link: [
        // 根据你的文件类型和名称修改以下配置
        {
          rel: 'icon',
          type: 'image/x-icon',  // 类型：ico 对应 image/x-icon；png 对应 image/png；svg 对应 image/svg+xml
          href: '/favicon.ico'   // 路径：public 目录下的文件名（如果放在子目录，需加路径，如 /icons/favicon.ico）
        }
      ],
      script: [
        // jQuery必须同步加载（defer: false）
        { src: '/js/jquery.min.js', body: true, defer: false },

        // 其他脚本可以延迟加载
        { src: '/js/xzoom.min.js', body: true, defer: true },
        { src: '/js/zwebs.js', body: true, defer: true },
        // { src: '/js/translate.js', body: true, defer: true, mode: 'client' }, // 仅客户端
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
    '@nuxtjs/robots',
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
    baseUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://titan-recycling.com/',
    // 5. 路由行为修正（关键）
    customRoutes: 'config',


  },


  // 机器人协议配置
  robots: {
    UserAgent: '*',
    // 允许所有路径抓取（核心修正）
    Allow: '/',
    // 确保Sitemap地址可访问（必须实际存在）
    Sitemap: 'https://titan-recycling.com/sitemap.xml'
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
    port: 3002,
    host: '0.0.0.0'
  },


  // SSG预渲染路由
  nitro: {
    compatibilityDate: '2025-08-03', // 保留官方推荐的兼容性日期
    preset: 'node-server',
    output: {
      dir: '.output', // 输出目录
      publicDir: '.output/public' // 静态资源目录
    },
    prerender: {
      routes: getPrerenderRoutes(), // 保留预渲染路由（初始静态页面）
      crawlLinks: false
    },
    // 全局响应头
    '/**': {
      headers: {
        'X-Robots-Tag': 'index, follow',
        // 静态页面可长期缓存（根据需求调整）
        'Cache-Control': 'public, max-age=86400, s-maxage=604800'
      }
    },
    routeRules: {
      // 1. 多语言新闻详情页
      '/**/news/[id]': {
        prerender: false, // 禁止预渲染
        ssr: true,        // 强制服务端实时渲染
        headers: {
          'X-Robots-Tag': 'index, follow',
          // 禁止缓存，每次请求实时生成
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0'
        }
      },
      // 2. 默认语言新闻详情页（同上，保持规则一致）
      '/news/[id]': {
        prerender: false, // 禁止预渲染
        ssr: true,        // 强制服务端实时渲染
        headers: {
          'X-Robots-Tag': 'index, follow',
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0'
        }
      },
      '/**/news/news': {
        prerender: false, // 禁止预渲染
        ssr: true,        // 强制服务端实时渲染
        headers: {
          'X-Robots-Tag': 'index, follow',
          // 禁止缓存，每次请求实时生成
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0'
        }
      },
      '/news/news': {
        prerender: false, // 禁止预渲染
        ssr: true,        // 强制服务端实时渲染
        headers: {
          'X-Robots-Tag': 'index, follow',
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0'
        }
      },
      // 3. 外部API缓存
      'https://cloud-note-1256263900.cos.ap-nanjing.myqcloud.com/news.json': {
        cache: {
          swr: true,
          maxAge: 60 // 1分钟短缓存，平衡性能与实时性
        }
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


