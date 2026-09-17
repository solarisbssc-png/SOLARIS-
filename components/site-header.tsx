const navLinks = [
  { href: "#soluciones", label: "Soluciones" },
  { href: "#servicios", label: "Servicios" },
  { href: "#productos", label: "Productos" },
  { href: "#nosotros", label: "Sobre nosotros" },
  { href: "#contacto", label: "Contacto" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg">
      <nav className="mx-auto flex max-w-[1120px] items-center justify-between px-8 py-[18px]">
        <div className="flex items-center gap-3">
          <span className="font-brand text-[2.6rem] leading-none text-ink">Solaris</span>
        </div>
        <ul className="hidden gap-[30px] md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-heading text-[1.02rem] text-ink-soft transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contacto"
          className="whitespace-nowrap rounded-3xl bg-accent px-5 py-2.5 font-heading text-[0.98rem] text-[#1a1400]"
        >
          Cotizar
        </a>
      </nav>
    </header>
  )
}
