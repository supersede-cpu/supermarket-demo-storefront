import { Metadata } from "next"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export const metadata: Metadata = {
  title: "O Nama | Lude Kape",
  description: "Upoznaj priču iza Ludih Kapa. Lude kape za lude ljude - jer život je prekratak za dosadne kape.",
}

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative py-24 overflow-hidden bg-light-surface">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-green/5 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[128px]" />

        <div className="content-container relative z-10">
          <p className="text-gold text-sm font-medium tracking-wider text-center mb-4">
            NAŠA PRIČA
          </p>
          <h1 className="font-headline text-5xl small:text-6xl text-center text-dark-bg mb-6">
            O Ludim Kapama
          </h1>
          <p className="text-grey-50 text-xl text-center max-w-2xl mx-auto">
            Jer život je prekratak za dosadne kape
          </p>
        </div>
      </div>

      <div className="content-container pb-24">
        <div className="max-w-4xl mx-auto space-y-20 pt-16">

          {/* Our Story */}
          <section>
            <h2 className="font-headline text-3xl text-dark-bg mb-6">
              Sve je počelo jednom ludom idejom
            </h2>
            <div className="text-grey-50 space-y-4 text-lg leading-relaxed">
              <p>
                Na festivalu, okruženi morem istih dosadnih kapa, postavili smo si pitanje:
                zašto svi nose iste stvari? Gdje su boje? Gdje je ludost? Gdje je karakter?
              </p>
              <p>
                Tako su nastale Lude Kape – brend koji slavi individualnost, kreativnost i
                hrabrost da budeš drugačiji. Svaka naša kapa je dizajnirana da privuče pažnju,
                izazove osmijeh i ostavi trajnu uspomenu.
              </p>
              <p>
                Od festivalskih ludnica do gradskih šetnji, naše kape nisu samo modni dodatak –
                one su statement. Izjava da život treba živjeti punim plućima.
              </p>
            </div>
          </section>

          {/* Values */}
          <section>
            <p className="text-neon-green text-sm font-medium tracking-wider mb-4">
              NAŠE VRIJEDNOSTI
            </p>
            <h2 className="font-headline text-3xl text-dark-bg mb-8">
              Što nas pokreće
            </h2>
            <div className="grid grid-cols-1 small:grid-cols-2 gap-6">
              <div className="bg-white border border-light-border rounded-sm p-6 hover:border-neon-green/50 transition-colors">
                <h3 className="font-headline text-2xl text-neon-green mb-3">Ludost</h3>
                <p className="text-grey-50">
                  Slavimo sve što je drugačije, neobično i zabavno. Dosada nije dobrodošla.
                </p>
              </div>
              <div className="bg-white border border-light-border rounded-sm p-6 hover:border-gold/50 transition-colors">
                <h3 className="font-headline text-2xl text-gold mb-3">Kvaliteta</h3>
                <p className="text-grey-50">
                  Svaka kapa je napravljena s pažnjom. Luda, ali izdržljiva – baš kao i ti.
                </p>
              </div>
              <div className="bg-white border border-light-border rounded-sm p-6 hover:border-neon-green/50 transition-colors">
                <h3 className="font-headline text-2xl text-neon-green mb-3">Zajednica</h3>
                <p className="text-grey-50">
                  Lude Kape nisu samo brand – mi smo pleme istomišljenika koji vole zabavu.
                </p>
              </div>
              <div className="bg-white border border-light-border rounded-sm p-6 hover:border-gold/50 transition-colors">
                <h3 className="font-headline text-2xl text-gold mb-3">Uspomene</h3>
                <p className="text-grey-50">
                  Svaka kapa nosi priču. Tvoj festival, tvoja zabava, tvoja uspomena.
                </p>
              </div>
            </div>
          </section>

          {/* Mission - Dark section for contrast */}
          <section className="bg-dark-bg border border-dark-border rounded-sm p-10 small:p-14 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-neon-green/5 rounded-full blur-[80px]" />
            <div className="relative z-10">
              <p className="text-gold text-sm font-medium tracking-wider mb-4">
                NAŠA MISIJA
              </p>
              <h2 className="font-headline text-3xl text-white mb-6">
                Učiniti svijet malo luđim
              </h2>
              <p className="text-grey-40 text-lg max-w-2xl mb-8 leading-relaxed">
                Jednu kapu po jednu kapu. Dati ljudima način da izraze svoju osobnost
                i stvore nezaboravne trenutke.
              </p>
              <LocalizedClientLink href="/store" className="btn-party-green inline-block">
                Istraži kolekciju
              </LocalizedClientLink>
            </div>
          </section>

          {/* Join Us */}
          <section className="text-center">
            <p className="text-neon-green text-sm font-medium tracking-wider mb-4">
              PRIDRUŽI NAM SE
            </p>
            <h2 className="font-headline text-3xl text-dark-bg mb-6">
              Postani dio priče
            </h2>
            <p className="text-grey-50 text-lg mb-8 max-w-2xl mx-auto">
              Želiš surađivati s nama? Imaš ideju za novu ludu kapu?
              Ili jednostavno želiš biti dio naše zajednice? Javi nam se!
            </p>
            <div className="flex flex-col small:flex-row gap-4 justify-center">
              <LocalizedClientLink href="/affiliate" className="btn-party-outline">
                Postani partner
              </LocalizedClientLink>
              <a
                href="https://instagram.com/ludekape"
                target="_blank"
                rel="noreferrer"
                className="btn-party-green"
              >
                Prati nas
              </a>
            </div>
          </section>

        </div>
      </div>
    </div>
  )
}
