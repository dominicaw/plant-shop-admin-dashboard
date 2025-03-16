import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import LocalFloristIcon from '@mui/icons-material/LocalFlorist'
import MenuIcon from '@mui/icons-material/Menu'
import PointOfSaleIcon from '@mui/icons-material/PointOfSale'
import { Box, Button, Divider, Drawer, IconButton } from '@mui/material'
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'
import { styled } from '@mui/material/styles'
import Toolbar from '@mui/material/Toolbar'
import * as React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import theme from '../../theme'
import Logo from '../Logo'
import User from '../User'

interface NavigationProps {
  children: React.ReactNode
}

interface NavigationItemProps {
  icon: React.ReactNode
  label: string
  to: string
}

const NavigationItem = ({ icon, label, to }: NavigationItemProps) => {
  return (
    <Button
      startIcon={icon}
      sx={{
        width: '100%',
        justifyContent: 'flex-start',
      }}
      color='primary'
      component={Link}
      to={to}
    >
      {label}
    </Button>
  )
}

export default function Navigation({ children }: NavigationProps) {
  const [open, setOpen] = useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position='fixed' open={open}>
        <Toolbar>
          <IconButton
            color='primary'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            edge='start'
            sx={[
              {
                mr: 2,
              },
              open && { display: 'none' },
            ]}
          >
            <MenuIcon />
          </IconButton>
          <Logo size='small' />
          <User firstName='Dominica' />
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: theme.palette.secondary.light,
            borderRight: 'none',
          },
        }}
        variant='persistent'
        anchor='left'
        open={open}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            padding: theme.spacing(0, 1),
            ...theme.mixins.toolbar,
            justifyContent: 'flex-end',
          }}
        >
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon sx={{ color: theme.palette.secondary.dark }} />
          </IconButton>
        </Box>
        <Divider sx={{ backgroundColor: theme.palette.secondary.main }} />
        <NavigationItem
          icon={<LocalFloristIcon />}
          label='Plants'
          to='/dashboard'
        />
        <NavigationItem icon={<PointOfSaleIcon />} label='Sales' to='/' />
      </Drawer>
      <Main open={open}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            padding: theme.spacing(0, 1),
            ...theme.mixins.toolbar,
            justifyContent: 'flex-end',
          }}
        />
        {children}
      </Main>
    </Box>
  )
}

const drawerWidth = 200

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean
}>(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  variants: [
    {
      props: ({ open }) => open,
      style: {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      },
    },
  ],
}))

interface AppBarProps extends MuiAppBarProps {
  open?: boolean
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme }) => ({
  boxShadow: 'none',
  background: theme.palette.background.paper,
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}))
