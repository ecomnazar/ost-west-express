import { Container } from '@/shared/ui/container'
import { Section } from '@/shared/ui/section'

export const AboutUsSection = () => {
    return (
        <Section>
            <Container className='grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-10'>
                {Array.from({ length: 4 }).map((_, idx) => {
                    return <div key={idx} className='bg-gray-300 h-[200px] sm:h-[250px] lg:h-[300px]'>
                    </div>
                })}
            </Container>
        </Section>
    )
}
