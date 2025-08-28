import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-dashboard.jpg";

const Hero = () => {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    pricingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary-glow/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-40 right-20 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-pulse delay-1000" />
      
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
          Double ta vitesse de chat,{" "}
          <span className="bg-gradient-to-r from-primary-glow to-accent bg-clip-text text-transparent">
            multiplie tes revenus.
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          ChatFloww est l'outil ultime des chatters qui veulent répondre 2x plus vite, 
          gérer plus de conversations, et booster leurs ventes.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            onClick={scrollToPricing}
            variant="hero"
            size="lg"
            className="px-8 py-6 text-lg"
          >
            Commence maintenant
          </Button>
          
          <Button 
            variant="hero-outline"
            size="lg"
            className="px-8 py-6 text-lg"
          >
            Voir la démo
          </Button>
        </div>
        
        {/* Hero Image */}
        <div className="mb-12 max-w-4xl mx-auto">
          <img 
            src={heroImage} 
            alt="Interface ChatFloww - Tableau de bord moderne avec conversations et réponses rapides"
            className="rounded-2xl shadow-hero border border-primary-foreground/20 w-full"
          />
        </div>
        
        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-primary-foreground">
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">2x</div>
            <div className="text-primary-foreground/80">Plus rapide</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">3-4x</div>
            <div className="text-primary-foreground/80">Plus de revenus</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">100+</div>
            <div className="text-primary-foreground/80">Phrases prêtes</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;