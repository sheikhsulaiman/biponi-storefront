import { HeroCarousel } from "./components/carousel"

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

const Hero = () => {
  return (
    <div className="container mx-auto relative pt-8 px-24">
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
      <HeroCarousel items={items} />
    </div>
  )
}

export default Hero
