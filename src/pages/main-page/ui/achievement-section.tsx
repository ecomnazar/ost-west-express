import { Container } from "@/shared/ui/container"
import { Section } from "@/shared/ui/section"

export const AchievementSection = () => {
    return (
        <Section>
            <Container className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-10">
                {Array.from({ length: 4 }).map((_, idx) => {
                    return <div key={idx} className={"bg-gray-300 h-[300px] sm:h-[350px] md:h-[500px]"}>
                        {idx}
                    </div>
                })}
            </Container>
        </Section>
    )
}
