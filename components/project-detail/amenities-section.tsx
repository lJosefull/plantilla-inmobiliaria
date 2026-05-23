import { 
  Waves, 
  Dumbbell, 
  Car, 
  Shield, 
  Trees, 
  Sofa,
  Building,
  Wifi,
  Baby,
  Dog,
  Coffee,
  UtensilsCrossed,
  type LucideIcon
} from "lucide-react"

interface AmenitiesSectionProps {
  amenities: string[]
}

const amenityIcons: Record<string, LucideIcon> = {
  "Piscina": Waves,
  "Gimnasio": Dumbbell,
  "Estacionamiento": Car,
  "Seguridad 24/7": Shield,
  "Áreas Verdes": Trees,
  "Salón de Eventos": Sofa,
  "Lobby": Building,
  "WiFi Zonas Comunes": Wifi,
  "Área Infantil": Baby,
  "Pet Friendly": Dog,
  "Cafetería": Coffee,
  "BBQ Area": UtensilsCrossed,
}

export function AmenitiesSection({ amenities }: AmenitiesSectionProps) {
  return (
    <div className="bg-card/50 backdrop-blur-2xl border border-border/50 rounded-3xl p-8 shadow-xl">
      <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Amenidades</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {amenities.map((amenity, index) => {
          const Icon = amenityIcons[amenity] || Building
          return (
            <div 
              key={index}
              className="flex items-center gap-3 p-4 bg-secondary/30 rounded-xl border border-border/30 hover:border-primary/30 transition-colors"
            >
              <div className="p-2 rounded-lg bg-primary/10">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground">{amenity}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
