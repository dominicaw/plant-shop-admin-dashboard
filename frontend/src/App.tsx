import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from '@emotion/react'
import theme from './theme'
import { Container, CssBaseline } from '@mui/material'
import { BrowserRouter } from 'react-router'
import Router from './router'
import { AuthProvider } from './context/AuthContext'

const queryClient = new QueryClient()

export default function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container maxWidth='md'>
              <Router />
            </Container>
          </ThemeProvider>
        </AuthProvider>
      </QueryClientProvider>
    </BrowserRouter>
  )
}
