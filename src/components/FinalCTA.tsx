import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  const openDemo = () => {
    window.open("https://www.youtube.com/watch?v=DEMO-LINK", "_blank");
  };

  return (
    <section className="py-20 px-6 bg-gradient-hero relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-20 w-24 h-24 bg-primary-glow/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-pulse delay-500" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
          Chaque détail compte… maximise ton CA dès maintenant ! ⚡💎
        </h2>
        
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
          Les meilleurs chatters utilisent ChatFloww pour{" "}
          <span className="bg-gradient-to-r from-primary-glow to-accent bg-clip-text text-transparent font-bold">
            écraser la concurrence.
          </span>
        </p>
        
        <div className="flex justify-center">
          <Button 
            onClick={openDemo}
            variant="cta"
            size="lg"
            className="px-12 py-6 text-xl font-bold shadow-glow hover:shadow-glow"
          >
            ▶ Voir la démo
          </Button>
        </div>
        
        {/* Testimonial style quote */}
        <div className="mt-12 bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20">
          <blockquote className="text-lg text-primary-foreground/90 italic">
            "Avec ChatFloww, je triple mon avance : mes phrases perso sont
            toutes prêtes en un clic, et l’inspiration vient naturellement ! 🚀💎."
          </blockquote>
          <div className="mt-4 text-primary-foreground/70">
            — Sarah M., Top Chatter
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
