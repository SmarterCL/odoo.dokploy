import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "María González",
    company: "Distribuidora Nacional",
    role: "Gerente de Operaciones",
    content:
      "La implementación de Odoo con Nubastalia transformó completamente nuestra gestión de inventario. Ahora tenemos visibilidad total de nuestros procesos.",
    rating: 5,
  },
  {
    name: "Carlos Pérez",
    company: "Exportadora del Sur",
    role: "Director General",
    content:
      "El equipo de Nubastalia entendió perfectamente nuestras necesidades de comercio exterior. La integración con aduanas es impecable.",
    rating: 5,
  },
  {
    name: "Ana Rodríguez",
    company: "Alimentos Premium",
    role: "CEO",
    content:
      "Llevamos 8 años trabajando con Nubastalia. Su soporte técnico y conocimiento del sector alimentario nos ha permitido crecer de forma sostenible.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-32 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary mb-4">Historias de éxito</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
            +50 empresas con necesidades tecnológicas complejas confían en Nubastalia
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="bg-card">
              <CardContent className="p-6 space-y-4">
                <Quote className="w-8 h-8 text-primary/30" />
                <p className="text-foreground leading-relaxed">"{testimonial.content}"</p>
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <div className="pt-4 border-t border-border">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-sm text-primary">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
