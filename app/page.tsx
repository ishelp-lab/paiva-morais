import { Navbar } from "@/components/landing/navbar"
import { HeroSection } from "@/components/landing/hero-section"
import { BenefitsSection } from "@/components/landing/benefits-section"
import { AudienceSection } from "@/components/landing/audience-section"
import { StepsSection } from "@/components/landing/steps-section"
import { ObjectionsSection } from "@/components/landing/objections-section"
import { ProductsShowcase } from "@/components/landing/products-showcase"
import { TestimonialsSection } from "@/components/landing/testimonials-section"
import { SignupForm } from "@/components/landing/signup-form"
import { FaqSection } from "@/components/landing/faq-section"
import { FinalCta } from "@/components/landing/final-cta"
import { Footer } from "@/components/landing/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <BenefitsSection />
      <AudienceSection />
      <StepsSection />
      <ObjectionsSection />
      <ProductsShowcase />
      <TestimonialsSection />
      <SignupForm />
      <FaqSection />
      <FinalCta />
      <Footer />
    </main>
  )
}