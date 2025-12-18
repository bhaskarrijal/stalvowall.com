import Link from "next/link"

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[calc(100vh-var(--header-height,80px)-200px)] px-6">
      <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-2xl font-medium text-foreground mb-2">Page not found</h2>
      <p className="text-muted-foreground mb-8 text-center max-w-md">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-6 py-2.5 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
      >
        Back to home
      </Link>
    </section>
  )
}
