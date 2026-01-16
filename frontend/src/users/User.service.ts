import users from '@/data/users.json'
import { User } from '@/types/user'

export const usersService = {
  getAll: async (): Promise<User[]> =>
    new Promise(resolve => setTimeout(() => resolve(users), 500)),
} 