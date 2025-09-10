import { useLanguage } from "@/contexts/LanguageContext";

const PrivacyPolicy = () => {
  const { t } = useLanguage();
  
  return (
    <section id="privacy" className="py-20 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('privacy.title')}
          </h2>
        </div>
        
        <div className="bg-card rounded-2xl p-8 shadow-lg border border-border space-y-8">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">{t('privacy.intellectual.title')}</h3>
            <p className="text-muted-foreground leading-relaxed">{t('privacy.intellectual.content')}</p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">{t('privacy.data.title')}</h3>
            <p className="text-muted-foreground leading-relaxed">
              {t('privacy.data.content')}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">{t('privacy.responsibility.title')}</h3>
            <p className="text-muted-foreground leading-relaxed">
              {t('privacy.responsibility.content')}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">{t('privacy.disclaimer.title')}</h3>
            <p className="text-muted-foreground leading-relaxed">
              {t('privacy.disclaimer.content')}
            </p>
          </div>

          <div className="border-t border-border pt-6">
            <h3 className="text-xl font-bold text-foreground mb-4">{t('privacy.contact.title')}</h3>
            <p className="text-muted-foreground">
              {t('privacy.contact.content')}<br />
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