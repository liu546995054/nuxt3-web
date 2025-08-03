import {getPrerenderRoutes} from "./scripts/generate-routes.js";

export default defineNuxtConfig({
  // 开启SSG模式配置
  ssr: true,
  app: {
    buildAssetsDir: '/_nuxt/', // 明确指定构建资源目录
    head: {
      link: [
        // 移除非必要的注释
      ],
      script: [
        { src: '/js/jquery.min.js', body: true, defer: false },
        { src: '/js/xzoom.min.js', body: true, defer: true },
        { src: '/js/zwebs.js', body: true, defer: true },
        { src: '/js/translate.js', body: true, defer: true, mode: 'client' },
        { src: '/js/pagination.js', body: true, defer: true }
      ]
    }
  },

  // CSS配置优化
  css: [
    '~/assets/css/style.css',
    '~/assets/css/contact-form-7-css.css', // 保留
    '~/assets/css/math-captcha-frontend-css.css', // 保留
    '~/assets/css/zwebs-theme-css.css', // 保留
    '~/assets/css/custom-style-css.css', // 保留
    '~/assets/css/font-awesome.css',
    '~/assets/css/jquery.fancybox.css',
    '~/assets/css/swiper.css'
  ],

  // 构建配置
  build: {
    transpile: [
      'vue-awesome-swiper' // 确保Swiper正确转译
    ],
    terser: {
      terserOptions: {
        compress: {
          drop_console: process.env.NODE_ENV === 'production'
        }
      }
    }
  },

  // 模块配置
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/robots'
  ],

  // 多语言配置优化
  i18n: {
    bundle: {
      optimizeTranslationDirective: false,
      fullInstall: false // 减少不必要的语言包加载
    },
    locales: [
      { code: 'en', file: 'en.json', name: 'English' },
      { code: 'esp', file: 'esp.json', name: 'Esp' },
      { code: 'ru', file: 'ru.json', name: 'Ru' }
    ],
    langDir: 'locales',
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected'
    },
    baseUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://yourdomain.com'
  },

  // Nitro配置（关键修改）
  nitro: {
    preset: 'vercel-static',
    compatibilityDate: '2025-08-03',
    prerender: {
      crawlLinks: true, // 启用链接抓取
      routes: getPrerenderRoutes(),
      failOnError: false // 避免因个别路由失败中断构建
    },
    serveStatic: true // 确保静态资源服务
  },

  // Vite配置优化
  vite: {
    build: {
      cssCodeSplit: true, // 重新启用CSS分割
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[name]-[hash].[ext]',
          chunkFileNames: 'js/[name]-[hash].js',
          entryFileNames: 'js/[name]-[hash].js',
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor' // 更好的vendor分块
            }
          }
        }
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/css/variables.scss" as *;'
        }
      }
    }
  },

  // 实验性功能
  experimental: {
    payloadExtraction: true, // 启用payload提取
    inlineSSRStyles: false // 避免样式冲突
  }
})