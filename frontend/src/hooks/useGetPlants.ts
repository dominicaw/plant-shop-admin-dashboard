import { useQuery } from '@tanstack/react-query'
import { getPlants, Plant } from '../utils/api'

export default function useGetPlants() {
  return useQuery<Plant[], Error>({
    queryKey: ['plants'],
    queryFn: getPlants,
  })
}
