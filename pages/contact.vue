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
                      <input type="text" name="name" id="name" :placeholder="$t('message_box.name_placeholder')">
                      <div class="bitian">*</div>
                    </div>

                    <div class="iput">
                      <input type="text" name="tel" id="tel" :placeholder="$t('message_box.phone_placeholder')">
                      <div class="bitian">*</div>
                    </div>

                  </div>

                  <div class="am-cf">
                    <div class="iput">
                      <input type="text" name="email" id="email" :placeholder="$t('message_box.email_placeholder')">

                    </div>
                    <div class="iput">
                                        <textarea rows="5" type="text" id="content" name="content"
                                                  :placeholder="$t('message_box.message_placeholder')"></textarea>
                    </div>

                  </div>

                  <div class="c-t-m-btn">
                    <button type="submit" id="tj" key="SUBMIT">{{ $t('message_box.submit') }}</button>
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
usePageSeo('contact')
</script>
