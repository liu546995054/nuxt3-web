<template>

  <div class="section-header-home">
    <header class="header">
      <div class="inner">
        <h1 class="logo">
          <NuxtLinkLocale to="/">
            <img src="/images/logo.jpg" alt="TITAN RECYCLING MACHINERY">
            <span class="site-name">{{ $t('site_name') }}</span>
          </NuxtLinkLocale>
        </h1>

        <div class="main-nav">
          <nav class="main-menu" itemscope="" itemtype="">
            <div class="mobi-title">
              <span>Menu</span>
              <a class="mobi-menu-close"><i class="fa fa-times"></i></a>
            </div>
            <ul id="main-nav-menu" class="nav-menu">

              <li class="menu-item menu-item-has-children ">
                <NuxtLinkLocale to="/products/product">
                  <span class="menu-title">{{ $t('menu.products') }}</span>
                </NuxtLinkLocale>
                <ul class="sub-menu">
                  <li id="menu-item-9"
                      class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-9">
                    <NuxtLinkLocale to="/products/baling-press">
                      <span class="menu-title">{{ $t('products.baling_press') }}</span>
                    </NuxtLinkLocale>
                  </li>
                  <li id="menu-item-10"
                      class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-10">
                    <NuxtLinkLocale to="/products/briquetting-press">
                      <span class="menu-title">{{ $t('products.briquetting_press') }}</span>
                    </NuxtLinkLocale>
                  </li>
                  <li id="menu-item-11"
                      class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-11">
                    <NuxtLinkLocale to="/products/scrap-shear">
                      <span class="menu-title">{{ $t('products.scrap_shear') }}</span>
                    </NuxtLinkLocale>
                  </li>
                  <li id="menu-item-8"
                      class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-8">
                    <NuxtLinkLocale to="/products/scrap-shredder">
                      <span class="menu-title">{{ $t('products.scrap_shredder') }}</span>
                    </NuxtLinkLocale>
                  </li>
                </ul>
              </li>
              <li class="menu-item menu-item-has-children ">

                <NuxtLinkLocale to="/application/application">
                  <span class="menu-title">{{ $t('menu.application') }}</span>
                </NuxtLinkLocale>
                <ul class="sub-menu">
                  <li id="menu-item-20"
                      class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-20">
                    <NuxtLinkLocale to="/application/scrap-metal-compression">
                      <span class="menu-title">{{ $t('application.scrap_metal_compression') }}</span>
                    </NuxtLinkLocale>
                  </li>
                  <li id="menu-item-21"
                      class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-21">
                    <NuxtLinkLocale to="/application/metal-chips-shavings-turnings-compression">
                      <span class="menu-title">{{ $t('application.metal_chips_compression') }}</span>
                    </NuxtLinkLocale>

                  </li>
                  <li id="menu-item-22"
                      class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-22">
                    <NuxtLinkLocale to="/application/scrap-metal-cutting-shear">
                          <span class="menu-title">{{ $t('application.scrap_metal_cutting_shear') }}
													</span>
                    </NuxtLinkLocale>

                  </li>
                  <li id="menu-item-23"
                      class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-23">
                    <NuxtLinkLocale to="/application/light-scrap-shredding-crushing">
                          <span class="menu-title">{{ $t('application.light_scrap_shredding') }}
													</span>
                    </NuxtLinkLocale>

                  </li>

                </ul>
              </li>
              <li class="menu-item menu-item-has-children ">
                <NuxtLinkLocale to="/application/light-scrap-shredding-crushing">
                          <span class="menu-title">{{ $t('menu.service') }}
													</span>
                </NuxtLinkLocale>

                <ul class="sub-menu">
                  <li id="menu-item-30"
                      class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-30">
                    <NuxtLinkLocale to="/service/service#service01">
                      <span class="menu-title">{{ $t('service.planning_stage') }}</span>
                    </NuxtLinkLocale>

                  </li>
                  <li id="menu-item-31"
                      class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-31">
                    <NuxtLinkLocale to="/service/service#service02">
                      <span class="menu-title">{{ $t('service.technical_support') }}</span>
                    </NuxtLinkLocale>

                  </li>
                  <li id="menu-item-32"
                      class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-32">
                    <NuxtLinkLocale to="/service/service#service03">
                      <span class="menu-title">{{ $t('service.after_sale_support') }}</span>
                    </NuxtLinkLocale>

                  </li>

                </ul>
              </li>
              <li class="menu-item">

                <NuxtLinkLocale to="/contact">
                  <span>{{ $t('menu.contact') }}</span>
                </NuxtLinkLocale>
              </li>
              <li class="menu-item ">
                <div class="menu-lang" id="translate">
                      <span class="english" @click="changeLanguage('en')"
                            style="padding: 0 4px;">
                        <img style="width: 22px;height: 22px;" src="/images/l1.jpg">

                      </span>
                  <span class="trans" @click="changeLanguage('ru')"
                        style="padding: 0 4px;">
                        <img style="width: 22px;height: 22px;" src="/images/l2.jpg">
                      </span>
                  <span class="trans" @click="changeLanguage('esp')"
                     style="padding: 0 4px;">
                    <img style="width: 22px;height: 22px;" src="/images/l3.jpg">
                  </span>
                </div>
              </li>
              <li class="menu-item ">
                <a href="mailto:aaron@titan-recycling.com" rel="nofollow" aria-current="page"
                   itemprop="url" style="padding: 0 4px;padding-left: 20px;">
                  <i class="fa-regular fa-envelope"></i>
                  <span style="font-weight: 400;font-size: 14px;">
											E-mail
										</span>
                </a>
              </li>
              <li class="menu-item ">
                <a href="#" aria-current="page" itemprop="url"
                   style="padding: 0 4px;padding-left: 20px;">
                  <i class="fa fa-whatsapp"></i>
                  <span style="font-weight: 400;font-size: 14px;">+86-18913530891</span>
                </a>
              </li>

            </ul>


          </nav>
        </div>
      </div>
    </header>
  </div>


