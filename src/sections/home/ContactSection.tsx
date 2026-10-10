import { useTranslations } from 'next-intl'

import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import Paragraph from '@/components/typography/Paragraph'
import SubTitle from '@/components/typography/SubTitle'
import { MAIN_SECTIONS, space_size } from '@/config/constants'
import { cn } from '@/lib/utils'

import { ContactForm } from './components/ContactForm'

interface Props {
    t: ReturnType<typeof useTranslations<'home'>>
}

export default function ContactSection({ t }: Props) {
    return (
        <Section
            id={MAIN_SECTIONS.contact}
            className='bg-[#FBF6F4] py-12 lg:py-24'>
            <Container>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-31 items-start">

                    <div className={cn("flex flex-col", space_size)}>
                        <SubTitle
                            title={t("contact.title")}
                        />

                        <Paragraph
                            text={t("contact.description")}
                            className='text-[#A7A09A]'
                        />

                        <a
                            href="mailto:hello@rawa.app"
                            className="font-inter font-semibold text-[16px] leading-6 tracking-normal text-[#2E5A2F] align-middle hover:underline transition-all w-fit"
                        >
                            hello@rawa.app
                        </a>
                    </div>

                    <div className="w-full">
                        <ContactForm />
                    </div>

                </div>
            </Container>
        </Section>
    )
}