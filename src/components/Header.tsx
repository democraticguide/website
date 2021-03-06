import React from 'react'

import { useTranslation } from 'react-i18next'

import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  useScrollTrigger
} from '@mui/material'

import LanguageSelector from './LanguageSelector'
import ThemeSelector from './ThemeSelector'
import CountrySelector from './CountrySelector'

export default function Header () {
  const { t } = useTranslation()
  const scrolled = useScrollTrigger(
    { disableHysteresis: true, threshold: 4 }
  )

  return (<>
    <AppBar
      elevation={scrolled ? 4 : 0}
      position='fixed'
      sx={{
        background: 'inherit',
        // TODO: Get the border radius from the theme
        borderEndStartRadius: { xs: 12, md: 0 },
        borderEndEndRadius: { xs: 12, md: 0 },
        transition: (theme) => theme.transitions.create(['box-shadow', 'transform'], {
          duration: theme.transitions.duration.standard
        })
      }}
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
