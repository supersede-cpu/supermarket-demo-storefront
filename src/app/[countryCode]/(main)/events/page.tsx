import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Događaji | Lude Kape",
  description: "Pronađi nas na najboljim eventima i festivalima. Pop-up shopovi Ludih Kapa diljem Hrvatske.",
}

const upcomingEvents = [
  {
    id: 1,
    name: "Ultra Europe",
    location: "Split",
    date: "12-14. srpnja 2025.",
    description: "Najveći elektronski festival u Hrvatskoj. Nađi nas kod glavne pozornice!",
    status: "upcoming" as const,
  },
  {
    id: 2,
    name: "InMusic Festival",
    location: "Zagreb, Jarun",
    date: "23-25. lipnja 2025.",
    description: "Tri dana najbolje rock i indie glazbe. Lude Kape štand kod ulaza.",
    status: "upcoming" as const,
  },
  {
    id: 3,
    name: "Outlook Festival",
    location: "Pula, Tvrđava Punta Christo",
    date: "28-31. kolovoza 2025.",
    description: "Bass, dub i reggae vibez. Bit ćemo u festivalskom kampu!",
    status: "upcoming" as const,
  },
]

const pastEvents = [
  {
    id: 101,
    name: "Advent Zagreb",
    location: "Zagreb, Trg bana Jelačića",
    date: "Prosinac 2024.",
    description: "Zimska pop-up kućica s božićnom kolekcijom.",
    status: "past" as const,
  },
  {
    id: 102,
    name: "Dimensions Festival",
    location: "Tisno",
    date: "Kolovoz 2024.",
    description: "Ljetna ludost na najljepšoj festivalskoj lokaciji.",
    status: "past" as const,
  },
]

export default function EventsPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative py-24 overflow-hidden bg-light-surface">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-neon-green/5 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-gold/5 rounded-full blur-[128px]" />

        <div className="content-container relative z-10">
          <p className="text-neon-green text-sm font-medium tracking-wider text-center mb-4">
            NAĐI NAS UŽIVO
          </p>
          <h1 className="font-headline text-5xl small:text-6xl text-center text-dark-bg mb-6">
            Događaji
          </h1>
          <p className="text-grey-50 text-xl text-center max-w-2xl mx-auto">
            Pronađi nas uživo na najboljim festivalima i eventima
          </p>
        </div>
      </div>

      <div className="content-container pb-24">
        <div className="max-w-4xl mx-auto pt-16">

          {/* Upcoming Events */}
          <section className="mb-20">
            <p className="text-neon-green text-sm font-medium tracking-wider mb-2">
              NADOLAZEĆI
            </p>
            <h2 className="font-headline text-3xl text-dark-bg mb-8">
              Gdje ćemo biti
            </h2>
            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className="bg-white border border-light-border rounded-sm p-6 hover:border-neon-green/50 transition-colors group"
                >
                  <div className="flex flex-col small:flex-row small:items-center small:justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="bg-neon-green/10 text-neon-green text-xs px-2 py-1 rounded-sm font-medium">
                          USKORO
                        </span>
                        <span className="text-grey-50 text-sm">{event.date}</span>
                      </div>
                      <h3 className="font-headline text-2xl text-dark-bg group-hover:text-neon-green transition-colors">
                        {event.name}
                      </h3>
                      <p className="text-gold text-sm mt-1">{event.location}</p>
                      <p className="text-grey-50 mt-3">{event.description}</p>
                    </div>
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 bg-light-surface border border-light-border rounded-sm flex items-center justify-center">
                        <span className="font-headline text-3xl text-neon-green">
                          {event.date.split(".")[0]}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section - Dark for contrast */}
          <section className="bg-dark-bg border border-dark-border rounded-sm p-10 small:p-14 mb-20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-neon-green/5 rounded-full blur-[80px]" />
            <div className="relative z-10">
              <h2 className="font-headline text-3xl text-white mb-4">
                Želiš nas na svom eventu?
              </h2>
              <p className="text-grey-40 mb-8 max-w-xl mx-auto">
                Organiziraš festival, tulum ili bilo kakav event? Javi nam se i dogovorimo
                pop-up Lude Kape štand!
              </p>
              <a
                href="mailto:events@ludekape.hr"
                className="btn-party-green inline-block"
              >
                Kontaktiraj nas
              </a>
            </div>
          </section>

          {/* Past Events */}
          <section>
            <p className="text-grey-50 text-sm font-medium tracking-wider mb-2">
              ARHIVA
            </p>
            <h2 className="font-headline text-3xl text-grey-50 mb-8">
              Prošli događaji
            </h2>
            <div className="grid grid-cols-1 small:grid-cols-2 gap-4">
              {pastEvents.map((event) => (
                <div
                  key={event.id}
                  className="bg-light-surface border border-light-border rounded-sm p-6 opacity-60"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-grey-20 text-grey-50 text-xs px-2 py-1 rounded-sm">
                      ZAVRŠENO
                    </span>
                    <span className="text-grey-50 text-sm">{event.date}</span>
                  </div>
                  <h3 className="font-headline text-xl text-grey-60">
                    {event.name}
                  </h3>
                  <p className="text-grey-50 text-sm mt-1">{event.location}</p>
                  <p className="text-grey-50 text-sm mt-3">{event.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Follow for updates */}
          <section className="mt-16 text-center">
            <p className="text-grey-50 mb-4">
              Prati nas na Instagramu za najnovije vijesti o eventima!
            </p>
            <a
              href="https://instagram.com/ludekape"
              target="_blank"
              rel="noreferrer"
              className="btn-party-outline inline-block"
            >
              @ludekape
            </a>
          </section>

        </div>
      </div>
    </div>
  )
}
