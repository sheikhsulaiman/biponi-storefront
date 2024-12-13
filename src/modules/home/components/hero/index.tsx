import { listCollections } from "@/lib/data/collections"
import { HeroCarousel } from "./components/carousel"
import { clx } from "@medusajs/ui"
import LocalizedClientLink from "@/modules/common/components/localized-client-link"

const items = [
  {
    image: "/img1.jpg",
    link: "/",
  },
  {
    image: "/img2.jpg",
    link: "/",
  },
  {
    image: "/img3.jpg",
    link: "/",
  },
  {
    image: "/img4.jpg",
    link: "/",
  },
  {
    image: "/img5.jpg",
    link: "/",
  },
]

const Hero = async () => {
  const { collections } = await listCollections({
    fields: "*products",
  })
  return (
    <div className="container mx-auto relative md:pt-8 md:px-24">
      {/* <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <span>
          <Heading
            level="h1"
            className="text-3xl leading-10 text-ui-fg-base font-normal"
          >
            BIPONI
          </Heading>
          <p>
            Your one-stop shop for all your needs. Built with Medusa & Next.js
          </p>
        </span>
        <a
          href="https://github.com/medusajs/nextjs-starter-medusa"
          target="_blank"
        >
          <Button variant="secondary">
            View on GitHub
            <Github />
          </Button>
        </a>
      </div> */}

      <div className="flex flex-col xl:flex-row gap-8 items-center rounded-lg overflow-hidden mb-8">
        <HeroCarousel items={items} />
        <div>
          {collections && collections.length > 0 && (
            <div className="flex flex-col gap-y-2">
              <span className="text-3xl font-bold txt-ui-fg-base">
                Explore our top Collections
              </span>
              <ul>
                {collections?.slice(0, 6).map((c) => (
                  <li key={c.id}>
                    <div className="p-2 bg-accent my-1 hover:bg-primary hover:text-primary-foreground rounded-sm">
                      <LocalizedClientLink
                        className="text-2xl"
                        href={`/collections/${c.handle}`}
                      >
                        {c.title}
                      </LocalizedClientLink>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Hero
