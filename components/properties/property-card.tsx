import Link from "next/link"
import { MapPin, Building2 } from "lucide-react"

interface PropertyCardProps {
  id: number
  price: number
  title: string
  location: string
  beds: number
  baths: number
  area: number
  imageUrl?: string
}

export function PropertyCard({ id, price, title, location, beds, baths, area, imageUrl }: PropertyCardProps) {
  return (
    <Link href={`/propiedad/${id}`} className="group">
      <div className="relative overflow-hidden rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10">
        <div className="aspect-[4/3] relative overflow-hidden">
          <img
            src={imageUrl || `/luxury-modern-property-.jpg?height=400&width=600&query=luxury modern property ${id}`}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          <div className="absolute top-4 right-4 px-4 py-2 rounded-full bg-background/90 backdrop-blur-sm border border-border/50">
            <span className="text-sm font-bold text-primary">${price.toLocaleString()}</span>
          </div>
        </div>
        <div className="p-6">
          <h3 className="font-serif text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors line-clamp-1">
            {title}
          </h3>
          <div className="flex items-center text-muted-foreground text-sm mb-4">
            <MapPin className="h-4 w-4 mr-1.5 shrink-0" />
            <span className="line-clamp-1">{location}</span>
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground pt-4 border-t border-border/50">
            <span className="flex items-center gap-1">
              <Building2 className="h-4 w-4" />
              {beds} hab
            </span>
            <span>{baths} baños</span>
            <span>{area} m²</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
