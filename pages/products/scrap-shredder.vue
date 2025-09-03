<template>
  <div className="wrapper">
    <div class="section-header" style="background-image:url(/images/products/product/bg1.jpg)">

      <Header/>


      <div class="sub-header">
        <div class="inner">
          <h2 class="current-title">{{ $t('products.scrap_shredder') }}</h2>
          <ol class="breadcrumbs" itemscope itemtype="">
            <li itemprop="itemListElement" itemscope itemtype="">
              <NuxtLinkLocale to="/">
                <a itemprop="item" href="javascript:void(0)"><span itemprop="name">{{ $t('home') }}</span></a>
              </NuxtLinkLocale>
              <meta itemprop="position" content="1"/>
            </li>
            <i class="delimiter"></i>
            <li itemprop="itemListElement" itemscope itemtype="">
              <NuxtLinkLocale to="/products/product">
                <a itemprop="item" href="javascript:void(0)">
                  <span itemprop="name">{{ $t('menu.products') }}</span></a>
              </NuxtLinkLocale>
              <meta itemprop="position" content="2"/>
            </li>
            <i class="delimiter"></i>
            <li itemprop="itemListElement" itemscope itemtype="">
              <NuxtLinkLocale to="/products/scrap-shredder">
                <a itemprop="item" href="javascript:void(0)">
                  <span itemprop="name">{{ $t('products.scrap_shredder') }}</span></a>
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
      <div class="container container-product">
        <div class="inner wrapper-content">
          <div class="column-fluid">
            <div class="content">
              <article
                  class="product type-product status-publish format-standard has-post-thumbnail hentry product_cat-tablets product_tag-laptops product_tag-macbook product_tag-macos">


                <div class="product-summary-wrapper">
                  <div class="product-summary">
                    <h1 class="product-title entry-title" itemprop="name headline">
                      {{ $t('products_content.scrap_shredder[0]') }}
                    </h1>
                    <div class="product-meta-list" itemprop="description">

                      <p>{{ $t('products_content.scrap_shredder[1]') }}</p>
                      <p>{{ $t('products_content.scrap_shredder[2]') }}</p>
                      <p>{{ $t('products_content.scrap_shredder[3]') }}</p>
                    </div>
                  </div>
                </div>

                <div class="single-product-gallery">
                  <div class="product-gallery-zoom">
                    <div class="product-image">
                      <img src="/images/products/scrap-shredder/fm.jpg" class="xzoom" itemprop="image"
                           alt="Blue Fitness Tracker with Heart Rate Monitor and Step Counter">
                    </div>
                  </div>

                </div>


                <!-- ProductSummary end -->
                <div class="clearfix"></div>

                <!-- ProductContent begin -->
                <div id="anchor-fix-tabs" class="woocommerce-tabs wc-tabs-wrapper">
                  <div class="tabs-list">
                    <div class="inner">
                      <ul class="tabs wc-tabs" role="tablist">
                        <li class="active">{{ $t('products_content.scrap_shredder[4]') }}</li>
                        <li>{{ $t('products_content.scrap_shredder[5]') }}</li>
                        <li>{{ $t('products_content.scrap_shredder[6]') }}</li>
                        <li>{{ $t('products_content.scrap_shredder[7]') }}</li>
                      </ul>
                    </div>
                  </div>
                  <div class="product-content">
                    <div id="anchor-0" class="entry entry-content" style="display:block">


                      <h2>{{ $t('products_content.scrap_shredder[8]') }}</h2>
                      <img :src="$t('products_content.scrap_shredder[10]') " alt="TechnicalParameter" />
                      <h2>{{ $t('products_content.scrap_shredder[9]') }}
                      </h2>
                      <img :src="$t('products_content.scrap_shredder[11]') " alt="TechnicalParameter" />
                    </div>
                    <div class="entry entry-content" style="display:none">
                      <div class="swiper-container slideshow-container">
                        <div class="swiper-wrapper">


                          <div class="swiper-slide">
                            <a href="javascript:void(null)">
                              <img src="/images/products/scrap-shredder/Gallery/5196238_1618557451.jpg" alt="scrap-shredder">
                            </a>
                          </div>
                          <div class="swiper-slide">
                            <a href="javascript:void(null)">
                              <img src="/images/products/scrap-shredder/Gallery/5196239_1618557451.jpg" alt="scrap-shredder">
                            </a>
                          </div>
                          <div class="swiper-slide">
                            <a href="javascript:void(null)">
                              <img src="/images/products/scrap-shredder/Gallery/5196240_1618557452.jpg" alt="scrap-shredder">
                            </a>
                          </div>
                          <div class="swiper-slide">
                            <a href="javascript:void(null)">
                              <img src="/images/products/scrap-shredder/Gallery/5196241_1618557452.jpg" alt="scrap-shredder">
                            </a>
                          </div>
                          <div class="swiper-slide">
                            <a href="javascript:void(null)">
                              <img src="/images/products/scrap-shredder/Gallery/5196242_1618557452.jpg" alt="scrap-shredder">
                            </a>
                          </div>

                        </div>
                        <div class="swiper-pagination home-slider-swiper-pagination"></div>
                        <div class="opacity65 swiper-button-next home-slider-swiper-button-next">
                        </div>
                        <div class="opacity65 swiper-button-prev home-slider-swiper-button-prev">
                        </div>
                      </div>

                    </div>
                    <div class="entry entry-content" style="display: none;">
                      <video controls="controls" height="auto"
                             src="/videos/scrap-shredder/scrap-shredder.mp4"
                             width="100%"></video>
                    </div>
                    <div id="anchor-0" class="entry entry-content" style="display:none">
                      <img src="/images/products/scrap-shredder/WorkingAtCustomersSites/worksite.jpg" alt="WorkingAtCustomersSites" />
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
usePageSeo('scrapShredder')
</script>
<style scoped>

</style>
