import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AlertBanner from "@/components/AlertBanner";
import QuickLinks from "@/components/QuickLinks";
import CtaSection from "@/components/CtaSection";
import FeaturesSection from "@/components/FeaturesSection";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AlertBanner />
        <QuickLinks />
        <CtaSection />
        <FeaturesSection />
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
}
