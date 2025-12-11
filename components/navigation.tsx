"use client"

import { useState, useEffect } from "react"
import { StarIcon } from "./star-icon"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setIsMobileMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border/30" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => scrollTo("hero")} className="flex items-center gap-2 group">
            <StarIcon className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
            <span className="font-black text-lg tracking-tight uppercase" style={{ fontFamily: "Anton, sans-serif" }}>
              Constelaciones
            </span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollTo("about")}
              className="text-foreground/70 hover:text-foreground transition-colors text-sm tracking-wide"
            >
              Sobre el Proyecto
            </button>
            <button
              onClick={() => scrollTo("artists")}
              className="text-foreground/70 hover:text-foreground transition-colors text-sm tracking-wide"
            >
              Artistas
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="text-foreground/70 hover:text-foreground transition-colors text-sm tracking-wide"
            >
              Contacto
            </button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border/30 space-y-4">
            <button
              onClick={() => scrollTo("about")}
              className="block w-full text-left text-foreground/70 hover:text-foreground transition-colors py-2"
            >
              Sobre el Proyecto
            </button>
            <button
              onClick={() => scrollTo("artists")}
              className="block w-full text-left text-foreground/70 hover:text-foreground transition-colors py-2"
            >
              Artistas
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="block w-full text-left text-foreground/70 hover:text-foreground transition-colors py-2"
            >
              Contacto
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
