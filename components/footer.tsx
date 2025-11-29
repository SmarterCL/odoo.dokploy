import Link from "next/link"
import { Button } from "@/components/ui/button"

const footerLinks = {
  servicios: [
    { label: "Implementación Odoo", href: "#" },
    { label: "Integraciones", href: "#" },
    { label: "Desarrollo a medida", href: "#" },
    { label: "Soporte técnico", href: "#" },
    { label: "Formación", href: "#" },
  ],
  empresa: [
    { label: "Sobre nosotros", href: "#" },
    { label: "Casos de éxito", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Carreras", href: "#" },
  ],
  recursos: [
    { label: "Precios Odoo Enterprise", href: "#" },
    { label: "Cambio de Partner", href: "#" },
    { label: "Migración SAP a Odoo", href: "#" },
    { label: "FAQ", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">N</span>
              </div>
              <span className="text-xl font-bold">Nubastalia</span>
            </Link>
            <p className="text-background/70 max-w-sm leading-relaxed">
              Somos uno de los partners más antiguos de Chile y se nota en nuestra tasa de retención de +94%. Partner
              Silver de Odoo desde 2011.
            </p>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Solicitar Demo Gratuita</Button>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="font-semibold mb-4">Servicios</h4>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-background/70 hover:text-background transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-background/70 hover:text-background transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h4 className="font-semibold mb-4">Recursos</h4>
            <ul className="space-y-3">
              {footerLinks.recursos.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-background/70 hover:text-background transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-background/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/50">© 2025 Nubastalia. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-sm text-background/50 hover:text-background transition-colors">
              Política de Privacidad
            </Link>
            <Link href="#" className="text-sm text-background/50 hover:text-background transition-colors">
              Términos de Servicio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
