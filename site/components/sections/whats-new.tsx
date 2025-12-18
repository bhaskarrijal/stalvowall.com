import Image from "next/image"
import Link from "next/link"

interface WhatsNewProps {
  title: string
  location: string
  date: string
  description: string
  image: string
  href: string
}

export function WhatsNew({
  title = "Stalvo Announces Global Expansion",
  location = "Kathmandu",
  date = "December 19, 2025",
  description = "Today marks a truly great milestone in Stalvo's journey. We are excited to announce that our company has signed a major partnership agreement to expand operations across South Asia, strengthening our position as a leader in sustainable construction, operating in 25 markets.",
  image = "/image.png",
  href = "/news/global-expansion",
}: Partial<WhatsNewProps>) {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-screen-2xl px-6 lg:px-8">
        <div className="mb-8">
          <span className="text-sm font-medium text-muted-foreground tracking-wide">#WHAT&apos;S NEW</span>
          <div className="mt-2 w-12 h-0.5 bg-primary" />
        </div>

        <h2 className="text-4xl font-medium text-foreground mb-10 max-w-3xl leading-[1.25]">
          {title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-start">
          <div className="relative aspect-[4/3]">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-center py-4 max-w-md">
            <p className="text-lg font-medium text-foreground mb-4 leading-[1.44]">
              {location}, {date}
            </p>
            <p className="text-lg font-normal text-foreground leading-[1.44] mb-8">
              {description}
            </p>
            <Link
              href={href}
              className="inline-block self-start px-6 py-2.5 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Read more
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
