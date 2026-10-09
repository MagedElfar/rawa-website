"use client"

import Image from 'next/image'
import React, { useState } from 'react'

import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import { MAIN_SECTIONS } from '@/config/constants'
import { useAppLocale } from '@/lib/i18n/use-locale'
import { cn } from '@/lib/utils'

import { steps } from './constants/steps'

export default function StepsSection() {
    const { lang } = useAppLocale()
    const isAr = lang === 'ar'
    const [activeStepIndex, setActiveStepIndex] = useState(0)

    const currentStep = steps[activeStepIndex]

    return (
        <Section
            id={MAIN_SECTIONS.steps}
            className='bg-[#FFFDF9] py-10 lg:py-16'
        >
            <Container>
                <div className='flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16 max-w-300 mx-auto'>

                    {/* Glassmorphic Content Card */}
                    <div
                        className={cn(
                            "relative isolate w-full lg:w-155.5 min-h-80",
                            "p-6 sm:p-[34.5px_32px_58px] rounded-[16px] overflow-hidden",
                            "flex flex-col justify-between gap-6 sm:gap-8",
                            // تم زيادة الـ opacity من /34 إلى /65 وتعديل الـ gradient لتنقل أغمق
                            "bg-linear-to-br from-white/90 via-white/30 to-white/90 bg-[#EEF5EF]/65",
                            "border border-white/80 backdrop-blur-[15px]",
                            "shadow-[0px_6px_18px_-12px_rgba(150,162,152,0.15)]"
                        )}
                    >
                        {/* Step Number Badge */}
                        <span className="font-inter font-semibold text-[14px] leading-5 text-[#2E5A2F]">
                            {currentStep.id}
                        </span>

                        {/* Title & Description */}
                        <div className="flex flex-col gap-3 sm:gap-4 pt-2 sm:pt-[33.5px]">
                            <h3 className="font-inter font-semibold text-[22px] sm:text-[24px] leading-7 sm:leading-8 text-[#1C1917]">
                                {isAr ? currentStep.titleAr : currentStep.titleEn}
                            </h3>

                            <p className="font-inter font-normal text-[15px] sm:text-[16px] leading-6 sm:leading-7 text-[#1C1917] max-w-lg">
                                {isAr ? currentStep.descriptionAr : currentStep.descriptionEN}
                            </p>
                        </div>

                        {/* Caption Indicator */}
                        <div className="flex items-center gap-2 pt-4">
                            <div className="w-7 h-px bg-[#2E5A2F]" />
                            <span className="font-inter font-semibold text-[14px] leading-5 text-[#2E5A2F]">
                                {isAr ? currentStep.captionAr : currentStep.captionEN}
                            </span>
                        </div>
                    </div>

                    {/* Right Side Image & Dots Controller */}
                    <div className="flex flex-col items-center gap-8 w-full lg:w-auto">
                        <div className="relative shrink-0 flex justify-center items-center w-full">
                            <Image
                                src={isAr ? currentStep.imgAr : currentStep.imgEN}
                                alt={isAr ? currentStep.titleAr : currentStep.titleEn}
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="w-auto h-auto max-h-145 sm:max-h-160 lg:max-h-170 object-contain drop-shadow-2xl transition-all duration-300"
                                priority
                            />
                        </div>
                        {/* Dots Carousel Pagination */}
                        <div className="flex items-center gap-2 h-1.5">
                            {steps.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveStepIndex(index)}
                                    aria-label={`Go to step ${index + 1}`}
                                    className={cn(
                                        "h-1.5 rounded-full cursor-pointer transition-all duration-300",
                                        activeStepIndex === index
                                            ? "w-9 bg-[#2E5A2F]"
                                            : "w-1.5 bg-[#E6F2E7] hover:bg-[#2E5A2F]/40"
                                    )}
                                />
                            ))}
                        </div>
                    </div>

                </div>
            </Container>
        </Section>
    )
}