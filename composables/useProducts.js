import {computed, ref, watchEffect} from 'vue'
import {useI18n} from "vue-i18n";
// 产品基础数据（不含翻译）
const baseProducts = [
    {
        id: 'Y81',
        title: 'Y81 Series Scrap Metal Baling Machine',
        image: '/images/products/product/baling-press.png',
        link: '/products/baling-press'
    },
    {
        id: 'Y83',
        title: 'Y83 series scrap chips briquetting press',
        image: '/images/products/product/briquetting-press.jpg',
        link: '/products/briquetting-press'
    },
    {
        id: 'Q',
        title: 'Q series scrap metal shear machine',
        image: '/images/products/product/scrap-shear.jpg',
        link: '/products/scrap-shear'
    },
    {
        id: 'T',
        title: 'T series scrap metal shredder',
        image: '/images/products/product/scrap-shredder.jpg',
        link: '/products/scrap-shredder'
    }
]

export function useProducts() {
    const {t, locale} = useI18n({useScope: 'global'})
    const products = ref([])

    // 根据当前语言生成本地化产品数据
    watchEffect(() => {
        products.value = baseProducts.map(product => ({
            ...product,
            title: t(`productsList.${product.id}.title`),
        }))
    })

    return {
        products: computed(() => products.value)
    }
}

// composables/usePageSeo.ts
export const usePageSeo = (pageKey) => {
    const route = useRoute()
    const {messages, locale, t, availableLocales} = useI18n()
    const {$i18n} = useNuxtApp() // 获取 i18n 实例（9.x 版本的正确方式）

    // 关键：检查 i18n 实例是否初始化完成
    if (!($i18n && $i18n.getLocaleMessage)) {
        console.error('i18n 实例未初始化或不完整')
        return // 避免后续错误
    }

    // 获取 SEO 数据
    const seoData = computed(() => {
        let data = {}
        const desc = ['title', 'description', 'keywords']
        desc.map(key => {
            const value = t(`seo.${pageKey}.${key}`)
            if (value) {
                const add = {[key]: value}
                data = {...data, ...add}
            }
        })
        return data
    })

    // 生成 alternate URL（保持不变）
    const generateAlternateUrl = (targetLang) => {

        const baseUrl = 'https://web.prowebbuilding.com/' // 建议改为动态获取（如从环境变量）
        let path = route.path
        const langCookie = useCookie('i18n_redirected') // 获取语言 Cookie
        const currentLang = langCookie.value || 'en' // 优先用 Cookie，否则默认 'en'

        // 标准化路径（移除可能存在的当前语言前缀）
        if (currentLang && path.startsWith(`/${currentLang}`)) {
            path = path.replace(`/${currentLang}`, '')
        }
        path = path.replace(/^\/+/, '/') // 确保路径以单斜杠开头
        // 生成目标语言 URL
        return targetLang === 'en'
            ? `${baseUrl}${path}`          // 默认语言不加前缀
            : `${baseUrl}/${targetLang}${path}`
    }

    // 设置 head 标签
    useHead({
        title: seoData.value.title || '默认标题',
        meta: [
            {name: 'description', content: seoData.value.description || '默认描述'},
            {name: 'keywords', content: seoData.value.keywords || '默认关键词'},
        ],
        link: [
            {rel: 'alternate', hreflang: 'x-default', href: generateAlternateUrl('')},
            {rel: 'alternate', hreflang: 'en', href: generateAlternateUrl('en')},
            {rel: 'alternate', hreflang: 'esp', href: generateAlternateUrl('esp')},
            {rel: 'alternate', hreflang: 'ru', href: generateAlternateUrl('ru')}
        ]
    })
}
