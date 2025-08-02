const locales = [
    {
        code: 'en',
        file: 'en.json',
        name: 'English'
    },
    {
        code: 'esp',
        file: 'esp.json',
        name: 'Esp'
    },
    {
        code: 'ru',
        file: 'ru.json',
        name: 'Ru'
    }
]

export const currentLocales = locales
export const currentLocaleCodes = locales.map(l => l.code)

export default {
    legacy: false, // 必须禁用传统模式
    locale: 'en',
    fallbackLocale: 'en',
    messages: {}, // 留空即可，实际消息从 langDir 加载
    silentTranslationWarn: true // 禁用警告
}
