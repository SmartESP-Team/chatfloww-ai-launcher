import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import RevenueAnimation from "@/components/RevenueAnimation";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Language Switcher */}
      <div className="fixed top-4 right-4 z-50">
        <LanguageSwitcher />
      </div>
      
      {/* Revenue Animation */}
      <RevenueAnimation />
      
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Contact />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;