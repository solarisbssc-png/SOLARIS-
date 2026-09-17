import { Instagram, MessageCircle, Music2 } from "lucide-react"

const socials = [
  {
    href: "https://wa.me/573176919658",
    label: "WhatsApp",
    icon: MessageCircle,
    className: "bg-[#25d366]",
  },
  {
    href: "https://instagram.com",
    label: "Instagram",
    icon: Instagram,
    className: "bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]",
  },
  {
    href: "https://tiktok.com",
    label: "TikTok",
    icon: Music2,
    className: "bg-black",
  },
]

export function SiteFooter() {
  return (
    <>
      <footer className="border-t border-[#2c2c28] bg-ink py-6 text-[0.88rem] text-[#b9b7aa]">
        <div className="mx-auto flex max-w-[1120px] flex-wrap items-center justify-between gap-3 px-8">
          <span>© 2026 Solaris</span>
          <span>Solaris Martínez Salazar &amp; Cía S.C.S</span>
          <span>Cali, Valle del Cauca</span>
        </div>
      </footer>

      <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-center gap-3">
        {socials.map(({ href, label, icon: Icon, className }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={`flex h-[52px] w-[52px] items-center justify-center rounded-full text-white shadow-[0_4px_14px_rgba(0,0,0,0.25)] transition-[filter] hover:brightness-110 ${className}`}
          >
            <Icon className="h-6 w-6" aria-hidden="true" />
          </a>
        ))}
      </div>
    </>
  )
}
