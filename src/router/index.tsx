import { Route, Routes } from 'react-router'
import LoginPage from '../pages/LoginPage'
import Dashboard from '../components/Dashboard'

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
  )
}
