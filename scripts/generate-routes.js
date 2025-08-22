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
    //新闻
    // const news = ['news'];

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
        // 服务路由：默认语言无前缀
        // news.forEach(service => {
        //     if (locale === defaultLocale) {
        //         routes.push(`/news/${service}`); // en: /service/xxx
        //     } else {
        //         routes.push(`/${locale}/news/${service}`); // 其他: /esp/service/xxx
        //     }
        // });
    });

    console.log('修正后的路由列表:', routes);
    return routes;
}


