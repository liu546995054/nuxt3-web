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
                              <NuxtLinkLocale :to="`/news/${news.original_id }`">
                                <div class="item-cover">
                                  <div class="attachment">
                                    <div class="thumbnail">
                                      <div class="centered">
                                        <img
                                            style="width: 300px;height: 225px"
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
                              </NuxtLinkLocale>
                            </figure>
                            <div class="post-excerpt">
                              <h3>
                                <NuxtLinkLocale :to="`/news/${news.original_id}`" :title="news.title">
                                  {{ news.title }}
                                </NuxtLinkLocale>
                              </h3>
                              <div class="post-meta">
                                <span class="date">
                                  <i class="fa fa-clock-o"></i>
                                  {{ news.date }}
                                </span>
                              </div>
                              <div class="opacity excerpt-content">{{news.description}}
                              </div>
                              <div class="link-read-more">
                                <NuxtLinkLocale :to="`/news/${news.original_id}`">
                                  <span>{{ $t('news.readMore') }}</span>
                                  <i class="fa fa-angle-right"></i>
                                </NuxtLinkLocale>
                              </div>
                            </div>
                          </li>
                        </ul>

                      </div>
                    </div>
                  </div>
                </section>
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



// 计算属性
const backgroundImage = computed(() => '/images/news/bg1.jpg')
const currentLang = computed(() => useCookie('i18n_redirected').value || 'en')
const paginatedNews = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value
  const end = start + itemsPerPage.value
  return newsList.value.slice(start, end)
})


// 获取新闻数据
const fetchNews = async (page = 1, lang) => {
  try {
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


    newsList.value = data.news.filter(v=>v.lang === currentLang.value)
    // 关键优化：为列表中的每条新闻预生成ISR缓存
    await pregenerateISR(newsList, currentLang.value);
  } catch (err) {
    console.error('Failed to fetch news:', err)
  }
}

// 预生成详情页ISR缓存
const pregenerateISR = async (newsItems, lang) => {
  if (process.client) return; // 仅在服务端执行

  await Promise.all(
      newsItems.map(async (news) => {
        // 处理默认语言路径（en不带前缀）
        const path = news.lang === 'en'
            ? `/news/${news.original_id}`  // 默认语言路径
            : `/${news.lang}/news/${news.original_id}`; // 其他语言路径

        try {
          await $fetch(path, {
            headers: { 'x-prerender-revalidate': 'true' },
            params: { _isr: 1 }
          });
          console.log(`预生成ISR: ${path}`);
        } catch (err) {
          console.error(`预生成失败 ${path}:`, err);
        }
      })
  );
};

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
onMounted(async () => {
  isHydrated.value = true
  await fetchNews(1, currentLang.value)
// 执行图片尺寸设置
//   setImageDimensions()
})
// 提取为单独的函数，方便复用
const setImageDimensions = () => {
  // 获取所有.cat-thumb-title-posts元素
  const containers = document.querySelectorAll('.cat-thumb-title-posts')

  containers.forEach(container => {
    // 找到.section-container并获取data-radio属性值
    const sectionContainer = container.querySelector('.section-container')
    const ttRadio = parseFloat(sectionContainer?.dataset.radio || 0.75) // 默认0.75

    // 获取.post-thumbnail的宽度
    const postThumbnail = container.querySelector('.post-thumbnail')
    const ttWidth = postThumbnail?.offsetWidth || 300 // 默认300px

    // 计算高度
    const ttHeight = ttWidth * ttRadio

    // 设置所有图片的尺寸
    const images = container.querySelectorAll('img')
    images.forEach(img => {
      img.style.width = `${ttWidth}px`
      img.style.height = `${ttHeight}px`
    })
  })
}


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
