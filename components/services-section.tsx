import { Plus } from "lucide-react"

const services = [
  {
    num: "01",
    title: "Diseño del sistema",
    desc: "Analizamos tu consumo eléctrico y el espacio disponible para diseñar un sistema a la medida de tu hogar o negocio.",
  },
  {
    num: "02",
    title: "Instalación certificada",
    desc: "Nuestro equipo técnico instala los paneles siguiendo los estándares de seguridad y calidad de la industria.",
  },
  {
    num: "03",
    title: "Trámites y conexión",
    desc: "Gestionamos los permisos y la conexión a la red con la empresa de energía, sin que tengas que hacer filas.",
  },
  {
    num: "04",
    title: "Mantenimiento y monitoreo",
    desc: "Revisamos periódicamente tu sistema y monitoreamos su rendimiento para que siga ahorrándote dinero con los años.",
  },
]

export function ServicesSection() {
  return (
    <section id="servicios" className="bg-card py-[70px]">
      <div className="mx-auto max-w-[1120px] px-8">
        <div className="mb-10 max-w-[56ch]">
          <h2 className="font-heading text-[clamp(2rem,4vw,2.6rem)] text-ink">Servicios</h2>
          <p className="mt-2.5 font-script text-[1.9rem] leading-[1.3] text-gold">
            Energía solar, de principio a fin
          </p>
          <p className="mt-2.5 text-[1.02rem] text-ink-soft">
            Diseñamos, instalamos y acompañamos tu sistema para que aproveches la energía del sol y
            reduzcas tu factura.
          </p>
        </div>
        <div className="border-b-2 border-dashed border-line">
          {services.map((service) => (
            <details key={service.num} className="group border-t-2 border-dashed border-line py-[22px]">
              <summary className="flex cursor-pointer list-none items-center gap-4 [&::-webkit-details-marker]:hidden">
                <span className="w-9 flex-shrink-0 font-heading text-[1.6rem] text-gold">
                  {service.num}
                </span>
                <span className="flex-1 text-[1.15rem]">{service.title}</span>
                <Plus
                  className="h-6 w-6 flex-shrink-0 text-ink transition-transform duration-200 group-open:rotate-45"
                  aria-hidden="true"
                />
              </summary>
              <p className="ml-[52px] mt-3.5 max-w-[70ch] text-[0.98rem] text-ink-soft">
                {service.desc}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
