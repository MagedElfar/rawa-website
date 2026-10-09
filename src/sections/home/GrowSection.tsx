import Image from 'next/image'
import { useTranslations } from 'next-intl'
import type { CSSProperties } from 'react'

import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import SubTitle from '@/components/typography/SubTitle'
import { MAIN_SECTIONS } from '@/config/constants'
import { cn } from '@/lib/utils'

import { growOptions } from './constants/grow'

interface Props {
    t: ReturnType<typeof useTranslations<'home'>>
}

export default function GrowSection({ t }: Props) {
    return (
        <Section
            id={MAIN_SECTIONS.grows}
            className="bg-[#F5F5F5] py-10 lg:py-20 overflow-hidden"
        >
            <Container className="lg:space-y-16 space-y-6">
                <SubTitle className="lg:max-w-162.5" title={t('grow.title')} />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-[13px] shadow-[0_0_0_1px_#E2EDE3]">
                    {growOptions.map((op) => (
                        <div
                            key={op.key}
                            style={
                                {
                                    ...op.style,
                                    '--icon-top': `${op.iconTop}px`,
                                    '--desc-gap': `${op.descGap}px`,
                                    '--text-w': `${op.textWidth}px`,
                                } as CSSProperties
                            }
                            className={cn(
                                'flex flex-col pt-5 pb-5 lg:pt-0 lg:pb-0 lg:min-h-64',
                                op.className
                            )}
                        >
                            {/* موبايل/تابلت: الأيقونة فوق مباشرة — lg: منطقة 100px بنفس أماكن الـ Figma */}
                            <div className="shrink-0 lg:h-25 lg:pt-(--icon-top)">
                                <div className="w-12 h-12 rounded-[20px] bg-[#E6F2E7] flex items-center justify-center">
                                    <Image
                                        src={op.icon}
                                        alt={t(`grow.options.${op.key}.title` as any)}
                                        width={20}
                                        height={20}
                                        className="w-5 h-5 object-contain"
                                    />
                                </div>
                            </div>

                            <h3 className="pt-4 lg:pt-5 lg:max-w-(--text-w) font-inter font-semibold text-lg lg:text-[20px] leading-7 text-[#1C1917]">
                                {t(`grow.options.${op.key}.title` as any)}
                            </h3>

                            <p className="mt-2 lg:mt-(--desc-gap) lg:pb-3 lg:max-w-(--text-w) font-inter font-normal text-[15px] lg:text-[16px] leading-6 lg:leading-7 text-[#A7A09A]">
                                {t(`grow.options.${op.key}.description` as any)}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    )
}