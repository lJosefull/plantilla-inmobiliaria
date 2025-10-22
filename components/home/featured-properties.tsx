import Link from "next/link"
import { MapPin, Building2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const properties = [
  {
    id: 1,
    price: 850000,
    title: "Villa Moderna Mediterránea",
    location: "Marbella, España",
    beds: 4,
    baths: 3,
    area: 320,
  },
  {
    id: 2,
    price: 1200000,
    title: "Penthouse de Lujo",
    location: "Madrid, España",
    beds: 3,
    baths: 2,
    area: 180,
  },
  {
    id: 3,
    price: 650000,
    title: "Casa Contemporánea",
    location: "Barcelona, España",
    beds: 5,
    baths: 4,
    area: 280,
  },
  {
    id: 4,
    price: 920000,
    title: "Apartamento Exclusivo",
    location: "Valencia, España",
    beds: 3,
    baths: 2,
    area: 150,
  },
  {
    id: 5,
    price: 1500000,
    title: "Villa con Vistas al Mar",
    location: "Ibiza, España",
    beds: 6,
    baths: 5,
    area: 450,
  },
  {
    id: 6,
    price: 780000,
    title: "Loft Industrial Premium",
    location: "Bilbao, España",
    beds: 2,
    baths: 2,
    area: 120,
  },
]

export function FeaturedProperties() {
  return (
    <section className="py-20 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Propiedades Destacadas</h2>
            <p className="text-muted-foreground text-lg">Selección exclusiva de nuestras mejores propiedades</p>
          </div>
          <Link href="/propiedades">
            <Button variant="outline" className="hidden md:flex items-center gap-2 group bg-transparent">
              Ver todas
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <Link key={property.id} href={`/propiedad/${property.id}`} className="group">
              <div className="relative overflow-hidden rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src={`/luxury-modern-house-.jpg?height=400&width=600&query=luxury modern house ${property.id}`}
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4 px-4 py-2 rounded-full bg-background/90 backdrop-blur-sm border border-border/50">
                    <span className="text-sm font-bold text-primary">${property.price.toLocaleString()}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {property.title}
                  </h3>
                  <div className="flex items-center text-muted-foreground text-sm mb-4">
                    <MapPin className="h-4 w-4 mr-1.5" />
                    {property.location}
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground pt-4 border-t border-border/50">
                    <span className="flex items-center gap-1">
                      <Building2 className="h-4 w-4" />
                      {property.beds} hab
                    </span>
                    <span>{property.baths} baños</span>
                    <span>{property.area} m²</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12 md:hidden">
          <Link href="/propiedades">
            <Button className="group">
              Ver todas las propiedades
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
