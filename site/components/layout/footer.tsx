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
    <footer className="bg-[#E5E1DB] text-foreground border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          <div>
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold tracking-tight">
                <span className="text-primary">stalvowall</span>
                <span className="text-muted-foreground/60 text-lg font-normal">.com</span>
              </span>
            </Link>
            <p className="text-foreground/80 mb-6 max-w-xs leading-relaxed">
              Do you have any questions? We&apos;re here for you. We&apos;ll answer your email as soon as possible.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Get in touch
            </Link>
          </div>

          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-primary transition-colors font-medium text-sm"
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
                className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors group"
              >
                <div className="w-10 h-10 rounded-full border-2 border-foreground/20 group-hover:border-primary flex items-center justify-center transition-colors">
                  <HugeiconsIcon icon={link.icon} className="h-5 w-5" />
                </div>
                <span className="font-medium text-sm">{link.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-foreground/60">
          <p>© 2025 Stalvo International. All rights reserved.</p>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {legalLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-primary transition-colors"
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
