import en from '../locales/en.json'
import zhCN from '../locales/zh-cn.json'
import esp from '../locales/esp.json'
import ru from '../locales/ru.json'
import { currentLocales } from './i18n'

export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    availableLocales: currentLocales.map(l => l.code),
    fallbackLocale: 'en', // 区配不到的语言就用en
    messages: {
        en,
        esp,
        ru,
        'zh-cn': zhCN,
    }
}))


