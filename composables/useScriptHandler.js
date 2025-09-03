// 用于清理旧状态和加载脚本的工具
export function useScriptHandler() {
    // 存储所有需要加载的脚本列表（按你的实际JS路径修改）
    const scripts = [
        // jQuery必须同步加载（defer: false）
        { src: '/js/jquery.min.js', body: true, defer: false },
        // { src: '/js/plugins/gsap.min.js', body: false, defer: false }, // 改为同步，确保先加载
        // { src: '/js/plugins/rs-scroll-trigger.min.js', body: false, defer: false }, // 依赖 gsap
        // { src: '/js/plugins/rs-anim-int.js', body: false, defer: true },

        // 其他脚本可以延迟加载
        { src: '/js/pagination.js', body: false, defer: true },
        { src: '/js/xzoom.min.js', body: false, defer: true },
        { src: '/js/zwebs.js', body: false, defer: true },

    ];

    // 清除所有旧事件和实例
    const clearOldState = () => {
        // 1. 移除所有已加载的脚本标签
        scripts.forEach(script => {
            const oldScript = document.querySelector(`script[src="${script.src}"]`);
            if (oldScript) oldScript.remove();
        });

        // 2. 解绑jQuery事件（关键！避免重复绑定）
        if (window.jQuery) {
            jQuery(window).off(); // 解绑window所有事件
            jQuery(document).off(); // 解绑document所有事件
            jQuery('body').off(); // 解绑body所有事件
            jQuery("a, button, .backtotop-wrap").off("mouseenter mouseleave");
        }

        // 3. 清理GSAP残留动画和ScrollTrigger
        if (window.gsap) {
            // 杀死所有GSAP动画
            gsap.killTweensOf("*");
            // 清除所有ScrollTrigger实例
            if (window.ScrollTrigger) {
                ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            }
        }


        // 移除鼠标移动事件监听（如果有全局引用）
        if (window.cursorMouseMove) {
            document.removeEventListener("mousemove", window.cursorMouseMove);
        }

        // 3. 清空全局变量（避免旧状态干扰）
        // window.runAllEffects = null;
        // 按需清空其他全局变量（如 window.Swiper 等）
    };

    // 重新加载所有脚本
    const reloadAllScripts = () => {
        return new Promise((resolve, reject) => {
            let loadedCount = 0;
            let errorOccurred = false;
            const totalScripts = scripts.length;

            if (totalScripts === 0) {
                resolve();
                return;
            }

            // 先移除页面中已存在的同名脚本，避免冲突
            scripts.forEach(script => {
                const existingScripts = document.querySelectorAll(`script[src="${script.src}"]`);
                existingScripts.forEach(el => el.remove());
            });

            scripts.forEach(script => {
                const newScript = document.createElement('script');
                newScript.src = script.src + '?t=' + Date.now(); // 添加时间戳防止缓存
                newScript.defer = script.defer;

                // 处理加载成功
                newScript.onload = () => {
                    if (errorOccurred) return;

                    loadedCount++;
                    if (loadedCount === totalScripts) {
                        resolve();
                    }
                };

                // 处理加载失败
                newScript.onerror = () => {
                    if (!errorOccurred) {
                        errorOccurred = true;
                        reject(new Error(`Failed to reload script: ${script.src}`));
                    }
                };

                // 根据配置决定插入到body还是head
                const targetElement = script.body ? document.body : document.head;
                targetElement.appendChild(newScript);
            });
        });
    };

    return { clearOldState, reloadAllScripts };
}