import { ReactNode } from "react"

export function Table({ children }: { children: ReactNode }) {
  return (
    <div className="bg-white border rounded-xl overflow-hidden">
      <table className="w-full text-sm">{children}</table>
    </div>
  )
}

export function THead({ children }: { children: ReactNode }) {
  return <thead className="bg-slate-50">{children}</thead>
}

export function TBody({ children }: { children: ReactNode }) {
  return <tbody className="divide-y">{children}</tbody>
}

export function TR({ children }: { children: ReactNode }) {
  return <tr className="hover:bg-slate-50">{children}</tr>
}

export function TH({ children }: { children: ReactNode }) {
  return (
    <th className="text-left px-4 py-3 text-slate-500 font-medium">
      {children}
    </th>
  )
}

export function TD({ children }: { children: ReactNode }) {
  return <td className="px-4 py-3">{children}</td>
}
