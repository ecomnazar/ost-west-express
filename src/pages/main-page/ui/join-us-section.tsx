import toast from 'react-hot-toast';
import { sendToEmail } from '@/shared/lib/sendToEmail';
import { sendToTelegram } from '@/shared/lib/sendToTelegram';
import { Container } from '@/shared/ui/container'
import { Section } from '@/shared/ui/section'
import { useTranslation } from 'react-i18next';

export interface FormProps<T> {
  fullname: T;
  mail: T;
  level: T;
}

export const JoinUsSection = () => {
  const { t } = useTranslation()

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    const target = e.target as typeof e.target & FormProps<{ value: string }>
    const fullname = target.fullname.value
    const mail = target.mail.value
    const level = target.mail.value

    let message = `<b>OW Express:</b>\n`;
    message += `<b>Fullname: </b>${fullname}\n`;
    message += `<b>Mail: </b>${mail}\n`;
    message += `<b>Level: </b>${level}\n`;

    const emailDetails = {
      subject: 'Mail from website',
      message,
      to_email: 'ecomnazar.me@gmail.com'
    }

    toast.promise(Promise.all([sendToTelegram(message), sendToEmail(emailDetails)]), {
      loading: 'Loading',
      success: 'Success',
      error: 'Error'
    })
  }

  return (
    <Section>
      <Container>
        <div className='flex items-end justify-between mb-6'>
          <h2 className="text-3xl sm:text-6xl sm:mb-12 text-left md:text-right" dangerouslySetInnerHTML={{ __html: t('joinUs') }} />
          {/* <p className='hidden md:block'>men strelka</p> */}
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-10'>
          <div className='bg-gray-300 h-[300px] md:h-[400px] sm:h-[500px]'></div>
          <form onSubmit={handleSubmit} className='space-y-4'>
            <input className='p-6 bg-gray-300 placeholder:text-black/70 w-full outline-none' name='fullname' placeholder='Введите имя и фамилию' />
            <input className='p-6 bg-gray-300 placeholder:text-black/70 w-full outline-none' name='mail' placeholder='Введите электронную почту' />
            <input className='p-6 bg-gray-300 placeholder:text-black/70 w-full outline-none' placeholder='Укажите уровень знаний' />
            <button className='p-6 bg-black text-white w-full'>Подать заявку</button>
          </form>
        </div>
      </Container>
    </Section>
  )
}
