import i18n, { Resource } from 'i18next'
import { initReactI18next } from 'react-i18next'

import LanguageDetector from 'i18next-browser-languagedetector'

import en from '../locales/en.json'
import pl from '../locales/pl.json'

export const languages: Readonly<Resource> = {
  en,
  pl
}

i18n.use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: languages,
    ns: ['common'],
    defaultNS: 'common',
    fallbackLng: 'en'
  })
