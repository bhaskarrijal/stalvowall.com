"use client"

import * as React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import type { Swiper as SwiperType } from "swiper"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"

import "swiper/css"

interface Slide {
  id: number
  title: string
  subtitle: string
  image: string
  cta: {
    text: string
    href: string
  }
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Stalvo Comfort",
    subtitle: "The unique feeling you get with Stalvo",
    image: "/image.png",
    cta: {
      text: "Learn more",
      href: "/home-comfort",
    },
  },
  {
    id: 2,
    title: "CSR Style Guide",
    subtitle: "Your design & build toolkit",
    image: "/image.png",
    cta: {
      text: "Learn more",
      href: "/resources",
    },
  },
  {
    id: 3,
    title: "Cemintel Junction Guide",
    subtitle: "See it, design it, build it",
    image: "/image.png",
    cta: {
      text: "Learn more",
      href: "/resources",
    },
  },
  {
    id: 4,
    title: "Introducing StalvoPRO",
    subtitle: "Your mobile-friendly hub, built for installers",
    image: "/image.png",
    cta: {
      text: "Learn more",
      href: "/products",
    },
  },
]

export function Hero() {
  const [swiperInstance, setSwiperInstance] = React.useState<SwiperType | null>(null)
  const [activeIndex, setActiveIndex] = React.useState(0)

  return (
    <section className="relative w-full h-[calc(100vh-var(--header-height)+8px)] bg-muted">
      <Swiper
        modules={[Autoplay]}
        speed={600}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        onSwiper={setSwiperInstance}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url('${slide.image}')`,
                }}
              >
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/30" />
              </div>

              {/* Content */}
              <div className="relative h-full flex items-center justify-center text-center px-6">
                <div className="max-w-4xl">
                  <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl text-white/90 mb-8">
                    {slide.subtitle}
                  </p>
                  <Link
                    href={slide.cta.href}
                    className={cn(
                      buttonVariants({ size: "sm" }),
                      "h-8 px-4 text-sm"
                    )}
                  >
                    {slide.cta.text}
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Bottom Navigation Cards */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => swiperInstance?.slideTo(index)}
              className={cn(
                "relative overflow-hidden transition-all duration-300 group cursor-pointer",
                "backdrop-blur-md bg-black/30 hover:bg-black/50",
                "border-r last:border-r-0 border-white/20",
                activeIndex === index && "bg-black/50"
              )}
            >
              <div className="p-6 min-h-[120px] flex flex-col justify-center">
                <h3 className="text-base font-semibold text-white mb-1 line-clamp-1">
                  {slide.title}
                </h3>
                <p className="text-sm text-white/80 line-clamp-2">
                  {slide.subtitle}
                </p>
              </div>
              {/* Top indicator bar */}
              <div className={cn(
                "absolute top-0 left-0 right-0 h-1",
                activeIndex === index ? "bg-primary" : "bg-white"
              )} />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
