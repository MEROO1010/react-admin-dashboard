import { useEffect, useState } from "react"
import { Button } from "@/components/layout/ui/Button"
import { User } from "@/types/user"

interface Props {
  onSubmit: (data: any) => void
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
    if (!name || !email) return

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
        className="border px-3 py-2 rounded w-40 dark:bg-gray-800"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="border px-3 py-2 rounded w-56 dark:bg-gray-800"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button>{initialData ? "Update" : "Add"}</Button>
    </form>
  )
}