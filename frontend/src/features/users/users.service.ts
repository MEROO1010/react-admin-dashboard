import usersData from "@/data/users.json"
import { User } from "@/types/user"

let users: User[] = [...usersData]

export const usersService = {
  getAll: async (): Promise<User[]> => {
    return new Promise((res) => setTimeout(() => res(users), 300))
  },

  create: async (data: Omit<User, "id">): Promise<User> => {
    const newUser: User = {
      id: Date.now(),
      ...data
    }
    users.push(newUser)
    return newUser
  },

  update: async (user: User): Promise<void> => {
    users = users.map((u) => (u.id === user.id ? user : u))
  },

  delete: async (id: number): Promise<void> => {
    users = users.filter((u) => u.id !== id)
  }
}
