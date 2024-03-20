import { Container } from '@/shared/ui/container'
import { useTranslation } from 'react-i18next'

export const Footer = () => {
    const { t } = useTranslation()
    return (
        <footer id='footer' className='bg-[#A42820] py-20'>
            <Container className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-10'>
                <div>
                    <h2 className="text-3xl sm:text-6xl mb-6 text-white">{t('menu')}</h2>
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
                    <h2 className="text-3xl sm:text-6xl mb-6 text-white">{t('address')}</h2>
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
