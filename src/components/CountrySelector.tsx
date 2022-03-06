import React from 'react'

import { useNavigate, useMatch } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import {
  Autocomplete,
  Box,
  InputAdornment,
  TextField
} from '@mui/material'

import useDataFetch from '../hooks/fetch'
import { Search } from '@mui/icons-material'

interface CountryOption {
  code: string
  name: string
}

interface CountryData {
  countries: string[]
}

export default function CountrySelector () {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [options, setOptions] = React.useState<CountryOption[]>([])
  const matchCountry = useMatch('/country/:country')
  const [value, setValue] = React.useState<string>('')
  // const [defaultCountry, setDefaultCountry] = React.useState<CountryOption | null>(null)

  const [data, loading, error] = useDataFetch<CountryData>('/countries')

  React.useEffect(() => {
    if (!loading && data && !error) {
      setOptions(data.countries.map((country: string) => expand(country)))
    }
  }, [loading])

  React.useEffect(() => {
    if (matchCountry) {
      setValue(matchCountry.params.country ?? '')
    }
  }, [])

  const expand = (code: string): CountryOption => {
    return { code, name: t(`countries:${code}`) }
  }

  const viewCountry = (value: CountryOption | null) => {
    if (value) {
      navigate(`/country/${value.code}`)
    }
  }

  return (
    <Autocomplete
      disablePortal
      disabled={loading}
      options={options}
      fullWidth
      getOptionLabel={(option) => option.name}
      onChange={(_, value) => viewCountry(value)}
      onInputChange={(_, value) => { setValue(value) }}
      value={expand(value)}
      // defaultValue={defaultCountry}
      isOptionEqualToValue={(option, value) => option.code === value.code}
      renderOption={(props, option) => (
        <Box
          { ...props}
          component='li'
          sx={{
            '& > img': { marginInlineEnd: 1 }
          }}
        >
          <img
            loading='lazy'
            width='20'
            src={'https://flagcdn.com/' + option.code.toLowerCase() + '.svg'}
            alt={option.name}
          />
          {option.name}
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
