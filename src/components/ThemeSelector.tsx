import React from 'react'

import { useTranslation } from 'react-i18next'

import {
  Button,
  ButtonGroup,
  MenuItem,
  Tooltip
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
      label={t('header:theme.chooseTheme')}
    >
      <MenuItem disabled={true}>
        {t('header:theme.chooseTheme')}
      </MenuItem>
      <ButtonGroup sx={{ margin: 1 }}>
        <Tooltip title={t('header:theme.light').toString()}>
          <Button
            onClick={() => setMode('light')}
            variant={mode === 'light' ? 'contained' : 'outlined'}
          >
            <BrightnessHigh />
          </Button>
        </Tooltip>
        <Tooltip title={t('header:theme.system').toString()}>
          <Button
            onClick={() => setMode('system')}
            variant={mode === 'system' ? 'contained' : 'outlined'}
          >
            <BrightnessMedium />
          </Button>
        </Tooltip>
        <Tooltip title={t('header:theme.dark').toString()}>
          <Button
            onClick={() => setMode('dark')}
            variant={mode === 'dark' ? 'contained' : 'outlined'}
          >
            <DarkMode />
          </Button>
        </Tooltip>
      </ButtonGroup>
    </HeaderMenu>
  )
}
