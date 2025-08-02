<template>
  <div class="wrapper">
    <!-- 加载语言时显示 -->
    <div v-if="isLoadingLocales" class="locale-loading">
      <p>Loading language...</p>
    </div>

    <template v-else>
      <!-- 头部区域 -->
      <div class="section-header" :style="`background-image: url(${backgroundImage})`">
        <Header/>
        <div class="sub-header">
          <div class="inner">
            <h2 class="current-title">{{ $t('menu.news') }}</h2>
            <!-- 面包屑导航 -->
            <ol class="breadcrumbs" itemscope itemtype="https://schema.org/BreadcrumbList">
              <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                <NuxtLinkLocale to="/" itemprop="item">
                  <span itemprop="name">{{ $t('home') }}</span>
                </NuxtLinkLocale>
                <meta itemprop="position" content="1"/>
              </li>
              <i class="delimiter"></i>
              <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                <NuxtLinkLocale to="/news/news" itemprop="item">
                  <span itemprop="name">{{ $t('menu.news') }}</span>
                </NuxtLinkLocale>
                <meta itemprop="position" content="2"/>
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
                        <!-- 加载状态 -->
                        <!--                        <div v-if="isLoading" class="loading-state">-->
                        <!--                          <div class="spinner"></div>-->
                        <!--                          <p>{{ t('loading') }}</p>-->
                        <!--                        </div>-->

                        <!-- 错误状态 -->
                        <!--                        <div v-else-if="error" class="error-state">-->
                        <!--                          <p>{{ t('error.loadFailed') }}: {{ error.message }}</p>-->
                        <!--                          <button @click="fetchNews" class="retry-btn">{{ t('error.retry') }}</button>-->
                        <!--                        </div>-->

                        <!-- 新闻列表 -->
                        <!--                        <ul v-else class="thumb-title-list" id="newsItems">-->
                        <ul class="thumb-title-list" id="newsItems">
                          <li
                              v-for="(news, index) in newsList"
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
                                        >
                                      </div>
                                    </div>
                                  </div>
                                  <i class="mask"></i>
                                </div>
                              </NuxtLink>
                            </figure>
                            <div class="post-excerpt">
                              <h3>
                                <NuxtLinkLocale
                                    :to="`/news/${news.slug}`"
                                    :title="news.title"
                                >
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
                                  <span>{{ t('readMore') }}</span>
                                  <i class="fa fa-angle-right"></i>
                                </NuxtLinkLocale>
                              </div>
                            </div>
                          </li>
                        </ul>

                        <!-- 空状态 -->
                        <div v-if="!isLoading && !error && newsList.length === 0" class="empty-state">
                          <p>{{ $t('news.noNews') }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              <!-- 分页组件 -->
              <div id="pages" class="pagination" v-if="!isLoading && !error && totalPages > 1">
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

      <Footer/>
    </template>
  </div>
</template>

<script setup>
import {computed, onMounted, ref, watch} from 'vue'
import {useRoute} from 'vue-router'
// import {usePageSeo} from '~/composables/usePageSeo'
// import {useDynamicI18n} from '~/composables/useDynamicI18n'

// 动态语言
// const {t, activeLocale, isLoadingLocales} = useDynamicI18n()
// 路由信息
const route = useRoute()

// 状态管理
const newsList = ref([])
const isLoading = ref(true)
const error = ref(null)
const currentPage = ref(1)
const totalPages = ref(1)
const itemsPerPage = ref(9)

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

// 背景图计算属性
const backgroundImage = computed(() => {
  return `/images/news/bg1-${activeLocale.value}.jpg` || '/images/news/bg1.jpg'
})

const langCookie = useCookie('i18n_redirected') // 获取语言 Cookie
const currentLang = langCookie.value || 'en' // 优先用 Cookie，否则默认 'en'

// 获取新闻数据（依赖当前语言）
const fetchNews = async (page = 1, type) => {
  isLoading.value = true
  error.value = null
  try {
    console.log('00000', type)
    // API包含当前语言参数
    // const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/news?lang=${activeLocale.value}&page=${page}&limit=${itemsPerPage.value}`

    // const response = await fetch(apiUrl)
    // if (!response.ok) throw new Error(t('error.networkError'))

    // const data = await response.json()
    // newsList.value = data.items
    // totalPages.value = data.totalPages
    // currentPage.value = page

    if (type === 'en') {
      newsList.value = enList.value
    } else if (type === 'esp') {
      newsList.value = espList.value
    } else if (type === 'ru') {
      newsList.value = ruList.value
    } else {
      newsList.value = enList.value
    }


    totalPages.value = 3
    currentPage.value = 1


  } catch (err) {
    error.value = err
    console.error('Failed to fetch news:', err)
  } finally {
    isLoading.value = false
  }
}

// 分页切换
const changePage = (page) => {
  if (page < 1 || page > totalPages.value) return
  fetchNews(page)
  window.scrollTo({top: 0, behavior: 'smooth'})
}

// 日期格式化（根据当前语言）
const formatDate = (dateString) => {
  const options = {year: 'numeric', month: 'short', day: 'numeric'}
  return new Date(dateString).toLocaleDateString(activeLocale.value, options)
}

watch(
    () => route.params.locale,
    () => {
      fetchNews(1,currentLang)
    },
    { immediate: true }
)

// 监听语言变化，重新加载新闻
watch(currentLang, () => {
  console.log('语言变化')
  fetchNews(1, currentLang) // 语言变化时重置到第一页
})

// 初始化
onMounted(() => {
  // const pageFromRoute = route.query.page ? parseInt(route.query.page) : 1
  // if (!isLoadingLocales.value) {
  //   console.log(22222)
  //   fetchNews(pageFromRoute)
  // } else {
  //   // 等待语言加载完成后再请求数据
  //   const unwatch = watch(isLoadingLocales, (loading) => {
  //     console.log(33333)
  //     // if (!loading) {
  //       fetchNews(pageFromRoute)
  //       unwatch() // 只执行一次
  //     // }
  //   })
  // }
})

// SEO设置（使用动态翻译）
onMounted(() => {
  // const unwatch = watch(isLoadingLocales, (loading) => {
  //   if (!loading) {
  //     usePageSeo({
  //       title: t('seo.newsTitle'),
  //       description: t('seo.newsDescription'),
  //       canonical: `/news/news`,
  //       og: {
  //         type: 'article',
  //         title: t('seo.newsTitle'),
  //         description: t('seo.newsDescription')
  //       }
  //     })
  //     unwatch()
  //   }
  // })
})
</script>

<style scoped>
/* 语言加载状态 */
.locale-loading {
  text-align: center;
  padding: 50px 0;
  color: #666;
}

/* 加载状态样式 */
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

/* 错误状态样式 */
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

/* 空状态样式 */
.empty-state {
  text-align: center;
  padding: 40px 0;
  color: #7f8c8d;
}

/* 分页样式 */
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
