import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Image from "next/image"

const Hero = () => {
  return (
    <div className="min-h-[85vh] w-full relative bg-white overflow-hidden">
      {/* Left side - White background with text */}
      <div className="absolute inset-y-0 left-0 w-full small:w-[50%] bg-white z-30 flex items-center">
        <div className="px-6 small:px-12 medium:px-16 py-16 small:py-0 w-full">
          {/* Main headline - black text */}
          <h1 className="font-headline text-[34px] small:text-[44px] medium:text-[54px] leading-[1.15] text-dark-bg animate-fade-in-up opacity-0 max-w-lg">
            Nezaboravne, nesvakidašnje, <span className="text-neon-green">neponovljive</span> lude kape
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-grey-60 text-[17px] small:text-[19px] font-medium max-w-md animate-fade-in-up opacity-0 animate-delay-200 leading-relaxed">
            DA, dobro ste čuli! Kape koje nešto govore su ovdje da vas izvedu iz sive mase.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col small:flex-row gap-4 mt-8 animate-fade-in-up opacity-0 animate-delay-300">
            <LocalizedClientLink
              href="/store"
              className="btn-party-green"
            >
              Pokaži mi te kape
            </LocalizedClientLink>
            <LocalizedClientLink
              href="/about"
              className="btn-party-outline"
            >
              Pričaj mi priču
            </LocalizedClientLink>
          </div>
        </div>
      </div>

      {/* Gradient fade - white bleeds into image */}
      <div className="hidden small:block absolute inset-y-0 left-[35%] w-[30%] z-20 bg-gradient-to-r from-white via-white/70 via-30% to-transparent" />

      {/* Right side - Image */}
      <div className="hidden small:block absolute inset-y-0 right-0 w-[50%]">
        <Image
          src="/hero-woman.jpg"
          alt="Lude Kape - street style"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Subtle overlay to blend better */}
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-transparent to-transparent" />
      </div>

      {/* Mobile: Show image as subtle background */}
      <div className="small:hidden absolute inset-0 z-0">
        <Image
          src="/hero-woman.jpg"
          alt="Lude Kape - street style"
          fill
          className="object-cover object-top opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/95 to-white/80" />
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-12 left-8 w-16 h-16 rounded-full bg-neon-green/10 animate-slide-left opacity-0 z-30" style={{ animationDelay: '0.6s' }} />

      {/* Subtle green accent at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-40 h-[2px] bg-gradient-to-r from-transparent via-neon-green/60 to-transparent" />
    </div>
  )
}

export default Hero
