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
            Rejoignez les chatter d'élite ! Contactez-nous maintenant ! 💥
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Prêt à passer au niveau supérieur sur ChatFloww ? WhatsApp nous et d
            ébloquez votre premier accès gratuit pour intégrer les chatter d'élite ! 🔥⚡
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
          
          <div className="text-center space-y-4">
            <Button
              onClick={() => window.open("/downloads/chatfloww-setup.exe", "_blank")} 
              variant="cta"
              size="lg"
              className="px-12 py-8 text-xl font-bold shadow-glow hover:shadow-glow relative overflow-hidden group transform transition-all duration-300 hover:scale-105 animate-pulse hover:animate-none"
            >
              <span className="relative z-10 flex items-center gap-3">
                <span className="text-2xl animate-bounce">⬇️</span>
                Télécharger ChatFloww
                <span className="text-2xl animate-bounce delay-150">💎</span>
              </span>
              
              {/* Effet de vague au survol */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-glow opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              
              {/* Particules brillantes */}
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute w-2 h-2 bg-white/60 rounded-full animate-ping top-2 left-4" style={{ animationDelay: '0s' }} />
                <div className="absolute w-1 h-1 bg-white/40 rounded-full animate-ping top-4 right-8" style={{ animationDelay: '0.5s' }} />
                <div className="absolute w-1.5 h-1.5 bg-white/50 rounded-full animate-ping bottom-3 left-12" style={{ animationDelay: '1s' }} />
              </div>
            </Button>
            
            <p className="text-sm text-muted-foreground animate-fade-in">
              Après le téléchargement, <span className="font-semibold text-primary">cliquez sur le bouton WhatsApp</span> 
              pour valider votre accès et rejoindre les chatter d'élite 🚀
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;