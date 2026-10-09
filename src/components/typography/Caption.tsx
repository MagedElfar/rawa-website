import React from 'react'

interface Props {
    text?: string
    withLine?: boolean
    color?: string
}

export default function Caption({ text, withLine, color = '#7C716A' }: Props) {
    return (
        <div className="flex items-center gap-2">
            {
                withLine && <div className='h-px w-10' style={{ backgroundColor: color }}></div>
            }

            <p
                className='font-semibold text-[12px] leading-4 tracking-normal uppercase align-middle text-[#7C716A]
            '
            >
                {text}
            </p>
        </div>
    )
}
