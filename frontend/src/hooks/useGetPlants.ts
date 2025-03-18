import { useQuery } from '@tanstack/react-query'
import { getPlants, Plant } from '../utils/api'
import { useAuth } from '../context/AuthContext'

export default function useGetPlants() {
  const { token } = useAuth()

  return useQuery<Plant[], Error>({
    queryKey: ['plants'],
    queryFn: () => getPlants(token),
    enabled: !!token,
  })
}
