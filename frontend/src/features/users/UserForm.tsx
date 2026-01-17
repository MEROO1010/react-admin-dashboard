import { useState } from "react"
import { Button } from "@/components/layout/ui/Button"

interface Props {
  onSubmit: (data: { name: string; email: string }) => void
}

export default function UserForm({ onSubmit }: Props) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !email) return

    onSubmit({ name, email })
    setName("")
    setEmail("")
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        className="border px-2 py-1 rounded w-40"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="border px-2 py-1 rounded w-48"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button type="submit">Add</Button>
    </form>
  )
}