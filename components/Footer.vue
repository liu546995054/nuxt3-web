<template>
  <div class="footer" itemscope="" itemtype="">

    <div class="inner footer-widgets-area">
      <div class="foot-widgets">
        <section class="widget widget_text">
          <h3 class="widget-title">{{ $t('footer.quick_links') }}</h3>
          <div class="textwidget">
            <p>
              <NuxtLinkLocale to="/about">
                <span  aria-current="page" itemprop="url">{{ $t('footer.about') }}</span>
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
            <p><strong><i class="fa fa-whatsapp"></i></strong> +86 183 6080 9300</p>
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
    <div class="message-form-box" id="messageBox" style="z-index: 10">
      <div class="message-header radius-top">
				<span class="label">
					<i class="fa fa-commenting-o"></i>
				</span>
        <b>{{$t('message_box.title')}}</b>
        <span class="arrow-toggle">
					<i class="fa fa-angle-up"></i>
				</span>
      </div>
      <div class="message-form">

          <div class="wpcf7">
<!--            <form-->
<!--                class="wpcf7-form init"-->
<!--                @submit.prevent="handleSubmit"-->
<!--                name="Inquiry"-->
<!--            >-->
              <p>
        <span class="wpcf7-form-control-wrap your-name">
          <input
              type="text"
              v-model="form.name"
              size="40"
              class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
              :placeholder="$t('message_box.name_placeholder')"
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
              :placeholder="$t('message_box.email_placeholder')"
          />
        </span>
              </p>

              <p>
        <span class="wpcf7-form-control-wrap your-phone">
          <input
              type="tel"
              v-model="form.phone"
              size="40"
              class="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-tel"
              :placeholder="$t('message_box.phone_placeholder')"
          />
        </span>
              </p>

              <p>
        <span class="wpcf7-form-control-wrap your-message">
          <textarea
              v-model="form.content"
              cols="40"
              rows="10"
              class="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required"
              :placeholder="$t('message_box.message_placeholder')"
          ></textarea>
        </span>
              </p>

              <p class="btn-submit">
                <input
                    type="submit"
                    :value="$t('message_box.submit')"
                    class="wpcf7-form-control wpcf7-submit"
                    @click="handleSubmit"
                />
              </p>
<!--            </form>-->
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
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
// 表单数据
const form = ref({
  name: '',
  email: '',
  phone: '',
  content: ''
})


// 提交处理
const handleSubmit = async () => {
  // 基本验证
  if (!form.value.name.trim()) {
    alert(t('message_box.name_placeholder'))
    return
  }

  if (!form.value.email.trim()) {
    alert(t('message_box.email_placeholder'))
    return
  }
  if (form.value.email.trim() && !(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(form.value.email.trim()))) {
    alert(t('message_box.email_format'))
    return
  }

  if (!form.value.phone.trim()) {
    alert(t('message_box.phone_placeholder'))
    return
  }

  if (!form.value.content.trim()) {
    alert(t('message_box.message_placeholder'))
    return
  }

  const apiUrl = `https://api.titan-recycling.com/article/v1/client/comment/add`;

  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', // 指定JSON格式
    },
    body: JSON.stringify(form.value) // 序列化请求体
  });

  const data = await response.json();
  if (data.error_code === 10000){
    alert(t('message_box.submit_success'))
    form.value = {
      name: '',
      email: '',
      phone: '',
      content: ''
    }
    const messageFormBox = document.querySelector('.message-form-box');
    const messageForm = messageFormBox?.querySelector('.message-form');
    const messageHeader = messageFormBox?.querySelector('.message-header');
    const arrowToggle = messageHeader?.querySelector('.arrow-toggle i');
    if (messageForm.style.display !== 'block') return;

    // 获取当前高度（使用getBoundingClientRect更准确）
    const startHeight = messageForm.getBoundingClientRect().height;

    // 启动过渡动画
    messageForm.style.height = `${startHeight}px`;
    messageForm.style.overflow = 'hidden';

    // 强制重绘
    void messageForm.offsetHeight;

    // 执行收缩动画
    messageForm.style.transition = 'height 0.2s ease';
    messageForm.style.height = '0px';

    // 动画结束后重置状态
    const onTransitionEnd = () => {
      messageForm.style.display = 'none';
      messageForm.style.transition = '';
      messageForm.style.height = '';
      messageForm.removeEventListener('transitionend', onTransitionEnd);
    };
    messageForm.addEventListener('transitionend', onTransitionEnd);
  }



}

// 在组件的onMounted钩子中添加以下代码
onMounted(() => {
  // 获取DOM元素
  const messageFormBox = document.querySelector('.message-form-box');
  const messageForm = messageFormBox?.querySelector('.message-form');
  const messageHeader = messageFormBox?.querySelector('.message-header');
  const arrowToggle = messageHeader?.querySelector('.arrow-toggle i');

  if (!messageFormBox || !messageForm || !messageHeader || !arrowToggle) {
    console.warn('消息表单相关元素未找到');
    return;
  }

  // 初始隐藏表单
  messageForm.style.display = 'none';

  // 点击文档其他区域关闭表单
  document.addEventListener('click', () => {
    if (messageForm.style.display !== 'block') return;

    // 获取当前高度（使用getBoundingClientRect更准确）
    const startHeight = messageForm.getBoundingClientRect().height;

    // 启动过渡动画
    messageForm.style.height = `${startHeight}px`;
    messageForm.style.overflow = 'hidden';

    // 强制重绘
    void messageForm.offsetHeight;

    // 执行收缩动画
    messageForm.style.transition = 'height 0.2s ease';
    messageForm.style.height = '0px';

    // 动画结束后重置状态
    const onTransitionEnd = () => {
      messageForm.style.display = 'none';
      messageForm.style.transition = '';
      messageForm.style.height = '';
      messageForm.removeEventListener('transitionend', onTransitionEnd);
    };
    messageForm.addEventListener('transitionend', onTransitionEnd);
  });

  // 阻止消息表单容器的事件冒泡
  messageFormBox.addEventListener('click', (event) => {
    event.stopPropagation();
  });

  // 点击标题切换表单显示状态
  messageHeader.addEventListener('click', () => {
    const isHidden = messageForm.style.display === 'none';

    if (isHidden) {
      // 展开动画
      messageForm.style.display = 'block';
      const endHeight = messageForm.scrollHeight;

      // 启动过渡动画
      messageForm.style.height = '0px';
      messageForm.style.overflow = 'hidden';

      // 强制重绘
      void messageForm.offsetHeight;

      // 执行展开动画
      messageForm.style.transition = 'height 0.2s ease';
      messageForm.style.height = `${endHeight}px`;

      // 动画结束后清理
      const onTransitionEnd = () => {
        messageForm.style.transition = '';
        messageForm.style.height = '';
        messageForm.removeEventListener('transitionend', onTransitionEnd);
      };
      messageForm.addEventListener('transitionend', onTransitionEnd);
    } else {
      // 收缩动画（与文档点击事件相同）
      document.dispatchEvent(new Event('click'));
    }

    // 切换容器类名
    messageFormBox.classList.toggle('message-form-box-toggle');

    // 切换箭头图标
    arrowToggle.classList.toggle('fa-angle-down');
    arrowToggle.classList.toggle('fa-angle-up');
  });
});


</script>



