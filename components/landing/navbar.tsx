"use client"

import Image from "next/image"
import { ThemeToggle } from "@/components/theme-toggle"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"

const navLinks = [
  { label: "Beneficios", href: "#beneficios" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!mounted) return null

  const isDark = resolvedTheme === "dark"

  const navTextClass = isDark ? "text-white" : "text-black"
  const navHoverClass = isDark ? "hover:text-white/80" : "hover:text-black/80"

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 -b backdrop-blur-md shadow-sm"
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
            className={`text-lg font-semibold tracking-wide ${navTextClass}`}
          >
            Paiva Morais
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${navTextClass} ${navHoverClass}`}
            >
              {link.label}
            </a>
          ))}

          <Button
            asChild
            className="rounded-full bg-primary px-6 text-primary-foreground hover:bg-primary/90"
          >
            <a href="https://paivamorais.semijoias.net/querorevender">Quero ser revendedora</a>
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            className={navTextClass}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          >
            {mobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="border-b border-border bg-background/95 px-6 pb-6 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="py-2 text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button
              asChild
              className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
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