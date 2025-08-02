<template>
  <div className="wrapper">
    <div class="section-header" style="background-image:url(/images/products/product/bg1.jpg)">

      <Header/>

      <div class="sub-header">
        <div class="inner">
          <h2 class="current-title">{{ $t('menu.service') }}</h2>
          <ol class="breadcrumbs" itemscope itemtype="">
            <li itemprop="itemListElement" itemscope itemtype="">
              <NuxtLinkLocale to="/">
                <span itemprop="name">{{ $t('home') }}</span>
              </NuxtLinkLocale>
              <meta itemprop="position" content="1"/>
            </li>
            <i class="delimiter"></i>
            <li itemprop="itemListElement" itemscope itemtype="">
              <NuxtLinkLocale to="/service/service">
                <span itemprop="name">{{ $t('menu.service') }}</span>
              </NuxtLinkLocale>
              <meta itemprop="position" content="2"/>
            </li>
          </ol>
        </div>
      </div>
    </div>

    <main>
      <div class="container">

        <section id="service-1" class="section-item section-editor">
          <div class="section-service">
            <div class="tit">
              <p class="big">
                <strong> {{ $t('service_content.first_desc[0]') }}</strong>
              </p>
              <p class="small">
                <strong>{{ $t('service_content.first_desc[1]') }}</strong>
                {{ $t('service_content.first_desc[2]') }}
              </p>
              <p class="small">
                {{ $t('service_content.first_desc[3]') }}
              </p>
            </div>
            <div class="content">
              <div class="wrapper" id="service01">
                <img src="/images/products/product/1.jpg" alt="TITAN" />
                <div class="block">
                  <p class="tit">
                    <strong>{{ $t('service_content.first_desc[4]') }}</strong>
                  </p>
                  <p>
                    <strong>{{ $t('service_content.first_desc[5]') }}</strong>
                    {{ $t('service_content.first_desc[6]') }}.
                  </p>
                </div>
              </div>
              <div class="wrapper wrapper2"  id="service02">
                <img src="/images/products/product/2.jpg" alt="TITAN" />
                <div class="block">
                  <p class="tit">
                    <strong>{{ $t('service_content.first_desc[7]') }}</strong>
                  </p>
                  <p>
                    <strong>{{ $t('service_content.first_desc[8]') }}</strong>
                    {{ $t('service_content.first_desc[9]') }}
                  </p>
                </div>
              </div>
              <div class="wrapper"  id="service03">
                <img src="/images/products/product/3.jpg" alt="TITAN" />
                <div class="block">
                  <p class="tit">
                    <strong>{{ $t('service_content.first_desc[10]') }}</strong>
                  </p>
                  <p>
                    <strong>{{ $t('service_content.first_desc[11]') }}</strong>
                    {{ $t('service_content.first_desc[12]') }}
                  </p>
                  <p>
                    {{ $t('service_content.first_desc[13]') }}

                    <strong>{{ $t('service_content.first_desc[14]') }}</strong>
                    {{ $t('service_content.first_desc[15]') }}
                  </p>
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
usePageSeo('service')
</script>
