import React from 'react'

import {
  Box,
  Collapse,
  IconButton,
  Stack,
  Typography
} from '@mui/material'

import {
  ExpandLess,
  ExpandMore
} from '@mui/icons-material'
import Direction from './Direction'

interface Props {
  title: string
  description: string
  leftLabel: string
  rightLabel: string
  currentPolicy: 'left' | 'center' | 'right'
}

export default function Topic (props: Props) {
  const [show, setShow] = React.useState<boolean>(true)

  return (
    <Stack>
      <Typography variant='subtitle1'>
        {props.title}
        <IconButton onClick={() => setShow(open => !open)}>
          { show ? <ExpandLess /> : <ExpandMore /> }
        </IconButton>
      </Typography>
      <Collapse in={show} unmountOnExit>
        <Typography variant='body1'>
          {props.description}
        </Typography>
        <Stack
        direction='row'
        sx={{
          padding: 4,
          alignItems: 'flex-start',
          display: 'flex'
        }}
      >
        <Direction
          label={props.leftLabel}
          active={props.currentPolicy === 'left'}
        />
        <Box
          sx={{
            height: 0,
            // width: '100%',
            flexGrow: 4,
            backgroudColor: 'red',
            display: 'block',
            borderColor: (theme) => theme.palette.primary.main,
            margin: 2,
            borderWidth: 1,
            borderStyle: 'solid'
          }}
        />
        <Direction
          label={props.rightLabel}
          active={props.currentPolicy === 'right'}
        />
      </Stack>
      </Collapse>
    </Stack>
  )
}
