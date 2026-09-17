const products = [
  {
    tag: "Residencial",
    title: "Kits para el hogar",
    desc: "Sistemas compactos pensados para el consumo de una vivienda familiar, con instalación en techo.",
    fit: "Ideal para: reducir la factura mensual de casa.",
  },
  {
    tag: "Comercial",
    title: "Sistemas para negocios",
    desc: "Instalaciones de mayor capacidad para locales, oficinas y bodegas con consumo eléctrico alto.",
    fit: "Ideal para: negocios que buscan bajar costos operativos.",
  },
  {
    tag: "Respaldo",
    title: "Baterías de respaldo",
    desc: "Almacena la energía que generas de día para usarla de noche o durante cortes de luz.",
    fit: "Ideal para: zonas con cortes frecuentes de energía.",
  },
]

export function ProductsSection() {
  return (
    <section id="productos" className="py-[70px]">
      <div className="mx-auto max-w-[1120px] px-8">
        <div className="mb-10 max-w-[56ch]">
          <h2 className="font-heading text-[clamp(2rem,4vw,2.6rem)] text-ink">Productos</h2>
          <p className="mt-2.5 text-[1.02rem] text-ink-soft">
            Soluciones para distintos tipos de consumo, desde una casa hasta una planta industrial.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.title}
              className="rounded-[20px] border-2 border-ink bg-card px-6 py-[26px]"
            >
              <span className="mb-3.5 inline-block rounded-3xl bg-gold px-3 py-1 text-[0.8rem] font-bold text-white">
                {product.tag}
              </span>
              <h3 className="mb-2 font-heading text-[1.4rem]">{product.title}</h3>
              <p className="mb-3 text-[0.95rem] text-ink-soft">{product.desc}</p>
              <p className="text-[0.88rem] font-semibold text-ink">{product.fit}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
