import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const benefits = [
  "Optimiza tus procesos con una implementación a medida",
  "Acelera el crecimiento de tu empresa con herramientas adaptadas",
  "Asegura un soporte experto con consultoría de negocio",
  "Programación, formación y asistencia técnica incluida",
  "Alojamiento técnico gestionado para máxima eficiencia",
]

export function TransformSection() {
  return (
    <section id="transformar" className="py-20 lg:py-32 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden aspect-square">
                  <img
                    src="/warehouse-logistics-management-software-chile.jpg"
                    alt="Gestión de almacén con Odoo"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-video">
                  <img
                    src="/food-industry-production-line-management.jpg"
                    alt="Industria alimentaria"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden aspect-video">
                  <img src="/import-export-cargo-shipping-containers.jpg" alt="Import-Export" className="object-cover w-full h-full" />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-square">
                  <img
                    src="/modern-office-business-meeting-erp.jpg"
                    alt="Reunión de negocios"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div>
              <p className="text-sm font-medium text-primary mb-4">Transformación empresarial</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                ¿Cómo puede Nubastalia transformar tu empresa?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                En Nubastalia, hacemos que Odoo trabaje para ti. Nos encargamos de desarrollar, personalizar, integrar e
                implantar Odoo sin importar el sector en el que operes.
              </p>
            </div>

            <p className="text-muted-foreground">
              Si tu negocio se dedica a la importación, fabricación, servicios, alimentación, logística o cualquier otra
              industria, tenemos la solución que necesitas.
            </p>

            <ul className="space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>

            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Descubre cómo podemos ayudarte
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
