import Link from "next/link"
import { Button } from "@/components/ui/button"

const footerLinks = {
  servicios: [
    { label: "Implementación Odoo", href: "#" },
    { label: "Integraciones", href: "#" },
    { label: "Desarrollo a medida", href: "#" },
    { label: "Soporte técnico", href: "#" },
    { label: "Hosting gestionado", href: "#" },
  ],
  tecnologias: [
    { label: "Odoo Enterprise", href: "#" },
    { label: "n8n Automatización", href: "#" },
    { label: "WhatsApp Cloud API", href: "#" },
    { label: "Chatwoot", href: "#" },
    { label: "Ollama IA", href: "#" },
  ],
  recursos: [
    { label: "Blog", href: "#" },
    { label: "Documentación", href: "#" },
    { label: "Casos de uso", href: "#" },
    { label: "FAQ", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">S</span>
              </div>
              <span className="text-xl font-bold">SmarterOS</span>
            </Link>
            <p className="text-sm sm:text-base text-background/70 max-w-sm leading-relaxed">
              Plataforma de automatización y ERP basada en Odoo, n8n, Chatwoot, Supabase y Ollama. Chile - proyectos
              remotos y presenciales.
            </p>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 w-full sm:w-auto">
              Agenda una demo
            </Button>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Servicios</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.servicios.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-xs sm:text-sm text-background/70 hover:text-background transition-colors inline-block py-1">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tecnologías */}
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Tecnologías</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.tecnologias.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-xs sm:text-sm text-background/70 hover:text-background transition-colors inline-block py-1">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Recursos</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.recursos.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-xs sm:text-sm text-background/70 hover:text-background transition-colors inline-block py-1">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-background/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <p className="text-xs sm:text-sm text-background/50">© 2025 SmarterOS Chile. Todos los derechos reservados.</p>
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
            <Link href="#" className="text-xs sm:text-sm text-background/50 hover:text-background transition-colors py-2">
              Política de Privacidad
            </Link>
            <Link href="#" className="text-xs sm:text-sm text-background/50 hover:text-background transition-colors py-2">
              Términos de Servicio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
