import Image from 'next/image'
import { useTranslations } from 'next-intl'

import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import Paragraph from '@/components/typography/Paragraph'
import SubTitle from '@/components/typography/SubTitle'
import { MAIN_SECTIONS } from '@/config/constants'
import { cn } from '@/lib/utils'
import { getImageUrl } from '@/utils/locale'

interface Props {
    locale: string
    t: ReturnType<typeof useTranslations<'home'>>
}

export default function DesignSection({ locale, t }: Props) {

    const designImages = [
        {
            id: 1,
            src: getImageUrl("design-1", locale),
            alt: 'Design Preview 1',
            isCenter: false,
        },
        {
            id: 2,
            src: getImageUrl("design-2", locale),
            alt: 'Design Preview 2',
            isCenter: true,
        },
        {
            id: 3,
            src: getImageUrl("design-3", locale),
            alt: 'Design Preview 3',
            isCenter: false,
        }
    ]

    return (
        <Section
            id={MAIN_SECTIONS.design}
            className="bg-[#FFFDF9] py-10 lg:py-20 overflow-hidden"
        >
            <Container className='space-y-2 sm:space-y-4'>
                {/* Section Title & Description Header */}
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

                {/* 3 Mockups Grid matching Figma specs exactly (1216px container width & 684px height) */}
                <div className="flex flex-col lg:flex-row items-center justify-center   w-full max-w-304 mx-auto min-h-auto lg:min-h-171">
                    {designImages.map((img) => (
                        <div
                            key={img.id}
                            className={cn(
                                "relative flex justify-center items-center shrink-0 w-full  lg:w-82.5 transition-all duration-300",
                                // الصورة الوسطى تبدأ من top: 0 والجانبية تنزل 32px طبقاً لـ CSS الـ Figma
                                img.isCenter ? "lg:translate-y-0 z-10" : "lg:translate-y-8"
                            )}
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                width={0}
                                height={0}
                                sizes="(max-width: 768px) 100vw, 330px"
                                className="w-70 sm:w-77.5 lg:w-82.5 h-auto max-h-171 object-contain drop-shadow-[0px_32px_80px_rgba(28,25,23,0.18)] transition-all duration-300"
                                priority
                            />
                        </div>
                    ))}
                </div>

            </Container>
        </Section>
    )
}