import { useLanguage } from "@/contexts/LanguageContext";

const PrivacyPolicy = () => {
  const { t } = useLanguage();

  return (
    <section id="privacy" className="py-20 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            📜 Politique de Confidentialité & Protection de ChatFloww
          </h2>
        </div>
        
        <div className="bg-card rounded-2xl p-8 shadow-lg border border-border space-y-8">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Propriété intellectuelle</h3>
            <p className="text-muted-foreground leading-relaxed">
              L'outil ChatFloww, son nom, son logo, son interface et l'ensemble de ses fonctionnalités sont protégés par les lois en vigueur sur le droit d'auteur et la propriété intellectuelle.
              Toute reproduction, distribution, modification ou utilisation non autorisée de ChatFloww, en totalité ou en partie, est strictement interdite sans l'accord écrit de [Ton Nom / Ton Entreprise].
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Confidentialité et données</h3>
            <p className="text-muted-foreground leading-relaxed">
              Les informations collectées via ChatFloww (données de connexion, préférences d'utilisation, messages, etc.) sont utilisées uniquement pour améliorer l'expérience utilisateur et ne seront jamais revendues à des tiers sans consentement.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Responsabilité et usage</h3>
            <p className="text-muted-foreground leading-relaxed">
              En utilisant ChatFloww, vous acceptez de respecter son usage conforme à la loi et aux présentes conditions.
              Toute tentative de copie, piratage, rétro-ingénierie ou redistribution non autorisée de l'outil entraînera des poursuites judiciaires conformément aux articles L335-2 et suivants du Code de la Propriété Intellectuelle.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Disclaimer</h3>
            <p className="text-muted-foreground leading-relaxed">
              Nous nous réservons le droit de suspendre ou de supprimer l'accès à ChatFloww en cas de non-respect de ces règles. L'utilisation frauduleuse, abusive ou illicite pourra donner lieu à des sanctions civiles et pénales.
            </p>
          </div>

          <div className="border-t border-border pt-6">
            <h3 className="text-xl font-bold text-foreground mb-4">Contact</h3>
            <p className="text-muted-foreground">
              Pour toute question concernant cette politique ou pour signaler un abus :<br />
              📧 <a href="mailto:smartespservices@gmail.com" className="text-primary hover:underline">
                smartespservices@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;