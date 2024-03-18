import { AboutCourseSection } from './about-course-section'
import { AboutUsSection } from './about-us-section'
import { AchievementSection } from './achievement-section'
import { HeaderSection } from './header-section'
import { JoinUsSection } from './join-us-section'

export const MainPage = () => {
    return (
        <>
            <HeaderSection />
            <AboutUsSection />
            <AboutCourseSection />
            <AchievementSection />
            <JoinUsSection />
        </>
    )
}
