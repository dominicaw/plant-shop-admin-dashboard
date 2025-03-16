import { ThemeProvider } from '@emotion/react'
import theme from './theme'
import { Container, CssBaseline } from '@mui/material'
import { BrowserRouter } from 'react-router'
import Router from './router'
import { AuthProvider } from './context/AuthContext'

function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth='md'>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </Container>
      </ThemeProvider>
    </AuthProvider>
  )
}

export default App
