"use client"

import { useEffect, useRef, useState } from "react"
import { StarField } from "./star-field"
import { StarIcon } from "./star-icon"
import { Button } from "@/components/ui/button"
import { Eye, Mail, MapPin, Phone } from "lucide-react"

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="contact" className="relative py-32 px-4 overflow-hidden">
      {/* Background with stars */}
      <div className="absolute inset-0 bg-linear-to-b from-background via-card to-background" />
      <StarField />

      {/* Decorative gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
      <div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-slow"
        style={{ animationDelay: "2s" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Brochure Download Section */}
        <div
          className={`text-center mb-24 p-12 rounded-3xl bg-card/50 backdrop-blur-sm border border-border/30 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <StarIcon className="w-12 h-12 text-accent mx-auto mb-6 animate-glow" />
          <h3
            className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-4"
            style={{ fontFamily: "Anton, sans-serif" }}
          >
            Descarga el Catálogo Completo
          </h3>
          <p className="text-foreground/60 text-lg max-w-xl mx-auto mb-8">
            Explora todas las obras y conoce más sobre cada artista en nuestro brochure digital
          </p>
          <a
            href="https://heyzine.com/flip-book/b88325401c.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-linear-to-r from-primary via-secondary to-accent text-foreground hover:opacity-90 transition-all duration-300 px-10 py-6 text-lg rounded-full group shadow-lg shadow-primary/20"
            >
              <Eye className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Catálogo Virtual
            </Button>
          </a>
        </div>

        {/* Contact Section */}
        <div
          className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="text-center mb-16">
            <StarIcon className="w-8 h-8 text-primary mx-auto mb-6" />
            <h2
              className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4"
              style={{ fontFamily: "Anton, sans-serif" }}
            >
              Contáctanos
            </h2>
            <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
              ¿Tienes preguntas sobre el proyecto o deseas colaborar? Escríbenos
            </p>
            <div className="w-24 h-1 bg-linear-to-r from-primary via-secondary to-accent mx-auto rounded-full mt-6" />
          </div>

          <div className="flex flex-col items-center gap-12">
            {/* Contact Info */}
            <div className="grid md:grid-cols-3 gap-8 w-full max-w-5xl">
              <div className="flex flex-col items-center text-center gap-4 p-8 rounded-3xl bg-card/30 backdrop-blur-sm border border-border/30 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
                <div className="p-4 rounded-full bg-primary/20">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-xl mb-2">Email</h4>
                  <p className="text-foreground/60">contacto@constelaciones.art</p>
                </div>
              </div>

              <div className="flex flex-col items-center text-center gap-4 p-8 rounded-3xl bg-card/30 backdrop-blur-sm border border-border/30 hover:border-secondary/30 transition-all duration-300 hover:-translate-y-1">
                <div className="p-4 rounded-full bg-secondary/20">
                  <MapPin className="w-8 h-8 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-xl mb-2">Ubicación</h4>
                  <p className="text-foreground/60">Santander, Colombia</p>
                </div>
              </div>

              <div className="flex flex-col items-center text-center gap-4 p-8 rounded-3xl bg-card/30 backdrop-blur-sm border border-border/30 hover:border-accent/30 transition-all duration-300 hover:-translate-y-1">
                <div className="p-4 rounded-full bg-accent/20">
                  <Phone className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-xl mb-2">Teléfono</h4>
                  <p className="text-foreground/60">+57 300 000 0000</p>
                </div>
              </div>
            </div>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/573000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4"
            >
              <Button
                size="lg"
                className="bg-green-600/20 backdrop-blur-sm border border-green-500/50 text-white hover:bg-green-600/30 hover:border-green-500 transition-all duration-300 px-10 py-8 text-xl rounded-full group shadow-lg shadow-green-900/20"
              >
                <WhatsAppIcon className="mr-3 h-6 w-6 fill-current" />
                Contáctanos
              </Button>
            </a>
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-24 pt-8 border-t border-border/30">
        <div className="flex flex-col items-center justify-center gap-6 text-center">
          <img
            src="/logo-imct.png"
            alt="Instituto Municipal de Cultura y Turismo"
            className="h-24 md:h-32 object-contain opacity-80 hover:opacity-100 transition-opacity"
          />
          <div>
            <StarIcon className="w-6 h-6 text-foreground/30 mx-auto mb-4" />
            <p className="text-foreground/40 text-sm">
              © 2025 Constelaciones - Diálogos del Arte Santandereano Contemporáneo
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function WhatsAppIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.232-.298.347-.497.115-.198.058-.372-.029-.548-.087-.174-.707-1.711-.968-2.342-.254-.608-.511-.53-.706-.54l-.601-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}
