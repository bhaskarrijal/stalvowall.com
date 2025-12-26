"use client"

import * as React from "react"
import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import { Menu01Icon, ArrowDown01Icon, Share08Icon, Mail01Icon, Cancel01Icon } from "@hugeicons/core-free-icons"
import { buttonVariants } from "@/components/ui/button"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { ShareDialog } from "@/components/ui/share-dialog"
import { mainNavLinks, type NavLink } from "@/lib/navigation"
import { cn } from "@/lib/utils"

function NavDropdown({ link }: { link: NavLink }) {
  const [open, setOpen] = React.useState(false)
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 150)
  }

  return (
    <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <button className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors cursor-pointer outline-none">
        {link.label}
        <HugeiconsIcon icon={ArrowDown01Icon} className={cn("h-4 w-4 transition-transform duration-200", open && "rotate-180")} />
      </button>
      {open && (
        <div className="absolute top-full left-0 pt-2 z-50">
          <div className="bg-popover border border-border rounded-lg overflow-hidden min-w-48">
            {link.subMenuItems?.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "block px-3 py-2 text-sm text-foreground hover:bg-primary hover:text-primary-foreground transition-colors",
                  index !== 0 && "border-t border-border"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function MobileNavDropdown({ link, onLinkClick }: { link: NavLink; onLinkClick: () => void }) {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-sm font-medium text-foreground hover:bg-accent transition-colors"
      >
        {link.label}
        <HugeiconsIcon
          icon={ArrowDown01Icon}
          className={cn("h-4 w-4 transition-transform duration-200", open && "rotate-180")}
        />
      </button>
      {open && link.subMenuItems && (
        <div className="bg-accent/50">
          {link.subMenuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onLinkClick}
              className="block px-6 py-3 pl-10 text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors border-b border-border last:border-b-0"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

function Logo() {
  return (
    <Link href="/" className="flex items-center shrink-0" aria-label="Stalvowall home">
      <span className="text-2xl font-bold tracking-tight">
        <span className="text-primary">stalvowall</span>
        <span className="text-muted-foreground/60 text-lg font-normal">.com</span>
      </span>
    </Link>
  )
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const [shareDialogOpen, setShareDialogOpen] = React.useState(false)

  return (
    <>
      <header className="w-full border-b bg-background sticky top-0 z-50 py-1">
        <div className="mx-auto max-w-7xl px-6">
          {/* Desktop Header */}
          <div className="hidden lg:flex items-center justify-between h-16">
            <Logo />

            {/* Right: Navigation + CTA */}
            <div className="flex items-center gap-6">
              <nav className="flex items-center gap-6">
                {mainNavLinks.map((link) =>
                  link.subMenuItems ? (
                    <NavDropdown key={link.href} link={link} />
                  ) : (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  )
                )}
              </nav>
              <Link href="/contact" className={cn(buttonVariants({ size: "sm" }), "h-8 px-4 text-sm gap-2 flex items-center")}>
                <HugeiconsIcon icon={Mail01Icon} className="h-4 w-4" />
                Contact
              </Link>
              <button onClick={() => setShareDialogOpen(true)} className="p-2 text-foreground hover:text-primary transition-colors" aria-label="Share">
                <HugeiconsIcon icon={Share08Icon} className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Mobile Header */}
          <div className="flex lg:hidden items-center justify-between h-14">
            <Logo />
            <div className="flex items-center gap-2">
              <button onClick={() => setShareDialogOpen(true)} className="p-2 text-foreground hover:text-primary transition-colors" aria-label="Share">
                <HugeiconsIcon icon={Share08Icon} className="h-5 w-5" />
              </button>
              <button onClick={() => setMobileMenuOpen(true)} className="p-2 text-foreground hover:text-primary transition-colors" aria-label="Menu">
                <HugeiconsIcon icon={Menu01Icon} className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetContent side="right" className="w-full sm:w-80 p-0 gap-0" showCloseButton={false}>
          <div className="flex flex-col h-full">
            {/* Header with Logo and Close Button */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-border">
              <Logo />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-foreground hover:text-primary transition-colors"
                aria-label="Close menu"
              >
                <HugeiconsIcon icon={Cancel01Icon} className="h-5 w-5" />
              </button>
            </div>

            {/* Navigation Items */}
            <nav className="flex-1 overflow-y-auto">
              {mainNavLinks.map((link) =>
                link.subMenuItems ? (
                  <MobileNavDropdown
                    key={link.href}
                    link={link}
                    onLinkClick={() => setMobileMenuOpen(false)}
                  />
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-6 py-4 text-sm font-medium text-foreground hover:bg-accent transition-colors border-b border-border"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            {/* Contact Button - Fixed at bottom */}
            <div className="p-6 border-t border-border">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={cn(buttonVariants({ size: "default" }), "w-full gap-2")}
              >
                <HugeiconsIcon icon={Mail01Icon} className="h-4 w-4" />
                Contact
              </Link>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      {/* Share Dialog */}
      <ShareDialog open={shareDialogOpen} onOpenChange={setShareDialogOpen} />
    </>
  )
}
