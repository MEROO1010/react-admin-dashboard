import { useState } from "react"
import { useFetch } from "@/hooks/useFetch"
import { ordersService } from "./orders.service"
import { Order } from "@/types/order"
import { Table, THead, TBody, TR, TH, TD } from "@/components/ui/Table"

export default function OrdersPage() {
  const { data } = useFetch<Order[]>(ordersService.getAll)
  const [status, setStatus] = useState("all")
  const [page, setPage] = useState(1)
  const pageSize = 3

  const filtered =
    status === "all"
      ? data
      : data?.filter((o) => o.status === status)

  const paginated = filtered?.slice(
    (page - 1) * pageSize,
    page * pageSize
  )

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-semibold">Orders</h1>

      <select
        className="border px-2 py-1 rounded dark:bg-gray-800"
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="pending">Pending</option>
      </select>

      <Table>
        <THead>
          <TR>
            <TH>ID</TH>
            <TH>Status</TH>
            <TH>Total</TH>
          </TR>
        </THead>
        <TBody>
          {paginated?.map((o) => (
            <TR key={o.id}>
              <TD>{o.id}</TD>
              <TD>{o.status}</TD>
              <TD>${o.total}</TD>
            </TR>
          ))}
        </TBody>
      </Table>

      <div className="flex gap-2">
        <button onClick={() => setPage((p) => Math.max(p - 1, 1))}>
          Prev
        </button>
        <button onClick={() => setPage((p) => p + 1)}>
          Next
        </button>
      </div>
    </div>
  )
}