import orders from '@/data/orders.json'
import { Order } from '@/types/order'

export const ordersService = {
  getAll: async (): Promise<Order[]> =>
    new Promise(resolve => setTimeout(() => resolve(orders), 500)),
}