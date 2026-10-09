import Image from 'next/image'
import { useTranslations } from 'next-intl'
import React from 'react'

import Container from '@/components/layout/Container'
import Logo from '@/components/layout/Logo'
import Section from '@/components/layout/Section'
import Paragraph from '@/components/typography/Paragraph'
import SubTitle from '@/components/typography/SubTitle'
import { MAIN_SECTIONS } from '@/config/constants'
import { getImageUrl } from '@/utils/locale'

interface Props {
    locale: string
    t: ReturnType<typeof useTranslations<'home'>>
}

export default function DownloadSection({ locale, t }: Props) {
    return (
        <Section
            id={MAIN_SECTIONS.download}
            className='bg-[#FAFCF9]'
        >
            <Container>
                <div className='flex flex-col items-center justify-center gap-5 max-w-3xl mx-auto'>
                    <Logo />

                    <SubTitle
                        title={t("download.title")}
                        className='text-center'
                    />

                    <Paragraph
                        text={t("download.description")}
                        className='text-[#A7A09A] md:max-w-[137.5rem] text-center'
                    />

                    <div className='flex flex-col md:flex-row items-center gap-3'>
                        <a href='#'>
                            <Image
                                src={getImageUrl("d-apple", locale)}
                                alt="App Store"
                                width={170}
                                height={50}
                                className='w-42.5 h-auto object-contain'
                            />
                        </a>

                        <a href='#'>
                            <Image
                                src={getImageUrl("d-google", locale)}
                                alt="Google Play"
                                width={170}
                                height={50}
                                className='w-42.5 h-auto object-contain'
                            />
                        </a>
                    </div>
                </div>
            </Container>
        </Section>
    )
}