import React from 'react'

import { Link } from '@/lib/i18n/routing';
import { cn } from '@/lib/utils';

interface Props {
  href: string;
  children?: React.ReactNode;
  className?: string
}

export default function DarkButtonLink({
  children,
  href,
  className
}: Props) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center justify-center gap-3",
        "min-h-11 px-10 py-3 rounded-4xl relative",
        "bg-[linear-gradient(134.69deg,rgba(101,137,86,0.91)_0%,rgba(44,79,36,0.96)_52%,rgba(63,95,54,0.94)_100%)]",
        "border border-[rgba(191,216,167,0.65)]",
        "shadow-[0px_5px_15px_0px_rgba(43,69,31,0.17),inset_0px_1px_1px_1px_rgba(255,255,255,0.65),inset_0px_-2px_3px_1px_rgba(12,32,5,0.18)] backdrop-blur-[18px]",
        "font-bold text-[12px] leading-4 tracking-normal text-[#FCFCF8]",
        className
      )}
    >
      <div
        className="absolute bg-[linear-gradient(180deg,rgba(255,255,255,0.14)_0%,rgba(255,255,255,0)_100%)] w-[70%] h-4 top-0.5  inset-s-3 rounded-[40px]"
      ></div>
      {children}
    </Link>
  )
}
