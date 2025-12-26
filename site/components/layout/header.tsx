"use client"

import * as React from "react"
import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import { Menu01Icon, ArrowDown01Icon, Share08Icon, Mail01Icon } from "@hugeicons/core-free-icons"
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
        <SheetContent side="right" className="w-72 p-6">
          <div className="flex flex-col gap-6 mt-6">
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className={cn(buttonVariants({ size: "sm" }), "w-full gap-2")}>
              <HugeiconsIcon icon={Mail01Icon} className="h-4 w-4" />
              Contact
            </Link>
            <nav className="flex flex-col gap-1">
              {mainNavLinks.map((link) =>
                link.subMenuItems ? (
                  <div key={link.href} className="py-2">
                    <span className="text-sm font-medium text-foreground">{link.label}</span>
                    <div className="flex flex-col gap-1 mt-2 ml-3">
                      {link.subMenuItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>
          </div>
        </SheetContent>
      </Sheet>

      {/* Share Dialog */}
      <ShareDialog open={shareDialogOpen} onOpenChange={setShareDialogOpen} />
    </>
  )
}
