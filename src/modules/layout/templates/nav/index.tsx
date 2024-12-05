import { Suspense } from "react"

import { ShoppingCart } from "@medusajs/icons"
import { User } from "@medusajs/icons"
import { BuildingStorefront } from "@medusajs/icons"
import { MagnifyingGlassMini } from "@medusajs/icons"
import { listRegions } from "@lib/data/regions"
import { StoreRegion } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"

export default async function Nav() {
  const regions = await listRegions().then((regions: StoreRegion[]) => regions)

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className="relative h-16 mx-auto border-b duration-200 bg-white border-ui-border-base">
        <nav className="content-container txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular">
          <div className="flex-1 basis-0 h-full flex items-center">
            <div className="h-full">
              <SideMenu regions={regions} />
            </div>
          </div>

          <div className="flex items-center h-full">
            <LocalizedClientLink
              href="/"
              className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
              data-testid="nav-store-link"
            >
              BIPONI
            </LocalizedClientLink>
          </div>

          <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
            <div className="hidden small:flex items-center gap-x-6 h-full">
              {process.env.NEXT_PUBLIC_FEATURE_SEARCH_ENABLED && (
                <LocalizedClientLink
                  className="hover:text-ui-fg-base hover:bg-slate-100 p-2 rounded-xl flex items-center justify-center space-x-2"
                  href="/search"
                  scroll={false}
                  data-testid="nav-search-link"
                >
                  <MagnifyingGlassMini />
                  <p>Search</p>
                </LocalizedClientLink>
              )}
              <LocalizedClientLink
                className="hover:text-ui-fg-base hover:bg-slate-100 p-2 rounded-xl flex items-center justify-center space-x-2"
                href="/store"
                data-testid="nav-store-link"
              >
                <BuildingStorefront />
                <p>Store</p>
              </LocalizedClientLink>
              <LocalizedClientLink
                className="hover:text-ui-fg-base hover:bg-slate-100 p-2 rounded-xl flex items-center justify-center space-x-2"
                href="/account"
                data-testid="nav-account-link"
              >
                <User />
                <p>Account</p>
              </LocalizedClientLink>
            </div>
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="hover:text-ui-fg-base hover:bg-slate-100 p-2 rounded-xl flex items-center justify-center gap-2"
                  href="/cart"
                  data-testid="nav-cart-link"
                >
                  <ShoppingCart />
                  <p>Cart (0)</p>
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
          </div>
        </nav>
      </header>
    </div>
  )
}
