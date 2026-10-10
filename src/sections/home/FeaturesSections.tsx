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

export default function FeaturesSections({ locale, t }: Props) {
    return (
        <Section
            id={MAIN_SECTIONS.features}
            className='bg-[#FBF6F4] py-8 sm:py-10 lg:py-16'
        >
            <Container>
                {/* التعديل هنا: تحويل flex-row ليكون عند lg بدلاً من md لمنع انغلاق مساحة الصورة في التابلت */}
                <div className={cn(
                    'flex flex-col justify-between items-center gap-10 lg:gap-16 w-full',
                    locale === "ar" ? "lg:flex-row-reverse" : "lg:flex-row"

                )}>

                    {/* Left Text Content */}
                    <div className={cn(
                        "relative z-10 w-full lg:w-[50%] max-w-175 shrink-0",
                        space_size
                    )}>
                        <Caption
                            text={t("features.caption")}
                            color='#6C4C33'
                        />

                        <SubTitle title={t("features.title")} />

                        <Paragraph
                            text={t("features.description")}
                            className='text-[#A7A09A]'
                        />

                        <ul className='flex flex-col gap-3 sm:gap-4'>
                            {["op1", "op2", "op3"].map((opKey) => (
                                <li
                                    key={opKey}
                                    className="flex items-center gap-3 font-inter font-normal text-[15px] sm:text-[16px] leading-6 tracking-normal text-[#1C1917]"
                                >
                                    <Image
                                        src="/home/check.svg"
                                        alt="check-icon"
                                        width={20}
                                        height={20}
                                        className="shrink-0 w-5 h-5"
                                    />
                                    {t(`features.options.${opKey}` as any)}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Side Image (مضمونة الظهور تماماً على التابلت) */}
                    <div className="flex flex-col items-center justify-center w-full lg:w-auto shrink-0 mt-6 lg:mt-0">
                        <div className="relative w-full shrink-0 flex justify-center items-center">
                            <Image
                                src={getImageUrl("feature", locale)}
                                alt={t("hero.title")}
                                width={0}
                                height={0}
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="w-auto h-auto max-h-105 sm:max-h-130 lg:max-h-170 object-contain drop-shadow-2xl transition-all duration-300"
                                priority
                            />
                        </div>
                    </div>

                </div>
            </Container>
        </Section>
    )
}