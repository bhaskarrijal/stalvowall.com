"use client"

import * as React from "react"
import { motion, AnimatePresence } from "motion/react"
import Image from "next/image"

interface Benefit {
  id: number
  icon: string
  title: string
  description: string
}

const benefitsByAudience: Record<number, Benefit[]> = {
  1: [ // Builders
    {
      id: 1,
      icon: "/icons/check.svg",
      title: "Proven & compliant systems",
      description: "Stalvowalls is the only manufacturer of EPS PANELS and AERATED PANELS in Australia. Backed by CSR, Stalvowalls is supported by a team of experts to ensure your design is compliant.",
    },
    {
      id: 2,
      icon: "/icons/strong.svg",
      title: "Strong & solid",
      description: "Stalvowalls panels are high-performance products containing steel reinforcement for added strength with an anti-corrosion layer on the steel for maximum durability.",
    },
    {
      id: 3,
      icon: "/icons/quality.svg",
      title: "Quality & speed",
      description: "Building with Stalvowalls can mean faster construction times, without sacrificing on quality.",
    },
    {
      id: 4,
      icon: "/icons/fire-res.svg",
      title: "Fire resistant",
      description: "Stalvowalls is a non-combustible building material and renowned for its fire resistant properties.",
    },
  ],
  2: [ // Installers
    {
      id: 1,
      icon: "/icons/strong.svg",
      title: "Strong & solid",
      description: "Stalvowalls panels are high-performance products containing steel reinforcement for added strength with an anti-corrosion layer on the steel for maximum durability.",
    },
    {
      id: 2,
      icon: "/icons/quality.svg",
      title: "Quality & speed",
      description: "Building with Stalvowalls can mean faster construction times, without sacrificing on quality.",
    },
    {
      id: 3,
      icon: "/icons/fire-res.svg",
      title: "Fire resistant",
      description: "Stalvowalls is a non-combustible building material and renowned for its fire resistant properties.",
    },
    {
      id: 4,
      icon: "/icons/sustain.svg",
      title: "Sustainable",
      description: "Stalvowalls is made using readily available raw materials. It's also available in custom sizes reducing construction waste.",
    },
  ],
  3: [ // Architects
    {
      id: 1,
      icon: "/icons/check.svg",
      title: "Proven & compliant systems",
      description: "Stalvowalls is the only manufacturer of EPS PANELS and AERATED PANELS in Australia. Backed by CSR, Stalvowalls is supported by a team of experts to ensure your design is compliant.",
    },
    {
      id: 2,
      icon: "/icons/strong.svg",
      title: "Strong & solid",
      description: "Stalvowalls panels are high-performance products containing steel reinforcement for added strength with an anti-corrosion layer on the steel for maximum durability.",
    },
    {
      id: 3,
      icon: "/icons/energy eff.svg",
      title: "Energy efficient",
      description: "Stalvowalls performs well thermally, helping to keep your house cool in summer and warm and cosy in winter.",
    },
    {
      id: 4,
      icon: "/icons/sustain.svg",
      title: "Sustainable",
      description: "Stalvowalls is made using readily available raw materials. It's also available in custom sizes reducing construction waste.",
    },
  ],
  4: [ // Homeowners
    {
      id: 1,
      icon: "/icons/strong.svg",
      title: "Strong & solid",
      description: "Stalvowalls panels are high-performance products containing steel reinforcement for added strength with an anti-corrosion layer on the steel for maximum durability.",
    },
    {
      id: 2,
      icon: "/icons/energy eff.svg",
      title: "Energy efficient",
      description: "Stalvowalls performs well thermally, helping to keep your house cool in summer and warm and cosy in winter.",
    },
    {
      id: 3,
      icon: "/icons/noise-red.svg",
      title: "Noise reduction",
      description: "A Stalvowalls home is a quiet one because it reduces noise transmission. When used for upper floors it can reduce sound transference between levels.",
    },
    {
      id: 4,
      icon: "/icons/quality.svg",
      title: "Design versatility",
      description: "With Stalvowalls the design possibilities are endless with a wide range of aesthetic coating options.",
    },
  ],
}

const audienceTypes = [
  { id: 1, label: "Builders" },
  { id: 2, label: "Installers" },
  { id: 3, label: "Architects" },
  { id: 4, label: "Homeowners" },
]

export function Benefits() {
  const [activeAudience, setActiveAudience] = React.useState(1)
  const activeBenefits = benefitsByAudience[activeAudience]

  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">
            <span className="text-primary">There is only one Stalvowalls.</span>{" "}
            <span className="text-foreground/70 font-thin">
              It's the hidden talents of Stalvowalls that make it such a unique and versatile building product.
              From facades to floors and walls, Stalvowalls brings it all together while finishing it off with stunning contemporary design looks.
            </span>
          </h2>
        </div>

        {/* Audience Tabs */}
        <div className="flex gap-8 border-b border-border mb-12">
          {audienceTypes.map((audience) => (
            <button
              key={audience.id}
              onClick={() => setActiveAudience(audience.id)}
              className={`pb-4 text-sm font-medium transition-colors relative ${
                activeAudience === audience.id
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {audience.label}
              {activeAudience === audience.id && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
              )}
            </button>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeAudience}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 col-span-full"
            >
              {activeBenefits.map((benefit) => (
                <div key={benefit.id} className="flex flex-col">
                  <div className="mb-4 w-12 h-12 relative">
                    <Image
                      src={benefit.icon}
                      alt={benefit.title}
                      width={48}
                      height={48}
                      className="w-full h-full"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-base text-[rgb(40,40,41)] leading-[19px] font-normal" style={{ fontFamily: '"Figtree", sans-serif' }}>
                    {benefit.description}
                  </p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
