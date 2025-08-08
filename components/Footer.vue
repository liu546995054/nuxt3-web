<template>
  <div class="footer" itemscope="" itemtype="">

    <div class="inner footer-widgets-area">
      <div class="foot-widgets">
        <section class="widget widget_text">
          <h3 class="widget-title">{{ $t('footer.quick_links') }}</h3>
          <div class="textwidget">
            <p>
              <NuxtLinkLocale to="/about">
                <span  aria-current="page" itemprop="url">{{ $t('footer.quick_links') }}</span>
              </NuxtLinkLocale>
            </p>

            <p>
              <NuxtLinkLocale to="/products/product">
                <span  aria-current="page" itemprop="url">{{ $t('menu.products') }}</span>
              </NuxtLinkLocale>
            </p>

            <p>
              <NuxtLinkLocale to="/application/application">
                <span  aria-current="page" itemprop="url">{{ $t('menu.application') }}</span>
              </NuxtLinkLocale>
            </p>

            <p>
              <NuxtLinkLocale to="/service/service">
                <span  aria-current="page" itemprop="url">{{ $t('menu.service') }}</span>
              </NuxtLinkLocale>
            </p>
            <p>
              <NuxtLinkLocale to="/news/news">
                <span aria-current="page" itemprop="url">{{ $t('menu.news') }}</span>
              </NuxtLinkLocale>
            </p>
            <p>
              <NuxtLinkLocale to="/contact">
                <span  aria-current="page" itemprop="url">{{ $t('menu.contact') }}</span>
              </NuxtLinkLocale>
            </p>
          </div>
        </section>
        <section class="widget widget_text">
          <h3 class="widget-title">{{ $t('menu.products') }}</h3>
          <div class="textwidget">

            <p>
              <NuxtLinkLocale to="/products/baling-press">
                <span aria-current="page" itemprop="url">{{ $t('products.baling_press') }}</span>
              </NuxtLinkLocale>
            </p>

            <p>
              <NuxtLinkLocale to="/products/briquetting-press">
                <span  aria-current="page" itemprop="url">{{ $t('products.briquetting_press') }}</span>
              </NuxtLinkLocale>
            </p>

            <p>
              <NuxtLinkLocale to="/products/scrap-shear">
                <span  aria-current="page" itemprop="url">{{ $t('products.scrap_shear') }}</span>
              </NuxtLinkLocale>
            </p>

            <p>
              <NuxtLinkLocale to="/products/scrap-shredder">
                <span  aria-current="page" itemprop="url">{{ $t('products.scrap_shredder') }}</span>
              </NuxtLinkLocale>
            </p>


          </div>
        </section>
        <section class="widget widget_text">
          <h3 class="widget-title">{{ $t('menu.application') }}</h3>
          <div class="textwidget">


            <p>
              <NuxtLinkLocale to="/application/scrap-metal-compression">
                <span  aria-current="page"
                   itemprop="url">{{ $t('application.scrap_metal_compression') }}</span>
              </NuxtLinkLocale>

            </p>

            <p>
              <NuxtLinkLocale to="/application/metal-chips-shavings-turnings-compression">
                <span  aria-current="page"
                   itemprop="url">{{ $t('application.metal_chips_compression') }}</span>
              </NuxtLinkLocale>

            </p>

            <p>

              <NuxtLinkLocale to="/application/scrap-metal-cutting-shear">
                <span  aria-current="page"
                   itemprop="url">{{ $t('application.scrap_metal_cutting_shear') }}</span>
              </NuxtLinkLocale>
            </p>

            <p>

              <NuxtLinkLocale to="/application/light-scrap-shredding-crushing">
                <span  aria-current="page"
                   itemprop="url">{{ $t('application.light_scrap_shredding') }}</span>
              </NuxtLinkLocale>
            </p>


          </div>
        </section>
        <section class="widget widget_text">
          <h3 class="widget-title">{{ $t('menu.service') }}</h3>
          <div class="textwidget">


            <p>
              <NuxtLinkLocale to="/service/service#service01">
                <span  aria-current="page" itemprop="url">{{ $t('service.planning_stage') }}</span>
              </NuxtLinkLocale>
            </p>

            <p>
              <NuxtLinkLocale to="/service/service#service02">
                <span  aria-current="page" itemprop="url">{{ $t('service.technical_support') }}</span>
              </NuxtLinkLocale>
            </p>

            <p>
              <NuxtLinkLocale to="/service/service#service03">
                <span  aria-current="page" itemprop="url">{{ $t('service.after_sale_support') }}</span>
              </NuxtLinkLocale>
            </p>

          </div>
        </section>
        <section class="widget widget_text">

          <h3 class="widget-title">{{ $t('menu.contact') }}</h3>
          <div class="textwidget">
            <p><strong><i class="fa fa-whatsapp"></i></strong> +86 18913530891</p>
            <p><strong><i class="fa fa-envelope-o"></i></strong><a href="mailto:aaron@titan-recycling.com"
                                                                   rel="nofollow">
              aaron@titan-recycling.com</a>
            </p>

            <p><strong><img src="/images/address.png"></strong>{{ $t('contact.address') }}</p>
          </div>
        </section>

      </div>
    </div>


    <!--右下角<div class=" message-form-box">-->
    <div class="message-form-box" id="messageBox">
      <div class="message-header radius-top">
				<span class="label">
					<i class="fa fa-commenting-o"></i>
				</span>
        <b>Leave a message</b>
        <span class="arrow-toggle">
					<i class="fa fa-angle-up"></i>
				</span>
      </div>
      <div class="message-form">

          <div class="wpcf7">
            <form
                action="#"
                method="post"
                class="wpcf7-form init"
                @submit.prevent="handleSubmit"
                name="Inquiry"
            >
              <p>
        <span class="wpcf7-form-control-wrap your-name">
          <input
              type="text"
              v-model="form.name"
              size="40"
              class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
              id="your-name"
              placeholder="Your Name (required)"
              required
          />
        </span>
              </p>

              <p>
        <span class="wpcf7-form-control-wrap your-email">
          <input
              type="email"
              v-model="form.email"
              size="40"
              class="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
              id="your-email"
              placeholder="Your Email (required)"
              required
          />
        </span>
              </p>

              <p>
        <span class="wpcf7-form-control-wrap your-phone">
          <input
              type="tel"
              v-model="form.tel"
              size="40"
              class="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-tel"
              id="your-phone"
              placeholder="Your Phone"
          />
        </span>
              </p>

              <p>
        <span class="wpcf7-form-control-wrap your-message">
          <textarea
              v-model="form.contents"
              cols="40"
              rows="10"
              class="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required"
              id="your-message"
              placeholder="Please fill in the details"
              required
          ></textarea>
        </span>
              </p>

              <p class="btn-submit">
                <input
                    type="submit"
                    value="Submit"
                    class="wpcf7-form-control wpcf7-submit"
                />
              </p>
            </form>
          </div>
      </div>
    </div>
    <a class="back-to-top ease radius" title="Scroll to top" rel="nofollow">
      <i class="fa fa-angle-up"></i>
    </a>
    <a class="back-to-top ease radius" title="Scroll to top" rel="nofollow"><i class="fa fa-angle-up"></i></a>
  </div>


</template>

<script setup>
import { ref } from 'vue'

// 表单数据
const form = ref({
  name: '',
  email: '',
  phone: '',
  message: ''
})


// 提交处理
const handleSubmit = () => {
  // 基本验证
  if (!form.value.name.trim()) {
    alert('Please enter your name')
    return
  }

  if (!form.value.email.trim()) {
    alert('Please enter your email')
    return
  }

  if (!form.value.message.trim()) {
    alert('Please fill in the details')
    return
  }

  // 这里可以添加实际的表单提交逻辑
  console.log('Form submitted:', form.value)

}

</script>



