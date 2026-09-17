import { ClipboardList, Puzzle, Wrench, PiggyBank } from "lucide-react"

const steps = [
  {
    icon: ClipboardList,
    num: "01",
    title: "Cuéntanos lo que necesitas",
    desc: "Analizamos tu hogar o negocio y conocemos tus necesidades de consumo energético.",
  },
  {
    icon: Puzzle,
    num: "02",
    title: "Diseñamos tu solución",
    desc: "Seleccionamos la cantidad y tipo de paneles adecuados para tu espacio y consumo.",
  },
  {
    icon: Wrench,
    num: "03",
    title: "Instalamos tu sistema",
    desc: "Nuestro equipo realiza la instalación y puesta en funcionamiento del sistema solar.",
  },
  {
    icon: PiggyBank,
    num: "04",
    title: "Empieza a ahorrar",
    desc: "Genera tu propia energía y reduce progresivamente tu dependencia de la red eléctrica.",
  },
]

export function HowItWorksSection() {
  return (
    <section id="como-funciona" className="bg-bg py-[70px]">
      <div className="mx-auto max-w-[1120px] px-8">
        <div className="mb-10 max-w-[56ch]">
          <h2 className="font-heading text-[clamp(2rem,4vw,2.6rem)] text-ink">¿Cómo funciona?</h2>
        </div>
        <div className="relative grid gap-10 md:grid-cols-4 md:gap-3 md:before:absolute md:before:left-[12.5%] md:before:right-[12.5%] md:before:top-9 md:before:h-0.5 md:before:bg-line md:before:content-['']">
          {steps.map(({ icon: Icon, num, title, desc }) => (
            <div key={num} className="relative z-[1] px-2.5 text-center">
              <div className="mb-4">
                <div className="relative mx-auto flex h-[72px] w-[72px] items-center justify-center rounded-full border-2 border-ink bg-card">
                  <Icon className="h-8 w-8 text-gold" strokeWidth={1.6} aria-hidden="true" />
                  <span className="absolute -right-2 -top-2 flex h-[26px] w-[26px] items-center justify-center rounded-full bg-ink font-heading text-[0.95rem] text-accent">
                    {num}
                  </span>
                </div>
              </div>
              <h3 className="mb-1.5 text-[1.1rem]">{title}</h3>
              <p className="text-[0.92rem] text-ink-soft">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
