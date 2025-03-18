import { jwtDecode } from 'jwt-decode'
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
  useMemo,
} from 'react'
import { useNavigate } from 'react-router-dom'
import { Role } from '../utils/api'

interface AuthContextType {
  token: string | null
  roles: Role[]
  setToken: (token: string | null) => void
  logout: () => void
}

interface DecodedToken {
  email: string
  roles: Role[]
  exp: number
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const navigate = useNavigate()
  const [token, setToken] = useState<string | null>(
    localStorage.getItem('token')
  )

  function logout() {
    setToken(null)
    localStorage.removeItem('token')
    navigate('/')
  }

  const roles = useMemo(() => {
    if (!token) return []
    try {
      const decoded = jwtDecode<DecodedToken>(token)
      return decoded.roles || []
    } catch (error) {
      console.error('Failed to decode token:', error)
      return []
    }
  }, [token])

  useEffect(() => {
    if (token) {
      try {
        const decoded = jwtDecode<DecodedToken>(token)
        const currentTime = Math.floor(Date.now() / 1000)
        if (decoded.exp < currentTime) {
          console.warn('Token expired. Logging out.')
          logout()
        } else {
          localStorage.setItem('token', token)
        }
      } catch (error) {
        console.error('Invalid token:', error)
        logout()
      }
    } else {
      localStorage.removeItem('token')
    }
  }, [token])

  return (
    <AuthContext.Provider value={{ token, roles, setToken, logout }}>
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
