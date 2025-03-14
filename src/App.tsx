import { ThemeProvider } from '@emotion/react'
import theme from './theme'
import { Container, CssBaseline } from '@mui/material'
import { BrowserRouter } from 'react-router'
import Router from './router'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth='md'>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  )
}

export default App
