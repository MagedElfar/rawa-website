"use client"

import { usePathname, useRouter } from '@/lib/i18n/routing'

export function useScrollToSection() {
    const pathname = usePathname()
    const router = useRouter()

    // sectionId = null → أول الصفحة
    return (e: React.MouseEvent<HTMLElement>, sectionId: string | null) => {
        e.preventDefault()

        // لو في صفحة تانية → روح للرئيسية على الـ section
        if (pathname !== '/') {
            router.push(sectionId ? `/#${sectionId}` : '/')
            return
        }

        if (!sectionId) {
            window.scrollTo({ top: 0, behavior: 'smooth' })
            return
        }

        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
}