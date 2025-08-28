import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const Contact = () => {
  const openWhatsApp = () => {
    // Remplace par ton numéro WhatsApp au format international
    const phoneNumber = "+";
    const message = encodeURIComponent("Bonjour, je suis intéressé par ChatFloww et j'aimerais en savoir plus !");
    const whatsappUrl = `https://chat.whatsapp.com/GCeREoB6JJUCh9G6unkcru?mode=ems_share_t`;
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
            Rejoignez les chatter d’élite ! Contactez-nous maintenant ! 💥
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Prêt à passer au niveau supérieur sur ChatFloww ? WhatsApp nous et d
            ébloquez votre premier accès gratuit pour intégrer les chatter d’élite ! 🔥⚡
          </p>
        </div>
        
        <div className="text-center mb-12">
          <Button 
            onClick={openWhatsApp}
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-12 py-8 text-xl font-bold rounded-3xl shadow-2xl hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-105 animate-pulse hover:animate-none border-2 border-green-400/50"
            size="lg"
          >
            <MessageCircle className="w-8 h-8 mr-4 animate-bounce" />
            Demandez votre essai gratuit avec accès illimité pendant 24H
          </Button>
        </div>

        {/* CTA Final */}
        <div className="bg-gradient-card p-12 rounded-3xl shadow-glow border border-primary/20 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
           Passez à ChatFloww et transformez vos efforts en beaux gains ! 💸🔥
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
