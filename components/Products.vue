<template>
  <section class="section products">
    <div class="container">
      <section id="hot-products-1" class="section-item section-products hot-products">
        <div class="inner">
          <div class="section-container">
            <h2 class="heading-title">
              <b>
                <NuxtLinkLocale to="/products/product">
                  <a href="javascript:void(0)"  title="Hot Products">{{ $t('home_product[0]') }}</a>
                </NuxtLinkLocale>

              </b>
              <span class="link-more">
                   <NuxtLinkLocale to="/products/product">
                  <a href="javascript:void(0)" >{{ $t('home_product[1]') }}</a>
                </NuxtLinkLocale>
							</span>
            </h2>
            <div class="section-editor">
              <div class="inner">
                <div class="section-container">
                  <div class="section-content section-title">
                    <p class="max70 aligncenter">
                      {{ $t('home_product[2]') }}
                    </p>
                    <p class="max70 aligncenter">
                      {{ $t('home_product[3]') }}
                      <strong>{{ $t('home_product[4]') }}</strong>
                      {{ $t('home_product[5]') }}
                    </p>
                    <p class="max70 aligncenter">{{ $t('home_product[6]') }}</p>
                  </div>
                </div>
              </div>
            </div>
            <div
                class="section-content gallery-container products-container gallery-columns-4 section-title">

              <figure class="item-content aos-init highlight aos-animate" data-aos="fade-up"
                      data-aos-delay="50" v-for="(product, index) in products" :key="index">
                <div class="item-grid-box" >
                  <NuxtLinkLocale :to="product.link">

                    <div class="item-cover">
                      <div class="attachment">
                        <div class="thumbnail">
                          <div class="centered">
                            <img width="300" height="300"
                                 :src="product.image"
                                 class="attachment-medium size-medium wp-post-image"
                                 loading="lazy" alt="Y81 Series Scrap Metal Baling Machine"
                                 title="Y81 Series Scrap Metal Baling Machine" />
                          </div>
                        </div>
                      </div>
                      <i class="mask"></i>
                    </div>
                    <figcaption>
                      <h3>{{ product.title }}</h3>
                    </figcaption>
                  </NuxtLinkLocale>
                </div>
              </figure>

            </div>
          </div>
        </div>
      </section>

    </div>
  </section>
</template>

<script setup>
import { useProducts } from '~/composables/useProducts'

const { products } = useProducts()
</script>

