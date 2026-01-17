import { ButtonHTMLAttributes, ReactNode } from "react"
import clsx from "clsx"

type Variant = "primary" | "secondary" | "danger"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: Variant
}

export function Button({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "px-4 py-2 rounded text-sm font-medium transition-colors disabled:opacity-50"

  const variants: Record<Variant, string> = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    danger: "bg-red-600 text-white hover:bg-red-700"
  }

  return (
    <button
      className={clsx(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  )
}