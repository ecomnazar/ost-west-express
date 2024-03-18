import { Container } from '@/shared/ui/container'
import { Section } from '@/shared/ui/section'

export const JoinUsSection = () => {
  return (
    <Section>
      <Container>
        <div className='flex items-end justify-between mb-6'>
          <h2 className="text-3xl sm:text-6xl sm:mb-12 text-left md:text-right">Присоединяйся к нам<br />уже сегодня</h2>
          <p className='hidden md:block'>men strelka</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-10'>
          <div className='bg-gray-300 h-[500px]'></div>
          <form className='space-y-4'>
            <input className='p-6 bg-gray-300 placeholder:text-black/70 w-full outline-none' placeholder='Введите имя и фамилию' />
            <input className='p-6 bg-gray-300 placeholder:text-black/70 w-full outline-none' placeholder='Введите электронную почту' />
            <input className='p-6 bg-gray-300 placeholder:text-black/70 w-full outline-none' placeholder='Укажите уровень знаний' />
            <button className='p-6 bg-black text-white w-full'>Подать заявку</button>
          </form>
        </div>
      </Container>
    </Section>
  )
}
