import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Truck, UtensilsCrossed, Package, Factory, Briefcase, Building2 } from "lucide-react"

const verticals = [
  {
    icon: UtensilsCrossed,
    title: "Alimentación",
    description: "Gestiona de forma eficiente cada etapa del proceso alimentario con trazabilidad completa.",
  },
  {
    icon: Package,
    title: "Import-Export",
    description: "Lleva control total de tus gastos, documentación aduanera y logística internacional.",
  },
  {
    icon: Truck,
    title: "Logística",
    description: "Optimiza rutas, gestiona flotas y controla inventarios en tiempo real.",
  },
  {
    icon: Factory,
    title: "Fabricación",
    description: "Control de producción, MRP, calidad y mantenimiento integrado.",
  },
  {
    icon: Briefcase,
    title: "Servicios",
    description: "Gestión de proyectos, hojas de tiempo y facturación automatizada.",
  },
  {
    icon: Building2,
    title: "Multinacionales",
    description: "Soluciones multiempresa, multimoneda y multidioma para operaciones globales.",
  },
]

export function VerticalsSection() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary mb-4">Sectores</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
            Trabajamos todos los sectores
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Nubastalia se adapta a cualquier tipo de empresa, sin importar la complejidad de la industria o el tipo de
            proyecto tecnológico.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {verticals.map((vertical) => (
            <Card
              key={vertical.title}
              className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30 overflow-hidden"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <vertical.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{vertical.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{vertical.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Te ayudamos según tus procesos internos
          </Button>
        </div>
      </div>
    </section>
  )
}
