interface DomainConfig {
    key: string
    styles?: {
        cardBg?: string
        cardBorder?: string
        cardShadow?: string
        backdropBlur?: string
        overlayGlossyBg?: string
        overlayGlossyBorder?: string
        overlayInnerBg?: string
        overlayInnerBorder?: string
        iconShadow?: string
        hasSpecularHighlight?: boolean
    }
}
export const domains: DomainConfig[] = [
    {
        key: "health",
        styles: {
            cardBg: "bg-[rgba(252,250,243,0.55)]",
            cardBorder: "border-[rgba(255,255,255,0.95)]",
            cardShadow: "shadow-[0px_12px_28px_-13px_rgba(51,62,53,0.11),0px_3px_7px_-4px_rgba(137,146,138,0.15),inset_0px_1px_1px_1px_rgba(255,255,255,0.95),inset_1px_0px_1px_1px_rgba(255,255,255,0.95),inset_0px_-1px_1px_1px_rgba(137,146,138,0.15),inset_0px_-20px_30px_-24px_rgba(150,162,152,0.09)]",
            backdropBlur: "backdrop-blur-[16px]",
            overlayGlossyBg: "bg-[rgba(255,255,255,0.3)]",
            overlayGlossyBorder: "border-b border-[rgba(255,255,255,0.64)]",
            overlayInnerBg: "bg-[rgba(255,255,255,0.2)]",
            overlayInnerBorder: "border-2 border-[rgba(255,255,255,0.95)]",
            hasSpecularHighlight: true
        }
    },
    {
        key: "spiritual",
        styles: {
            cardBg: "bg-[rgba(252,250,243,0.55)]",
            cardBorder: "border-[rgba(255,255,255,0.95)]",
            overlayGlossyBg: "bg-[rgba(255,255,255,0.3)]",
            overlayGlossyBorder: "border-b border-[rgba(255,255,255,0.64)]",
            overlayInnerBg: "bg-[rgba(255,255,255,0.6)]",
            overlayInnerBorder: "border border-[#E6F2E7]",
            iconShadow: "shadow-[0px_5px_9px_-4px_rgba(51,62,53,0.11),0px_1px_2px_rgba(137,146,138,0.15)]",
            hasSpecularHighlight: true
        }
    },
    {
        key: "social",
        styles: {
            cardBg: "bg-[rgba(249,252,249,0.2)]",
            cardBorder: "border-[#E6F2E7]",
            overlayGlossyBg: "bg-[rgba(255,255,255,0.3)]",
            overlayGlossyBorder: "border-b border-[rgba(255,255,255,0.64)]",
            overlayInnerBg: "bg-[rgba(249,252,249,0.2)]",
            iconShadow: "shadow-[0px_5px_9px_-4px_rgba(51,62,53,0.11),0px_1px_2px_rgba(137,146,138,0.15)]",
            hasSpecularHighlight: true
        }
    },
    {
        key: "knowledge",
        styles: {
            cardBg: "bg-[rgba(249,252,249,0.2)]",
            cardBorder: "border-[#E6F2E7]",
            overlayGlossyBg: "bg-[rgba(255,255,255,0.3)]",
            overlayGlossyBorder: "border-b border-[rgba(255,255,255,0.64)]",
            overlayInnerBg: "bg-[rgba(255,255,255,0.2)]",
            overlayInnerBorder: "border-2 border-[rgba(255,255,255,0.95)]",
            iconShadow: "shadow-[0px_5px_9px_-4px_rgba(51,62,53,0.11),0px_1px_2px_rgba(137,146,138,0.15)]",
            hasSpecularHighlight: true
        }
    },
    {
        key: "family",
        styles: {
            cardBg: "bg-[rgba(249,252,249,0.2)]",
            cardBorder: "border-[#E6F2E7]",
            overlayGlossyBg: "bg-[rgba(255,255,255,0.3)]",
            overlayGlossyBorder: "border-b border-[rgba(255,255,255,0.64)]",
            overlayInnerBg: "bg-[rgba(255,255,255,0.55)]",
            overlayInnerBorder: "border-[0.5px] border-[rgba(255,255,255,0.95)]",
            iconShadow: "shadow-[0px_5px_9px_-4px_rgba(51,62,53,0.11),0px_1px_2px_rgba(137,146,138,0.15)]",
            hasSpecularHighlight: true
        }
    },
    {
        key: "finance",
        styles: {
            cardBg: "bg-[rgba(249,252,249,0.2)]",
            cardBorder: "border-[#E6F2E7]",
            overlayGlossyBg: "bg-[rgba(255,255,255,0.3)]",
            overlayGlossyBorder: "border-b border-[rgba(255,255,255,0.64)]",
            overlayInnerBg: "bg-[rgba(255,255,255,0.55)]",
            overlayInnerBorder: "border border-[rgba(255,255,255,0.95)]",
            iconShadow: "shadow-[0px_5px_9px_-4px_rgba(51,62,53,0.11),0px_1px_2px_rgba(137,146,138,0.15)]",
            hasSpecularHighlight: true
        }
    },
    {
        key: "profession",
        styles: {
            cardBg: "bg-[rgba(255,255,255,0.55)]",
            cardBorder: "border-[rgba(255,255,255,0.95)]",
            overlayGlossyBg: "bg-[rgba(255,255,255,0.3)]",
            overlayGlossyBorder: "border-b border-[rgba(255,255,255,0.64)]",
            overlayInnerBg: "bg-[rgba(249,252,249,0.2)]",
            overlayInnerBorder: "border border-[#E6F2E7]",
            iconShadow: "shadow-[0px_5px_9px_-4px_rgba(51,62,53,0.11),0px_1px_2px_rgba(137,146,138,0.15)]",
            hasSpecularHighlight: true
        }
    },
    {
        key: "behaviors",
        styles: {
            cardBg: "bg-[rgba(249,252,249,0.2)]",
            cardBorder: "border-[#E6F2E7]",
            overlayGlossyBg: "bg-[rgba(255,255,255,0.3)]",
            overlayGlossyBorder: "border-b border-[rgba(255,255,255,0.64)]",
            overlayInnerBg: "bg-[rgba(255,255,255,0.2)]",
            overlayInnerBorder: "border-2 border-[rgba(255,255,255,0.95)]",
            iconShadow: "shadow-[0px_5px_9px_-4px_rgba(51,62,53,0.11),0px_1px_2px_rgba(137,146,138,0.15)]",
            hasSpecularHighlight: true
        }
    },
    {
        key: "skills",
        styles: {
            cardBg: "bg-[rgba(249,252,249,0.2)]",
            cardBorder: "border-[#E6F2E7]",
            overlayGlossyBg: "bg-[rgba(255,255,255,0.3)]",
            overlayGlossyBorder: "border-b border-[rgba(255,255,255,0.64)]",
            overlayInnerBg: "bg-[rgba(255,255,255,0.2)]",
            overlayInnerBorder: "border-2 border-[rgba(255,255,255,0.95)]",
            iconShadow: "shadow-[0px_5px_9px_-4px_rgba(51,62,53,0.11),0px_1px_2px_rgba(137,146,138,0.15)]",
            hasSpecularHighlight: true
        }
    }
]