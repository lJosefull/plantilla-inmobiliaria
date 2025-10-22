import { Building2, Sparkles, MapPin } from "lucide-react"

const features = [
  {
    icon: Building2,
    title: "Propiedades Exclusivas",
    description: "Acceso a las propiedades más exclusivas y codiciadas del mercado",
  },
  {
    icon: Sparkles,
    title: "Servicio Premium",
    description: "Asesoramiento personalizado con los mejores expertos del sector",
  },
  {
    icon: MapPin,
    title: "Ubicaciones Prime",
    description: "Las mejores ubicaciones en las ciudades más deseadas del mundo",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="container mx-auto px-6 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div key={i} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-bold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
