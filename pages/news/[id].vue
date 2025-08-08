<template>
  <div class="wrapper">
    <!-- 头部区域（与列表页保持一致） -->
    <div class="section-header" :style="`background-image: url(${backgroundImage})`">
      <Header />
      <div class="sub-header">
        <div class="inner">
          <h2 class="current-title">{{ $t('menu.news') }}</h2>
          <!-- 面包屑导航（包含当前新闻页） -->
          <ol class="breadcrumbs" itemscope itemtype="https://schema.org/BreadcrumbList">
            <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
              <NuxtLinkLocale to="/" itemprop="item">
                <span itemprop="name">{{ $t('home') }}</span>
              </NuxtLinkLocale>
              <meta itemprop="position" content="1" />
            </li>
            <i class="delimiter"></i>
            <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
              <NuxtLinkLocale to="/news/news" itemprop="item">
                <span itemprop="name">{{ $t('menu.news') }}</span>
              </NuxtLinkLocale>
              <meta itemprop="position" content="2" />
            </li>
          </ol>
        </div>
      </div>
    </div>

    <!-- 主内容区 -->
    <main>
      <div class="container container-news">
        <div class="inner wrapper-content new-content">
          <div class="nynews-head" id="news-contents-head">
            <h1>{{newsDetail.title}}</h1>
            <div class="info">
              <span>{{$t('menu.news') }}</span>
              <span>{{$t('news.publishTime') }}: {{newsDetail.date}} </span>
              <span>{{$t('news.visited') }}: 2113 {{$t('news.visitedTimes') }}</span>
            </div>
          </div>
          <div class="nynews-boxarc arccontent maximg" id="news-contents" v-html="newsDetail.content">
          </div>
        </div>
      </div>



    </main>

    <Footer />
  </div>
</template>

<script setup>
import {computed, onMounted, ref, watch} from 'vue'
import {useRoute, useRouter} from 'vue-router'

// 国际化
const { t } = useI18n()
// 路由信息
const route = useRoute()
const router = useRouter()



// 状态管理
const newsDetail = ref({})
const prevNews = ref(null) // 上一篇
const nextNews = ref(null) // 下一篇
const isLoading = ref(true)
const error = ref(null)
const langCookie = useCookie('i18n_redirected') // 获取语言 Cookie
const currentLang = langCookie.value || 'en' // 优先用 Cookie，否则默认 'en'
// 背景图计算属性（与列表页保持一致）
const backgroundImage = computed(() => {
  return '/images/news/bg1.jpg'
})

// 移除原有的 fetchNewsDetail 函数，改用 useAsyncData 在组件初始化时获取数据
const { data, refresh, error: fetchError } = await useAsyncData(
    // 唯一缓存键（结合语言和新闻slug，确保不同新闻/语言的缓存独立）
    `news-detail-${currentLang}-${route.params.id}`,
    async () => {
      const { id } = route.params;
      // 构建API地址（包含语言和新闻slug）
      // const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/news/${slug}?lang=${locale || 'en'}`;
      const apiUrl = `https://cloud-note-1256263900.cos.ap-nanjing.myqcloud.com/news.json`;

      const response = await fetch(apiUrl);

      if (!response.ok) {
        // 处理404或其他错误（例如跳转到404页面）
        if (response.status === 404) {
          throw createError({ statusCode: 404, statusMessage: 'News not found' });
        }
        throw createError({ statusCode: response.status, statusMessage: 'Failed to fetch news' });
      }

      const data = await response.json();
      return {
        detail: data.news.filter(v=>v.original_id == id && v.lang === currentLang)[0],
        prev: data.prev,
        next: data.next
      };
    },
    {
      // ISR 缓存配置（可选，可覆盖 nuxt.config 中的全局设置）
      revalidate: 3600, // 缓存1小时（单位：秒），与 nuxt.config 中的 isr 配置一致
    }
);


newsDetail.value = data.value.detail

// 日期格式化（适配当前语言）
const formatDate = (dateString) => {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }
  return new Date(dateString).toLocaleDateString(route.params.locale || 'en', options)
}

// 初始化
onMounted(() => {
  // fetchNewsDetail()
})

watch(
    () => route.params.locale,
    () => {
      refresh();
    },
    { immediate: true }
)

