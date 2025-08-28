import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const Contact = () => {
  const openWhatsApp = () => {
    // Remplace par ton numéro WhatsApp au format international
    const phoneNumber = "+33123456789";
    const message = encodeURIComponent("Bonjour, je suis intéressé par ChatFloww et j'aimerais en savoir plus !");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  const openDemo = () => {
    window.open("https://www.youtube.com/watch?v=DEMO-LINK", "_blank");
  };

  return (
    <section id="contact" className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Contactez-nous facilement
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Vous avez des questions ou souhaitez en savoir plus sur ChatFloww ? 
            Parlez-nous directement sur WhatsApp et obtenez une réponse rapide.
          </p>
        </div>
        
        <div className="text-center mb-12">
          <Button 
            onClick={openWhatsApp}
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-green-500/30 transition-all duration-300"
            size="lg"
          >
            <MessageCircle className="w-6 h-6 mr-3" />
            Demandez votre essai gratuit avec accès illimité pendant 24H
          </Button>
        </div>

        {/* CTA Final */}
        <div className="bg-gradient-card p-12 rounded-3xl shadow-glow border border-primary/20 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ne perdez plus une seconde, boostez vos ventes avec ChatFloww.
          </h3>
          
          <Button 
            onClick={openDemo}
            variant="cta"
            size="lg"
            className="px-8 py-6 text-lg shadow-glow hover:shadow-glow"
          >
            ▶ Voir la démo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;