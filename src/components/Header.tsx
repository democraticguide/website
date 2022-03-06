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
      <Toolbar disableGutters>
        <Typography
          variant='h2'
          sx={{
            display: { xs: 'none', sm: 'block' },
            marginInline: 2,
            marginBlock: 1
          }}
        >
          {t('common:name')}
        </Typography>
        <CountrySelector />
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            marginInline: 2,
            flexGrow: 1
          }}
        >
          <ThemeSelector />
          <LanguageSelector />
        </Box>
      </Toolbar>
    </AppBar>
  </>)
}
