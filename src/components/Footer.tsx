import React from 'react'

import { useTranslation } from 'react-i18next'

import {
  Container,
  Divider,
  Stack,
  Typography
} from '@mui/material'

export default function Footer () {
  const { t } = useTranslation()

  return (
    <Stack
      component='footer'
      sx={{
        marginBlockStart: 'auto',
        display: 'flex'
      }}
    >
      <Divider />
      <Container sx={{ paddingBlock: 2 }}>
        <Typography variant='body1' align='center'>
          &copy; {t('common:name')} {new Date().getFullYear()}
        </Typography>
      </Container>
    </Stack>
  )
}
