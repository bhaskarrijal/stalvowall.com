"use client"

import * as React from "react"
import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import { SearchIcon, Cancel01Icon, Globe02Icon } from "@hugeicons/core-free-icons"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { NavigationSheet } from "./navigation-sheet"
import { topNavLinks, mainNavLinks, renderSubMenuItems, type NavLink } from "@/lib/navigation"

export function Header() {
  const [searchOpen, setSearchOpen] = React.useState(false)
  const [searchValue, setSearchValue] = React.useState("")
  const searchInputRef = React.useRef<HTMLInputElement>(null)
  const [openSheetHref, setOpenSheetHref] = React.useState<string | null>(null)
  const [currentSheetData, setCurrentSheetData] = React.useState<{
    title: string
    description?: string
    content: React.ReactNode
  } | null>(null)

  const handleSearchToggle = React.useCallback(() => {
    setSearchOpen((prev) => !prev)
  }, [])

  const handleSearchClose = React.useCallback(() => {
    setSearchOpen(false)
    setSearchValue("")
  }, [])

  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Escape") {
        handleSearchClose()
      }
      if (e.key === "Enter" && searchValue.trim()) {
        console.log("Search:", searchValue)
      }
    },
    [searchValue, handleSearchClose]
  )

  React.useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }, [searchOpen])

  const headerRef = React.useRef<HTMLElement>(null)

  React.useEffect(() => {
    if (headerRef.current) {
      const height = headerRef.current.offsetHeight
      document.documentElement.style.setProperty('--header-height', `${height}px`)
    }
  }, [])

  return (
    <header ref={headerRef} className="w-full border-b bg-background sticky top-0 z-50">
      <div className="mx-auto max-w-screen-2xl px-6 lg:px-8">
        <div className="flex items-stretch gap-8 py-4">
          {/* Logo - Left Side */}
          <Link
            href="/"
            className="flex items-center shrink-0"
            aria-label="Stalvowall home"
          >
            <span className="text-3xl font-bold tracking-tight">
              <span className="text-primary">
                stalvowall
              </span>
              <span className="text-muted-foreground/60 text-xl font-normal">
                .com
              </span>
            </span>
          </Link>

          {/* Right Side - All Navigation */}
          <div className="flex flex-col justify-between flex-1 py-1 gap-2">
            {/* Top Row Navigation */}
            <nav className="flex items-center justify-end gap-6 text-[13px]">
              {topNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-normal text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/group"
                className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
              >
                <HugeiconsIcon icon={Globe02Icon} className="h-4 w-4 text-primary" />
                <span>Stalvo Group</span>
              </Link>
            </nav>

            {/* Bottom Row - Main Navigation + Search */}
            <div className="flex items-center justify-end gap-7">
              <nav className="hidden md:flex items-center gap-7">
                {mainNavLinks.map((link) => {
                  if (link.useSheet && link.subMenuItems) {
                    return (
                      <button
                        key={link.href}
                        onClick={() => {
                          if (openSheetHref === link.href) {
                            setOpenSheetHref(null)
                            setCurrentSheetData(null)
                          } else {
                            setOpenSheetHref(link.href)
                            setCurrentSheetData({
                              title: link.sheetTitle || link.label,
                              description: link.sheetDescription,
                              content: renderSubMenuItems(link.subMenuItems!),
                            })
                          }
                        }}
                        className="text-base font-semibold text-foreground hover:text-primary transition-colors whitespace-nowrap cursor-pointer"
                      >
                        {link.label}
                      </button>
                    )
                  }
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-base font-semibold text-foreground hover:text-primary transition-colors whitespace-nowrap"
                    >
                      {link.label}
                    </Link>
                  )
                })}
              </nav>
            </div>
            {/* Shared Navigation Sheet */}
            {currentSheetData && (
              <NavigationSheet
                open={openSheetHref !== null}
                onOpenChange={(open) => {
                  if (!open) {
                    setOpenSheetHref(null)
                    setCurrentSheetData(null)
                  }
                }}
                title={currentSheetData.title}
                description={currentSheetData.description}
                contentKey={openSheetHref || ""}
              >
                {currentSheetData.content}
              </NavigationSheet>
            )}
          </div>
          <Separator orientation="vertical" />
          {/* Search */}
          <div className="flex items-center shrink-0">
            {searchOpen ? (
              <div className="flex items-center gap-2 animate-in fade-in slide-in-from-right-2 duration-200">
                <Input
                  ref={searchInputRef}
                  type="search"
                  placeholder="Search..."
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  onBlur={() => {
                    if (!searchValue.trim()) {
                      setTimeout(() => handleSearchClose(), 150)
                    }
                  }}
                  className="w-56"
                  aria-label="Search"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleSearchClose}
                  aria-label="Close search"
                >
                  <HugeiconsIcon icon={Cancel01Icon} className="h-5 w-5" />
                </Button>
              </div>
            ) : (
              <button
                onClick={handleSearchToggle}
                className="flex flex-col items-center gap-0.5 text-primary hover:text-primary/80 transition-colors"
                aria-label="Open search"
              >
                <HugeiconsIcon icon={SearchIcon} className="h-7 w-7" />
                <span className="text-sm font-semibold">
                  Search
                </span>
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}