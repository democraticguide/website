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
  const [mode, setMode] = React.useState<PaletteMode>(useMediaQuery('(prefers-color-scheme: light)') ? 'light' : 'dark')
  const [userPreference, setUserPreference] = React.useState<Mode>(localStorage.getItem('theme') as Mode ?? 'system')

  const mediaQueryPreference = useMediaQuery('(prefers-color-scheme: light)') ? 'light' : 'dark'

  const updateMode = (preference: Mode) => {
    localStorage.setItem('theme', preference)
    setUserPreference(preference)
    switch (preference) {
      case 'system':
        setMode(mediaQueryPreference)
        break
      default:
        setMode(preference)
    }
  }

  React.useEffect(() => {
    if (mediaQueryPreference !== mode && userPreference === 'system') {
      setMode(mediaQueryPreference)
    }
  }, [mediaQueryPreference])

  const theme = React.useMemo(() => {
    const theme = createTheme({
      palette: {
        mode: mode,
        primary: {
          main: '#1976d2',
          contrastText: mode === 'light' ? '#000' : '#fff'
        }
      },
      typography: {
        h1: { fontSize: '32' },
        h2: { fontSize: '24' },
        h3: { fontSize: '20' },
        h4: { fontSize: '16' }
      },
      components: {
        MuiAppBar: {
          styleOverrides: {
            root: {
              backgroundColor: 'transparent',
              backdropFilter: 'blur(1rem)'
            }
          }
        }
      }
    })
    return responsiveFontSizes(theme)
  }, [mode])

  return (
    <ThemeContext.Provider
      value={[userPreference, updateMode]}
    >
      <MuiThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        {props.children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  )
}
