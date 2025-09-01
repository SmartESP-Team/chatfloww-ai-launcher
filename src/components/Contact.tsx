import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  
  const openGmail = () => {
    const email = "smartespservices@gmail.com";
    const subject = encodeURIComponent("Demande d'information - ChatFloww");
    const body = encodeURIComponent("Bonjour,\n\nJe suis intéressé par ChatFloww et j'aimerais en savoir plus sur vos services.\n\nCordialement");
    const gmailUrl = `mailto:${email}?subject=${subject}&body=${body}`;
    window.open(gmailUrl, "_blank");
  };

  const openDemo = () => {
    window.open("https://www.youtube.com/watch?v=DEMO-LINK", "_blank");
  };

  return (
    <section id="contact" className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>
        
        <div className="text-center mb-12">
          <Button 
            onClick={openGmail}
            className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-12 py-8 text-xl font-bold rounded-3xl shadow-2xl hover:shadow-red-500/50 transition-all duration-300 transform hover:scale-105 border-2 border-red-400/50"
            size="lg"
          >
            <Mail className="w-8 h-8 mr-4" />
            {t('contact.gmail')}
          </Button>
        </div>

        {/* Product Details */}
        <div className="bg-gradient-card p-8 rounded-3xl shadow-glow border border-primary/20 mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">
            {t('contact.product.title')}
          </h3>
          
          <p className="text-lg text-primary font-semibold mb-4 text-center">
            {t('contact.product.subtitle')}
          </p>
          
          <div className="space-y-3 mb-6">
            <p className="text-foreground font-medium">{t('contact.product.feature1')}</p>
            <p className="text-foreground font-medium">{t('contact.product.feature2')}</p>
            <div className="ml-6 space-y-2">
              <p className="text-muted-foreground">{t('contact.product.script1')}</p>
              <p className="text-muted-foreground">{t('contact.product.script2')}</p>
              <p className="text-muted-foreground">{t('contact.product.script3')}</p>
            </div>
          </div>
          
          <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-4 mb-6">
            <p className="text-green-400 font-semibold text-center">
              {t('contact.guarantee')}
            </p>
          </div>
        </div>

        {/* CTA Final */}
        <div className="bg-gradient-card p-12 rounded-3xl shadow-glow border border-primary/20 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            {t('contact.cta.title')}
          </h3>
          
          <div className="text-center space-y-4">
            <Button
              onClick={() => window.open("https://bppuryte.mychariow.com/prd_vya04g", "_blank")} 
              variant="cta"
              size="lg"
              className="px-12 py-8 text-xl font-bold shadow-glow hover:shadow-glow relative overflow-hidden group transform transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-3">
                <span className="text-2xl">⬇️</span>
                {t('contact.download')}
                <span className="text-2xl">💎</span>
              </span>
              
              {/* Effet de vague au survol */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-glow opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </Button>
            
            <p className="text-sm text-muted-foreground animate-fade-in">
              {t('contact.download.note')}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
