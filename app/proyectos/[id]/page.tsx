import Link from "next/link"
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ProjectGallery } from "@/components/project-detail/project-gallery"
import { ProjectOverview } from "@/components/project-detail/project-overview"
import { UnitTypesGrid } from "@/components/project-detail/unit-types-grid"
import { AmenitiesSection } from "@/components/project-detail/amenities-section"
import { ProjectCard } from "@/components/projects/project-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const projectImages = [
  "/modern-house-exterior.png",
  "/modern-living-room.png",
  "/modern-house-kitchen.png",
  "/modern-house-bedroom.png",
  "/modern-bathroom.png",
  "/luxury-estate.png",
]

const projectData = {
  title: "Residencial Marina Bay",
  location: "Puerto Banús, Marbella, España",
  description:
    "Residencial Marina Bay es un exclusivo desarrollo de 48 unidades ubicado en la prestigiosa zona de Puerto Banús. El proyecto combina arquitectura moderna con acabados de primera calidad, ofreciendo apartamentos y penthouses con vistas panorámicas al mar Mediterráneo. Cada unidad ha sido diseñada para maximizar el confort y la elegancia, con amplias terrazas, cocinas de diseño y acabados premium. El complejo cuenta con zonas comunes de lujo incluyendo piscina infinity, gimnasio totalmente equipado y áreas verdes paisajísticas.",
  status: "En Construcción" as const,
  deliveryDate: "Q4 2025",
  totalUnits: 48,
  availableUnits: 12,
  priceFrom: 450000,
  priceTo: 1800000,
  developer: "LUXE Developments",
}

const unitTypes = [
  {
    id: 1,
    name: "Apartamento 2 Habitaciones",
    beds: 2,
    baths: 2,
    area: 95,
    priceFrom: 450000,
    available: 4,
    imageUrl: "/modern-living-room.png",
  },
  {
    id: 2,
    name: "Apartamento 3 Habitaciones",
    beds: 3,
    baths: 2,
    area: 140,
    priceFrom: 650000,
    available: 5,
    imageUrl: "/modern-house-kitchen.png",
  },
  {
    id: 3,
    name: "Penthouse 3 Habitaciones",
    beds: 3,
    baths: 3,
    area: 180,
    priceFrom: 950000,
    available: 2,
    imageUrl: "/modern-house-bedroom.png",
  },
  {
    id: 4,
    name: "Penthouse 4 Habitaciones",
    beds: 4,
    baths: 4,
    area: 250,
    priceFrom: 1800000,
    available: 1,
    imageUrl: "/luxury-estate.png",
  },
]

const amenities = [
  "Piscina",
  "Gimnasio",
  "Estacionamiento",
  "Seguridad 24/7",
  "Áreas Verdes",
  "Salón de Eventos",
  "Lobby",
  "WiFi Zonas Comunes",
  "Área Infantil",
  "Pet Friendly",
  "Cafetería",
  "BBQ Area",
]

const similarProjects = [
  {
    id: 2,
    title: "Torres del Mediterráneo",
    location: "Primera Línea de Playa, Málaga",
    imageUrl: "/luxury-estate.png",
    totalUnits: 120,
    availableUnits: 35,
    priceFrom: 320000,
    status: "Pre-Venta" as const,
    deliveryDate: "Q2 2026",
  },
  {
    id: 3,
    title: "Villas Sierra Blanca",
    location: "Sierra Blanca, Marbella",
    imageUrl: "/modern-living-room.png",
    totalUnits: 24,
    availableUnits: 8,
    priceFrom: 1200000,
    status: "Entrega Inmediata" as const,
  },
  {
    id: 4,
    title: "Jardines de Estepona",
    location: "Centro, Estepona",
    imageUrl: "/modern-house-kitchen.png",
    totalUnits: 64,
    availableUnits: 22,
    priceFrom: 280000,
    status: "En Construcción" as const,
    deliveryDate: "Q1 2026",
  },
]

export default function ProjectDetailPage() {
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
          <Link href="/proyectos" className="hover:text-primary transition-colors">
            Proyectos
          </Link>
          <span>/</span>
          <span className="text-foreground">{projectData.title}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <ProjectGallery images={projectImages} videoUrl="https://example.com/video" />
            <ProjectOverview {...projectData} />
            <UnitTypesGrid units={unitTypes} />
            <AmenitiesSection amenities={amenities} />

            {/* Location Map */}
            <div className="bg-card/50 backdrop-blur-2xl border border-border/50 rounded-3xl p-8 shadow-xl">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Ubicación</h2>
              <div className="aspect-video bg-secondary/30 rounded-2xl flex items-center justify-center border border-border/30">
                <div className="text-center text-muted-foreground">
                  <MapPin className="h-12 w-12 mx-auto mb-3 text-primary" />
                  <p className="text-lg">Mapa de ubicación</p>
                  <p className="text-sm mt-1">{projectData.location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar - Contact Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-28">
              <div className="bg-card/50 backdrop-blur-2xl border border-border/50 rounded-3xl p-8 shadow-xl">
                <h3 className="text-xl font-serif font-bold text-foreground mb-6">Solicitar Información</h3>
                
                <form className="space-y-4">
                  <div>
                    <Input 
                      placeholder="Nombre completo" 
                      className="bg-secondary/30 border-border/50 rounded-xl h-12"
                    />
                  </div>
                  <div>
                    <Input 
                      type="email"
                      placeholder="Correo electrónico" 
                      className="bg-secondary/30 border-border/50 rounded-xl h-12"
                    />
                  </div>
                  <div>
                    <Input 
                      type="tel"
                      placeholder="Teléfono" 
                      className="bg-secondary/30 border-border/50 rounded-xl h-12"
                    />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Mensaje (opcional)"
                      className="bg-secondary/30 border-border/50 rounded-xl min-h-[100px] resize-none"
                    />
                  </div>
                  <Button className="w-full h-12 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 font-medium">
                    Enviar Solicitud
                  </Button>
                </form>

                <div className="mt-8 pt-6 border-t border-border/50">
                  <p className="text-sm text-muted-foreground mb-4">O contáctanos directamente:</p>
                  <div className="space-y-3">
                    <a href="tel:+34900123456" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Phone className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-sm">+34 900 123 456</span>
                    </a>
                    <a href="mailto:info@luxe.com" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Mail className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-sm">info@luxe.com</span>
                    </a>
                  </div>
                </div>

                <Button variant="outline" className="w-full mt-6 h-12 rounded-xl border-border/50 bg-secondary/30">
                  Descargar Brochure
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Projects */}
        <div className="mt-20">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-2">Proyectos Similares</h2>
              <p className="text-muted-foreground text-lg">Otros desarrollos que podrían interesarte</p>
            </div>
            <Link href="/proyectos" className="hidden md:block">
              <Button variant="outline" className="group rounded-xl bg-secondary/30 border-border/50">
                Ver todos
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {similarProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
