import clsx from 'clsx';
import React from 'react'

interface Props extends React.HTMLAttributes<HTMLElement> {
    className?: string;
    children: React.ReactNode
}

export const Section: React.FC<Props> = ({ className, children }) => {
    return (
        <section className={clsx('py-8 sm:py-16', className)}>
            {children}
        </section>
    )
}
