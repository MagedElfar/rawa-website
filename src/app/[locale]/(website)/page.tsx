
import { getAppTranslation } from '@/lib/i18n/getTranslations';
import AboutSection from '@/sections/home/AboutSection';
import DesignSection from '@/sections/home/DesignSection';
import DomainSection from '@/sections/home/DomainSection';
import DownloadSection from '@/sections/home/DownloadSection';
import FeaturesSections from '@/sections/home/FeaturesSections';
import GrowSection from '@/sections/home/GrowSection';
import HelpSection from '@/sections/home/HelpSection';
import HeroSection from '@/sections/home/HeroSection';
import ProgressSections from '@/sections/home/ProgressSections';
import StepsSection from '@/sections/home/StepsSection';

interface Props {
    params: Promise<{ locale: string }>
}

export default async function Page({ params }: Props) {

    const { locale } = await params;
    const t = await getAppTranslation(locale, "home")

    return (
        <>
            <HeroSection
                locale={locale}
                t={t}
            />

            <AboutSection
                locale={locale}
                t={t}
            />

            <DomainSection
                locale={locale}
                t={t}
            />

            <StepsSection />

            <FeaturesSections
                locale={locale}
                t={t}
            />

            <ProgressSections
                locale={locale}
                t={t}
            />

            <DesignSection
                locale={locale}
                t={t}
            />

            <GrowSection
                t={t}
            />

            <HelpSection
                locale={locale}
                t={t}
            />

            <DownloadSection
                locale={locale}
                t={t}
            />
        </>
    )
}
