"use client"

import { useEffect, useRef, useState } from "react"
import { StarIcon } from "./star-icon"
import { ExternalLink } from "lucide-react"

interface Artist {
  id: number
  name: string
  firstName: string
  lastName: string
  description: string
  image: string
  link: string
}

const artists: Artist[] = [
  {
    id: 1,
    name: "Julián Villamizar",
    firstName: "Julián",
    lastName: "Villamizar",
    description:
      "Artista visual que explora las intersecciones entre la memoria colectiva y el paisaje urbano santandereano a través de técnicas mixtas.",
    image: "/artistic-portrait-abstract-cosmic.jpg",
    link: "#",
  },
  {
    id: 2,
    name: "Dany Gómez",
    firstName: "Dany",
    lastName: "Gómez",
    description:
      "Creador multidisciplinar cuya obra reflexiona sobre la identidad cultural y las tradiciones ancestrales del territorio.",
    image: "/artistic-portrait-creative-cosmic.jpg",
    link: "#",
  },
  {
    id: 3,
    name: "Neryth Manrique",
    firstName: "Neryth",
    lastName: "Manrique",
    description:
      "Artista contemporánea que trabaja con instalaciones y arte conceptual, explorando las relaciones entre espacio y tiempo.",
    image: "/artistic-portrait-modern-cosmic.jpg",
    link: "#",
  },
  {
    id: 4,
    name: "Gloria Rodríguez",
    firstName: "Gloria",
    lastName: "Rodríguez",
    description:
      "Pintora y escultora cuyo trabajo dialoga con la naturaleza y los elementos orgánicos del paisaje santandereano.",
    image: "/artistic-portrait-elegant-cosmic.jpg",
    link: "#",
  },
  {
    id: 5,
    name: "John Calderón",
    firstName: "John",
    lastName: "Calderón",
    description:
      "Artista experimental que fusiona tecnología y arte tradicional para crear experiencias inmersivas y reflexivas.",
    image: "/artistic-portrait-experimental-cosmic.jpg",
    link: "#",
  },
  {
    id: 6,
    name: "Elena Pasos",
    firstName: "Elena",
    lastName: "Pasos",
    description:
      "Fotógrafa que captura la esencia efímera de la luz y la sombra en los rincones olvidados de la ciudad.",
    image: "/placeholder.svg",
    link: "#",
  },
  {
    id: 7,
    name: "Ricardo Vega",
    firstName: "Ricardo",
    lastName: "Vega",
    description:
      "Escultor sonoro que transforma el ruido urbano en paisajes acústicos que invitan a la meditación.",
    image: "/placeholder.svg",
    link: "#",
  },
]

function ArtistCard({ artist, index }: { artist: Artist; index: number }) {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={cardRef}
      className={`group relative transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
      style={{ transitionDelay: `${index * 150}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-500">
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden">
          <img
            src={artist.image || "/placeholder.svg"}
            alt={artist.name}
            className={`w-full h-full object-cover transition-all duration-700 ${isHovered ? "scale-110 brightness-50" : "scale-100"}`}
          />

          {/* Overlay gradient */}
          <div
            className={`absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent transition-opacity duration-500 ${isHovered ? "opacity-90" : "opacity-60"}`}
          />

          {/* Star decoration */}
          <div
            className={`absolute top-4 right-4 transition-all duration-500 ${isHovered ? "opacity-100 rotate-180" : "opacity-0 rotate-0"}`}
          >
            <StarIcon className="w-6 h-6 text-primary" />
          </div>

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-2xl font-bold mb-1">
              <span className="font-light">{artist.firstName}</span>{" "}
              <span className="font-black">{artist.lastName}</span>
            </h3>

            <p
              className={`text-foreground/70 text-sm leading-relaxed transition-all duration-500 ${isHovered ? "opacity-100 max-h-40" : "opacity-0 max-h-0"} overflow-hidden`}
            >
              {artist.description}
            </p>

            <a
              href={artist.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 mt-4 text-primary hover:text-primary/80 transition-all duration-500 ${isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              <span className="text-sm font-medium">Ver más</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export function ArtistsSection() {
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
    <section ref={sectionRef} id="artists" className="relative py-32 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />

      {/* Subtle gradient orbs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Title */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <StarIcon className="w-8 h-8 text-secondary mx-auto mb-6" />
          <h2
            className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4"
            style={{ fontFamily: "Anton, sans-serif" }}
          >
            Artistas
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            Siete voces únicas que conforman esta constelación de arte contemporáneo santandereano
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary via-primary to-accent mx-auto rounded-full mt-6" />
        </div>

        {/* Artists Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {artists.slice(0, 4).map((artist, index) => (
            <ArtistCard key={artist.id} artist={artist} index={index} />
          ))}
        </div>

        {/* Second row centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-8 justify-items-center">
          {artists.slice(4).map((artist, index) => (
            <ArtistCard key={artist.id} artist={artist} index={index + 4} />
          ))}
        </div>
      </div>
    </section>
  )
}
