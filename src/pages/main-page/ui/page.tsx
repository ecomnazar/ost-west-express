import React from 'react'
import { AboutCourseSection } from './about-course-section'
import { AboutUsSection } from './about-us-section'
import { AchievementSection } from './achievement-section'
import { HeaderSection } from './header-section'
import { JoinUsSection } from './join-us-section'
import { useTranslation } from 'react-i18next'
import { Toaster } from 'react-hot-toast'

export const MainPage = () => {
    const { i18n: { changeLanguage } } = useTranslation()
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
            <AchievementSection />
            <JoinUsSection />
        </>
    )
}
