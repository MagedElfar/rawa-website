"use client"

import Container from "@/components/layout/Container"
import Section from "@/components/layout/Section"
import SubTitle from "@/components/typography/SubTitle"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { MAIN_SECTIONS } from "@/config/constants"
import { useAppTranslation } from "@/lib/i18n/use-translation"

export default function FAQSection() {
    const t = useAppTranslation("home")

    const faqKeys = ['q_1', 'q_2', 'q_3', 'q_4'] as const

    return (
        <Section
            id={MAIN_SECTIONS.faq}
            className="bg-[#F5F5F5] py-12 lg:py-24 overflow-hidden"
        >
            <Container>
                {/* 
                  استخدمنا flex-col على الموبايل عشان العنوان يبقى فوق والأكورديون تحته، 
                  و lg:flex-row عشان يبقوا جنب بعض على الشاشات الكبيرة مع ضبط المسافات (gap) 
                */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 justify-between items-start">

                    {/* العنوان الرئيسي */}
                    <div className="w-full lg:w-[45%]">
                        <SubTitle
                            title={t("faq.title")}
                            className="w-full lg:max-w-112.5"
                        />
                    </div>

                    {/* قائمة الأكورديون */}
                    <div className="w-full lg:w-[55%]">
                        <Accordion type="single" collapsible className="w-full">
                            {faqKeys.map((key, index) => (
                                <AccordionItem
                                    key={key}
                                    value={`item-${index + 1}`}
                                    className="border-b border-[#E6F2E7] py-2"
                                >
                                    <AccordionTrigger className="font-inter font-semibold text-[18px] lg:text-[20px] leading-7 tracking-normal text-[#1C1917] hover:no-underline py-4 align-middle cursor-pointer">
                                        {t(`faq.questions.${key}` as any)}
                                    </AccordionTrigger>
                                    <AccordionContent className="font-inter font-normal text-[15px] lg:text-[16px] text-[#A7A09A] leading-relaxed pb-4">
                                        {t(`faq.questions.an_${index + 1}` as any)}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>

                </div>
            </Container>
        </Section>
    )
}