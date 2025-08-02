// 修改生成路由的逻辑，适配prefix_except_default策略
export function getPrerenderRoutes() {
    const defaultLocale = 'en'; // 与i18n默认语言一致
    const locales = ['en', 'esp', 'ru'];
    const routes = [];

    // 静态页面路由
    const staticPages = ['', 'about', 'contact'];
    // 产品路由
    const products = [
        'baling-press',
        'briquetting-press',
        'product',
        'scrap-shear',
        'scrap-shredder'
    ];
    // 应用路由
    const applications = [
        'application',
        'light-scrap-shredding-crushing',
        'metal-chips-shavings-turnings-compression',
        'scrap-metal-compression',
        'scrap-metal-cutting-shear'
    ];
    // 服务路由
    const services = ['service'];

    locales.forEach(locale => {
        // 静态页面：默认语言（en）无前缀，其他语言有前缀
        staticPages.forEach(page => {
            if (locale === defaultLocale) {
                // en的路由：无/en前缀
                routes.push(page === '' ? '/' : `/${page}`);
            } else {
                // 其他语言：有前缀
                routes.push(page === '' ? `/${locale}` : `/${locale}/${page}`);
            }
        });

        // 产品路由：默认语言无前缀
        products.forEach(product => {
            if (locale === defaultLocale) {
                routes.push(`/products/${product}`); // en: /products/xxx
            } else {
                routes.push(`/${locale}/products/${product}`); // 其他: /esp/products/xxx
            }
        });

        // 应用路由：默认语言无前缀
        applications.forEach(app => {
            if (locale === defaultLocale) {
                routes.push(`/application/${app}`); // en: /application/xxx
            } else {
                routes.push(`/${locale}/application/${app}`); // 其他: /esp/application/xxx
            }
        });

        // 服务路由：默认语言无前缀
        services.forEach(service => {
            if (locale === defaultLocale) {
                routes.push(`/service/${service}`); // en: /service/xxx
            } else {
                routes.push(`/${locale}/service/${service}`); // 其他: /esp/service/xxx
            }
        });
    });

    console.log('修正后的路由列表:', routes);
    return routes;
}

// 动态生成新闻详情页路由（从API获取ID）
async function generateNewsRoutes() {
    const defaultLocale = 'en';
    const locales = ['en', 'esp', 'ru'];
    const newsRoutes = [];

    try {
        // 1. 从API获取所有新闻ID（假设接口返回{ data: [{id:1}, {id:2}] }）
        const apiUrl = `${process.env.API_BASE_URL}/news/ids`;
        const response = await fetch(apiUrl);
        const { data: newsIds } = await response.json();

        // 2. 为每个新闻ID生成多语言路由
        newsIds.forEach(news => {
            locales.forEach(locale => {
                if (locale === defaultLocale) {
                    // 默认语言：无前缀，如 /news/1
                    newsRoutes.push(`/news/${news.id}`);
                } else {
                    // 其他语言：带前缀，如 /esp/news/1
                    newsRoutes.push(`/${locale}/news/${news.id}`);
                }
            });
        });

        return newsRoutes;
    } catch (error) {
        console.error('生成新闻路由失败:', error);
        return []; // 失败时返回空数组，避免打包报错
    }
}
