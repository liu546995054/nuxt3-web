<template>
  <div class="container">
    <section id="wewe-8" class="section-item section-editor">
      <div class="inner">
        <div class="section-container">
          <h2 class="heading-title tmd"><b>{{ $t('home_about[0]') }}</b></h2>
          <div class="section-content section-title">
            <p class="max70 aligncenter">
              <strong>{{ $t('home_about[1]') }}</strong> {{ $t('home_about[2]') }}
            </p>
            <div class="pop-slider my-swiper-container"> <!-- 添加 my-swiper-container 类 -->
              <!-- Swiper 组件 -->
              <Swiper
                  ref="swiperRef"
                  :modules="modules"
                  :autoplay="{ delay: 3000, disableOnInteraction: false }"
                  :loop="true"
                  :pagination="{ clickable: true }"
                  class="my-swiper"
              >
                <SwiperSlide v-for="item in slides" :key="item.id">
                  <img :src="item.image" alt="轮播图" class="w-full h-full object-cover" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="wewe-9" class="section-item section-editor">
      <div class="inner">
        <div class="section-container">
          <div class="section-content">
            <h2 class="heading-title tmd"><b>{{ $t('home_about[3]') }}</b></h2>
            <h3 class="aligncenter">
								<span style="font-size: 18px;">
									<strong>{{ $t('home_about[4]') }}
										<span style="color: #ff5e14;">
											{{ $t('home_about[5]') }}
										</span>
									</strong>
								</span>
            </h3>

            <div class="section-about">
              <div class="section-about-content">
                <div class="section-about-left">
                  <img src="/images/products/product/d1.jpg"/>
                </div>
                <div class="section-about-right">
                  <p>
											<span style="line-height:1.8;font-size:14px;">
												<span style="font-size: 16px; line-height: 1.8;">
													{{ $t('home_about[6]') }}
												</span>
												<strong>
													<em>
														<span
                                style="font-size: 16px; color: rgb(23, 31, 94); line-height: 1.8;">{{ $t('home_about[7]') }}</span>
													</em>
												</strong>
												<span style="font-size: 16px; line-height: 1.8;">
													{{ $t('home_about[8]') }}
												</span>
											</span>
                    <span style="line-height:1.8;">
												{{ $t('home_about[9]') }}
											</span>
                  </p>
                </div>
              </div>
              <div class="section-about-content">
                <div class="section-about-right">
                  <p>
											<span style="line-height:1.8;">
												{{ $t('home_about[10]') }}
												<strong>
													<span style="color:#171f5e;">
														<em>{{ $t('home_about[11]') }}</em>
													</span>
												</strong>
												{{ $t('home_about[12]') }}
												<strong>
													<span style="color:#171f5e;">
														<em>{{ $t('home_about[13]') }}</em></span>
												</strong>&nbsp;
												{{ $t('home_about[14]') }}
											</span>
                  </p>
                </div>
                <div class="section-about-left">
                  <img src="/images/products/product/d2.jpg"/>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import { Autoplay, Pagination } from 'swiper'

const swiperRef = ref(null)
const modules = ref([Autoplay, Pagination])

const slides = ref([
  { id: 1, image: '/images/about/bg1.jpg' },
  { id: 2, image: '/images/about/bg2.jpg' },
  { id: 3, image: '/images/about/bg3.jpg' }
])

onMounted(() => {
  console.log('Swiper 实例:', swiperRef.value) // 检查实例是否存在

  // 调试：确认 Swiper 已初始化并自动播放
  setTimeout(() => {
    if (swiperRef.value) {
      console.log('Swiper 配置:', swiperRef.value.params)
      console.log('自动播放状态:', swiperRef.value.autoplay.running)
    }
  }, 500)
})
</script>

<style scoped>
/* 确保 Swiper 容器有高度 */
.my-swiper-container {
  height: 385px; /* 设置与图片相同的高度 */
  width: 100%;
  overflow: hidden;
}

/* 确保 Swiper 内部元素有正确的样式 */
.swiper-wrapper {
  height: 100%;
}

.swiper-slide {
  height: 100%;
}

/* 确保图片填满容器 */
.swiper-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* 分页器样式 */
.swiper-pagination-bullet {
  background-color: white;
  opacity: 0.7;
}

.swiper-pagination-bullet-active {
  background-color: #4F46E5;
  opacity: 1;
}
</style>
