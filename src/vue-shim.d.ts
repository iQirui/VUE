import Vue from 'vue'
import VueI18n, { IVueI18n } from 'vue-i18n'
import { Message } from 'element-ui'
// 扩充
declare module 'vue/types/vue' {
  interface Vue {
    readonly $i18n: VueI18n & IVueI18n,
    $t: typeof VueI18n.prototype.t,
    $message: typeof Message
  }
}