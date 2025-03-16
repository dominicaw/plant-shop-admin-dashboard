import { Navigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

interface UnauthenticatedRedirectProps {
  children: React.ReactNode
}

export default function UnauthenticatedRedirect({
  children,
}: UnauthenticatedRedirectProps) {
  const { token } = useAuth()

  return token ? children : <Navigate to='/' />
}
