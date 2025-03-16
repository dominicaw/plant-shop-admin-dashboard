import { Route, Routes } from 'react-router'
import LoginPage from '../pages/LoginPage'
import Dashboard from '../components/Dashboard'
import UnauthenticatedRedirect from '../components/UnauthenticatedRedirect'

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route
        path='/dashboard'
        element={
          <UnauthenticatedRedirect>
            <Dashboard />
          </UnauthenticatedRedirect>
        }
      />
    </Routes>
  )
}
