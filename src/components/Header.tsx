import React from 'react'

import { useTranslation } from 'react-i18next'

import {
  AppBar,
  Box,
  Toolbar,
  Typography
} from '@mui/material'

import LanguageSelector from './LanguageSelector'
import ThemeSelector from './ThemeSelector'
import CountrySelector from './CountrySelector'

export default function Header () {
  const { t } = useTranslation()

  return (<>
    <AppBar
      position='fixed'
    >
      <Toolbar
        disableGutters
        sx={{
          display: 'flex',
          flexWrap: { xs: 'wrap', md: 'nowrap' }
        }}
      >
        <Typography
          variant='h2'
          sx={{
            marginInline: 2,
            marginBlock: 2,
            order: { sm: 1, md: 1 }
          }}
        >
          {t('common:name')}
        </Typography>
        <CountrySelector
          sx={{
            order: { xs: 3, md: 2 }
          }}
        />
        <Box
          sx={{
            order: { xs: 1, md: 3 },
            marginInline: 2,
            display: 'flex',
            justifyContent: 'flex-end',
            marginInlineStart: { xs: 'auto', md: 2 }
          }}
        >
          <ThemeSelector />
          <LanguageSelector />
        </Box>
      </Toolbar>
    </AppBar>
  </>)
}
