export interface SubMenuItem {
  href: string
  label: string
}

export interface NavLink {
  href: string
  label: string
  subMenuItems?: SubMenuItem[]
}

export const mainNavLinks: NavLink[] = [
  { href: "/home-comfort", label: "Home Comfort" },
  {
    href: "/inform-and-inspire",
    label: "Inform and Inspire",
    subMenuItems: [
      { href: "/inform-and-inspire/videos", label: "Videos" },
      { href: "/inform-and-inspire/gallery", label: "Gallery" },
      { href: "/inform-and-inspire/articles", label: "Articles" },
      { href: "/inform-and-inspire/case-studies", label: "Case Studies" },
    ],
  },
  {
    href: "/products",
    label: "Products",
    subMenuItems: [
      { href: "/products/eps-panels", label: "EPS Panels" },
      { href: "/products/aerated-panels", label: "Aerated Panels" },
      { href: "/products/eps-blocks", label: "EPS Blocks" },
    ],
  },
  {
    href: "/resources",
    label: "Resources",
    subMenuItems: [
      { href: "/resources/brochure", label: "Brochure" },
      { href: "/resources/test-report", label: "Test Report" },
    ],
  },
]
