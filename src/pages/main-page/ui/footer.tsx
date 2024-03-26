import { Container } from '@/shared/ui/container'
import { useTranslation } from 'react-i18next'

export const Footer = () => {
    const { t } = useTranslation()
    return (
        <footer id='footer' className='bg-[#A42820] py-20'>
            <h2 className='text-white text-[calc(8vw)] text-center whitespace-nowrap mb-8'>Modellbahnklub Breisach</h2>
            <Container className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-10'>
                <div>
                    <div className='flex flex-col items-start sm:flex-row sm:items-center sm:space-x-8 mb-6'>
                        <h2 className="text-3xl sm:text-6xl text-white">{t('menu')}</h2>
                        <img className='w-[150px] sm:w-[200px]' src='/icons/long-arrow-icon.svg' />
                    </div>
                    <div className='flex items-start space-x-16'>
                        <ul className='text-white space-y-4 max-w-[100px]'>
                            <li><a href="#">{t('main')}</a></li>
                            <li><a href="#aboutUs">{t('aboutUs')}</a></li>
                            <li><a href="#forWho">{t('forWhoCourseFooter')}</a></li>
                        </ul>
                        <ul className='text-white space-y-4 max-w-[100px]'>
                            <li><a href="#whatWillLearn">{t('whatWillLearn')}</a></li>
                            <li><a href="#contacts">{t('application')}</a></li>
                            <li><a href="#footer">{t('contacts')}</a></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className='flex flex-col items-start sm:flex-row sm:items-center sm:space-x-8 mb-6'>
                        <h2 className="text-3xl sm:text-6xl text-white">{t('address')}</h2>
                        <img className='w-[150px] sm:w-[200px]' src='/icons/long-arrow-icon.svg' />
                    </div>
                    <div className='flex items-start space-x-16'>
                        <ul className='text-white space-y-4 max-w-[170px]'>
                            <li><a href="">{t('addressInfo')}</a></li>
                        </ul>
                    </div>
                </div>
            </Container>
        </footer>
    )
}
