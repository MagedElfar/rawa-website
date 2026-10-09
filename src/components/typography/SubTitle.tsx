import React from 'react'

import { cn } from '@/lib/utils'

interface Props {
    title: string
    className?: string
}

export default function SubTitle({ title, className }: Props) {
    return (
        <h2
            className={cn(
                "font-semibold align-middle text-[#1C1917] tracking-normal",
                /* responsive font sizes (تصاعدي من الموبايل للـ Desktop) */
                "text-[28px] sm:text-[36px] md:text-[40px] lg:text-[48px]",
                /* responsive line heights دقيقة وآمنة */
                "leading-9 sm:leading-11 md:leading-12.5 lg:leading-14.5",
                "transition-all duration-200",
                className
            )}
        >
            {title}
        </h2>
    )
}