<template>
  <nav class="main-menu" itemscope itemtype="">
    <div class="mobi-title">
      <span>{{ $t('menu_title') }}</span>
      <a class="mobi-menu-close"><i class="fa fa-times"></i></a>
    </div>
    <ul id="main-nav-menu" class="nav-menu">
      <li class="menu-item menu-item-has-children">
        <NuxtLinkLocale to="/products/product">{{ $t('menu.products') }}</NuxtLinkLocale>
        <ul class="sub-menu">
          <li><NuxtLinkLocale to="/products/baling-press">{{ $t('products.baling_press') }}</NuxtLinkLocale></li>
          <li><NuxtLinkLocale to="/products/briquetting-press">{{ $t('products.briquetting_press') }}</NuxtLinkLocale></li>
          <li><NuxtLinkLocale to="/products/scrap-shear">{{ $t('products.scrap_shear') }}</NuxtLinkLocale></li>
          <li><NuxtLinkLocale to="/products/scrap-shredder">{{ $t('products.scrap_shredder') }}</NuxtLinkLocale></li>
        </ul>
      </li>
      <li class="menu-item menu-item-has-children">
        <NuxtLinkLocale to="/application/application">{{ $t('menu.application') }}</NuxtLinkLocale>
        <ul class="sub-menu">
          <li><NuxtLinkLocale to="/application/scrap-metal-compression">{{ $t('application.scrap_metal_compression') }}</NuxtLinkLocale></li>
          <li><NuxtLinkLocale to="/application/metal-chips-shavings-turnings-compression">{{ $t('application.metal_chips_compression') }}</NuxtLinkLocale></li>
          <li><NuxtLinkLocale to="/application/scrap-metal-cutting-shear">{{ $t('application.scrap_metal_cutting_shear') }}</NuxtLinkLocale></li>
          <li><NuxtLinkLocale to="/application/light-scrap-shredding-crushing">{{ $t('application.light_scrap_shredding') }}</NuxtLinkLocale></li>
        </ul>
      </li>
      <li class="menu-item menu-item-has-children">
        <NuxtLinkLocale to="/service/service">{{ $t('menu.service') }}</NuxtLinkLocale>
        <ul class="sub-menu">
          <li><NuxtLinkLocale to="/service/service#service01">{{ $t('service.planning_stage') }}</NuxtLinkLocale></li>
          <li><NuxtLinkLocale to="/service/service#service02">{{ $t('service.technical_support') }}</NuxtLinkLocale></li>
          <li><NuxtLinkLocale to="/service/service#service03">{{ $t('service.after_sale_support') }}</NuxtLinkLocale></li>
        </ul>
      </li>
      <li class="menu-item">
        <NuxtLinkLocale to="/contact">{{ $t('menu.contact') }}</NuxtLinkLocale>
      </li>
      <li class="menu-item">
        <a href="mailto:aaron@titan-recycling.com" rel="nofollow">
          <i class="fa fa-envelope-o"></i>
          <span>{{ $t('menu.email') }}</span>
        </a>
      </li>
      <li class="menu-item">
        <a href="#" >
          <i class="fa fa-whatsapp"></i>
          <span>+86-18913530891</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
// 可添加组件逻辑
</script>

<style scoped>
/* 样式代码 */
</style>
