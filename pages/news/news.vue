<template>
  <div class="wrapper">
    <ClientOnly>
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
                        <!-- 新闻列表 -->
                        <ul class="thumb-title-list" id="newsItems">
                          <li
                              v-for="(news, index) in paginatedNews"
                              :key="news.id"
                              data-aos="fade-up"
                              :data-aos-delay="index * 100"
                          >
                            <figure class="post-thumbnail">
                              <NuxtLinkLocale :to="{ path: `/news/${news.id}` }">
                                <div class="item-cover">
                                  <div class="attachment">
                                    <div class="thumbnail">
                                      <div class="centered">
                                        <img
                                            style="width: 300px;height: 225px"
                                            :width="300"
                                            :height="248"
                                            :src="news.cover"
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
                                <NuxtLinkLocale :to="{ path: `/news/${news.id}`}" :title="news.title">
                                  {{ news.title }}
                                </NuxtLinkLocale>
                              </h3>
                              <div class="post-meta">
                                <span class="date">
                                  <i class="fa fa-clock-o"></i>
                                  {{ news.date }}
                                </span>
                              </div>
                              <div class="opacity excerpt-content">{{ news.description }}
                              </div>
                              <div class="link-read-more">
                                <NuxtLinkLocale :to="{ path: `/news/${news.id}` }">
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

      <Footer/>
    </ClientOnly>
  </div>
</template>

<script setup>
import {computed, ref} from 'vue'
import {useRoute} from 'vue-router'
import {useI18n} from 'vue-i18n'


// 状态管理
const newsList = ref([])
const currentPage = ref(1)
const itemsPerPage = ref(3) // 每页显示3条


// 计算属性
const backgroundImage = computed(() => '/images/news/bg1.jpg')
const currentLang = computed(() => useCookie('i18n_redirected').value || 'en')
const paginatedNews = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value
  const end = start + itemsPerPage.value
  return newsList.value.slice(start, end)
})

const apiUrl = `https://api.titan-recycling.com/article/v1/client/news/list`;
const { data, pending, error, refresh } = await useFetch(apiUrl, {
  method: 'post',
  body: {
    row_start: 1,
    row_count: 100,
    lang: toRaw(currentLang.value) // 移除响应式包装
  },
  headers: {
    'Content-Type': 'application/json'
  }
})


if (data.value.error_code === 10000){
  newsList.value = data.value.result_data.items.map(item => {
    if (item.publish_time) {
      const date = new Date(item.publish_time);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      const seconds = String(date.getSeconds()).padStart(2, '0');

      item.publish_time = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    } else {
      item.publish_time = ''; // 可选：处理 create_time 为空的情况
    }
    return {
      url_site: item.url_site,
      id: item.id,
      title: item.translations[0].news_title,
      cover: item.cover,
      date: item.publish_time,
      description: item.translations[0].summary,
    }

  })
}







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
