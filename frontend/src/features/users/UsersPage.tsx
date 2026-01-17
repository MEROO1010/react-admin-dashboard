import { useState } from "react"
import { useFetch } from "@/hooks/useFetch"
import { usersService } from "./users.service"
import { User } from "@/types/user"
import UserForm from "./UserForm"
import { Button } from "@/components/layout/ui/Button"

export default function UsersPage() {
  const { data, loading, } = useFetch<User[]>(usersService.getAll)
  const [users, setUsers] = useState<User[]>([])

  // sync local state once data loads
  if (data && users.length === 0) {
    setUsers(data)
  }

  const handleAddUser = async (user: { name: string; email: string }) => {
    const newUser = await usersService.create(user)
    setUsers((prev) => [...prev, newUser])
  }

  const handleDelete = async (id: number) => {
    await usersService.delete(id)
    setUsers((prev) => prev.filter((u) => u.id !== id))
  }

  if (loading) return <p>Loading users...</p>

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Users</h1>

      <UserForm onSubmit={handleAddUser} />

      <ul className="space-y-2">
        {users.map((u) => (
          <li
            key={u.id}
            className="flex justify-between items-center border p-2 rounded"
          >
            <span>
              {u.name} – {u.email}
            </span>
            <Button variant="danger" onClick={() => handleDelete(u.id)}>
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </div>
  )
}