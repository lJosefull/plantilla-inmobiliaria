import { Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

interface ContactFormProps {
  agentName: string
  agentTitle: string
  agentImage: string
}

export function ContactForm({ agentName, agentTitle, agentImage }: ContactFormProps) {
  return (
    <div className="sticky top-32 bg-card/50 backdrop-blur-2xl border border-border/50 rounded-3xl p-8 shadow-xl">
      <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Contactar Agente</h2>

      <div className="flex items-center gap-4 mb-8 pb-8 border-b border-border/50">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden border-2 border-primary/30">
          <img src={agentImage || "/placeholder.svg"} alt="Agente" className="w-full h-full object-cover" />
        </div>
        <div>
          <div className="font-bold text-foreground text-lg">{agentName}</div>
          <div className="text-sm text-muted-foreground">{agentTitle}</div>
        </div>
      </div>

      <form className="space-y-5">
        <div>
          <Label htmlFor="name" className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">
            Nombre Completo
          </Label>
          <Input id="name" placeholder="Tu nombre" className="bg-secondary/50 border-border/50 rounded-xl h-12" />
        </div>
        <div>
          <Label htmlFor="email" className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="tu@email.com"
            className="bg-secondary/50 border-border/50 rounded-xl h-12"
          />
        </div>
        <div>
          <Label htmlFor="phone" className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">
            Teléfono
          </Label>
          <Input
            id="phone"
            type="tel"
            placeholder="+34 600 000 000"
            className="bg-secondary/50 border-border/50 rounded-xl h-12"
          />
        </div>
        <div>
          <Label htmlFor="message" className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">
            Mensaje
          </Label>
          <Textarea
            id="message"
            placeholder="Estoy interesado en esta propiedad..."
            rows={4}
            className="bg-secondary/50 border-border/50 rounded-xl resize-none"
          />
        </div>
        <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl h-12 font-medium">
          <Mail className="mr-2 h-5 w-5" />
          Enviar Mensaje
        </Button>
        <Button
          variant="outline"
          className="w-full bg-secondary/30 border-border/50 rounded-xl h-12 font-medium hover:bg-secondary/50"
        >
          <Phone className="mr-2 h-5 w-5" />
          Llamar Ahora
        </Button>
      </form>

      <div className="mt-8 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
        <p className="mb-2">Horario de atención:</p>
        <p className="font-medium text-foreground">Lun - Vie: 9:00 - 18:00</p>
      </div>
    </div>
  )
}
