import React from 'react'

import { useMatch } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import {
  Alert,
  Card,
  CardContent,
  CardHeader,
  Stack,
  Typography
} from '@mui/material'

import useDataFetch from '../hooks/fetch'
import Flag from '../components/Flag'

interface Details {
  readonly language: string
  readonly name: string
  readonly description: string
  readonly capital: string
}

// TODO: Somehow load this from the JSON schema?
interface CountryData {
  readonly population: number
  /* eslint-disable camelcase */
  readonly population_year: number
  /* eslint-enable camelcase */
  readonly details: Details[]
}

export default function Country () {
  const { t, i18n } = useTranslation()
  const match = useMatch('/country/:country')
  const code = match?.params.country ?? ''
  const [data, loading, error] = useDataFetch<CountryData>('/country/' + (code))
  const [details, setDetails] = React.useState<Details | null>(null)
  const [languageNotFound, setLanguageNotFound] = React.useState<boolean>(false)

  React.useEffect(() => {
    if (!loading && data && !error) {
      const translatedDetails = data.details.find(({ language }) => language === i18n.language)
      if (translatedDetails) {
        setLanguageNotFound(false)
        setDetails(translatedDetails)
      } else {
        setLanguageNotFound(true)
        setDetails(data.details[0])
      }
    }
  }, [loading, t])

  if (error) {
    // If an error occurs for simplicity we just show a "not found" error
    // to the user, but we can dig a little deeper here.
    // TODO: Surface full fetch error.
    console.error(`Actual error fetching country data for ${code}: ${error}`)
    return (
      <Alert
        severity='error'
        sx={{ marginBlockEnd: 2 }}
      >
        {t('errors:countryNotFound')}
      </Alert>)
  }
  if (loading || !data) {
    return <div>Loading...</div>
  }

  return (<>
    {languageNotFound && (
      <Alert
        severity='error'
        sx={{ marginBlockEnd: 2 }}
      >
        {t('errors:languageNotFound')}
      </Alert>
    )}
    <Card>
      <CardHeader
        avatar={<Flag code={code} size={64} />}
        title={<Typography variant='h1'>{details?.name}</Typography>}
      />
      <CardContent>
        <Stack spacing={2}>
          <Typography>{details?.description}</Typography>
          <Typography>{t('country:population')}: {data.population} ({data.population_year})</Typography>
          <Typography>{t('country:capital')}: {details?.capital}</Typography>
        </Stack>
      </CardContent>
    </Card>
  </>)
}
