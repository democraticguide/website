
import React from 'react'

import {
  Menu,
  IconButton,
  Tooltip
} from '@mui/material'

interface Props {
  icon: React.ReactNode,
  label: string,
  children?: React.ReactNode
}

export default function HeaderMenu (props: Props) {
  const [anchor, setAnchor] = React.useState<null | HTMLElement>(null)
  const open = anchor !== null

  return (<>
    <Tooltip title={props.label}>
      <IconButton
        sx={{ color: 'primary.contrastText' }}
        onClick={(event) => setAnchor(event.currentTarget)}
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup='true'
        aria-label={props.label}
        aria-expanded={open ? 'true' : undefined}
      >
        {props.icon}
      </IconButton>
    </Tooltip>
    <Menu
      anchorEl={anchor}
      open={open}
      onClose={() => setAnchor(null)}
    >
      {props.children}
    </Menu>
  </>)
}
