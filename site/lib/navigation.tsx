import * as React from "react"
import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowRight02Icon } from "@hugeicons/core-free-icons"

export interface SubMenuItem {
  href: string
  label: string
}

export interface NavLink {
  href: string
  label: string
  useSheet?: boolean
  sheetTitle?: string
  sheetDescription?: string
  subMenuItems?: SubMenuItem[]
}

export const topNavLinks: NavLink[] = [
  { href: "/contact", label: "Contact" },
  { href: "/careers", label: "Careers" },
  { href: "/news", label: "News" },
]

export const mainNavLinks: NavLink[] = [
  {
    href: "/who-we-are",
    label: "Who we are",
    useSheet: true,
    sheetTitle: "Who we are",
    sheetDescription: "Learn more about stalvowall and our mission.",
    subMenuItems: [
      { href: "/who-we-are/stalvo-in-portrait", label: "Stalvo in portrait" },
      { href: "/who-we-are/key-figures", label: "Key figures" },
      { href: "/who-we-are/what-we-want-to-achieve", label: "What we want to achieve" },
      { href: "/who-we-are/our-management", label: "Our management" },
      { href: "/who-we-are/our-history", label: "Our history" },
      { href: "/who-we-are/compliance", label: "Compliance" },
    ],
  },
  { href: "/brands", label: "Brands" },
  {
    href: "/services",
    label: "Services",
    useSheet: true,
    sheetTitle: "Services",
    sheetDescription: "Explore our range of services.",
    subMenuItems: [
      { href: "/services/building-information-modeling", label: "Building Information Modeling (BIM)" },
      { href: "/services/digital-planning-service", label: "Digital planning service (blue.sprint)" },
      { href: "/services/construction-services", label: "Construction Services" },
      { href: "/services/export-and-licence-business", label: "Export and Licence Business" },
    ],
  },
  {
    href: "/sustainability",
    label: "Sustainability",
    useSheet: true,
    sheetTitle: "Sustainability",
    sheetDescription: "Our commitment to sustainable practices and ESG initiatives.",
    subMenuItems: [
      { href: "/sustainability/sustainability-report-2024", label: "Sustainability Report 2024" },
      { href: "/sustainability/our-approach", label: "Our Approach" },
      { href: "/sustainability/our-esg-strategy", label: "Our ESG Strategy" },
      { href: "/sustainability/governance", label: "Governance" },
      { href: "/sustainability/environment", label: "Environment" },
      { href: "/sustainability/people", label: "People" },
      { href: "/sustainability/business-ethics-and-integrity", label: "Business Ethics and Integrity" },
      { href: "/sustainability/reports-and-policies", label: "Reports and policies" },
    ],
  },
  {
    href: "/research",
    label: "Research",
    useSheet: true,
    sheetTitle: "Research",
    sheetDescription: "Our research and innovation initiatives.",
    subMenuItems: [
      { href: "/research/20th-anniversary", label: "20th Anniversary" },
      { href: "/research/technology-and-research", label: "Technology and Research" },
      { href: "/research/our-innovation-process", label: "Our Innovation Process" },
      { href: "/research/team-and-contact", label: "Team and Contact" },
      { href: "/research/seminars-and-downloads", label: "Seminars and Downloads" },
    ],
  },
]

export function renderSubMenuItems(items: SubMenuItem[]): React.ReactNode {
  return (
    <nav className="flex flex-col gap-0">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="flex items-center gap-2 text-sm text-foreground hover:text-primary hover:translate-x-1 transition-all py-1"
        >
          <HugeiconsIcon
            icon={ArrowRight02Icon}
            className="h-4 w-4"
          />
          <span>{item.label}</span>
        </Link>
      ))}
    </nav>
  )
}
