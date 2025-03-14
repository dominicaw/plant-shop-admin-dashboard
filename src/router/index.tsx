import { Route, Routes } from 'react-router'
import LoginPage from '../pages/LoginPage'

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/dashboard' element={<LoginPage />} />
    </Routes>
  )
}
