import { useState } from "react"
import { ordersService } from "./orders.service"
import { Order, OrderStatus } from "@/types/order"
import { useFetch } from "@/hooks/useFetch"
import { usePagination } from "@/hooks/usePagination"
import { Table, THead, TBody, TR, TH, TD } from "@/components/ui/Table"
import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button"

export default function OrdersPage() {
  const { data, loading } = useFetch<Order[]>(ordersService.getAll)
  const orders: Order[] = data ?? []   // ⭐ الحل هنا

  const [status, setStatus] = useState<OrderStatus | "all">("all")
  const [page, setPage] = useState(1)

  const filtered: Order[] =
    status === "all"
      ? orders
      : orders.filter((o) => o.status === status)

  const { totalPages, getPage } = usePagination(filtered, 5)
  const pageData = getPage(page)

  if (loading) return <p className="p-6">Loading...</p>

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-semibold">Orders</h1>

      <select
        className="border px-3 py-2 rounded"
        value={status}
        onChange={(e) => {
          setStatus(e.target.value as OrderStatus | "all")
          setPage(1)
        }}
      >
        <option value="all">All</option>
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
        <option value="cancelled">Cancelled</option>
      </select>

      <Table>
        <THead>
          <TR>
            <TH>ID</TH>
            <TH>Customer</TH>
            <TH>Total</TH>
            <TH>Status</TH>
            <TH>Date</TH>
          </TR>
        </THead>
        <TBody>
          {pageData.map((o) => (
            <TR key={o.id}>
              <TD>{o.id}</TD>
              <TD>{o.customer}</TD>
              <TD>${o.total}</TD>
              <TD>
                <Badge
                  variant={
                    o.status === "completed"
                      ? "success"
                      : o.status === "pending"
                      ? "warning"
                      : "danger"
                  }
                >
                  {o.status}
                </Badge>
              </TD>
              <TD>{o.date}</TD>
            </TR>
          ))}
        </TBody>
      </Table>

      <div className="flex gap-2">
        {Array.from({ length: totalPages }).map((_, i) => (
          <Button
            key={i}
            variant={page === i + 1 ? "primary" : "secondary"}
            onClick={() => setPage(i + 1)}
          >
            {i + 1}
          </Button>
        ))}
      </div>
    </div>
  )
}