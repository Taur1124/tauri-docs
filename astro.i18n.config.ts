import { defineAstroI18nConfig } from 'astro-i18n'

export const defaultLang = {
  code: 'en',
  route: undefined,
}

export const nonDefaultLangs = [
  { code: 'fr', route: 'fr' },
  { code: 'zh-cn', route: 'zh-cn' },
  { code: 'ko', route: 'ko' },
  { code: 'it', route: 'it' },
]

export const langs = [defaultLang, ...nonDefaultLangs]

let translations = {}

Object.assign(translations, { en: 'src/i18n/en.json' })

export default defineAstroI18nConfig({
  defaultLangCode: defaultLang.code,
  supportedLangCodes: nonDefaultLangs.map((lang) => lang.code),
  showDefaultLangCode: false,
  translations,
})
