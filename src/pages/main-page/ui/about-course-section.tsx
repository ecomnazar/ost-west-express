import { Container } from "@/shared/ui/container"
import { Section } from "@/shared/ui/section"
import { useTranslation } from "react-i18next"

const forWho = ['school', 'teeneger', 'old']

export const AboutCourseSection = () => {
    const { t } = useTranslation()
    return (
        <Section id="forWho">
            <Container>
                <h2 className="text-3xl sm:text-6xl mb-6 sm:mb-12 max-w-[500px]">{t('forWhoCourse')}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-10">
                    {forWho.map((item, idx) => {
                        return <div key={idx} className="relative bg-gray-300 h-[500px]">
                            <img src={`/images/about-course-section/${idx + 1}.jpg`} className="object-cover object-center w-full h-full" alt="" />
                            {/* <p className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white text-[19px] w-full text-center">{t(item)}</p> */}
                        </div>
                    })}
                </div>
            </Container>
        </Section>
    )
}
