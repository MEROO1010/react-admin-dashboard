import orders from "@/data/orders.json"
import { Order } from "@/types/order"

let data: Order[] = orders as Order[]

export const ordersService = {
  async getAll(): Promise<Order[]> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(data), 500)
    })
  }
}