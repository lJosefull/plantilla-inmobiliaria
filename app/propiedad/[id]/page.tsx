import Link from "next/link"
import { MapPin, ArrowRight } from "lucide-react"
import { Header } from "@/components/layout/header"
import { ImageGallery } from "@/components/property-detail/image-gallery"
import { PropertyInfo } from "@/components/property-detail/property-info"
import { ContactForm } from "@/components/property-detail/contact-form"
import { PropertyCard } from "@/components/properties/property-card"
import { Button } from "@/components/ui/button"

const propertyImages = [
  "/modern-living-room.png",
  "/modern-house-kitchen.png",
  "/modern-house-bedroom.png",
  "/modern-bathroom.png",
  "/modern-house-exterior.png",
]

const propertyData = {
  title: "Villa Moderna Mediterránea",
  location: "Calle Principal 123, Centro, Marbella, España",
  price: 850000,
  pricePerSqm: 2656,
  beds: 4,
  baths: 3,
  area: 320,
  year: 2023,
  description:
    "Excepcional villa moderna ubicada en una de las zonas más exclusivas de Marbella. Esta propiedad única combina arquitectura contemporánea con acabados de lujo, ofreciendo vistas panorámicas al Mediterráneo y un diseño que maximiza la luz natural en cada espacio. La vivienda cuenta con 4 amplias habitaciones con baño en suite, cocina gourmet equipada con electrodomésticos de alta gama, salón-comedor de concepto abierto con acceso directo a la terraza y piscina infinity. Incluye sistema domótico, climatización por suelo radiante, garaje para 3 vehículos y bodega climatizada.",
  features: [
    "Piscina Infinity",
    "Sistema Domótico",
    "Vistas al Mar",
    "Garaje 3 Coches",
    "Bodega Climatizada",
    "Gimnasio Privado",
    "Cocina Gourmet",
    "Suelo Radiante",
    "Paneles Solares",
    "Jardín Diseñado",
    "Seguridad 24/7",
    "Ascensor Privado",
  ],
}

const similarProperties = [
  {
    id: 10,
    price: 920000,
    title: "Casa Contemporánea",
    location: "Marbella, España",
    beds: 4,
    baths: 3,
    area: 290,
  },
  {
    id: 11,
    price: 1100000,
    title: "Villa de Diseño",
    location: "Marbella, España",
    beds: 5,
    baths: 4,
    area: 350,
  },
  {
    id: 12,
    price: 780000,
    title: "Apartamento Premium",
    location: "Marbella, España",
    beds: 3,
    baths: 2,
    area: 180,
  },
  {
    id: 13,
    price: 1350000,
    title: "Villa con Piscina",
    location: "Marbella, España",
    beds: 6,
    baths: 5,
    area: 420,
  },
]

export default function PropiedadDetailPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-6 pt-32 pb-16">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary transition-colors">
            Inicio
          </Link>
          <span>/</span>
          <Link href="/propiedades" className="hover:text-primary transition-colors">
            Propiedades
          </Link>
          <span>/</span>
          <span className="text-foreground">Villa Moderna Mediterránea</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <ImageGallery images={propertyImages} />
            <PropertyInfo {...propertyData} />

            {/* Location Map */}
            <div className="bg-card/50 backdrop-blur-2xl border border-border/50 rounded-3xl p-8 shadow-xl">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Ubicación</h2>
              <div className="aspect-video bg-secondary/30 rounded-2xl flex items-center justify-center border border-border/30">
                <div className="text-center text-muted-foreground">
                  <MapPin className="h-12 w-12 mx-auto mb-3 text-primary" />
                  <p className="text-lg">Mapa de ubicación</p>
                  <p className="text-sm mt-1">Marbella, España</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <ContactForm
              agentName="María García"
              agentTitle="Agente Premium"
              agentImage="/professional-real-estate-agent.png"
            />
          </div>
        </div>

        {/* Similar Properties */}
        <div className="mt-20">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-2">Propiedades Similares</h2>
              <p className="text-muted-foreground text-lg">Otras opciones que podrían interesarte</p>
            </div>
            <Link href="/propiedades" className="hidden md:block">
              <Button variant="outline" className="group rounded-xl bg-secondary/30 border-border/50">
                Ver más
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {similarProperties.map((property) => (
              <PropertyCard key={property.id} {...property} imageUrl="/luxury-estate.png" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
