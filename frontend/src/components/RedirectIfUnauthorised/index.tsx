import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { Role } from '../../utils/api'

interface RedirectIfUnauthorisedProps {
  allowedRoles: Role[]
  children: React.ReactNode
}

export default function RedirectIfUnauthorised({
  allowedRoles,
  children,
}: RedirectIfUnauthorisedProps) {
  const { roles } = useAuth()
  const location = useLocation()

  const isAuthorised = roles.some((role) => allowedRoles.includes(role))

  if (!isAuthorised) {
    return <Navigate to='/dashboard' state={{ from: location }} replace />
  }

  return <>{children}</>
}
