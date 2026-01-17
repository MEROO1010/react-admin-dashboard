import usersData from "@/data/users.json"
import { User } from "@/types/user"

let users: User[] = [...usersData]

export const usersService = {
  getAll: async (): Promise<User[]> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(users), 500)
    })
  },

  create: async (user: Omit<User, "id">): Promise<User> => {
    const newUser: User = {
      id: Date.now(),
      ...user
    }

    users.push(newUser)
    return newUser
  },

  delete: async (id: number): Promise<void> => {
    users = users.filter((u) => u.id !== id)
  }
}