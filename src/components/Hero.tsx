import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-dashboard.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary-glow/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-40 right-20 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-pulse delay-1000" />
      
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
          {t('hero.title')}
        </h1>
        
        <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          {t('hero.subtitle')}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            onClick={scrollToContact}
            variant="hero"
            size="lg"
            className="px-8 py-6 text-lg"
          >
            {t('hero.cta1')}
          </Button>
           
        </div>
        
        {/* Hero Image */}
        <div className="mb-12 max-w-4xl mx-auto">
          <img 
            src="https://i.postimg.cc/nVjwmW03/Green-and-Yellow-Playful-Illustrative-What-are-the-parts-of-a-Plant-Presentation-4.png"
            alt="Interface ChatFloww - Tableau de bord moderne avec conversations et réponses rapides"
            className="rounded-2xl shadow-hero border border-primary-foreground/20 w-full"
          />
        </div>
        
        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-primary-foreground">
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">2x</div>
            <div className="text-primary-foreground/80">{t('hero.stat1')}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">3-4x + $$$💰</div>
            <div className="text-primary-foreground/80">{t('hero.stat2')}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">10.0000+</div>
            <div className="text-primary-foreground/80">{t('hero.stat3')}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
