<template>
  <div class="wrapper">
    <ClientOnly>
      <!-- 头部区域 -->
      <div class="section-header" :style="`background-image: url(${backgroundImage})`">
        <Header />
        <div class="sub-header">
          <div class="inner">
            <h2 class="current-title">{{ $t('menu.news') }}</h2>
            <!-- 面包屑导航 -->
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
        <div class="container container-product">
          <div class="inner wrapper-content">
            <div class="column-fluid">
              <div class="content fullwidth">
                <section class="section-item cat-thumb-title-posts">
                  <div class="inner">
                    <div class="section-container grid-col-3" data-radio="0.75">
                      <div class="section-content">
                        <!-- 新闻列表 -->
                        <ul class="thumb-title-list" id="newsItems">
                          <li
                              v-for="(news, index) in paginatedNews"
                              :key="news.id"
                              data-aos="fade-up"
                              :data-aos-delay="index * 100"
                          >
                            <figure class="post-thumbnail">
                              <NuxtLink :to="`/news/${news.id}`">
                                <div class="item-cover">
                                  <div class="attachment">
                                    <div class="thumbnail">
                                      <div class="centered">
                                        <img
                                            :width="300"
                                            :height="248"
                                            :src="news.imageUrl"
                                            :alt="news.alt || news.title"
                                            class="attachment-medium size-medium wp-post-image"
                                            loading="lazy"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <i class="mask"></i>
                                </div>
                              </NuxtLink>
                            </figure>
                            <div class="post-excerpt">
                              <h3>
                                <NuxtLinkLocale :to="`/news/${news.slug}`" :title="news.title">
                                  {{ news.title }}
                                </NuxtLinkLocale>
                              </h3>
                              <div class="post-meta">
                                <span class="date">
                                  <i class="fa fa-clock-o"></i>
                                  {{ formatDate(news.date) }}
                                </span>
                                <span class="cat">
                                  <i class="fa fa-folder-open-o"></i>
                                  <NuxtLinkLocale to="/news/news" rel="category tag">
                                    {{ $t('menu.news') }}
                                  </NuxtLinkLocale>
                                </span>
                              </div>
                              <div class="opacity excerpt-content">
                                {{ news.excerpt }}
                              </div>
                              <div class="link-read-more">
                                <NuxtLinkLocale :to="`/news/${news.slug}`">
                                  <span>{{ $t('news.readMore') }}</span>
                                  <i class="fa fa-angle-right"></i>
                                </NuxtLinkLocale>
                              </div>
                            </div>
                          </li>
                        </ul>

                        <!-- 空状态 -->
                        <div v-if="showEmptyState" class="empty-state">
                          <p>{{ $t('news.noNews') }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              <!-- 分页组件 -->
              <div v-if="showPagination" id="pages" class="pagination">
                <button
                    @click="changePage(currentPage - 1)"
                    :disabled="currentPage === 1"
                    class="page-btn prev"
                >
                  <i class="fa fa-angle-left"></i>
                  {{ $t('pagination.prev') }}
                </button>

                <span class="page-info">
                  {{ $t('pagination.page') }} {{ currentPage }} {{ $t('pagination.of') }} {{ totalPages }}
                </span>

                <button
                    @click="changePage(currentPage + 1)"
                    :disabled="currentPage === totalPages"
                    class="page-btn next"
                >
                  {{ $t('pagination.next') }}
                  <i class="fa fa-angle-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </ClientOnly>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const route = useRoute()

// 状态管理
const newsList = ref([])
const currentPage = ref(1)
const totalPages = ref(1)
const itemsPerPage = ref(3) // 每页显示3条
const isHydrated = ref(false)

// 模拟数据
const enList = ref([
  {
    "id": 1,
    "title": "englishTitle",
    "slug": "news-title",
    "imageUrl": "/images/news/n1.png",
    "alt": "englishDesc",
    "date": "2024-02-11T00:00:00Z",
    "excerpt": "englishAbstract..."
  },
  {
    "id": 2,
    "title": "englishTitle",
    "slug": "news-title",
    "imageUrl": "/images/news/n1.png",
    "alt": "englishDesc",
    "date": "2024-02-11T00:00:00Z",
    "excerpt": "englishAbstract..."
  },
  {
    "id": 3,
    "title": "englishTitle",
    "slug": "news-title",
    "imageUrl": "/images/news/n1.png",
    "alt": "englishDesc",
    "date": "2024-02-11T00:00:00Z",
    "excerpt": "englishAbstract..."
  },
])
const espList = ref([
  {
    "id": 1,
    "title": "espTitle",
    "slug": "news-title",
    "imageUrl": "/images/news/n1.png",
    "alt": "espDesc",
    "date": "2024-02-11T00:00:00Z",
    "excerpt": "espAbstract..."
  },
  {
    "id": 2,
    "title": "espTitle",
    "slug": "news-title",
    "imageUrl": "/images/news/n1.png",
    "alt": "espDesc",
    "date": "2024-02-11T00:00:00Z",
    "excerpt": "espAbstract..."
  },
  {
    "id": 3,
    "title": "espTitle",
    "slug": "news-title",
    "imageUrl": "/images/news/n1.png",
    "alt": "espDesc",
    "date": "2024-02-11T00:00:00Z",
    "excerpt": "espAbstract..."
  },
])
const ruList = ref([
  {
    "id": 1,
    "title": "ruTitle",
    "slug": "news-title",
    "imageUrl": "/images/news/n1.png",
    "alt": "ruDesc",
    "date": "2024-02-11T00:00:00Z",
    "excerpt": "ruAbstract..."
  },
  {
    "id": 2,
    "title": "ruTitle",
    "slug": "news-title",
    "imageUrl": "/images/news/n1.png",
    "alt": "ruDesc",
    "date": "2024-02-11T00:00:00Z",
    "excerpt": "ruAbstract..."
  },
  {
    "id": 3,
    "title": "ruTitle",
    "slug": "news-title",
    "imageUrl": "/images/news/n1.png",
    "alt": "ruDesc",
    "date": "2024-02-11T00:00:00Z",
    "excerpt": "ruAbstract..."
  },])

// 计算属性
const backgroundImage = computed(() => '/images/news/bg1.jpg')
const currentLang = computed(() => useCookie('i18n_redirected').value || 'en')
const paginatedNews = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value
  const end = start + itemsPerPage.value
  return newsList.value.slice(start, end)
})
const showEmptyState = computed(() => newsList.value.length === 0)
const showPagination = computed(() => totalPages.value > 1)

