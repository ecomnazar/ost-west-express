import { Container } from "@/shared/ui/container"
import { Section } from "@/shared/ui/section"
import { useTranslation } from "react-i18next"

const translationsTitles = ['dioramTitle', 'moduleTemplateTitle', 'clubTemplateTitle', 'eventTitle']
const translationsDescs = ['dioramDesc', 'moduleTemplateDesc', 'clubTemplateDesc', 'eventDesc']

export const OurProjectsSection = () => {
    const { t } = useTranslation()
    return (
        <Section id="whatWillLearn">
            <Container>
                <h2 className="text-3xl sm:text-6xl mb-6 sm:mb-12 max-w-[500px]">{t('ourProjectsAndAchievements')}</h2>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-10'>
                    {Array.from({ length: 4 }).map((_, idx) => {
                        return <div key={idx} className=''>
                            <img src={`/images/our-projects/${idx + 1}.JPG`} className='cursor-pointer h-[200px] sm:h-[250px] lg:h-[300px] hover:scale-[1.05] transition-all duration-700 object-cover object-center w-full' alt="" />
                            <div className="mt-4">
                                <h3 className="text-[21px] mb-3">{t(translationsTitles[idx])}:</h3>
                                <p>{t(translationsDescs[idx])}</p>
                            </div>
                        </div>
                    })}
                </div>
            </Container>
        </Section>
    )
}
