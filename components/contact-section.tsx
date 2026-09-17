const contactItems = [
  { k: "Teléfono / WhatsApp", v: "+57 317 691 9658" },
  { k: "Correo", v: "solarisb.s.s.c@gmail.com" },
  { k: "Ubicación", v: "Cali, Valle del Cauca, Colombia" },
  { k: "Horario", v: "Lunes a sábado, 8:00 a.m. – 5:00 p.m." },
]

export function ContactSection() {
  return (
    <section id="contacto" className="bg-ink py-[70px] text-white">
      <div className="mx-auto grid max-w-[1120px] gap-9 px-8 md:grid-cols-2">
        <div>
          <h2 className="mb-3.5 font-heading text-[clamp(2rem,4vw,2.6rem)] text-accent">
            Hablemos de tu proyecto
          </h2>
          <p className="mb-7 max-w-[42ch] text-[#dad8cc]">
            Cuéntanos sobre tu casa o negocio y te enviamos una cotización sin costo.
          </p>
          <ul className="border-b border-[#2c2c28]">
            {contactItems.map((item) => (
              <li
                key={item.k}
                className="flex flex-col gap-0.5 border-t border-[#2c2c28] py-3.5"
              >
                <span className="text-[0.8rem] font-semibold uppercase tracking-[0.06em] text-accent">
                  {item.k}
                </span>
                <span className="text-[1.05rem] font-medium">{item.v}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="min-h-[300px] overflow-hidden rounded-[18px] border-2 border-[#2c2c28]">
          <iframe
            title="Ubicación de Solaris en Cali, Valle del Cauca"
            src="https://www.google.com/maps?q=Cali,Valle%20del%20Cauca,Colombia&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full min-h-[300px] w-full border-0"
          />
        </div>
      </div>
    </section>
  )
}
