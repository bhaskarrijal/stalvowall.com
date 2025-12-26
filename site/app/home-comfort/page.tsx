import { HomeComfortHero } from "@/components/sections/home-comfort-hero"
import { HomeComfortIntro } from "@/components/sections/home-comfort-intro"
import { HomeComfortFeatures } from "@/components/sections/home-comfort-features"
import { HomeComfortBenefits } from "@/components/sections/home-comfort-benefits"
import { HomeComfortSolutions } from "@/components/sections/home-comfort-solutions"
import { SignUp } from "@/components/sections/signup"

export default function HomeComfortPage() {
  return (
    <>
      <HomeComfortHero />
      <HomeComfortIntro />
      <HomeComfortFeatures />
      <HomeComfortBenefits />
      <HomeComfortSolutions />
      <SignUp />
    </>
  )
}
