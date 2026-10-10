import { cn } from 'cn'
import React, { ReactNode } from 'react'


interface Props {
  children: ReactNode
  className?: string
}

export default function Container({ children, className }: Props) {
  return (
    <div
      className={cn(
        "max-w-310 mx-auto px-4 xl:px-0",
        className
      )}
    >
      {children}
    </div>
  )
}
