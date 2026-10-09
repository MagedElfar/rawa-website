import React from 'react'

interface Props {
    text: string
    onClick: () => void
}

export default function LightButton({ text, onClick }: Props) {
    return (
        <button
            onClick={onClick}
            className="cursor-pointer border border-[rgba(230, 242, 231, 1)] px-3 py-1.5 rounded-2xl flex items-center justify-center text-sm font-semibold leading-5 tracking-normal text-[#1C1917]"

        >
            {text}

        </button>
    )
}
