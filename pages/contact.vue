<template>
  <div className="wrapper">
    <div class="section-header" style="background-image:url(/images/news/bg1.jpg)">

      <Header/>

      <div class="sub-header">
        <div class="inner">
          <h2 class="current-title">{{ $t('menu.contact') }}</h2>
          <ol class="breadcrumbs" itemscope itemtype="">
            <li itemprop="itemListElement" itemscope itemtype="">
              <NuxtLinkLocale to="/">
                <a href="javascript:void(0)" itemprop="name">{{ $t('home') }}</a>
              </NuxtLinkLocale>
              <meta itemprop="position" content="1"/>
            </li>
            <i class="delimiter"></i>
            <li itemprop="itemListElement" itemscope itemtype="">

              <NuxtLinkLocale to="/contact">
                <a href="javascript:void(0)" itemprop="name">{{ $t('menu.contact') }}</a>
              </NuxtLinkLocale>
              <meta itemprop="position" content="2"/>
            </li>
            <i class="delimiter"></i>

          </ol>
        </div>
      </div>

    </div>

    <main>
      <div class="container">
        <section id="contact-1" class="section-item">
          <div class="section-contact">
            <div class="section-contact-content">
              <div class="section-contact-left">
                <p class="tit">{{ $t('contact.company_name') }}</p>
                <p class="note">{{ $t('contact.note') }}</p>
                <div class="cont">
                  <p><i class="fa fa-whatsapp"></i><label style="margin-left: 8px;" class="lang"
                                                          key="PHONE"></label>+86-18913530891</p>
                  <p><i class="fa fa-envelope-o"></i><label style="margin-left: 8px;" class="lang"
                                                            key="EMAIL"></label>aaron@titan-recycling.com</p>
                  <p><img style="width: 20px;height: 20px;" src="/images/address.png" alt="pre-consumer-scrap">
                    <label class="lang"
                           key="ADDRESS"></label>{{ $t('contact.address') }}
                  </p>
                </div>
              </div>
              <div class="section-contact-right">
                <div class="amesipu">
                  <input type="hidden" name="id" id="id" value="message">
                  <div class="am-cf item">
                    <div class="iput">
                      <input type="text" name="name" id="name" v-model="form.name"
                             :placeholder="$t('message_box.name_placeholder')">
                      <div class="bitian">*</div>
                    </div>

                    <div class="iput">
                      <input type="text" name="tel" id="tel" v-model="form.phone"
                             :placeholder="$t('message_box.phone_placeholder')">
                      <div class="bitian">*</div>
                    </div>

                  </div>

                  <div class="am-cf">
                    <div class="iput">
                      <input type="text" name="email" id="email" v-model="form.email"
                             :placeholder="$t('message_box.email_placeholder')">

                    </div>
                    <div class="iput">
                                        <textarea rows="5" type="text" id="content" name="content"
                                                  v-model="form.content"
                                                  :placeholder="$t('message_box.message_placeholder')"></textarea>
                    </div>

                  </div>

                  <div class="c-t-m-btn">
                    <button type="submit" id="tj" key="SUBMIT" @click="handleSubmit">{{
                        $t('message_box.submit')
                      }}
                    </button>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
    <Footer/>
  </div>

</template>

<script setup>
import {ref} from 'vue'
import {useI18n} from 'vue-i18n'

const {t} = useI18n()
// 表单数据
const form = ref({
  name: '',
  email: '',
  phone: '',
  content: ''
})
usePageSeo('contact')
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
  if (data.error_code === 10000) {
    alert(t('message_box.submit_success'))
    form.value = {
      name: '',
      email: '',
      phone: '',
      content: ''
    }
  }


}
</script>
