"use client"

import { useEffect, useState, useRef } from "react"

const stats = [
  { value: 50, suffix: "+", label: "Clientes" },
  { value: 1000, suffix: "+", label: "Usuarios de Odoo gestionados" },
  { value: 15, suffix: "+", label: "Industrias atendidas" },
  { value: 2000, suffix: "+", label: "Incidencias resueltas al año" },
  { value: 500, suffix: "+", label: "Horas de formación al año" },
]

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const duration = 2000
          const steps = 60
          const increment = value / steps
          let current = 0

          const timer = setInterval(() => {
            current += increment
            if (current >= value) {
              setCount(value)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.5 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [value, hasAnimated])

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-background">
      {count.toLocaleString()}
      {suffix}
    </div>
  )
}

export function StatsSection() {
  return (
    <section className="py-20 lg:py-32 bg-foreground text-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary mb-4">Nubastalia en cifras</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Nuestros datos nos avalan</h2>
          <p className="text-background/70 max-w-2xl mx-auto">
            +94% de nuestros clientes siguen vinculados a Nubastalia, un reflejo de nuestra capacidad tecnológica
            superior y nuestros servicios profesionales de garantía.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center space-y-2">
              <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              <p className="text-sm text-background/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
