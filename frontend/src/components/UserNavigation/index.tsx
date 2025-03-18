import { Button, Menu, MenuItem } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person'
import React, { useState } from 'react'
import { shadows } from '../../theme'
import { useAuth } from '../../context/AuthContext'
import { Role } from '../../utils/api'

export default function UserNavigation() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const { roles, logout } = useAuth()

  function onUserButtonClick(event: React.MouseEvent<HTMLButtonElement>) {
    setAnchorEl(event.currentTarget)
  }

  function onMenuClose() {
    setAnchorEl(null)
  }

  function getRoleText(): string {
    if (roles.includes(Role.OWNER)) {
      return 'Hi, Owner!'
    } else if (roles.includes(Role.MANAGER)) {
      return 'Hi, Manager!'
    } else if (roles.includes(Role.ASSISTANT)) {
      return 'Hi, Assistant!'
    }
    return 'Hi, User!'
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
        {getRoleText()}
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
        <MenuItem onClick={onMenuClose}>My account</MenuItem>
        <MenuItem onClick={logout}>Logout</MenuItem>
      </Menu>
    </div>
  )
}
