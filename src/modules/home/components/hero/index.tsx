import { ShoppingCart } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"
import Link from "next/link"

const Hero = () => {
  return (
    <div className="h-[75vh] w-full border-b border-tricolor-red relative bg-gradient-to-br from-tricolor-white via-tricolor-red/5 to-tricolor-blue/10">
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <span>
          <Heading
            level="h1"
            className="text-5xl leading-tight font-bold bg-gradient-to-r from-tricolor-red via-tricolor-blue to-tricolor-red bg-clip-text text-transparent"
          >
            Le Marché Tricolore
          </Heading>
          <Heading
            level="h2"
            className="text-2xl leading-10 text-grey-70 font-normal mt-4"
          >
            Votre supermarché français en ligne
          </Heading>
          <p className="text-grey-50 mt-2 max-w-2xl mx-auto">
            Découvrez nos produits frais, notre boulangerie artisanale,
            nos fromages d'exception et nos vins de qualité
          </p>
        </span>
        <Link href="/store">
          <Button className="bg-tricolor-blue hover:bg-tricolor-blue-dark text-white px-8 py-3 rounded-lg shadow-lg transition-all hover:scale-105">
            Découvrir nos produits
            <ShoppingCart />
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default Hero
