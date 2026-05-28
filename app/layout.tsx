import type { Metadata, Viewport } from "next"
import Script from "next/script"
import { Inter, Playfair_Display, Cinzel } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { CookieBanner } from "@/components/cookie-banner"
import "./globals.css"

const _brand = Cinzel({
  subsets: ["latin"],
  variable: "--font-brand",
})

const _inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const _playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://paivamorais.semijoias.net"),
  title: "Revendedora | Paiva Morais",
  description:
    "Ganhe dinheiro revendendo semijoias Paiva Morais. Sem investimento inicial, com suporte completo e lucro garantido. Cadastre-se agora!",
  generator: "Fhelipe Abel",
  openGraph: {
    title: "Revenda Semijoias | Paiva Morais",
    description: "Comece a revender semijoias sem investir nada. Receba as peças em consignação, tenha lucro garantido e suporte exclusivo.",
    url: "https://paivamorais.semijoias.net",
    siteName: "Paiva Morais",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Oportunidade de Revenda Paiva Morais Semijoias",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },

  icons: {
    icon: [
      { url: "/favicon-light.ico", media: "(prefers-color-scheme: light)" },
      { url: "/favicon-dark.ico", media: "(prefers-color-scheme: dark)" },
    ],
  },
}

export const viewport: Viewport = {
  themeColor: "#08BBB7",
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${_inter.variable} ${_playfair.variable} ${_brand.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
          <CookieBanner />
        </ThemeProvider>
        <Analytics />
        <Script
  id="microsoft-clarity"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: `
      (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "wy9dka9c73");
    `,
  }}
/>
      </body>
    </html>
  )
}
