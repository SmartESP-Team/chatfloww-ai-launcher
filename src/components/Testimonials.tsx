import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      text: "Avec ChatFloww, j'ai vendu 3 médias en un rien de temps ! Mon texte est bien organisé et je gagne en clarté. 💸",
      author: "Sarah L.",
      role: "créatrice de contenu",
      rating: 5
    },
    {
      text: "Depuis que j'utilise ChatFloww, j'ai doublé ma vitesse de réponse. Je garde mes subs engagés sans stresser. ⚡",
      author: "Kevin M.",
      role: "chatter indépendant",
      rating: 5
    },
    {
      text: "Grâce à ChatFloww, je gère mes phrases en un clic et j'évite que mon manager me mette la pression. 🚀",
      author: "Julie R.",
      role: "modèle créatrice",
      rating: 5
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            💬 Ce que disent nos utilisateurs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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
                <div className="text-sm text-muted-foreground">
                  {testimonial.role}
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