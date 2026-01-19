import { useState } from "react"
import { User } from "@/types/user"
import { Card } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"

interface Props {
  onSubmit: (data: Omit<User, "id"> | User) => void
  initialData?: User | null
}

export default function UserForm({ onSubmit, initialData }: Props) {
  const [name, setName] = useState(initialData?.name ?? "")
  const [email, setEmail] = useState(initialData?.email ?? "")

  return (
    <Card className="fade-in">
      <h2 className="text-lg font-semibold mb-4">
        {initialData ? "Edit User" : "Add User"}
      </h2>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm text-slate-600">
            Name
          </label>
          <input
            className="mt-1 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label className="text-sm text-slate-600">
            Email
          </label>
          <input
            className="mt-1 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>

      <div className="mt-6 flex justify-end">
        <Button
          onClick={() =>
            onSubmit(
              initialData
                ? { ...initialData, name, email }
                : { name, email }
            )
          }
        >
          {initialData ? "Update" : "Add"}
        </Button>
      </div>
    </Card>
  )
}
