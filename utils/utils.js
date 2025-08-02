// ~/composables/loadScripts.js
export const loadExternalScripts = () => {
    return new Promise((resolve) => {
        // 移除已存在的脚本（避免重复加载）
        ['jquery-script', 'zwebs-script'].forEach(id => {
            const existing = document.getElementById(id);
            if (existing) existing.remove();
        });

        // 加载 jQuery
        const jquery = document.createElement('script');
        jquery.id = 'jquery-script';
        jquery.src = '/js/jquery.min.js';
        jquery.onload = () => {
            // 加载 zwebs.js（确保顺序）
            const zwebs = document.createElement('script');
            zwebs.id = 'zwebs-script';
            zwebs.src = '/js/zwebs.js';
            zwebs.onload = resolve;
            document.body.appendChild(zwebs);
        };
        document.body.appendChild(jquery);
    });
};