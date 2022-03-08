import React from 'react'

import { useTranslation } from 'react-i18next'

import { Language } from '@mui/icons-material'
import { MenuItem } from '@mui/material'

import { languages } from '../services/i18n'

import HeaderMenu from './HeaderMenu'
import Flag from './Flag'

const nativeNames = new Map<string, string>([
  ['en', 'English'],
  ['pl', 'Polski']
])

export default function LanguageSelector () {
  const { t, i18n } = useTranslation()

  const options = Object.keys(languages).map((code: string) => {
    // Override some langauges with their flags

    return (
      <MenuItem
        sx={{
          '& > img': { marginInlineEnd: 1 }
        }}
        onClick={() => i18n.changeLanguage(code)}
        key={code}>
        <Flag code={code} />
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
