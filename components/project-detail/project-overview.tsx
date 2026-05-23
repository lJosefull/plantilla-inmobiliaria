import { Calendar, Building2, Home, MapPin, Clock, CheckCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface ProjectOverviewProps {
  title: string
  location: string
  description: string
  status: "En Construcción" | "Pre-Venta" | "Entrega Inmediata"
  deliveryDate?: string
  totalUnits: number
  availableUnits: number
  priceFrom: number
  priceTo: number
  developer: string
}

export function ProjectOverview({
  title,
  location,
  description,
  status,
  deliveryDate,
  totalUnits,
  availableUnits,
  priceFrom,
  priceTo,
  developer,
}: ProjectOverviewProps) {
  const statusColors = {
    "En Construcción": "bg-amber-500/20 text-amber-400 border-amber-500/30",
    "Pre-Venta": "bg-blue-500/20 text-blue-400 border-blue-500/30",
    "Entrega Inmediata": "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  }

  return (
    <div className="bg-card/50 backdrop-blur-2xl border border-border/50 rounded-3xl p-8 shadow-xl">
      <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
        <div>
          <Badge className={`${statusColors[status]} border rounded-full px-3 py-1 mb-4`}>
            {status}
          </Badge>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-3">
            {title}
          </h1>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-5 w-5 text-primary" />
            <span className="text-lg">{location}</span>
          </div>
        </div>
        
        <div className="text-right">
          <p className="text-sm text-muted-foreground mb-1">Precio desde</p>
          <p className="text-3xl font-bold text-primary">${priceFrom.toLocaleString("es-ES")}</p>
          <p className="text-sm text-muted-foreground">hasta ${priceTo.toLocaleString("es-ES")}</p>
        </div>
      </div>

      <p className="text-muted-foreground leading-relaxed mb-8">{description}</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-4 bg-secondary/30 rounded-xl border border-border/30">
          <div className="flex items-center gap-2 mb-2">
            <Building2 className="h-5 w-5 text-primary" />
            <span className="text-sm text-muted-foreground">Total Unidades</span>
          </div>
          <p className="text-2xl font-bold text-foreground">{totalUnits}</p>
        </div>
        
        <div className="p-4 bg-secondary/30 rounded-xl border border-border/30">
          <div className="flex items-center gap-2 mb-2">
            <Home className="h-5 w-5 text-primary" />
            <span className="text-sm text-muted-foreground">Disponibles</span>
          </div>
          <p className="text-2xl font-bold text-foreground">{availableUnits}</p>
        </div>
        
        {deliveryDate && (
          <div className="p-4 bg-secondary/30 rounded-xl border border-border/30">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="h-5 w-5 text-primary" />
              <span className="text-sm text-muted-foreground">Entrega</span>
            </div>
            <p className="text-2xl font-bold text-foreground">{deliveryDate}</p>
          </div>
        )}
        
        <div className="p-4 bg-secondary/30 rounded-xl border border-border/30">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle className="h-5 w-5 text-primary" />
            <span className="text-sm text-muted-foreground">Desarrollador</span>
          </div>
          <p className="text-lg font-bold text-foreground truncate">{developer}</p>
        </div>
      </div>
    </div>
  )
}
