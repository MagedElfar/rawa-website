"use client"

import { MAIN_SECTIONS } from '@/config/constants'
import { Link, usePathname, useRouter } from '@/lib/i18n/routing'
import { useAppLocale } from '@/lib/i18n/use-locale'
import { useAppTranslation } from '@/lib/i18n/use-translation'

import Container from './Container'
import Logo from './Logo'

// غيّري دي بالروابط الحقيقية
const EXTERNAL_LINKS = {
    appStore: 'https://apps.apple.com/',
    googlePlay: 'https://play.google.com/',
    instagram: 'https://www.instagram.com/',
    linkedIn: 'https://www.linkedin.com/',
}

export default function Footer() {
    const t = useAppTranslation("layout")
    const { lang } = useAppLocale()
    const pathname = usePathname()
    const router = useRouter()

    const linkStyle = "font-inter font-normal text-[14px] leading-[20px] tracking-normal text-[#1C1917] hover:text-[#2E5A2F] transition-colors whitespace-nowrap"
    const bottomLinkStyle = "font-inter font-normal text-[12px] leading-[16px] text-[#78716C] hover:text-[#2E5A2F] transition-colors"

    // sectionId = null → Home (أول الصفحة)
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string | null) => {
        e.preventDefault()

        // لو في صفحة تانية → روح للرئيسية على الـ section
        if (pathname !== '/') {
            router.push(sectionId ? `/#${sectionId}` : '/')
            return
        }

        if (!sectionId) {
            window.scrollTo({ top: 0, behavior: 'smooth' })
            return
        }

        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    const columns: { id: string | null; label: string }[][] = [
        [
            { id: MAIN_SECTIONS.hero, label: t('footer.links_1.home') },
            { id: MAIN_SECTIONS.howItWorks, label: t('footer.links_1.howItWorks') },
            { id: MAIN_SECTIONS.contact, label: t('footer.links_1.contact') },
        ],
        [
            { id: MAIN_SECTIONS.about, label: t('footer.links_2.about') },
            { id: MAIN_SECTIONS.preview, label: t('footer.links_2.preview') },
        ],
        [
            { id: MAIN_SECTIONS.features, label: t('footer.links_3.features') },
            { id: MAIN_SECTIONS.faq, label: t('footer.links_3.faq') },
        ],
    ]

    const externalLinks = [
        { href: EXTERNAL_LINKS.appStore, label: t('footer.links_4.appStore') },
        { href: EXTERNAL_LINKS.googlePlay, label: t('footer.links_4.googlePlay') },
        { href: EXTERNAL_LINKS.instagram, label: t('footer.links_4.instagram') },
        { href: EXTERNAL_LINKS.linkedIn, label: t('footer.links_4.linkedIn') },
    ]

    return (
        <footer className="bg-white pt-16 pb-14 border-t border-[#E6F2E7]">
            <Container>
                <div className="flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-12 pb-12">

                    <div className="flex-shrink-0">
                        <Logo />
                    </div>

                    <div className="w-full lg:w-[888px] grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-[200px_200px_200px_1fr] gap-x-8 lg:gap-x-0 gap-y-8">

                        {/* Columns 1-3: smooth scroll */}
                        {columns.map((col, i) => (
                            <div key={i} className="flex flex-col gap-[22px]">
                                {col.map((link) => (
                                    <a
                                        key={link.id ?? 'home'}
                                        href={link.id ? `#${link.id}` : '#'}
                                        onClick={(e) => handleScroll(e, link.id)}
                                        className={linkStyle}
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </div>
                        ))}

                        {/* Column 4: روابط خارجية */}
                        <div className="flex flex-col gap-3">
                            {externalLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={linkStyle}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>

                    </div>
                </div>

                <div className="w-full h-[1px] bg-[#E6F2E7]" />

                <div className="flex flex-col sm:flex-row justify-between items-center pt-7 gap-4">
                    <p className="font-inter font-normal text-[12px] leading-[16px] text-[#78716C]">
                        {t('footer.copyWrite')}
                    </p>

                    <div className="flex items-center gap-6">
                        <Link href="/privacy-policy" className={bottomLinkStyle}>
                            {t('footer.links_5.privacyPolicy')}
                        </Link>
                        <Link href="/terms-conditions" className={bottomLinkStyle}>
                            {t('footer.links_5.termsConditions')}
                        </Link>
                    </div>
                </div>

            </Container>
        </footer>
    )
}