import { Route, Routes } from 'react-router'
import LoginPage from '../pages/LoginPage'
import Dashboard from '../components/Dashboard'
import RedirectIfUnauthenticated from '../components/RedirectIfUnauthenticated'
import RedirectIfAuthenticated from '../components/RedirectIfAuthenticated'

export default function Router() {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <RedirectIfAuthenticated>
            <LoginPage />
          </RedirectIfAuthenticated>
        }
      />
      <Route
        path='/dashboard'
        element={
          <RedirectIfUnauthenticated>
            <Dashboard />
          </RedirectIfUnauthenticated>
        }
      />
    </Routes>
  )
}
