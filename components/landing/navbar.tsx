"use client"

import { useTheme } from "next-themes"
import Image from "next/image"
import { ThemeToggle } from "@/components/theme-toggle"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Beneficios", href: "#beneficios" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { resolvedTheme } = useTheme()
const [mounted, setMounted] = useState(false)

useEffect(() => setMounted(true), [])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isDark = mounted && resolvedTheme === "dark"

// Quando NÃO está scrolled:
// - light theme: texto claro (branco) sobre o hero
// - dark theme: texto escuro (preto) sobre o hero (como você pediu)
const topLinkClass = isDark
  ? "text-black/90 hover:text-black"
  : "text-white/90 hover:text-white"

const topBrandClass = isDark ? "text-black" : "text-white"

const desktopLinkClass = scrolled
  ? "text-foreground hover:text-foreground"
  : topLinkClass

const brandTextClass = scrolled ? "text-foreground" : topBrandClass

const mobileTopControlsClass = scrolled ? "text-foreground" : topBrandClass

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-3">
          <Image
            src="/logo-paiva-morais.png"
            alt="Paiva Morais Semijoias"
            width={160}
            height={40}
            priority
            className="h-11 w-auto"
          />
          <span
            style={{ fontFamily: "var(--font-brand)" }}
            className={`text-lg font-semibold tracking-wide ${brandTextClass}`}
          >
            Paiva Morais
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${desktopLinkClass}`}
            >
              {link.label}
            </a>
          ))}

          <Button
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6"
          >
            <a href="#cadastro">Quero ser revendedora</a>
          </Button>

          <ThemeToggle />
        </div>

        {/* Mobile controls: theme toggle + hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            className={mobileTopControlsClass}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border px-6 pb-6">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-medium text-muted-foreground transition-colors hover:text-foreground py-2"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full w-full"
            >
              <a href="#cadastro" onClick={() => setMobileOpen(false)}>
                Quero ser revendedora
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}