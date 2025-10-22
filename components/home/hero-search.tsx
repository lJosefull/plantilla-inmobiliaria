import Link from "next/link"
import { Search, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSearch() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Ambient background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm text-primary font-medium">Propiedades Exclusivas</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-foreground mb-6 tracking-tight leading-[1.1]">
            Descubre tu
            <span className="block text-primary">próximo hogar</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Propiedades extraordinarias en las ubicaciones más exclusivas del mundo
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative bg-card/50 backdrop-blur-2xl border border-border/50 rounded-3xl p-8 shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
                {/* Type */}
                <div className="lg:col-span-1">
                  <label className="text-xs font-medium text-muted-foreground mb-2 block uppercase tracking-wider">
                    Tipo
                  </label>
                  <select className="w-full bg-secondary/50 border border-border/50 rounded-xl px-4 py-3.5 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none cursor-pointer hover:bg-secondary/70">
                    <option>Casa</option>
                    <option>Apartamento</option>
                    <option>Villa</option>
                    <option>Penthouse</option>
                    <option>Terreno</option>
                  </select>
                </div>

                {/* Country */}
                <div className="lg:col-span-1">
                  <label className="text-xs font-medium text-muted-foreground mb-2 block uppercase tracking-wider">
                    País
                  </label>
                  <select className="w-full bg-secondary/50 border border-border/50 rounded-xl px-4 py-3.5 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none cursor-pointer hover:bg-secondary/70">
                    <option>España</option>
                    <option>México</option>
                    <option>Argentina</option>
                    <option>Colombia</option>
                    <option>Chile</option>
                  </select>
                </div>

                {/* City */}
                <div className="lg:col-span-1">
                  <label className="text-xs font-medium text-muted-foreground mb-2 block uppercase tracking-wider">
                    Ciudad
                  </label>
                  <select className="w-full bg-secondary/50 border border-border/50 rounded-xl px-4 py-3.5 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none cursor-pointer hover:bg-secondary/70">
                    <option>Madrid</option>
                    <option>Barcelona</option>
                    <option>Valencia</option>
                    <option>Sevilla</option>
                    <option>Bilbao</option>
                  </select>
                </div>

                {/* Neighborhood */}
                <div className="lg:col-span-1">
                  <label className="text-xs font-medium text-muted-foreground mb-2 block uppercase tracking-wider">
                    Barrio
                  </label>
                  <select className="w-full bg-secondary/50 border border-border/50 rounded-xl px-4 py-3.5 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none cursor-pointer hover:bg-secondary/70">
                    <option>Centro</option>
                    <option>Zona Norte</option>
                    <option>Zona Sur</option>
                    <option>Zona Este</option>
                    <option>Zona Oeste</option>
                  </select>
                </div>

                {/* Search Button */}
                <div className="lg:col-span-1 flex items-end">
                  <Link href="/propiedades" className="w-full">
                    <Button className="w-full h-[52px] bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl font-medium text-base group">
                      <Search className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                      Buscar
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Quick filters */}
              <div className="flex flex-wrap gap-2">
                <span className="text-xs text-muted-foreground font-medium">Popular:</span>
                {["Villas de lujo", "Apartamentos centro", "Casas con piscina", "Penthouses"].map((tag) => (
                  <button
                    key={tag}
                    className="px-3 py-1.5 rounded-full bg-secondary/30 hover:bg-secondary/50 border border-border/30 text-xs text-foreground transition-all hover:scale-105"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
