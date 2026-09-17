import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { WhySection } from "@/components/why-section"
import { PurposeSection } from "@/components/purpose-section"
import { SolutionsSection } from "@/components/solutions-section"
import { ServicesSection } from "@/components/services-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { ProductsSection } from "@/components/products-section"
import { ContactSection } from "@/components/contact-section"
import { SiteFooter } from "@/components/site-footer"

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <WhySection />
        <PurposeSection />
        <SolutionsSection />
        <ServicesSection />
        <HowItWorksSection />
        <ProductsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}
