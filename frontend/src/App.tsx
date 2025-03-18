import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from '@emotion/react'
import theme from './theme'
import { Container, CssBaseline } from '@mui/material'
import { BrowserRouter } from 'react-router'
import Router from './router'
import { AuthProvider } from './context/AuthContext'

const queryClient = new QueryClient()

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Container maxWidth='md'>
            <BrowserRouter>
              <Router />
            </BrowserRouter>
          </Container>
        </ThemeProvider>
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App
