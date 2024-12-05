import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"
import { HeroCarousel } from "./components/carousel"

const Hero = () => {
  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
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
      <HeroCarousel />
    </div>
  )
}

export default Hero
