import { useFetch } from '@/hooks/useFetch'
import { ordersService } from './orders.service'

export default function OrdersPage() {
  const { data, loading } = useFetch(ordersService.getAll)

  if (loading) return <p>Loading...</p>

  return (
    <ul>
      {data?.map(o => (
        <li key={o.id}>{o.status}</li>
      ))}
    </ul>
  )
}