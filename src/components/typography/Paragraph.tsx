import { cn } from 'cn'
import React from 'react'

interface Props {
    className?: string
    text: string
}


export default function Paragraph({ text, className }: Props) {
    return (
        <p
            className={cn('font-normal text-[18px] leading-8 tracking-normal align-middle text-[#1C1917]',
                className
            )}
        >
            {text}
        </p>
    )
}
