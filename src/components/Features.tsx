import { Clock, DollarSign, BookOpen, Zap } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Clock,
      title: "Double la vitesse de chat",
      description: "Réponds en 3 sec max, sans chercher tes phrases.",
      color: "text-primary"
    },
    {
      icon: DollarSign,
      title: "Multiplie ton chiffre d'affaires (x3 à x4)",
      description: "Plus de conversations = plus de ventes.",
      color: "text-accent"
    },
    {
      icon: BookOpen,
      title: "Ta base perso de punchlines",
      description: "Enregistre et réutilise les phrases qui vendent.",
      color: "text-primary"
    },
    {
      icon: Zap,
      title: "Accès aux textes de pros",
      description: "Profite d'un arsenal de messages éprouvés pour PPV & upsells.",
      color: "text-accent"
    }
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Pourquoi ChatFloww ?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Les outils qui font la différence entre un chatter amateur et un pro.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-gradient-card p-8 rounded-2xl shadow-card hover:shadow-glow transition-all duration-300 text-center group hover:scale-105"
              >
                <div className={`inline-flex p-4 rounded-xl bg-gradient-hero mb-6 ${feature.color}`}>
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;