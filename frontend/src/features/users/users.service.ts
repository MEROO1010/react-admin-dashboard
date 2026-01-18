import usersData from "@/data/users.json"
import { User } from "@/types/user"

let users: User[] = [...usersData]

export const usersService = {
  getAll: async (): Promise<User[]> => {
    return new Promise((resolve) =>
      setTimeout(() => resolve(users), 300)
    )
  },

  create: async (user: Omit<User, "id">): Promise<User> => {
    const newUser: User = { id: Date.now(), ...user }
    users.push(newUser)
    return newUser
  },

  update: async (user: User): Promise<User> => {
    users = users.map((u) => (u.id === user.id ? user : u))
    return user
  },

  delete: async (id: number): Promise<void> => {
    users = users.filter((u) => u.id !== id)
  }
}