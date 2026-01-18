import { ReactNode, ComponentProps } from "react"
import clsx from "clsx"

interface BaseProps {
  children: ReactNode
  className?: string
}

export function TH({
  children,
  className,
  ...props
}: BaseProps & ComponentProps<"th">) {
  return (
    <th
      {...props}
      className={clsx(
        "px-4 py-3 font-medium text-left select-none",
        className
      )}
    >
      {children}
    </th>
  )
}