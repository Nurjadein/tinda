import { ref } from 'vue';
import { getLocale, setLocale, t } from 'src/composables/useI18n';

export function useTranslate() {
  const currentLocale = ref(getLocale());

  function translate(lang: string) {
    setLocale(lang);
    currentLocale.value = lang;
  }

  function $t(key: string): string {
    return t(key).value;
  }

  return {
    currentLocale,
    translate,
    $t,
  };
}
