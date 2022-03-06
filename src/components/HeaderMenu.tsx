
import React from 'react'

import {
  Menu,
  IconButton
} from '@mui/material'

interface Props {
  icon: React.ReactNode,
  children?: React.ReactNode
}

export default function HeaderMenu (props: Props) {
  const [anchor, setAnchor] = React.useState<null | HTMLElement>(null)
  const open = anchor !== null

  return (<>
    <IconButton
      sx={{ color: 'primary.contrastText' }}
      onClick={(event) => setAnchor(event.currentTarget)}
      aria-controls={open ? 'basic-menu' : undefined}
      aria-haspopup='true'
      aria-expanded={open ? 'true' : undefined}
    >
      {props.icon}
    </IconButton>
    <Menu
      anchorEl={anchor}
      open={open}
      onClose={() => setAnchor(null)}

    >
      {props.children}
    </Menu>
  </>)
}
