<template>
  <div className="wrapper">
    <div class="section-header" style="background-image:url(/images/news/bg1.jpg)">

      <Header/>


      <div class="sub-header">
        <div class="inner">
          <h2 class="current-title">{{ $t('about.title') }}</h2>
          <ol class="breadcrumbs" itemscope itemtype="">
            <li itemprop="itemListElement" itemscope itemtype="">
              <NuxtLinkLocale to="/">
                <a href="javascript:void(0)" itemprop="name">{{ $t('home') }}</a>
              </NuxtLinkLocale>
              <meta itemprop="position" content="1"/>
            </li>
            <i class="delimiter"></i>
            <li itemprop="itemListElement" itemscope itemtype="">
              <NuxtLinkLocale to="/about">
                <a href="javascript:void(0)" itemprop="name">{{ $t('about.title') }}</a>
              </NuxtLinkLocale>
              <meta itemprop="position" content="2"/>
            </li>
            <i class="delimiter"></i>

          </ol>
        </div>
      </div>

    </div>

    <!--    <Hero/>-->
    <main>
      <div class="container about-container inner wrapper-content">
        <div class="section-about">
          <h1>{{ $t('about.company_name') }}</h1>
          <h2>{{ $t('about.slogan') }}</h2>
          <div class="ny-abmain">
            <div>
              <img src="/images/about/about.jpg" alt="about"/>

              <p>
                {{ $t('about.description') }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer/>
  </div>

</template>
<script setup>
usePageSeo('about')
</script>

