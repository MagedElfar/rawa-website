import type { CSSProperties } from 'react'

const glass = (stops: string[]): CSSProperties => ({
    background: `linear-gradient(107.1deg, ${stops[0]} 3%, ${stops[1]} 17%, ${stops[2]} 34%, ${stops[3]} 50%, ${stops[4]} 65%, ${stops[5]} 83%, ${stops[6]} 97%)`,
})


const highlightStyle: CSSProperties = {
    background:
        'linear-gradient(180deg, #EFF0EF 0%, #F1F3F1 3%, #F5F6F4 8%, #F6F7F6 15%, #F5F6F5 85%, #F9FAF9 97%, #FBFBFB 100%)',
}

const glassClass =
    'border border-[#E2EDE3] rounded-[11.2px] ps-[13.94px] pe-[8.86px]'

const highlightClass = 'border border-[#D6E5CC] rounded-[20px] px-3'

export const growOptions = [
    {
        key: 'op_1', icon: '/home/g-icon-1.svg', className: glassClass, iconTop: 40, descGap: 38.64, textWidth: 380,
        style: glass(['#FBFCFB', '#F8FAF8', '#F5F7F5', '#F3F6F3', '#F3F5F3', '#F3F5F3', '#F3F5F3']),
    },
    {
        key: 'op_2',
        icon: '/home/g-icon-2.svg',
        className: highlightClass,
        iconTop: 40,
        descGap: 38.64,
        textWidth: 380,
        style: highlightStyle,
    },
    {
        key: 'op_3', icon: '/home/g-icon-3.svg', className: glassClass, iconTop: 40, descGap: 38.64, textWidth: 380,
        style: glass(['#F4F6F4', '#F2F4F2', '#F0F2F0', '#F1F4F1', '#F4F5F4', '#F7F8F7', '#F9FAF9']),
    },
    {
        key: 'op_4', icon: '/home/g-icon-4.svg', className: glassClass, iconTop: 12.36, descGap: 39.64, textWidth: 380,
        style: glass(['#F8FAF8', '#F5F6F5', '#F1F4F1', '#F0F2F0', '#EFF2EF', '#F2F3F2', '#F4F5F4']),
    },
    {
        key: 'op_5', icon: '/home/g-icon-5.svg', className: glassClass, iconTop: 12.36, descGap: 39.64, textWidth: 380,
        style: glass(['#F3F5F3', '#F1F3F1', '#F0F2F0', '#F0F2F0', '#F1F3F1', '#F3F4F3', '#F6F7F6']),
    },
    {
        key: 'op_6', icon: '/home/g-icon-6.svg', className: glassClass, iconTop: 12.36, descGap: 39.64, textWidth: 380,
        style: glass(['#F4F6F4', '#F4F6F4', '#F3F6F3', '#F5F6F5', '#F7F7F7', '#F9FAF9', '#FCFCFC']),
    },
]