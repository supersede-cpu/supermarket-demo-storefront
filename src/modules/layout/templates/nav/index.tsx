import { Suspense } from "react"

import { listRegions } from "@lib/data/regions"
import { StoreRegion } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"

const navLinks = [
  { href: "/store", label: "Trgovina" },
  { href: "/about", label: "O nama" },
  { href: "/events", label: "Događaji" },
  { href: "/affiliate", label: "Suradnja" },
]

export default async function Nav() {
  const regions = await listRegions().then((regions: StoreRegion[]) => regions)

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className="relative h-20 mx-auto border-b duration-200 bg-white/95 backdrop-blur-sm border-light-border">
        <nav className="content-container text-dark-bg flex items-center justify-between w-full h-full">
          {/* Logo */}
          <div className="flex items-center">
            <LocalizedClientLink
              href="/"
              className="font-headline text-2xl tracking-tight hover:text-neon-green transition-colors"
              data-testid="nav-store-link"
            >
              LUDE KAPE
            </LocalizedClientLink>
          </div>

          {/* Desktop Navigation - Center */}
          <div className="hidden small:flex items-center gap-x-8">
            {navLinks.map((link) => (
              <LocalizedClientLink
                key={link.href}
                href={link.href}
                className="nav-link-hover text-[15.5px] uppercase tracking-wide text-grey-60 font-medium"
              >
                {link.label}
              </LocalizedClientLink>
            ))}
          </div>

          {/* Right side - Account & Cart */}
          <div className="flex items-center gap-x-6">
            <LocalizedClientLink
              className="hidden small:block text-sm text-grey-50 hover:text-dark-bg transition-colors"
              href="/account"
              data-testid="nav-account-link"
            >
              Račun
            </LocalizedClientLink>
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="text-sm text-grey-50 hover:text-dark-bg transition-colors"
                  href="/cart"
                  data-testid="nav-cart-link"
                >
                  Košarica (0)
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
            {/* Mobile Menu */}
            <div className="small:hidden">
              <SideMenu regions={regions} />
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
