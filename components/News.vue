<template>

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
                  <h3>{{item.title}}</h3>
                  <div class="post-meta">
                    <span class="date"><i class="fa fa-clock-o"></i>{{item.date}}</span>
                    <span class="cat"><i class="fa fa-folder-open-o"></i>
                    </span>
                  </div>
                  <div class="opacity excerpt-content">{{item.description}}
                  </div>

                  <div class="link-read-more">
                    <NuxtLinkLocale :to="`/news/${item.id}`">
                      <span>
                        <span>{{$t('news.readMore')}}</span>
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



</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const route = useRoute()

// 状态管理
const newsList = ref([])
const isHydrated = ref(false)



// 计算属性
const currentLang = computed(() => useCookie('i18n_redirected').value || 'en')

const apiUrl = `https://api.titan-recycling.com/article/v1/client/news/list`;
const { data, pending, error, refresh } = await useFetch(apiUrl, {
  method: 'post',
  body: {
    row_start: 1,
    row_count: 100,
    lang: currentLang// 移除响应式包装
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









//
// // 获取新闻数据
// const fetchNews = async (page = 1, lang) => {
//   try {
//     const apiUrl = `https://cloud-note-1256263900.cos.ap-nanjing.myqcloud.com/news.json`;
//
//     const response = await fetch(apiUrl);
//
//     if (!response.ok) {
//       // 处理404或其他错误（例如跳转到404页面）
//       if (response.status === 404) {
//         throw createError({ statusCode: 404, statusMessage: 'News not found' });
//       }
//       throw createError({ statusCode: response.status, statusMessage: 'Failed to fetch news' });
//     }
//
//     const data = await response.json();
//
//
//     newsList.value = data.news.filter(v=>v.lang === currentLang.value).slice(0,3)
//     // 关键优化：为列表中的每条新闻预生成ISR缓存
//     await pregenerateISR(newsList, currentLang.value);
//   } catch (err) {
//     console.error('Failed to fetch news:', err)
//   }
// }
//
// // 预生成详情页ISR缓存
// const pregenerateISR = async (newsItems, lang) => {
//   if (process.client) return; // 仅在服务端执行
//
//   await Promise.all(
//       newsItems.map(async (news) => {
//         // 处理默认语言路径（en不带前缀）
//         const path = news.lang === 'en'
//             ? `/news/${news.original_id}`  // 默认语言路径
//             : `/${news.lang}/news/${news.original_id}`; // 其他语言路径
//
//         try {
//           await $fetch(path, {
//             headers: { 'x-prerender-revalidate': 'true' },
//             params: { _isr: 1 }
//           });
//           console.log(`预生成ISR: ${path}`);
//         } catch (err) {
//           console.error(`预生成失败 ${path}:`, err);
//         }
//       })
//   );
// };
//
//
//
//
//
// // 初始化
// onMounted(async () => {
//   isHydrated.value = true
//   await fetchNews(1, currentLang.value)
//   // 数据加载完成后再设置图片尺寸
//   // const trRadio = 0.75;
//   // const trWidth = 300;
//   // const trHeight = trWidth * trRadio;
//   //
//   // // 选择图片元素并设置尺寸
//   // const images = document.querySelectorAll(".thumb-title-list li .post-thumbnail img");
//   // images.forEach(img => {
//   //   img.style.width = `${trWidth}px`;
//   //   img.style.height = `${trHeight}px`;
//   // });
// })
//
// // 监听语言变化
// watch(currentLang, (newLang) => {
//   if (isHydrated.value) {
//     fetchNews(1, newLang)
//   }
// })
//
// // 监听路由变化
// watch(
//     () => route.params.locale,
//     (newLocale) => {
//       if (newLocale && isHydrated.value) {
//         fetchNews(1, newLocale)
//       }
//     },
//     { immediate: true }
// )
</script>


