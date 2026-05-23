import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ProjectCard } from "@/components/projects/project-card"
import { Building2, Filter, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const projects = [
  {
    id: 1,
    title: "Residencial Marina Bay",
    location: "Puerto Banús, Marbella",
    imageUrl: "/modern-house-exterior.png",
    totalUnits: 48,
    availableUnits: 12,
    priceFrom: 450000,
    status: "En Construcción" as const,
    deliveryDate: "Q4 2025",
  },
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
  {
    id: 5,
    title: "Residencial Costa del Sol",
    location: "Benalmádena Costa",
    imageUrl: "/modern-house-bedroom.png",
    totalUnits: 96,
    availableUnits: 41,
    priceFrom: 195000,
    status: "Pre-Venta" as const,
    deliveryDate: "Q3 2026",
  },
  {
    id: 6,
    title: "Luxury Penthouse Collection",
    location: "Golden Mile, Marbella",
    imageUrl: "/modern-bathroom.png",
    totalUnits: 16,
    availableUnits: 4,
    priceFrom: 2500000,
    status: "Entrega Inmediata" as const,
  },
]

export default function ProyectosPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20">
                <Building2 className="h-6 w-6 text-primary" />
              </div>
              <span className="text-primary font-medium">Proyectos Inmobiliarios</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 text-balance">
              Desarrollos Exclusivos
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Descubre nuestros proyectos residenciales de alta calidad. Desde modernos apartamentos 
              hasta lujosas villas, encuentra tu hogar ideal en las mejores ubicaciones.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="container mx-auto px-6 mb-12">
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between p-6 bg-card/50 backdrop-blur-xl border border-border/50 rounded-2xl">
          <div className="flex flex-wrap gap-3">
            <Button variant="secondary" className="rounded-xl bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20">
              Todos
            </Button>
            <Button variant="ghost" className="rounded-xl hover:bg-secondary/50">
              Pre-Venta
            </Button>
            <Button variant="ghost" className="rounded-xl hover:bg-secondary/50">
              En Construcción
            </Button>
            <Button variant="ghost" className="rounded-xl hover:bg-secondary/50">
              Entrega Inmediata
            </Button>
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Buscar proyecto..." 
                className="pl-10 bg-secondary/30 border-border/50 rounded-xl"
              />
            </div>
            <Button variant="outline" size="icon" className="rounded-xl border-border/50 bg-secondary/30">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="container mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
