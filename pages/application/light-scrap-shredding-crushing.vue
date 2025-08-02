<template>
  <div className="wrapper">
    <div class="section-header" style="background-image:url(/images/application/bg1.jpg)">

      <Header/>

      <div class="sub-header">
        <div class="inner">
          <h2 class="current-title">{{ $t('application.light_scrap_shredding') }}</h2>
          <ol class="breadcrumbs" itemscope itemtype="">
            <li itemprop="itemListElement" itemscope itemtype="">
              <NuxtLinkLocale to="/">
                <a itemprop="item" href="javascript:void(0)"><span itemprop="name">{{ $t('home') }}</span></a>
              </NuxtLinkLocale>
              <meta itemprop="position" content="1"/>
            </li>
            <i class="delimiter"></i>
            <li itemprop="itemListElement" itemscope itemtype="">
              <NuxtLinkLocale to="/application/application">
                <a itemprop="item" href="javascript:void(0)">
                  <span itemprop="name">{{ $t('menu.application') }}</span></a>
              </NuxtLinkLocale>
              <meta itemprop="position" content="2"/>
            </li>
            <i class="delimiter"></i>
            <li itemprop="itemListElement" itemscope itemtype="">
              <NuxtLinkLocale to="/application/light-scrap-shredding-crushing">
                <a itemprop="item" href="javascript:void(0)">
                  <span itemprop="name">{{ $t('application.light_scrap_shredding') }}</span></a>
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
      <div class="container container-product container-application">
        <div class="inner wrapper-content">
          <div class="column-fluid">
            <div class="content">
              <article
                  class="product type-product status-publish format-standard has-post-thumbnail hentry product_cat-tablets product_tag-laptops product_tag-macbook product_tag-macos">
                <div class="wrapper">
                  <h1 class="product-title entry-title" itemprop="name headline">
                    {{ $t('applicationContent.light_scrap_shredding[0]') }}
                  </h1>
                  <h1 class="product-title entry-title" itemprop="name headline">
                    {{ $t('applicationContent.light_scrap_shredding[1]') }}
                  </h1>
                  <h1 class="product-title entry-title" itemprop="name headline">
                    {{ $t('applicationContent.light_scrap_shredding[2]') }}
                  </h1>
                  <div class="single-product-gallery application">
                    <div class="product-gallery-zoom">
                      <div class="product-image">
                        <img src="/images/application/steel-scarp.png" class="xzoom" alt="steel-scarp">
                      </div>
                    </div>
                  </div>

                  <div class="product-summary-wrapper application">
                    <div class="product-summary">


                      <div class="product-meta-list" itemprop="description">
                        <p>● {{ $t('applicationContent.light_scrap_shredding[3]') }}</p>

                        <p>● {{ $t('applicationContent.light_scrap_shredding[4]') }} </p>

                        <p>● {{ $t('applicationContent.light_scrap_shredding[5]') }}</p>

                        <p>● {{ $t('applicationContent.light_scrap_shredding[6]') }} </p>

                        <p>● {{ $t('applicationContent.light_scrap_shredding[7]') }} </p>

                        <p>● {{ $t('applicationContent.light_scrap_shredding[8]') }}</p>

                        <p>● {{ $t('applicationContent.light_scrap_shredding[9]') }} </p>

                        <p>● {{ $t('applicationContent.light_scrap_shredding[10]') }} </p>

                        <p>● {{ $t('applicationContent.light_scrap_shredding[11]') }}</p>

                        <p>● {{ $t('applicationContent.light_scrap_shredding[12]') }} </p>

                        <p>● {{ $t('applicationContent.light_scrap_shredding[13]') }} </p>

                        <p>● {{ $t('applicationContent.light_scrap_shredding[14]') }} </p>

                        <p>● {{ $t('applicationContent.light_scrap_shredding[15]') }} </p>

                        <p>● {{ $t('applicationContent.light_scrap_shredding[16]') }} </p>

                        <p>● {{ $t('applicationContent.light_scrap_shredding[17]') }} </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="line"></div>
                <div>
                  <h1 class="product-title entry-title" itemprop="name headline">
                    {{ $t('applicationContent.light_scrap_shredding[18]') }}
                  </h1>
                  <div class="single-product-gallery application">
                    <div class="product-gallery-zoom">
                      <div class="product-image">
                        <img src="/images/application/shredded-scrap.png" class="xzoom" alt="shredded-scrap">
                      </div>
                    </div>
                  </div>
                </div>
              </article>


            </div>
          </div>


        </div>
      </div>
    </main>
    <Footer/>
  </div>

</template>

<script setup>
usePageSeo('lightScrapShreddingCrushing')
</script>
