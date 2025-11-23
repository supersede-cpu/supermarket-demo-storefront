import { Metadata } from "next"

import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import { listCollections } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export const metadata: Metadata = {
  title: "Lude Kape | Crazy Hats for Crazy People",
  description:
    "Lude kape za lude ljude. Ostavi uspomenu, nosi kapu. Jedinstvene kape koje pričaju priču.",
}

export default async function Home(props: {
  params: Promise<{ countryCode: string }>
}) {
  const params = await props.params

  const { countryCode } = params

  const region = await getRegion(countryCode)

  const { collections } = await listCollections({
    fields: "id, handle, title",
  })

  if (!collections || !region) {
    return null
  }

  return (
    <>
      <Hero />

      {/* Intro Section */}
      <section className="py-24 bg-light-surface">
        <div className="content-container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-neon-green text-sm font-semibold tracking-wider mb-4">
              DOBRODOŠLI U LUDOST
            </p>
            <h2 className="font-headline text-[42px] small:text-[52px] leading-[1.1] text-dark-bg mb-6">
              Hrvatska <span className="text-neon-yellow">propada</span> 30 godina, ali mi imamo 20 <span className="text-neon-green italic underline decoration-2 underline-offset-4">kapa</span>
            </h2>
            <p className="text-grey-50 text-lg leading-relaxed">
              Svaka naša kapa dizajnirana je da bude više od modnog dodatka.
              To je statement, uspomena, razgovor koji tek počinje.
              Od festivala do svakodnevice – nosi svoju ludost s ponosom.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-white">
        <div className="content-container">
          <div className="flex flex-col small:flex-row small:items-end small:justify-between mb-12">
            <div>
              <p className="text-gold text-sm font-semibold tracking-wider mb-2">
                ISTAKNUTO
              </p>
              <h2 className="font-headline text-4xl text-dark-bg">
                Popularne kape
              </h2>
            </div>
            <LocalizedClientLink
              href="/store"
              className="mt-4 small:mt-0 text-grey-50 hover:text-dark-bg transition-colors text-sm"
            >
              Pogledaj sve →
            </LocalizedClientLink>
          </div>
          <ul className="flex flex-col gap-x-6">
            <FeaturedProducts collections={collections} region={region} />
          </ul>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-24 bg-light-surface">
        <div className="content-container">
          <div className="grid small:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-neon-green text-sm font-semibold tracking-wider mb-4">
                ZAŠTO MI
              </p>
              <h2 className="font-headline text-4xl small:text-5xl text-dark-bg mb-6">
                Jer život je prekratak za dosadne kape
              </h2>
              <p className="text-grey-50 text-lg mb-8 leading-relaxed">
                Svaka naša kapa je dizajnirana da ostavi dojam, izazove osmijeh
                i stvori uspomenu. Od festivala do tuluma, od plaže do planine –
                imamo kapu za svaku priliku i svaku razinu ludosti.
              </p>
              <LocalizedClientLink href="/about" className="btn-party-outline inline-block">
                Saznaj više
              </LocalizedClientLink>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white border border-light-border rounded-sm p-6">
                <div className="font-headline text-5xl text-neon-green mb-2">50+</div>
                <p className="text-grey-50 text-sm">Jedinstvenih dizajna</p>
              </div>
              <div className="bg-white border border-light-border rounded-sm p-6">
                <div className="font-headline text-5xl text-gold mb-2">100%</div>
                <p className="text-grey-50 text-sm">Ludosti garantirano</p>
              </div>
              <div className="bg-white border border-light-border rounded-sm p-6">
                <div className="font-headline text-5xl text-dark-bg mb-2">24h</div>
                <p className="text-grey-50 text-sm">Brza dostava</p>
              </div>
              <div className="bg-white border border-light-border rounded-sm p-6">
                <div className="font-headline text-5xl text-neon-green mb-2">♻️</div>
                <p className="text-grey-50 text-sm">Održivi materijali</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Teaser - Dark section for contrast */}
      <section className="py-20 bg-dark-bg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-neon-green/5 to-transparent" />
        <div className="content-container relative z-10">
          <div className="max-w-2xl">
            <p className="text-gold text-sm font-semibold tracking-wider mb-4">
              NAĐI NAS UŽIVO
            </p>
            <h2 className="font-headline text-4xl small:text-5xl text-white mb-6">
              Događaji i festivali
            </h2>
            <p className="text-grey-40 text-lg mb-8">
              Dolazimo na najbolje evente i festivale diljem Hrvatske.
              Provjeri gdje ćemo biti sljedeći put i nađi nas uživo!
            </p>
            <LocalizedClientLink href="/events" className="btn-party-green inline-block">
              Pogledaj događaje
            </LocalizedClientLink>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="content-container">
          <div className="bg-light-surface border border-light-border rounded-sm p-12 small:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-neon-green/5 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gold/5 rounded-full blur-[100px]" />
            <div className="relative z-10">
              <h2 className="font-headline text-4xl small:text-5xl text-dark-bg mb-4">
                Spreman za ludost?
              </h2>
              <p className="text-grey-50 text-lg mb-8 max-w-xl mx-auto">
                Pronađi kapu koja priča tvoju priču.
              </p>
              <LocalizedClientLink href="/store" className="btn-party-green inline-block text-lg px-10 py-3">
                Istraži kolekciju
              </LocalizedClientLink>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
