import { ThemeProvider } from '@emotion/react'
import theme from './theme'
import { Container, CssBaseline } from '@mui/material'
import Login from './components/Login'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth='md'>
        <Login />
      </Container>
    </ThemeProvider>
  )
}

export default App
