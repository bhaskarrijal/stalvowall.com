import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import { Linkedin01Icon, Facebook01Icon, YoutubeIcon, News01Icon } from "@hugeicons/core-free-icons"

const navLinks = [
  { label: "Who we are", href: "/who-we-are" },
  { label: "Brands", href: "/brands" },
  { label: "Services", href: "/services" },
  { label: "Innovation", href: "/innovation" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Compliance", href: "/compliance" },
  { label: "Contact", href: "/contact" },
]

const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin01Icon },
  { label: "Facebook", href: "https://facebook.com", icon: Facebook01Icon },
  { label: "YouTube", href: "https://youtube.com", icon: YoutubeIcon },
  { label: "Newsroom", href: "/newsroom", icon: News01Icon },
]

const legalLinks = [
  { label: "General Terms and Conditions", href: "/terms" },
  { label: "Purchasing", href: "/purchasing" },
  { label: "Privacy policy", href: "/privacy" },
  { label: "Imprint", href: "/imprint" },
  { label: "Terms of use", href: "/terms-of-use" },
]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-screen-2xl px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          <div>
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold tracking-tight text-primary-foreground">
                stalvowall<span className="text-primary-foreground/60 text-lg font-normal">.com</span>
              </span>
            </Link>
            <p className="text-primary-foreground/80 mb-6 max-w-xs">
              Do you have any questions? We&apos;re here for you. We&apos;ll answer your email as soon as possible.
            </p>
            <Link
              href="/contact"
              className="inline-block px-6 py-2.5 text-sm font-medium bg-white text-primary hover:bg-primary-foreground/90 transition-colors"
            >
              Click here!
            </Link>
          </div>

          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-primary-foreground/90 hover:text-primary-foreground transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-4">
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="flex items-center gap-3 text-primary-foreground/90 hover:text-primary-foreground transition-colors"
              >
                <HugeiconsIcon icon={link.icon} className="h-5 w-5" />
                <span className="font-medium">{link.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/20">
        <div className="mx-auto max-w-screen-2xl px-6 lg:px-8 py-4 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/70">
          <p>2024 Stalvo International. All rights reserved.</p>
          <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-primary-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
