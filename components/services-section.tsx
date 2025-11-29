import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Settings, Link2, Headphones, Code, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Settings,
    title: "Implantamos Odoo Enterprise",
    description:
      "Quiero un proyecto Odoo. Implementación completa adaptada a tu negocio con las mejores prácticas del mercado.",
    cta: "Iniciar proyecto",
  },
  {
    icon: Link2,
    title: "Integramos con terceros",
    description:
      "Conéctame a Amazon, Mercado Pago, Prestashop, Fedex, lo que necesites. Integración con cualquier plataforma.",
    cta: "Ver integraciones",
  },
  {
    icon: Headphones,
    title: "Servicios profesionales",
    description: "Necesito soporte técnico, migración de datos, formación y/o alojamiento gestionado para tu ERP.",
    cta: "Solicitar soporte",
  },
  {
    icon: Code,
    title: "Desarrollo a tu medida",
    description: "Quiero personalizar mi ERP. Desarrollamos módulos personalizados según tus procesos específicos.",
    cta: "Personalizar Odoo",
  },
]

export function ServicesSection() {
  return (
    <section id="servicios" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary mb-4">Nuestros servicios</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
            Nuestra colección de servicios tecnológicos abarca todas las necesidades
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explora cómo ayudamos a las empresas a transformarse con Odoo
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                <Button variant="link" className="p-0 h-auto text-primary hover:text-primary/80">
                  {service.cta}
                  <ArrowRight className="ml-1 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
