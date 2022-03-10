import React from 'react'

import {
  ThemeProvider as MuiThemeProvider,
  useMediaQuery,
  PaletteMode,
  CssBaseline
} from '@mui/material'

import {
  createTheme,
  responsiveFontSizes
} from '@mui/material/styles'
import * as Color from '@mui/material/colors'

export type Mode = 'light' | 'system' | 'dark'

export type ContextProps = [Mode, (preference: Mode) => void]

export const ThemeContext = React.createContext<ContextProps>([
  'system',
  () => {}
])

interface ProviderProps {
  children?: React.ReactNode
}

export default function ThemeProvider (props: ProviderProps) {
  const [mode, setMode] = React.useState<PaletteMode>(
    useMediaQuery('(prefers-color-scheme: light)') ? 'light' : 'dark')
  const [userPreference, setUserPreference] = React.useState<Mode>(
    () => localStorage.getItem('theme') as Mode ?? 'system')
  const mediaQueryPreference = useMediaQuery('(prefers-color-scheme: light)') ? 'light' : 'dark'

  const theme = React.useMemo(() => {
    const theme = createTheme({
      palette: {
        mode: mode,
        primary: {
          main: '#1976d2',
          contrastText: mode === 'light' ? '#000' : '#fff'
        },
        background: {
          default: mode === 'light' ? Color.grey[100] : Color.grey[900],
          paper: mode === 'light' ? Color.grey[50] : Color.grey[900]
        }
      },
      typography: {
        h1: { fontSize: '32' },
        h2: { fontSize: '24' },
        h3: { fontSize: '20' },
        h4: { fontSize: '16' }
      },
      shape: {
        borderRadius: 12
      },
      components: {
        MuiAppBar: {
          styleOverrides: {
            root: {
              background: 'transparent',
              backdropFilter: 'blur(1rem)'
            }
          }
        }
      }
    })
    return responsiveFontSizes(theme)
  }, [mode])

  React.useEffect(() => {
    localStorage.setItem('theme', userPreference)
    switch (userPreference) {
      case 'system':
        setMode(mediaQueryPreference)
        break
      default:
        setMode(userPreference)
    }
  }, [userPreference])

  React.useEffect(() => {
    document.querySelector('meta[name="theme-color"]')!
      .setAttribute('content', theme.palette.background.default)
  }, [mode])

  React.useEffect(() => {
    if (mediaQueryPreference !== mode && userPreference === 'system') {
      setMode(mediaQueryPreference)
    }
  }, [mediaQueryPreference])

  return (
    <ThemeContext.Provider
      value={[userPreference, setUserPreference]}
    >
      <MuiThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        {props.children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  )
}
