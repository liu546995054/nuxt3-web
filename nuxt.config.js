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
  // js: [
  //   '~/assets/js/jquery.min.js',
  //   '~/assets/js/xzoom.min.js',
  //   '~/assets/js/zwebs.js',
  //   '~/assets/js/pagination.js',
  //
  // ],

  app: {
    // buildAssetsDir: '/_nuxt/',  // Vercel默认路径
    baseURL: '/public/',
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
    compatibilityDate: '2025-08-03', // 保留官方推荐的兼容性日期
    preset: 'node-server', // 阿里云FC兼容的基础预设（FC支持Node.js运行时）
    output: {
      dir: '.output', // 输出目录（后续部署到FC的代码目录）
      publicDir: '.output/public' // 静态资源目录（需上传到OSS）
    },
    prerender: {
      routes: getPrerenderRoutes(), // 保留预渲染路由（初始静态页面）
      // 预渲染时跳过ISR页面（避免构建时重复生成，交给ISR动态处理）
      ignore: ['/**/news/[id]', '/news/[id]']
    },
    // 全局响应头（兼容阿里云CDN）
    '/**': {
      headers: {
        'X-Robots-Tag': 'index, follow',
        // 允许CDN缓存ISR页面（关键：配合CDN缓存规则）
        'Cache-Control': 'public, s-maxage=0, max-age=0, must-revalidate'
      }
    },
    routeRules: {
      // 1. 多语言新闻详情页（ISR核心配置）
      '/**/news/[id]': {
        isr: 3600, // 核心：ISR缓存1小时（与CDN缓存时间一致）
        cache: {
          swr: true, // 启用 stale-while-revalidate 模式
          maxAge: 3600, // 客户端缓存1小时
          staleMaxAge: 86400 // 缓存过期后，允许使用旧内容直到新内容生成（可选，视业务需求）
        },
        headers: {
          'X-Robots-Tag': 'index, follow',
          // 告知CDN：该页面由ISR管理，缓存1小时后回源FC重新生成
          'Cache-Control': 'public, s-maxage=3600, max-age=0, must-revalidate'
        }
      },
      // 2. 默认语言新闻详情页（同上，保持规则一致）
      '/news/[id]': {
        isr: 3600,
        cache: { swr: true, maxAge: 3600, staleMaxAge: 86400 },
        headers: {
          'X-Robots-Tag': 'index, follow',
          'Cache-Control': 'public, s-maxage=3600, max-age=0, must-revalidate'
        }
      },
      // 3. 外部API缓存（确保ISR生成时能获取较新数据）
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


