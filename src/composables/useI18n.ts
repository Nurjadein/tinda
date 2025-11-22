import { ref, computed } from 'vue'
import allLocales from '../i18n/index'; // your locale messages

type Messages = Record<string, string>
type LocalesMap = Record<string, Messages>

const messages: LocalesMap = allLocales as LocalesMap

// Load saved locale OR fallback to 'en-US'
const saved = localStorage.getItem('app-locale') || 'en-US'

const currentLocale = ref(saved)

export function getLocale() {
  return currentLocale.value
}

export function setLocale(locale: string) {
  if (messages[locale]) {
    currentLocale.value = locale
    localStorage.setItem('app-locale', locale)   // <-- save it!
  } else {
    console.warn(`[i18n] locale ${locale} not found`)
  }
}

export function t(key: string) {
  return computed(() => {
    const localeMessages = messages[currentLocale.value] ?? {}
    return localeMessages[key] ?? key
  })
}
