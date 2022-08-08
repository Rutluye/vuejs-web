import Vue from 'vue';
import VueI18n from 'vue-i18n';
import LocaleMessageObject = VueI18n.LocaleMessageObject;

import languageEn from "@/labels/languageEN";
import languageEs from "@/labels/languageES";
import languageFR from "@/labels/languageFR";

Vue.use(VueI18n);

const messages:{ [key: string]: LocaleMessageObject } = {
    en: languageEn,
    es: languageEs,
    fr: languageFR
}

export default new VueI18n({
    locale: 'en',
    messages: messages,
    fallbackLocale: 'es'
});
