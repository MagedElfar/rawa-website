import { ArrowUpLeft, ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import React from 'react'

import DarkButtonLink from '@/components/buttons/DarkButtonLink'
import LightButtonLink from '@/components/buttons/LightButtonLink'
import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import Caption from '@/components/typography/Caption'
import Paragraph from '@/components/typography/Paragraph'
import Title from '@/components/typography/Title'
import { MAIN_SECTIONS } from '@/config/constants'
import { getImageUrl } from '@/utils/locale'


interface Props {
    locale: string
    t: ReturnType<typeof useTranslations<'home'>>
}

export default function HeroSection({ locale, t }: Props) {
    return (
        <Section
            id={MAIN_SECTIONS.hero}
            className="bg-[#FFFDF9] py-4 lg:py-22"
        >
            <Container>
                {/* تحديث: flex-col-reverse للموبايل، lg:flex-row للشاشات الكبيرة، items-center للتوسط */}
                <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-4">

                    {/* النص: w-full للموبايل، lg:w-1/2 للشاشات الكبيرة */}
                    <div className="space-y-6 w-full lg:w-1/2">
                        <Caption
                            text={t("hero.caption")}
                            withLine
                        />
                        {/* تأكد أن مكون Title داخله متجاوب كما أعددناه سابقاً */}
                        <Title title={t("hero.title")} />
                        <Paragraph
                            text={t("hero.description")}
                            className='text-[#A7A09A]'
                        />

                        {/* الأزرار: flex-col للموبايل، sm:flex-row للشاشات الأكبر قليلاً */}
                        <div
                            className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-3"
                        >
                            <LightButtonLink
                                href={`/#${MAIN_SECTIONS.howItWorks}`}
                            >
                                {t("hero.discoverBtn")}
                            </LightButtonLink>
                            <DarkButtonLink
                                href={`/#${MAIN_SECTIONS.download}`}
                            >
                                {t("hero.download")}
                                {locale === "en" ? <ArrowUpRight size={20} /> : <ArrowUpLeft size={20} />}
                            </DarkButtonLink>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                        <div className="relative w-full aspect-square max-w-125 lg:max-w-none">
                            <Image
                                src={getImageUrl("hero", locale)}
                                alt={t("hero.title")}
                                fill
                                priority
                                className="object-contain"
                                sizes="(max-w-728px) 100vw, 50vw"
                            />
                        </div>
                    </div>

                </div>
            </Container>
        </Section>
    )
}