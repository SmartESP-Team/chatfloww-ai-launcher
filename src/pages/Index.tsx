import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import RevenueAnimation from "@/components/RevenueAnimation";
import VideoPlayer from "@/components/VideoPlayer";
import PrivacyPolicy from "@/components/PrivacyPolicy";
import TeamMessage from "@/components/TeamMessage";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Header */}
      <Header />
      
      {/* Revenue Animation */}
      <RevenueAnimation />
      
      {/* Main content with top padding for fixed header */}
      <div className="pt-20">
        <Hero />
        <div className="py-20 px-6 bg-background">
          <VideoPlayer />
        </div>
        <Features />
        <HowItWorks />
        <Testimonials />
        <TeamMessage />
        <Contact />
        <FinalCTA />
        <PrivacyPolicy />
        <Footer />
      </div>
    </div>
  );
};

export default Index;