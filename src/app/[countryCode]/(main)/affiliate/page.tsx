import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Postani Partner | Lude Kape",
  description: "Pridruži se Lude Kape affiliate programu. Zarađuj promovirajući najluđe kape na tržištu.",
}

export default function AffiliatePage() {
  return (
    <div className="bg-white min-h-screen">
      {/* ========== HERO SECTION ========== */}
      <div className="relative h-[75vh] min-h-[550px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-top bg-no-repeat"
          style={{ backgroundImage: "url('/affiliate-hero.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[600px] h-[300px] bg-neon-green/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-20 right-[15%] w-3 h-3 rounded-full bg-neon-green/40 animate-float" />

        <div className="absolute inset-0 flex items-center justify-center -mt-[50px]">
          <div className="content-container relative z-10">
            <div className="bg-white/5 backdrop-blur-sm border border-red-500/30 rounded-lg px-10 small:px-16 py-12 text-center">
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
                <a href="#prijava" className="btn-party-green">
                  Postani Suradnik
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-neon-green/50 to-transparent" />
      </div>

      {/* ========== INTRO TEXT BLOCK ========== */}
      <section className="py-24 relative overflow-hidden">
        {/* Subtle background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-light-surface/50 via-white to-white" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold/3 rounded-full blur-[150px] pointer-events-none" />

        <div className="content-container relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-6">
              Realno
            </p>
            <h2 className="font-headline text-4xl small:text-[46px] text-dark-bg mb-8 leading-[1.15]">
              Svi pričaju o passive income. <span className="text-neon-green">Mi ti ga zapravo nudimo.</span>
            </h2>
            <div className="w-32 h-[1px] bg-neon-green/60 mx-auto mb-8" />
            <p className="text-grey-50 text-lg leading-[1.8]">
              Znaš ono kad ti netko kaže &quot;samo dijeli linkove i zarađuj&quot;? Obično je to prijevara.
              Ali mi prodajemo kape. Prave kape. Koje ljudi stvarno kupuju. I kad ih kupe preko
              tvog linka — ti dobiješ 15%. Bez skrivenih uvjeta, bez minimalnih pragova, bez gluposti.
              Samo čista matematika: tvoji pratitelji × naše kape = tvoj novac.
            </p>
          </div>
        </div>
      </section>

      {/* Thick Divider with glow */}
      <div className="content-container">
        <div className="h-[2px] bg-gradient-to-r from-transparent via-neon-green/30 to-transparent relative">
          <div className="absolute inset-0 blur-sm bg-gradient-to-r from-transparent via-neon-green/20 to-transparent" />
        </div>
      </div>

      {/* ========== BENEFITS SECTION ========== */}
      <section className="py-32 relative overflow-hidden">
        {/* Complex gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-light-surface via-white to-light-surface" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-neon-green/[0.02] via-transparent to-gold/[0.02]" />
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-neon-green/5 rounded-full blur-[180px] pointer-events-none" />
        <div className="absolute bottom-20 left-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[150px] pointer-events-none" />

        {/* Subtle hat texture pattern */}
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5 L45 25 L40 25 L40 45 L20 45 L20 25 L15 25 Z' fill='%23000' fill-opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px'
        }} />

        <div className="content-container relative z-10">
          {/* Hero-style header */}
          <div className="text-center mb-20">
            <div className="inline-block bg-neon-green/10 text-neon-green text-xs font-semibold tracking-[0.2em] uppercase px-4 py-2 rounded-full border border-neon-green/20 mb-8">
              Što Dobivaš
            </div>
            <h2
              className="font-headline text-5xl small:text-6xl medium:text-[70px] text-dark-bg mb-6 leading-[1.1]"
              style={{ textShadow: '0 4px 30px rgba(0, 0, 0, 0.05)' }}
            >
              Konkretne Beneficije
            </h2>
            <div className="w-40 h-[1px] bg-neon-green/60 mx-auto mb-6" />
            <p className="text-grey-50 text-xl max-w-lg mx-auto">Bez floskula, bez skrivenih uvjeta</p>
          </div>

          {/* 3-Column Strip */}
          <div className="grid grid-cols-1 medium:grid-cols-3 gap-6">
            {/* Card 1 - 15% */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-green/30 to-neon-green/5 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="relative h-full bg-gradient-to-br from-white via-white to-light-surface border-2 border-light-border rounded-3xl p-8 overflow-hidden transition-all duration-500 group-hover:border-neon-green/40 group-hover:shadow-[0_30px_80px_-20px_rgba(57,255,20,0.25)] group-hover:-translate-y-2">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-neon-green/15 to-transparent rounded-full blur-[50px]" />

                <div className="relative z-10">
                  {/* Icon + Value inline */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-neon-green/25 to-neon-green/5 border border-neon-green/30 flex items-center justify-center shadow-lg shadow-neon-green/20 group-hover:scale-110 transition-all duration-500">
                      <span className="text-2xl">💰</span>
                    </div>
                    <div className="font-headline text-3xl text-neon-green tracking-tight">15%</div>
                  </div>
                  <h3 className="font-headline text-xl text-dark-bg mb-3">Od svake prodaje</h3>
                  <p className="text-grey-50 text-sm leading-relaxed">
                    Nema tier sistema. Od prvog dana 15%. Prodaš kapu od €25? €3.75 ide tebi.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 - FREE */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/30 to-gold/5 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="relative h-full bg-gradient-to-br from-white via-white to-light-surface border-2 border-light-border rounded-3xl p-8 overflow-hidden transition-all duration-500 group-hover:border-gold/40 group-hover:shadow-[0_30px_80px_-20px_rgba(201,162,39,0.25)] group-hover:-translate-y-2">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-gold/15 to-transparent rounded-full blur-[50px]" />

                <div className="relative z-10">
                  {/* Icon + Value inline */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold/25 to-gold/5 border border-gold/30 flex items-center justify-center shadow-lg shadow-gold/20 group-hover:scale-110 transition-all duration-500">
                      <span className="text-2xl">🎁</span>
                    </div>
                    <div className="font-headline text-3xl text-gold tracking-tight">FREE</div>
                  </div>
                  <h3 className="font-headline text-xl text-dark-bg mb-3">Besplatne kape</h3>
                  <p className="text-grey-50 text-sm leading-relaxed">
                    Dobivaš kape za promociju. Nosi ih, fotkaj se, zaradi na njima.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 - VIP */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-green/30 to-gold/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="relative h-full bg-gradient-to-br from-white via-white to-light-surface border-2 border-light-border rounded-3xl p-8 overflow-hidden transition-all duration-500 group-hover:border-neon-green/40 group-hover:shadow-[0_30px_80px_-20px_rgba(57,255,20,0.2)] group-hover:-translate-y-2">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-neon-green/10 via-gold/10 to-transparent rounded-full blur-[50px]" />

                <div className="relative z-10">
                  {/* Icon + Value inline */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-neon-green/20 via-gold/10 to-neon-green/5 border border-neon-green/30 flex items-center justify-center shadow-lg shadow-neon-green/15 group-hover:scale-110 transition-all duration-500">
                      <span className="text-2xl">⚡</span>
                    </div>
                    <div className="font-headline text-3xl text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-gold tracking-tight">VIP</div>
                  </div>
                  <h3 className="font-headline text-xl text-dark-bg mb-3">Early access</h3>
                  <p className="text-grey-50 text-sm leading-relaxed">
                    Nove kolekcije vidiš prvi. Prodaj dok je hype na vrhuncu.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== ZAŠTO MI? - DARK SECTION ========== */}
      <section className="bg-dark-bg py-28 relative overflow-hidden">
        {/* Complex gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-surface/50 to-dark-bg" />
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-green/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-neon-green/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[120px]" />

        <div className="content-container relative z-10">
          <div className="grid grid-cols-1 medium:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-6">
                Zašto Mi?
              </p>
              <h2 className="font-headline text-4xl small:text-5xl text-white mb-8 leading-[1.1]">
                Drugi ti nude 5%.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-neon-green/70">Mi nismo drugi.</span>
              </h2>
              <div className="w-40 h-[1px] bg-neon-green/60 mb-8" />
              <p className="text-grey-30 text-lg leading-[1.8] mb-6">
                Većina affiliate programa ti daje mrvice i očekuje da budeš zahvalan.
                Mi znamo da bez tebe nema širenja brenda. Zato dijelimo fer — 15% od
                svake prodaje, isplata svaki mjesec, bez minimuma.
              </p>
              <p className="text-grey-40 leading-[1.8]">
                Plus, mi zapravo odgovaramo na poruke. Trebaš custom promo kod? Napravimo.
                Trebaš materijale za objavu? Pošaljemo. Nismo korporacija koja te ignorira.
              </p>
            </div>

            {/* Partner image */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-neon-green/20 to-gold/20 rounded-2xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
              <div className="relative aspect-square max-w-[400px] mx-auto rounded-xl overflow-hidden">
                <img
                  src="/affiliate-partner.jpg"
                  alt="Lude Kape partner"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/60 via-transparent to-transparent" />
              </div>
              {/* Decorative corners */}
              <div className="absolute -bottom-3 -right-3 w-20 h-20 border-r-2 border-b-2 border-neon-green/40 rounded-br-xl" />
              <div className="absolute -top-3 -left-3 w-20 h-20 border-l-2 border-t-2 border-gold/40 rounded-tl-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* ========== HOW IT WORKS - HORIZONTAL TIMELINE ========== */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-light-surface/30 to-white" />
        <div className="absolute top-1/2 left-0 w-full h-[400px] -translate-y-1/2 bg-gradient-to-r from-neon-green/3 via-transparent to-gold/3" />

        <div className="content-container relative z-10">
          <p className="text-neon-green text-sm font-semibold tracking-[0.2em] uppercase text-center mb-4">
            Proces
          </p>
          <h2 className="font-headline text-4xl text-dark-bg mb-6 text-center">
            4 koraka do prvih para
          </h2>
          <p className="text-grey-50 text-lg text-center mb-20 max-w-xl mx-auto">
            Bez kompliciranja, bez čekanja. Počni zarađivati u manje od tjedan dana.
          </p>

          {/* Timeline */}
          <div className="relative">
            {/* Connecting line with gradient */}
            <div className="hidden medium:block absolute top-12 left-[10%] right-[10%] h-[3px]">
              <div className="absolute inset-0 bg-gradient-to-r from-neon-green/40 via-gold/40 to-neon-green/40 rounded-full" />
              <div className="absolute inset-0 bg-gradient-to-r from-neon-green/20 via-gold/20 to-neon-green/20 blur-sm" />
            </div>

            <div className="grid grid-cols-1 small:grid-cols-2 medium:grid-cols-4 gap-10">
              {[
                { num: "01", icon: "📝", title: "Prijavi se", desc: "Ispuni formu. 2 minute posla, bez životopisa.", color: "neon-green" },
                { num: "02", icon: "🔗", title: "Dobij link", desc: "Odobrimo te u 48h. Dobiješ svoj jedinstveni link.", color: "gold" },
                { num: "03", icon: "📱", title: "Dijeli", desc: "Stavi link u bio, story, post — gdje god želiš.", color: "neon-green" },
                { num: "04", icon: "💸", title: "Zarađuj", desc: "Svaka prodaja = 15% na tvoj račun. Mjesečno.", color: "gold" }
              ].map((step, i) => (
                <div key={i} className="relative group">
                  <div className="text-center">
                    {/* Step circle with glow */}
                    <div className="relative inline-block mb-8">
                      <div className={`absolute inset-0 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${step.color === 'gold' ? 'bg-gold/30' : 'bg-neon-green/30'}`} />
                      <div className={`relative w-24 h-24 rounded-full bg-gradient-to-br from-white to-light-surface border-[3px] flex items-center justify-center shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl ${step.color === 'gold' ? 'border-gold/40 group-hover:border-gold' : 'border-neon-green/40 group-hover:border-neon-green'}`}>
                        <span className="text-4xl">{step.icon}</span>
                      </div>
                    </div>
                    <div className={`font-headline text-sm mb-3 tracking-wider ${step.color === 'gold' ? 'text-gold' : 'text-neon-green'}`}>{step.num}</div>
                    <h3 className="font-headline text-2xl text-dark-bg mb-3">{step.title}</h3>
                    <p className="text-grey-50 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Progressive gradient divider */}
      <div className="h-[4px] bg-gradient-to-r from-neon-green/0 via-neon-green/50 to-gold/0 relative">
        <div className="absolute inset-0 blur-md bg-gradient-to-r from-neon-green/0 via-neon-green/30 to-gold/0" />
      </div>

      {/* ========== EARNINGS BREAKDOWN ========== */}
      <section className="py-28 relative overflow-hidden bg-gradient-to-b from-light-surface via-white to-light-surface">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-gold/5 to-transparent rounded-full blur-[100px]" />

        <div className="content-container relative z-10">
          <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase text-center mb-4">
            Brojke
          </p>
          <h2 className="font-headline text-4xl text-dark-bg mb-6 text-center">
            Koliko možeš zaraditi?
          </h2>
          <p className="text-grey-50 text-lg text-center mb-16 max-w-xl mx-auto">
            Stvarni podaci od stvarnih partnera. Bez napuhavanja.
          </p>

          <div className="grid grid-cols-1 small:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { value: "€340", label: "Prosječna mjesečna zarada", sub: "aktivnih partnera", color: "neon-green" },
              { value: "€2.1k", label: "Najviša mjesečna isplata", sub: "jednom partneru", color: "gold" },
              { value: "€18k+", label: "Ukupno isplaćeno", sub: "partnerima do sad", color: "neon-green" }
            ].map((stat, i) => (
              <div key={i} className="group relative">
                <div className={`absolute inset-0 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${stat.color === 'gold' ? 'bg-gold/20' : 'bg-neon-green/20'}`} />
                <div className="relative text-center p-10 bg-gradient-to-br from-white to-light-surface rounded-2xl border-2 border-light-border transition-all duration-300 group-hover:border-opacity-0 group-hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.1)]">
                  <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-20 h-[3px] rounded-full transition-all duration-300 group-hover:w-32 ${stat.color === 'gold' ? 'bg-gradient-to-r from-transparent via-gold to-transparent' : 'bg-gradient-to-r from-transparent via-neon-green to-transparent'}`} />
                  <div
                    className={`font-headline text-6xl small:text-7xl mb-3 ${stat.color === 'gold' ? 'text-gold' : 'text-neon-green'}`}
                    style={{ textShadow: stat.color === 'gold' ? '0 4px 30px rgba(201, 162, 39, 0.2)' : '0 4px 30px rgba(57, 255, 20, 0.2)' }}
                  >
                    {stat.value}
                  </div>
                  <p className="text-dark-bg font-semibold text-lg mb-1">{stat.label}</p>
                  <p className="text-grey-50 text-sm">{stat.sub}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-grey-50 text-xs text-center mt-10 max-w-xl mx-auto opacity-70">
            * Stvarna zarada ovisi o tvom angažmanu i veličini publike. Ovi podaci su iz zadnjih 6 mjeseci.
          </p>
        </div>
      </section>

      {/* ========== WHO'S IT FOR ========== */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-light-surface via-white to-light-surface" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-neon-green/3 rounded-full blur-[150px]" />

        <div className="content-container relative z-10">
          <p className="text-neon-green text-sm font-semibold tracking-[0.2em] uppercase text-center mb-4">
            Za Koga Je Ovo
          </p>
          <h2 className="font-headline text-4xl text-dark-bg mb-6 text-center">
            Idealni partneri
          </h2>
          <p className="text-grey-50 text-lg text-center mb-16 max-w-xl mx-auto">
            Ako se prepoznaješ u bilo čemu od ovoga — javi se.
          </p>

          <div className="grid grid-cols-2 medium:grid-cols-4 gap-6">
            {[
              { icon: "📸", title: "Influenceri", desc: "Imaš pratitelje? Monetiziraj ih.", gradient: "from-pink-500/10 to-purple-500/10" },
              { icon: "🎬", title: "Content kreatori", desc: "YouTube, TikTok, Reels — sve prolazi.", gradient: "from-red-500/10 to-orange-500/10" },
              { icon: "🎓", title: "Studenti", desc: "Džeparac bez da moraš raditi u kafani.", gradient: "from-blue-500/10 to-cyan-500/10" },
              { icon: "💼", title: "Poduzetnici", desc: "Dodaj još jedan stream prihoda.", gradient: "from-neon-green/10 to-gold/10" }
            ].map((item, i) => (
              <div key={i} className="group relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl`} />
                <div className="relative bg-white rounded-2xl border-2 border-light-border p-8 text-center transition-all duration-300 group-hover:border-neon-green/20 group-hover:shadow-xl group-hover:-translate-y-2">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-neon-green/10 to-gold/5 flex items-center justify-center mx-auto mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <span className="text-3xl">{item.icon}</span>
                  </div>
                  <h3 className="font-headline text-xl text-dark-bg mb-3">{item.title}</h3>
                  <p className="text-grey-50 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FAQ SECTION ========== */}
      <section className="py-28 relative overflow-hidden bg-gradient-to-b from-white to-light-surface">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] -translate-y-1/2 bg-gold/3 rounded-full blur-[120px]" />

        <div className="content-container relative z-10">
          <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase text-center mb-4">
            FAQ
          </p>
          <h2 className="font-headline text-4xl text-dark-bg mb-6 text-center">
            Česta pitanja
          </h2>
          <p className="text-grey-50 text-lg text-center mb-16 max-w-xl mx-auto">
            Sve što te zanima, na jednom mjestu.
          </p>

          <div className="grid grid-cols-1 medium:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { q: "Koliko pratitelja trebam imati?", a: "Nema minimuma. Čak i sa 500 pratitelja možeš početi. Bitna je kvaliteta, ne kvantiteta." },
              { q: "Kada i kako dobijem novce?", a: "Isplata je svakog 1. u mjesecu za prethodni mjesec. PayPal ili direktno na račun — tvoj izbor." },
              { q: "Trebam li nešto platiti?", a: "Ne. Program je potpuno besplatan. Mi ti još dajemo besplatne kape za promociju." },
              { q: "Mogu li biti partner iz inozemstva?", a: "Da! Imamo partnere iz cijele regije. Isplaćujemo u eurima." },
              { q: "Što ako nitko ne kupi?", a: "Ništa. Nema pritiska, nema kvota. Ali vjeruj nam — ako imaš pravu publiku, kupovat će." },
              { q: "Koliko dugo traje odobrenje?", a: "Obično unutar 48 sati. Ako si legit, prihvaćamo te. Jednostavno." }
            ].map((item, i) => (
              <div key={i} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg" />
                <div className="relative bg-white rounded-xl border-2 border-light-border p-7 transition-all duration-300 group-hover:border-gold/30 group-hover:shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-gold text-sm font-bold">?</span>
                    </div>
                    <div>
                      <h3 className="font-headline text-lg text-dark-bg mb-2">{item.q}</h3>
                      <p className="text-grey-50 text-sm leading-relaxed">{item.a}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== APPLICATION FORM ========== */}
      <section id="prijava" className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-light-surface to-white" />

        <div className="content-container relative z-10">
          <div className="max-w-2xl mx-auto relative">
            {/* Glow behind form */}
            <div className="absolute -inset-8 bg-gradient-to-r from-neon-green/10 via-gold/10 to-neon-green/10 rounded-3xl blur-3xl" />

            <div className="relative bg-dark-bg border-2 border-dark-border rounded-2xl p-10 small:p-14 overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-neon-green/5 rounded-full blur-[100px]" />
              <div className="absolute bottom-0 left-0 w-60 h-60 bg-gold/5 rounded-full blur-[80px]" />
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-neon-green/50 to-transparent" />

              <div className="relative z-10">
                <p className="text-gold text-sm font-semibold tracking-[0.2em] text-center mb-4">
                  PRIJAVA
                </p>
                <h2 className="font-headline text-4xl text-white text-center mb-4">
                  Spreman/na?
                </h2>
                <p className="text-grey-40 text-center mb-10">2 minute do potencijalnog side hustlea</p>

                <form className="space-y-6">
                  <div className="group">
                    <label htmlFor="name" className="block text-sm text-grey-30 mb-2 font-medium">
                      Ime i prezime *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full bg-dark-surface border-2 border-dark-border rounded-xl px-5 py-4 text-white focus:border-neon-green focus:outline-none transition-all duration-300 focus:shadow-[0_0_20px_rgba(57,255,20,0.1)]"
                      placeholder="Tvoje ime"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm text-grey-30 mb-2 font-medium">
                      Email adresa *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full bg-dark-surface border-2 border-dark-border rounded-xl px-5 py-4 text-white focus:border-neon-green focus:outline-none transition-all duration-300 focus:shadow-[0_0_20px_rgba(57,255,20,0.1)]"
                      placeholder="tvoj@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="instagram" className="block text-sm text-grey-30 mb-2 font-medium">
                      Instagram handle *
                    </label>
                    <input
                      type="text"
                      id="instagram"
                      name="instagram"
                      required
                      className="w-full bg-dark-surface border-2 border-dark-border rounded-xl px-5 py-4 text-white focus:border-neon-green focus:outline-none transition-all duration-300 focus:shadow-[0_0_20px_rgba(57,255,20,0.1)]"
                      placeholder="@tvoj_instagram"
                    />
                  </div>
                  <div>
                    <label htmlFor="followers" className="block text-sm text-grey-30 mb-2 font-medium">
                      Broj pratitelja (ukupno)
                    </label>
                    <select
                      id="followers"
                      name="followers"
                      className="w-full bg-dark-surface border-2 border-dark-border rounded-xl px-5 py-4 text-white focus:border-neon-green focus:outline-none transition-all duration-300"
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
                    <label htmlFor="why" className="block text-sm text-grey-30 mb-2 font-medium">
                      Zašto želiš biti partner? *
                    </label>
                    <textarea
                      id="why"
                      name="why"
                      required
                      rows={3}
                      className="w-full bg-dark-surface border-2 border-dark-border rounded-xl px-5 py-4 text-white focus:border-neon-green focus:outline-none transition-all duration-300 resize-none focus:shadow-[0_0_20px_rgba(57,255,20,0.1)]"
                      placeholder="Par rečenica o sebi..."
                    />
                  </div>
                  <div className="text-center pt-6">
                    <button
                      type="submit"
                      className="btn-party-green text-lg px-14 py-4"
                    >
                      Pošalji prijavu
                    </button>
                  </div>
                  <p className="text-grey-50 text-sm text-center">
                    Odgovaramo unutar 48 sati.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FINAL CTA STRIP ========== */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-dark-bg via-dark-surface to-dark-bg" />
        <div className="absolute inset-0 bg-gradient-to-r from-neon-green/5 via-transparent to-gold/5" />
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-neon-green/40 to-transparent" />

        <div className="content-container relative z-10 text-center">
          <p className="text-white text-2xl small:text-3xl font-headline mb-8">
            Još uvijek razmišljaš? <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-gold">Novac ne čeka.</span>
          </p>
          <a href="#prijava" className="btn-party-green text-lg px-10 py-4">
            Prijavi se odmah
          </a>
        </div>
      </section>
    </div>
  )
}
