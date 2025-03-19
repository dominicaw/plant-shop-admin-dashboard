import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

export default function RedirectIfUnauthenticated() {
  const { token } = useAuth()

  if (!token) {
    return <Navigate to='/' replace />
  }

  return <Outlet />
}
