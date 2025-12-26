interface SimpleHeroProps {
  title: string
  breadcrumbLabel: string
  parentHref?: string
  parentLabel?: string
}

export function SimpleHero({
  title,
  breadcrumbLabel,
  parentHref = "/inform-and-inspire",
  parentLabel = "Inform and Inspire"
}: SimpleHeroProps) {
  return (
    <section className="relative w-full bg-muted py-16">
      {/* Breadcrumb */}
      <div className="absolute top-8 left-0 right-0 z-20">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
            <a href="/" className="hover:underline">
              Home
            </a>
            <span>&gt;</span>
            <a href={parentHref} className="hover:underline">
              {parentLabel}
            </a>
            <span>&gt;</span>
            <span>{breadcrumbLabel}</span>
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 pt-8">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground">
          {title}
        </h1>
      </div>
    </section>
  )
}
