import { cn } from 'cn';
import React from 'react'

import { Link } from '@/lib/i18n/routing';

interface Props {
  href: string;
  children?: React.ReactNode;
}

export default function LightButtonLink({
  children,
  href
}: Props) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center justify-center gap-3 px-6 py-3 rounded-lg relative min-h-12",
        "border border-[#E6F2E7] bg-[rgba(249,252,249,0.2)]",
        "shadow-[0px_0px_0px_0px_#1C1917]",
        "font-semibold text-[14px] leading-4 tracking-normal text-[#1C1917]"
      )}>

      {children}
    </Link >
  )


}
