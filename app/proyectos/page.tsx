import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ProjectCard } from "@/components/projects/project-card"
import { Building2, Filter, Search, MapPin, Home, TrendingUp } from "lucide-react"
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

// Calcular estadísticas
const totalProjects = projects.length
const totalUnitsAvailable = projects.reduce((acc, p) => acc + p.availableUnits, 0)
const locationsCount = new Set(projects.map(p => p.location.split(",")[1]?.trim() || p.location)).size

export default function ProyectosPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl mb-12">
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

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-center gap-4 p-5 bg-card/50 backdrop-blur-xl border border-border/50 rounded-2xl">
              <div className="p-3 rounded-xl bg-primary/10">
                <Building2 className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{totalProjects}</p>
                <p className="text-sm text-muted-foreground">Proyectos activos</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-5 bg-card/50 backdrop-blur-xl border border-border/50 rounded-2xl">
              <div className="p-3 rounded-xl bg-emerald-500/10">
                <Home className="h-5 w-5 text-emerald-500" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{totalUnitsAvailable}</p>
                <p className="text-sm text-muted-foreground">Unidades disponibles</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-5 bg-card/50 backdrop-blur-xl border border-border/50 rounded-2xl">
              <div className="p-3 rounded-xl bg-blue-500/10">
                <MapPin className="h-5 w-5 text-blue-500" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{locationsCount}</p>
                <p className="text-sm text-muted-foreground">Ubicaciones premium</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="container mx-auto px-6 mb-12">
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between p-5 bg-card/50 backdrop-blur-xl border border-border/50 rounded-2xl">
          <div className="flex flex-wrap gap-2">
            <Button variant="secondary" className="rounded-xl bg-primary text-primary-foreground hover:bg-primary/90">
              Todos
            </Button>
            <Button variant="ghost" className="rounded-xl hover:bg-secondary/80">
              Pre-Venta
            </Button>
            <Button variant="ghost" className="rounded-xl hover:bg-secondary/80">
              En Construcción
            </Button>
            <Button variant="ghost" className="rounded-xl hover:bg-secondary/80">
              Entrega Inmediata
            </Button>
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <div className="relative flex-1 md:w-72">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Buscar por nombre o ubicación..." 
                className="pl-10 bg-secondary/50 border-border/50 rounded-xl h-11"
              />
            </div>
            <Button variant="outline" size="icon" className="rounded-xl border-border/50 bg-secondary/50 h-11 w-11">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="container mx-auto px-6 pb-20">
        <div className="flex items-center justify-between mb-8">
          <p className="text-muted-foreground">
            Mostrando <span className="text-foreground font-medium">{projects.length}</span> proyectos
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <TrendingUp className="h-4 w-4" />
            <span>Ordenar por relevancia</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
