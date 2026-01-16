import { ReactNode } from 'react'

export function Card({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-lg bg-white dark:bg-gray-800 p-4 shadow">
      {children}
    </div>
  )
}