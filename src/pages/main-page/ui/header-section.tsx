import { Container } from '@/shared/ui/container'
import { useTranslation } from 'react-i18next'

export const HeaderSection = () => {
    const { t, i18n: { changeLanguage } } = useTranslation()

    const handleChangeLanguage = (lng: string) => {
        changeLanguage(lng)
        localStorage.setItem('i18n', lng)
    }

    return (
        <header>
            <Container>
                <nav className='flex items-center justify-between py-4'>
                    <img src='/images/logo.jpeg' className='w-16 sm:w-28' />
                    <ul className='hidden sm:flex items-center space-x-12'>
                        <li className='cursor-pointer'>{t('aboutUs')}</li>
                        <li className='cursor-pointer'>{t('whatWillLearn')}</li>
                        <li className='cursor-pointer'>{t('contacts')}</li>
                    </ul>
                    <ul className='flex items-center space-x-6'>
                        <li onClick={() => handleChangeLanguage('ru')} className='cursor-pointer'>RU</li>
                        <li onClick={() => handleChangeLanguage('ge')} className='cursor-pointer'>GE</li>
                    </ul>
                </nav>
                <div className='my-12 sm:my-40'>
                    <h1 className="text-4xl sm:text-8xl mb-6 max-w-[800px]">{t('weMakeLayout')}</h1>
                    <p className='text-lg max-w-[400px]'>{t('weMakeLayoutDesc')}</p>
                </div>
            </Container>
        </header>
    )
}
