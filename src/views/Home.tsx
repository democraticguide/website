import React from 'react'

import { useTranslation } from 'react-i18next'

import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Paper,
  Stack,
  Typography
} from '@mui/material'

import Topic from '../components/Topic'

export default function Home () {
  const { t } = useTranslation()

  return (
    <Stack spacing={2}>
      <Typography
        textAlign='center'
        variant='h1'
      >
        {t('common:name')}
      </Typography>
      <Typography
        textAlign='center'
        variant='subtitle1'
      >
        {t('home:learnMore')}
      </Typography>
      <Card>
        <CardHeader
          title={t('home:example.country')}
        />
        <CardContent>
          <Stack spacing={2}>
            <Paper elevation={2} sx={{ padding: 2 }}>
              {t('home:example.category')}
            </Paper>
            <Topic
              title={t('home:example.pineappleOnPizza')}
              description={t('home:example.pineappleOnPizzaDescription')}
              leftLabel={t('home:example.pineappleOnPizzaLeft')}
              rightLabel={t('home:example.pineappleOnPizzaRight')}
              currentPolicy='left'
            />
            <Divider />
            <Topic
              title={t('home:example.lizardPeople')}
              description={t('home:example.lizardPeopleDescription')}
              leftLabel={t('home:example.lizardPeopleLeft')}
              rightLabel={t('home:example.lizardPeopleRight')}
              currentPolicy='right'
            />
          </Stack>
        </CardContent>
      </Card>
      <Typography
        variant='body1'
        textAlign='center'
      >
        {t('home:nextSteps')}
      </Typography>
    </Stack>
  )
}
