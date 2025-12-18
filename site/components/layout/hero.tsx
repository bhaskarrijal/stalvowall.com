import Image from "next/image"

export function Hero() {
  return (
    <section className="h-[calc(100vh-var(--header-height,80px))] flex flex-col md:flex-row">
      <div className="h-[40%] md:h-full md:w-[40%] bg-primary flex shrink-0">
        <div className="w-full flex flex-col justify-center pl-6 pr-6 lg:pl-[max(2rem,calc((100vw-1536px)/2+2rem))] lg:pr-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight">
            We are building<br />a sustainable world.
          </h1>
          <p className="mt-4 text-xl md:text-2xl lg:text-3xl text-primary-foreground font-medium">
            We are Stalvo.
          </p>
        </div>
      </div>

      <div className="h-[60%] md:h-full md:flex-1 relative">
        <Image
          src="/image.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  )
}
