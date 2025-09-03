// 监听路由切换，切换后重新执行特效
export default defineNuxtPlugin((nuxtApp) => {
    const { clearOldState, reloadAllScripts } = useScriptHandler();
    // 监听路由切换完成
    nuxtApp.hook('page:finish', async () => {
        // 第一步：清除旧事件/实例
        clearOldState();

        // 第二步：重新加载所有JS
        await reloadAllScripts();

        // setTimeout(() => {
        //     window.runAllEffects();
        //     window.initGSAPAnimations();
        // }, 100);
    });
});