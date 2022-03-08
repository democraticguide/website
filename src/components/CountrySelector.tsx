import React from 'react'

import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import {
  Autocomplete,
  Box,
  InputAdornment,
  TextField
} from '@mui/material'

import useDataFetch from '../hooks/fetch'
import { Search } from '@mui/icons-material'
import Flag from './Flag'

interface CountryOption {
  code: string
  label: string
}

interface CountryData {
  countries: string[]
}

export default function CountrySelector () {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [options, setOptions] = React.useState<CountryOption[]>([])
  const [inputValue, setInputValue] = React.useState<string>('')
  const [value, setValue] = React.useState<CountryOption | null>(null)

  const [data, loading, error] = useDataFetch<CountryData>('/countries')

  const expand = (code: string): CountryOption => {
    return { code, label: t(`countries:${code}`) }
  }

  React.useEffect(() => {
    setInputValue('')
    setValue(null)
    if (!loading && data && !error) {
      setOptions(data.countries.map((country: string) => expand(country)))
    }
  }, [loading, t])

  const viewCountry = (value: CountryOption | null) => {
    if (value) {
      setValue(value)
      navigate(`/country/${value.code}`)
    }
  }

  return (
    <Autocomplete
      disablePortal
      disabled={loading}
      options={options}
      fullWidth
      onChange={(_, value) => viewCountry(value)}
      onInputChange={(_, value) => { setInputValue(value) }}
      inputValue={inputValue}
      value={value}
      renderOption={(props, option) => (
        <Box
          { ...props}
          component='li'
          sx={{
            '& > img': { marginInlineEnd: 1 }
          }}
        >
          <Flag code={option.code} />
          {option.label}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          { ...params }

          placeholder={t('header:searchCountry')}
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            )
          }}

        />
      )}
      noOptionsText={t('header:noCountryFound')}
    />
  )
}
