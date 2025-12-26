import Image from "next/image"

interface Benefit {
  id: number
  icon: string
  title: string
  description: string
}

const benefits: Benefit[] = [
  {
    id: 1,
    icon: "/icons/energy eff.svg",
    title: "Comfort and insulation",
    description:
      "Stalvo EPS and aerated prefabricated panels create a cozy indoor environment by providing superior thermal insulation. This means your home stays cooler in the summer and warmer in the winter, reducing the need for excessive heating or cooling. Enjoy year-round comfort while saving on energy bills.",
  },
  {
    id: 2,
    icon: "/icons/noise-red.svg",
    title: "Remarkable soundproofing",
    description:
      "Say goodbye to unwanted noise from outside or between rooms. Stalvo panels offer exceptional soundproofing qualities ensuring a peaceful and serene living space, perfect for relaxation and quality family time.",
  },
  {
    id: 3,
    icon: "/icons/sustain.svg",
    title: "Sustainable building material",
    description:
      "Concerned about the environment? Stalvo EPS and aerated panels are made from sustainable raw materials and have a smaller carbon footprint compared to traditional concrete. By choosing Stalvo, you're contributing to a greener planet.",
  },
  {
    id: 4,
    icon: "/icons/strong.svg",
    title: "Weather and pest resistant",
    description:
      "Don't be fooled by its lightweight nature — Stalvo panels are incredibly strong and durable. They withstand harsh weather conditions and are resistant to pests like termites, ensuring your home remains solid and secure for years to come.",
  },
  {
    id: 5,
    icon: "/icons/fire-res.svg",
    title: "Unmatched strength, durability, and fire protection",
    description:
      "Stalvo combines strength, durability, and safety in one lightweight material ensuring your home stays solid and secure for years. Additionally, its non-combustible nature and ability to endure extreme heat provide vital fire resistance, adding an extra layer of protection for your loved ones and valuable belongings.",
  },
]

export function HomeComfortBenefits() {
  return (
    <section className="w-full py-8 md:py-12 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[35%_65%] gap-12">
          {/* Left Column - Title */}
          <div>
            <h2 className="font-normal text-[rgb(40,40,41)]" style={{ fontSize: '38px', lineHeight: '46px', fontFamily: '"Figtree", Helvetica, Arial, Lucida, sans-serif' }}>
              The Stalvo feeling
            </h2>
            <p className="mt-6 font-normal text-[rgb(40,40,41)]" style={{ fontSize: '18px', lineHeight: '22px', fontFamily: '"Figtree", Helvetica, Arial, Lucida, sans-serif' }}>
              Stalvo is packed with qualities you can feel — from the year-round comfort provided by its thermal properties to the quiet, peaceful experience between rooms thanks to its acoustic performance, and the sturdy, solid feel of its walls and flooring underfoot.
            </p>
          </div>

          {/* Right Column - Benefits List */}
          <div className="space-y-8">
            {benefits.map((benefit) => (
              <div key={benefit.id} className="flex gap-6 pb-8 border-b border-border last:border-b-0">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 relative">
                    <Image
                      src={benefit.icon}
                      alt={benefit.title}
                      width={64}
                      height={64}
                      className="w-full h-full"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="mb-3 font-bold text-[rgb(51,51,51)]" style={{ fontSize: '18px', lineHeight: '22px', fontFamily: '"Figtree Semibold", sans-serif' }}>
                    {benefit.title}
                  </h3>
                  <p className="font-normal text-[rgb(40,40,41)]" style={{ fontSize: '16px', lineHeight: '19px', fontFamily: '"Figtree Regular", sans-serif' }}>
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
