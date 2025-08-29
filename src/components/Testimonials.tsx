import { Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Testimonials = () => {
  const { t } = useLanguage();
  
  const testimonials = [
    {
      text: t('testimonial1.text'),
      author: t('testimonial1.author'),
      rating: 5
    },
    {
      text: t('testimonial2.text'),
      author: t('testimonial2.author'), 
      rating: 5
    },
    {
      text: t('testimonial3.text'),
      author: t('testimonial3.author'),
      rating: 5
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            💬 Leur chatting n’a plus rien à voir avec le classique. 
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Désormais, il est structuré, rapide et performant.
            Rejoignez des milliers de chatters qui transforment leurs résultats avec ChatFloww
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-2xl border border-primary/20 shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-5 h-5 fill-primary text-primary" 
                  />
                ))}
              </div>
              
              <blockquote className="text-card-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </blockquote>
              
              <div className="border-t border-primary/10 pt-4">
                <div className="font-semibold text-primary">
                  {testimonial.author}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
