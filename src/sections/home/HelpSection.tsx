import Image from 'next/image'
import { useTranslations } from 'next-intl'

import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import Paragraph from '@/components/typography/Paragraph'
import SubTitle from '@/components/typography/SubTitle'
import { space_size } from '@/config/constants'
import { cn } from '@/lib/utils'
import { getImageUrl } from '@/utils/locale'

interface Props {
    locale: string
    t: ReturnType<typeof useTranslations<'home'>>
}

export default function HelpSection({ locale, t }: Props) {
    return (
        <Section className="relative isolate overflow-hidden bg-[#154D22] py-0!">
            {/* Decorative background — hidden from screen readers, flipped in RTL */}
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 rtl:-scale-x-100">
                {/* Faint secondary glow near the bottom (2nd gradient in the design) */}
                <div className="absolute -bottom-64 start-[20%] size-[520px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.10)_0%,transparent_70%)] blur-2xl" />
                {/* Thin wavy line crossing the section */}
                <Image
                    src="/home/help-line.png"
                    alt=""
                    fill
                    sizes="100vw"
                    className="object-cover object-center"
                />
            </div>

            <Container>
                <div className="flex w-full flex-col items-center justify-between gap-12 pt-16 pb-8 lg:flex-row lg:gap-16 lg:pt-24 lg:pb-10">
                    {/* Text */}
                    <div
                        className={cn(
                            'relative w-full min-w-0 text-center lg:w-1/2 lg:max-w-160 lg:text-start',
                            space_size
                        )}
                    >
                        {/* Main glow — anchored to the title's start edge so it follows the text on every screen size */}
                        <div
                            aria-hidden
                            className="pointer-events-none absolute -start-60 -top-52 -z-10 size-[480px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.24)_0%,rgba(255,255,255,0.08)_40%,transparent_70%)] blur-xl"
                        />
                        <SubTitle
                            title={t('helps.title')}
                            className="text-white text-3xl leading-tight font-bold sm:text-4xl lg:text-5xl"
                        />
                        <Paragraph
                            text={t('helps.description')}
                            className="text-white/90 text-base leading-relaxed lg:text-lg"
                        />
                    </div>

                    {/* Phone mockup */}
                    <div className="flex w-full min-w-0 justify-center lg:w-1/2">
                        <Image
                            src={getImageUrl('help', locale)}
                            alt={t('helps.title')}
                            width={560}
                            height={760}
                            sizes="(max-width: 1024px) 80vw, 40vw"
                            className="h-auto w-auto max-h-100 max-w-full object-contain drop-shadow-2xl sm:max-h-125 lg:max-h-150"
                        />
                    </div>
                </div>
            </Container>
        </Section>
    )
}