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
            <i class="delimiter"></i>
            <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
              <span itemprop="name">{{ newsDetail.title }}</span>
              <meta itemprop="position" content="3" />
            </li>
          </ol>
        </div>
      </div>
    </div>

    <!-- 主内容区 -->
    <main>
      <div class="container container-product">
        <div class="inner wrapper-content">
          <div class="column-fluid">
            <div class="content fullwidth">
              <!-- 加载状态 -->
<!--              <div v-if="isLoading" class="loading-state">-->
<!--                <div class="spinner"></div>-->
<!--                <p>{{ $t('loading') }}</p>-->
<!--              </div>-->

<!--              &lt;!&ndash; 错误状态 &ndash;&gt;-->
<!--              <div v-else-if="error" class="error-state">-->
<!--                <p>{{ $t('error.loadFailed') }}: {{ error.message }}</p>-->
<!--                <button @click="fetchNewsDetail" class="retry-btn">{{ $t('error.retry') }}</button>-->
<!--                <NuxtLinkLocale to="/news/news" class="back-link">{{ $t('backToNewsList') }}</NuxtLinkLocale>-->
<!--              </div>-->

              <!-- 新闻详情内容 -->
              <article  class="news-detail" itemprop="article" itemscope itemtype="https://schema.org/Article">
                <meta itemprop="author" content="Your Company Name">
                <meta itemprop="publisher" content="Your Company Name">
                <meta itemprop="datePublished" :content="newsDetail.publishedAt">

                <!-- 新闻标题区 -->
                <header class="news-header">
                  <h1 itemprop="headline" class="news-title">{{ newsDetail.title }}</h1>

                  <div class="news-meta">
                    <span class="date">
                      <i class="fa fa-clock-o"></i>
<!--                      {{ formatDate(newsDetail.publishedAt) }}-->
                    </span>
                    <span class="category" v-if="newsDetail.category">
                      <i class="fa fa-folder-open-o"></i>
                      {{ newsDetail.category }}
                    </span>
                  </div>
                </header>

                <!-- 新闻主图 -->
                <figure class="news-featured-image" itemprop="image" itemscope itemtype="https://schema.org/ImageObject">
                  <img
                      :src="newsDetail.imageUrl"
                      :alt="newsDetail.imageAlt || newsDetail.title"
                      class="featured-img"
                      loading="eager"
                      itemprop="url"
                  >
                  <meta itemprop="width" content="1200">
                  <meta itemprop="height" content="630">
                  <figcaption v-if="newsDetail.imageCaption" itemprop="caption">{{ newsDetail.imageCaption }}</figcaption>
                </figure>

                <!-- 新闻内容 -->
                <div class="news-content" itemprop="articleBody">
                  <div v-html="newsDetail.content"></div>
                </div>

                <!-- 标签 -->
<!--                <div class="news-tags" v-if="newsDetail.tags && newsDetail.tags.length">-->
<!--                  <span class="tags-label">{{ $t('tags') }}:</span>-->
<!--                  <ul>-->
<!--                    <li v-for="tag in newsDetail.tags" :key="tag.id">-->
<!--                      <NuxtLinkLocale :to="`/news?tag=${tag.slug}`" class="tag-item">{{ tag.name }}</NuxtLinkLocale>-->
<!--                    </li>-->
<!--                  </ul>-->
<!--                </div>-->

                <!-- 上下篇导航 -->
                <div class="news-navigation" v-if="prevNews || nextNews">
                  <div class="prev-news" v-if="prevNews">
                    <span class="nav-label">{{ $t('previousNews') }}:</span>
                    <NuxtLinkLocale :to="`/news/${prevNews.slug}`" class="nav-link">
                      {{ prevNews.title }}
                    </NuxtLinkLocale>
                  </div>
                  <div class="next-news" v-if="nextNews">
                    <span class="nav-label">{{ $t('nextNews') }}:</span>
                    <NuxtLinkLocale :to="`/news/${nextNews.slug}`" class="nav-link">
                      {{ nextNews.title }}
                    </NuxtLinkLocale>
                  </div>
                </div>

                <!-- 返回列表按钮 -->
                <div class="back-to-list">
                  <NuxtLinkLocale to="/news/news" class="back-btn">
                    <i class="fa fa-arrow-left"></i>
<!--                    {{ $t('backToNewsList') }}-->
                    {{ newsDetail.title }}
                  </NuxtLinkLocale>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import {ref, computed, onMounted, watch} from 'vue'
import { useRoute, useRouter } from 'vue-router'

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
