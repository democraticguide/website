import React from 'react'

import { useTranslation } from 'react-i18next'

import {
  Button,
  ButtonGroup,
  MenuItem
} from '@mui/material'

import {
  BrightnessHigh,
  BrightnessMedium,
  DarkMode
} from '@mui/icons-material'

import { ThemeContext } from '../contexts/Theme'

import HeaderMenu from './HeaderMenu'

export default function ThemeSelector () {
  const { t } = useTranslation()
  const [mode, setMode] = React.useContext(ThemeContext)

  return (
    <HeaderMenu
      icon={<BrightnessMedium />}
      label={t('header:chooseTheme')}
    >
      <MenuItem disabled={true}>
        {t('header:chooseTheme')}
      </MenuItem>
      <ButtonGroup sx={{ margin: 1 }}>
        <Button
          onClick={() => setMode('light')}
          variant={mode === 'light' ? 'contained' : 'outlined'}
        >
          <BrightnessHigh />
        </Button>
        <Button
          onClick={() => setMode('system')}
          variant={mode === 'system' ? 'contained' : 'outlined'}
        >
          <BrightnessMedium />
        </Button>
        <Button
          onClick={() => setMode('dark')}
          variant={mode === 'dark' ? 'contained' : 'outlined'}
        >
          <DarkMode />
        </Button>
      </ButtonGroup>
    </HeaderMenu>
  )
}
