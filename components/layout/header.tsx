import Link from "next/link"
import { Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-6 py-5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full group-hover:bg-primary/30 transition-all" />
            <Sparkles className="h-7 w-7 text-primary relative" />
          </div>
          <span className="text-2xl font-serif font-bold tracking-tight text-foreground">LUXE</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium">
            Inicio
          </Link>
          <Link
            href="/propiedades"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium"
          >
            Propiedades
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium">
            Servicios
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium">
            Contacto
          </Link>
        </nav>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium">Publicar</Button>
      </div>
    </header>
  )
}
