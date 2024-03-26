import toast from 'react-hot-toast';
import { sendToEmail } from '@/shared/lib/sendToEmail';
import { sendToTelegram } from '@/shared/lib/sendToTelegram';
import { Container } from '@/shared/ui/container'
import { Section } from '@/shared/ui/section'
import { IoIosArrowUp } from "react-icons/io";
import { useTranslation } from 'react-i18next';
import React from 'react';
import clsx from 'clsx';

export interface FormProps<T> {
  fullname: T;
  mail: T;
  level: T;
}

const levels = ['beginner', 'experienced', 'advanced']

export const JoinUsSection = () => {
  const { t } = useTranslation()
  const [level, setLevel] = React.useState('')
  const [isOpen, setIsOpen] = React.useState(false)

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    const target = e.target as typeof e.target & FormProps<{ value: string }>
    const fullname = target.fullname.value
    const mail = target.mail.value

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
    <Section id='contacts'>
      <Container>
        <div className='flex items-end justify-between mb-6'>
          <h2 className="text-3xl sm:text-6xl sm:mb-12 text-left md:text-right" dangerouslySetInnerHTML={{ __html: t('joinUs') }} />
          {/* <p className='hidden md:block'>men strelka</p> */}
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-10'>
          <div className='bg-gray-300 h-[300px] sm:h-[500px] md:h-[550px] overflow-hidden'>
            <img src='/images/join-us-section/image.JPG' className='h-full object-cover object-center' />
          </div>
          <form onSubmit={handleSubmit} className='space-y-4'>
            <input className='p-6 bg-gray-300 placeholder:text-black/70 w-full outline-none' name='fullname' placeholder={t('nameAndLastname')} />
            <input className='p-6 bg-gray-300 placeholder:text-black/70 w-full outline-none' name='mail' placeholder={t('emailAddress')} />
            <div className='relative'>
              <button onClick={() => setIsOpen((prev) => !prev)} type='button' className='p-6 bg-gray-300 w-full text-left'>{level ? level : t('eduLevel')}</button>
              <div className={clsx('absolute right-6 top-1/2 -translate-y-1/2', {
                '': isOpen,
                'rotate-180': !isOpen
              })}><IoIosArrowUp /></div>
            </div>
            {isOpen &&
              <div>
                {levels.map((item) => {
                  return <button key={item} onClick={() => {
                    setLevel(t(item))
                    setIsOpen(false)
                  }} type='button' className='p-6 bg-gray-300 w-full text-left hover:bg-black hover:text-gray-300'>{t(item)} </button>
                })}
              </div>
            }
            <button className='p-6 bg-black text-white w-full'>{t('sendApplication')}</button>
          </form>
        </div>
      </Container>
    </Section>
  )
}
