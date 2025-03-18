import { jwtDecode } from 'jwt-decode'
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react'
import { Role } from '../utils/api'

interface AuthContextType {
  token: string | null
  roles: Role[]
  setToken: (token: string | null) => void
}

interface DecodedToken {
  email: string
  roles: Role[]
  exp: number
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem('token')
  )
  const [roles, setRoles] = useState<Role[]>([])

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token)
      try {
        const decoded = jwtDecode<DecodedToken>(token)
        setRoles(decoded.roles || [])
      } catch (error) {
        console.error('Invalid token:', error)
        setRoles([])
      }
    } else {
      localStorage.removeItem('token')
      setRoles([])
    }
  }, [token])

  return (
    <AuthContext.Provider value={{ token, roles, setToken }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
