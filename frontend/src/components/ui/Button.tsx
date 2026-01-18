import { ButtonHTMLAttributes } from "react"
import clsx from "clsx"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger"
}

export function Button({
  variant = "primary",
  className,
  ...props
}: Props) {
  const styles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 hover:bg-gray-300",
    danger: "bg-red-600 text-white hover:bg-red-700"
  }

  return (
    <button
      {...props}
      className={clsx(
        "px-3 py-1 rounded text-sm",
        styles[variant],
        className
      )}
    />
  )
}
