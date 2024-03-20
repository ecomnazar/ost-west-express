import { Container } from "@/shared/ui/container"
import { Section } from "@/shared/ui/section"
import { useTranslation } from "react-i18next"

export const AchievementSection = () => {
    const { t } = useTranslation()
    return (
        <Section id="whatWillLearn">
            <Container>
                <h2 className="text-3xl sm:text-6xl mb-6 sm:mb-12 max-w-[500px]">{t('ourProjectsAndAchievements')}</h2>
                <h2 className="text-3xl sm:text-6xl mb-6 sm:mb-12 max-w-[500px]">{t('whatWillLearn')}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-10">
                    {Array.from({ length: 16 }).map((_, idx) => {
                        return <div key={idx} className={"bg-gray-300 h-[300px] sm:h-[350px] md:h-[500px]"}>
                            <img src={`/images/achievement-section/${idx + 1}.jpg`} className="object-cover object-center w-full h-full" />
                        </div>
                    })}
                </div>
            </Container>
        </Section>
    )
}
