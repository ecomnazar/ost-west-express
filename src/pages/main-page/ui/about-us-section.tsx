import { Container } from '@/shared/ui/container'
import { Section } from '@/shared/ui/section'
import { useTranslation } from 'react-i18next'

const ratings = ['10+', '5+', '4', '6']


export const AboutUsSection = () => {
    const { t } = useTranslation()
    return (
        <Section id='aboutUs'>
            <Container>
                <h2 className="text-3xl sm:text-6xl mb-6 sm:mb-12 text-center">{t('bit')} <span className='md:hidden'>{t('bitUs')}</span></h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-10 mb-24'>
                    <div className='bg-gray-300 h-[300px] sm:h-[400px]'>
                        <img src="/images/about-us-section/1.jpg" alt="" />
                    </div>
                    <div>
                        <h2 className="text-3xl sm:text-6xl mb-4 hidden md:block">{t('bitUs')} </h2>
                        <p>{t('bitAboutUs')}</p>
                    </div>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-10'>
                    {Array.from({ length: 4 }).map((_, idx) => {
                        return <div key={idx} className=''>
                            <img src={`/images/about-us-section/${idx + 2}.jpg`} className='h-[200px] sm:h-[250px] lg:h-[300px] object-cover object-center w-full' alt="" />
                            <div className="mt-4">
                                <h3 className="text-[38px] mb-3">{t(ratings[idx])}</h3>
                                <p className='text-[18px]'>{t(`statistics${idx + 1}`)}</p>
                            </div>
                        </div>
                    })}
                </div>
            </Container>
        </Section>
    )
}
