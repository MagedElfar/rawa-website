"use client"

import { cn } from 'cn';
import React from 'react'

import { useScrollToSection } from '@/hooks/useScrollToSection';
import { Link } from '@/lib/i18n/routing';

interface Props {
  href: string;
  children?: React.ReactNode;
}

export default function LightButtonLink({
  children,
  href
}: Props) {
  const scrollToSection = useScrollToSection()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // لو الـ href فيه # → smooth scroll، غير كده navigation عادي
    if (href.includes('#')) {
      scrollToSection(e, href.split('#')[1] ?? null)
    }
  }

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={cn(
        "flex items-center justify-center gap-3 px-10 py-4 rounded-[20px] relative min-h-14",
        "border border-[#E6F2E7]",
        "bg-[linear-gradient(180deg,#FFFFFF_0%,#F7FAF5_100%)]",
        "shadow-[0px_6px_16px_0px_rgba(35,51,28,0.06),inset_0px_1px_0px_1px_rgba(255,255,255,0.9)]",
        "font-bold text-[16px] leading-5 tracking-normal text-[#1C1917]",
        "hover:shadow-[0px_8px_20px_0px_rgba(35,51,28,0.09),inset_0px_1px_0px_1px_rgba(255,255,255,0.9)] transition-shadow duration-200"
      )}>

      {children}
    </Link >
  )
}