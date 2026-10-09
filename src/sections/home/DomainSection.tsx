import Image from 'next/image'
import { useTranslations } from 'next-intl'
import React from 'react'

import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import Paragraph from '@/components/typography/Paragraph'
import SubTitle from '@/components/typography/SubTitle'
import { MAIN_SECTIONS } from '@/config/constants'
import { cn } from '@/lib/utils'

import { domains } from './constants/domains'

interface Props {
    locale: string
    t: ReturnType<typeof useTranslations<'home'>>
}

export default function DomainSection({ t }: Props) {
    return (
        <Section
            id={MAIN_SECTIONS.domain}
            className='bg-[#FAFCF9]'
        >
            <Container className='space-y-10 sm:space-y-15'>
                <div className='space-y-3 sm:space-y-4 max-w-190 mx-auto text-center'>
                    <SubTitle
                        title={t("domain.title")}
                        className='text-center'
                    />
                    <Paragraph
                        text={t("domain.description")}
                        className="text-center text-[#A7A09A]"
                    />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 w-full">
                    {domains.map((domain, index) => {
                        const style = domain.styles

                        return (
                            <div
                                key={domain.key}
                                className={cn(
                                    // الحجم والبادنج على الموبايل الأصغر، إعادتهم للديسكتاوب عبر lg:
                                    "relative isolate flex items-center p-4 gap-4 sm:p-5.5 sm:gap-5.5",
                                    "w-full h-auto min-h-30 sm:h-37.75 rounded-[16px] overflow-hidden",
                                    "transition-transform duration-300 hover:scale-[1.02]",
                                    style?.cardBg || "bg-white/60",
                                    style?.cardBorder ? `border ${style.cardBorder}` : "border border-[#E6F2E7]",
                                    style?.cardShadow || "shadow-[0px_1px_2px_0px_rgba(137,146,138,0.15),0px_5px_9px_-4px_rgba(51,62,53,0.11)]",
                                    style?.backdropBlur || ""
                                )}
                            >
                                {/* 1. Outer Glossy Reflection Overlay (-8deg) */}
                                {style?.overlayGlossyBg && (
                                    <div
                                        className={cn(
                                            "pointer-events-none absolute -z-10",
                                            "w-[598.36px] h-[254.3px] inset-s-[-116.88px] top-[-200.07px]",
                                            "rounded-[212.92px] -rotate-8",
                                            style.overlayGlossyBg,
                                            style.overlayGlossyBorder
                                        )}
                                    />
                                )}

                                {/* 2. Inner Glossy Border Overlay */}
                                {style?.overlayInnerBg && (
                                    <div
                                        className={cn(
                                            "pointer-events-none absolute inset-0.5 z-0 rounded-[16px]",
                                            style.overlayInnerBg,
                                            style.overlayInnerBorder
                                        )}
                                    />
                                )}

                                {/* 3. Icon Wrapper & Glass Layers (أصغر قليلاً على الموبايل) */}
                                <div className="relative shrink-0 z-10 w-12 h-12 sm:w-16.25 sm:h-16.25">
                                    <Image
                                        src={`/home/${domain.key}.png`}
                                        alt={t(`domain.${domain.key}` as any)}
                                        width={65}
                                        height={65}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* 4. Text Content Container (تحسين الأحجام للموبايل مع ثبات الديسكتاوب) */}
                                <div className="relative z-10 flex flex-col justify-center gap-1 sm:gap-1.75 min-w-0">
                                    <span className="font-roboto text-[11px] sm:text-[13px] leading-4 sm:leading-4.5 font-normal tracking-normal text-[#7D7873] flex items-center">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    <h3 className="font-roboto font-semibold text-[20px] sm:text-[26px] leading-6 sm:leading-7.25 tracking-normal text-[#1A1917] flex items-center truncate">
                                        {t(`domain.${domain.key}` as any)}
                                    </h3>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </Container>
        </Section>
    )
}