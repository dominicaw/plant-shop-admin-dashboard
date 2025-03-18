import { Route, Routes } from 'react-router'
import LoginPage from '../pages/LoginPage'
import RedirectIfUnauthenticated from '../components/RedirectIfUnauthenticated'
import RedirectIfAuthenticated from '../components/RedirectIfAuthenticated'
import DashboardPage from '../pages/DashboardPage'

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
            <DashboardPage />
          </RedirectIfUnauthenticated>
        }
      />
    </Routes>
  )
}
