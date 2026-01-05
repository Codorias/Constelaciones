"use client"

import { StarField } from "./star-field"
import { StarIcon } from "./star-icon"
import { Button } from "@/components/ui/button"
import { Eye, ChevronDown, Play } from "lucide-react"

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
          backgroundImage: `url('/images/hero-new.jpg')`,
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-background via-background/60 to-background/30" />

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
          className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-normal text-foreground mb-4 uppercase scale-y-125 origin-bottom"
          style={{ fontFamily: "Impact, Anton, sans-serif" }}
        >
          Constelaciones
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl tracking-[0.3em] text-foreground/80 uppercase mb-12">
          Diálogos del Arte Santandereano Contemporáneo
        </p>

        {/* Artists Names */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-12 md:text-lg max-w-4xl mx-auto uppercase">
          {[
            { first: "Julián Alberto", last: "Villamizar Rincón" },
            { first: "Sebastián", last: "Gómez Vargas" },
            { first: "Neryth Yamile", last: "Manrique Mendoza" },
            { first: "Gloria Liliana", last: "Rodríguez García" },
            { first: "John Fredy", last: "Calderón Ortiz" },
            { first: "Gerson Felipe", last: "Rozo Betancur" },
            { first: "Yury Hernando", last: "Forero Casas" },
          ].map((artist, index) => (
            <span
              key={index}
              className="text-foreground/70 hover:text-foreground transition-colors cursor-default"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="font-light">{artist.first}</span>{" "}
              <span className="font-bold">{artist.last}</span>
            </span>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="https://heyzine.com/flip-book/b6c2d3cfde.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-primary/20 backdrop-blur-sm border border-primary/50 text-foreground hover:bg-primary/30 hover:border-primary transition-all duration-300 px-8 py-6 text-lg rounded-full group w-full md:w-auto"
            >
              <Eye className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Catálogo Virtual
            </Button>
          </a>

          <a
            href="https://www.youtube.com/watch?v=X-XZx1o_w-A"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-primary/20 backdrop-blur-sm border border-primary/50 text-foreground hover:bg-primary/30 hover:border-primary transition-all duration-300 px-8 py-6 text-lg rounded-full group w-full md:w-auto"
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Experiencia Sensorial
            </Button>
          </a>
        </div>
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
