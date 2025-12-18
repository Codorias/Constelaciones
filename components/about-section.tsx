"use client"

import { useEffect, useRef, useState } from "react"
import { StarIcon } from "./star-icon"

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="about" className="relative py-32 px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-background via-card to-background" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 opacity-10">
        <StarIcon className="w-32 h-32 text-primary animate-pulse-slow" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-10">
        <StarIcon className="w-24 h-24 text-secondary animate-pulse-slow" style={{ animationDelay: "2s" }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section Title */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <StarIcon className="w-8 h-8 text-primary mx-auto mb-6" />
          <h2
            className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4 text-white"
            style={{ fontFamily: "Anton, sans-serif" }}
          >
            Sobre el Proyecto
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-primary via-secondary to-accent mx-auto rounded-full" />
        </div>

        {/* Content */}
        <div
          className={`space-y-6 text-lg md:text-xl text-white leading-relaxed transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <p className="text-justify">
            <span className="text-white font-semibold">Constelaciones</span> es un punto de encuentro entre artistas
            que, desde diversas miradas y técnicas, conforman un mapa sensible del arte santandereano contemporáneo.
            Cada obra aquí reunida se erige como una estrella que, al relacionarse con las demás, revela la riqueza de
            un territorio creativo en constante transformación.
          </p>

          <p className="text-justify">
            Este catálogo se presenta como un documento de carácter memorial, reflexivo y crítico, que busca visibilizar
            y proyectar esas correspondencias, los gestos, materiales y discursos que dialogan entre sí y dan cuenta de
            una comunidad artística viva, diversa y comprometida con su tiempo.
          </p>

          <p className="text-justify">
            Al hacerlo, se convierte también en un testimonio del momento actual del arte en Santander, de sus búsquedas
            estéticas y de los lazos que se tejen entre generaciones, disciplinas y contextos.
          </p>

          <p className="text-justify">
            En este entramado, el arte no se presenta como una experiencia aislada, sino como una{" "}
            <span className="text-white font-semibold">red de vínculos</span> que invita a reflexionar sobre nuestra
            identidad, los paisajes que habitamos y las formas en que imaginamos el futuro.
          </p>

          <p className="text-justify italic border-l-4 border-primary/50 pl-6 my-8">
            Constelaciones se convierte en una invitación a recorrer el firmamento del arte local, a reconocer sus luces
            y a celebrar el poder del encuentro como origen de nuevas perspectivas creativas.
          </p>
        </div>

        {/* Logo IMCT */}
        <div className="flex justify-center mt-12">
          <img
            src="/logo-imct.png"
            alt="Instituto Municipal de Cultura y Turismo"
            className="h-32 md:h-40 object-contain opacity-90 hover:opacity-100 transition-opacity"
          />
        </div>
      </div>
    </section>
  )
}
