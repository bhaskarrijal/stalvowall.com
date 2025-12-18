import { Hero } from "@/components/layout/hero"
import { WhatsNew } from "@/components/sections/whats-new"

export default function Page() {
    return (
        <>
            <Hero />
            <section className="bg-[#F6F5F5] py-16 md:py-24">
                <div className="mx-auto max-w-screen-2xl px-6 lg:px-8">
                    <p className="text-2xl font-normal leading-[1.875] text-foreground max-w-4xl mx-auto text-center">
                        We stand for efficient, sustainable, and affordable building solutions. With our building and insulation materials based on mineral resources, our customers can build safely, conveniently, and cost-effectively. For healthy housing, working, and living.
                    </p>
                </div>
            </section>
            <WhatsNew />
        </>
    )
}