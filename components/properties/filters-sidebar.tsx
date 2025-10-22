"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

export function FiltersSidebar() {
  const [priceRange, setPriceRange] = useState([0, 2000000])
  const [areaRange, setAreaRange] = useState([0, 500])

  return (
    <div className="sticky top-32 bg-card/50 backdrop-blur-2xl border border-border/50 rounded-2xl p-6 shadow-xl">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-serif font-bold text-foreground">Filtros</h2>
        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
          Limpiar
        </Button>
      </div>

      <div className="space-y-6">
        <div>
          <Label htmlFor="search" className="mb-2 block text-xs uppercase tracking-wider text-muted-foreground">
            Buscar
          </Label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="search"
              placeholder="Ubicación, código..."
              className="pl-9 bg-secondary/50 border-border/50 rounded-xl"
            />
          </div>
        </div>

        <div>
          <Label className="mb-2 block text-xs uppercase tracking-wider text-muted-foreground">Tipo de Propiedad</Label>
          <select className="w-full bg-secondary/50 border border-border/50 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none cursor-pointer hover:bg-secondary/70">
            <option>Todos</option>
            <option>Casa</option>
            <option>Apartamento</option>
            <option>Villa</option>
            <option>Penthouse</option>
            <option>Terreno</option>
          </select>
        </div>

        <div>
          <Label className="mb-2 block text-xs uppercase tracking-wider text-muted-foreground">País</Label>
          <select className="w-full bg-secondary/50 border border-border/50 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none cursor-pointer hover:bg-secondary/70">
            <option>España</option>
            <option>México</option>
            <option>Argentina</option>
            <option>Colombia</option>
            <option>Chile</option>
          </select>
        </div>

        <div>
          <Label className="mb-2 block text-xs uppercase tracking-wider text-muted-foreground">Ciudad</Label>
          <select className="w-full bg-secondary/50 border border-border/50 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none cursor-pointer hover:bg-secondary/70">
            <option>Madrid</option>
            <option>Barcelona</option>
            <option>Valencia</option>
            <option>Sevilla</option>
            <option>Bilbao</option>
          </select>
        </div>

        <div>
          <Label className="mb-2 block text-xs uppercase tracking-wider text-muted-foreground">Barrio</Label>
          <select className="w-full bg-secondary/50 border border-border/50 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none cursor-pointer hover:bg-secondary/70">
            <option>Centro</option>
            <option>Zona Norte</option>
            <option>Zona Sur</option>
            <option>Zona Este</option>
            <option>Zona Oeste</option>
          </select>
        </div>

        <div>
          <Label className="mb-3 block text-xs uppercase tracking-wider text-muted-foreground">
            Precio: ${priceRange[0].toLocaleString()} - ${priceRange[1].toLocaleString()}
          </Label>
          <Slider
            min={0}
            max={2000000}
            step={50000}
            value={priceRange}
            onValueChange={setPriceRange}
            className="mb-2"
          />
        </div>

        <div>
          <Label className="mb-3 block text-xs uppercase tracking-wider text-muted-foreground">
            Área: {areaRange[0]} m² - {areaRange[1]} m²
          </Label>
          <Slider min={0} max={500} step={10} value={areaRange} onValueChange={setAreaRange} className="mb-2" />
        </div>

        <div>
          <Label className="mb-2 block text-xs uppercase tracking-wider text-muted-foreground">Habitaciones</Label>
          <select className="w-full bg-secondary/50 border border-border/50 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none cursor-pointer hover:bg-secondary/70">
            <option>Cualquiera</option>
            <option>1+</option>
            <option>2+</option>
            <option>3+</option>
            <option>4+</option>
          </select>
        </div>

        <div>
          <Label className="mb-2 block text-xs uppercase tracking-wider text-muted-foreground">Baños</Label>
          <select className="w-full bg-secondary/50 border border-border/50 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none cursor-pointer hover:bg-secondary/70">
            <option>Cualquiera</option>
            <option>1+</option>
            <option>2+</option>
            <option>3+</option>
          </select>
        </div>

        <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl h-12">
          <Search className="mr-2 h-4 w-4" />
          Aplicar Filtros
        </Button>
      </div>
    </div>
  )
}
