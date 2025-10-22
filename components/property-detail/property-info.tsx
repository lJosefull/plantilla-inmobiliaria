import { MapPin, Bed, Bath, Maximize, Calendar } from "lucide-react"

interface PropertyInfoProps {
  title: string
  location: string
  price: number
  pricePerSqm: number
  beds: number
  baths: number
  area: number
  year: number
  description: string
  features: string[]
}

export function PropertyInfo({
  title,
  location,
  price,
  pricePerSqm,
  beds,
  baths,
  area,
  year,
  description,
  features,
}: PropertyInfoProps) {
  return (
    <div className="bg-card/50 backdrop-blur-2xl border border-border/50 rounded-3xl p-8 shadow-xl">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
        <div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">{title}</h1>
          <div className="flex items-center text-muted-foreground text-lg">
            <MapPin className="h-5 w-5 mr-2" />
            <span>{location}</span>
          </div>
        </div>
        <div className="text-left md:text-right">
          <div className="text-4xl md:text-5xl font-serif font-bold text-primary mb-1">${price.toLocaleString()}</div>
          <div className="text-sm text-muted-foreground">${pricePerSqm}/m²</div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-border/50">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
            <Bed className="h-7 w-7 text-primary" />
          </div>
          <div>
            <div className="text-3xl font-bold text-foreground">{beds}</div>
            <div className="text-sm text-muted-foreground">Habitaciones</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
            <Bath className="h-7 w-7 text-primary" />
          </div>
          <div>
            <div className="text-3xl font-bold text-foreground">{baths}</div>
            <div className="text-sm text-muted-foreground">Baños</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
            <Maximize className="h-7 w-7 text-primary" />
          </div>
          <div>
            <div className="text-3xl font-bold text-foreground">{area}</div>
            <div className="text-sm text-muted-foreground">m²</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
            <Calendar className="h-7 w-7 text-primary" />
          </div>
          <div>
            <div className="text-3xl font-bold text-foreground">{year}</div>
            <div className="text-sm text-muted-foreground">Año</div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Descripción</h2>
        <p className="text-muted-foreground leading-relaxed text-lg">{description}</p>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Características</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {features.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-3 text-sm bg-secondary/30 rounded-xl px-4 py-3 border border-border/30"
            >
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-foreground font-medium">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
