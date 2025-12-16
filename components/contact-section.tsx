"use client"

import { useEffect, useRef, useState } from "react"
import { StarField } from "./star-field"
import { StarIcon } from "./star-icon"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Download, Send, Mail, MapPin, Phone } from "lucide-react"

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
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
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
            href="https://heyzine.com/flip-book/228fe197cc.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary via-secondary to-accent text-foreground hover:opacity-90 transition-all duration-300 px-10 py-6 text-lg rounded-full group shadow-lg shadow-primary/20"
            >
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Catalogo Virtual
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
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full mt-6" />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/30 hover:border-primary/30 transition-all duration-300">
                <div className="p-3 rounded-full bg-primary/20">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Email</h4>
                  <p className="text-foreground/60">contacto@constelaciones.art</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/30 hover:border-secondary/30 transition-all duration-300">
                <div className="p-3 rounded-full bg-secondary/20">
                  <MapPin className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Ubicación</h4>
                  <p className="text-foreground/60">Santander, Colombia</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/30 hover:border-accent/30 transition-all duration-300">
                <div className="p-3 rounded-full bg-accent/20">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Teléfono</h4>
                  <p className="text-foreground/60">+57 300 000 0000</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form className="space-y-6 p-8 rounded-3xl bg-card/30 backdrop-blur-sm border border-border/30">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground/80">
                  Nombre
                </label>
                <Input
                  id="name"
                  placeholder="Tu nombre"
                  className="bg-background/50 border-border/50 focus:border-primary/50 rounded-xl"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground/80">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="tu@email.com"
                  className="bg-background/50 border-border/50 focus:border-primary/50 rounded-xl"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground/80">
                  Mensaje
                </label>
                <Textarea
                  id="message"
                  placeholder="Escribe tu mensaje aquí..."
                  rows={4}
                  className="bg-background/50 border-border/50 focus:border-primary/50 rounded-xl resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/80 text-primary-foreground py-6 rounded-xl group"
              >
                <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                Enviar Mensaje
              </Button>
            </form>
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
