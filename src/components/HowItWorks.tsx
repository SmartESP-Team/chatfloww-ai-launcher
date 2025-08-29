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
    <section 
      className="py-20 px-6 bg-muted/30 relative overflow-hidden"
      style={{
        backgroundImage: `url('data:image/svg+xml,${encodeURIComponent(`
          <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(99, 102, 241, 0.03)" stroke-width="1"/>
              </pattern>
              <radialGradient id="glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" style="stop-color:rgba(99, 102, 241, 0.05);stop-opacity:1" />
                <stop offset="100%" style="stop-color:rgba(99, 102, 241, 0);stop-opacity:0" />
              </radialGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            <rect width="100%" height="100%" fill="url(#glow)" />
          </svg>
        `)}')`,
        backgroundSize: '100px 100px, 200% 200%',
        backgroundPosition: '0 0, 50% 50%'
      }}
    >
      {/* Overlay décoratif subtil */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-transparent pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
           ChatFloww leur fait exploser les ventes… et toi ? 🔥
          </h2>
          <p className="text-xl text-muted-foreground">
            Direct. Efficace. Boom ! 💥
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="text-center relative">
                {/* Step number */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg shadow-hero z-20">
                  {step.step}
                </div>
                
                <div className="bg-card/95 backdrop-blur-sm p-8 rounded-2xl shadow-card hover:shadow-glow transition-all duration-300 relative z-10">
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
                  <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-10">
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
