import HeroPage from "@/components/home/HeroPage";
import IconsSection from "@/components/home/IconsSection";
import AboutSection from "@/components/home/AboutSection";
import StatsSection from "@/components/home/StatsSection";
import PortfolioSection from "@/components/home/PortfolioSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import PricingSection from "@/components/home/PricingSection";
import ValueSection from "@/components/home/ValueSection";
import FaqSection from "@/components/home/FaqSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import Footer from "@/components/general/Footer";

export default function Home() {
  return (
    <div>
      <HeroPage />
      <IconsSection />
      <AboutSection />
      <StatsSection />
      <PortfolioSection />
      <FeaturesSection />

      <PricingSection />
      <TestimonialsSection />
      <ValueSection />

      <FaqSection />
    </div>
  );
}
