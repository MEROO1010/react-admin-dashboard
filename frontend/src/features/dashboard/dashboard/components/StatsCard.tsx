import { Card } from "@/components/ui/Card"

export default function StatsCards() {
  const stats = [
    { label: "Users", value: 120 },
    { label: "Orders", value: 340 },
    { label: "Revenue", value: "$12,400" }
  ]

  return (
    <div className="grid md:grid-cols-3 gap-4">
      {stats.map(s => (
        <Card key={s.label}>
          <p className="text-sm text-gray-500">{s.label}</p>
          <p className="text-2xl font-bold">{s.value}</p>
        </Card>
      ))}
    </div>
  )
}