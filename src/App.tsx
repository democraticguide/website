import React from 'react'

import './services/i18n'

import AppRouter from './AppRouter'
import { CssBaseline } from '@mui/material'
import ThemeProvider from './contexts/Theme'

export default function App () {
  return (
    <ThemeProvider>
      <CssBaseline />
      <AppRouter />
    </ThemeProvider>
  )
}
