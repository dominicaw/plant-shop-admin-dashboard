import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

interface RedirectIfAuthenticatedProps {
  children: React.ReactNode
}

const RedirectIfAuthenticated: React.FC<RedirectIfAuthenticatedProps> = ({
  children,
}) => {
  const { token } = useAuth()

  return token ? <Navigate to='/dashboard' /> : <>{children}</>
}

export default RedirectIfAuthenticated
