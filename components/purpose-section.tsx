export function PurposeSection() {
  return (
    <section id="razon-de-ser" className="py-[70px]">
      <div className="mx-auto max-w-[1120px] px-8">
        <div className="mb-10 max-w-[56ch]">
          <h2 className="font-heading text-[clamp(2rem,4vw,2.6rem)] text-ink">
            Nuestra razón de ser
          </h2>
          <p className="mt-2.5 font-script text-[1.9rem] leading-[1.3] text-gold">
            Llevar la energía del sol más allá de las ciudades.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-[20px] border-2 border-ink bg-card px-7 py-[30px]">
            <h3 className="mb-3 font-heading text-[1.7rem] text-gold">Misión</h3>
            <p className="text-[0.98rem] text-ink-soft">
              En Solaris desarrollamos e implementamos soluciones de energía solar que permiten a
              hogares, fincas y pequeños negocios de zonas rurales acceder a una fuente de energía
              limpia, confiable y eficiente, brindando acompañamiento técnico durante todo el
              proceso.
            </p>
          </article>
          <article className="rounded-[20px] border-2 border-ink bg-card px-7 py-[30px]">
            <h3 className="mb-3 font-heading text-[1.7rem] text-gold">Visión</h3>
            <p className="text-[0.98rem] text-ink-soft">
              Para el año 2031, Solaris será una empresa reconocida en el Valle del Cauca por
              ofrecer soluciones de energía solar confiables y adaptadas a las necesidades de las
              zonas rurales, ampliando su presencia en diferentes municipios y consolidando una base
              de clientes que confíe en nuestros servicios de instalación y mantenimiento.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
