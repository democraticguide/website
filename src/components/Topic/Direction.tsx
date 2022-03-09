import React from 'react'

import {
  Stack,
  SxProps,
  Typography
} from '@mui/material'

import {
  Close,
  Done
} from '@mui/icons-material'

interface Props {
  label: string,
  active: boolean
  sx?: SxProps,
}

export default function Direction (props: Props) {
  return (
    <Stack
      spacing={2}
      sx={{
        ...props.sx,
        flexGrow: 1,
        alignItems: 'center',
        flexBasis: 0
      }}
    >
        { props.active ? <Done color='success'/> : <Close /> }
        <Typography>{props.label}</Typography>
    </Stack>
  )
}
