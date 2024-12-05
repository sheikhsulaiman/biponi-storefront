"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import Link from "next/link"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

interface HeroCarouselProps {
  items: {
    image: string
    link: string
  }[]
}

export function HeroCarousel({ items }: HeroCarouselProps) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {items.map((item, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Link href={item.link}>
                <div className="flex items-center justify-center p-6">
                  <img
                    src={item.image}
                    alt="carousel"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Link>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
