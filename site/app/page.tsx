import { Hero } from "@/components/layout/hero"
import { Benefits } from "@/components/sections/benefits"
import { Explore } from "@/components/sections/explore"
import { SignUp } from "@/components/sections/signup"

export default function Page() {
    return (
        <>
            <Hero />
            <Benefits />
            <Explore />
            <SignUp />
        </>
    )
}