// 设置SEO元数据
useHead({
  // 标题 - 优先使用新闻标题，否则使用默认标题
  title: computed(() => {
    return newsDetail.value?.title
        ? `${newsDetail.value.title} | ${t('news.title')}`
        : t('news.defaultTitle')
  }),

  // 元描述
  meta: [
    {
      name: 'description',
      content: computed(() => {
        // 使用新闻摘要作为描述，如果没有则使用默认描述
        if (newsDetail.value?.summary) {
          // 确保描述不超过160个字符
          return newsDetail.value.summary.substring(0, 160)
        }
        return 'TITAN Recyclingsystems-Metal Recycling Technologies'
      })
    },
    {
      name: 'keywords',
      content: computed(() => {
        // 提取新闻标签作为关键词
        if (newsDetail.value?.keywords ) {
          return newsDetail.value.keywords
        }
        return 'TITAN Recyclingsystems-Metal Recycling Technologies'
      })
    },
    //  canonical URL - 规范链接，避免重复内容问题
    {
      rel: 'canonical',
      href: computed(() => {
        return `${window.location.origin}${route.fullPath}`
      })
    },
    // Open Graph 元数据（用于社交媒体分享）
    { property: 'og:title', content: computed(() => newsDetail.value?.title || t('news.defaultTitle')) },
    { property: 'og:type', content: 'article' },
    {
      property: 'og:url',
      content: computed(() => `${window.location.origin}${route.fullPath}`)
    },
    {
      property: 'og:image',
      content: computed(() => {
        // 使用新闻图片作为分享图片
        return newsDetail.value?.imageUrl || '/images/news/n1.png'
      })
    },
    {
      property: 'og:description',
      content: computed(() => {
        return newsDetail.value?.summary
            ? newsDetail.value.summary.substring(0, 160)
            : 'TITAN Recyclingsystems-Metal Recycling Technologies'
      })
    },
    { property: 'og:locale', content: currentLang },
    // Twitter 卡片元数据
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: computed(() => newsDetail.value?.title || t('news.defaultTitle')) },
    {
      name: 'twitter:description',
      content: computed(() => {
        return newsDetail.value?.summary
            ? newsDetail.value.summary.substring(0, 160)
            : 'TITAN Recyclingsystems-Metal Recycling Technologies'
      })
    },
    {
      name: 'twitter:image',
      content: computed(() => {
        return newsDetail.value?.imageUrl || '/images/news/n1.png'
      })
    }
  ],

  // 文章结构化数据 - 帮助搜索引擎理解内容
  script: [
    {
      type: 'application/ld+json',
      innerHTML: computed(() => {
        if (!newsDetail.value) return '{}'

        return JSON.stringify({
          "@context": "https://schema.org",
          "@type": "NewsArticle",
          "headline": newsDetail.value.title,
          "image": [newsDetail.value.imageUrl || '/images/news/n1.png'],
          "datePublished": newsDetail.value.publishedAt,
          "dateModified": newsDetail.value.updatedAt || newsDetail.value.publishedAt,
          "author": [{
            "@type": "Person",
            "name": newsDetail.value.author || 'TITAN'
          }],
          "publisher": {
            "@type": "Organization",
            "name": t('site.name'),
            "logo": {
              "@type": "ImageObject",
              "url": "/favicon.ico" // 替换为你的网站logo
            }
          },
          "description": newsDetail.value.summary || 'TITAN Recyclingsystems-Metal Recycling Technologies'
        })
      })
    }
  ]
})
</script>

<style  scoped>
/* 基础样式保持与列表页一致 */
.news-detail {
  max-width: 800px;
  margin: 0 auto;
  padding: 30px 0;
}

/* 标题区样式 */
.news-header {
  margin-bottom: 30px;
}

.news-title {
  font-size: 2rem;
  line-height: 1.3;
  margin-bottom: 15px;
  color: #333;
}

.news-meta {
  display: flex;
  gap: 20px;
  color: #666;
  font-size: 0.9rem;
}

/* 图片样式 */
.news-featured-image {
  margin: 0 0 30px;
}

.featured-img {
  width: 100%;
  height: auto;
  border-radius: 4px;
  object-fit: cover;
}

/* 内容样式 */
.news-content {
  line-height: 1.8;
  color: #444;
}

.news-content p {
  margin-bottom: 1.5rem;
}

.news-content img {
  max-width: 100%;
  height: auto;
  margin: 1.5rem 0;
}

.news-content h2,
.news-content h3 {
  margin: 2rem 0 1rem;
  color: #222;
}

/* 标签样式 */
.news-tags {
  margin: 30px 0;
  padding: 15px;
  background: #f9f9f9;
  border-radius: 4px;
}

.tags-label {
  font-weight: bold;
  margin-right: 10px;
}

.news-tags ul {
  display: inline-flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tag-item {
  padding: 4px 12px;
  background: #eaeaea;
  border-radius: 20px;
  font-size: 0.9rem;
  transition: all 0.3s;
}

.tag-item:hover {
  background: #3498db;
  color: white;
}

/* 上下篇导航 */
.news-navigation {
  margin: 40px 0;
  padding: 20px 0;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

.prev-news, .next-news {
  flex: 1;
}

.nav-label {
  display: block;
  margin-bottom: 5px;
  font-size: 0.9rem;
  color: #666;
}

.nav-link {
  display: block;
  font-weight: 500;
  transition: color 0.3s;
}

.nav-link:hover {
  color: #3498db;
}

/* 返回列表按钮 */
.back-to-list {
  margin: 30px 0;
  text-align: center;
}

.back-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: #3498db;
  color: white;
  border-radius: 4px;
  transition: background 0.3s;
}

.back-btn:hover {
  background: #2980b9;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .news-title {
    font-size: 1.6rem;
  }

  .news-navigation {
    flex-direction: column;
  }
}

/* 加载和错误状态复用列表页样式，额外补充 */
.back-link {
  display: inline-block;
  margin-top: 15px;
  color: #3498db;
  text-decoration: underline;
}
</style>
