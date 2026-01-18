import { ReactNode } from "react"
import clsx from "clsx"

type Props = {
  children: ReactNode
  variant: "success" | "warning" | "danger"
}

export function Badge({ children, variant }: Props) {
  return (
    <span
      className={clsx(
        "px-2 py-1 rounded text-xs font-medium",
        {
          success: "bg-green-100 text-green-700",
          warning: "bg-yellow-100 text-yellow-700",
          danger: "bg-red-100 text-red-700"
        }[variant]
      )}
    >
      {children}
    </span>
  )
}