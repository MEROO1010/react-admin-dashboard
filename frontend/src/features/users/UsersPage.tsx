import { useState } from "react"
import { User } from "@/types/user"
import { usersService } from "./users.service"
import UserForm from "./UserForm"
import { Button } from "@/components/layout/ui/Button"
import { Table, THead, TBody, TR, TH, TD } from "@/components/layout/ui/Table"
import { useFetch } from "@/hooks/useFetch"

export default function UsersPage() {
  const { data, loading } = useFetch<User[]>(usersService.getAll)
  const [users, setUsers] = useState<User[]>([])
  const [editing, setEditing] = useState<User | null>(null)
  const [sortBy, setSortBy] = useState<"name" | "email">("name")

  if (data && users.length === 0) setUsers(data)

  const handleAdd = async (user: Omit<User, "id">) => {
    const newUser = await usersService.create(user)
    setUsers((prev) => [...prev, newUser])
  }

  const handleUpdate = async (user: User) => {
    await usersService.update(user)
    setUsers((prev) => prev.map((u) => (u.id === user.id ? user : u)))
    setEditing(null)
  }

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure?")) return
    await usersService.delete(id)
    setUsers((prev) => prev.filter((u) => u.id !== id))
  }

  const sortedUsers = [...users].sort((a, b) =>
    a[sortBy].localeCompare(b[sortBy])
  )

  if (loading) return <p className="p-6">Loading users...</p>

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Users</h1>

      <UserForm
        onSubmit={editing ? handleUpdate : handleAdd}
        initialData={editing}
      />

      {users.length === 0 ? (
        <p className="text-gray-500">No users found</p>
      ) : (
        <Table>
          <THead>
            <TR>
              <TH
                className="cursor-pointer"
                onClick={() => setSortBy("name")}
              >
                Name
              </TH>
              <TH
                className="cursor-pointer"
                onClick={() => setSortBy("email")}
              >
                Email
              </TH>
              <TH>Actions</TH>
            </TR>
          </THead>
          <TBody>
            {sortedUsers.map((u) => (
              <TR key={u.id}>
                <TD>{u.name}</TD>
                <TD>{u.email}</TD>
                <TD className="flex gap-2">
                  <Button
                    variant="secondary"
                    onClick={() => setEditing(u)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(u.id)}
                  >
                    Delete
                  </Button>
                </TD>
              </TR>
            ))}
          </TBody>
        </Table>
      )}
    </div>
  )
}