"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Cookie, X } from "lucide-react"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [isRendered, setIsRendered] = useState(false)

  useEffect(() => {
    // Verifica se o usuário já consentiu
    const hasSeenBanner = localStorage.getItem("cookie_consent")
    
    if (!hasSeenBanner) {
      setIsRendered(true)
      
      // Pequeno delay para animação de entrada
      const showTimer = setTimeout(() => setIsVisible(true), 500)
      
      // 15 segundos para fechar automaticamente (500ms de entrada + 15s)
      const hideTimer = setTimeout(() => {
        handleClose()
      }, 15500)

      return () => {
        clearTimeout(showTimer)
        clearTimeout(hideTimer)
      }
    }
  }, [])

  const handleClose = () => {
    setIsVisible(false)
    localStorage.setItem("cookie_consent", "true")
    // Remove do DOM após a animação de saída (500ms)
    setTimeout(() => setIsRendered(false), 500)
  }

  if (!isRendered) return null

  return (
    <div 
      className={`fixed bottom-6 left-1/2 z-50 w-[calc(100%-3rem)] max-w-[400px] -translate-x-1/2 transition-all duration-500 ease-in-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0 pointer-events-none"
      }`}
    >
      <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-background/80 p-5 shadow-2xl backdrop-blur-xl">
        {/* Glow de fundo criativo para combinar com semijoias */}
        <div className="absolute -top-10 -left-10 h-32 w-32 rounded-full bg-primary/20 blur-[50px]" />
        
        <div className="relative flex flex-col gap-4">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Cookie className="h-4 w-4" />
              </div>
              <h3 className="font-serif text-sm font-semibold text-foreground">
                Sua privacidade importa
              </h3>
            </div>
            <button 
              onClick={handleClose}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Fechar"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          
          <div className="text-xs leading-relaxed text-muted-foreground">
            Usamos cookies para trazer brilho à sua experiência, garantindo que
            você encontre as semijoias perfeitas. Ao continuar, você concorda com a nossa{" "}
            <Link
              href="/politica-de-privacidade"
              className="font-medium text-primary underline underline-offset-2 hover:text-primary/80"
            >
              Política de Privacidade
            </Link>
            .
          </div>
          
          <div className="flex items-center gap-3 mt-1">
            <button
              onClick={handleClose}
              className="w-full shrink-0 rounded-full bg-primary px-4 py-2.5 text-xs font-semibold tracking-wide text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98]"
            >
              Tudo bem, entendi!
            </button>
          </div>
        </div>
        
        {/* Barra de progresso visual de 15 segundos */}
        <div className="absolute bottom-0 left-0 h-[3px] w-full bg-primary/10">
          <div 
            className="h-full bg-primary origin-left"
            style={{
              transition: isVisible ? "transform 15s linear" : "none",
              transform: isVisible ? "scaleX(0)" : "scaleX(1)",
            }}
          />
        </div>
      </div>
    </div>
  )
}
