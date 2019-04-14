import Vue from 'vue';
import VueI18n from 'vue-i18n';
import locale from 'element-ui/lib/locale';
import enLocale from 'element-ui/lib/locale/lang/en';
import zhLocale from 'element-ui/lib/locale/lang/zh-CN';
import zh from './zh';
import en from './en';

const messages = {
  en: Object.assign(en, enLocale),
  zh: Object.assign(zh, zhLocale)
}
Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: localStorage.getItem('locale') || 'zh',
  messages
})

locale.i18n((key, value) => i18n.t(key, value))
export default i18n;