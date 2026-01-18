import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { name: "Users", value: 120 },
  { name: "Orders", value: 80 },
  { name: "Revenue", value: 2300 }
]

export default function StatsCards() {
  return (
    <div className="bg-white p-4 rounded shadow h-64">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <Tooltip />
          <Bar dataKey="value" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}