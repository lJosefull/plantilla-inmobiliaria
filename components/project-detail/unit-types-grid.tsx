import { Bed, Bath, Maximize, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface UnitType {
  id: number
  name: string
  beds: number
  baths: number
  area: number
  priceFrom: number
  available: number
  imageUrl: string
}

interface UnitTypesGridProps {
  units: UnitType[]
}

export function UnitTypesGrid({ units }: UnitTypesGridProps) {
  return (
    <div className="bg-card/50 backdrop-blur-2xl border border-border/50 rounded-3xl p-8 shadow-xl">
      <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Tipos de Unidades</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {units.map((unit) => (
          <div 
            key={unit.id} 
            className="group bg-secondary/30 rounded-2xl overflow-hidden border border-border/30 hover:border-primary/30 transition-all"
          >
            <div className="relative aspect-[16/9] overflow-hidden">
              <img 
                src={unit.imageUrl || "/placeholder.svg"} 
                alt={unit.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <Badge className="absolute top-3 right-3 bg-background/90 text-foreground border-border/50">
                {unit.available} disponibles
              </Badge>
            </div>
            
            <div className="p-5">
              <h3 className="text-lg font-semibold text-foreground mb-3">{unit.name}</h3>
              
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-1.5">
                  <Bed className="h-4 w-4" />
                  <span>{unit.beds} hab.</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Bath className="h-4 w-4" />
                  <span>{unit.baths} baños</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Maximize className="h-4 w-4" />
                  <span>{unit.area} m²</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-border/30">
                <div>
                  <p className="text-xs text-muted-foreground">Desde</p>
                  <p className="text-lg font-bold text-primary">${unit.priceFrom.toLocaleString("es-ES")}</p>
                </div>
                <Button variant="ghost" size="sm" className="text-primary hover:text-primary hover:bg-primary/10 gap-1">
                  Ver plano
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
