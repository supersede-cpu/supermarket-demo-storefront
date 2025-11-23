import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Postani Partner | Lude Kape",
  description: "Pridruži se Lude Kape affiliate programu. Zarađuj promovirajući najluđe kape na tržištu.",
}

export default function AffiliatePage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[75vh] min-h-[550px] overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-top bg-no-repeat"
          style={{ backgroundImage: "url('/affiliate-hero.jpg')" }}
        />
        {/* Overlay - stronger */}
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/30" />

        {/* Subtle glow effect behind content */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[600px] h-[300px] bg-neon-green/5 rounded-full blur-[100px] pointer-events-none" />

        {/* Decorative floating element */}
        <div className="absolute top-20 right-[15%] w-3 h-3 rounded-full bg-neon-green/40 animate-float" />

        {/* Content - moved up 50px */}
        <div className="absolute inset-0 flex items-center justify-center -mt-[50px]">
          <div className="content-container relative z-10">
            {/* Glassmorphic box */}
            <div className="bg-white/5 backdrop-blur-sm border border-red-500/30 rounded-lg px-10 small:px-16 py-12 text-center">
              {/* Thin line divider */}
              <div className="w-12 h-[1px] bg-neon-green/60 mx-auto mb-6 animate-fade-in-up opacity-0" />

              <div className="animate-fade-in-up opacity-0 animate-delay-100 mb-5">
                <span className="inline-block bg-white/10 text-neon-green text-[9px] font-semibold tracking-[0.15em] uppercase px-3 py-1 rounded-full border border-neon-green/20">
                  Partnerski Program
                </span>
              </div>

              <h1
                className="font-headline text-[70px] text-white mb-5 leading-[1.1] animate-fade-in-up opacity-0 animate-delay-200"
                style={{
                  textShadow: '0 4px 30px rgba(57, 255, 20, 0.3), 0 2px 10px rgba(0, 0, 0, 0.5), 0 0 60px rgba(57, 255, 20, 0.15)'
                }}
              >
                Pretvori Kape U Pare
              </h1>

              <p className="text-grey-30 text-[19px] font-medium max-w-xl mx-auto mb-10 leading-relaxed animate-fade-in-up opacity-0 animate-delay-300">
                Pridruži se timu partnera i zarađuj promovirajući proizvode koje voliš
              </p>

              <div className="animate-fade-in-up opacity-0 animate-delay-400">
                <a
                  href="#prijava"
                  className="btn-party-green"
                >
                  Postani Suradnik
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-neon-green/50 to-transparent" />
      </div>

      <div className="content-container pb-24">
        <div className="max-w-4xl mx-auto pt-16">

          {/* Benefits */}
          <section className="mb-20">
            <p className="text-gold text-sm font-medium tracking-wider text-center mb-4">
              ŠTO DOBIVAŠ
            </p>
            <h2 className="font-headline text-3xl text-dark-bg mb-8 text-center">
              Zašto postati partner?
            </h2>
            <div className="grid grid-cols-1 small:grid-cols-3 gap-6">
              <div className="bg-white border border-light-border rounded-sm p-6 text-center">
                <div className="font-headline text-5xl text-neon-green mb-3">15%</div>
                <h3 className="font-headline text-xl text-dark-bg mb-2">Provizija</h3>
                <p className="text-grey-50 text-sm">
                  Od svake prodaje preko tvog linka
                </p>
              </div>
              <div className="bg-white border border-light-border rounded-sm p-6 text-center">
                <div className="font-headline text-5xl text-gold mb-3">FREE</div>
                <h3 className="font-headline text-xl text-dark-bg mb-2">Kape</h3>
                <p className="text-grey-50 text-sm">
                  Besplatne kape za promociju
                </p>
              </div>
              <div className="bg-white border border-light-border rounded-sm p-6 text-center">
                <div className="font-headline text-5xl text-neon-green mb-3">VIP</div>
                <h3 className="font-headline text-xl text-dark-bg mb-2">Pristup</h3>
                <p className="text-grey-50 text-sm">
                  Prvi pristupi novim kolekcijama
                </p>
              </div>
            </div>
          </section>

          {/* How it works */}
          <section className="mb-20">
            <p className="text-neon-green text-sm font-medium tracking-wider text-center mb-4">
              PROCES
            </p>
            <h2 className="font-headline text-3xl text-dark-bg mb-8 text-center">
              Kako funkcionira?
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-6 bg-white border border-light-border rounded-sm p-6">
                <div className="font-headline text-4xl text-neon-green">01</div>
                <div>
                  <h3 className="font-headline text-xl text-dark-bg mb-2">Prijavi se</h3>
                  <p className="text-grey-50">
                    Ispuni formu ispod i reci nam nešto o sebi i svojim kanalima.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-6 bg-white border border-light-border rounded-sm p-6">
                <div className="font-headline text-4xl text-neon-green">02</div>
                <div>
                  <h3 className="font-headline text-xl text-dark-bg mb-2">Dobij link</h3>
                  <p className="text-grey-50">
                    Ako te prihvatimo, dobivaš osobni affiliate link i promo materijale.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-6 bg-white border border-light-border rounded-sm p-6">
                <div className="font-headline text-4xl text-neon-green">03</div>
                <div>
                  <h3 className="font-headline text-xl text-dark-bg mb-2">Širi ludost</h3>
                  <p className="text-grey-50">
                    Dijeli link na svojim kanalima – Instagram, TikTok, YouTube, gdje god!
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-6 bg-white border border-light-border rounded-sm p-6">
                <div className="font-headline text-4xl text-neon-green">04</div>
                <div>
                  <h3 className="font-headline text-xl text-dark-bg mb-2">Zarađuj</h3>
                  <p className="text-grey-50">
                    Svaka prodaja preko tvog linka = 15% za tebe. Isplata svakog mjeseca.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Application Form - Dark for contrast */}
          <section id="prijava" className="bg-dark-bg border border-dark-border rounded-sm p-10 small:p-14 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-neon-green/5 rounded-full blur-[80px]" />
            <div className="relative z-10">
              <p className="text-gold text-sm font-medium tracking-wider text-center mb-4">
                PRIJAVA
              </p>
              <h2 className="font-headline text-3xl text-white text-center mb-8">
                Prijavi se
              </h2>
              <form className="space-y-6 max-w-xl mx-auto">
                <div>
                  <label htmlFor="name" className="block text-sm text-grey-40 mb-2">
                    Ime i prezime *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-dark-surface border border-dark-border rounded-sm px-4 py-3 text-white focus:border-neon-green focus:outline-none transition-colors"
                    placeholder="Tvoje ime"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-grey-40 mb-2">
                    Email adresa *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-dark-surface border border-dark-border rounded-sm px-4 py-3 text-white focus:border-neon-green focus:outline-none transition-colors"
                    placeholder="tvoj@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="instagram" className="block text-sm text-grey-40 mb-2">
                    Instagram handle *
                  </label>
                  <input
                    type="text"
                    id="instagram"
                    name="instagram"
                    required
                    className="w-full bg-dark-surface border border-dark-border rounded-sm px-4 py-3 text-white focus:border-neon-green focus:outline-none transition-colors"
                    placeholder="@tvoj_instagram"
                  />
                </div>
                <div>
                  <label htmlFor="followers" className="block text-sm text-grey-40 mb-2">
                    Broj pratitelja (ukupno na svim platformama)
                  </label>
                  <select
                    id="followers"
                    name="followers"
                    className="w-full bg-dark-surface border border-dark-border rounded-sm px-4 py-3 text-white focus:border-neon-green focus:outline-none transition-colors"
                  >
                    <option value="">Odaberi...</option>
                    <option value="1k-5k">1,000 – 5,000</option>
                    <option value="5k-10k">5,000 – 10,000</option>
                    <option value="10k-50k">10,000 – 50,000</option>
                    <option value="50k-100k">50,000 – 100,000</option>
                    <option value="100k+">100,000+</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="why" className="block text-sm text-grey-40 mb-2">
                    Zašto želiš biti Lude Kape partner? *
                  </label>
                  <textarea
                    id="why"
                    name="why"
                    required
                    rows={4}
                    className="w-full bg-dark-surface border border-dark-border rounded-sm px-4 py-3 text-white focus:border-neon-green focus:outline-none transition-colors resize-none"
                    placeholder="Reci nam nešto o sebi i zašto misliš da bi bio/bila dobar partner..."
                  />
                </div>
                <div className="text-center pt-4">
                  <button
                    type="submit"
                    className="btn-party-green text-lg px-12 py-3"
                  >
                    Pošalji prijavu
                  </button>
                </div>
                <p className="text-grey-50 text-sm text-center">
                  Odgovaramo na sve prijave unutar 48 sati.
                </p>
              </form>
            </div>
          </section>

        </div>
      </div>
    </div>
  )
}
