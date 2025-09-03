<template>
  <div className="wrapper">
    <Header/>
    <Hero/>
    <main>
      <Products/>
      <About/>
      <News/>
    </main>
    <Footer/>
    <!-- 隐私政策提示框 -->
    <div
        v-if="shouldShowBanner"
        :class="bannerClasses"
        class="fixed bottom-0 left-0 right-0 bg-white shadow-2xl z-50 p-6 max-w-7xl mx-auto w-full transform transition-all duration-500"
    >
      <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div class="flex-1">
          <div class="flex items-start gap-3">
            <div class="text-primary text-xl mt-1">🔒</div>
            <div>
              <h3 class="font-bold text-gray-800 text-lg mb-1">隐私政策提示</h3>
              <p class="text-gray-600 text-sm md:text-base">
                我们使用Cookie和类似技术来改善您的浏览体验，分析网站流量，并个性化内容。
                点击"接受"，即表示您同意我们按照
                <NuxtLink to="/privacy-policy" class="text-primary hover:underline font-medium">
                  隐私政策
                </NuxtLink>
                使用这些技术。
              </p>
            </div>
          </div>
        </div>

        <div class="flex flex-wrap gap-3 w-full md:w-auto justify-end">
          <button
              @click="handleReject"
              class="px-5 py-2.5 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg text-sm font-medium transition-all duration-300"
          >
            拒绝
          </button>
          <button
              @click="handleAccept"
              class="px-5 py-2-5 bg-primary hover:bg-primary/90 text-white rounded-lg text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            接受所有
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
usePageSeo('home')
import { ref, onMounted, computed } from 'vue'
// import { useCookie } from 'nuxt/app'

// 使用Nuxt的useCookie来存储用户选择（比localStorage更适合SSR）
const cookieConsent = useCookie('cookie_consent', {
  // maxAge: 60 * 60 * 24 * 30, // 30天有效期
  maxAge: 60 , // 30天有效期
  sameSite: 'strict'
})

// 控制提示框显示状态
const isVisible = ref(false)
const isAnimatingOut = ref(false)

// 计算属性 - 确定是否应该显示提示框
const shouldShowBanner = computed(() => {
  // 只在客户端且没有用户选择时显示
  return process.client && !cookieConsent.value && isVisible.value && !isAnimatingOut.value
})

// 计算属性 - 控制提示框动画类
const bannerClasses = computed(() => {
  if (isAnimatingOut.value) {
    return 'translate-y-full opacity-0'
  }

  return isVisible.value ? 'translate-y-0 opacity-1' : 'translate-y-full opacity-0'
})

// 处理接受按钮点击
const handleAccept = () => {
  cookieConsent.value = 'accepted'
  enableAllCookies()
  hideBanner()
}

// 处理拒绝按钮点击
const handleReject = () => {
  cookieConsent.value = 'rejected'
  disableNonEssentialCookies()
  hideBanner()
}

// 隐藏提示框
const hideBanner = () => {
  isAnimatingOut.value = true
  // 等待动画完成后完全隐藏
  setTimeout(() => {
    isVisible.value = false
    isAnimatingOut.value = false
  }, 500)
}

// 启用所有Cookie
const enableAllCookies = () => {
  // 这里添加实际启用分析、跟踪等脚本的代码
  console.log('所有Cookie已启用')
}

// 禁用非必要Cookie
const disableNonEssentialCookies = () => {
  // 这里添加实际禁用非必要Cookie的代码
  console.log('非必要Cookie已禁用')
}

// 在客户端挂载后检查是否需要显示
onMounted(() => {
  if (process.client && !cookieConsent.value) {
    // 延迟显示以获得更好的动画效果
    setTimeout(() => {
      isVisible.value = true
    }, 500)
  }
})
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
}

/* 颜色变量 - 可根据您的主题调整 */
:root {
  --primary-color: #165DFF;
  --gray-light: #F3F4F6;
  --gray-medium: #9CA3AF;
  --gray-dark: #1F2937;
}

.fixed{
  position: fixed;
  bottom: 0;
  background-color: white;
  z-index: 999;
}

.text-primary {
  color: var(--primary-color);
}

.bg-primary {
  background-color: var(--primary-color);
}

.bg-primary\/90 {
  background-color: rgba(22, 93, 255, 0.9);
}

.bg-gray-200 {
  background-color: #E5E7EB;
}

.bg-gray-300 {
  background-color: #D1D5DB;
}

.text-gray-800 {
  color: #1F2937;
}

.text-gray-600 {
  color: #4B5563;
}

.shadow-2xl {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.shadow-md {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.shadow-lg {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.rounded-lg {
  border-radius: 0.5rem;
}

.font-bold {
  font-weight: 700;
}

.font-medium {
  font-weight: 500;
}

.hover\:underline:hover {
  text-decoration: underline;
}

.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

/* 响应式样式 */
@media (min-width: 768px) {
  .md\:flex-row {
    flex-direction: row;
  }

  .md\:items-center {
    align-items: center;
  }

  .md\:w-auto {
    width: auto;
  }

  .md\:text-base {
    font-size: 1rem;
  }
}

.flex {
  display: flex;
}

.flex-col {
  flex-direction: column;
}

.flex-wrap {
  flex-wrap: wrap;
}

.items-start {
  align-items: flex-start;
}

.justify-between {
  justify-content: space-between;
}

.justify-end {
  justify-content: flex-end;
}

.flex-1 {
  flex: 1 1 0%;
}

.gap-3 {
  gap: 0.75rem;
}

.gap-4 {
  gap: 1rem;
}

.p-6 {
  padding: 1.5rem 0;
}

.px-5 {
  padding-left: 1.25rem;
  padding-right: 1.25rem;
}

.py-2-5 {
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
}

.mt-1 {
  margin-top: 0.25rem;
}

.mb-1 {
  margin-bottom: 0.25rem;
}

.text-sm {
  font-size: 0.875rem;
}

.text-lg {
  font-size: 1.125rem;
}

.text-xl {
  font-size: 1.25rem;
}

.w-full {
  width: 100%;
}
</style>
