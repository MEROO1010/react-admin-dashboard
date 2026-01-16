import { ReactNode } from 'react'

export function Table({ children }: { children: ReactNode }) {
  return <table className="w-full border">{children}</table>
}