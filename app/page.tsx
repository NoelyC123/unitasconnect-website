import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import BulletinSignup from "@/components/BulletinSignup";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <PricingSection />
        <BulletinSignup />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
