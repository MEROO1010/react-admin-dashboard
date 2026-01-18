export type OrderStatus = "pending" | "completed" | "cancelled"

export interface Order {
  id: number
  customer: string
  total: number
  status: OrderStatus
  date: string
}