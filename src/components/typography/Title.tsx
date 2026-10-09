import React from 'react'

interface Props {
    title: string
}

export default function Title({ title }: Props) {
    return (
        <h1
            className="
        font-semibold align-middle text-[#1C1917] tracking-normal
                                   
        text-[36px] sm:text-[48px] md:text-[60px] lg:text-[72px]
        /* responsive line heights */
        leading-11 sm:leading-14 md:leading-17 lg:leading-18.75
        /* smoothness */
        transition-all duration-200
      "
        >
            {title}
        </h1>
    )
}