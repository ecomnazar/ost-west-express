import React from 'react'
import { AboutCourseSection } from './about-course-section'
import { AboutUsSection } from './about-us-section'
import { WhatWillLearn } from './achievement-section'
import { HeaderSection } from './header-section'
import { JoinUsSection } from './join-us-section'
import { useTranslation } from 'react-i18next'
import { Toaster } from 'react-hot-toast'
import { Footer } from './footer'
import { OurProjectsSection } from './our-projects-section'
import { Container } from '@/shared/ui/container'

export const MainPage = () => {
    const { t, i18n: { changeLanguage } } = useTranslation()
    const languageLS = localStorage.getItem('i18n')

    React.useEffect(() => {
        languageLS && changeLanguage(languageLS)
    }, [])

    return (
        <>
            <Toaster />
            <HeaderSection />
            <AboutUsSection />
            <AboutCourseSection />
            <OurProjectsSection />
            <WhatWillLearn />
            <JoinUsSection />
            <Footer />
            <section className='py-16'>
                <Container>
                    <h1 className='text-[#A42820] font-bold text-[104px]'>PIKO</h1>
                    <p className='text-[22px]'>{t('piko')}</p>
                </Container>
            </section>
        </>
    )
}
