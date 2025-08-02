<template>
  <div className="wrapper">
    <div class="section-header" style="background-image:url(/images/application/bg1.jpg)">

      <Header/>

      <div class="sub-header">
        <div class="inner">
          <h2 class="current-title">{{ $t('application.scrap_metal_cutting_shear') }}</h2>
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
              <NuxtLinkLocale to="/application/scrap-metal-cutting-shear">
                <a itemprop="item" href="javascript:void(0)">
                  <span itemprop="name">{{ $t('application.scrap_metal_cutting_shear') }}</span></a>
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
                    {{ $t('applicationContent.scrap_metal_cutting_shear[0]') }}
                  </h1>
                  <h1 class="product-title entry-title" itemprop="name headline">
                    {{ $t('applicationContent.scrap_metal_cutting_shear[1]') }}
                  </h1>
                  <h1 class="product-title entry-title" itemprop="name headline">
                    {{ $t('applicationContent.scrap_metal_cutting_shear[2]') }}
                  </h1>
                  <div class="single-product-gallery application">
                    <div class="product-gallery-zoom">
                      <div class="product-image">
                        <img src="/images/application/scrap-steel-plant.png" class="xzoom" alt="scrap-steel-plant">
                      </div>
                    </div>
                  </div>

                  <div class="product-summary-wrapper application">
                    <div class="product-summary">


                      <div class="product-meta-list" itemprop="description">
                        <p>● {{ $t('applicationContent.scrap_metal_cutting_shear[3]') }}</p>
                        <p>● {{ $t('applicationContent.scrap_metal_cutting_shear[4]') }} </p>

                        <p>● {{ $t('applicationContent.scrap_metal_cutting_shear[5]') }}</p>

                        <p>● {{ $t('applicationContent.scrap_metal_cutting_shear[6]') }} </p>

                        <p>● {{ $t('applicationContent.scrap_metal_cutting_shear[7]') }} </p>

                        <p>● {{ $t('applicationContent.scrap_metal_cutting_shear[8]') }}</p>


                      </div>
                    </div>
                  </div>
                </div>
                <div class="line"></div>
                <div>
                  <h1 class="product-title entry-title" itemprop="name headline">
                    {{ $t('applicationContent.scrap_metal_cutting_shear[9]') }}
                  </h1>
                  <div class="single-product-gallery application">
                    <div class="product-gallery-zoom">
                      <div class="product-image">
                        <img src="/images/application/steel-rails.jpg" class="xzoom" alt="steel-rails">
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
usePageSeo('scrapMetalCuttingShear')
</script>
