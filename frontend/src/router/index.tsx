import { Route, Routes } from 'react-router'
import LoginPage from '../pages/LoginPage'
import RedirectIfUnauthenticated from '../components/RedirectIfUnauthenticated'
import RedirectIfAuthenticated from '../components/RedirectIfAuthenticated'
import RedirectIfUnauthorised from '../components/RedirectIfUnauthorised'
import DashboardPage from '../pages/DashboardPage'
import AddPlantPage from '../pages/AddPlantPage'
import { Role } from '../utils/api'

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
      <Route element={<RedirectIfUnauthenticated />}>
        <Route path='/dashboard' element={<DashboardPage />} />
        <Route
          path='/add-plant'
          element={
            <RedirectIfUnauthorised allowedRoles={[Role.OWNER, Role.MANAGER]}>
              <AddPlantPage />
            </RedirectIfUnauthorised>
          }
        />
      </Route>
    </Routes>
  )
}
