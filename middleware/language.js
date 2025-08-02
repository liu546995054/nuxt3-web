export default defineNuxtRouteMiddleware(async (to, from) => {
    const { locale, setLocale } = useI18n()
    const langCookie = useCookie('i18n_redirected')

    // 1. 优先使用cookie中的语言设置
    if (langCookie.value && locale.value !== langCookie.value) {
        await setLocale(langCookie.value)
    }

    // 2. 检查路由中的语言参数是否匹配
    const routeLang = to.params.lang
    if (routeLang && routeLang !== locale.value) {
        await setLocale(routeLang)
        langCookie.value = routeLang
    }

    // 3. 如果是默认语言且URL中有语言前缀，重定向到无前缀URL
    if (locale.value === 'en' && routeLang) {
        const path = to.fullPath.replace(`/${routeLang}`, '') || '/'
        return navigateTo(path)
    }

    // 4. 如果是非默认语言且URL中没有语言前缀，重定向到有前缀URL
    if (locale.value !== 'en' && !routeLang) {
        return navigateTo(`/${locale.value}${to.fullPath}`)
    }
})
