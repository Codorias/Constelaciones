import { ComponentProps } from "react"

export function StarIcon({ className, ...props }: ComponentProps<"img">) {
  return (
    <img
      src="/star-logo.png"
      alt="Estrella Constelaciones"
      className={className}
      {...props}
    />
  )
}
