"use client"

import { StarField } from "./star-field"
import { StarIcon } from "./star-icon"
import { Button } from "@/components/ui/button"
import { Download, ChevronDown } from "lucide-react"

export function HeroSection() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/constelaciones-20portada.jpg')`,
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />

      {/* Animated Stars */}
      <StarField />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Star Icon */}
        <div className="flex justify-center mb-8">
          <StarIcon className="w-16 h-16 text-foreground animate-glow" />
        </div>

        {/* Title */}
        <h1
          className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight text-foreground mb-4 uppercase"
          style={{ fontFamily: "Anton, sans-serif" }}
        >
          Constelaciones
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl tracking-[0.3em] text-foreground/80 uppercase mb-12">
          Diálogos del Arte Santandereano Contemporáneo
        </p>

        {/* Artists Names */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12 text-sm md:text-base">
          {["Julián Villamizar", "Dany Gómez", "Neryth Manrique", "Gloria Rodríguez", "John Calderón"].map(
            (artist, index) => (
              <span
                key={artist}
                className="text-foreground/70 hover:text-foreground transition-colors cursor-default"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <span className="font-light">{artist.split(" ")[0]}</span>{" "}
                <span className="font-bold">{artist.split(" ")[1]}</span>
              </span>
            ),
          )}
        </div>

        {/* CTA Button */}
        <Button
          size="lg"
          className="bg-primary/20 backdrop-blur-sm border border-primary/50 text-foreground hover:bg-primary/30 hover:border-primary transition-all duration-300 px-8 py-6 text-lg rounded-full group"
        >
          <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
          Descargar Brochure
        </Button>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-foreground/50 hover:text-foreground transition-colors animate-bounce cursor-pointer"
        aria-label="Scroll to about section"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  )
}
