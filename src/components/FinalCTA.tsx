import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const FinalCTA = () => {
  const { t } = useLanguage();
  
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
          {t('finalCta.title')}
        </h2>
        
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
          <span className="bg-gradient-to-r from-primary-glow to-accent bg-clip-text text-transparent font-bold">
            {t('finalCta.subtitle')}
          </span>
        </p>
        
        <div className="flex justify-center">
        
        </div>
        
        {/* Testimonial style quote */}
        <div className="mt-12 bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20">
          <blockquote className="text-lg text-primary-foreground/90 italic">
            {t('finalCta.testimonial')}
          </blockquote>
          <div className="mt-4 text-primary-foreground/70">
            {t('finalCta.author')}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;