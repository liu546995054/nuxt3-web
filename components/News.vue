<template>
  <!--  <ClientOnly>-->
  <section id="cat-thumb-title-posts-1" class="section-item cat-thumb-title-posts">
    <div class="inner">
      <div class="section-container grid-col-3" data-radio="0.75">
        <h2 class="heading-title"><b>
          <NuxtLinkLocale to="/news/news">
            <span><span class="menu-title">{{ $t('footer.news') }}</span></span>
          </NuxtLinkLocale>
        </b>
        </h2>

        <div class="section-content">
          <ul class="thumb-title-list" id="news-index-page">

            <li data-aos="fade-up" v-for="(item, index) in newsList" :key="index">
              <figure class="post-thumbnail">
                <NuxtLinkLocale :to="`/news/${item.id }`">
                  <div class="item-cover">
                    <div class="attachment">
                      <div class="thumbnail">
                        <div class="centered">
                          <img width="300" height="248" style="width: 300px;height: 225px" :src="item.cover"
                               alt="On the role of metal chip press in the recycling of metal chips"
                               class="attachment-medium size-medium wp-post-image"
                               loading="lazy">
                        </div>
                      </div>
                    </div>
                    <i class="mask"></i>
                  </div>
                </NuxtLinkLocale>
              </figure>
              <div class="post-excerpt">
                <h3>{{ item.title }}</h3>
                <div class="post-meta">
                  <span class="date"><i class="fa fa-clock-o"></i>{{ item.date }}</span>
                  <span class="cat"><i class="fa fa-folder-open-o"></i>
                    </span>
                </div>
                <div class="opacity excerpt-content">{{ item.description }}
                </div>

                <div class="link-read-more">
                  <NuxtLinkLocale :to="`/news/${item.id}`">
                      <span>
                        <span>{{ $t('news.readMore') }}</span>
                        <i class="fa fa-angle-right"></i>
                      </span>
                  </NuxtLinkLocale>

                </div>
              </div>

            </li>

          </ul>
        </div>
      </div>
    </div>
  </section>
  <!--  </ClientOnly>-->


</template>

<script setup>
import {ref, watch} from 'vue'
import {useRoute} from 'vue-router'
import {useI18n} from 'vue-i18n'

const {t, locale} = useI18n()
const route = useRoute()
const currentLang = ref('en') // 用ref存储，避免computed在静态页的服务端构建问题
// 状态管理
const newsList = ref([])
const isHydrated = ref(false)


// 计算属性
currentLang.value = locale.value

// 获取新闻数据
const fetchNews = async (page = 1, lang) => {
  try {
    const response = await $fetch(
        'https://api.titan-recycling.com/article/v1/client/news/list',
        {
          method: 'post',
          body: {
            row_start: 1,
            row_count: 100,
            lang: lang // 动态传入当前语言
          },
          headers: {
            'Content-Type': 'application/json'
          }
        }
    )

    if (response.error_code === 10000) {
      newsList.value = response.result_data.items.map(item => {
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
  } catch (err) {
    console.error('Failed to fetch news:', err)
  }
}


// 初始化
onMounted(async () => {
  isHydrated.value = true
  await fetchNews(1, currentLang.value)

})

// 监听语言变化
watch(currentLang, (newLang) => {
  if (isHydrated.value) {
    fetchNews(1, newLang)
  }
})

</script>


