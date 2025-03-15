import { Button, Menu, MenuItem } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person'
import React, { useState } from 'react'
import { convertPxToRem } from '../../utils'
import { shadows } from '../../theme'

interface UserProps {
  firstName: string
  lastName: string
  email: string
}

export default function User({ firstName, lastName, email }: UserProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  function onUserButtonClick(event: React.MouseEvent<HTMLButtonElement>) {
    setAnchorEl(event.currentTarget)
  }

  function onMenuClose() {
    setAnchorEl(null)
  }

  return (
    <div>
      <Button
        startIcon={<PersonIcon />}
        id='user-button'
        aria-controls={open ? 'user-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={onUserButtonClick}
        fullWidth
        color='primary'
        sx={{ textWrap: 'nowrap' }}
      >
        {firstName}
      </Button>
      <Menu
        id='user-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={onMenuClose}
        slotProps={{
          paper: {
            sx: {
              overflow: 'visible',
              boxShadow: shadows.lightest,
              mt: 1.5,
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                backgroundColor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          },
        }}
      >
        <MenuItem onClick={onMenuClose}>Profile</MenuItem>
        <MenuItem onClick={onMenuClose}>My account</MenuItem>
        <MenuItem onClick={onMenuClose}>Logout</MenuItem>
      </Menu>
    </div>
  )
}
