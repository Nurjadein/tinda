import { ref, computed } from 'vue';
import allLocales from './index'; // your locale messages

type Messages = Record<string, string>;
type LocalesMap = Record<string, Messages>;

const messages: LocalesMap = (allLocales as unknown) as LocalesMap;

// Make locale reactive
const currentLocale = ref('en-US');

export function getLocale() {
  return currentLocale.value;
}

export function setLocale(locale: string) {
  if (messages[locale]) {
    currentLocale.value = locale;
  } else {
    console.warn(`[i18n] locale ${locale} not found`);
  }
}

// Return a computed reactive translation
export function t(key: string) {
  return computed(() => {
    const localeMessages = messages[currentLocale.value] ?? {};
    return localeMessages[key] ?? key;
  });
}
