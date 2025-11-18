import { Metadata } from "next"

export const metadata: Metadata = {
  title: "À Propos",
  description: "Découvrez l'histoire de Le Marché Tricolore, votre supermarché français en ligne.",
}

export default function AboutPage() {
  return (
    <div className="content-container py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-tricolor-red via-tricolor-blue to-tricolor-red bg-clip-text text-transparent">
          À Propos de Le Marché Tricolore
        </h1>

        <div className="space-y-6 text-ui-fg-base">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-tricolor-blue">
              Notre Histoire
            </h2>
            <p className="text-base leading-relaxed mb-4">
              Fondé en 2024, Le Marché Tricolore est né d'une passion pour la gastronomie française
              et le désir de rendre les produits authentiques accessibles à tous. Notre mission est
              de vous offrir une expérience d'achat unique, alliant qualité, tradition et modernité.
            </p>
            <p className="text-base leading-relaxed">
              Nous sélectionnons avec soin chaque produit pour garantir l'authenticité et la qualité
              que vous méritez. De nos baguettes tradition fraîchement cuites à nos fromages affinés,
              chaque article raconte une histoire de savoir-faire français.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-tricolor-blue">
              Nos Valeurs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-ui-border-base rounded-lg p-6 hover:border-tricolor-blue transition-colors">
                <h3 className="text-xl font-semibold mb-2 text-tricolor-red">Qualité</h3>
                <p className="text-base">
                  Nous ne proposons que des produits de la plus haute qualité, sélectionnés
                  auprès de producteurs et artisans français de confiance.
                </p>
              </div>
              <div className="border border-ui-border-base rounded-lg p-6 hover:border-tricolor-blue transition-colors">
                <h3 className="text-xl font-semibold mb-2 text-tricolor-red">Authenticité</h3>
                <p className="text-base">
                  Chaque produit est choisi pour son authenticité et son respect des traditions
                  gastronomiques françaises.
                </p>
              </div>
              <div className="border border-ui-border-base rounded-lg p-6 hover:border-tricolor-blue transition-colors">
                <h3 className="text-xl font-semibold mb-2 text-tricolor-red">Service</h3>
                <p className="text-base">
                  Votre satisfaction est notre priorité. Nous nous engageons à vous offrir
                  une expérience client exceptionnelle.
                </p>
              </div>
              <div className="border border-ui-border-base rounded-lg p-6 hover:border-tricolor-blue transition-colors">
                <h3 className="text-xl font-semibold mb-2 text-tricolor-red">Innovation</h3>
                <p className="text-base">
                  Nous combinons tradition et modernité pour vous offrir une expérience
                  d'achat en ligne pratique et agréable.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-tricolor-blue">
              Notre Engagement
            </h2>
            <p className="text-base leading-relaxed mb-4">
              Chez Le Marché Tricolore, nous nous engageons à :
            </p>
            <ul className="list-disc list-inside space-y-2 text-base pl-4">
              <li>Livrer des produits frais et de qualité supérieure</li>
              <li>Soutenir les producteurs et artisans français</li>
              <li>Offrir une sélection variée pour tous les goûts</li>
              <li>Garantir une livraison rapide et fiable</li>
              <li>Maintenir des prix justes et transparents</li>
            </ul>
          </section>

          <section className="bg-gradient-to-r from-tricolor-red/5 via-tricolor-white to-tricolor-blue/5 rounded-lg p-8 mt-8">
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Rejoignez Notre Communauté
            </h2>
            <p className="text-base text-center leading-relaxed">
              Découvrez nos produits et laissez-vous transporter par les saveurs authentiques
              de la France. Que vous recherchiez des ingrédients pour une recette spéciale ou
              simplement envie de vous faire plaisir, Le Marché Tricolore est là pour vous.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
