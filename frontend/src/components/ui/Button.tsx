import { ButtonHTMLAttributes } from "react"
import clsx from "clsx"

type Variant = "primary" | "secondary" | "danger"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
}

export function Button({
  variant = "primary",
  className,
  ...props
}: Props) {
  return (
    <button
      {...props}
      className={clsx(
        "px-4 py-2 rounded-lg text-sm font-medium transition active:scale-95",
        {
          primary:
            "bg-indigo-600 text-white hover:bg-indigo-700",
          secondary:
            "bg-slate-100 text-slate-700 hover:bg-slate-200",
          danger:
            "bg-red-600 text-white hover:bg-red-700"
        }[variant],
        className
      )}
    />
  )
}
