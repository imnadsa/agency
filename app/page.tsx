import Hero from "@/components/hero"
import Advantages from "@/components/advantages"
import Services from "@/components/services"
import Clients from "@/components/clients"
import AiSection from "@/components/ai-section"
import CasesSection from "@/components/cases-section"
import ContactSection from "@/components/contact-section"
import FaqSection from "@/components/faq-section"
import DemoSection from "@/components/demo-section"
import AuditSection from "@/components/audit-section"
import BlogSection from "@/components/blog-section"
import TimelineSection from "@/components/timeline-section"
import IntegrationsSection from "@/components/integrations-section"

export default function Home() {
  return (
    <>
      <Hero />
      <Clients />
      <Advantages />
      <Services />
      <AiSection />
      <DemoSection />
      <CasesSection />
      <FaqSection />
      <AuditSection />
      <BlogSection />
      <TimelineSection />
      <IntegrationsSection />
      <ContactSection />
    </>
  )
}
