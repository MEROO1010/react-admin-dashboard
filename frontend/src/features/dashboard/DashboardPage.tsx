
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts"
import { Card } from "@/components/ui/Card"
import StatsCards from "./dashboard/components/StatsCard"

const data = [
  { name: "Jan", orders: 30 },
  { name: "Feb", orders: 50 },
  { name: "Mar", orders: 80 }
]

export default function DashboardPage() {
  return (
    <div className="space-y-8 fade-in">
      <div>
        <h1 className="text-3xl font-bold text-slate-800">
          Dashboard
        </h1>
        <p className="text-slate-500 mt-1">
          Overview of your system
        </p>
      </div>

      <StatsCards />

      <Card>
        <h2 className="text-lg font-semibold mb-4">
          Orders Growth
        </h2>

        <ResponsiveContainer width="100%" height={280}>
          <LineChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="orders"
              stroke="#4F46E5"
              strokeWidth={3}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </Card>
    </div>
  )
}
