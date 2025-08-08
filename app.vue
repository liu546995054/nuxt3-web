<template>
  <div>
<!--    <NuxtRouteAnnouncer />-->
    <NuxtPage/>
  </div>
</template>
<script setup>
import { onMounted } from 'vue';
// import { loadExternalScripts } from '~/composables/loadScripts';
import { loadExternalScripts } from '~/utils/utils'
// 应用首次挂载时加载，整个应用生命周期只执行一次
onMounted(async () => {
  try {
    await loadExternalScripts();
    console.log('外部脚本已全局加载完成');
    // 脚本加载完成后，可在这里初始化全局事件
    // 例如：initEvents();
  } catch (error) {
    console.error('脚本加载失败:', error);
  }
});
</script>