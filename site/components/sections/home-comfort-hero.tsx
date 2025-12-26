"use client"

import * as React from "react"
import { ArrowLeft01Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { cn } from "@/lib/utils"

interface Slide {
  id: number
  title: string
  subtitle: string
  image: string
}

const slides: Slide[] = [
  {
    id: 1,
    title: "There's only one Stalvowall",
    subtitle: "To help you stay cool in summer and warm in winter",
    image: "/image.png",
  },
  {
    id: 2,
    title: "Superior Thermal Performance",
    subtitle: "Energy efficient homes that keep you comfortable year-round",
    image: "/image.png",
  },
  {
    id: 3,
    title: "Built to Last",
    subtitle: "Durability and comfort for your family",
    image: "/image.png",
  },
]

export function HomeComfortHero() {
  const [activeIndex, setActiveIndex] = React.useState(0)

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const goToSlide = (index: number) => {
    setActiveIndex(index)
  }

  return (
    <section className="relative w-full h-[calc(100vh-var(--header-height)+8px)] min-h-[500px] bg-muted">
      {/* Breadcrumb */}
      <div className="absolute top-8 left-0 right-0 z-20">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex items-center space-x-2 text-sm text-white">
            <a href="/" className="hover:underline">
              Home
            </a>
            <span>&gt;</span>
            <span>Home comfort</span>
          </nav>
        </div>
      </div>

      {/* Slider Container */}
      <div className="relative w-full h-full overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={cn(
              "absolute inset-0 transition-opacity duration-700",
              index === activeIndex ? "opacity-100" : "opacity-0 pointer-events-none"
            )}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('${slide.image}')`,
              }}
            >
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Content */}
            <div className="relative h-full flex items-center justify-center text-center px-6">
              <div className="max-w-7xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl text-white/90">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center text-white hover:bg-white/10 rounded-full transition-colors"
          aria-label="Previous slide"
        >
          <HugeiconsIcon icon={ArrowLeft01Icon} className="w-8 h-8" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center text-white hover:bg-white/10 rounded-full transition-colors"
          aria-label="Next slide"
        >
          <HugeiconsIcon icon={ArrowRight01Icon} className="w-8 h-8" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "w-2.5 h-2.5 rounded-full transition-all duration-300",
                index === activeIndex
                  ? "bg-white w-8"
                  : "bg-white/50 hover:bg-white/75"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
