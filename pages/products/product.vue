<template>
  <div className="wrapper">
    <div class="section-header" style="background-image:url(/images/products/product/bg1.jpg)">

      <Header/>

      <div class="sub-header">
        <div class="inner">
          <h2 class="current-title">{{ $t('menu.products') }}</h2>
          <ol class="breadcrumbs" itemscope itemtype="">
            <li itemprop="itemListElement" itemscope itemtype="">
              <NuxtLinkLocale to="/">
                <span itemprop="name">{{ $t('home') }}</span>
              </NuxtLinkLocale>
              <meta itemprop="position" content="1"/>
            </li>
            <i class="delimiter"></i>
            <li itemprop="itemListElement" itemscope itemtype="">
              <NuxtLinkLocale to="/products/product">
                <span itemprop="name">{{ $t('menu.products') }}</span>
              </NuxtLinkLocale>
              <meta itemprop="position" content="2"/>
            </li>
          </ol>
        </div>
      </div>
    </div>

    <main>
      <div class="container container-product">
        <div class="inner wrapper-content">
          <div class="column-fluid">
            <!--通栏  <div class="content"> <div class="content fullwidth">-->
            <div class="content fullwidth">
              <div class="cat-desc">
                <p>
                  {{ $t('products_content.desc[0]') }}
                </p>
                <p>
                  {{ $t('products_content.desc[1]') }}
                </p>
                <p>
                  {{ $t('products_content.desc[2]') }}
                </p>
              </div>

              <!--产品一行数量-->
              <div class="gallery-container products-container gallery-columns-4">

                <figure class="item-content aos-init highlight aos-animate" data-aos="fade-up"
                        data-aos-delay="50">
                  <div class="item-grid-box">
                    <NuxtLinkLocale to="/products/baling-press">
                      <a href="javascript:void(0)" title="Y81 Series Scrap Metal Baling Machine">
                        <div class="item-cover">
                          <div class="attachment">
                            <div class="thumbnail">
                              <div class="centered">
                                <img width="300" height="300"
                                     src="/images/products/product/baling-press.png"
                                     class="attachment-medium size-medium wp-post-image"
                                     loading="lazy" alt="Y81 Series Scrap Metal Baling Machine"
                                     title="Y81 Series Scrap Metal Baling Machine"/>
                              </div>
                            </div>
                          </div>
                          <i class="mask"></i>
                        </div>
                        <figcaption>
                          <h3>{{ $t('products_content.desc[3]') }}</h3>
                        </figcaption>
                      </a>
                    </NuxtLinkLocale>
                  </div>
                </figure>
                <figure class="item-content aos-init highlight aos-animate" data-aos="fade-up"
                        data-aos-delay="50">
                  <div class="item-grid-box">
                    <NuxtLinkLocale to="/products/briquetting-press">
                      <a href="javascript:void(0)" title="Y83 series scrap chips briquetting press">
                        <div class="item-cover">
                          <div class="attachment">
                            <div class="thumbnail">
                              <div class="centered">
                                <img width="300" height="300"
                                     src="/images/products/product/briquetting-press.jpg"
                                     class="attachment-medium size-medium wp-post-image"
                                     loading="lazy"
                                     alt="Y83 series scrap chips briquetting press"
                                     title="Y83 series scrap chips briquetting press"/>
                              </div>
                            </div>
                          </div>
                          <i class="mask"></i>
                        </div>
                        <figcaption>
                          <h3>{{ $t('products_content.desc[4]') }}</h3>
                        </figcaption>
                      </a>
                    </NuxtLinkLocale>


                  </div>
                </figure>
                <figure class="item-content aos-init highlight aos-animate" data-aos="fade-up"
                        data-aos-delay="50">
                  <div class="item-grid-box">

                    <NuxtLinkLocale to="/products/scrap-shear">
                      <a href="javascript:void(0)" title="Q series scrap metal shear machine">
                        <div class="item-cover">
                          <div class="attachment">
                            <div class="thumbnail">
                              <div class="centered">
                                <img width="300" height="300"
                                     src="/images/products/product/scrap-shear.jpg"
                                     class="attachment-medium size-medium wp-post-image"
                                     loading="lazy" alt="Q series scrap metal shear machine"
                                     title="Q series scrap metal shear machine"/>
                              </div>
                            </div>
                          </div>
                          <i class="mask"></i>
                        </div>
                        <figcaption>
                          <h3>{{ $t('products_content.desc[5]') }}</h3>
                        </figcaption>
                      </a>
                    </NuxtLinkLocale>




                  </div>
                </figure>
                <figure class="item-content aos-init highlight aos-animate" data-aos="fade-up"
                        data-aos-delay="50">
                  <div class="item-grid-box">

                    <NuxtLinkLocale to="/products/scrap-shredder">
                      <a href="javascript:void(0)"  title="T series scrap metal shredder">
                        <div class="item-cover">
                          <div class="attachment">
                            <div class="thumbnail">
                              <div class="centered">
                                <img width="300" height="300"
                                     src="/images/products/product/scrap-shredder.jpg"
                                     class="attachment-medium size-medium wp-post-image"
                                     loading="lazy" alt="T series scrap metal shredder"
                                     title="T series scrap metal shredder"/>
                              </div>
                            </div>
                          </div>
                          <i class="mask"></i>
                        </div>
                        <figcaption>
                          <h3>{{ $t('products_content.desc[6]') }}</h3>
                        </figcaption>
                      </a>
                    </NuxtLinkLocale>




                  </div>
                </figure>
              </div>

            </div>

            <!--左侧栏目-->


          </div>
        </div>

      </div>
    </main>
    <Footer/>
  </div>

</template>
<script setup>
usePageSeo('products')
</script>
