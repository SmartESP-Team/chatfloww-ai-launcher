import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import RevenueAnimation from "@/components/RevenueAnimation";
import { LanguageProvider } from "@/contexts/LanguageContext";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen relative">
        {/* Header */}
        <Header />
        
        {/* Revenue Animation */}
        <RevenueAnimation />
        
        {/* Main content with top padding for fixed header */}
        <div className="pt-20">
          <Hero />
          <Features />
          <HowItWorks />
          <Testimonials />
          <Contact />
          <FinalCTA />
          <Footer />
        </div>
      </div>
    </LanguageProvider>
  );
};

export default Index;