import Link from "next/link"
import { MapPin, Building2, Home, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  id: number
  title: string
  location: string
  imageUrl: string
  totalUnits: number
  availableUnits: number
  priceFrom: number
  status: "En Construcción" | "Pre-Venta" | "Entrega Inmediata"
  deliveryDate?: string
}

export function ProjectCard({
  id,
  title,
  location,
  imageUrl,
  totalUnits,
  availableUnits,
  priceFrom,
  status,
  deliveryDate,
}: ProjectCardProps) {
  const statusColors = {
    "En Construcción": "bg-amber-500/20 text-amber-400 border-amber-500/30",
    "Pre-Venta": "bg-blue-500/20 text-blue-400 border-blue-500/30",
    "Entrega Inmediata": "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  }

  return (
    <Link href={`/proyectos/${id}`} className="group block">
      <div className="relative overflow-hidden rounded-3xl bg-card border border-border/50 shadow-xl hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1">
        {/* Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
          
          {/* Status Badge */}
          <Badge className={`absolute top-4 left-4 ${statusColors[status]} border rounded-full px-3 py-1`}>
            {status}
          </Badge>

          {/* Units Available */}
          <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-2 border border-border/50">
            <Home className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">{availableUnits} disponibles</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-serif font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          
          <div className="flex items-center gap-2 text-muted-foreground mb-4">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="text-sm">{location}</span>
          </div>

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <Building2 className="h-4 w-4" />
                <span>{totalUnits} unidades</span>
              </div>
              {deliveryDate && (
                <span>Entrega: {deliveryDate}</span>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-border/50">
            <div>
              <p className="text-xs text-muted-foreground mb-0.5">Desde</p>
              <p className="text-xl font-bold text-primary">
                ${priceFrom.toLocaleString("es-ES")}
              </p>
            </div>
            <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
              Ver proyecto
              <ArrowRight className="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
