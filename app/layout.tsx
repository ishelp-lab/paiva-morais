import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display, Cinzel } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
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
  title: "Revendedora | Paiva Morais",
  description:
    "Ganhe dinheiro revendendo semijoias Paiva Morais. Sem investimento inicial, com suporte completo e lucro garantido. Cadastre-se agora!",
  generator: "Fhelipe Abel",

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
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}