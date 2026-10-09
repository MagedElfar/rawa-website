import Image from 'next/image'
import { useTranslations } from 'next-intl'

import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import Caption from '@/components/typography/Caption'
import Paragraph from '@/components/typography/Paragraph'
import SubTitle from '@/components/typography/SubTitle'
import { MAIN_SECTIONS, space_size } from '@/config/constants'
import { cn } from '@/lib/utils'
import { getImageUrl } from '@/utils/locale'

interface Props {
    locale: string
    t: ReturnType<typeof useTranslations<'home'>>
}

export default function ProgressSections({ locale, t }: Props) {
    return (
        <Section
            id={MAIN_SECTIONS.progress}
            className='bg-white py-8 sm:py-10 lg:py-16 overflow-hidden'
        >
            <Container>
                <div className='flex flex-col-reverse lg:flex-row justify-between items-center gap-8 lg:gap-16 w-full max-w-full'>

                    {/* Image Container */}
                    <div className="flex flex-col items-center justify-center w-full lg:w-1/2 min-w-0">
                        <div className="relative w-full flex justify-center items-center">
                            <Image
                                src={getImageUrl("progress", locale)}
                                alt={t("hero.title")}
                                width={0}
                                height={0}
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="w-auto h-auto max-w-full max-h-95 sm:max-h-125 lg:max-h-170 object-contain drop-shadow-2xl transition-all duration-300"
                                priority
                            />
                        </div>
                    </div>

                    {/* Text Content Container */}
                    <div className={cn(
                        "relative z-10 w-full lg:w-1/2 max-w-full lg:max-w-175 min-w-0",
                        space_size
                    )}>
                        <Caption
                            text={t("progress.caption")}
                            color='#7C716A'
                        />

                        <SubTitle title={t("progress.title")} />

                        <Paragraph
                            text={t("progress.description")}
                            className='text-[#A7A09A]'
                        />
                    </div>

                </div>
            </Container>
        </Section>
    )
}