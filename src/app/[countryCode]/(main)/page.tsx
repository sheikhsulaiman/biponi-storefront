import { Metadata } from "next"

import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import { listCollections } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"

export const metadata: Metadata = {
  title: "Biponi - online shopping",
  description:
    "Biponi is the best online shopping platform in Bangladesh. We offer a wide range of products in categories like electronics, fashion, groceries, and more.",
}

export default async function Home(props: {
  params: Promise<{ countryCode: string }>
}) {
  const params = await props.params

  const { countryCode } = params

  const { collections } = await listCollections({
    fields: "*products",
  })
  const region = await getRegion(countryCode)

  if (!collections || !region) {
    return null
  }

  return (
    <>
      <Hero />
      <div className="pb-12">
        <ul className="flex flex-col gap-x-6">
          <FeaturedProducts collections={collections} region={region} />
        </ul>
      </div>
    </>
  )
}
