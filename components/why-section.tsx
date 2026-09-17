const features = [
  {
    title: "A tu medida",
    label: "Sistemas diseñados según el consumo y las necesidades de cada hogar o negocio.",
  },
  {
    title: "De principio a fin",
    label:
      "Te acompañamos desde el diagnóstico y diseño hasta la instalación y puesta en marcha.",
  },
  {
    title: "Pensado para el campo",
    label: "Soluciones adaptadas a las necesidades de las zonas rurales.",
  },
]

export function WhySection() {
  return (
    <section id="nosotros" className="py-[70px]">
      <div className="mx-auto grid max-w-[1120px] items-start gap-9 px-8 md:grid-cols-[1.3fr_0.7fr]">
        <div>
          <h2 className="font-heading text-[clamp(2rem,4vw,2.6rem)] text-ink">
            ¿Por qué Solaris?
          </h2>
          <p className="mt-2.5 max-w-[60ch] text-[1.02rem] text-ink-soft">
            Somos un equipo local enfocado en llevar energía solar confiable a quienes viven y
            trabajan lejos de la ciudad. Cada instalación se piensa para durar y para ahorrarte
            dinero año tras año.
          </p>
        </div>
        <div className="self-start rounded-[18px] bg-ink px-[26px] py-[30px] text-white">
          {features.map((feature, index) => (
            <div key={feature.title}>
              {index > 0 && <hr className="my-[18px] border-t border-[#3a3a35]" />}
              <div className="mb-1 font-heading text-[1.4rem] text-accent">{feature.title}</div>
              <div className="text-[0.95rem] text-[#e7e4d8]">{feature.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
