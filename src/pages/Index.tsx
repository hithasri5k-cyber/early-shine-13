import { AccessibilityControls } from "@/components/AccessibilityControls";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ScreeningSection } from "@/components/ScreeningSection";
import { ResourcesSection } from "@/components/ResourcesSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <>
      <AccessibilityControls />
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ScreeningSection />
        <ResourcesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
