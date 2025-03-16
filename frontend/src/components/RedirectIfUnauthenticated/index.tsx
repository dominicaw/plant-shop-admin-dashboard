import { Navigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

interface RedirectIfUnauthenticatedProps {
  children: React.ReactNode
}

export default function RedirectIfUnauthenticated({
  children,
}: RedirectIfUnauthenticatedProps) {
  const { token } = useAuth()

  return token ? children : <Navigate to='/' />
}
