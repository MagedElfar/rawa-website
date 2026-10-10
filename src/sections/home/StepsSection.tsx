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
            className='bg-[#FFFDF9] py-12 sm:py-14 lg:py-20'
        >
            <Container>
                <div className='mx-auto flex w-full max-w-[1088px] flex-col items-center gap-10 lg:flex-row lg:justify-between lg:gap-12'>

                    {/* Glassmorphic Content Card */}
                    <div
                        className={cn(
                            "relative isolate w-full lg:w-155.5 min-h-80 shrink-0",
                            "p-6 sm:p-[34.5px_32px_58px] rounded-[16px] overflow-hidden",
                            "flex flex-col justify-between gap-6 sm:gap-8",
                            "bg-[#EEF5EF]/40 bg-linear-to-br from-white/80 via-white/55 to-white/80",
                            "border border-[#EEF1EC] backdrop-blur-[15px]",
                            "shadow-[0px_2px_12px_0px_rgba(150,162,152,0.08),0px_6px_18px_-12px_rgba(150,162,152,0.15)]"
                        )}
                    >
                        <span className="font-inter font-semibold text-[14px] leading-5 text-[#2E5A2F]">
                            {currentStep.id}
                        </span>

                        <div className="flex flex-col gap-3 sm:gap-4 pt-2 sm:pt-[33.5px]">
                            <h3 className="font-inter font-semibold text-[22px] sm:text-[24px] leading-7 sm:leading-8 text-[#1C1917]">
                                {isAr ? currentStep.titleAr : currentStep.titleEn}
                            </h3>

                            <p className="font-inter font-normal text-[15px] sm:text-[16px] leading-6 sm:leading-7 text-[#1C1917] max-w-lg">
                                {isAr ? currentStep.descriptionAr : currentStep.descriptionEN}
                            </p>
                        </div>

                        <div className="flex items-center gap-2 pt-4">
                            <div className="w-7 h-px bg-[#2E5A2F]" />
                            <span className="font-inter font-semibold text-[14px] leading-5 text-[#2E5A2F]">
                                {isAr ? currentStep.captionAr : currentStep.captionEN}
                            </span>
                        </div>
                    </div>

                    {/* Phone + Dots */}
                    <div className="flex shrink-0 flex-col items-center gap-10">
                        <Image
                            src={isAr ? currentStep.imgAr : currentStep.imgEN}
                            alt={isAr ? currentStep.titleAr : currentStep.titleEn}
                            width={540}
                            height={1100}
                            sizes="(max-width: 640px) 220px, 270px"
                            className="h-[440px] w-auto object-contain sm:h-[500px] lg:h-[550px] drop-shadow-[0_24px_40px_rgba(28,25,23,0.18)] transition-opacity duration-300"
                            priority
                        />

                        <div className="flex h-1.5 items-center gap-2">
                            {steps.map((_, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    onClick={() => setActiveStepIndex(index)}
                                    aria-label={`Go to step ${index + 1}`}
                                    aria-current={activeStepIndex === index}
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