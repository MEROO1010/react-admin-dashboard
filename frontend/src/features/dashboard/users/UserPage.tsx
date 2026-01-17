import { useFetch } from "@/hooks/useFetch"
import { usersService } from "./users.service";

export default function UsersPage() {
  const { data: users, loading } = useFetch(usersService.getAll)

  if (loading) return <p>Loading...</p>

  return (
    <ul>
      {users?.map(u => (
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
  )
}