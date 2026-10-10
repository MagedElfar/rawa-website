"use client"

import Image from 'next/image';

import { MAIN_SECTIONS } from '@/config/constants';
import { useScrollToSection } from '@/hooks/useScrollToSection';
import { Link } from '@/lib/i18n/routing';

export default function Logo() {
    const scrollToSection = useScrollToSection()

    return (
        <Link
            href={`/#${MAIN_SECTIONS.hero}`}
            onClick={(e) => scrollToSection(e, MAIN_SECTIONS.hero)}
            className="inline-block max-w-18.75 w-full shrink-0"
        >
            <Image
                src="/logo.svg"
                alt="Logo"
                width={75}
                height={75}
                className="w-full h-auto object-contain"
                priority
            />
        </Link>
    );
}