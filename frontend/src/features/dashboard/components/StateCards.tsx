import { Card } from '@/components/ui/Card'

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card>Users: 120</Card>
      <Card>Orders: 87</Card>
      <Card>Revenue: $12,400</Card>
    </div>
  )
}