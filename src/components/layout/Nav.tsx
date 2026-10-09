"use client"

import { ArrowUpRight, Menu, X } from 'lucide-react';
import { useState } from 'react';

import { MAIN_SECTIONS } from '@/config/constants';
import { Link } from '@/lib/i18n/routing';
import { useAppLocale } from '@/lib/i18n/use-locale';
import { useAppTranslation } from '@/lib/i18n/use-translation';

import Logo from './Logo';
import DarkButtonLink from '../buttons/DarkButtonLink';
import LightButton from '../buttons/LightButton';

export default function Nav() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const t = useAppTranslation("layout");
    const { toggleLanguage } = useAppLocale()

    const navLinks = [
        {
            label: t("nav.home"),
            href: `/#${MAIN_SECTIONS.hero}`,
        },
        {
            label: t("nav.about"),
            href: `/#${MAIN_SECTIONS.about}`,
        },
        {
            label: t("nav.features"),
            href: `/#${MAIN_SECTIONS.features}`,
        },
        {
            label: t("nav.howItWorks"),
            href: `/#${MAIN_SECTIONS.howItWorks}`,
        },
        {
            label: t("nav.preview"),
            href: `/#${MAIN_SECTIONS.preview}`,
        },
        {
            label: t("nav.faq"),
            href: `/#${MAIN_SECTIONS.faq}`,
        },
        {
            label: t("nav.contact"),
            href: `/#${MAIN_SECTIONS.contact}`,
        }
    ]

    return (
        <nav
            className="
                relative
                flex items-center justify-between
                px-4 sm:px-6 md:px-11 py-3 sm:py-4 md:py-5
                rounded-[14px] sm:rounded-[18px]
                bg-[linear-gradient(94.68deg,rgba(255,255,255,0.82)_0%,rgba(236,246,227,0.45)_55%,rgba(255,255,255,0.67)_100%)]
                shadow-[0px_8px_24px_0px_rgba(35,51,28,0.09),inset_0px_1px_0px_1px_rgba(255,255,255,0.94),inset_0px_-1px_1px_1px_rgba(66,95,56,0.09)]
                transition-all duration-300
            "
        >
            <Logo />

            <div className="hidden lg:flex items-center gap-7">
                {
                    navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-[12px] leading-4 font-medium text-stone-900 hover:text-stone-700 transition-colors duration-200"
                        >
                            {link.label}
                        </Link>
                    ))
                }
            </div>

            <div className="hidden lg:flex items-center gap-2">
                <LightButton
                    text={t("nav.lang")}
                    onClick={toggleLanguage}
                />
                <DarkButtonLink
                    href={`/#${MAIN_SECTIONS.download}`}
                    children={<>
                        {t("nav.download")}
                        <ArrowUpRight size={20} />
                    </>}
                    className='px-3 py-1.5 min-h-0'
                />
            </div>

            <button
                type="button"
                className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl text-stone-900 hover:bg-white/50 transition-colors"
                aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-navigation"
                onClick={() => setIsMenuOpen((open) => !open)}
            >
                {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            <div
                id="mobile-navigation"
                className={`${isMenuOpen ? "block" : "hidden"} absolute inset-x-0 top-full z-50 mt-2 rounded-[14px] bg-white/95 p-4 shadow-[0px_8px_24px_0px_rgba(35,51,28,0.12)] backdrop-blur-xl lg:hidden`}
            >
                <div className="flex flex-col">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="border-b border-stone-200/70 py-3 text-sm font-medium text-stone-900 transition-colors hover:text-stone-700 last:border-0"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                <div
                    className="mt-3 flex items-center justify-between gap-2"
                    onClick={() => setIsMenuOpen(false)}
                >
                    <LightButton
                        text={t("nav.lang")}
                        onClick={toggleLanguage}
                    />
                    <DarkButtonLink
                        href={`/#${MAIN_SECTIONS.download}`}
                        children={<>
                            {t("nav.download")}
                            <ArrowUpRight size={20} />
                        </>}
                        className='px-3 py-1.5 min-h-0'
                    />
                </div>
            </div>
        </nav>
    );
}