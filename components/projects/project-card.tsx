import Link from "next/link"
import { MapPin, Building2, Calendar, ArrowRight, TrendingUp } from "lucide-react"
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
  const soldUnits = totalUnits - availableUnits
  const soldPercentage = Math.round((soldUnits / totalUnits) * 100)
  
  const statusConfig = {
    "En Construcción": {
      colors: "bg-amber-500/20 text-amber-400 border-amber-500/30",
      icon: "🏗️"
    },
    "Pre-Venta": {
      colors: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      icon: "🔥"
    },
    "Entrega Inmediata": {
      colors: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
      icon: "✓"
    },
  }

  const progressColor = soldPercentage > 75 ? "bg-red-500" : soldPercentage > 50 ? "bg-amber-500" : "bg-primary"

  return (
    <Link href={`/proyectos/${id}`} className="group block">
      <div className="relative overflow-hidden rounded-3xl bg-card border border-border/50 shadow-xl hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2">
        {/* Image Container */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
          
          {/* Status Badge */}
          <Badge className={`absolute top-4 left-4 ${statusConfig[status].colors} border rounded-full px-3 py-1.5 text-xs font-semibold`}>
            <span className="mr-1.5">{statusConfig[status].icon}</span>
            {status}
          </Badge>

          {/* Price Tag */}
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-xs text-foreground/70 mb-1">Desde</p>
                <p className="text-2xl font-bold text-foreground">
                  €{priceFrom.toLocaleString("es-ES")}
                </p>
              </div>
              {deliveryDate && (
                <div className="flex items-center gap-1.5 bg-background/80 backdrop-blur-sm rounded-full px-3 py-1.5 border border-border/50">
                  <Calendar className="h-3.5 w-3.5 text-primary" />
                  <span className="text-xs font-medium">{deliveryDate}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-lg font-serif font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-1">
            {title}
          </h3>
          
          <div className="flex items-center gap-2 text-muted-foreground mb-4">
            <MapPin className="h-4 w-4 text-primary shrink-0" />
            <span className="text-sm line-clamp-1">{location}</span>
          </div>

          {/* Progress Bar */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1.5 text-sm">
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">{soldPercentage}% vendido</span>
              </div>
              <span className="text-sm font-medium text-primary">{availableUnits} disponibles</span>
            </div>
            <div className="h-2 bg-secondary rounded-full overflow-hidden">
              <div 
                className={`h-full ${progressColor} rounded-full transition-all duration-500`}
                style={{ width: `${soldPercentage}%` }}
              />
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-border/50">
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Building2 className="h-4 w-4" />
              <span>{totalUnits} unidades totales</span>
            </div>
            <div className="flex items-center gap-1.5 text-primary font-semibold text-sm group-hover:gap-2.5 transition-all">
              Ver detalles
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
