"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

interface ExploreCard {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  href: string
}

const exploreCards: ExploreCard[] = [
  {
    id: 1,
    title: "Best practice tips for building with Stalvowalls",
    description: "King Homes NSW builds around 120 homes in Sydney and surrounds each year. Every residential project is unique – ranging from compact single-storey dwellings to sprawling multi-generational...",
    image: "/image.png",
    tags: ["Houses", "Residential Floors", "PowerFloor®"],
    href: "/case-studies/king-homes",
  },
  {
    id: 2,
    title: "One material, endless applications",
    description: "Versatile, durable and easy to install, Stalvowalls many applications means it can deliver a variety of building solutions for your next project.",
    image: "/image.png",
    tags: ["Apartments", "Party Walls", "PowerFloor+"],
    href: "/applications",
  },
  {
    id: 3,
    title: "The Sky's the limit",
    description: "It's all about strong connections – and understanding a client's preferred aesthetic when it comes to creating a beautiful home, says award-winning architect Sky Tiong from Sky...",
    image: "/image.png",
    tags: ["Houses", "Residential External Walls", "PowerPanel50"],
    href: "/case-studies/sky-tiong",
  },
]

export function Explore() {
  return (
    <section className="w-full py-16 md:py-24 bg-background border-t">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-medium text-foreground">
            Explore what is possible with Stalvowalls
          </h2>
        </div>

        {/* Cards Grid - 70% left, 30% right */}
        <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-6">
          {/* Left Column - Two horizontal cards stacked */}
          <div className="flex flex-col gap-6">
            {/* First horizontal card */}
            <Link
              href={exploreCards[0].href}
              className="group relative overflow-hidden bg-[#E5E1DB] hover:shadow-lg transition-shadow"
            >
              <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] h-full">
                {/* Content */}
                <div className="p-8 md:p-12 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-normal text-foreground mb-4 leading-tight">
                      {exploreCards[0].title}
                    </h3>
                    <p className="text-sm text-foreground/80 mb-6 leading-relaxed">
                      {exploreCards[0].description}
                    </p>
                  </div>

                  {/* Tags and Arrow */}
                  <div className="flex items-end justify-between">
                    <div className="flex flex-wrap gap-2">
                      {exploreCards[0].tags.map((tag, index) => (
                        <span
                          key={index}
                          className="text-xs px-3 py-1.5 bg-white border border-border rounded-full text-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="ml-4 w-12 h-12 rounded-full border-2 border-foreground flex items-center justify-center flex-shrink-0 group-hover:bg-foreground group-hover:text-background transition-colors">
                      <HugeiconsIcon icon={ArrowRight01Icon} className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div className="relative w-full h-[240px] md:w-[380px] md:h-auto overflow-hidden">
                  <Image
                    src={exploreCards[0].image}
                    alt={exploreCards[0].title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </Link>

            {/* Second horizontal card */}
            <Link
              href={exploreCards[1].href}
              className="group relative overflow-hidden bg-[#E5E1DB] hover:shadow-lg transition-shadow"
            >
              <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] h-full">
                {/* Content */}
                <div className="p-8 md:p-12 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-normal text-foreground mb-4 leading-tight">
                      {exploreCards[1].title}
                    </h3>
                    <p className="text-sm text-foreground/80 mb-6 leading-relaxed">
                      {exploreCards[1].description}
                    </p>
                  </div>

                  {/* Tags and Arrow */}
                  <div className="flex items-end justify-between">
                    <div className="flex flex-wrap gap-2">
                      {exploreCards[1].tags.map((tag, index) => (
                        <span
                          key={index}
                          className="text-xs px-3 py-1.5 bg-white border border-border rounded-full text-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="ml-4 w-12 h-12 rounded-full border-2 border-foreground flex items-center justify-center flex-shrink-0 group-hover:bg-foreground group-hover:text-background transition-colors">
                      <HugeiconsIcon icon={ArrowRight01Icon} className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div className="relative w-full h-[240px] md:w-[380px] md:h-auto overflow-hidden">
                  <Image
                    src={exploreCards[1].image}
                    alt={exploreCards[1].title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </Link>
          </div>

          {/* Right Column - Vertical card */}
          <Link
            href={exploreCards[2].href}
            className="group relative overflow-hidden bg-[#E5E1DB] hover:shadow-lg transition-shadow flex flex-col h-full"
          >
            {/* Image on top */}
            <div className="relative h-[50%] overflow-hidden">
              <Image
                src={exploreCards[2].image}
                alt={exploreCards[2].title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col flex-1 justify-between">
              <div>
                <h3 className="text-2xl font-normal text-foreground mb-4 leading-tight">
                  {exploreCards[2].title}
                </h3>
                <p className="text-sm text-foreground/80 mb-6 leading-relaxed">
                  {exploreCards[2].description}
                </p>
              </div>

              {/* Tags and Arrow */}
              <div className="flex items-end justify-between">
                <div className="flex flex-wrap gap-2">
                  {exploreCards[2].tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs px-3 py-1.5 bg-white border border-border rounded-full text-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="ml-4 w-12 h-12 rounded-full border-2 border-foreground flex items-center justify-center flex-shrink-0 group-hover:bg-foreground group-hover:text-background transition-colors">
                  <HugeiconsIcon icon={ArrowRight01Icon} className="w-5 h-5" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