// 获取新闻数据
const fetchNews = async (page = 1, lang) => {
  try {
    const dataSource = {
      en: enList.value,
      esp: espList.value,
      ru: ruList.value
    }[lang] || enList.value

    newsList.value = dataSource
    totalPages.value = Math.ceil(dataSource.length / itemsPerPage.value)
    currentPage.value = page
  } catch (err) {
    console.error('Failed to fetch news:', err)
  }
}

// 分页切换
const changePage = (page) => {
  if (page < 1 || page > totalPages.value) return
  currentPage.value = page
  if (process.client) {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

// 日期格式化
const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'short', day: 'numeric' }
  return new Date(dateString).toLocaleDateString(currentLang.value, options)
}

// 初始化
onMounted(() => {
  isHydrated.value = true
  fetchNews(1, currentLang.value)
})

// 监听语言变化
watch(currentLang, (newLang) => {
  if (isHydrated.value) {
    fetchNews(1, newLang)
  }
})

// 监听路由变化
watch(
    () => route.params.locale,
    (newLocale) => {
      if (newLocale && isHydrated.value) {
        fetchNews(1, newLocale)
      }
    },
    { immediate: true }
)
</script>

<style scoped>
/* 保持原有样式不变 */
.locale-loading {
  text-align: center;
  padding: 50px 0;
  color: #666;
}

.loading-state {
  text-align: center;
  padding: 40px 0;
}

.spinner {
  width: 40px;
  height: 40px;
  margin: 0 auto;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.error-state {
  text-align: center;
  padding: 40px 0;
  color: #e74c3c;
}

.retry-btn {
  margin-top: 15px;
  padding: 8px 16px;
  background: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.empty-state {
  text-align: center;
  padding: 40px 0;
  color: #7f8c8d;
}

.pagination {
  margin-top: 100px;
  text-align: center;
}

.page-btn {
  padding: 8px 16px;
  margin: 0 10px;
  background: #f5f5f5;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.page-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.page-info {
  margin: 0 10px;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>