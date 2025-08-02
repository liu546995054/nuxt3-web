<template>
  <div className="wrapper">
    <div class="section-header" style="background-image:url(/images/application/bg1.jpg)">
      <Header/>
      <div class="sub-header">
        <div class="inner">
          <h2 class="current-title">{{ $t('menu.application') }}</h2>
          <ol class="breadcrumbs" itemscope itemtype="">
            <li itemprop="itemListElement" itemscope itemtype="">
              <NuxtLinkLocale to="/">
                <span itemprop="name">{{ $t('home') }}</span>
              </NuxtLinkLocale>
              <meta itemprop="position" content="1"/>
            </li>
            <i class="delimiter"></i>
            <li itemprop="itemListElement" itemscope itemtype="">
              <NuxtLinkLocale to="/application/application">
                <span itemprop="name">{{ $t('menu.application') }}</span>
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
                  {{ $t('applicationContent.first_desc') }}
                </p>

              </div>

              <!--产品一行数量-->
              <div class="gallery-container products-container gallery-columns-4">

                <figure class="item-content aos-init highlight aos-animate" data-aos="fade-up"
                        data-aos-delay="50">
                  <div class="item-grid-box">
                    <NuxtLinkLocale to="/application/scrap-metal-compression">
                      <a href="javascript:void(0)" title="HMS 1&2 Scrap Metal Compression">
                        <div class="item-cover">
                          <div class="attachment">
                            <div class="thumbnail">
                              <div class="centered">
                                <img width="300" height="300"
                                     src="/images/application/HMS.jpg"
                                     class="attachment-medium size-medium wp-post-image"
                                     loading="lazy" alt="HMS 1&2 Scrap Metal Compression"
                                     title="HMS 1&2 Scrap Metal Compression"/>
                              </div>
                            </div>
                          </div>
                          <i class="mask"></i>
                        </div>
                        <figcaption>
                          <h3>{{ $t('application.scrap_metal_compression')}}</h3>
                        </figcaption>
                      </a>
                    </NuxtLinkLocale>


                  </div>
                </figure>
                <figure class="item-content aos-init highlight aos-animate" data-aos="fade-up"
                        data-aos-delay="50">
                  <div class="item-grid-box">
                    <NuxtLinkLocale to="/application/metal-chips-shavings-turnings-compression">
                      <a href="javascript:void(0)"
                         title="Metal Chips/Shavings/Turnings Compression">
                        <div class="item-cover">
                          <div class="attachment">
                            <div class="thumbnail">
                              <div class="centered">
                                <img width="300" height="300"
                                     src="/images/application/product-Metal-Chips_Shavings_Turnings-Compression.jpg"
                                     class="attachment-medium size-medium wp-post-image"
                                     loading="lazy"
                                     alt="Metal Chips/Shavings/Turnings Compression"
                                     title="Metal Chips/Shavings/Turnings Compression"/>
                              </div>
                            </div>
                          </div>
                          <i class="mask"></i>
                        </div>
                        <figcaption>
                          <h3>{{ $t('application.metal_chips_compression')}}</h3>
                        </figcaption>
                      </a>
                    </NuxtLinkLocale>
                  </div>
                </figure>
                <figure class="item-content aos-init highlight aos-animate" data-aos="fade-up"
                        data-aos-delay="50">
                  <div class="item-grid-box">
                    <NuxtLinkLocale to="/application/scrap-metal-cutting-shear">
                      <a href="javascript:void(0)" title="Scrap Metal Cutting Shear">
                        <div class="item-cover">
                          <div class="attachment">
                            <div class="thumbnail">
                              <div class="centered">
                                <img width="300" height="300"
                                     src="/images/application/product-Scrap-Metal-Cutting-Shear.jpg"
                                     class="attachment-medium size-medium wp-post-image"
                                     loading="lazy" alt="Scrap Metal Cutting Shear"
                                     title="Scrap Metal Cutting Shear"/>
                              </div>
                            </div>
                          </div>
                          <i class="mask"></i>
                        </div>
                        <figcaption>
                          <h3>{{ $t('application.scrap_metal_cutting_shear')}}<</h3>
                        </figcaption>
                      </a>
                    </NuxtLinkLocale>
                  </div>
                </figure>
                <figure class="item-content aos-init highlight aos-animate" data-aos="fade-up"
                        data-aos-delay="50">
                  <div class="item-grid-box">
                    <NuxtLinkLocale to="/application/light-scrap-shredding-crushing">
                      <a href="javascript:void(0)" title="Light Scrap Shredding/Crushing">
                        <div class="item-cover">
                          <div class="attachment">
                            <div class="thumbnail">
                              <div class="centered">
                                <img width="300" height="300"
                                     src="/images/application/product-Light-Scrap-Shredding_Crushing.jpg"
                                     class="attachment-medium size-medium wp-post-image"
                                     loading="lazy" alt="Light Scrap Shredding/Crushing"
                                     title="Light Scrap Shredding/Crushing"/>
                              </div>
                            </div>
                          </div>
                          <i class="mask"></i>
                        </div>
                        <figcaption>
                          <h3>{{ $t('application.light_scrap_shredding')}}</h3>
                        </figcaption>
                      </a>
                    </NuxtLinkLocale>
                  </div>
                </figure>
              </div>

            </div>


          </div>
        </div>
      </div>
    </main>
    <Footer/>
  </div>

</template>

<script setup>
usePageSeo('application')
</script>