</template>

<script setup>
// 1. 首先在顶层调用所有组合式API（这是必须的）
import { loadExternalScripts } from '~/utils/utils'
import { useRouter, useRoute } from 'vue-router'
const { locale, setLocale } = useI18n()
const route = useRoute()
const router = useRouter()

// 2. 在顶层定义cookie（不能在函数内部定义）
const langCookie = useCookie('i18n_redirected', {
  path: '/',
  maxAge: 365 * 24 * 60 * 60, // 1年有效期
  sameSite: 'lax',
  secure: process.env.NODE_ENV === 'production'
})

/**
 * 切换语言并同步更新路由
 * @param {string} lang - 目标语言代码 (如 'en', 'zh')
 */
const changeLanguage = async (lang) => {
  try {

    if (!route || !router) {
      throw new Error('路由对象未初始化');
    }

    // 1. 如果目标语言与当前相同，直接返回
    if (locale.value === lang) return;

    // 2. 更新 i18n 语言状态
    await setLocale(lang);


    langCookie.value = lang;

    // 4. 安全获取路由名称
    const routeName = route.name || router.currentRoute.value?.name;

    // 5. 降级处理方案
    if (!routeName) {
      console.warn('路由名称不可用，使用路径导航');
      return router.push(lang === 'en' ? '/' : `/${lang}`);
    }

    // 6. 构建新路由对象
    const newRoute = {
      name: routeName,
      params: { ...(route.params || {}) },
      query: { ...(route.query || {}) },
      hash: route.hash || ''
    };

    // 7. 处理语言参数
    if (lang === 'en') {
      // 移除语言参数
      Object.keys(newRoute.params).forEach(key => {
        if (key.toLowerCase() === 'lang') {
          delete newRoute.params[key];
        }
      });
    } else {
      // 添加语言参数
      newRoute.params = { lang, ...newRoute.params };
    }

    // 8. 执行导航
    await router.replace(newRoute);

    // 9. 强制更新状态
    locale.value = lang;

  } catch (error) {
    console.error('语言切换失败:', error);
    const fallbackLang = useCookie('i18n_redirected').value || 'en';
    await setLocale(fallbackLang);
    locale.value = fallbackLang;
  }
};

// 4. 生命周期和路由监听（放在最后）
// onMounted(() => {
//   loadExternalScripts()
// })

router.afterEach(() => {
  // 触发全局事件，通知路由已切换
  loadExternalScripts()
})

</script>

