import { FileText, MousePointer, TrendingUp } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: FileText,
      title: "Classe tes phrases et accroches",
      description: "Organise tes meilleures punchlines par catégories : PPV, upsells, objections...",
      step: "1"
    },
    {
      icon: MousePointer,
      title: "Clique → colle instantanément",
      description: "Un simple clic et ta phrase parfaite est collée dans ton chat. Fini les hésitations !",
      step: "2"
    },
    {
      icon: TrendingUp,
      title: "Réponds plus vite, encaisses plus",
      description: "Gère plus de clients simultanément et multiplie tes revenus sans effort.",
      step: "3"
    }
  ];

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Comment ça marche ?
          </h2>
          <p className="text-xl text-muted-foreground">
            Simple, efficace, révolutionnaire.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="text-center relative">
                {/* Step number */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg shadow-hero">
                  {step.step}
                </div>
                
                <div className="bg-card p-8 rounded-2xl shadow-card hover:shadow-glow transition-all duration-300">
                  <div className="inline-flex p-6 rounded-xl bg-gradient-hero mb-6">
                    <Icon className="w-10 h-10 text-primary-foreground" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {step.description}
                  </p>
                </div>
                
                {/* Connector arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2">
                    <div className="w-12 h-0.5 bg-gradient-hero"></div>
                    <div className="absolute -right-1 -top-1 w-0 h-0 border-l-4 border-l-primary border-y-2 border-y-transparent"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;