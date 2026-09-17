import { Home, Wheat, Store } from "lucide-react"

const solutions = [
  { icon: Home, title: "Hogares" },
  { icon: Wheat, title: "Fincas" },
  { icon: Store, title: "Negocios" },
]

export function SolutionsSection() {
  return (
    <section id="soluciones" className="bg-card py-[70px]">
      <div className="mx-auto max-w-[1120px] px-8">
        <div className="mb-10 max-w-[56ch]">
          <h2 className="font-heading text-[clamp(2rem,4vw,2.6rem)] text-ink">
            Nuestras soluciones
          </h2>
          <p className="mt-2.5 text-[1.02rem] text-ink-soft">Paneles solares para:</p>
        </div>
        <div className="grid gap-[22px] md:grid-cols-3">
          {solutions.map(({ icon: Icon, title }) => (
            <div
              key={title}
              className="rounded-[20px] border-2 border-line bg-bg px-5 py-9 text-center"
            >
              <div className="mx-auto mb-[18px] flex h-24 w-24 items-center justify-center rounded-full border-2 border-ink bg-white">
                <Icon className="h-11 w-11 text-gold" strokeWidth={1.6} aria-hidden="true" />
              </div>
              <h3 className="font-heading text-[1.35rem]">{title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
