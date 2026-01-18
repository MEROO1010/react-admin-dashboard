import { ReactNode } from "react"
import clsx from "clsx"

export function Table({ children }: { children: ReactNode }) {
  return (
    <table className="w-full border border-gray-200 bg-white">
      {children}
    </table>
  )
}

export function THead({ children }: { children: ReactNode }) {
  return <thead className="bg-gray-100">{children}</thead>
}

export function TBody({ children }: { children: ReactNode }) {
  return <tbody>{children}</tbody>
}

export function TR({ children }: { children: ReactNode }) {
  return <tr className="border-b">{children}</tr>
}

export function TH({
  children,
  className,
  ...props
}: {
  children: ReactNode
  className?: string
  onClick?: () => void
}) {
  return (
    <th
      {...props}
      className={clsx(
        "px-4 py-3 text-left font-medium text-gray-700",
        className
      )}
    >
      {children}
    </th>
  )
}

export function TD({
  children,
  className
}: {
  children: ReactNode
  className?: string
}) {
  return <td className={clsx("px-4 py-3", className)}>{children}</td>
}
