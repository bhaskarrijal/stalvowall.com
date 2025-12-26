"use client"

import * as React from "react"
import { motion, AnimatePresence } from "motion/react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface Feature {
  id: number
  title: string
  verticalTitle: string
  description: string
  image: string
  bgColor: string
}

const features: Feature[] = [
  {
    id: 1,
    title: "Stalvowall's versatility",
    verticalTitle: "Stalvowall's versatility",
    description:
      "Stalvowall is a great material to build with. It's versatility makes it perfect for floors, walls and ceilings. It's also a great material to render directly onto; perfect for those striking feature walls.",
    image: "/image.png",
    bgColor: "#F2F0EC",
  },
  {
    id: 2,
    title: "A smarter way to build",
    verticalTitle: "A smarter way to build",
    description:
      "Stalvowall is incredibly strong and durable. It withstands harsh weather conditions and is resistant to pests like termites, ensuring your home remains solid and secure for years to come.",
    image: "/image.png",
    bgColor: "#E6E1DA",
  },
  {
    id: 3,
    title: "Year round comfort",
    verticalTitle: "Year round comfort",
    description:
      "Stalvowall has thermal capabilities, providing a consistent ambient temperature that keeps the home cool in summer and warm in winter.",
    image: "/image.png",
    bgColor: "#F2F0EC",
  },
]

export function HomeComfortFeatures() {
  const [expandedId, setExpandedId] = React.useState<number | null>(1)

  const toggleFeature = (id: number) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <section className="w-full py-8 md:py-12 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row h-auto md:h-[600px]">
          {features.map((feature, index) => {
            const isExpanded = expandedId === feature.id
            const totalFeatures = features.length

            return (
              <motion.div
                key={feature.id}
                className={cn(
                  "relative overflow-hidden cursor-pointer",
                  "flex-shrink-0"
                )}
                animate={{
                  flex: isExpanded ? "1 1 70%" : `1 1 15%`,
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                onClick={() => toggleFeature(feature.id)}
              >
                {/* Background - Solid color when collapsed, Image when expanded */}
                {isExpanded ? (
                  <div className="absolute inset-0">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                  </div>
                ) : (
                  <div
                    className="absolute inset-0"
                    style={{ backgroundColor: feature.bgColor }}
                  />
                )}

                {/* Vertical Title (when collapsed) */}
                <AnimatePresence>
                  {!isExpanded && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <div className="relative h-full flex items-center justify-center px-8">
                        <h3
                          className="text-3xl md:text-4xl font-medium text-foreground"
                          style={{
                            writingMode: "vertical-rl",
                            textOrientation: "mixed",
                            transform: "rotate(180deg)",
                          }}
                        >
                          {feature.verticalTitle}
                        </h3>
                      </div>

                      {/* Plus Icon */}
                      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                        <div className="w-12 h-12 rounded-full border-2 border-foreground flex items-center justify-center">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 5V19M5 12H19"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Expanded Content */}
                <AnimatePresence mode="wait">
                  {isExpanded && (
                    <motion.div
                      key={feature.id}
                      initial={{ opacity: 0, y: 60 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, transition: { duration: 0 } }}
                      transition={{
                        duration: 0.5,
                        delay: 0.4,
                        ease: "easeOut"
                      }}
                      className="relative h-full flex flex-col justify-between p-8 md:p-12"
                    >
                      <div>
                        <h3 className="text-3xl md:text-4xl font-medium text-white mb-6">
                          {feature.title}
                        </h3>
                        <p className="text-base md:text-lg text-white/90 max-w-md leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
