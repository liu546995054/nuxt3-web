<template>
  <div class="menu-lang" id="translate">
    <a class="english" @click="changeLanguage('english')">
      <img style="width: 22px;height: 22px;" src="~/assets/images/l1.jpg">
    </a>
    <a class="trans" @click="changeLanguage('russian')">
      <img style="width: 22px;height: 22px;" src="~/assets/images/l2.jpg">
    </a>
    <a class="trans" @click="changeLanguage('spanish')">
      <img style="width: 22px;height: 22px;" src="~/assets/images/l3.jpg">
    </a>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
/* 样式代码 */
</style>