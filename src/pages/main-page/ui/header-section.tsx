import { Container } from '@/shared/ui/container'

export const HeaderSection = () => {
    return (
        <header className='py-4'>
            <Container className='flex items-center justify-between'>
                <img src='/images/logo.jpeg' className='w-28' />
                <ul className='flex items-center space-x-12'>
                    <li className='cursor-pointer'>О нас</li>
                    <li className='cursor-pointer'>Чему вы научитесь</li>
                    <li className='cursor-pointer'>Контакты</li>
                </ul>
                <ul className='flex items-center space-x-6'>
                    <li className='cursor-pointer'>RU</li>
                    <li className='cursor-pointer'>GE</li>
                </ul>
            </Container>
        </header>
    )
}
