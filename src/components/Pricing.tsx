import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const Pricing = () => {
  const handleStripeCheckout = (plan: string) => {
    // Pour l'instant, on simule l'ouverture de Stripe
    // TODO: Intégrer avec Stripe Checkout
    console.log(`Redirection vers Stripe pour le plan: ${plan}`);
    // window.open('stripe_checkout_url', '_blank');
  };

  const features = [
    "Bibliothèque de phrases illimitée",
    "Catégories personnalisables",
    "Copie en un clic",
    "Phrases de pros incluses",
    "Support prioritaire",
    "Mises à jour gratuites"
  ];

  return (
    <section id="pricing" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Choisis ton plan
          </h2>
          <p className="text-xl text-muted-foreground">
            Investis dans ton succès. Rentabilise en quelques jours.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Plan Mensuel */}
          <div className="bg-gradient-card p-8 rounded-2xl shadow-card hover:shadow-glow transition-all duration-300 border-2 border-transparent hover:border-primary/20">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">Mensuel</h3>
              <div className="flex items-center justify-center mb-4">
                <span className="text-5xl font-bold text-foreground">$19</span>
                <span className="text-xl text-muted-foreground ml-2">/mois</span>
              </div>
              <p className="text-muted-foreground">
                Parfait pour commencer
              </p>
            </div>
            
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center text-foreground">
                  <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            
            <Button 
              onClick={() => handleStripeCheckout('monthly')}
              variant="cta"
              className="w-full py-6 text-lg"
              size="lg"
            >
              Souscrire avec Stripe
            </Button>
          </div>
          
          {/* Plan Annuel */}
          <div className="bg-gradient-card p-8 rounded-2xl shadow-glow border-2 border-primary relative">
            <Badge 
              className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-cta text-primary-foreground px-6 py-2 text-sm font-semibold"
            >
              Économise 56% 🔥
            </Badge>
            
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">Annuel</h3>
              <div className="flex items-center justify-center mb-2">
                <span className="text-5xl font-bold text-foreground">$100</span>
                <span className="text-xl text-muted-foreground ml-2">/an</span>
              </div>
              <div className="text-sm text-muted-foreground mb-4">
                <span className="line-through">$228/an</span> → Économie de $128
              </div>
              <p className="text-muted-foreground">
                Le choix des pros
              </p>
            </div>
            
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center text-foreground">
                  <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            
            <Button 
              onClick={() => handleStripeCheckout('yearly')}
              variant="cta"
              className="w-full py-6 text-lg"
              size="lg"
            >
              Souscrire avec Stripe
            </Button>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            💳 Paiement sécurisé par Stripe • 🔒 Activation instantanée • ✅ Satisfaction garantie
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;