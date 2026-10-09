import { cn } from 'cn';
import React from 'react'

interface Props {
    className?: string;
    children: React.ReactNode;
    id?: string
}

export default function Section({ className, children, id }: Props) {
    return (
        <section
            id={id}
            className={cn(
                "py-8 lg:py-32",
                className
            )}>
            {children}
        </section>
    )
}
