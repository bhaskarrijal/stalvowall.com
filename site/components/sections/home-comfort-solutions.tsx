import Image from "next/image"

interface Solution {
  id: number
  title: string
  description: string
  image: string
}

const solutions: Solution[] = [
  {
    id: 1,
    title: "External cladding",
    description:
      "Stalvowall can deliver a striking modern aesthetic with a distinctively architectural edge.",
    image: "/image.png",
  },
  {
    id: 2,
    title: "Internal walls",
    description:
      "Stalvowall's PowerPanel is a solid and secure wall solution, maximising floor space while providing the acoustic and thermal qualities throughout the home.",
    image: "/image.png",
  },
  {
    id: 3,
    title: "Flooring solutions",
    description:
      "Stalvowall flooring provides superior acoustic performance and thermal mass for comfortable, quiet living spaces.",
    image: "/image.png",
  },
  {
    id: 4,
    title: "Manufactured facades",
    description:
      "Create stunning architectural statements with Stalvowall's versatile facade solutions that combine beauty with performance.",
    image: "/image.png",
  },
]

export function HomeComfortSolutions() {
  return (
    <section className="w-full py-8 md:py-12 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-12">
          <h2 className="font-normal text-[rgb(40,40,41)]" style={{ fontSize: '38px', lineHeight: '46px', fontFamily: '"Figtree", Helvetica, Arial, Lucida, sans-serif' }}>
            Stalvowall solutions for home owners and renovators
          </h2>
        </div>

        {/* Grid of 4 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {solutions.map((solution) => (
            <div key={solution.id} className="group cursor-pointer">
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden mb-4">
                <Image
                  src={solution.image}
                  alt={solution.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div>
                <h3 className="mb-2 font-bold text-[rgb(51,51,51)]" style={{ fontSize: '18px', lineHeight: '22px', fontFamily: '"Figtree Semibold", sans-serif' }}>
                  {solution.title}
                </h3>
                <p className="font-normal text-[rgb(40,40,41)]" style={{ fontSize: '16px', lineHeight: '19px', fontFamily: '"Figtree Regular", sans-serif' }}>
                  {solution.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
