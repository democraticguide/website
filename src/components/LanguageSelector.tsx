import React from 'react'

import { Language } from '@mui/icons-material'
import { MenuItem } from '@mui/material'

import HeaderMenu from './HeaderMenu'
import { useTranslation } from 'react-i18next'
import { languages } from '../services/i18n'

const nativeNames = new Map<string, string>([
  ['en', 'English'],
  ['pl', 'Polski']
])

export default function LanguageSelector () {
  const { t, i18n } = useTranslation()

  const options = Object.keys(languages).map((code: string) => {
    // Override some langauges with their flags
    let displayCode = code
    switch (code) {
      case 'dev': return null
      case 'en': displayCode = 'gb'; break
    }
    return (
      <MenuItem
        sx={{
          '& > img': { marginInlineEnd: 1 }
        }}
        onClick={() => i18n.changeLanguage(code)}
        key={code}>
        <img
          loading='lazy'
          width='20'
          src={'https://flagcdn.com/' + displayCode.toLowerCase() + '.svg'}
          alt={code}
        />
        {nativeNames.get(code) ?? code}
      </MenuItem>
    )
  })

  return (
    <HeaderMenu icon={<Language color='inherit'/>}>
      <MenuItem disabled={true}>
        {t('header:chooseLanguage')}
      </MenuItem>
      {options}
    </HeaderMenu>
  )
}
