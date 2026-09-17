import Image from "next/image"

export function HeroSection() {
  return (
    <section className="overflow-hidden">
      <div className="mx-auto grid max-w-[1120px] items-center gap-11 px-8 py-14 md:grid-cols-[1.1fr_0.9fr] md:py-24">
        <div>
          <h1 className="max-w-[14ch] font-brand text-[clamp(2.6rem,6vw,4rem)] leading-[1.08]">
            Donde hay sol, <span className="text-gold">Hay energía</span>
          </h1>
          <p className="mt-5 max-w-[44ch] font-heading text-[1.15rem] text-ink-soft">
            Aprovecha la energía solar para tu hogar, finca o negocio y reduce tu gasto de
            electricidad. Diseñamos, instalamos y mantenemos sistemas solares para zonas rurales del
            Valle del Cauca.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contacto"
              className="rounded-3xl bg-accent px-7 py-3.5 text-base font-bold text-[#1a1400]"
            >
              Cotiza tu sistema
            </a>
            <a
              href="#servicios"
              className="rounded-3xl border-2 border-ink px-[26px] py-3 text-base font-semibold text-ink"
            >
              Ver servicios
            </a>
          </div>
        </div>
        <div className="relative mx-auto max-w-[340px]">
          <Image
            src="/solaris-logo.png"
            alt="Logo de Solaris"
            width={340}
            height={340}
            priority
            className="animate-rise rounded-full"
          />
        </div>
      </div>
    </section>
  )
}
