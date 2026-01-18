import { useEffect, useState } from "react"
import { User } from "@/types/user"
import { Button } from "@/components/ui/Button"

interface Props {
  onSubmit: (user: any) => void
  initialData?: User | null
}

export default function UserForm({ onSubmit, initialData }: Props) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  useEffect(() => {
    if (initialData) {
      setName(initialData.name)
      setEmail(initialData.email)
    }
  }, [initialData])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(
      initialData
        ? { ...initialData, name, email }
        : { name, email }
    )
    setName("")
    setEmail("")
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-3">
      <input
        className="border px-3 py-1 rounded"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        className="border px-3 py-1 rounded"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Button>{initialData ? "Update" : "Add"}</Button>
    </form>
  )
}
