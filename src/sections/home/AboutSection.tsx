import Image from 'next/image'
import { useTranslations } from 'next-intl'
import React from 'react'

import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import Paragraph from '@/components/typography/Paragraph'
import SubTitle from '@/components/typography/SubTitle'
import { MAIN_SECTIONS, space_size } from '@/config/constants'
import { cn } from '@/lib/utils'
import { getImageUrl } from '@/utils/locale'

interface Props {
    locale: string
    t: ReturnType<typeof useTranslations<'home'>>
}

export default function AboutSection({ locale, t }: Props) {
    return (
        <Section
            id={MAIN_SECTIONS.about}
            className="overflow-hidden "
        >
            <Container className="relative flex flex-col lg:block gap-8 items-center">

                {/* حاوية الصورة: متجاوبة وعادية في الموبايل، وAbsolute في Desktop */}
                <div
                    className={cn(
                        "relative w-full max-w-[320px] sm:max-w-100 h-87.5 sm:h-112.5",
                        "lg:absolute lg:-top-10 lg:inset-s-0",
                        "lg:w-140 lg:h-200 lg:max-w-none z-0"
                    )}
                >
                    <Image
                        src={getImageUrl("about", locale)}
                        alt={t("about.title")}
                        fill
                        priority
                        className="object-contain object-center lg:object-top-left"
                        sizes="(max-width: 1024px) 100vw, 560px"
                    />
                </div>

                {/* حاوية النص: متمركزة عادي في الموبايل، ومحاذاة لليمين مع هامش على Desktop */}
                <div className={cn(
                    "relative z-10 w-full lg:w-[60%] lg:ms-auto",
                    locale === "ar" ? "max-w-130" : "max-w-175",
                    space_size
                )}>
                    <SubTitle
                        title={t("about.title")}
                    />
                    <Paragraph
                        text={t("about.description")}
                    />
                </div>

            </Container>
        </Section>
    )
}