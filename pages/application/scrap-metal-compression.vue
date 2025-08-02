<template>
  <div className="wrapper">
    <div class="section-header" style="background-image:url(/images/application/bg1.jpg)">

      <Header/>


      <div class="sub-header">
        <div class="inner">
          <h2 class="current-title">{{ $t('application.scrap_metal_compression') }}</h2>
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
              <NuxtLinkLocale to="/application/scrap-metal-compression">
                <a itemprop="item" href="javascript:void(0)">
                  <span itemprop="name">{{ $t('application.scrap_metal_compression') }}</span></a>
              </NuxtLinkLocale>
              <meta itemprop="position" content="2"/>
            </li>
            <i class="delimiter"></i>

          </ol>
        </div>
      </div>

    </div>
    <main>
      <div class="container container-product container-application">
        <div class="inner wrapper-content">
          <div class="column-fluid">
            <div class="content">
              <article
                  class="product type-product status-publish format-standard has-post-thumbnail hentry product_cat-tablets product_tag-laptops product_tag-macbook product_tag-macos">
                <div class="wrapper">
                  <h1 class="product-title entry-title" itemprop="name headline">
                    {{ $t('applicationContent.scrap_metal_compression[0]') }}
                  </h1>
                  <h1 class="product-title entry-title" itemprop="name headline">
                    {{ $t('applicationContent.scrap_metal_compression[1]') }}
                  </h1>
                  <h1 class="product-title entry-title" itemprop="name headline">
                    {{ $t('applicationContent.scrap_metal_compression[2]') }}
                  </h1>
                  <div class="single-product-gallery application">
                    <div class="product-gallery-zoom">
                      <div class="product-image">
                        <img src="/images/application/post-consumer-scrap.png" class="xzoom" alt="post-consumer-scrap">
                      </div>
                    </div>
                  </div>

                  <div class="product-summary-wrapper application">
                    <div class="product-summary">


                      <div class="product-meta-list" itemprop="description">
                        <p>● {{ $t('applicationContent.scrap_metal_compression[3]') }}</p>
                        <p>● {{ $t('applicationContent.scrap_metal_compression[4]') }} </p>

                        <p>● {{ $t('applicationContent.scrap_metal_compression[5]') }}</p>

                        <p>● {{ $t('applicationContent.scrap_metal_compression[6]') }} </p>

                        <p>● {{ $t('applicationContent.scrap_metal_compression[7]') }} </p>

                        <p>● {{ $t('applicationContent.scrap_metal_compression[8]') }}</p>

                        <p>● {{ $t('applicationContent.scrap_metal_compression[9]') }} </p>

                        <p>● {{ $t('applicationContent.scrap_metal_compression[10]') }}</p>

                        <p>● {{ $t('applicationContent.scrap_metal_compression[11]') }} </p>

                        <p>● {{ $t('applicationContent.scrap_metal_compression[12]') }}</p>

                        <p>● {{ $t('applicationContent.scrap_metal_compression[13]') }}</p>

                        <p>● {{ $t('applicationContent.scrap_metal_compression[14]') }}e</p>

                        <p>● {{ $t('applicationContent.scrap_metal_compression[15]') }}</p>

                        <p>● {{ $t('applicationContent.scrap_metal_compression[16]') }}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="line"></div>
                <div>
                  <h1 class="product-title entry-title" itemprop="name headline">
                    {{ $t('applicationContent.scrap_metal_compression[17]') }}
                  </h1>
                  <div class="single-product-gallery application">
                    <div class="product-gallery-zoom">
                      <div class="product-image">
                        <img src="/images/application/pre-consumer-scrap.png" class="xzoom" alt="pre-consumer-scrap">
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
usePageSeo('HMS1&2ScrapMetalCompression')
</script>

