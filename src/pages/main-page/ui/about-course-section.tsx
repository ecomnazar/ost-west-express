import { Container } from "@/shared/ui/container"
import { Section } from "@/shared/ui/section"

export const AboutCourseSection = () => {
    return (
        <Section>
            <Container>
                <h2 className="text-3xl sm:text-6xl mb-6 sm:mb-12">Кому подойдет<br /> этот курс</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-10">
                    {Array.from({ length: 3 }).map((_, idx) => {
                        return <div key={idx} className="bg-gray-300 h-[500px]" />
                    })}
                </div>
            </Container>
        </Section>
    )
}
