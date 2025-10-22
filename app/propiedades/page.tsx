"use client"

import { Header } from "@/components/layout/header"
import { FiltersSidebar } from "@/components/properties/filters-sidebar"
import { PropertyCard } from "@/components/properties/property-card"
import { Button } from "@/components/ui/button"
import { SlidersHorizontal, Search } from "lucide-react"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

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
  {
    id: 7,
    price: 950000,
    title: "Casa Minimalista",
    location: "Madrid, España",
    beds: 4,
    baths: 3,
    area: 250,
  },
  {
    id: 8,
    price: 680000,
    title: "Apartamento Moderno",
    location: "Barcelona, España",
    beds: 3,
    baths: 2,
    area: 140,
  },
  {
    id: 9,
    price: 1100000,
    title: "Villa de Diseño",
    location: "Valencia, España",
    beds: 5,
    baths: 4,
    area: 380,
  },
  {
    id: 10,
    price: 820000,
    title: "Penthouse Contemporáneo",
    location: "Sevilla, España",
    beds: 3,
    baths: 2,
    area: 160,
  },
  {
    id: 11,
    price: 1350000,
    title: "Casa de Lujo",
    location: "Marbella, España",
    beds: 6,
    baths: 5,
    area: 420,
  },
  {
    id: 12,
    price: 750000,
    title: "Apartamento Premium",
    location: "Bilbao, España",
    beds: 2,
    baths: 2,
    area: 130,
  },
]

export default function PropiedadesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-6 pt-32 pb-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-80 shrink-0">
            <FiltersSidebar />
          </aside>

          {/* Mobile Filter Button */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full bg-card/50 backdrop-blur-xl border-border/50 rounded-xl h-12"
                >
                  <SlidersHorizontal className="mr-2 h-4 w-4" />
                  Filtros
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-full sm:max-w-md overflow-y-auto bg-background">
                <SheetHeader>
                  <SheetTitle className="font-serif">Filtros de Búsqueda</SheetTitle>
                  <SheetDescription>Personaliza tu búsqueda de propiedades</SheetDescription>
                </SheetHeader>
                <div className="mt-6 space-y-6">
                  <div>
                    <Label
                      htmlFor="search-mobile"
                      className="mb-2 block text-xs uppercase tracking-wider text-muted-foreground"
                    >
                      Buscar
                    </Label>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="search-mobile"
                        placeholder="Ubicación, código..."
                        className="pl-9 bg-secondary/50 rounded-xl"
                      />
                    </div>
                  </div>

                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl h-12">
                    <Search className="mr-2 h-4 w-4" />
                    Aplicar Filtros
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Main Content */}
          <main className="flex-1">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-3">Propiedades</h1>
                <p className="text-muted-foreground text-lg">Mostrando 12 de 156 propiedades exclusivas</p>
              </div>
              <select className="hidden md:block bg-secondary/50 border border-border/50 rounded-xl px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none cursor-pointer hover:bg-secondary/70">
                <option>Más Recientes</option>
                <option>Precio: Menor a Mayor</option>
                <option>Precio: Mayor a Menor</option>
                <option>Área</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {properties.map((property) => (
                <PropertyCard key={property.id} {...property} />
              ))}
            </div>

            <div className="mt-12 flex items-center justify-center gap-2">
              <Button variant="outline" disabled className="rounded-xl bg-secondary/30 border-border/50">
                Anterior
              </Button>
              <Button className="rounded-xl bg-primary text-primary-foreground">1</Button>
              <Button variant="outline" className="rounded-xl bg-secondary/30 border-border/50">
                2
              </Button>
              <Button variant="outline" className="rounded-xl bg-secondary/30 border-border/50">
                3
              </Button>
              <Button variant="outline" className="rounded-xl bg-secondary/30 border-border/50">
                4
              </Button>
              <Button variant="outline" className="rounded-xl bg-secondary/30 border-border/50">
                Siguiente
              </Button>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
